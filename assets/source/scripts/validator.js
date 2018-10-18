var itlValidator = (function() {
    var check;
    var emailValidate;
    var phoneValidate;
    var showError;
    var hideError;
    var onlyDigits;

    check = function(inputsForValidate) {
        var isValid;

        isValid = true;

        $.each(inputsForValidate, function() {
            var method;
            var valid;
            method = $(this).data('method');;

            if (itlValidator.hasOwnProperty(method)) {
                valid = itlValidator[method](this);

                if (!valid) {
                    showError(this);
                    isValid = false;
                } else {
                    hideError(this);
                }
            }
        });

        return isValid;
    }

    emailValidate = function(input) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(input.value).toLowerCase());
    }

    phoneValidate = function(input) {
        if (input.value.length < 10) {
            return false;
        }

        return true;
    }

    showError = function(input) {
        var inputWrap;
        inputWrap = $(input).parents('.input');

        inputWrap.addClass('input--error');
    }

    hideError = function(input) {
        var inputWrap;
        inputWrap = $(input).parents('.input');

        inputWrap.removeClass('input--error');
    }

    onlyDigits = function(input) {
        $(input).on('keydown', function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110])||(/65|67|86|88/.test(e.keyCode)&&(e.ctrlKey===true||e.metaKey===true))&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});
    }

    return {
        check: check,
        emailValidate: emailValidate,
        phoneValidate: phoneValidate,
        onlyDigits: onlyDigits
    }
}());
