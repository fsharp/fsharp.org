function feedLoaded(result) {
    if (!result.error) {
        var newsContent = document.getElementById("news-list");

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
                a.target = "_blank"
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

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function shuffleSupporters() {
    var carouselLink = $(".carousel-link");
    var shuffled = shuffle(carouselLink.toArray());
    var hrefs = $.map(shuffled, function (x) {
        return x.getAttribute("href");
    });
    var srcs = $.map(shuffled, function (x) {
        return $(".carousel-img", x).attr("src");
    });
    carouselLink.each(function (index, x) {
        x.setAttribute("href", hrefs[index]);
        $(".carousel-img", x).attr("src", srcs[index]);
    });
}

function shuffleTestimonials() {
    $.getJSON("testimonials.json", function (data) {
        var arr = shuffle(data).slice(0, 6);
        var testimonials = $.map(arr, function (x) {
            var b = document.createElement("blockquote");
            var p = document.createElement("p");
            var link = document.createElement("a");
            link.setAttribute("href", x.Permalink);
            link.setAttribute("class", "testimonial");
            link.text = x.Text;
            p.appendChild(link);
            var f = document.createElement("footer");
            var c = document.createElement("cite");
            var a = document.createElement("a");
            a.setAttribute("href", x.Permalink);
            a.textContent = x.Author;
            c.appendChild(a);
            f.appendChild(c);
            b.appendChild(p);
            b.appendChild(f);
            return b;
        });

        var col1 = $("#testimonials-col-1");
        var col2 = $("#testimonials-col-2");
        col1.empty();
        col2.empty();
        $.each(testimonials.slice(0, 3), function (i, x) {
            col1.append(x);
        });
        $.each(testimonials.slice(3), function (i, x) {
            col2.append(x);
        });
    });
}

$(function () {
    $.ajax({
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=http%3A%2F%2Ffpish.net%2Frss%2Fblogs%2Ftag%2F1%2Ff~23',
        dataType: 'json',
        success: function (data) {
            feedLoaded(data.responseData.feed);
        }
    });

    shuffleSupporters();

    shuffleTestimonials();
});