$('.fa-bars').on('click', (function (event) {
    $('.navMenu').css('display', 'inline-block');
}));

$('a').on('click', (function (event) {
    $('.navMenu').css('display', 'none');
}));

$('.details').on('click', (function (event) {
    $('.quizHide').css('display', 'inline');
    $(this).css('display', 'none');
}));