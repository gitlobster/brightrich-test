"use strict";$(document).ready(function(){$("#comment-add").on("click",function(){$(".comment__add-area").hide(),$(".comment__textarea").removeClass("comment__textarea--hidden"),$(".comment").addClass("comment--opened")})}),$(document).ready(function(){var e;e=$('input[data-input-rule="onlydigit"]'),itlValidator.onlyDigits(e)}),$(document).ready(function(){$("#send").on("click",function(){var e,t=$(".feedback__inputs").find("input");e=itlValidator.check(t),e&&$(".feedback__form").fadeOut("speed",function(){$(".success-msg").removeClass("success-msg--hidden"),$(".feedback").addClass("feedback--sended")})})});var itlValidator=function(){var e,t,n,a,i,o;return e=function(e){var t;return t=!0,$.each(e,function(){var e,n;e=$(this).data("method"),itlValidator.hasOwnProperty(e)&&(n=itlValidator[e](this),n?i(this):(a(this),t=!1))}),t},t=function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(e.value).toLowerCase())},n=function(e){return!(e.value.length<10)},a=function(e){var t;t=$(e).parents(".input"),t.addClass("input--error")},i=function(e){var t;t=$(e).parents(".input"),t.removeClass("input--error")},o=function(e){$(e).on("keydown",function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110])||/65|67|86|88/.test(e.keyCode)&&(e.ctrlKey===!0||e.metaKey===!0)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()})},{check:e,emailValidate:t,phoneValidate:n,onlyDigits:o}}();