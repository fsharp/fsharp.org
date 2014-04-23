function feedLoaded(result) {
    if (!result.error) {
        var newsContent = document.getElementById("newsContent");

        var count = 1;
        var entries = result.entries;
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            try {
                var li = document.createElement("li");
                li.setAttribute("class", "list-group-item")
                var h4 = document.createElement("h4");
                h4.setAttribute("class", "list-group-item-heading");
                var a = document.createElement("a");
                var p = document.createElement("p");
                a.appendChild(document.createTextNode(entry.title.trim()));
                a.href = entry.link;
                h4.appendChild(a);
                p.appendChild(document.createTextNode(entry.contentSnippet.trim()));
                li.appendChild(h4);
                li.appendChild(p);
                newsContent.appendChild(li);

                if (++count > 5) return;
            } catch (e) {
                // If something goes wrong, we just ignore the error...
            }
        }
    }
}

$(function () {
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=http%3A%2F%2Ffpish.net%2Frss%2Fblogs%2Ftag%2F1%2Ff~23',
        dataType: 'json',
        success: function (data) {
            feedLoaded(data.responseData.feed);
        }
    });
});