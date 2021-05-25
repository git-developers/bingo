(self["webpackChunkbingo"] = self["webpackChunkbingo"] || []).push([["frontend-contact-form-scripts"],{

/***/ "./assets/frontend/js/contact-form-scripts.js":
/*!****************************************************!*\
  !*** ./assets/frontend/js/contact-form-scripts.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

(function ($) {
  'use strict';

  if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
    return;
  }

  wpcf7 = $.extend({
    cached: 0,
    inputs: []
  }, wpcf7);
  $(function () {
    wpcf7.supportHtml5 = function () {
      var features = {};
      var input = document.createElement('input');
      features.placeholder = 'placeholder' in input;
      var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
      $.each(inputTypes, function (index, value) {
        input.setAttribute('type', value);
        features[value] = input.type !== 'text';
      });
      return features;
    }();

    $('div.wpcf7 > form').each(function () {
      var $form = $(this);
      wpcf7.initForm($form);

      if (wpcf7.cached) {
        wpcf7.refill($form);
      }
    });
  });

  wpcf7.getId = function (form) {
    return parseInt($('input[name="_wpcf7"]', form).val(), 10);
  };

  wpcf7.initForm = function (form) {
    var $form = $(form);
    $form.submit(function (event) {
      if (!wpcf7.supportHtml5.placeholder) {
        $('[placeholder].placeheld', $form).each(function (i, n) {
          $(n).val('').removeClass('placeheld');
        });
      }

      if (typeof window.FormData === 'function') {
        wpcf7.submit($form);
        event.preventDefault();
      }
    });
    $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
    wpcf7.toggleSubmit($form);
    $form.on('click', '.wpcf7-acceptance', function () {
      wpcf7.toggleSubmit($form);
    });
    $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function () {
      var name = $(this).attr('name');
      $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
    });
    $('.wpcf7-list-item.has-free-text', $form).each(function () {
      var $freetext = $(':input.wpcf7-free-text', this);
      var $wrap = $(this).closest('.wpcf7-form-control');

      if ($(':checkbox, :radio', this).is(':checked')) {
        $freetext.prop('disabled', false);
      } else {
        $freetext.prop('disabled', true);
      }

      $wrap.on('change', ':checkbox, :radio', function () {
        var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');

        if ($cb.is(':checked')) {
          $freetext.prop('disabled', false).focus();
        } else {
          $freetext.prop('disabled', true);
        }
      });
    });

    if (!wpcf7.supportHtml5.placeholder) {
      $('[placeholder]', $form).each(function () {
        $(this).val($(this).attr('placeholder'));
        $(this).addClass('placeheld');
        $(this).focus(function () {
          if ($(this).hasClass('placeheld')) {
            $(this).val('').removeClass('placeheld');
          }
        });
        $(this).blur(function () {
          if ('' === $(this).val()) {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
          }
        });
      });
    }

    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
      $form.find('input.wpcf7-date[type="date"]').each(function () {
        $(this).datepicker({
          dateFormat: 'yy-mm-dd',
          minDate: new Date($(this).attr('min')),
          maxDate: new Date($(this).attr('max'))
        });
      });
    }

    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
      $form.find('input.wpcf7-number[type="number"]').each(function () {
        $(this).spinner({
          min: $(this).attr('min'),
          max: $(this).attr('max'),
          step: $(this).attr('step')
        });
      });
    }

    wpcf7.resetCounter($form);
    $form.on('change', '.wpcf7-validates-as-url', function () {
      var val = $.trim($(this).val());

      if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
        val = val.replace(/^\/+/, '');
        val = 'http://' + val;
      }

      $(this).val(val);
    });
  };

  wpcf7.submit = function (form) {
    if (typeof window.FormData !== 'function') {
      return;
    }

    var $form = $(form);
    $('.ajax-loader', $form).addClass('is-active');
    wpcf7.clearResponse($form);
    var formData = new FormData($form.get(0));
    var detail = {
      id: $form.closest('div.wpcf7').attr('id'),
      status: 'init',
      inputs: [],
      formData: formData
    };
    $.each($form.serializeArray(), function (i, field) {
      if ('_wpcf7' == field.name) {
        detail.contactFormId = field.value;
      } else if ('_wpcf7_version' == field.name) {
        detail.pluginVersion = field.value;
      } else if ('_wpcf7_locale' == field.name) {
        detail.contactFormLocale = field.value;
      } else if ('_wpcf7_unit_tag' == field.name) {
        detail.unitTag = field.value;
      } else if ('_wpcf7_container_post' == field.name) {
        detail.containerPostId = field.value;
      } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
        var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
        detail.inputs.push({
          name: owner + '-free-text',
          value: field.value
        });
      } else if (field.name.match(/^_/)) {} else {
        detail.inputs.push(field);
      }
    });
    wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);

    var ajaxSuccess = function ajaxSuccess(data, status, xhr, $form) {
      detail.id = $(data.into).attr('id');
      detail.status = data.status;
      detail.apiResponse = data;
      var $message = $('.wpcf7-response-output', $form);

      switch (data.status) {
        case 'validation_failed':
          $.each(data.invalidFields, function (i, n) {
            $(n.into, $form).each(function () {
              wpcf7.notValidTip(this, n.message);
              $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
              $('[aria-invalid]', this).attr('aria-invalid', 'true');
            });
          });
          $message.addClass('wpcf7-validation-errors');
          $form.addClass('invalid');
          wpcf7.triggerEvent(data.into, 'invalid', detail);
          break;

        case 'acceptance_missing':
          $message.addClass('wpcf7-acceptance-missing');
          $form.addClass('unaccepted');
          wpcf7.triggerEvent(data.into, 'unaccepted', detail);
          break;

        case 'spam':
          $message.addClass('wpcf7-spam-blocked');
          $form.addClass('spam');
          wpcf7.triggerEvent(data.into, 'spam', detail);
          break;

        case 'aborted':
          $message.addClass('wpcf7-aborted');
          $form.addClass('aborted');
          wpcf7.triggerEvent(data.into, 'aborted', detail);
          break;

        case 'mail_sent':
          $message.addClass('wpcf7-mail-sent-ok');
          $form.addClass('sent');
          wpcf7.triggerEvent(data.into, 'mailsent', detail);
          break;

        case 'mail_failed':
          $message.addClass('wpcf7-mail-sent-ng');
          $form.addClass('failed');
          wpcf7.triggerEvent(data.into, 'mailfailed', detail);
          break;

        default:
          var customStatusClass = 'custom-' + data.status.replace(/[^0-9a-z]+/i, '-');
          $message.addClass('wpcf7-' + customStatusClass);
          $form.addClass(customStatusClass);
      }

      wpcf7.refill($form, data);
      wpcf7.triggerEvent(data.into, 'submit', detail);

      if ('mail_sent' == data.status) {
        $form.each(function () {
          this.reset();
        });
        wpcf7.toggleSubmit($form);
        wpcf7.resetCounter($form);
      }

      if (!wpcf7.supportHtml5.placeholder) {
        $form.find('[placeholder].placeheld').each(function (i, n) {
          $(n).val($(n).attr('placeholder'));
        });
      }

      $message.html('').append(data.message).slideDown('fast');
      $message.attr('role', 'alert');
      $('.screen-reader-response', $form.closest('.wpcf7')).each(function () {
        var $response = $(this);
        $response.html('').attr('role', '').append(data.message);

        if (data.invalidFields) {
          var $invalids = $('<ul></ul>');
          $.each(data.invalidFields, function (i, n) {
            if (n.idref) {
              var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
            } else {
              var $li = $('<li></li>').append(n.message);
            }

            $invalids.append($li);
          });
          $response.append($invalids);
        }

        $response.attr('role', 'alert').focus();
      });
    };

    $.ajax({
      type: 'POST',
      url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    }).done(function (data, status, xhr) {
      ajaxSuccess(data, status, xhr, $form);
      $('.ajax-loader', $form).removeClass('is-active');
    }).fail(function (xhr, status, error) {
      var $e = $('<div class="ajax-error"></div>').text(error.message);
      $form.after($e);
    });
  };

  wpcf7.triggerEvent = function (target, name, detail) {
    var $target = $(target);
    var event = new CustomEvent('wpcf7' + name, {
      bubbles: true,
      detail: detail
    });
    $target.get(0).dispatchEvent(event);
    $target.trigger('wpcf7:' + name, detail);
    $target.trigger(name + '.wpcf7', detail);
  };

  wpcf7.toggleSubmit = function (form, state) {
    var $form = $(form);
    var $submit = $('input:submit', $form);

    if (typeof state !== 'undefined') {
      $submit.prop('disabled', !state);
      return;
    }

    if ($form.hasClass('wpcf7-acceptance-as-validation')) {
      return;
    }

    $submit.prop('disabled', false);
    $('.wpcf7-acceptance', $form).each(function () {
      var $span = $(this);
      var $input = $('input:checkbox', $span);

      if (!$span.hasClass('optional')) {
        if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
          $submit.prop('disabled', true);
          return false;
        }
      }
    });
  };

  wpcf7.resetCounter = function (form) {
    var $form = $(form);
    $('.wpcf7-character-count', $form).each(function () {
      var $count = $(this);
      var name = $count.attr('data-target-name');
      var down = $count.hasClass('down');
      var starting = parseInt($count.attr('data-starting-value'), 10);
      var maximum = parseInt($count.attr('data-maximum-value'), 10);
      var minimum = parseInt($count.attr('data-minimum-value'), 10);

      var updateCount = function updateCount(target) {
        var $target = $(target);
        var length = $target.val().length;
        var count = down ? starting - length : length;
        $count.attr('data-current-value', count);
        $count.text(count);

        if (maximum && maximum < length) {
          $count.addClass('too-long');
        } else {
          $count.removeClass('too-long');
        }

        if (minimum && length < minimum) {
          $count.addClass('too-short');
        } else {
          $count.removeClass('too-short');
        }
      };

      $(':input[name="' + name + '"]', $form).each(function () {
        updateCount(this);
        $(this).keyup(function () {
          updateCount(this);
        });
      });
    });
  };

  wpcf7.notValidTip = function (target, message) {
    var $target = $(target);
    $('.wpcf7-not-valid-tip', $target).remove();
    $('<span></span>').attr({
      'class': 'wpcf7-not-valid-tip',
      'role': 'alert',
      'aria-hidden': 'true'
    }).text(message).appendTo($target);

    if ($target.is('.use-floating-validation-tip *')) {
      var fadeOut = function fadeOut(target) {
        $(target).not(':hidden').animate({
          opacity: 0
        }, 'fast', function () {
          $(this).css({
            'z-index': -100
          });
        });
      };

      $target.on('mouseover', '.wpcf7-not-valid-tip', function () {
        fadeOut(this);
      });
      $target.on('focus', ':input', function () {
        fadeOut($('.wpcf7-not-valid-tip', $target));
      });
    }
  };

  wpcf7.refill = function (form, data) {
    var $form = $(form);

    var refillCaptcha = function refillCaptcha($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val('');
        $form.find('img.wpcf7-captcha-' + i).attr('src', n);
        var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
      });
    };

    var refillQuiz = function refillQuiz($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val('');
        $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
        $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
      });
    };

    if (typeof data === 'undefined') {
      $.ajax({
        type: 'GET',
        url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
        beforeSend: function beforeSend(xhr) {
          var nonce = $form.find(':input[name="_wpnonce"]').val();

          if (nonce) {
            xhr.setRequestHeader('X-WP-Nonce', nonce);
          }
        },
        dataType: 'json'
      }).done(function (data, status, xhr) {
        if (data.captcha) {
          refillCaptcha($form, data.captcha);
        }

        if (data.quiz) {
          refillQuiz($form, data.quiz);
        }
      });
    } else {
      if (data.captcha) {
        refillCaptcha($form, data.captcha);
      }

      if (data.quiz) {
        refillQuiz($form, data.quiz);
      }
    }
  };

  wpcf7.clearResponse = function (form) {
    var $form = $(form);
    $form.removeClass('invalid spam sent failed');
    $form.siblings('.screen-reader-response').html('').attr('role', '');
    $('.wpcf7-not-valid-tip', $form).remove();
    $('[aria-invalid]', $form).attr('aria-invalid', 'false');
    $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
    $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
  };

  wpcf7.apiSettings.getRoute = function (path) {
    var url = wpcf7.apiSettings.root;
    url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
    return url;
  };
})(jQuery);

(function () {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_well-known-sy-07cc72","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-ca135f"], () => (__webpack_exec__("./assets/frontend/js/contact-form-scripts.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5nby8uL2Fzc2V0cy9mcm9udGVuZC9qcy9jb250YWN0LWZvcm0tc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyIkIiwid3BjZjciLCJleHRlbmQiLCJjYWNoZWQiLCJpbnB1dHMiLCJzdXBwb3J0SHRtbDUiLCJmZWF0dXJlcyIsImlucHV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGxhY2Vob2xkZXIiLCJpbnB1dFR5cGVzIiwiZWFjaCIsImluZGV4IiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJ0eXBlIiwiJGZvcm0iLCJpbml0Rm9ybSIsInJlZmlsbCIsImdldElkIiwiZm9ybSIsInBhcnNlSW50IiwidmFsIiwic3VibWl0IiwiZXZlbnQiLCJpIiwibiIsInJlbW92ZUNsYXNzIiwid2luZG93IiwiRm9ybURhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImFmdGVyIiwidG9nZ2xlU3VibWl0Iiwib24iLCJuYW1lIiwiYXR0ciIsImZpbmQiLCJub3QiLCJwcm9wIiwiJGZyZWV0ZXh0IiwiJHdyYXAiLCJjbG9zZXN0IiwiaXMiLCIkY2IiLCJmb2N1cyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJibHVyIiwianF1ZXJ5VWkiLCJkYXRlIiwiZGF0ZXBpY2tlciIsImRhdGVGb3JtYXQiLCJtaW5EYXRlIiwiRGF0ZSIsIm1heERhdGUiLCJudW1iZXIiLCJzcGlubmVyIiwibWluIiwibWF4Iiwic3RlcCIsInJlc2V0Q291bnRlciIsInRyaW0iLCJtYXRjaCIsImluZGV4T2YiLCJyZXBsYWNlIiwiY2xlYXJSZXNwb25zZSIsImZvcm1EYXRhIiwiZ2V0IiwiZGV0YWlsIiwiaWQiLCJzdGF0dXMiLCJzZXJpYWxpemVBcnJheSIsImZpZWxkIiwiY29udGFjdEZvcm1JZCIsInBsdWdpblZlcnNpb24iLCJjb250YWN0Rm9ybUxvY2FsZSIsInVuaXRUYWciLCJjb250YWluZXJQb3N0SWQiLCJvd25lciIsInB1c2giLCJ0cmlnZ2VyRXZlbnQiLCJhamF4U3VjY2VzcyIsImRhdGEiLCJ4aHIiLCJpbnRvIiwiYXBpUmVzcG9uc2UiLCIkbWVzc2FnZSIsImludmFsaWRGaWVsZHMiLCJub3RWYWxpZFRpcCIsIm1lc3NhZ2UiLCJjdXN0b21TdGF0dXNDbGFzcyIsInJlc2V0IiwiaHRtbCIsImFwcGVuZCIsInNsaWRlRG93biIsIiRyZXNwb25zZSIsIiRpbnZhbGlkcyIsImlkcmVmIiwiJGxpIiwiYWpheCIsInVybCIsImFwaVNldHRpbmdzIiwiZ2V0Um91dGUiLCJkYXRhVHlwZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJkb25lIiwiZmFpbCIsImVycm9yIiwiJGUiLCJ0ZXh0IiwidGFyZ2V0IiwiJHRhcmdldCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJ0cmlnZ2VyIiwic3RhdGUiLCIkc3VibWl0IiwiJHNwYW4iLCIkaW5wdXQiLCIkY291bnQiLCJkb3duIiwic3RhcnRpbmciLCJtYXhpbXVtIiwibWluaW11bSIsInVwZGF0ZUNvdW50IiwibGVuZ3RoIiwiY291bnQiLCJrZXl1cCIsInJlbW92ZSIsImFwcGVuZFRvIiwiZmFkZU91dCIsImFuaW1hdGUiLCJvcGFjaXR5IiwiY3NzIiwicmVmaWxsQ2FwdGNoYSIsIml0ZW1zIiwiZXhlYyIsInJlZmlsbFF1aXoiLCJzaWJsaW5ncyIsImJlZm9yZVNlbmQiLCJub25jZSIsInNldFJlcXVlc3RIZWFkZXIiLCJjYXB0Y2hhIiwicXVpeiIsImhpZGUiLCJlbXB0eSIsInJlbW92ZUF0dHIiLCJwYXRoIiwicm9vdCIsIm5hbWVzcGFjZSIsImpRdWVyeSIsInBhcmFtcyIsImNhbmNlbGFibGUiLCJ1bmRlZmluZWQiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsInByb3RvdHlwZSIsIkV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQVNBLENBQVQsRUFBVztBQUFDOztBQUFhLE1BQUcsT0FBT0Ms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QUNwQyxPQUFKLENBQVloRSxLQUFLLENBQUNxRyxXQUFOLENBQWtCa0QsU0FBOUIsRUFBd0N2SixLQUFLLENBQUNxRyxXQUFOLENBQWtCa0QsU0FBbEIsR0FBNEJGLElBQXBFLENBQUo7QUFBOEUsV0FBT2pELEdBQVA7QUFBWSxHQUFuSztBQUFxSyxDQW5CcnNCLEVBbUJ1c0JvRCxNQW5CdnNCOztBQW1CK3NCLENBQUMsWUFBVTtBQUFDLE1BQUcsT0FBTzVILE1BQU0sQ0FBQ3FGLFdBQWQsS0FBNEIsVUFBL0IsRUFBMEMsT0FBTyxLQUFQOztBQUFhLFdBQVNBLFdBQVQsQ0FBcUJ6RixLQUFyQixFQUEyQmlJLE1BQTNCLEVBQWtDO0FBQUNBLFVBQU0sR0FBQ0EsTUFBTSxJQUFFO0FBQUN2QyxhQUFPLEVBQUMsS0FBVDtBQUFld0MsZ0JBQVUsRUFBQyxLQUExQjtBQUFnQ3RGLFlBQU0sRUFBQ3VGO0FBQXZDLEtBQWY7QUFBaUUsUUFBSUMsR0FBRyxHQUFDckosUUFBUSxDQUFDc0osV0FBVCxDQUFxQixhQUFyQixDQUFSO0FBQTRDRCxPQUFHLENBQUNFLGVBQUosQ0FBb0J0SSxLQUFwQixFQUEwQmlJLE1BQU0sQ0FBQ3ZDLE9BQWpDLEVBQXlDdUMsTUFBTSxDQUFDQyxVQUFoRCxFQUEyREQsTUFBTSxDQUFDckYsTUFBbEU7QUFBMEUsV0FBT3dGLEdBQVA7QUFBWTs7QUFDcC9CM0MsYUFBVyxDQUFDOEMsU0FBWixHQUFzQm5JLE1BQU0sQ0FBQ29JLEtBQVAsQ0FBYUQsU0FBbkM7QUFBNkNuSSxRQUFNLENBQUNxRixXQUFQLEdBQW1CQSxXQUFuQjtBQUFnQyxDQUQ4bkIsSSIsImZpbGUiOiJmcm9udGVuZC1jb250YWN0LWZvcm0tc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKXsndXNlIHN0cmljdCc7aWYodHlwZW9mIHdwY2Y3PT09J3VuZGVmaW5lZCd8fHdwY2Y3PT09bnVsbCl7cmV0dXJuO31cclxuICAgIHdwY2Y3PSQuZXh0ZW5kKHtjYWNoZWQ6MCxpbnB1dHM6W119LHdwY2Y3KTskKGZ1bmN0aW9uKCl7d3BjZjcuc3VwcG9ydEh0bWw1PShmdW5jdGlvbigpe3ZhciBmZWF0dXJlcz17fTt2YXIgaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtmZWF0dXJlcy5wbGFjZWhvbGRlcj0ncGxhY2Vob2xkZXInaW4gaW5wdXQ7dmFyIGlucHV0VHlwZXM9WydlbWFpbCcsJ3VybCcsJ3RlbCcsJ251bWJlcicsJ3JhbmdlJywnZGF0ZSddOyQuZWFjaChpbnB1dFR5cGVzLGZ1bmN0aW9uKGluZGV4LHZhbHVlKXtpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLHZhbHVlKTtmZWF0dXJlc1t2YWx1ZV09aW5wdXQudHlwZSE9PSd0ZXh0Jzt9KTtyZXR1cm4gZmVhdHVyZXM7fSkoKTskKCdkaXYud3BjZjcgPiBmb3JtJykuZWFjaChmdW5jdGlvbigpe3ZhciAkZm9ybT0kKHRoaXMpO3dwY2Y3LmluaXRGb3JtKCRmb3JtKTtpZih3cGNmNy5jYWNoZWQpe3dwY2Y3LnJlZmlsbCgkZm9ybSk7fX0pO30pO3dwY2Y3LmdldElkPWZ1bmN0aW9uKGZvcm0pe3JldHVybiBwYXJzZUludCgkKCdpbnB1dFtuYW1lPVwiX3dwY2Y3XCJdJyxmb3JtKS52YWwoKSwxMCk7fTt3cGNmNy5pbml0Rm9ybT1mdW5jdGlvbihmb3JtKXt2YXIgJGZvcm09JChmb3JtKTskZm9ybS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe2lmKCF3cGNmNy5zdXBwb3J0SHRtbDUucGxhY2Vob2xkZXIpeyQoJ1twbGFjZWhvbGRlcl0ucGxhY2VoZWxkJywkZm9ybSkuZWFjaChmdW5jdGlvbihpLG4peyQobikudmFsKCcnKS5yZW1vdmVDbGFzcygncGxhY2VoZWxkJyk7fSk7fVxyXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cuRm9ybURhdGE9PT0nZnVuY3Rpb24nKXt3cGNmNy5zdWJtaXQoJGZvcm0pO2V2ZW50LnByZXZlbnREZWZhdWx0KCk7fX0pOyQoJy53cGNmNy1zdWJtaXQnLCRmb3JtKS5hZnRlcignPHNwYW4gY2xhc3M9XCJhamF4LWxvYWRlclwiPjwvc3Bhbj4nKTt3cGNmNy50b2dnbGVTdWJtaXQoJGZvcm0pOyRmb3JtLm9uKCdjbGljaycsJy53cGNmNy1hY2NlcHRhbmNlJyxmdW5jdGlvbigpe3dwY2Y3LnRvZ2dsZVN1Ym1pdCgkZm9ybSk7fSk7JCgnLndwY2Y3LWV4Y2x1c2l2ZS1jaGVja2JveCcsJGZvcm0pLm9uKCdjbGljaycsJ2lucHV0OmNoZWNrYm94JyxmdW5jdGlvbigpe3ZhciBuYW1lPSQodGhpcykuYXR0cignbmFtZScpOyRmb3JtLmZpbmQoJ2lucHV0OmNoZWNrYm94W25hbWU9XCInK25hbWUrJ1wiXScpLm5vdCh0aGlzKS5wcm9wKCdjaGVja2VkJyxmYWxzZSk7fSk7JCgnLndwY2Y3LWxpc3QtaXRlbS5oYXMtZnJlZS10ZXh0JywkZm9ybSkuZWFjaChmdW5jdGlvbigpe3ZhciAkZnJlZXRleHQ9JCgnOmlucHV0LndwY2Y3LWZyZWUtdGV4dCcsdGhpcyk7dmFyICR3cmFwPSQodGhpcykuY2xvc2VzdCgnLndwY2Y3LWZvcm0tY29udHJvbCcpO2lmKCQoJzpjaGVja2JveCwgOnJhZGlvJyx0aGlzKS5pcygnOmNoZWNrZWQnKSl7JGZyZWV0ZXh0LnByb3AoJ2Rpc2FibGVkJyxmYWxzZSk7fWVsc2V7JGZyZWV0ZXh0LnByb3AoJ2Rpc2FibGVkJyx0cnVlKTt9XHJcbiAgICAgICAgJHdyYXAub24oJ2NoYW5nZScsJzpjaGVja2JveCwgOnJhZGlvJyxmdW5jdGlvbigpe3ZhciAkY2I9JCgnLmhhcy1mcmVlLXRleHQnLCR3cmFwKS5maW5kKCc6Y2hlY2tib3gsIDpyYWRpbycpO2lmKCRjYi5pcygnOmNoZWNrZWQnKSl7JGZyZWV0ZXh0LnByb3AoJ2Rpc2FibGVkJyxmYWxzZSkuZm9jdXMoKTt9ZWxzZXskZnJlZXRleHQucHJvcCgnZGlzYWJsZWQnLHRydWUpO319KTt9KTtpZighd3BjZjcuc3VwcG9ydEh0bWw1LnBsYWNlaG9sZGVyKXskKCdbcGxhY2Vob2xkZXJdJywkZm9ybSkuZWFjaChmdW5jdGlvbigpeyQodGhpcykudmFsKCQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSk7JCh0aGlzKS5hZGRDbGFzcygncGxhY2VoZWxkJyk7JCh0aGlzKS5mb2N1cyhmdW5jdGlvbigpe2lmKCQodGhpcykuaGFzQ2xhc3MoJ3BsYWNlaGVsZCcpKXskKHRoaXMpLnZhbCgnJykucmVtb3ZlQ2xhc3MoJ3BsYWNlaGVsZCcpO319KTskKHRoaXMpLmJsdXIoZnVuY3Rpb24oKXtpZignJz09PSQodGhpcykudmFsKCkpeyQodGhpcykudmFsKCQodGhpcykuYXR0cigncGxhY2Vob2xkZXInKSk7JCh0aGlzKS5hZGRDbGFzcygncGxhY2VoZWxkJyk7fX0pO30pO31cclxuICAgICAgICBpZih3cGNmNy5qcXVlcnlVaSYmIXdwY2Y3LnN1cHBvcnRIdG1sNS5kYXRlKXskZm9ybS5maW5kKCdpbnB1dC53cGNmNy1kYXRlW3R5cGU9XCJkYXRlXCJdJykuZWFjaChmdW5jdGlvbigpeyQodGhpcykuZGF0ZXBpY2tlcih7ZGF0ZUZvcm1hdDoneXktbW0tZGQnLG1pbkRhdGU6bmV3IERhdGUoJCh0aGlzKS5hdHRyKCdtaW4nKSksbWF4RGF0ZTpuZXcgRGF0ZSgkKHRoaXMpLmF0dHIoJ21heCcpKX0pO30pO31cclxuICAgICAgICBpZih3cGNmNy5qcXVlcnlVaSYmIXdwY2Y3LnN1cHBvcnRIdG1sNS5udW1iZXIpeyRmb3JtLmZpbmQoJ2lucHV0LndwY2Y3LW51bWJlclt0eXBlPVwibnVtYmVyXCJdJykuZWFjaChmdW5jdGlvbigpeyQodGhpcykuc3Bpbm5lcih7bWluOiQodGhpcykuYXR0cignbWluJyksbWF4OiQodGhpcykuYXR0cignbWF4Jyksc3RlcDokKHRoaXMpLmF0dHIoJ3N0ZXAnKX0pO30pO31cclxuICAgICAgICB3cGNmNy5yZXNldENvdW50ZXIoJGZvcm0pOyRmb3JtLm9uKCdjaGFuZ2UnLCcud3BjZjctdmFsaWRhdGVzLWFzLXVybCcsZnVuY3Rpb24oKXt2YXIgdmFsPSQudHJpbSgkKHRoaXMpLnZhbCgpKTtpZih2YWwmJiF2YWwubWF0Y2goL15bYS16XVthLXowLTkuKy1dKjovaSkmJi0xIT09dmFsLmluZGV4T2YoJy4nKSl7dmFsPXZhbC5yZXBsYWNlKC9eXFwvKy8sJycpO3ZhbD0naHR0cDovLycrdmFsO31cclxuICAgICAgICAgICAgJCh0aGlzKS52YWwodmFsKTt9KTt9O3dwY2Y3LnN1Ym1pdD1mdW5jdGlvbihmb3JtKXtpZih0eXBlb2Ygd2luZG93LkZvcm1EYXRhIT09J2Z1bmN0aW9uJyl7cmV0dXJuO31cclxuICAgICAgICB2YXIgJGZvcm09JChmb3JtKTskKCcuYWpheC1sb2FkZXInLCRmb3JtKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7d3BjZjcuY2xlYXJSZXNwb25zZSgkZm9ybSk7dmFyIGZvcm1EYXRhPW5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpO3ZhciBkZXRhaWw9e2lkOiRmb3JtLmNsb3Nlc3QoJ2Rpdi53cGNmNycpLmF0dHIoJ2lkJyksc3RhdHVzOidpbml0JyxpbnB1dHM6W10sZm9ybURhdGE6Zm9ybURhdGF9OyQuZWFjaCgkZm9ybS5zZXJpYWxpemVBcnJheSgpLGZ1bmN0aW9uKGksZmllbGQpe2lmKCdfd3BjZjcnPT1maWVsZC5uYW1lKXtkZXRhaWwuY29udGFjdEZvcm1JZD1maWVsZC52YWx1ZTt9ZWxzZSBpZignX3dwY2Y3X3ZlcnNpb24nPT1maWVsZC5uYW1lKXtkZXRhaWwucGx1Z2luVmVyc2lvbj1maWVsZC52YWx1ZTt9ZWxzZSBpZignX3dwY2Y3X2xvY2FsZSc9PWZpZWxkLm5hbWUpe2RldGFpbC5jb250YWN0Rm9ybUxvY2FsZT1maWVsZC52YWx1ZTt9ZWxzZSBpZignX3dwY2Y3X3VuaXRfdGFnJz09ZmllbGQubmFtZSl7ZGV0YWlsLnVuaXRUYWc9ZmllbGQudmFsdWU7fWVsc2UgaWYoJ193cGNmN19jb250YWluZXJfcG9zdCc9PWZpZWxkLm5hbWUpe2RldGFpbC5jb250YWluZXJQb3N0SWQ9ZmllbGQudmFsdWU7fWVsc2UgaWYoZmllbGQubmFtZS5tYXRjaCgvXl93cGNmN19cXHcrX2ZyZWVfdGV4dF8vKSl7dmFyIG93bmVyPWZpZWxkLm5hbWUucmVwbGFjZSgvXl93cGNmN19cXHcrX2ZyZWVfdGV4dF8vLCcnKTtkZXRhaWwuaW5wdXRzLnB1c2goe25hbWU6b3duZXIrJy1mcmVlLXRleHQnLHZhbHVlOmZpZWxkLnZhbHVlfSk7fWVsc2UgaWYoZmllbGQubmFtZS5tYXRjaCgvXl8vKSl7fWVsc2V7ZGV0YWlsLmlucHV0cy5wdXNoKGZpZWxkKTt9fSk7d3BjZjcudHJpZ2dlckV2ZW50KCRmb3JtLmNsb3Nlc3QoJ2Rpdi53cGNmNycpLCdiZWZvcmVzdWJtaXQnLGRldGFpbCk7dmFyIGFqYXhTdWNjZXNzPWZ1bmN0aW9uKGRhdGEsc3RhdHVzLHhociwkZm9ybSl7ZGV0YWlsLmlkPSQoZGF0YS5pbnRvKS5hdHRyKCdpZCcpO2RldGFpbC5zdGF0dXM9ZGF0YS5zdGF0dXM7ZGV0YWlsLmFwaVJlc3BvbnNlPWRhdGE7dmFyICRtZXNzYWdlPSQoJy53cGNmNy1yZXNwb25zZS1vdXRwdXQnLCRmb3JtKTtzd2l0Y2goZGF0YS5zdGF0dXMpe2Nhc2UgJ3ZhbGlkYXRpb25fZmFpbGVkJzokLmVhY2goZGF0YS5pbnZhbGlkRmllbGRzLGZ1bmN0aW9uKGksbil7JChuLmludG8sJGZvcm0pLmVhY2goZnVuY3Rpb24oKXt3cGNmNy5ub3RWYWxpZFRpcCh0aGlzLG4ubWVzc2FnZSk7JCgnLndwY2Y3LWZvcm0tY29udHJvbCcsdGhpcykuYWRkQ2xhc3MoJ3dwY2Y3LW5vdC12YWxpZCcpOyQoJ1thcmlhLWludmFsaWRdJyx0aGlzKS5hdHRyKCdhcmlhLWludmFsaWQnLCd0cnVlJyk7fSk7fSk7JG1lc3NhZ2UuYWRkQ2xhc3MoJ3dwY2Y3LXZhbGlkYXRpb24tZXJyb3JzJyk7JGZvcm0uYWRkQ2xhc3MoJ2ludmFsaWQnKTt3cGNmNy50cmlnZ2VyRXZlbnQoZGF0YS5pbnRvLCdpbnZhbGlkJyxkZXRhaWwpO2JyZWFrO2Nhc2UgJ2FjY2VwdGFuY2VfbWlzc2luZyc6JG1lc3NhZ2UuYWRkQ2xhc3MoJ3dwY2Y3LWFjY2VwdGFuY2UtbWlzc2luZycpOyRmb3JtLmFkZENsYXNzKCd1bmFjY2VwdGVkJyk7d3BjZjcudHJpZ2dlckV2ZW50KGRhdGEuaW50bywndW5hY2NlcHRlZCcsZGV0YWlsKTticmVhaztjYXNlICdzcGFtJzokbWVzc2FnZS5hZGRDbGFzcygnd3BjZjctc3BhbS1ibG9ja2VkJyk7JGZvcm0uYWRkQ2xhc3MoJ3NwYW0nKTt3cGNmNy50cmlnZ2VyRXZlbnQoZGF0YS5pbnRvLCdzcGFtJyxkZXRhaWwpO2JyZWFrO2Nhc2UgJ2Fib3J0ZWQnOiRtZXNzYWdlLmFkZENsYXNzKCd3cGNmNy1hYm9ydGVkJyk7JGZvcm0uYWRkQ2xhc3MoJ2Fib3J0ZWQnKTt3cGNmNy50cmlnZ2VyRXZlbnQoZGF0YS5pbnRvLCdhYm9ydGVkJyxkZXRhaWwpO2JyZWFrO2Nhc2UgJ21haWxfc2VudCc6JG1lc3NhZ2UuYWRkQ2xhc3MoJ3dwY2Y3LW1haWwtc2VudC1vaycpOyRmb3JtLmFkZENsYXNzKCdzZW50Jyk7d3BjZjcudHJpZ2dlckV2ZW50KGRhdGEuaW50bywnbWFpbHNlbnQnLGRldGFpbCk7YnJlYWs7Y2FzZSAnbWFpbF9mYWlsZWQnOiRtZXNzYWdlLmFkZENsYXNzKCd3cGNmNy1tYWlsLXNlbnQtbmcnKTskZm9ybS5hZGRDbGFzcygnZmFpbGVkJyk7d3BjZjcudHJpZ2dlckV2ZW50KGRhdGEuaW50bywnbWFpbGZhaWxlZCcsZGV0YWlsKTticmVhaztkZWZhdWx0OnZhciBjdXN0b21TdGF0dXNDbGFzcz0nY3VzdG9tLSdcclxuICAgICAgICAgICAgK2RhdGEuc3RhdHVzLnJlcGxhY2UoL1teMC05YS16XSsvaSwnLScpOyRtZXNzYWdlLmFkZENsYXNzKCd3cGNmNy0nK2N1c3RvbVN0YXR1c0NsYXNzKTskZm9ybS5hZGRDbGFzcyhjdXN0b21TdGF0dXNDbGFzcyk7fVxyXG4gICAgICAgICAgICB3cGNmNy5yZWZpbGwoJGZvcm0sZGF0YSk7d3BjZjcudHJpZ2dlckV2ZW50KGRhdGEuaW50bywnc3VibWl0JyxkZXRhaWwpO2lmKCdtYWlsX3NlbnQnPT1kYXRhLnN0YXR1cyl7JGZvcm0uZWFjaChmdW5jdGlvbigpe3RoaXMucmVzZXQoKTt9KTt3cGNmNy50b2dnbGVTdWJtaXQoJGZvcm0pO3dwY2Y3LnJlc2V0Q291bnRlcigkZm9ybSk7fVxyXG4gICAgICAgICAgICBpZighd3BjZjcuc3VwcG9ydEh0bWw1LnBsYWNlaG9sZGVyKXskZm9ybS5maW5kKCdbcGxhY2Vob2xkZXJdLnBsYWNlaGVsZCcpLmVhY2goZnVuY3Rpb24oaSxuKXskKG4pLnZhbCgkKG4pLmF0dHIoJ3BsYWNlaG9sZGVyJykpO30pO31cclxuICAgICAgICAgICAgJG1lc3NhZ2UuaHRtbCgnJykuYXBwZW5kKGRhdGEubWVzc2FnZSkuc2xpZGVEb3duKCdmYXN0Jyk7JG1lc3NhZ2UuYXR0cigncm9sZScsJ2FsZXJ0Jyk7JCgnLnNjcmVlbi1yZWFkZXItcmVzcG9uc2UnLCRmb3JtLmNsb3Nlc3QoJy53cGNmNycpKS5lYWNoKGZ1bmN0aW9uKCl7dmFyICRyZXNwb25zZT0kKHRoaXMpOyRyZXNwb25zZS5odG1sKCcnKS5hdHRyKCdyb2xlJywnJykuYXBwZW5kKGRhdGEubWVzc2FnZSk7aWYoZGF0YS5pbnZhbGlkRmllbGRzKXt2YXIgJGludmFsaWRzPSQoJzx1bD48L3VsPicpOyQuZWFjaChkYXRhLmludmFsaWRGaWVsZHMsZnVuY3Rpb24oaSxuKXtpZihuLmlkcmVmKXt2YXIgJGxpPSQoJzxsaT48L2xpPicpLmFwcGVuZCgkKCc8YT48L2E+JykuYXR0cignaHJlZicsJyMnK24uaWRyZWYpLmFwcGVuZChuLm1lc3NhZ2UpKTt9ZWxzZXt2YXIgJGxpPSQoJzxsaT48L2xpPicpLmFwcGVuZChuLm1lc3NhZ2UpO31cclxuICAgICAgICAgICAgICAgICRpbnZhbGlkcy5hcHBlbmQoJGxpKTt9KTskcmVzcG9uc2UuYXBwZW5kKCRpbnZhbGlkcyk7fVxyXG4gICAgICAgICAgICAgICAgJHJlc3BvbnNlLmF0dHIoJ3JvbGUnLCdhbGVydCcpLmZvY3VzKCk7fSk7fTskLmFqYXgoe3R5cGU6J1BPU1QnLHVybDp3cGNmNy5hcGlTZXR0aW5ncy5nZXRSb3V0ZSgnL2NvbnRhY3QtZm9ybXMvJyt3cGNmNy5nZXRJZCgkZm9ybSkrJy9mZWVkYmFjaycpLGRhdGE6Zm9ybURhdGEsZGF0YVR5cGU6J2pzb24nLHByb2Nlc3NEYXRhOmZhbHNlLGNvbnRlbnRUeXBlOmZhbHNlfSkuZG9uZShmdW5jdGlvbihkYXRhLHN0YXR1cyx4aHIpe2FqYXhTdWNjZXNzKGRhdGEsc3RhdHVzLHhociwkZm9ybSk7JCgnLmFqYXgtbG9hZGVyJywkZm9ybSkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO30pLmZhaWwoZnVuY3Rpb24oeGhyLHN0YXR1cyxlcnJvcil7dmFyICRlPSQoJzxkaXYgY2xhc3M9XCJhamF4LWVycm9yXCI+PC9kaXY+JykudGV4dChlcnJvci5tZXNzYWdlKTskZm9ybS5hZnRlcigkZSk7fSk7fTt3cGNmNy50cmlnZ2VyRXZlbnQ9ZnVuY3Rpb24odGFyZ2V0LG5hbWUsZGV0YWlsKXt2YXIgJHRhcmdldD0kKHRhcmdldCk7dmFyIGV2ZW50PW5ldyBDdXN0b21FdmVudCgnd3BjZjcnK25hbWUse2J1YmJsZXM6dHJ1ZSxkZXRhaWw6ZGV0YWlsfSk7JHRhcmdldC5nZXQoMCkuZGlzcGF0Y2hFdmVudChldmVudCk7JHRhcmdldC50cmlnZ2VyKCd3cGNmNzonK25hbWUsZGV0YWlsKTskdGFyZ2V0LnRyaWdnZXIobmFtZSsnLndwY2Y3JyxkZXRhaWwpO307d3BjZjcudG9nZ2xlU3VibWl0PWZ1bmN0aW9uKGZvcm0sc3RhdGUpe3ZhciAkZm9ybT0kKGZvcm0pO3ZhciAkc3VibWl0PSQoJ2lucHV0OnN1Ym1pdCcsJGZvcm0pO2lmKHR5cGVvZiBzdGF0ZSE9PSd1bmRlZmluZWQnKXskc3VibWl0LnByb3AoJ2Rpc2FibGVkJywhc3RhdGUpO3JldHVybjt9XHJcbiAgICAgICAgaWYoJGZvcm0uaGFzQ2xhc3MoJ3dwY2Y3LWFjY2VwdGFuY2UtYXMtdmFsaWRhdGlvbicpKXtyZXR1cm47fVxyXG4gICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLGZhbHNlKTskKCcud3BjZjctYWNjZXB0YW5jZScsJGZvcm0pLmVhY2goZnVuY3Rpb24oKXt2YXIgJHNwYW49JCh0aGlzKTt2YXIgJGlucHV0PSQoJ2lucHV0OmNoZWNrYm94Jywkc3Bhbik7aWYoISRzcGFuLmhhc0NsYXNzKCdvcHRpb25hbCcpKXtpZigkc3Bhbi5oYXNDbGFzcygnaW52ZXJ0JykmJiRpbnB1dC5pcygnOmNoZWNrZWQnKXx8ISRzcGFuLmhhc0NsYXNzKCdpbnZlcnQnKSYmISRpbnB1dC5pcygnOmNoZWNrZWQnKSl7JHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsdHJ1ZSk7cmV0dXJuIGZhbHNlO319fSk7fTt3cGNmNy5yZXNldENvdW50ZXI9ZnVuY3Rpb24oZm9ybSl7dmFyICRmb3JtPSQoZm9ybSk7JCgnLndwY2Y3LWNoYXJhY3Rlci1jb3VudCcsJGZvcm0pLmVhY2goZnVuY3Rpb24oKXt2YXIgJGNvdW50PSQodGhpcyk7dmFyIG5hbWU9JGNvdW50LmF0dHIoJ2RhdGEtdGFyZ2V0LW5hbWUnKTt2YXIgZG93bj0kY291bnQuaGFzQ2xhc3MoJ2Rvd24nKTt2YXIgc3RhcnRpbmc9cGFyc2VJbnQoJGNvdW50LmF0dHIoJ2RhdGEtc3RhcnRpbmctdmFsdWUnKSwxMCk7dmFyIG1heGltdW09cGFyc2VJbnQoJGNvdW50LmF0dHIoJ2RhdGEtbWF4aW11bS12YWx1ZScpLDEwKTt2YXIgbWluaW11bT1wYXJzZUludCgkY291bnQuYXR0cignZGF0YS1taW5pbXVtLXZhbHVlJyksMTApO3ZhciB1cGRhdGVDb3VudD1mdW5jdGlvbih0YXJnZXQpe3ZhciAkdGFyZ2V0PSQodGFyZ2V0KTt2YXIgbGVuZ3RoPSR0YXJnZXQudmFsKCkubGVuZ3RoO3ZhciBjb3VudD1kb3duP3N0YXJ0aW5nLWxlbmd0aDpsZW5ndGg7JGNvdW50LmF0dHIoJ2RhdGEtY3VycmVudC12YWx1ZScsY291bnQpOyRjb3VudC50ZXh0KGNvdW50KTtpZihtYXhpbXVtJiZtYXhpbXVtPGxlbmd0aCl7JGNvdW50LmFkZENsYXNzKCd0b28tbG9uZycpO31lbHNleyRjb3VudC5yZW1vdmVDbGFzcygndG9vLWxvbmcnKTt9XHJcbiAgICAgICAgaWYobWluaW11bSYmbGVuZ3RoPG1pbmltdW0peyRjb3VudC5hZGRDbGFzcygndG9vLXNob3J0Jyk7fWVsc2V7JGNvdW50LnJlbW92ZUNsYXNzKCd0b28tc2hvcnQnKTt9fTskKCc6aW5wdXRbbmFtZT1cIicrbmFtZSsnXCJdJywkZm9ybSkuZWFjaChmdW5jdGlvbigpe3VwZGF0ZUNvdW50KHRoaXMpOyQodGhpcykua2V5dXAoZnVuY3Rpb24oKXt1cGRhdGVDb3VudCh0aGlzKTt9KTt9KTt9KTt9O3dwY2Y3Lm5vdFZhbGlkVGlwPWZ1bmN0aW9uKHRhcmdldCxtZXNzYWdlKXt2YXIgJHRhcmdldD0kKHRhcmdldCk7JCgnLndwY2Y3LW5vdC12YWxpZC10aXAnLCR0YXJnZXQpLnJlbW92ZSgpOyQoJzxzcGFuPjwvc3Bhbj4nKS5hdHRyKHsnY2xhc3MnOid3cGNmNy1ub3QtdmFsaWQtdGlwJywncm9sZSc6J2FsZXJ0JywnYXJpYS1oaWRkZW4nOid0cnVlJyx9KS50ZXh0KG1lc3NhZ2UpLmFwcGVuZFRvKCR0YXJnZXQpO2lmKCR0YXJnZXQuaXMoJy51c2UtZmxvYXRpbmctdmFsaWRhdGlvbi10aXAgKicpKXt2YXIgZmFkZU91dD1mdW5jdGlvbih0YXJnZXQpeyQodGFyZ2V0KS5ub3QoJzpoaWRkZW4nKS5hbmltYXRlKHtvcGFjaXR5OjB9LCdmYXN0JyxmdW5jdGlvbigpeyQodGhpcykuY3NzKHsnei1pbmRleCc6LTEwMH0pO30pO307JHRhcmdldC5vbignbW91c2VvdmVyJywnLndwY2Y3LW5vdC12YWxpZC10aXAnLGZ1bmN0aW9uKCl7ZmFkZU91dCh0aGlzKTt9KTskdGFyZ2V0Lm9uKCdmb2N1cycsJzppbnB1dCcsZnVuY3Rpb24oKXtmYWRlT3V0KCQoJy53cGNmNy1ub3QtdmFsaWQtdGlwJywkdGFyZ2V0KSk7fSk7fX07d3BjZjcucmVmaWxsPWZ1bmN0aW9uKGZvcm0sZGF0YSl7dmFyICRmb3JtPSQoZm9ybSk7dmFyIHJlZmlsbENhcHRjaGE9ZnVuY3Rpb24oJGZvcm0saXRlbXMpeyQuZWFjaChpdGVtcyxmdW5jdGlvbihpLG4peyRmb3JtLmZpbmQoJzppbnB1dFtuYW1lPVwiJytpKydcIl0nKS52YWwoJycpOyRmb3JtLmZpbmQoJ2ltZy53cGNmNy1jYXB0Y2hhLScraSkuYXR0cignc3JjJyxuKTt2YXIgbWF0Y2g9LyhbMC05XSspXFwuKHBuZ3xnaWZ8anBlZykkLy5leGVjKG4pOyRmb3JtLmZpbmQoJ2lucHV0OmhpZGRlbltuYW1lPVwiX3dwY2Y3X2NhcHRjaGFfY2hhbGxlbmdlXycraSsnXCJdJykuYXR0cigndmFsdWUnLG1hdGNoWzFdKTt9KTt9O3ZhciByZWZpbGxRdWl6PWZ1bmN0aW9uKCRmb3JtLGl0ZW1zKXskLmVhY2goaXRlbXMsZnVuY3Rpb24oaSxuKXskZm9ybS5maW5kKCc6aW5wdXRbbmFtZT1cIicraSsnXCJdJykudmFsKCcnKTskZm9ybS5maW5kKCc6aW5wdXRbbmFtZT1cIicraSsnXCJdJykuc2libGluZ3MoJ3NwYW4ud3BjZjctcXVpei1sYWJlbCcpLnRleHQoblswXSk7JGZvcm0uZmluZCgnaW5wdXQ6aGlkZGVuW25hbWU9XCJfd3BjZjdfcXVpel9hbnN3ZXJfJytpKydcIl0nKS5hdHRyKCd2YWx1ZScsblsxXSk7fSk7fTtpZih0eXBlb2YgZGF0YT09PSd1bmRlZmluZWQnKXskLmFqYXgoe3R5cGU6J0dFVCcsdXJsOndwY2Y3LmFwaVNldHRpbmdzLmdldFJvdXRlKCcvY29udGFjdC1mb3Jtcy8nK3dwY2Y3LmdldElkKCRmb3JtKSsnL3JlZmlsbCcpLGJlZm9yZVNlbmQ6ZnVuY3Rpb24oeGhyKXt2YXIgbm9uY2U9JGZvcm0uZmluZCgnOmlucHV0W25hbWU9XCJfd3Bub25jZVwiXScpLnZhbCgpO2lmKG5vbmNlKXt4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1XUC1Ob25jZScsbm9uY2UpO319LGRhdGFUeXBlOidqc29uJ30pLmRvbmUoZnVuY3Rpb24oZGF0YSxzdGF0dXMseGhyKXtpZihkYXRhLmNhcHRjaGEpe3JlZmlsbENhcHRjaGEoJGZvcm0sZGF0YS5jYXB0Y2hhKTt9XHJcbiAgICAgICAgaWYoZGF0YS5xdWl6KXtyZWZpbGxRdWl6KCRmb3JtLGRhdGEucXVpeik7fX0pO31lbHNle2lmKGRhdGEuY2FwdGNoYSl7cmVmaWxsQ2FwdGNoYSgkZm9ybSxkYXRhLmNhcHRjaGEpO31cclxuICAgICAgICBpZihkYXRhLnF1aXope3JlZmlsbFF1aXooJGZvcm0sZGF0YS5xdWl6KTt9fX07d3BjZjcuY2xlYXJSZXNwb25zZT1mdW5jdGlvbihmb3JtKXt2YXIgJGZvcm09JChmb3JtKTskZm9ybS5yZW1vdmVDbGFzcygnaW52YWxpZCBzcGFtIHNlbnQgZmFpbGVkJyk7JGZvcm0uc2libGluZ3MoJy5zY3JlZW4tcmVhZGVyLXJlc3BvbnNlJykuaHRtbCgnJykuYXR0cigncm9sZScsJycpOyQoJy53cGNmNy1ub3QtdmFsaWQtdGlwJywkZm9ybSkucmVtb3ZlKCk7JCgnW2FyaWEtaW52YWxpZF0nLCRmb3JtKS5hdHRyKCdhcmlhLWludmFsaWQnLCdmYWxzZScpOyQoJy53cGNmNy1mb3JtLWNvbnRyb2wnLCRmb3JtKS5yZW1vdmVDbGFzcygnd3BjZjctbm90LXZhbGlkJyk7JCgnLndwY2Y3LXJlc3BvbnNlLW91dHB1dCcsJGZvcm0pLmhpZGUoKS5lbXB0eSgpLnJlbW92ZUF0dHIoJ3JvbGUnKS5yZW1vdmVDbGFzcygnd3BjZjctbWFpbC1zZW50LW9rIHdwY2Y3LW1haWwtc2VudC1uZyB3cGNmNy12YWxpZGF0aW9uLWVycm9ycyB3cGNmNy1zcGFtLWJsb2NrZWQnKTt9O3dwY2Y3LmFwaVNldHRpbmdzLmdldFJvdXRlPWZ1bmN0aW9uKHBhdGgpe3ZhciB1cmw9d3BjZjcuYXBpU2V0dGluZ3Mucm9vdDt1cmw9dXJsLnJlcGxhY2Uod3BjZjcuYXBpU2V0dGluZ3MubmFtZXNwYWNlLHdwY2Y3LmFwaVNldHRpbmdzLm5hbWVzcGFjZStwYXRoKTtyZXR1cm4gdXJsO307fSkoalF1ZXJ5KTsoZnVuY3Rpb24oKXtpZih0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50PT09XCJmdW5jdGlvblwiKXJldHVybiBmYWxzZTtmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCxwYXJhbXMpe3BhcmFtcz1wYXJhbXN8fHtidWJibGVzOmZhbHNlLGNhbmNlbGFibGU6ZmFsc2UsZGV0YWlsOnVuZGVmaW5lZH07dmFyIGV2dD1kb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LHBhcmFtcy5idWJibGVzLHBhcmFtcy5jYW5jZWxhYmxlLHBhcmFtcy5kZXRhaWwpO3JldHVybiBldnQ7fVxyXG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlPXdpbmRvdy5FdmVudC5wcm90b3R5cGU7d2luZG93LkN1c3RvbUV2ZW50PUN1c3RvbUV2ZW50O30pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==