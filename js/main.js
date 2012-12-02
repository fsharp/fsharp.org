google.load("feeds", "1");

function feedLoaded(result) {
  if (!result.error) {
    var newsContent = document.getElementById("newsContent");

    // Add at most 4 news items with non-empty description
    var count = 1;
    for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];
      try {
        var content = jQuery(entry.content).text();
        if (content.length < 300) continue;
        var index = content.indexOf(" ", 300);
        if (index <= 0) index = 300;
        content = content.substr(0, index).trim() + "...";

        var li = document.createElement("li");
        var h3 = document.createElement("h4");
        var a = document.createElement("a");
        var p = document.createElement("p");
        a.appendChild(document.createTextNode(entry.title.trim()));
        a.href = entry.link;
        h3.appendChild(a);
        p.appendChild(document.createTextNode(content));
        li.appendChild(h3);
        li.appendChild(p);
        newsContent.appendChild(li);

        if (++count > 4) return;
      } catch (e) {
        // If something goes wrong, we just ignore the error...
      }
    }
  }
}

$(function () {
  var feed = new google.feeds.Feed("http://fpish.net/rss/blogs/tag/1/f~23");
  feed.setNumEntries(20);
  feed.load(feedLoaded);
});

function setActiveMenuItem(){
    var path = window.location.pathname;

    $('ul.nav')
      .find('li')
      .each(function () { $(this).removeClass('active') })
      .find('a[href="' + path + '"]')
      .parent('li')
      .addClass('active');
}

// If you're going to add some functionality that needs to execute as soon as the
// document has finished loading, add it into this .ready function
$(document).ready(function () {
	setActiveMenuItem();
});