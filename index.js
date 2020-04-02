$('.fa-bars').on('click', (function (event) {
    $('.navMenu').css('display', 'inline-block');
}));

$('a').on('click', (function (event) {
    $('.navMenu').css('display', 'none');
}));