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
    var carouselLink = $(".carousel-img");
    var shuffled = shuffle(carouselLink.toArray());
    var srcs = $.map(shuffled, function (x) {
        return x.getAttribute("src");
    });
    carouselLink.each(function (index, x) {
        x.setAttribute("src", srcs[index]);
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
    shuffleSupporters();
    $("#supporter-container").show();
    shuffleTestimonials();
});