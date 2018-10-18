$(document).ready(function() {
    $('#comment-add').on('click', function() {
        $('.comment__add-area').hide();
        $('.comment__textarea').removeClass('comment__textarea--hidden');
        $('.comment').addClass('comment--opened');
    });
});
