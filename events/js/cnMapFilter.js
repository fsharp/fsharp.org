//
// cnMapFilter.js
//
// View data on a map, where changing the map filters the data,
// only showing items that have coordinates/address on map's currently displayed canvas.
//
//
// Copyright (c) 2009-2012 Chad Norwood
// Dual licensed under the MIT and GPL licenses:
//   http://www.opensource.org/licenses/mit-license.php
//   http://www.gnu.org/licenses/gpl.html
//

// cnMF, or window.cnMF, is the one and only global.  See cnMF.init() below

(function (){

	// ba-debug.js - use debug.log() instead of console.log()
	// debug.setLevel(0) turns off logging,
	// 1 is just errors and timers
	// 2 includes warn - these are things that should probably not happen, but nothing breaks if they do
	// 3 includes info - tracks user initiated clicks, etc. Does not include google maps zoom, drags, etc.
	// 4 includes debug - network related and key data (fetching calendar data, geocoding, etc)
	// 5+ includes log, which can be anything
	var lvl = window.location.href.match(/\bdebuglevel=(\d)/i);
	if (lvl && lvl[1]) {
		debug && debug.setLevel(parseInt(lvl[1],10));
		//console.log("setLevel=",lvl[1]);
	} else {
		debug && debug.setLevel(9); // turns off all logging
	}
	debug.includeMsecs(true);

	//
	// Note on architecture of markers and events:
	// EventClass - info on one event, including associated marker
	// MarkerClass - info on one marker, its coords, google marker, and event list
	// MarkersClass - contains all markers and info window
	//

	// EventClass - event objects created from this class contain all the
	// info needed for an event, including original info from the calendar data
	// plus coordinates and accurate address from geolocation service.
	// This is a core object to mapFilter.
	var EventClass = makeClass();
	EventClass.prototype.init = function ( params ) {
		// defaults for event object
		this.id = -1;
		this.lt = 0;
		this.lg = 0;
		this.validCoords = false;
		this.isDisplayed = false;
		this.markerObj = null;
		this.addrOrig = '';
		this.addrToGoogle = '';
		this.addrFromGoogle = '';

		// overwrite defaults with params
		for (var ii in params) {
			this[ii] = params[ii];
		}
		// these are based on params
		this.dateStartObj = cnMF.parseDate(this.dateStart);
		this.dateEndObj = cnMF.parseDate(this.dateEnd);
		return this;
	};
	EventClass.prototype.getCoordsStr = function(){
		return this.validCoords ?  this.lt + "," + this.lg : '';
	};
	EventClass.prototype.getDirectionsUrlStr = function(){
		return 'http://maps.google.com/maps?f=d&q=' + this.addrToGoogle.replace(/ /g, '+').replace(/"/g, '%22');
	};
	EventClass.prototype.insideCurMap = function(mapbox){
		return this.validCoords ? mapbox.contains(new google.maps.LatLng(this.lt, this.lg)) : false;
	};
	// Returns true if current event occurs before start or after end.
	EventClass.prototype.isFilteredbyDate = function(startDayOffset,endDayOffset){
		var nowMs = new Date().getTime();
		var startTime = nowMs + startDayOffset *24*3600*1000; // ms
		var endTime   = nowMs + endDayOffset *24*3600*1000; // ms
		if (this.dateEndObj.getTime() < startTime) return true;
		if (this.dateStartObj.getTime() > endTime) return true;
		return false;
	};
	EventClass.prototype.setId = function ( id ) {
		this.id = id;
	};
	EventClass.prototype.setMarkerObj = function (markerObj) {
		this.markerObj = markerObj;
	};
	// returns markerObj or null if no marker created
	EventClass.prototype.getMarkerObj = function () {
		return this.markerObj;
	};
	EventClass.prototype.getGoogleMarker = function () {
		return this.markerObj && this.markerObj.googleMarker
	};



	// 
	// MarkersClass - designed to contain all google markers for map.
	// Note that one marker can contain multiple events.
	var MarkersClass = makeClass();
	MarkersClass.prototype.init = function ( gMap ) {
		// allMarkers obj is the main obj, where key is the coordinates and the
		// value is markerObject - see createMarker()
		this.allMarkers = {};
		this.gMap = gMap;  // the google map object
		this.infoWindowMarker = null; 
		this.infoWindow = new google.maps.InfoWindow({
			size: new google.maps.Size(50,50)
		});
		var myMarkers = this;
		google.maps.event.addListener(this.infoWindow, 'closeclick', function() {
			myMarkers.closeInfoWindow();
		});
	} 
	MarkersClass.prototype.infoWindowIsOpen = function(){
		return this.infoWindowMarker != null;
	}
	MarkersClass.prototype.openInfoWindow = function(content, markerObj){
		if (this.infoWindowMarker) {
			// close infoWindow attached to another google marker
			this.infoWindow.close(); // API3 Use setPosition() instead of closing / opening?
		}
		this.infoWindowMarker = markerObj.googleMarker;
		this.infoWindow.setContent(content);
		this.infoWindow.open(this.gMap, markerObj.googleMarker);
		cnMF.coreOptions.cbOpenedInfoWindow();
	}
	MarkersClass.prototype.closeInfoWindow = function(){
		this.infoWindow.close();
		this.infoWindowMarker = null;
		cnMF.coreOptions.cbClosedInfoWindow();
	}
	// getMarkerObj() returns the marker object or null if not found
	// coordsStrOrEvent can be one of three things: coordinates string, event object, event index number
	MarkersClass.prototype.getMarkerObj = function(coordsStrOrEvent){
		// TODO also accept event obj (then we get coords from that)
		if (typeof coordsStrOrEvent === 'string') {
			return this.allMarkers[coordsStrOrEvent]; // coordsStr

		} else if (typeof coordsStrOrEvent === 'object') {
			// note that an event object can be created without a marker object, 
			// if need to check marker existance, best use eventObj.getMarkerObj()
			return this.allMarkers[coordsStrOrEvent.getCoordsStr()]; // coordsStrOrEvent = eventObj
			
		} else if (typeof coordsStrOrEvent === 'number') {
			// note that an event object can be created without a marker object, 
			// if need to check marker existance, best use eventObj.getMarkerObj()
			return this.allMarkers[cnMF.eventList[coordsStrOrEvent].getCoordsStr()]; // coordsStrOrEvent = event index

		} else {
			debug.warn("**** getMarkerObj(): only accept event obj or coords string, not: ", typeof coordsStrOrEvent, coordsStrOrEvent);
			return null;
		}
	}
	// getGoogleMarker() returns the GMarker object created by google.
	MarkersClass.prototype.getGoogleMarker = function(coordsStrOrEvent){
		return this.getMarkerObj(coordsStrOrEvent).googleMarker;
	}
	// getEvents() returns an array of all event objects at the provided coordinates.
	MarkersClass.prototype.getEvents = function(coordsStrOrEvent){
		return this.getMarkerObj(coordsStrOrEvent).eventList;
	}
	// showEvent() shows google marker via APIv3 setVisible, creating if necessary
	MarkersClass.prototype.showEvent = function(eventObj){
		var markerObj = this.getMarkerObj(eventObj) || this.createMarkerObj(eventObj);

		markerObj.googleMarker.setVisible(true);
		eventObj.setMarkerObj(markerObj);
			
		// make sure event is in markerObj's event list
		for (var ii=0; ii < markerObj.eventList.length; ii++) {
			if (markerObj.eventList[ii] === eventObj.id) {
				// found it, so no need to add
				return;
			}
		}
		// event was not found in markerObj, so add it.
		markerObj.eventList.push(eventObj.id);
	}
	// createMarkerObj() creates google markers and event listener.
	MarkersClass.prototype.createMarkerObj = function(eventObj){
		var coordsStr = eventObj.getCoordsStr();
		debug.log("createMarkerObj() creating marker, eventObj.id=", eventObj.id, coordsStr, eventObj);
		return this.allMarkers[coordsStr] = MarkerClass(eventObj, this.gMap);
	}
	MarkersClass.prototype.hideEvent = function(eventObj){
		var markerObj = this.getMarkerObj(eventObj);
		if (!markerObj) {
			return;
		}
		for (var ii=0; ii < markerObj.eventList.length; ii++) {
			if (markerObj.eventList[ii] === eventObj.id) {
				// found it, remove
				markerObj.eventList.splice(ii, 1);
			}
		}
		if (markerObj.eventList.length === 0) {
			markerObj.googleMarker.setVisible(false);
		}
	}


	// markerObj used in markersClass
	var MarkerClass = makeClass();
	MarkerClass.prototype.init = function ( eventObj, gMap ) {
		this.coordsStr = eventObj.getCoordsStr();
		this.eventList = [eventObj.id];
		this.googleMarker = new google.maps.Marker({
			position: new google.maps.LatLng(eventObj.lt, eventObj.lg),
			map: gMap
		});

		// associate with eventObj
		eventObj.setMarkerObj(this);

		// add listener and callback hooks
		var thisMarkerObj = this;
		google.maps.event.addListener(thisMarkerObj.googleMarker, 'click', function() {
			debug.log("googleMarker clicked at "+ thisMarkerObj.coordsStr);
			cnMF.coreOptions.cbMarkerClicked(thisMarkerObj); // cbMarkerClicked function should call openInfoWindow()
			try {
				_gaq.push(['_trackEvent', 'Interaction', 'gMarker', 'click']);
			} catch (e) {}
		});
		return this;
	} 
	MarkerClass.prototype.getEvents = function(){
		return this.eventList;
	}
	MarkerClass.prototype.getEvent = function(markerEventIndex){
		return this.eventList[markerEventIndex];
	}


	// TODO: do we use this anymore?
	function eventType(params){
		// http://stackoverflow.com/questions/383402/is-javascript-s-new-keyword-considered-harmful
		if (!(this instanceof eventType))
			return new eventType(params);

		this.filtersActive = false;
		for (var ii in params) {
			this[ii] = params[ii];
		}
	}


	//
	//  END PRIVATE FUNCTIONS and CLASSES
	//


	var cnMF = {
		gcTitle: 'A Calendar', // this should always get overwritten by calendar data
		gcLink: '',
		reportData: {},
		processGeocodeTimer: 0,
		numDisplayed: 0,
		filteredByDate: false,
		filteredByMap: false,
		types: [],
		myMarkers: {},
		tz: {},
		eventList: []
	}

	// cnMF.init() starts it all
	//
	cnMF.init = function (coreOptions) {
		cnMF.coreOptions = coreOptions;
		cnMF.myMarkers = MarkersClass(coreOptions.gMap); // stores google map marker, and marker's corresponding events
		cnMF.curStartDay  = coreOptions.oStartDay;
		cnMF.curEndDay	= coreOptions.oEndDay;
		cnMF.origStartDay = coreOptions.oStartDay;
		cnMF.origEndDay   = coreOptions.oEndDay;
		
		// if any callback functions are not defined as functions, assign them to empty functions so 
		// code can assume they are functions after this point
		$.each(['cbOpenedInfoWindow','cbClosedInfoWindow','cbMapRedraw','cbMarkerClicked'], 
			function(index, cbfunc){
				if (typeof cnMF.coreOptions[cbfunc] !== 'function') {
					cnMF.coreOptions[cbfunc] = function() {}
				}
			}
		);
		cnMF.tz.offset = coreOptions.tzOffset ? coreOptions.tzOffset : ''; // Offset in hours and minutes from UTC
		cnMF.tz.name = coreOptions.tzName ? coreOptions.tzName : 'unknown'; // Olson database timezone key (ex: Europe/Berlin)
		cnMF.tz.dst = coreOptions.tzDst ? coreOptions.tzDst : 'unknown'; // bool for whether the tz uses daylight saving time
		cnMF.tz.computedFromBrowser = (cnMF.tz.name != 'unknown');
		
		cnMF.myGeo = cnMF.geocodeManager();
	}

	cnMF.countTotal = function () {
		return cnMF.eventList.length;
		// todo: support start/end
	}
	cnMF.countKnownAddresses = function () {
		var xx = 0;
		for (var ii=0; ii < cnMF.eventList.length; ii++) {
			if (cnMF.eventList[ii].validCoords) xx++;
		}
		//cnMF.reportData.knownAddr = xx;
		return xx;
	}
	cnMF.countUnknownAddresses = function(){
		var xx = 0;
		for (var ii in cnMF.eventList) {
		 if (! cnMF.eventList[ii].validCoords) xx++;
		}
		//cnMF.reportData.unknownAddr = xx;
		return xx;
	}
	cnMF.addEvent = function(params){ // old addEventObj
		var e = EventClass(params);
		e.setId(cnMF.eventList.length);
		//cnMF.debugObj(e);
		cnMF.eventList.push(e);
		return e;
	}
	cnMF.addEventType = function(params){
		var e = new eventType(params);
		e.id = cnMF.types.length;
		cnMF.types.push(e);
		return e;
	}
	// returns event obj given event index number
	cnMF.getEventObj = function(eventIndex){
		var x = cnMF.eventList[parseInt(eventIndex)];
		return x;
	}

	cnMF.addCal = function(gCalUrl, calData){ 
		// console.log("cnMF.addCal", gCalUrl, calData);
		
		if (!cnMF.calData) {
			cnMF.calData = {};
		}
		cnMF.calData[gCalUrl] = calData;

		//$.extend(cnMF, calData); // TODO2 this overwrites, figure out better way to display multiple calendar names
		/*
		calendarInfo.gCalUrl = gCalUrl;
		calendarInfo.totalEntries = ii;
		calendarInfo.totalEvents = cdata.feed.openSearch$totalResults.$t || ii;		
		calendarInfo.gcTitle = cdata.feed.title ? cdata.feed.title['$t'] : 'title unknown';
		calendarInfo.gcLink = cdata.feed.link ? cdata.feed.link[0]['href'] : '';
		calendarInfo.desc = cdata.feed.subtitle ? cdata.feed.subtitle['$t'] : 'subtitle unknown';
		*/
	}


	//
	// mapAllEvents() adjusts zoom and coords in order to fit all events on map
	//
	cnMF.mapAllEvents = function(){
		// first create the box that holds all event locations
		var box = null;
		var gMap = cnMF.coreOptions.gMap;
		var numValidCoords = 0;
		for (var i in cnMF.eventList) {
			var kk = cnMF.eventList[i];
			if (! kk.validCoords) continue; // skip unrecognized addresses
			numValidCoords++;
			//debug.log("mapAllEvents(): adding event "+ kk.id + ", "+ kk.name);

			if (box === null) {
				var corner = new google.maps.LatLng(kk.lt, kk.lg);
				box = new google.maps.LatLngBounds(corner, corner); 
			} else {
				box.extend( new google.maps.LatLng(kk.lt, kk.lg) );
			}
		}
		if (!box) {
			debug.log("mapAllEvents(): no events");
			return false;
		}
		debug.log("mapAllEvents(): setting new map, "+ numValidCoords + " of "+ cnMF.eventList.length + " with valid coords. bounds: " + box.toString());
		//zoom = gMap.getBoundsZoomLevel(box);
		//gMap.setCenter( box.getCenter(), (zoom < 2) ? zoom : zoom - 1  );
		gMap.fitBounds(box); // API3 see also panToBounds()
	}

	cnMF.processGeocode = function(gObj) {
		for (var ii in cnMF.eventList) {
			var kk = cnMF.eventList[ii];
			if (kk.addrToGoogle != gObj.addr1) {
				continue;
			}
			if (kk.validCoords) {
				debug.log( 'received duplicate geocode', gObj);
				continue;
			}

			if (gObj.lt) {
				kk.lt = gObj.lt;
				kk.lg = gObj.lg;
				kk.validCoords = true;
				kk.addrFromGoogle = gObj.addr2;
			}
			else if (gObj.error) {
				kk.addrFromGoogle = 'address unrecognizable';
				kk.error = gObj.error;
			}
		}
		// if geocoding takes longer than xx ms, then mapRedraw()
		var now = new Date().getTime();
		if (!cnMF.processGeocodeTimer) cnMF.processGeocodeTimer = now;

		if (now - cnMF.processGeocodeTimer > 1000) {
			debug.log( 'processGeocodeTimer:', now-cnMF.processGeocodeTimer)
			cnMF.processGeocodeTimer = now;
			//mapAllEvents();
			//onGeoDecodeComplete();
		}
	}



	// Checks all events, hiding/showing corresponding markers if need be.
	// Returns true if changes were made to map, false otherwise
	//
	cnMF.updateMarkers= function(){

		//debug.log( "cnMF.updateMarkers() called ..");
		var mapbox = cnMF.coreOptions.gMap.getBounds();
		//debug.log( "cnMF.updateMarkers() called, bounds:"+ mapbox.toString());

		//debug.time('checking all markers');
		var added = 0;
		var removed = 0;
		var unchanged = 0;
		var filtered = 0;
		cnMF.filteredByDate = false;
		cnMF.filteredByMap = false;
		//debug.log( "reset filteredByDate and filteredByMap to FALSE");

		// loop through all events and see which ones are in map, etc.
		for (var i in cnMF.eventList) {
			var kk = cnMF.eventList[i];

			insideCurMap = kk.insideCurMap(mapbox);
			//debug.log( "marker "+ (insideCurMap ? 'in':'out') +"side map. valid, id, obj: ", kk.validCoords, kk.id, kk);
			if (!insideCurMap && kk.validCoords) {
				//debug.log( " filteredByMap = true for ",kk);
				cnMF.filteredByMap = true;
			}

			filteredOut = kk.isFilteredbyDate(cnMF.curStartDay,cnMF.curEndDay);

			/* OLDTODO: fix filters - add search, categories, time
			if (events.types[kk.type].filtersActive) {
				//isFiltered = markers.type[kk.type].filter(kk);
				filteredOut = false;
			}
			*/
			if (filteredOut) {
				cnMF.filteredByDate = true;
				cnMF.myMarkers.hideEvent(kk);
				filtered++;
			}
			if (kk.isDisplayed && insideCurMap && !filteredOut) {
				unchanged++;
			}
			else if (kk.isDisplayed && (!insideCurMap || filteredOut)) {
				// hide all markers outside of map or current filters
				kk.isDisplayed = false;
				cnMF.myMarkers.hideEvent(kk);
				removed++;
			}
			else if (!kk.isDisplayed && insideCurMap && !filteredOut) {
				// display events new to map
				cnMF.myMarkers.showEvent(kk);
				kk.isDisplayed = true;
				added++;
			}
		}
		//debug.timeEnd('checking all markers');

		cnMF.numDisplayed = unchanged + added;
		//cnMF.reportData.numDisplayed = cnMF.numDisplayed;

		debug.debug(" updateMarkers() "+removed+" removed, "+added+" added, "+unchanged+" unchanged, "
		+cnMF.numDisplayed+" total ");

		return (removed || added);
	}


	// showDays(): Shows all events from newStartDay to newEndDay, called when date slider dragging stops
	// newStartDay to newEndDay are both number of days relative to today
	// Currently, newStartDay and newEndDay should be within original calendar start/end days (no ajax req'd)
	///
	cnMF.showDays = function (newStartDay, newEndDay) {
		// todo: query gcal
		cnMF.curStartDay = newStartDay;
		cnMF.curEndDay = newEndDay;
		cnMF.coreOptions.cbMapRedraw();  // triger updateMarkers();
	}


	cnMF.getGCalData = function(gCalUrl, startDays, endDays, callbacks ) {
		if (gCalUrl.search(/^http/i) < 0) {
			debug.warn("**** getGCalData(): bad url: "+ gCalUrl);
			return;
		}
		gCalUrl = gCalUrl.replace(/\/basic$/, '/full');
		//startmax = '2009-07-09T10:57:00-08:00';

		// TODO: change rfc3339 to accept StartDays
		startDate = new Date();
		startDate.setTime(startDate.getTime() + startDays*24*3600*1000);
		startmin = cnMF.rfc3339(startDate,false);
		debug.debug(" getGCalData(): start-min: "+startmin);

		endDate = new Date();
		endDate.setTime(endDate.getTime() + endDays*24*3600*1000);
		startmax = cnMF.rfc3339(endDate,true);
		debug.debug(" getGCalData(): start-max: "+startmax);

		// http://code.google.com/apis/calendar/docs/2.0/reference.html
		gCalObj = {
			'start-min': startmin,
			'start-max': startmax,
			'max-results': 200,
			'orderby'  : 'starttime',
			'sortorder': 'ascending',
			'singleevents': false
		};
		if (cnMF.tz.name != 'unknown') {
			gCalObj.ctz = cnMF.tz.name; // ex: 'America/Chicago'
			debug.debug(" Displaying calendar times using this timezone: "+ gCalObj.ctz);
		}
		$.ajax({
			url: gCalUrl + "?alt=json-in-script&callback=?",
			dataType: 'json',
			data: gCalObj,
			timeout: 12000, // 12 secs
			success: function(cdata) {
				parseGCalData(gCalUrl, cdata, startDate, endDate, callbacks);
			}, 
			complete: function (jqXHR, textStatus) {
				if (textStatus !== 'success') {
					debug.warn("**** getGCalData problem: ", textStatus, gCalUrl, jqXHR);
					if ('function' === typeof callbacks.onError) {
						callbacks.onError(jqXHR, textStatus);
					}
				}
			}
		});
	}

	function parseGCalData (gCalUrl, cdata, startDate, endDate, callbacks ) {
		var calendarInfo = {},
		    uniqAddr = {};

		debug.debug(" parseGCalData() calendar data: ",cdata);

		calendarInfo.gCalUrl = gCalUrl;
		calendarInfo.gcTitle = cdata.feed.title ? cdata.feed.title['$t'] : 'title unknown';
		calendarInfo.gcTitle.replace(/"/,'&quot;');
		calendarInfo.gcLink = cdata.feed.link ? cdata.feed.link[0]['href'] : '';
		calendarInfo.desc = cdata.feed.subtitle ? cdata.feed.subtitle['$t'] : 'subtitle unknown';
		
		// TODO2 move this to a method
		if (!cnMF.tz.computedFromBrowser) {
			cnMF.tz.name = cdata.feed.gCal$timezone.value;
			debug.debug(" Displaying calendar times using calendar timezone: "+ cnMF.tz.name);
			// TODO2 count in analytics how many people use timezones in browser vs calendar
		}

		for (var ii=0; cdata.feed.entry && cdata.feed.entry[ii]; ii++) {
			var curEntry = cdata.feed.entry[ii];
			if (!(curEntry['gd$when'] && curEntry['gd$when'][0]['startTime'])) {
				debug.debug(" skipping cal curEntry (no gd$when) %s (%o)", curEntry['title']['$t'], curEntry);
				continue;
			};
			var url = {};
			for (var jj=0; curEntry.link[jj]; jj++) {
				var curLink = curEntry.link[jj];
				if (curLink.type == 'text/html') {
					// looks like when rel='related', href is original event info (like meetup.com)
					// when rel='alternate', href is the google.com calendar event info
					url[curLink.rel] = curLink.href;
				}
			}
			kk = cnMF.addEvent({
				//type: eType.id,
				calTitle: calendarInfo.gcTitle,
				name: curEntry['title']['$t'],
				desc: curEntry['content']['$t'],
				addrOrig: curEntry['gd$where'][0]['valueString'] || '',  // addrOrig is the location field of the event
				addrToGoogle: curEntry['gd$where'][0]['valueString'] || '',
				gCalId: curEntry['gCal$uid']['value'],
				url: url.related || url.alternate, // TODO - is this what we want? see href above
				dateStart: cnMF.parseDate(curEntry['gd$when'][0]['startTime']),
				dateEnd: cnMF.parseDate(curEntry['gd$when'][0]['endTime'])
			});
			// make ready for geocode TODO: remove this? or move this line to addrToGoogle above
			kk.addrToGoogle = kk.addrToGoogle.replace(/\([^\)]+\)\s*$/, ''); // remove parens and text inside parens
			if (kk.addrToGoogle) {
				uniqAddr[kk.addrToGoogle] = 1;
			} else {
				debug.debug(" Skipping blank address for "+kk.name+" ["+kk.addrOrig+"]",kk);
			}
			debug.log("parsed curEntry "+ii+": ", kk.name, curEntry, kk);
		}
		calendarInfo.totalEntries = ii;
		calendarInfo.totalEvents = cdata.feed.openSearch$totalResults.$t || ii;		
		cnMF.addCal(gCalUrl, calendarInfo);
		cnMF.reportData['fn'] = calendarInfo.gcTitle.replace(/\W/,"_");

		debug.log("calling mapfilter.geocode(): ", uniqAddr );
		cnMF.myGeoDecodeComplete = false;
		cnMF.myGeo.addr2coords( uniqAddr,
			function (gObj) {
				cnMF.processGeocode(gObj); // TODO: this can be private
				if ('function' === typeof callbacks.onGeoDecodeAddr) callbacks.onGeoDecodeAddr();
			},
			function() {
				//onGeoDecodeComplete();
				cnMF.myGeoDecodeComplete = true;
				if ('function' === typeof callbacks.onGeoDecodeComplete) callbacks.onGeoDecodeComplete();
			}
		);
		if ('function' === typeof callbacks.onCalendarLoad) {
			callbacks.onCalendarLoad(calendarInfo);
		}
	}


	// geocodeManager handles the geocoding of addresses
	//	
	// TODO: use more than just google maps api
	//
	// http://tinygeocoder.com/blog/how-to-use/
	// http://github.com/straup/js-geocoder
	// http://www.geowebguru.com/articles/185-arcgis-javascript-api-part-1-getting-started
	//
	// TODO: use GeoAPI's reverse geocoder to get neighborhood (SOMA/Mission/marina, SF CA)
	//
	// TODO: create a local geocode cache server and mysql db?
	// http://code.google.com/apis/maps/articles/phpsqlajax.html
	///
	cnMF.geocodeManager = function( gOpts ) {

		// count addreses and unique addreses.
		// don't want duplicates - wasting calls to google
		
		var GeocodeManager = {}, // return obj
		    addrObjects = [],  // stores all address objects
		    resolveRequests = [],   // array of requestObjects, each obj has add, cb1, cb2

		    //uniqAddresses = {}, // stores addr objects
		    numAddresses = 0,
		    //numUniqAddresses = 0,
		    //numUniqAddrDecoded = 0,
		    //numUniqAddrErrors = 0,
		    geoCache = {},
		    numReqs = 0,
		    startTime = new Date().getTime(),

		    // Google specific geocoding variables
		    desiredRate = 100, // long-term average should be one query every 'desiredRate' ms
		    reqTimeout = 2000,    // reset after this
		    maxBurstReq = 4,   // if timeout gets delayed, say 500ms, we can send 'maxBurstReq' at a time till we catch up
		    maxRetries = 2;  // how many times an attempt to geocode service is made per address

		
		GeocodeManager.count = function() {
			var c = {
				uniqAddrDecoded: 0,
				uniqAddrErrors: 0,
				uniqAddrUnknown: 0,
				uniqAddrTotal: 0
			}
			// resolved = uniqAddrDecoded + uniqAddrErrors
			// uniqAddrUnknown = uniqAddrTotal - resolved 
			for (var addr in geoCache) {
				ao = geoCache[addr];
				c.uniqAddrTotal++;
				if (!ao.resolved) c.uniqAddrUnknown++;
				if (ao.resolved && ao.validCoords) c.uniqAddrDecoded++;
				if (ao.resolved && !ao.validCoords) c.uniqAddrErrors++;
			}
			return c;
		}
		
		
		//  GeocodeManager won't stop till all address objects are resolved (resolved==true)
		//  when resolved is true, then if (validCoords) it was successful
		//  otherwise look to error
		//
		function addrObject(address) {
			this.addr1 = address;
			this.addr2 = ''; // from google
			this.inProgress = false;
			this.sentTimes = 0;
			this.resolved = false;
			this.validCoords = false;
			this.error = '';
			this.lt = '';
			this.lg = '';
		}
		function deDup(addresses) {
			var uniqAddresses = {}, // stores addr objects
				ret = [];
			if (typeof addresses == 'string') {
				return [addresses]
			}
			for (var ii in addresses) {
				if (!(ii.length > 0)) {
					debug.warn("**** geocodeManager-geoMgrInit() skipping blank address");
					continue;
				}
				numAddresses++;
				if (!isNaN(ii)) {
					uniqAddresses[addresses[ii]] = 1; // array
					//console.log("CHAD TODO2 xx1", ii);
				} else {
					//console.log("CHAD TODO2 xx2", ii);
					uniqAddresses[ii] = 1; // object or string
				}
			}
			for (var ii in addresses) {
				ret.push(ii);
			}
			return ret;
		}

		// GeocodeManager.addr2coords(addresses, cb1, cbAll) - resolve a list of addresses
		//    addresses - object - key is address string, where each address string will map to a address object. 
		//    cb1 - callback function - called when an address is resolved
		//    cbAll - callback function - called when all addresses are resolved.  cb1 is not called after this.
	
		GeocodeManager.addr2coords = function(addresses, cb1, cbAll) {
			var uniqAddresses = deDup(addresses);
			// store request
			resolveRequests.push({
				state: 'new',
				addressesNew: uniqAddresses,
				addressesResolved: [],
				cb1 : cb1, 
				cbAll : cbAll
			});
			
			for (var ii = 0; ii < uniqAddresses.length; ii++) {
				if (!geoCache[uniqAddresses[ii]]) {
					geoCache[uniqAddresses[ii]] = new addrObject(uniqAddresses[ii]);
				}
			}
			checkRequests();
			googleGeocodeQueue();
		}


		// compares resolveRequests against geoCache and does callbacks if addresses are resolved
		// returns true if all request addresses are resolved, false if still need resolution.
		function checkRequests() {
			var curReq,
			    allResolved = true,
			    addrNotResolved,
			    addr;
			
			for (var ii = 0; ii < resolveRequests.length; ii++) {
				curReq = resolveRequests[ii],
				addrNotResolved = [];
				
				if (curReq.state === 'allResolved') {
					continue;
				}
				allResolved = false;
				for (var jj = 0; jj < curReq.addressesNew.length; jj++) {
					addr = curReq.addressesNew[jj];
					
					if (geoCache[addr].resolved) {
						curReq.addressesResolved.push(addr);
						if (typeof curReq.cb1 === 'function') {
							curReq.cb1(geoCache[addr]);
						}
					} else {
						addrNotResolved.push(addr);
					}
				}
				curReq.addressesNew = addrNotResolved;
				if (curReq.addressesNew.length === 0) {
					debug.log("checkRequests() resolveRequests done");
					curReq.state = 'allResolved';
					if (typeof curReq.cbAll === 'function') {
						curReq.cbAll();
					}
				}
			}
			return allResolved;
		}


		// googleGeocodeQueue()
		//
		// Note: Google allows 2.5k lookups per day per browser.  However, too many requests
		// at the same time triggers a OVER_QUERY_LIMIT code from google.  Therefore we want about 100ms
		// delay between each request using googleGeocodeQueue.  Likewise, when we get a 620 code,
		// we wait a bit and resubmit.
		// https://developers.google.com/maps/documentation/geocoding/#Limits
		//
		// NOTE: yahoo allows 5k lookups per day per IP
		// http://developer.yahoo.com/maps/rest/V1/geocode.html
		//
		function googleGeocodeQueue () {
			ems = new Date().getTime() - startTime;
			bursts = maxBurstReq;
			while (bursts-- && (ems > numReqs*desiredRate ) && (ao = getUnresolved())) {
				ao.reqNum = ++numReqs;
				ao.inProgress = true;
				ao.sentLast = ems;
				ao.sentTimes++;
				debug.log("	googleGeocodeQueue() sending req "+numReqs+" at "+ems+"ms, addr: ", ao.addr1);
				googleGeocode( ao.addr1, function (gObj) {
				  	parseGObj(gObj);
				});
				ems = new Date().getTime() - startTime;
			}
			checkInProgress(ems);

			if (checkRequests()) {
				debug.log("googleGeocodeQueue() all queries complete, geocoder done");
				//gOpts.geocodeCompleteCallback();
			} else {
				setTimeout(function() { googleGeocodeQueue() }, desiredRate);
			}
		}
		function getUnresolved() {
			for (var addr in geoCache) {
				ao = geoCache[addr];
				if (!ao.resolved && !ao.inProgress) return ao;
			}
			return false;
		}

		function checkInProgress(ems) {
			for (var addr in geoCache) {
				ao = geoCache[addr];
				if (ao.inProgress && (ems - ao.sentLast > reqTimeout)) {
					if (ao.sentTimes > maxRetries) {
						ao.resolved = true;
						//numUniqAddrErrors++;
						debug.log('checkInProgress() forgetting request '+ao.reqNum, ao);
						//gOpts.geocodedAddrCallback(ao);
					} else {
						ao.inProgress = false;
						debug.log('checkInProgress() resetting request '+ao.reqNum+' after '+(ems-ao.sentLast)+'ms (reqTimeout)', ao);
					}
				}
			}
			return false;
		}

		function parseGObj(gObj) {
			if (typeof(gObj) != 'object') {
				debug.warn("**** parseGObj() shouldn't be here " + typeof gObj, gObj);
				return;
			}
			if (gObj.tmpError) {
				// https://developers.google.com/maps/documentation/geocoding/#Limits
				if (gObj.errorCode == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
					debug.log("parseGObj() resubmit (too fast)", gObj.addr1, gObj);
					desiredRate = 1.1 * desiredRate; // slow down requests
				}
				if (gObj.addr1) {
					geoCache[gObj.addr1].inProgress = false;
					geoCache[gObj.addr1].error = gObj.error;
				}

			} else if (gObj.error) {
				debug.debug(" parseGObj() geocode error " + gObj.error, gObj);
				geoCache[gObj.addr1].resolved = true;
				geoCache[gObj.addr1].validCoords = false;
				geoCache[gObj.addr1].inProgress = false;
				geoCache[gObj.addr1].error = gObj.error;
				//numUniqAddrErrors++;
				//gOpts.geocodedAddrCallback(geoCache[gObj.addr1]);

			} else if (gObj.lt) {
				if (!gObj.addr1 || !geoCache[gObj.addr1]) {
					debug.warn("**** parseGObj() debug me", gObj);
					return;
				}
				geoCache[gObj.addr1].lt = gObj.lt;
				geoCache[gObj.addr1].lg = gObj.lg;
				geoCache[gObj.addr1].addr2 = gObj.addr2;
				geoCache[gObj.addr1].resolved = true;
				geoCache[gObj.addr1].validCoords = true;
				geoCache[gObj.addr1].inProgress = false;
				debug.log("parseGObj() got coords ", gObj.addr1, gObj, geoCache[gObj.addr1]);

				//numUniqAddrDecoded++;
				//gOpts.geocodedAddrCallback(geoCache[gObj.addr1]);

			} else {
			  debug.warn("**** parseGObj() should not be here ", gObj);
			}
		}

		//  description of gObj
		// geocodeObj: {
		// 	  lg: null, // number, -180 +180
		// 	  lt: null, // number, -90 +90
		// 	  addr2: null, // string, google's rewording of addr1
		// 	  addr1: null, // string, address passed to geocoder
		// 	  errorCode: null, // number
		// 	  tmpError: false, // boolean
		// 	  error: null // string error msg
		// },
		//

		// googleGeocode() translates addresses into array of lat/lng coords using Google, also see googleGeocodeQueue()
		//
		function googleGeocode( addr, callback ) {

			//debug.log("gGeocode() submitting addr to google: " + addr);
			//$("#"+ cnMFUI.opts.listId ).append('.');

			var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 
				'address': addr
			}, function(results, status) {
				var s2e = {};
				// https://developers.google.com/maps/documentation/javascript/reference#GeocoderStatus
				s2e[google.maps.GeocoderStatus.OK] = false;
				s2e[google.maps.GeocoderStatus.ERROR] = 'ERROR';
				s2e[google.maps.GeocoderStatus.INVALID_REQUEST] ='INVALID_REQUEST';
				s2e[google.maps.GeocoderStatus.OVER_QUERY_LIMIT] = 'OVER_QUERY_LIMIT';
				s2e[google.maps.GeocoderStatus.REQUEST_DENIED] = 'REQUEST_DENIED';
				s2e[google.maps.GeocoderStatus.UNKNOWN_ERROR] = 'UNKNOWN_ERROR';
				s2e[google.maps.GeocoderStatus.ZERO_RESULTS] = 'ZERO_RESULTS';

				if (status == google.maps.GeocoderStatus.OK) {
					//console.log("geocoder WORKS", results, results[0].geometry.location.lng(), results[0].geometry.location.lat());
					callback( {
						lg: results[0].geometry.location.lng(),
						lt: results[0].geometry.location.lat(),
						loc: results[0].geometry.location,
						addr2: results[0].formatted_address,
						addr1: addr
					});
				} else {
					//console.log("geocoder NO WORKS, status: ", status);
					callback( {
						addr1: addr,
						data: results,
						errorCode: status,
						tmpError: (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT),
						error: (s2e[status]) ? s2e[status] : "Google geocode api changed"
					});
				}
			});
		};


		return GeocodeManager;

	};
	(function(){
		// TODO: separate geocode manager out 
		//console.log("LOADED GeocodeManager")
	})();
	

	// END GEOCODE


	//
	// BEGIN HELPER FUNCTIONS
	//

	// makeClass - By John Resig (MIT Licensed)
	function makeClass(){
		return function(args){
			if ( this instanceof arguments.callee ) {
				if ( typeof this.init == "function" )
				this.init.apply( this, args.callee ? args : arguments );
			} else {
				return new arguments.callee( arguments );
			}
		};
	}

	//
	// The following date and time routines from fullCalendar
	//
	function zeroPad(n) {
		return (n < 10 ? '0' : '') + n;
	}

	cnMF.rfc3339 = function(d, clearhours) {
		s = d.getUTCFullYear()
			+ "-" + zeroPad(d.getUTCMonth() + 1)
			+ "-" + zeroPad(d.getUTCDate());
		if (clearhours) {
			s += "T00:00:00";
		} else {
			s += "T" + zeroPad(d.getUTCHours())
				+ ":" + zeroPad(d.getUTCMinutes())
				+ ":" + zeroPad(d.getUTCSeconds());
		}
		return s + cnMF.tz.offset; // ex: "-06:00" is chicago offset
	}


	cnMF.monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	cnMF.monthAbbrevs = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	cnMF.dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	cnMF.dayAbbrevs = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

	cnMF.formatDate = function(d, format) {
		var f = cnMF.dateFormatters;
		var s = '';
		for (var i=0; i<format.length; i++) {
			var c = format.charAt(i);
			if (f[c]) {
				s += f[c](d);
			} else {
				s += c;
			}
		}
		return s;
	}

	cnMF.dateFormatters = {
		'a': function(d) { return d.getHours() < 12 ? 'am' : 'pm' },
		'A': function(d) { return d.getHours() < 12 ? 'AM' : 'PM' },
		'x': function(d) { return d.getHours() < 12 ? 'a' : 'p' },
		'X': function(d) { return d.getHours() < 12 ? 'A' : 'P' },
		'g': function(d) { return d.getHours() % 12 || 12 },
		'G': function(d) { return d.getHours() },
		'h': function(d) { return zeroPad(d.getHours() %12 || 12) },
		'H': function(d) { return zeroPad(d.getHours()) },
		'i': function(d) { return zeroPad(d.getMinutes()) },
		'L': function(d) { return zeroPad(d.getDate()) },
		'D': function(d) { return d.getDate() }, // day of month
		'd': function(d) { return cnMF.dayAbbrevs[d.getDay()] },
		'l': function(d) { return cnMF.dayNames[d.getDay()] },
		'F': function(d) { return cnMF.monthNames[d.getMonth()] },
		'm': function(d) { return zeroPad(d.getMonth() + 1) },
		'M': function(d) { return cnMF.monthAbbrevs[d.getMonth()] },
		'n': function(d) { return d.getMonth() + 1 },
		'Y': function(d) { return d.getFullYear() },
		'y': function(d) { return (d.getFullYear()+'').substring(2) },
		'c': function(d) {
			// ISO8601. derived from http://delete.me.uk/2005/03/iso8601.html
			return d.getUTCFullYear()
				+ "-" + zeroPad(d.getUTCMonth() + 1)
				+ "-" + zeroPad(d.getUTCDate())
				+ "T" + zeroPad(d.getUTCHours())
				+ ":" + zeroPad(d.getUTCMinutes())
				+ ":" + zeroPad(d.getUTCSeconds())
				+ "Z";
		}
	}


	// parseDate() always returns date object, accepts number (msecs)
	//
	cnMF.parseDate = function(s) {
		if (typeof s == 'object') return s; // already a Date object
		if (typeof s == 'undefined') return null;
		if (typeof s == 'number') {
			if (s < 333888111) s = s * 1000; // convert secs to ms
			return new Date(s);
		}
		return cnMF.parseISO8601(s, true)
			|| new Date(Date.parse(s))
			|| new Date(parseInt(s) * 1000);
	}

	cnMF.parseISO8601 = function(s, ignoreTimezone) {
		// derived from http://delete.me.uk/2005/03/iso8601.html
		var regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})"
			+ "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?"
			+ "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
		var d = s.match(new RegExp(regexp));
		if (!d) return null;
		var offset = 0;
		var date = new Date(d[1], 0, 1);
		if (d[3]) { date.setMonth(d[3] - 1); }
		if (d[5]) { date.setDate(d[5]); }
		if (d[7]) { date.setHours(d[7]); }
		if (d[8]) { date.setMinutes(d[8]); }
		if (d[10]) { date.setSeconds(d[10]); }
		if (d[12]) { date.setMilliseconds(Number("0." + d[12]) * 1000); }
		if (!ignoreTimezone) {
			if (d[14]) {
				offset = (Number(d[16]) * 60) + Number(d[17]);
				offset *= ((d[15] == '-') ? 1 : -1);
			}
			offset -= date.getTimezoneOffset();
		}
		return new Date(Number(date) + (offset * 60 * 1000));
	}


	// temp helper functions
	cnMF.debugObj = function (myObject) {
		debug.info('TMP === debugObj()',myObject);
		for (name in myObject) {
			var type = 'unknown';
			if (myObject.hasOwnProperty(name) && typeof myObject[name] !== 'function') {
				type='hasOwnProperty1';
			} else if (myObject.hasOwnProperty(name)) {
				type='hasOwnProperty2-'+(typeof myObject[name]);
			}
			debug.info('property name('+name+'): '+type,myObject[name]);
		}
	}

	window.cnMF = cnMF;

})();

/*
 * Purpose is to throttle duplicate UI events that happen in rapid succession
 * so that an action dependent on them does not get called too often.
 * For example, if the UI needs to be updated after the browser is resized, 
 * there will probably more than one duplicate events fired while the user is resizing.
 * So it is probably better to wait 300ms after the event is fired before updating.
 *
 * See setTimeout() below
 */ 
(function (){
	var timeOuts = {};
	cnMF.throttle = {
		getTimeOuts : function () {
			return timeOuts;
		},
		timeOuts : timeOuts,
		/*
		 * Syntax is a drop-in replacement plus more params
		 *
		 *        window.setTimeout(doFunction(), 300);
		 * cnMF.throttle.setTimeout(doFunction(), 300, "updateUI", "afterLast");
		 */
		setTimeout : function (callback, timeoutMs, namespace, when) {
			if (!timeOuts[namespace]) {
				// brand new timeout for this namespace, so create it
				timeOuts[namespace] = {
					startMs : (new Date).getTime(),
					called : 1
				}
				timeOuts[namespace].timeoutID = window.setTimeout(function() {
						timeOuts[namespace].elapsedMs = (new Date).getTime() - timeOuts[namespace].startMs;
						callback(timeOuts[namespace]);
						delete timeOuts[namespace];
					}, timeoutMs);
				return;
			}
			timeOuts[namespace].called++;
		
			// Already created a timeout for namespace, and it has not fired.
			// Now check if we need to update it or leave it alone
			if (when && when == "afterLast") {
				// reset timeout
				window.clearTimeout(timeOuts[namespace].timeoutID)
				timeOuts[namespace].timeoutID = window.setTimeout(function() {
					timeOuts[namespace].elapsedMs = (new Date).getTime() - timeOuts[namespace].startMs;
					callback(timeOuts[namespace]);
					delete timeOuts[namespace];
				}, timeoutMs)
			} else {
				// no update needed
			}
		}
	};
})();


