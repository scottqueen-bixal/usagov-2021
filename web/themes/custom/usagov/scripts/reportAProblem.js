(function ($, jQuery) {
  "use strict";
  $(document).ready(function () {
    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/; // This is a very simple regex for email
      return re.test(email);
    }
    $(".validate").submit(function () {
      var noerrors = true;
      $(".required").each(function () {
        var input = $(this).find("input,textarea");
        if (
          input.val() === "" ||
          (input.attr("id") === "email" && !validateEmail(input.val()))
        ) {
          noerrors = false;
          if (!$(this).find("span.err-label").length) {
            var error = input.attr("data-error");
            var errorId = "error_" + input.attr("id");
            var label = $(this).find("label");
            label.after(
              '<span id="' +
                errorId +
                '" class="err-label usa-error" tabindex="0">' +
                error +
                "</span>"
            );
            input.attr("aria-labelledby", label.attr("id") + " " + errorId);
          }

          document.getElementById(input.attr("id")).classList.add("usa-user-error");

        }
        else if ($(this).find("span.err-label").length) {
          $(this).find("span.err-label").remove();
          document.getElementById(input.attr("id")).classList.remove("usa-user-error");
        }
      });

      if (!noerrors) {
        var elem = document.querySelector(".err-label");
        elem.focus();
        var viewportOffset = elem.getBoundingClientRect();
        var top = viewportOffset.top;
        if (top < 108) {
          window.scrollTo(0, window.pageYOffset - (108 - top));
        }
      }
      return noerrors;
    });
  });
})(jQuery);

function timestamp() {
  "use strict";
  var response = document.getElementById("g-recaptcha-response");
  if (response === null || response.value.trim() === "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}

setInterval(timestamp, 500);

var submitPressed = function () {
  "use strict";
  if (grecaptcha.getResponse().length === 0) {
    if ($(".err-label-captcha").length < 1) {
      if ($("html").attr("lang") === "en") {
        $(".recaptcha-container").before(
          '<p class="err-label err-label-captcha" tabindex="0">Please fill out the reCaptcha</p>'
        );
      }
      else {
        $(".recaptcha-container").before(
          '<p class="err-label err-label-captcha" tabindex="0">Por favor, complete el reCaptcha</p>'
        );
      }
    }
    return true; // FIX BEFORE PR. THIS IS FOR TESTING IN LOCAL
  }
  else {
    $(".err-label-captcha").remove();
  }
  return true;
};

jQuery(document).ready(function () {
  "use strict";
  $("#cntctbx").hide();
});

jQuery(document).ready(function () {
  "use strict";
  $("#pagesurvey-hdr").hide();
  $("#pagesurvey-trgt").hide();
  $("#pagesurvey-ombnum").hide();
});