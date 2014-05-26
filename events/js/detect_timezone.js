/* 
 * Original script by Josh Fraser (http://www.onlineaspect.com)
 * Continued and maintained by Jon Nylander at https://bitbucket.org/pellepim/jstimezonedetect
 *
 * Provided under the Do Whatever You Want With This Code License.
 */

/**
 * Namespace to hold all the code for timezone detection.
 */
var jstz = (function () {
    'use strict';
    var HEMISPHERE_SOUTH = 's',
        
        /** 
         * Gets the offset in minutes from UTC for a certain date.
         * @param {Date} date
         * @returns {Number}
         */
        get_date_offset = function (date) {
            var offset = -date.getTimezoneOffset();
            return (offset !== null ? offset : 0);
        },
        
        get_january_offset = function () {
            return get_date_offset(new Date(2010, 0, 1, 0, 0, 0, 0));
        },
    
        get_june_offset = function () {
            return get_date_offset(new Date(2010, 5, 1, 0, 0, 0, 0));
        },
        
        /**
         * Private method.
         * Checks whether a given date is in daylight savings time.
         * If the date supplied is after june, we assume that we're checking
         * for southern hemisphere DST.
         * @param {Date} date
         * @returns {Boolean}
         */
        date_is_dst = function (date) {
            var base_offset = ((date.getMonth() > 5 ? get_june_offset() 
                                                : get_january_offset())),
                date_offset = get_date_offset(date); 
            
            return (base_offset - date_offset) !== 0;
        },
    
        /**
         * This function does some basic calculations to create information about 
         * the user's timezone.
         * 
         * Returns a key that can be used to do lookups in jstz.olson.timezones.
         * 
         * @returns {String}  
         */
        
        lookup_key = function () {
            var january_offset = get_january_offset(), 
                june_offset = get_june_offset(), 
                diff = get_january_offset() - get_june_offset();
                
            if (diff < 0) {
                return january_offset + ",1";
            } else if (diff > 0) {
                return june_offset + ",1," + HEMISPHERE_SOUTH;
            }
            
            return january_offset + ",0";
        },
    
        /**
         * Uses get_timezone_info() to formulate a key to use in the olson.timezones dictionary.
         * 
         * Returns a primitive object on the format:
         * {'timezone': TimeZone, 'key' : 'the key used to find the TimeZone object'}
         * 
         * @returns Object 
         */
        determine_timezone = function () {
            var key = lookup_key();
            return new jstz.TimeZone(jstz.olson.timezones[key]);
        };
    
    return {
        determine_timezone : determine_timezone,
        date_is_dst : date_is_dst
    };
}());

/**
 * A simple object containing information of utc_offset, which olson timezone key to use, 
 * and if the timezone cares about daylight savings or not.
 * 
 * @constructor
 * @param {string} offset - for example '-11:00'
 * @param {string} olson_tz - the olson Identifier, such as "America/Denver"
 * @param {boolean} uses_dst - flag for whether the time zone somehow cares about daylight savings.
 */
jstz.TimeZone = (function () {
    'use strict';    
    var timezone_name = null,
        uses_dst = null,
        utc_offset = null,
        
        name = function () {
            return timezone_name;
        },
        
        dst = function () {
            return uses_dst;
        },
        
        offset = function () {
            return utc_offset;
        },
        
        /**
         * Checks if a timezone has possible ambiguities. I.e timezones that are similar.
         * 
         * If the preliminary scan determines that we're in America/Denver. We double check
         * here that we're really there and not in America/Mazatlan.
         * 
         * This is done by checking known dates for when daylight savings start for different
         * timezones.
         */
        ambiguity_check = function () {
            var ambiguity_list = jstz.olson.ambiguity_list[timezone_name],
                length = ambiguity_list.length, 
                i = 0,
                tz = ambiguity_list[0];
            
            for (; i < length; i += 1) {
                tz = ambiguity_list[i];
        
                if (jstz.date_is_dst(jstz.olson.dst_start_dates[tz])) {
                    timezone_name = tz;
                    return;
                }   
            }
        },
        
        /**
         * Checks if it is possible that the timezone is ambiguous.
         */
        is_ambiguous = function () {
            return typeof (jstz.olson.ambiguity_list[timezone_name]) !== 'undefined';
        },
        
        /**
        * Constructor for jstz.TimeZone
        */
        Constr = function (tz_info) {
            utc_offset = tz_info[0];
            timezone_name = tz_info[1];
            uses_dst = tz_info[2];
            if (is_ambiguous()) {
                ambiguity_check();
            }
        };
    
    /**
     * Public API for jstz.TimeZone
     */
    Constr.prototype = {
        constructor : jstz.TimeZone,
        name : name,
        dst : dst,
        offset : offset
    };
    
    return Constr;
}());

jstz.olson = {};

/*
 * The keys in this dictionary are comma separated as such:
 * 
 * First the offset compared to UTC time in minutes.
 *  
 * Then a flag which is 0 if the timezone does not take daylight savings into account and 1 if it 
 * does.
 * 
 * Thirdly an optional 's' signifies that the timezone is in the southern hemisphere, 
 * only interesting for timezones with DST.
 * 
 * The mapped arrays is used for constructing the jstz.TimeZone object from within 
 * jstz.determine_timezone();
 */
jstz.olson.timezones = (function () {
    "use strict";
    return {
        '-720,0'   : ['-12:00', 'Etc/GMT+12', false],
        '-660,0'   : ['-11:00', 'Pacific/Pago_Pago', false],
        '-600,1'   : ['-11:00', 'America/Adak', true],
        '-660,1,s' : ['-11:00', 'Pacific/Apia', true],
        '-600,0'   : ['-10:00', 'Pacific/Honolulu', false],
        '-570,0'   : ['-10:30', 'Pacific/Marquesas', false],
        '-540,0'   : ['-09:00', 'Pacific/Gambier', false],
        '-540,1'   : ['-09:00', 'America/Anchorage', true],
        '-480,1'   : ['-08:00', 'America/Los_Angeles', true],
        '-480,0'   : ['-08:00', 'Pacific/Pitcairn', false],
        '-420,0'   : ['-07:00', 'America/Phoenix', false],
        '-420,1'   : ['-07:00', 'America/Denver', true],
        '-360,0'   : ['-06:00', 'America/Guatemala', false],
        '-360,1'   : ['-06:00', 'America/Chicago', true],
        '-360,1,s' : ['-06:00', 'Pacific/Easter', true],
        '-300,0'   : ['-05:00', 'America/Bogota', false],
        '-300,1'   : ['-05:00', 'America/New_York', true],
        '-270,0'   : ['-04:30', 'America/Caracas', false],
        '-240,1'   : ['-04:00', 'America/Halifax', true],
        '-240,0'   : ['-04:00', 'America/Santo_Domingo', false],
        '-240,1,s' : ['-04:00', 'America/Asuncion', true],
        '-210,1'   : ['-03:30', 'America/St_Johns', true],
        '-180,1'   : ['-03:00', 'America/Godthab', true],
        '-180,0'   : ['-03:00', 'America/Argentina/Buenos_Aires', false],
        '-180,1,s' : ['-03:00', 'America/Montevideo', true],
        '-120,0'   : ['-02:00', 'America/Noronha', false],
        '-120,1'   : ['-02:00', 'Etc/GMT+2', true],
        '-60,1'    : ['-01:00', 'Atlantic/Azores', true],
        '-60,0'    : ['-01:00', 'Atlantic/Cape_Verde', false],
        '0,0'      : ['00:00', 'Etc/UTC', false],
        '0,1'      : ['00:00', 'Europe/London', true],
        '60,1'     : ['+01:00', 'Europe/Berlin', true],
        '60,0'     : ['+01:00', 'Africa/Lagos', false],
        '60,1,s'   : ['+01:00', 'Africa/Windhoek', true],
        '120,1'    : ['+02:00', 'Asia/Beirut', true],
        '120,0'    : ['+02:00', 'Africa/Johannesburg', false],
        '180,1'    : ['+03:00', 'Europe/Moscow', true],
        '180,0'    : ['+03:00', 'Asia/Baghdad', false],
        '210,1'    : ['+03:30', 'Asia/Tehran', true],
        '240,0'    : ['+04:00', 'Asia/Dubai', false],
        '240,1'    : ['+04:00', 'Asia/Yerevan', true],
        '270,0'    : ['+04:30', 'Asia/Kabul', false],
        '300,1'    : ['+05:00', 'Asia/Yekaterinburg', true],
        '300,0'    : ['+05:00', 'Asia/Karachi', false],
        '330,0'    : ['+05:30', 'Asia/Kolkata', false],
        '345,0'    : ['+05:45', 'Asia/Kathmandu', false],
        '360,0'    : ['+06:00', 'Asia/Dhaka', false],
        '360,1'    : ['+06:00', 'Asia/Omsk', true],
        '390,0'    : ['+06:30', 'Asia/Rangoon', false],
        '420,1'    : ['+07:00', 'Asia/Krasnoyarsk', true],
        '420,0'    : ['+07:00', 'Asia/Jakarta', false],
        '480,0'    : ['+08:00', 'Asia/Shanghai', false],
        '480,1'    : ['+08:00', 'Asia/Irkutsk', true],
        '525,0'    : ['+08:45', 'Australia/Eucla', true],
        '525,1,s'  : ['+08:45', 'Australia/Eucla', true],
        '540,1'    : ['+09:00', 'Asia/Yakutsk', true],
        '540,0'    : ['+09:00', 'Asia/Tokyo', false],
        '570,0'    : ['+09:30', 'Australia/Darwin', false],
        '570,1,s'  : ['+09:30', 'Australia/Adelaide', true],
        '600,0'    : ['+10:00', 'Australia/Brisbane', false],
        '600,1'    : ['+10:00', 'Asia/Vladivostok', true],
        '600,1,s'  : ['+10:00', 'Australia/Sydney', true],
        '630,1,s'  : ['+10:30', 'Australia/Lord_Howe', true],
        '660,1'    : ['+11:00', 'Asia/Kamchatka', true],
        '660,0'    : ['+11:00', 'Pacific/Noumea', false],
        '690,0'    : ['+11:30', 'Pacific/Norfolk', false],
        '720,1,s'  : ['+12:00', 'Pacific/Auckland', true],
        '720,0'    : ['+12:00', 'Pacific/Tarawa', false],
        '765,1,s'  : ['+12:45', 'Pacific/Chatham', true],
        '780,0'    : ['+13:00', 'Pacific/Tongatapu', false],
        '840,0'    : ['+14:00', 'Pacific/Kiritimati', false]
    };
}());

/**
 * This object contains information on when daylight savings starts for
 * different timezones.
 * 
 * The list is short for a reason. Often we do not have to be very specific
 * to single out the correct timezone. But when we do, this list comes in
 * handy.
 * 
 * Each value is a date denoting when daylight savings starts for that timezone.
 */
jstz.olson.dst_start_dates = (function () {
    "use strict";
    return {
        'America/Denver' : new Date(2011, 2, 13, 3, 0, 0, 0),
        'America/Mazatlan' : new Date(2011, 3, 3, 3, 0, 0, 0),
        'America/Chicago' : new Date(2011, 2, 13, 3, 0, 0, 0),
        'America/Mexico_City' : new Date(2011, 3, 3, 3, 0, 0, 0),
        'Atlantic/Stanley' : new Date(2011, 8, 4, 7, 0, 0, 0),
        'America/Asuncion' : new Date(2011, 9, 2, 3, 0, 0, 0),
        'America/Santiago' : new Date(2011, 9, 9, 3, 0, 0, 0),
        'America/Campo_Grande' : new Date(2011, 9, 16, 5, 0, 0, 0),
        'America/Montevideo' : new Date(2011, 9, 2, 3, 0, 0, 0),
        'America/Sao_Paulo' : new Date(2011, 9, 16, 5, 0, 0, 0),
        'America/Los_Angeles' : new Date(2011, 2, 13, 8, 0, 0, 0),
        'America/Santa_Isabel' : new Date(2011, 3, 5, 8, 0, 0, 0),
        'America/Havana' : new Date(2011, 2, 13, 2, 0, 0, 0),
        'America/New_York' : new Date(2011, 2, 13, 7, 0, 0, 0),
        'Asia/Gaza' : new Date(2011, 2, 26, 23, 0, 0, 0),
        'Asia/Beirut' : new Date(2011, 2, 27, 1, 0, 0, 0),
        'Europe/Minsk' : new Date(2011, 2, 27, 2, 0, 0, 0),
        'Europe/Helsinki' : new Date(2011, 2, 27, 4, 0, 0, 0),
        'Europe/Istanbul' : new Date(2011, 2, 28, 5, 0, 0, 0),
        'Asia/Damascus' : new Date(2011, 3, 1, 2, 0, 0, 0),
        'Asia/Jerusalem' : new Date(2011, 3, 1, 6, 0, 0, 0),
        'Africa/Cairo' : new Date(2010, 3, 30, 4, 0, 0, 0),
        'Asia/Yerevan' : new Date(2011, 2, 27, 4, 0, 0, 0),
        'Asia/Baku'    : new Date(2011, 2, 27, 8, 0, 0, 0),
        'Pacific/Auckland' : new Date(2011, 8, 26, 7, 0, 0, 0),
        'Pacific/Fiji' : new Date(2010, 11, 29, 23, 0, 0, 0),
        'America/Halifax' : new Date(2011, 2, 13, 6, 0, 0, 0),
        'America/Goose_Bay' : new Date(2011, 2, 13, 2, 1, 0, 0),
        'America/Miquelon' : new Date(2011, 2, 13, 5, 0, 0, 0),
        'America/Godthab' : new Date(2011, 2, 27, 1, 0, 0, 0)
    };
}());

/**
 * The keys in this object are timezones that we know may be ambiguous after
 * a preliminary scan through the olson_tz object.
 * 
 * The array of timezones to compare must be in the order that daylight savings
 * starts for the regions.
 */
jstz.olson.ambiguity_list = {
    'America/Denver' : ['America/Denver', 'America/Mazatlan'],
    'America/Chicago' : ['America/Chicago', 'America/Mexico_City'],
    'America/Asuncion' : ['Atlantic/Stanley', 'America/Asuncion', 'America/Santiago', 'America/Campo_Grande'],
    'America/Montevideo' : ['America/Montevideo', 'America/Sao_Paulo'],
    'Asia/Beirut' : ['Asia/Gaza', 'Asia/Beirut', 'Europe/Minsk', 'Europe/Helsinki', 'Europe/Istanbul', 'Asia/Damascus', 'Asia/Jerusalem', 'Africa/Cairo'],
    'Asia/Yerevan' : ['Asia/Yerevan', 'Asia/Baku'],
    'Pacific/Auckland' : ['Pacific/Auckland', 'Pacific/Fiji'],
    'America/Los_Angeles' : ['America/Los_Angeles', 'America/Santa_Isabel'],
    'America/New_York' : ['America/Havana', 'America/New_York'],
    'America/Halifax' : ['America/Goose_Bay', 'America/Halifax'],
    'America/Godthab' : ['America/Miquelon', 'America/Godthab']
};
