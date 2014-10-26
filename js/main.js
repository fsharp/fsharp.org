$(function () {
    var path = window.location.pathname;

    $('ul.nav')
      .find('li')
      .find('a[href="' + path + '"]')
      .parent('li')
      .addClass('active');
});