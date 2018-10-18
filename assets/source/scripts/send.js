$(document).ready(function() {
    $('#send').on('click', function() {
        var inputs = $('.feedback__inputs').find('input');
        var isValid;
        isValid = itlValidator.check(inputs);

        if (isValid) {
            $('.feedback__form').fadeOut('speed', function() {
                $('.success-msg').removeClass('success-msg--hidden');
                $('.feedback').addClass('feedback--sended');
            });
        }
    });
});
