(self["webpackChunkbingo"] = self["webpackChunkbingo"] || []).push([["frontend-functions"],{

/***/ "./assets/frontend/js/functions.js":
/*!*****************************************!*\
  !*** ./assets/frontend/js/functions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

var booked_load_calendar_date_booking_options, booked_appt_form_options, bookedNewAppointment;
;

(function ($, window, document, undefined) {
  var $win = $(window);
  $.fn.spin.presets.booked = {
    lines: 10,
    length: 7,
    width: 5,
    radius: 11,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: '#555',
    speed: 1,
    trail: 60,
    shadow: false,
    hwaccel: false,
    className: 'booked-spinner',
    zIndex: 2e9,
    top: '50%',
    left: '50%'
  };
  $.fn.spin.presets.booked_top = {
    lines: 11,
    length: 10,
    width: 6,
    radius: 15,
    corners: 1,
    rotate: 0,
    scale: 0.5,
    direction: 1,
    color: '#aaaaaa',
    speed: 1,
    trail: 60,
    shadow: false,
    hwaccel: false,
    className: 'booked-spinner booked-spinner-top',
    zIndex: 2e9,
    top: '15px',
    left: '50%'
  };
  $.fn.spin.presets.booked_white = {
    lines: 13,
    length: 11,
    width: 5,
    radius: 18,
    scale: 1,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: '#fff',
    speed: 1,
    trail: 60,
    shadow: false,
    hwaccel: false,
    className: 'booked-spinner booked-white',
    zIndex: 2e9,
    top: '50%',
    left: '50%'
  };
  $win.on('resize', function () {
    adjust_calendar_boxes();
    resize_booked_modal();
  });
  $win.on('load', function () {
    BookedTabs.Init();
    var ajaxRequests = [];
    adjust_calendar_boxes();
    $('.booked-calendar-wrap').each(function () {
      var thisCalendar = $(this);
      var calendar_month = thisCalendar.find('table.booked-calendar').attr('data-calendar-date');
      thisCalendar.attr('data-default', calendar_month);
      init_tooltips(thisCalendar);
    });
    $('.booked-list-view').each(function () {
      var thisList = $(this);
      var list_date = thisList.find('.booked-appt-list').attr('data-list-date');
      thisList.attr('data-default', list_date);
    });
    bookedRemoveEmptyTRs();
    init_appt_list_date_picker();
    $('.booked_calendar_chooser').change(function (e) {
      e.preventDefault();
      var $selector = $(this),
          thisIsCalendar = $selector.parents('.booked-calendarSwitcher').hasClass('calendar');

      if (!thisIsCalendar) {
        var thisCalendarWrap = $selector.parents('.booked-calendar-shortcode-wrap').find('.booked-list-view'),
            thisDefaultDate = thisCalendarWrap.attr('data-default'),
            thisIsCalendar = $selector.parents('.booked-calendarSwitcher').hasClass('calendar');

        if (typeof thisDefaultDate == 'undefined') {
          thisDefaultDate = false;
        }

        thisCalendarWrap.addClass('booked-loading');
        var args = {
          'action': 'booked_appointment_list_date',
          'date': thisDefaultDate,
          'calendar_id': $selector.val()
        };
        $(document).trigger("booked-before-loading-appointment-list-booking-options");
        thisCalendarWrap.spin('booked_top');
        $.ajax({
          url: booked_js_vars.ajax_url,
          type: 'post',
          data: args,
          success: function success(html) {
            thisCalendarWrap.html(html);
            init_appt_list_date_picker();
            setTimeout(function () {
              thisCalendarWrap.removeClass('booked-loading');
            }, 1);
          }
        });
      } else {
        var thisCalendarWrap = $selector.parents('.booked-calendar-shortcode-wrap').find('.booked-calendar-wrap'),
            thisDefaultDate = thisCalendarWrap.attr('data-default');

        if (typeof thisDefaultDate == 'undefined') {
          thisDefaultDate = false;
        }

        var args = {
          'action': 'booked_calendar_month',
          'gotoMonth': thisDefaultDate,
          'calendar_id': $selector.val()
        };
        savingState(true, thisCalendarWrap);
        $.ajax({
          url: booked_js_vars.ajax_url,
          type: 'post',
          data: args,
          success: function success(html) {
            thisCalendarWrap.html(html);
            adjust_calendar_boxes();
            bookedRemoveEmptyTRs();
            init_tooltips(thisCalendarWrap);
            $(window).trigger('booked-load-calendar', args, $selector);
          }
        });
      }

      return false;
    });
    $('body').on('click', '.booked-calendar-wrap .page-right, .booked-calendar-wrap .page-left, .booked-calendar-wrap .monthName a', function (e) {
      e.preventDefault();
      var $button = $(this),
          gotoMonth = $button.attr('data-goto'),
          thisCalendarWrap = $button.parents('.booked-calendar-wrap'),
          thisCalendarDefault = thisCalendarWrap.attr('data-default'),
          calendar_id = $button.parents('table.booked-calendar').attr('data-calendar-id');

      if (typeof thisCalendarDefault == 'undefined') {
        thisCalendarDefault = false;
      }

      var args = {
        'action': 'booked_calendar_month',
        'gotoMonth': gotoMonth,
        'calendar_id': calendar_id,
        'force_default': thisCalendarDefault
      };
      savingState(true, thisCalendarWrap);
      $.ajax({
        url: booked_js_vars.ajax_url,
        type: 'post',
        data: args,
        success: function success(html) {
          thisCalendarWrap.html(html);
          adjust_calendar_boxes();
          bookedRemoveEmptyTRs();
          init_tooltips(thisCalendarWrap);
          $(window).trigger('booked-load-calendar', args, $button);
        }
      });
      return false;
    });
    $('body').on('click', '.booked-calendar-wrap tr.week td', function (e) {
      e.preventDefault();
      var $thisDate = $(this),
          booked_calendar_table = $thisDate.parents('table.booked-calendar'),
          $thisRow = $thisDate.parent(),
          date = $thisDate.attr('data-date'),
          calendar_id = booked_calendar_table.attr('data-calendar-id'),
          colspanSetting = $thisRow.find('td').length;

      if (!calendar_id) {
        calendar_id = 0;
      }

      if ($thisDate.hasClass('blur') || $thisDate.hasClass('booked') && !booked_js_vars.publicAppointments || $thisDate.hasClass('prev-date')) {} else if ($thisDate.hasClass('active')) {
        $thisDate.removeClass('active');
        $('tr.entryBlock').remove();
        var calendarHeight = booked_calendar_table.height();
        booked_calendar_table.parent().height(calendarHeight);
      } else {
        $('tr.week td').removeClass('active');
        $thisDate.addClass('active');
        $('tr.entryBlock').remove();
        $thisRow.after('<tr class="entryBlock booked-loading"><td colspan="' + colspanSetting + '"></td></tr>');
        $('tr.entryBlock').find('td').spin('booked');
        booked_load_calendar_date_booking_options = {
          'action': 'booked_calendar_date',
          'date': date,
          'calendar_id': calendar_id
        };
        $(document).trigger("booked-before-loading-calendar-booking-options");
        var calendarHeight = booked_calendar_table.height();
        booked_calendar_table.parent().height(calendarHeight);
        $.ajax({
          url: booked_js_vars.ajax_url,
          type: 'post',
          data: booked_load_calendar_date_booking_options,
          success: function success(html) {
            $('tr.entryBlock').find('td').html(html);
            $('tr.entryBlock').removeClass('booked-loading');
            $('tr.entryBlock').find('.booked-appt-list').fadeIn(300);
            $('tr.entryBlock').find('.booked-appt-list').addClass('shown');
            adjust_calendar_boxes();
          }
        });
      }

      return;
    });
    $('body').on('click', '.booked-list-view .booked-list-view-date-prev, .booked-list-view .booked-list-view-date-next', function (e) {
      e.preventDefault();
      var $thisLink = $(this),
          date = $thisLink.attr('data-date'),
          thisList = $thisLink.parents('.booked-list-view'),
          defaultDate = thisList.attr('data-default'),
          calendar_id = $thisLink.parents('.booked-list-view-nav').attr('data-calendar-id');

      if (typeof defaultDate == 'undefined') {
        defaultDate = false;
      }

      if (!calendar_id) {
        calendar_id = 0;
      }

      thisList.addClass('booked-loading');
      var booked_load_list_view_date_booking_options = {
        'action': 'booked_appointment_list_date',
        'date': date,
        'calendar_id': calendar_id,
        'force_default': defaultDate
      };
      $(document).trigger("booked-before-loading-appointment-list-booking-options");
      thisList.spin('booked_top');
      $.ajax({
        url: booked_js_vars.ajax_url,
        type: 'post',
        data: booked_load_list_view_date_booking_options,
        success: function success(html) {
          thisList.html(html);
          init_appt_list_date_picker();
          setTimeout(function () {
            thisList.removeClass('booked-loading');
          }, 1);
        }
      });
      return false;
    });

    bookedNewAppointment = function bookedNewAppointment(e) {
      e.preventDefault();
      var $button = $(this),
          title = $button.attr('data-title'),
          timeslot = $button.attr('data-timeslot'),
          date = $button.attr('data-date'),
          calendar_id = $button.attr('data-calendar-id'),
          $thisTimeslot = $button.parents('.timeslot'),
          is_list_view = $button.parents('.booked-calendar-wrap').hasClass('booked-list-view');

      if (typeof is_list_view != 'undefined' && is_list_view) {
        var new_calendar_id = $button.parents('.booked-list-view').find('.booked-list-view-nav').attr('data-calendar-id');
      } else {
        var new_calendar_id = $button.parents('table.booked-calendar').attr('data-calendar-id');
      }

      calendar_id = new_calendar_id ? new_calendar_id : calendar_id;
      booked_appt_form_options = {
        'action': 'booked_new_appointment_form',
        'date': date,
        'timeslot': timeslot,
        'calendar_id': calendar_id,
        'title': title
      };
      $(document).trigger("booked-before-loading-booking-form");
      create_booked_modal();
      setTimeout(function () {
        $.ajax({
          url: booked_js_vars.ajax_url,
          type: 'post',
          data: booked_appt_form_options,
          success: function success(html) {
            $('.bm-window').html(html);
            var bookedModal = $('.booked-modal');
            var bmWindow = bookedModal.find('.bm-window');
            bmWindow.css({
              'visibility': 'hidden'
            });
            bookedModal.removeClass('bm-loading');
            $(document).trigger("booked-on-new-app");
            resize_booked_modal();
            bmWindow.hide();
            $('.booked-modal .bm-overlay').find('.booked-spinner').remove();
            setTimeout(function () {
              bmWindow.css({
                'visibility': 'visible'
              });
              bmWindow.show();
            }, 50);
          }
        });
      }, 100);
      return false;
    };

    $('body').on('click', '.booked-calendar-wrap button.new-appt', bookedNewAppointment);
    var profileTabs = $('.booked-tabs');

    if (!profileTabs.find('li.active').length) {
      profileTabs.find('li:first-child').addClass("active");
    }

    if (profileTabs.length) {
      $('.booked-tab-content').hide();
      var activeTab = profileTabs.find('.active > a').attr('href');
      activeTab = activeTab.split('#');
      activeTab = activeTab[1];
      $('#profile-' + activeTab).show();
      profileTabs.find('li > a').on('click', function (e) {
        e.preventDefault();
        $('.booked-tab-content').hide();
        profileTabs.find('li').removeClass('active');
        $(this).parent().addClass('active');
        var activeTab = $(this).attr('href');
        activeTab = activeTab.split('#');
        activeTab = activeTab[1];
        $('#profile-' + activeTab).show();
        return false;
      });
    }

    $('body').on('click', '.booked-profile-appt-list .booked-show-cf', function (e) {
      e.preventDefault();
      var hiddenBlock = $(this).parent().find('.cf-meta-values-hidden');

      if (hiddenBlock.is(':visible')) {
        hiddenBlock.hide();
        $(this).removeClass('booked-cf-active');
      } else {
        hiddenBlock.show();
        $(this).addClass('booked-cf-active');
      }

      return false;
    });

    if ($('#loginform').length) {
      $('#loginform input[type="submit"]').on('click', function (e) {
        if ($('#loginform input[name="log"]').val() && $('#loginform input[name="pwd"]').val()) {
          $('#loginform .booked-custom-error').hide();
        } else {
          if ($('#loginform').parents('.booked-form-wrap').length) {
            e.preventDefault();
            $('#loginform').parents('.booked-form-wrap').find('.booked-custom-error').fadeOut(200).fadeIn(200);
          }
        }
      });
    }

    if ($('#profile-forgot').length) {
      $('#profile-forgot input[type="submit"]').on('click', function (e) {
        if ($('#profile-forgot input[name="user_login"]').val()) {
          $('#profile-forgot .booked-custom-error').hide();
        } else {
          e.preventDefault();
          $('#profile-forgot').find('.booked-custom-error').fadeOut(200).fadeIn(200);
        }
      });
    }

    if ($('.booked-upload-wrap').length) {
      $('.booked-upload-wrap input[type=file]').on('change', function () {
        var fileName = $(this).val();
        $(this).parent().find('span').html(fileName);
        $(this).parent().addClass('hasFile');
      });
    }

    $('body').on('click', '.booked-profile-appt-list .appt-block .cancel', function (e) {
      e.preventDefault();
      var $button = $(this),
          $thisParent = $button.parents('.appt-block'),
          appt_id = $thisParent.attr('data-appt-id');
      confirm_delete = confirm(booked_js_vars.i18n_confirm_appt_delete);

      if (confirm_delete == true) {
        var currentApptCount = parseInt($('.booked-profile-appt-list').find('h4').find('span.count').html());
        currentApptCount = parseInt(currentApptCount - 1);

        if (currentApptCount < 1) {
          $('.booked-profile-appt-list').find('h4').find('span.count').html('0');
          $('.no-appts-message').slideDown('fast');
        } else {
          $('.booked-profile-appt-list').find('h4').find('span.count').html(currentApptCount);
        }

        $('.appt-block').animate({
          'opacity': 0.4
        }, 0);
        $thisParent.slideUp('fast', function () {
          $(this).remove();
        });
        $.ajax({
          'url': booked_js_vars.ajax_url,
          'method': 'post',
          'data': {
            'action': 'booked_cancel_appt',
            'appt_id': appt_id
          },
          success: function success(data) {
            $('.appt-block').animate({
              'opacity': 1
            }, 150);
          }
        });
      }

      return false;
    });
    $('body').on('touchstart click', '.bm-overlay, .bm-window .close, .booked-form .cancel', function (e) {
      e.preventDefault();
      close_booked_modal();
      return false;
    });
    $('body').on('focusin', '.booked-form input', function () {
      if (this.title == this.value) {
        $(this).addClass('hasContent');
        this.value = '';
      }
    }).on('focusout', '.booked-form input', function () {
      if (this.value === '') {
        $(this).removeClass('hasContent');
        this.value = this.title;
      }
    });
    $('body').on('change', '.booked-form input', function () {
      var condition = $(this).attr('data-condition'),
          thisVal = $(this).val();

      if (condition && $('.condition-block').length) {
        $('.condition-block.' + condition).hide();
        $('#condition-' + thisVal).fadeIn(200);
        resize_booked_modal();
      }
    });
    $('body').on('submit', 'form#ajaxlogin', function (e) {
      e.preventDefault();
      $('form#ajaxlogin p.status').show().html('<i class="booked-icon booked-icon-spinner-clock booked-icon-spin"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_please_wait);
      resize_booked_modal();
      var $this = $(this),
          date = $this.data('date'),
          title = $this.data('title'),
          timeslot = $this.data('timeslot'),
          calendar_id = $this.data('calendar-id');
      $.ajax({
        type: 'post',
        url: booked_js_vars.ajax_url,
        data: $('form#ajaxlogin').serialize(),
        success: function success(data) {
          if (data == 'success') {
            close_booked_modal();
            var $button = $('<button data-title="' + title + '" data-timeslot="' + timeslot + '" data-date="' + date + '" data-calendar-id="' + calendar_id + '"></button>');
            $button.on('click', window.bookedNewAppointment);
            $button.triggerHandler('click');
            $button.unbind('click', window.bookedNewAppointment);
            $button.detach();
          } else {
            $('form#ajaxlogin p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_wrong_username_pass);
            resize_booked_modal();
          }
        }
      });
      e.preventDefault();
    });
    $('body').on('click', '.booked-forgot-password', function (e) {
      e.preventDefault();
      $('#ajaxlogin').hide();
      $('#ajaxforgot').show();
      resize_booked_modal();
    });
    $('body').on('click', '.booked-forgot-goback', function (e) {
      e.preventDefault();
      $('#ajaxlogin').show();
      $('#ajaxforgot').hide();
      resize_booked_modal();
    });
    $('body').on('submit', 'form#ajaxforgot', function (e) {
      e.preventDefault();
      $('form#ajaxforgot p.status').show().html('<i class="booked-icon booked-icon-spinner-clock booked-icon-spin"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_please_wait);
      resize_booked_modal();
      var $this = $(this);
      $.ajax({
        type: 'post',
        url: booked_js_vars.ajax_url,
        data: $('form#ajaxforgot').serialize(),
        success: function success(data) {
          if (data == 'success') {
            e.preventDefault();
            $('#ajaxlogin').show();
            $('#ajaxforgot').hide();
            $('form#ajaxlogin p.status').show().html('<i class="booked-icon booked-icon-check" style="color:#56c477"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_password_reset);
            resize_booked_modal();
          } else {
            $('form#ajaxforgot p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_password_reset_error);
            resize_booked_modal();
          }
        }
      });
      e.preventDefault();
    });
    $('body').on('click', '.booked-form input#submit-request-appointment', function (e) {
      $('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-spinner-clock booked-icon-spin"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_please_wait);
      resize_booked_modal();
      e.preventDefault();
      var customerType = $('#newAppointmentForm input[name=customer_type]').val(),
          customerID = $('#newAppointmentForm input[name=user_id]').val(),
          name = $('#newAppointmentForm input[name=booked_appt_name]').val(),
          surname = $('#newAppointmentForm input[name=booked_appt_surname]').val(),
          surnameActive = $('#newAppointmentForm input[name=booked_appt_surname]').length,
          guest_name = $('#newAppointmentForm input[name=guest_name]').val(),
          guest_surname = $('#newAppointmentForm input[name=guest_surname]').val(),
          guest_surnameActive = $('#newAppointmentForm input[name=guest_surname]').length,
          guest_email = $('#newAppointmentForm input[name=guest_email]').val(),
          guest_emailActive = $('#newAppointmentForm input[name=guest_email]').length,
          email = $('#newAppointmentForm input[name=booked_appt_email]').val(),
          password = $('#newAppointmentForm input[name=booked_appt_password]').val(),
          showRequiredError = false,
          ajaxRequests = [];
      $(this).parents('.booked-form').find('input,textarea,select').each(function (i, field) {
        var required = $(this).attr('required');

        if (required && $(field).attr('type') == 'hidden') {
          var fieldParts = $(field).attr('name');
          fieldParts = fieldParts.split('---');
          fieldName = fieldParts[0];
          fieldNumber = fieldParts[1].split('___');
          fieldNumber = fieldNumber[0];

          if (fieldName == 'radio-buttons-label') {
            var radioValue = false;
            $('input:radio[name="single-radio-button---' + fieldNumber + '[]"]:checked').each(function () {
              if ($(this).val()) {
                radioValue = $(this).val();
              }
            });

            if (!radioValue) {
              showRequiredError = true;
            }
          } else if (fieldName == 'checkboxes-label') {
            var checkboxValue = false;
            $('input:checkbox[name="single-checkbox---' + fieldNumber + '[]"]:checked').each(function () {
              if ($(this).val()) {
                checkboxValue = $(this).val();
              }
            });

            if (!checkboxValue) {
              showRequiredError = true;
            }
          }
        } else if (required && $(field).attr('type') != 'hidden' && $(field).val() == '') {
          showRequiredError = true;
        }
      });

      if (showRequiredError) {
        $('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_fill_out_required_fields);
        resize_booked_modal();
        return false;
      }

      if (customerType == 'new' && !name || customerType == 'new' && surnameActive && !surname || customerType == 'new' && !email || customerType == 'new' && !password) {
        $('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_appt_required_fields);
        resize_booked_modal();
        return false;
      }

      if (customerType == 'guest' && !guest_name || customerType == 'guest' && guest_emailActive && !guest_email || customerType == 'guest' && guest_surnameActive && !guest_surname) {
        $('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_appt_required_fields_guest);
        resize_booked_modal();
        return false;
      }

      if (customerType == 'current' && customerID || customerType == 'guest' && guest_name && !guest_surnameActive && !guest_emailActive || customerType == 'guest' && guest_name && guest_surnameActive && guest_surname && !guest_emailActive || customerType == 'guest' && guest_name && guest_emailActive && guest_email && !guest_surnameActive || customerType == 'guest' && guest_name && guest_emailActive && guest_email && guest_surnameActive && guest_surname) {
        SubmitRequestAppointment.currentUserOrGuest();
      }

      if (customerType == 'new' && name && email && password) {
        if (!surnameActive || surnameActive && surname) {
          SubmitRequestAppointment.newUser();
        }
      }
    });
    var SubmitRequestAppointment = {
      formSelector: '#newAppointmentForm',
      formBtnRequestSelector: '.booked-form input#submit-request-appointment',
      formStatusSelector: 'p.status',
      formSubmitBtnSelector: '#submit-request-appointment',
      apptContainerSelector: '.booked-appointment-details',
      baseFields: ['guest_name', 'guest_surname', 'guest_email', 'action', 'customer_type', 'user_id'],
      apptFields: ['appoinment', 'calendar_id', 'title', 'date', 'timestamp', 'timeslot'],
      userFields: ['booked_appt_name', 'booked_appt_surname', 'booked_appt_email', 'booked_appt_password'],
      captchaFields: ['captcha_word', 'captcha_code'],
      currentApptIndex: false,
      currentApptCounter: false,
      hasAnyErrors: false,
      currentUserOrGuest: function currentUserOrGuest() {
        var total_appts = SubmitRequestAppointment._totalAppts();

        if (!total_appts) {
          return;
        }

        SubmitRequestAppointment._showLoadingMessage();

        SubmitRequestAppointment._resetDefaultValues();

        var data = SubmitRequestAppointment._getBaseData();

        SubmitRequestAppointment.currentApptIndex = 0;
        SubmitRequestAppointment.currentApptCounter = 1;

        SubmitRequestAppointment._doRequestAppointment(data, total_appts);
      },
      newUser: function newUser() {
        var total_appts = SubmitRequestAppointment._totalAppts();

        if (!total_appts) {
          return;
        }

        SubmitRequestAppointment._showLoadingMessage();

        SubmitRequestAppointment._resetDefaultValues();

        var data = SubmitRequestAppointment._getBaseData();

        if (total_appts > 1) {
          var data_obj_with_no_reference = null;
          data_obj_with_no_reference = $.extend(true, {}, data);
          data_obj_with_no_reference = SubmitRequestAppointment._addUserRegistrationData(data_obj_with_no_reference);

          SubmitRequestAppointment._requestUserRegistration(data_obj_with_no_reference);

          data.customer_type = 'current';
        } else {
          data = SubmitRequestAppointment._addUserRegistrationData(data);
        }

        SubmitRequestAppointment.currentApptIndex = 0;

        SubmitRequestAppointment._doRequestAppointment(data, total_appts);
      },
      _doRequestAppointment: function _doRequestAppointment(data, total_appts) {
        var appt_fields = SubmitRequestAppointment.apptFields;

        if (SubmitRequestAppointment.currentApptIndex === 0) {
          SubmitRequestAppointment._hideCancelBtn();

          SubmitRequestAppointment._disableSubmitBtn();

          SubmitRequestAppointment.hasAnyErrors = false;
        }

        var data_obj_with_no_reference = $.extend(true, {}, data);

        for (var i = 0; i < appt_fields.length; i++) {
          data_obj_with_no_reference[appt_fields[i]] = SubmitRequestAppointment._getFieldVal(appt_fields[i], SubmitRequestAppointment.currentApptIndex);
        }

        var calendar_id = SubmitRequestAppointment._getFieldVal('calendar_id', SubmitRequestAppointment.currentApptIndex);

        data_obj_with_no_reference = SubmitRequestAppointment._addCustomFieldsData(data_obj_with_no_reference, calendar_id);

        var $appt = SubmitRequestAppointment._getApptElement(SubmitRequestAppointment.currentApptIndex);

        if (!$appt.hasClass('skip')) {
          $.ajax({
            type: 'post',
            url: booked_js_vars.ajax_url,
            data: data_obj_with_no_reference,
            success: function success(response) {
              SubmitRequestAppointment._requestAppointmentResponseHandler(response);

              SubmitRequestAppointment.currentApptIndex++;
              setTimeout(function () {
                if (SubmitRequestAppointment.currentApptCounter === total_appts) {
                  if (!SubmitRequestAppointment.hasAnyErrors) {
                    SubmitRequestAppointment._onAfterRequestAppointment();
                  } else {
                    SubmitRequestAppointment._enableSubmitBtn();

                    SubmitRequestAppointment._showCancelBtn();
                  }
                } else {
                  SubmitRequestAppointment.currentApptCounter++;

                  SubmitRequestAppointment._doRequestAppointment(data, total_appts);
                }
              }, 100);
            }
          });
        } else {
          SubmitRequestAppointment.currentApptIndex++;
          SubmitRequestAppointment.currentApptCounter++;

          SubmitRequestAppointment._doRequestAppointment(data, total_appts, SubmitRequestAppointment.currentApptIndex);
        }
      },
      _totalAppts: function _totalAppts() {
        return $(SubmitRequestAppointment.formSelector + ' input[name="appoinment[]"]').length;
      },
      _getBaseData: function _getBaseData() {
        var data = {},
            fields = SubmitRequestAppointment.baseFields;

        for (var i = 0; i < fields.length; i++) {
          data[fields[i]] = SubmitRequestAppointment._getFieldVal(fields[i]);
        }

        data['is_fe_form'] = true;
        data['total_appts'] = SubmitRequestAppointment._totalAppts();
        return data;
      },
      _getFieldVal: function _getFieldVal(field_name, field_index) {
        var field_name = typeof field_name === 'undefined' ? '' : field_name,
            field_index = typeof field_index === 'undefined' ? false : field_index,
            selector = SubmitRequestAppointment.formSelector + ' ';

        if (field_index === false) {
          selector += ' [name=' + field_name + ']';
          return $(selector).val();
        }

        selector += ' [name="' + field_name + '[]"]';
        return $(selector).eq(field_index).val();
      },
      _resetDefaultValues: function _resetDefaultValues() {
        $('.booked-form input').each(function () {
          var thisVal = $(this).val(),
              thisDefault = $(this).attr('title');

          if (thisDefault == thisVal) {
            $(this).val('');
          }
        });
      },
      _resetToDefaultValues: function _resetToDefaultValues() {
        $('.booked-form input').each(function () {
          var thisVal = $(this).val(),
              thisDefault = $(this).attr('title');

          if (!thisVal) {
            $(this).val(thisDefault);
          }
        });
      },
      _addUserRegistrationData: function _addUserRegistrationData(data) {
        $.each(SubmitRequestAppointment.userFields, function (index, field_name) {
          data[field_name] = SubmitRequestAppointment._getFieldVal(field_name);
        });
        $.each(SubmitRequestAppointment.captchaFields, function (index, field_name) {
          var field_value = SubmitRequestAppointment._getFieldVal(field_name);

          if (!field_value) {
            return;
          }

          data[field_name] = field_value;
        });
        return data;
      },
      _addCustomFieldsData: function _addCustomFieldsData(data, calendar_id) {
        var custom_fields_data = $('.cf-block [name]').filter(function (index) {
          var $this = $(this);
          return parseInt($this.data('calendar-id')) === parseInt(calendar_id) && $this.attr('name').match(/---\d+/g);
        }).each(function (index) {
          var $this = $(this),
              name = $this.attr('name'),
              value = $this.val(),
              type = $this.attr('type');

          if (!value) {
            return;
          }

          if (!name.match(/checkbox|radio+/g)) {
            data[name] = value;
            return;
          }

          if (name.match(/radio+/g) && $this.is(':checked')) {
            data[name] = value;
            return;
          }

          if (!name.match(/radio+/g) && typeof data[name] === 'undefined' || !name.match(/radio+/g) && data[name].constructor !== Array) {
            data[name] = [];
          }

          if (!$this.is(':checked')) {
            return;
          }

          data[name].push(value);
        });
        return data;
      },
      _requestUserRegistration: function _requestUserRegistration(base_data, appt_index) {
        $.ajax({
          type: 'post',
          url: booked_js_vars.ajax_url,
          data: base_data,
          async: false,
          success: function success(response) {
            SubmitRequestAppointment._requestUserRegistrationResponseHandler(response);
          }
        });
      },
      _requestUserRegistrationResponseHandler: function _requestUserRegistrationResponseHandler(response) {
        var response_parts = response.split('###'),
            data_result = response_parts[0].substr(response_parts[0].length - 5);

        if (data_result === 'error') {
          return;
        }
      },
      _requestAppointment: function _requestAppointment(response) {
        SubmitRequestAppointment._requestAppointmentResponseHandler(response);
      },
      _requestAppointmentResponseHandler: function _requestAppointmentResponseHandler(response) {
        var response_parts = response.split('###'),
            data_result = response_parts[0].substr(response_parts[0].length - 5);

        if (data_result === 'error') {
          SubmitRequestAppointment._requestAppointmentOnError(response_parts);

          return;
        }

        SubmitRequestAppointment._requestAppointmentOnSuccess(response_parts);
      },
      _requestAppointmentOnError: function _requestAppointmentOnError(response_parts) {
        var $apptEl = SubmitRequestAppointment._getApptElement();

        $(document).trigger("booked-on-requested-appt-error", [$apptEl]);

        SubmitRequestAppointment._highlightAppt();

        SubmitRequestAppointment._setStatusMsg(response_parts[1]);

        SubmitRequestAppointment.hasAnyErrors = true;
        resize_booked_modal();
      },
      _requestAppointmentOnSuccess: function _requestAppointmentOnSuccess(response_parts) {
        var $apptEl = SubmitRequestAppointment._getApptElement();

        $(document).trigger("booked-on-requested-appt-success", [$apptEl]);

        SubmitRequestAppointment._unhighlightAppt();
      },
      _onAfterRequestAppointment: function _onAfterRequestAppointment() {
        var redirectObj = {
          redirect: false
        };
        var redirect = $(document).trigger("booked-on-requested-appointment", [redirectObj]);

        if (redirectObj.redirect) {
          return;
        }

        if (booked_js_vars.profilePage) {
          window.location = booked_js_vars.profilePage;
          return;
        }

        SubmitRequestAppointment._reloadApptsList();

        SubmitRequestAppointment._reloadCalendarTable();
      },
      _setStatusMsg: function _setStatusMsg(msg) {
        var form_status_selector = SubmitRequestAppointment.formSelector + ' ' + SubmitRequestAppointment.formStatusSelector;
        $(form_status_selector).show().html('<i class="booked-icon booked-icon-alert" style="color:#E35656"></i>&nbsp;&nbsp;&nbsp;' + msg);
      },
      _getApptElement: function _getApptElement(appt_index) {
        var appt_index = typeof appt_index === 'undefined' ? SubmitRequestAppointment.currentApptIndex : appt_index,
            appt_cnt_selector = SubmitRequestAppointment.formSelector + ' ' + SubmitRequestAppointment.apptContainerSelector;
        return $(appt_cnt_selector).eq(appt_index);
      },
      _highlightAppt: function _highlightAppt(msg) {
        var $apptEl = SubmitRequestAppointment._getApptElement();

        if (!$apptEl.length) {
          return;
        }

        $apptEl.addClass('has-error');
      },
      _unhighlightAppt: function _unhighlightAppt(msg) {
        var $apptEl = SubmitRequestAppointment._getApptElement();

        if (!$apptEl.length) {
          return;
        }

        $apptEl.removeClass('has-error').addClass('skip');
      },
      _enableSubmitBtn: function _enableSubmitBtn() {
        var btn_selector = SubmitRequestAppointment.formSelector + ' ' + SubmitRequestAppointment.formSubmitBtnSelector;
        $(btn_selector).attr('disabled', false);
      },
      _disableSubmitBtn: function _disableSubmitBtn() {
        var btn_selector = SubmitRequestAppointment.formSelector + ' ' + SubmitRequestAppointment.formSubmitBtnSelector;
        $(btn_selector).attr('disabled', true);
      },
      _showCancelBtn: function _showCancelBtn() {
        $(SubmitRequestAppointment.formSelector).find('button.cancel').show();
      },
      _hideCancelBtn: function _hideCancelBtn() {
        $(SubmitRequestAppointment.formSelector).find('button.cancel').hide();
      },
      _showLoadingMessage: function _showLoadingMessage() {
        $('form#newAppointmentForm p.status').show().html('<i class="booked-icon booked-icon-spinner-clock booked-icon-spin"></i>&nbsp;&nbsp;&nbsp;' + booked_js_vars.i18n_please_wait);
      },
      _reloadApptsList: function _reloadApptsList() {
        if (!$('.booked-appt-list').length) {
          return;
        }

        $('.booked-appt-list').each(function () {
          var $thisApptList = $(this),
              date = $thisApptList.attr('data-list-date'),
              thisList = $thisApptList.parents('.booked-list-view'),
              defaultDate = thisList.attr('data-default'),
              calendar_id = parseInt($thisApptList.find('.booked-list-view-nav').attr('data-calendar-id')) || 0;
          defaultDate = typeof defaultDate === 'undefined' ? false : defaultDate;
          calendar_id = calendar_id ? calendar_id : 0;
          thisList.addClass('booked-loading');
          var booked_load_list_view_date_booking_options = {
            'action': 'booked_appointment_list_date',
            'date': date,
            'calendar_id': calendar_id,
            'force_default': defaultDate
          };
          $(document).trigger("booked-before-loading-appointment-list-booking-options");
          thisList.spin('booked_top');
          $.ajax({
            url: booked_js_vars.ajax_url,
            type: 'post',
            data: booked_load_list_view_date_booking_options,
            success: function success(html) {
              thisList.html(html);
              close_booked_modal();
              init_appt_list_date_picker();
              setTimeout(function () {
                thisList.removeClass('booked-loading');
              }, 1);
            }
          });
        });
      },
      _reloadCalendarTable: function _reloadCalendarTable() {
        if (!$('td.active').length) {
          return;
        }

        var $activeTD = $('td.active'),
            activeDate = $activeTD.attr('data-date'),
            calendar_id = parseInt($activeTD.parents('table').data('calendar-id')) || 0;
        booked_load_calendar_date_booking_options = {
          'action': 'booked_calendar_date',
          'date': activeDate,
          'calendar_id': calendar_id
        };
        $(document).trigger("booked-before-loading-calendar-booking-options");
        $.ajax({
          url: booked_js_vars.ajax_url,
          type: 'post',
          data: booked_load_calendar_date_booking_options,
          success: function success(html) {
            $('tr.entryBlock').find('td').html(html);
            close_booked_modal();
            $('tr.entryBlock').removeClass('booked-loading');
            $('tr.entryBlock').find('.booked-appt-list').hide().fadeIn(300);
            $('tr.entryBlock').find('.booked-appt-list').addClass('shown');
            adjust_calendar_boxes();
          }
        });
      }
    };
  });

  function bookedRemoveEmptyTRs() {
    $('table.booked-calendar').find('tr.week').each(function () {
      if ($(this).children().length == 0) {
        $(this).remove();
      }
    });
  }

  function savingState(show, limit_to) {
    show = typeof show !== 'undefined' ? show : true;
    limit_to = typeof limit_to !== 'undefined' ? limit_to : false;

    if (limit_to) {
      var $savingStateDIV = limit_to.find('li.active .savingState, .topSavingState.savingState, .calendarSavingState');
      var $stuffToHide = limit_to.find('.monthName');
      var $stuffToTransparent = limit_to.find('table.booked-calendar tbody');
    } else {
      var $savingStateDIV = $('li.active .savingState, .topSavingState.savingState, .calendarSavingState');
      var $stuffToHide = $('.monthName');
      var $stuffToTransparent = $('table.booked-calendar tbody');
    }

    if (show) {
      $savingStateDIV.fadeIn(200);
      $stuffToHide.hide();
      $stuffToTransparent.animate({
        'opacity': 0.2
      }, 100);
    } else {
      $savingStateDIV.hide();
      $stuffToHide.show();
      $stuffToTransparent.animate({
        'opacity': 1
      }, 0);
    }
  }

  $(document).ajaxStop(function () {
    savingState(false);
  });

  function init_appt_list_date_picker() {
    $('.booked_list_date_picker').each(function () {
      var thisDatePicker = $(this);
      var minDateVal = thisDatePicker.parents('.booked-appt-list').attr('data-min-date');
      var maxDateVal = thisDatePicker.parents('.booked-appt-list').attr('data-max-date');

      if (typeof minDateVal == 'undefined') {
        var minDateVal = thisDatePicker.attr('data-min-date');
      }

      thisDatePicker.datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: minDateVal,
        maxDate: maxDateVal,
        showAnim: false,
        beforeShow: function beforeShow(input, inst) {
          $('#ui-datepicker-div').removeClass();
          $('#ui-datepicker-div').addClass('booked_custom_date_picker');
        },
        onClose: function onClose(dateText) {
          $('.booked_list_date_picker_trigger').removeClass('booked-dp-active');
        },
        onSelect: function onSelect(dateText) {
          var thisInput = $(this),
              date = dateText,
              thisList = thisInput.parents('.booked-list-view'),
              defaultDate = thisList.attr('data-default'),
              calendar_id = thisInput.parents('.booked-list-view-nav').attr('data-calendar-id');

          if (typeof defaultDate == 'undefined') {
            defaultDate = false;
          }

          if (!calendar_id) {
            calendar_id = 0;
          }

          thisList.addClass('booked-loading');
          var booked_load_list_view_date_booking_options = {
            'action': 'booked_appointment_list_date',
            'date': date,
            'calendar_id': calendar_id,
            'force_default': defaultDate
          };
          $(document).trigger("booked-before-loading-appointment-list-booking-options");
          thisList.spin('booked_top');
          $.ajax({
            url: booked_js_vars.ajax_url,
            type: 'post',
            data: booked_load_list_view_date_booking_options,
            success: function success(html) {
              thisList.html(html);
              init_appt_list_date_picker();
              setTimeout(function () {
                thisList.removeClass('booked-loading');
              }, 1);
            }
          });
          return false;
        }
      });
    });
    $('body').on('click', '.booked_list_date_picker_trigger', function (e) {
      e.preventDefault();

      if (!$(this).hasClass('booked-dp-active')) {
        $(this).addClass('booked-dp-active');
        $(this).parents('.booked-appt-list').find('.booked_list_date_picker').datepicker('show');
      }
    });
  }

  var BookedTabs = {
    bookingModalSelector: '.booked-modal',
    tabSelector: '.booked-tabs',
    tabNavSelector: '.booked-tabs-nav span',
    tabCntSelector: '.booked-tabs-cnt',
    Init: function Init() {
      $(document).on('click', this.tabNavSelector, this.tabsNav);
    },
    tabsNav: function tabsNav(event) {
      event.preventDefault();
      BookedTabs.switchToTab($(this));
      BookedTabs.maybeResizeBookingModal();
    },
    switchToTab: function switchToTab(tab_nav_item) {
      var $nav_item = tab_nav_item,
          tab_cnt_class = '.' + $nav_item.data('tab-cnt'),
          $tabs_container = $nav_item.parents(BookedTabs.tabSelector);
      $nav_item.addClass('active').siblings().removeClass('active');
      $tabs_container.find(BookedTabs.tabCntSelector + ' ' + tab_cnt_class).addClass('active').siblings().removeClass('active');
    },
    maybeResizeBookingModal: function maybeResizeBookingModal() {
      if (!$(BookedTabs.bookingModalSelector).length) {
        return;
      }

      resize_booked_modal();
    }
  };
})(jQuery, window, document);

function create_booked_modal() {
  var windowHeight = jQuery(window).height();
  var windowWidth = jQuery(window).width();

  if (windowWidth > 720) {
    var maxModalHeight = windowHeight - 295;
  } else {
    var maxModalHeight = windowHeight;
  }

  jQuery('body input, body textarea, body select').blur();
  jQuery('body').addClass('booked-noScroll');
  jQuery('<div class="booked-modal bm-loading"><div class="bm-overlay"></div><div class="bm-window"><div style="height:100px"></div></div></div>').appendTo('body');
  jQuery('.booked-modal .bm-overlay').spin('booked_white');
  jQuery('.booked-modal .bm-window').css({
    'max-height': maxModalHeight + 'px'
  });
}

var previousRealModalHeight = 100;

function resize_booked_modal() {
  var windowHeight = jQuery(window).height();
  var windowWidth = jQuery(window).width();
  var common43 = 43;

  if (jQuery('.booked-modal .bm-window .booked-scrollable').length) {
    var realModalHeight = jQuery('.booked-modal .bm-window .booked-scrollable')[0].scrollHeight;

    if (realModalHeight < 100) {
      realModalHeight = previousRealModalHeight;
    } else {
      previousRealModalHeight = realModalHeight;
    }
  } else {
    var realModalHeight = 0;
  }

  var minimumWindowHeight = realModalHeight + common43 + common43;
  var modalScrollableHeight = realModalHeight - common43;
  var maxModalHeight;
  var maxFormHeight;

  if (windowHeight < minimumWindowHeight) {
    modalScrollableHeight = windowHeight - common43 - common43;
  } else {
    modalScrollableHeight = realModalHeight;
  }

  if (windowWidth > 720) {
    maxModalHeight = modalScrollableHeight - 25;
    maxFormHeight = maxModalHeight - 15;
    var modalNegMargin = (maxModalHeight + 78) / 2;
  } else {
    maxModalHeight = windowHeight - common43;
    maxFormHeight = maxModalHeight - 60;
    var modalNegMargin = maxModalHeight / 2;
  }

  jQuery('.booked-modal').css({
    'margin-top': '-' + modalNegMargin + 'px'
  });
  jQuery('.booked-modal .bm-window').css({
    'max-height': maxModalHeight + 'px'
  });
  jQuery('.booked-modal .bm-window .booked-scrollable').css({
    'max-height': maxFormHeight + 'px'
  });
}

function close_booked_modal() {
  var modal = jQuery('.booked-modal');
  modal.fadeOut(200);
  modal.addClass('bm-closing');
  jQuery('body').removeClass('booked-noScroll');
  setTimeout(function () {
    modal.remove();
  }, 300);
}

function init_tooltips(container) {
  jQuery('.tooltipster').tooltipster({
    theme: 'tooltipster-light',
    animation: 'grow',
    speed: 200,
    delay: 50,
    offsetY: -15
  });
}

function adjust_calendar_boxes() {
  jQuery('.booked-calendar').each(function () {
    var windowWidth = jQuery(window).width();
    var smallCalendar = jQuery(this).parents('.booked-calendar-wrap').hasClass('small');
    var boxesWidth = jQuery(this).find('tbody tr.week td').width();
    var calendarHeight = jQuery(this).height();
    boxesHeight = boxesWidth * 1;
    jQuery(this).find('tbody tr.week td').height(boxesHeight);
    jQuery(this).find('tbody tr.week td .date').css('line-height', boxesHeight + 'px');
    jQuery(this).find('tbody tr.week td .date .number').css('line-height', boxesHeight + 'px');

    if (smallCalendar || windowWidth < 720) {
      jQuery(this).find('tbody tr.week td .date .number').css('line-height', boxesHeight + 'px');
    } else {
      jQuery(this).find('tbody tr.week td .date .number').css('line-height', '');
    }

    var calendarHeight = jQuery(this).height();
    jQuery(this).parent().height(calendarHeight);
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_well-known-sy-07cc72","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-df99e4"], () => (__webpack_exec__("./assets/frontend/js/functions.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5nby8uL2Fzc2V0cy9mcm9udGVuZC9qcy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOlsiYm9va2VkX2xvYWRfY2FsZW5kYXJfZGF0ZV9ib29raW5nX29wdGlvbnMiLCJib29rZWRfYXBwdF9mb3JtX29wdGlvbnMiLCJib29rZWROZXdBcHBvaW50bWVudCIsIiQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIiR3aW4iLCJmbiIsInNwaW4iLCJwcmVzZXRzIiwiYm9va2VkIiwibGluZXMiLCJsZW5ndGgiLCJ3aWR0aCIsInJhZGl1cyIsImNvcm5lcnMiLCJyb3RhdGUiLCJkaXJlY3Rpb24iLCJjb2xvciIsInNwZWVkIiwidHJhaWwiLCJzaGFkb3ciLCJod2FjY2VsIiwiY2xhc3NOYW1lIiwiekluZGV4IiwidG9wIiwibGVmdCIsImJvb2tlZF90b3AiLCJzY2FsZSIsImJvb2tlZF93aGl0ZSIsIm9uIiwiYWRqdXN0X2NhbGVuZGFyX2JveGVzIiwicmVzaXplX2Jvb2tlZF9tb2RhbCIsIkJvb2tlZFRhYnMiLCJJbml0IiwiYWpheFJlcXVlc3RzIiwiZWFjaCIsInRoaXNDYWxlbmRhciIsImNhbGVuZGFyX21vbnRoIiwiZmluZCIsImF0dHIiLCJpbml0X3Rvb2x0aXBzIiwidGhpc0xpc3QiLCJsaXN0X2RhdGUiLCJib29rZWRSZW1vdmVFbXB0eVRScyIsImluaXRfYXBwdF9saXN0X2RhdGVfcGlja2VyIiwiY2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHNlbGVjdG9yIiwidGhpc0lzQ2FsZW5kYXIiLCJwYXJlbnRzIiwiaGFzQ2xhc3MiLCJ0aGlzQ2FsZW5kYXJXcmFwIiwidGhpc0RlZmF1bHREYXRlIiwiYWRkQ2xhc3MiLCJhcmdzIiwidmFsIiwidHJpZ2dlciIsImFqYXgiLCJ1cmwiLCJib29rZWRfanNfdmFycyIsImFqYXhfdXJsIiwidHlwZSIsImRhdGEiLCJzdWNjZXNzIiwiaHRtbCIsInNldFRpbWVvdXQiLCJyZW1vdmVDbGFzcyIsInNhdmluZ1N0YXRlIiwiJGJ1dHRvbiIsImdvdG9Nb250aCIsInRoaXNDYWxlbmRhckRlZmF1bHQiLCJjYWxlbmRhcl9pZCIsIiR0aGlzRGF0ZSIsImJvb2tlZF9jYWxlbmRhcl90YWJsZSIsIiR0aGlzUm93IiwicGFyZW50IiwiZGF0ZSIsImNvbHNwYW5TZXR0aW5nIiwicHVibGljQXBwb2ludG1lbnRzIiwicmVtb3ZlIiwiY2FsZW5kYXJIZWlnaHQiLCJoZWlnaHQiLCJhZnRlciIsImZhZGVJbiIsIiR0aGlzTGluayIsImRlZmF1bHREYXRlIiwiYm9va2VkX2xvYWRfbGlzdF92aWV3X2RhdGVfYm9va2luZ19vcHRpb25zIiwidGl0bGUiLCJ0aW1lc2xvdCIsIiR0aGlzVGltZXNsb3QiLCJpc19saXN0X3ZpZXciLCJuZXdfY2FsZW5kYXJfaWQiLCJjcmVhdGVfYm9va2VkX21vZGFsIiwiYm9va2VkTW9kYWwiLCJibVdpbmRvdyIsImNzcyIsImhpZGUiLCJzaG93IiwicHJvZmlsZVRhYnMiLCJhY3RpdmVUYWIiLCJzcGxpdCIsImhpZGRlbkJsb2NrIiwiaXMiLCJmYWRlT3V0IiwiZmlsZU5hbWUiLCIkdGhpc1BhcmVudCIsImFwcHRfaWQiLCJjb25maXJtX2RlbGV0ZSIsImNvbmZpcm0iLCJpMThuX2NvbmZpcm1fYXBwdF9kZWxldGUiLCJjdXJyZW50QXBwdENvdW50IiwicGFyc2VJbnQiLCJzbGlkZURvd24iLCJhbmltYXRlIiwic2xpZGVVcCIsImNsb3NlX2Jvb2tlZF9tb2RhbCIsInZhbHVlIiwiY29uZGl0aW9uIiwidGhpc1ZhbCIsImkxOG5fcGxlYXNlX3dhaXQiLCIkdGhpcyIsInNlcmlhbGl6ZSIsInRyaWdnZXJIYW5kbGVyIiwidW5iaW5kIiwiZGV0YWNoIiwiaTE4bl93cm9uZ191c2VybmFtZV9wYXNzIiwiaTE4bl9wYXNzd29yZF9yZXNldCIsImkxOG5fcGFzc3dvcmRfcmVzZXRfZXJyb3IiLCJjdXN0b21lclR5cGUiLCJjdXN0b21lcklEIiwibmFtZSIsInN1cm5hbWUiLCJzdXJuYW1lQWN0aXZlIiwiZ3Vlc3RfbmFtZSIsImd1ZXN0X3N1cm5hbWUiLCJndWVzdF9zdXJuYW1lQWN0aXZlIiwiZ3Vlc3RfZW1haWwiLCJndWVzdF9lbWFpbEFjdGl2ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzaG93UmVxdWlyZWRFcnJvciIsImkiLCJmaWVsZCIsInJlcXVpcmVkIiwiZmllbGRQYXJ0cyIsImZpZWxkTmFtZSIsImZpZWxkTnVtYmVyIiwicmFkaW9WYWx1ZSIsImNoZWNrYm94VmFsdWUiLCJpMThuX2ZpbGxfb3V0X3JlcXVpcmVkX2ZpZWxkcyIsImkxOG5fYXBwdF9yZXF1aXJlZF9maWVsZHMiLCJpMThuX2FwcHRfcmVxdWlyZWRfZmllbGRzX2d1ZXN0IiwiU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50IiwiY3VycmVudFVzZXJPckd1ZXN0IiwibmV3VXNlciIsImZvcm1TZWxlY3RvciIsImZvcm1CdG5SZXF1ZXN0U2VsZWN0b3IiLCJmb3JtU3RhdHVzU2VsZWN0b3IiLCJmb3JtU3VibWl0QnRuU2VsZWN0b3IiLCJhcHB0Q29udGFpbmVyU2VsZWN0b3IiLCJiYXNlRmllbGRzIiwiYXBwdEZpZWxkcyIsInVzZXJGaWVsZHMiLCJjYXB0Y2hhRmllbGRzIiwiY3VycmVudEFwcHRJbmRleCIsImN1cnJlbnRBcHB0Q291bnRlciIsImhhc0FueUVycm9ycyIsInRvdGFsX2FwcHRzIiwiX3RvdGFsQXBwdHMiLCJfc2hvd0xvYWRpbmdNZXNzYWdlIiwiX3Jlc2V0RGVmYXVsdFZhbHVlcyIsIl9nZXRCYXNlRGF0YSIsIl9kb1JlcXVlc3RBcHBvaW50bWVudCIsImRhdGFfb2JqX3dpdGhfbm9fcmVmZXJlbmNlIiwiZXh0ZW5kIiwiX2FkZFVzZXJSZWdpc3RyYXRpb25EYXRhIiwiX3JlcXVlc3RVc2VyUmVnaXN0cmF0aW9uIiwiY3VzdG9tZXJfdHlwZSIsImFwcHRfZmllbGRzIiwiX2hpZGVDYW5jZWxCdG4iLCJfZGlzYWJsZVN1Ym1pdEJ0biIsIl9nZXRGaWVsZFZhbCIsIl9hZGRDdXN0b21GaWVsZHNEYXRhIiwiJGFwcHQiLCJfZ2V0QXBwdEVsZW1lbnQiLCJyZXNwb25zZSIsIl9yZXF1ZXN0QXBwb2ludG1lbnRSZXNwb25zZUhhbmRsZXIiLCJfb25BZnRlclJlcXVlc3RBcHBvaW50bWVudCIsIl9lbmFibGVTdWJtaXRCdG4iLCJfc2hvd0NhbmNlbEJ0biIsImZpZWxkcyIsImZpZWxkX25hbWUiLCJmaWVsZF9pbmRleCIsInNlbGVjdG9yIiwiZXEiLCJ0aGlzRGVmYXVsdCIsIl9yZXNldFRvRGVmYXVsdFZhbHVlcyIsImluZGV4IiwiZmllbGRfdmFsdWUiLCJjdXN0b21fZmllbGRzX2RhdGEiLCJmaWx0ZXIiLCJtYXRjaCIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJwdXNoIiwiYmFzZV9kYXRhIiwiYXBwdF9pbmRleCIsImFzeW5jIiwiX3JlcXVlc3RVc2VyUmVnaXN0cmF0aW9uUmVzcG9uc2VIYW5kbGVyIiwicmVzcG9uc2VfcGFydHMiLCJkYXRhX3Jlc3VsdCIsInN1YnN0ciIsIl9yZXF1ZXN0QXBwb2ludG1lbnQiLCJfcmVxdWVzdEFwcG9pbnRtZW50T25FcnJvciIsIl9yZXF1ZXN0QXBwb2ludG1lbnRPblN1Y2Nlc3MiLCIkYXBwdEVsIiwiX2hpZ2hsaWdodEFwcHQiLCJfc2V0U3RhdHVzTXNnIiwiX3VuaGlnaGxpZ2h0QXBwdCIsInJlZGlyZWN0T2JqIiwicmVkaXJlY3QiLCJwcm9maWxlUGFnZSIsImxvY2F0aW9uIiwiX3JlbG9hZEFwcHRzTGlzdCIsIl9yZWxvYWRDYWxlbmRhclRhYmxlIiwibXNnIiwiZm9ybV9zdGF0dXNfc2VsZWN0b3IiLCJhcHB0X2NudF9zZWxlY3RvciIsImJ0bl9zZWxlY3RvciIsIiR0aGlzQXBwdExpc3QiLCIkYWN0aXZlVEQiLCJhY3RpdmVEYXRlIiwiY2hpbGRyZW4iLCJsaW1pdF90byIsIiRzYXZpbmdTdGF0ZURJViIsIiRzdHVmZlRvSGlkZSIsIiRzdHVmZlRvVHJhbnNwYXJlbnQiLCJhamF4U3RvcCIsInRoaXNEYXRlUGlja2VyIiwibWluRGF0ZVZhbCIsIm1heERhdGVWYWwiLCJkYXRlcGlja2VyIiwiZGF0ZUZvcm1hdCIsIm1pbkRhdGUiLCJtYXhEYXRlIiwic2hvd0FuaW0iLCJiZWZvcmVTaG93IiwiaW5wdXQiLCJpbnN0Iiwib25DbG9zZSIsImRhdGVUZXh0Iiwib25TZWxlY3QiLCJ0aGlzSW5wdXQiLCJib29raW5nTW9kYWxTZWxlY3RvciIsInRhYlNlbGVjdG9yIiwidGFiTmF2U2VsZWN0b3IiLCJ0YWJDbnRTZWxlY3RvciIsInRhYnNOYXYiLCJldmVudCIsInN3aXRjaFRvVGFiIiwibWF5YmVSZXNpemVCb29raW5nTW9kYWwiLCJ0YWJfbmF2X2l0ZW0iLCIkbmF2X2l0ZW0iLCJ0YWJfY250X2NsYXNzIiwiJHRhYnNfY29udGFpbmVyIiwic2libGluZ3MiLCJqUXVlcnkiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsIm1heE1vZGFsSGVpZ2h0IiwiYmx1ciIsImFwcGVuZFRvIiwicHJldmlvdXNSZWFsTW9kYWxIZWlnaHQiLCJjb21tb240MyIsInJlYWxNb2RhbEhlaWdodCIsInNjcm9sbEhlaWdodCIsIm1pbmltdW1XaW5kb3dIZWlnaHQiLCJtb2RhbFNjcm9sbGFibGVIZWlnaHQiLCJtYXhGb3JtSGVpZ2h0IiwibW9kYWxOZWdNYXJnaW4iLCJtb2RhbCIsImNvbnRhaW5lciIsInRvb2x0aXBzdGVyIiwidGhlbWUiLCJhbmltYXRpb24iLCJkZWxheSIsIm9mZnNldFkiLCJzbWFsbENhbGVuZGFyIiwiYm94ZXNXaWR0aCIsImJveGVzSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLHlDQUFKLEVBQThDQyx3QkFBOUMsRUFBdUVDLG9CQUF2RTtBQUE0Rjs7QUFBQyxDQUFDLFVBQVNDLENBQVQsRUFBV0MsTUFBWCxFQUFrQkMsUUFBbEIsRUFBMkJDLFNBQTNCLEVBQXFDO0FBQUMsTUFBSUMsSUFBSSxHQUFDSixDQUFDLENBQUNDLE1BQUQsQ0FBVjtBQUFtQkQsR0FBQyxDQUFDSyxF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QWdJO0FBQUN2QixZQUFNLENBQUMsSUFBRCxDQUFOLENBQWFyTyxJQUFiLENBQWtCLGdDQUFsQixFQUFvRDBELEdBQXBELENBQXdELGFBQXhELEVBQXNFLEVBQXRFO0FBQTJFOztBQUM5dUIsUUFBSWYsY0FBYyxHQUFDMEwsTUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhekwsTUFBYixFQUFuQjtBQUF5Q3lMLFVBQU0sQ0FBQyxJQUFELENBQU4sQ0FBYS9MLE1BQWIsR0FBc0JNLE1BQXRCLENBQTZCRCxjQUE3QjtBQUE4QyxHQUQxRDtBQUM2RCxDIiwiZmlsZSI6ImZyb250ZW5kLWZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBib29rZWRfbG9hZF9jYWxlbmRhcl9kYXRlX2Jvb2tpbmdfb3B0aW9ucyxib29rZWRfYXBwdF9mb3JtX29wdGlvbnMsYm9va2VkTmV3QXBwb2ludG1lbnQ7OyhmdW5jdGlvbigkLHdpbmRvdyxkb2N1bWVudCx1bmRlZmluZWQpe3ZhciAkd2luPSQod2luZG93KTskLmZuLnNwaW4ucHJlc2V0cy5ib29rZWQ9e2xpbmVzOjEwLGxlbmd0aDo3LHdpZHRoOjUscmFkaXVzOjExLGNvcm5lcnM6MSxyb3RhdGU6MCxkaXJlY3Rpb246MSxjb2xvcjonIzU1NScsc3BlZWQ6MSx0cmFpbDo2MCxzaGFkb3c6ZmFsc2UsaHdhY2NlbDpmYWxzZSxjbGFzc05hbWU6J2Jvb2tlZC1zcGlubmVyJyx6SW5kZXg6MmU5LHRvcDonNTAlJyxsZWZ0Oic1MCUnfVxyXG4gICAgJC5mbi5zcGluLnByZXNldHMuYm9va2VkX3RvcD17bGluZXM6MTEsbGVuZ3RoOjEwLHdpZHRoOjYscmFkaXVzOjE1LGNvcm5lcnM6MSxyb3RhdGU6MCxzY2FsZTowLjUsZGlyZWN0aW9uOjEsY29sb3I6JyNhYWFhYWEnLHNwZWVkOjEsdHJhaWw6NjAsc2hhZG93OmZhbHNlLGh3YWNjZWw6ZmFsc2UsY2xhc3NOYW1lOidib29rZWQtc3Bpbm5lciBib29rZWQtc3Bpbm5lci10b3AnLHpJbmRleDoyZTksdG9wOicxNXB4JyxsZWZ0Oic1MCUnfVxyXG4gICAgJC5mbi5zcGluLnByZXNldHMuYm9va2VkX3doaXRlPXtsaW5lczoxMyxsZW5ndGg6MTEsd2lkdGg6NSxyYWRpdXM6MTgsc2NhbGU6MSxjb3JuZXJzOjEscm90YXRlOjAsZGlyZWN0aW9uOjEsY29sb3I6JyNmZmYnLHNwZWVkOjEsdHJhaWw6NjAsc2hhZG93OmZhbHNlLGh3YWNjZWw6ZmFsc2UsY2xhc3NOYW1lOidib29rZWQtc3Bpbm5lciBib29rZWQtd2hpdGUnLHpJbmRleDoyZTksdG9wOic1MCUnLGxlZnQ6JzUwJSd9XHJcbiAgICAkd2luLm9uKCdyZXNpemUnLGZ1bmN0aW9uKCl7YWRqdXN0X2NhbGVuZGFyX2JveGVzKCk7cmVzaXplX2Jvb2tlZF9tb2RhbCgpO30pOyR3aW4ub24oJ2xvYWQnLGZ1bmN0aW9uKCl7Qm9va2VkVGFicy5Jbml0KCk7dmFyIGFqYXhSZXF1ZXN0cz1bXTthZGp1c3RfY2FsZW5kYXJfYm94ZXMoKTskKCcuYm9va2VkLWNhbGVuZGFyLXdyYXAnKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIHRoaXNDYWxlbmRhcj0kKHRoaXMpO3ZhciBjYWxlbmRhcl9tb250aD10aGlzQ2FsZW5kYXIuZmluZCgndGFibGUuYm9va2VkLWNhbGVuZGFyJykuYXR0cignZGF0YS1jYWxlbmRhci1kYXRlJyk7dGhpc0NhbGVuZGFyLmF0dHIoJ2RhdGEtZGVmYXVsdCcsY2FsZW5kYXJfbW9udGgpO2luaXRfdG9vbHRpcHModGhpc0NhbGVuZGFyKTt9KTskKCcuYm9va2VkLWxpc3QtdmlldycpLmVhY2goZnVuY3Rpb24oKXt2YXIgdGhpc0xpc3Q9JCh0aGlzKTt2YXIgbGlzdF9kYXRlPXRoaXNMaXN0LmZpbmQoJy5ib29rZWQtYXBwdC1saXN0JykuYXR0cignZGF0YS1saXN0LWRhdGUnKTt0aGlzTGlzdC5hdHRyKCdkYXRhLWRlZmF1bHQnLGxpc3RfZGF0ZSk7fSk7Ym9va2VkUmVtb3ZlRW1wdHlUUnMoKTtpbml0X2FwcHRfbGlzdF9kYXRlX3BpY2tlcigpOyQoJy5ib29rZWRfY2FsZW5kYXJfY2hvb3NlcicpLmNoYW5nZShmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyICRzZWxlY3Rvcj0kKHRoaXMpLHRoaXNJc0NhbGVuZGFyPSRzZWxlY3Rvci5wYXJlbnRzKCcuYm9va2VkLWNhbGVuZGFyU3dpdGNoZXInKS5oYXNDbGFzcygnY2FsZW5kYXInKTtpZighdGhpc0lzQ2FsZW5kYXIpe3ZhciB0aGlzQ2FsZW5kYXJXcmFwPSRzZWxlY3Rvci5wYXJlbnRzKCcuYm9va2VkLWNhbGVuZGFyLXNob3J0Y29kZS13cmFwJykuZmluZCgnLmJvb2tlZC1saXN0LXZpZXcnKSx0aGlzRGVmYXVsdERhdGU9dGhpc0NhbGVuZGFyV3JhcC5hdHRyKCdkYXRhLWRlZmF1bHQnKSx0aGlzSXNDYWxlbmRhcj0kc2VsZWN0b3IucGFyZW50cygnLmJvb2tlZC1jYWxlbmRhclN3aXRjaGVyJykuaGFzQ2xhc3MoJ2NhbGVuZGFyJyk7aWYodHlwZW9mIHRoaXNEZWZhdWx0RGF0ZT09J3VuZGVmaW5lZCcpe3RoaXNEZWZhdWx0RGF0ZT1mYWxzZTt9XHJcbiAgICAgICAgdGhpc0NhbGVuZGFyV3JhcC5hZGRDbGFzcygnYm9va2VkLWxvYWRpbmcnKTt2YXIgYXJncz17J2FjdGlvbic6J2Jvb2tlZF9hcHBvaW50bWVudF9saXN0X2RhdGUnLCdkYXRlJzp0aGlzRGVmYXVsdERhdGUsJ2NhbGVuZGFyX2lkJzokc2VsZWN0b3IudmFsKCl9OyQoZG9jdW1lbnQpLnRyaWdnZXIoXCJib29rZWQtYmVmb3JlLWxvYWRpbmctYXBwb2ludG1lbnQtbGlzdC1ib29raW5nLW9wdGlvbnNcIik7dGhpc0NhbGVuZGFyV3JhcC5zcGluKCdib29rZWRfdG9wJyk7JC5hamF4KHt1cmw6Ym9va2VkX2pzX3ZhcnMuYWpheF91cmwsdHlwZToncG9zdCcsZGF0YTphcmdzLHN1Y2Nlc3M6ZnVuY3Rpb24oaHRtbCl7dGhpc0NhbGVuZGFyV3JhcC5odG1sKGh0bWwpO2luaXRfYXBwdF9saXN0X2RhdGVfcGlja2VyKCk7c2V0VGltZW91dChmdW5jdGlvbigpe3RoaXNDYWxlbmRhcldyYXAucmVtb3ZlQ2xhc3MoJ2Jvb2tlZC1sb2FkaW5nJyk7fSwxKTt9fSk7fWVsc2V7dmFyIHRoaXNDYWxlbmRhcldyYXA9JHNlbGVjdG9yLnBhcmVudHMoJy5ib29rZWQtY2FsZW5kYXItc2hvcnRjb2RlLXdyYXAnKS5maW5kKCcuYm9va2VkLWNhbGVuZGFyLXdyYXAnKSx0aGlzRGVmYXVsdERhdGU9dGhpc0NhbGVuZGFyV3JhcC5hdHRyKCdkYXRhLWRlZmF1bHQnKTtpZih0eXBlb2YgdGhpc0RlZmF1bHREYXRlPT0ndW5kZWZpbmVkJyl7dGhpc0RlZmF1bHREYXRlPWZhbHNlO31cclxuICAgICAgICB2YXIgYXJncz17J2FjdGlvbic6J2Jvb2tlZF9jYWxlbmRhcl9tb250aCcsJ2dvdG9Nb250aCc6dGhpc0RlZmF1bHREYXRlLCdjYWxlbmRhcl9pZCc6JHNlbGVjdG9yLnZhbCgpfTtzYXZpbmdTdGF0ZSh0cnVlLHRoaXNDYWxlbmRhcldyYXApOyQuYWpheCh7dXJsOmJvb2tlZF9qc192YXJzLmFqYXhfdXJsLHR5cGU6J3Bvc3QnLGRhdGE6YXJncyxzdWNjZXNzOmZ1bmN0aW9uKGh0bWwpe3RoaXNDYWxlbmRhcldyYXAuaHRtbChodG1sKTthZGp1c3RfY2FsZW5kYXJfYm94ZXMoKTtib29rZWRSZW1vdmVFbXB0eVRScygpO2luaXRfdG9vbHRpcHModGhpc0NhbGVuZGFyV3JhcCk7JCh3aW5kb3cpLnRyaWdnZXIoJ2Jvb2tlZC1sb2FkLWNhbGVuZGFyJyxhcmdzLCRzZWxlY3Rvcik7fX0pO31cclxuICAgICAgICByZXR1cm4gZmFsc2U7fSk7JCgnYm9keScpLm9uKCdjbGljaycsJy5ib29rZWQtY2FsZW5kYXItd3JhcCAucGFnZS1yaWdodCwgLmJvb2tlZC1jYWxlbmRhci13cmFwIC5wYWdlLWxlZnQsIC5ib29rZWQtY2FsZW5kYXItd3JhcCAubW9udGhOYW1lIGEnLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgJGJ1dHRvbj0kKHRoaXMpLGdvdG9Nb250aD0kYnV0dG9uLmF0dHIoJ2RhdGEtZ290bycpLHRoaXNDYWxlbmRhcldyYXA9JGJ1dHRvbi5wYXJlbnRzKCcuYm9va2VkLWNhbGVuZGFyLXdyYXAnKSx0aGlzQ2FsZW5kYXJEZWZhdWx0PXRoaXNDYWxlbmRhcldyYXAuYXR0cignZGF0YS1kZWZhdWx0JyksY2FsZW5kYXJfaWQ9JGJ1dHRvbi5wYXJlbnRzKCd0YWJsZS5ib29rZWQtY2FsZW5kYXInKS5hdHRyKCdkYXRhLWNhbGVuZGFyLWlkJyk7aWYodHlwZW9mIHRoaXNDYWxlbmRhckRlZmF1bHQ9PSd1bmRlZmluZWQnKXt0aGlzQ2FsZW5kYXJEZWZhdWx0PWZhbHNlO31cclxuICAgICAgICB2YXIgYXJncz17J2FjdGlvbic6J2Jvb2tlZF9jYWxlbmRhcl9tb250aCcsJ2dvdG9Nb250aCc6Z290b01vbnRoLCdjYWxlbmRhcl9pZCc6Y2FsZW5kYXJfaWQsJ2ZvcmNlX2RlZmF1bHQnOnRoaXNDYWxlbmRhckRlZmF1bHR9O3NhdmluZ1N0YXRlKHRydWUsdGhpc0NhbGVuZGFyV3JhcCk7JC5hamF4KHt1cmw6Ym9va2VkX2pzX3ZhcnMuYWpheF91cmwsdHlwZToncG9zdCcsZGF0YTphcmdzLHN1Y2Nlc3M6ZnVuY3Rpb24oaHRtbCl7dGhpc0NhbGVuZGFyV3JhcC5odG1sKGh0bWwpO2FkanVzdF9jYWxlbmRhcl9ib3hlcygpO2Jvb2tlZFJlbW92ZUVtcHR5VFJzKCk7aW5pdF90b29sdGlwcyh0aGlzQ2FsZW5kYXJXcmFwKTskKHdpbmRvdykudHJpZ2dlcignYm9va2VkLWxvYWQtY2FsZW5kYXInLGFyZ3MsJGJ1dHRvbik7fX0pO3JldHVybiBmYWxzZTt9KTskKCdib2R5Jykub24oJ2NsaWNrJywnLmJvb2tlZC1jYWxlbmRhci13cmFwIHRyLndlZWsgdGQnLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgJHRoaXNEYXRlPSQodGhpcyksYm9va2VkX2NhbGVuZGFyX3RhYmxlPSR0aGlzRGF0ZS5wYXJlbnRzKCd0YWJsZS5ib29rZWQtY2FsZW5kYXInKSwkdGhpc1Jvdz0kdGhpc0RhdGUucGFyZW50KCksZGF0ZT0kdGhpc0RhdGUuYXR0cignZGF0YS1kYXRlJyksY2FsZW5kYXJfaWQ9Ym9va2VkX2NhbGVuZGFyX3RhYmxlLmF0dHIoJ2RhdGEtY2FsZW5kYXItaWQnKSxjb2xzcGFuU2V0dGluZz0kdGhpc1Jvdy5maW5kKCd0ZCcpLmxlbmd0aDtpZighY2FsZW5kYXJfaWQpe2NhbGVuZGFyX2lkPTA7fVxyXG4gICAgICAgIGlmKCR0aGlzRGF0ZS5oYXNDbGFzcygnYmx1cicpfHwkdGhpc0RhdGUuaGFzQ2xhc3MoJ2Jvb2tlZCcpJiYhYm9va2VkX2pzX3ZhcnMucHVibGljQXBwb2ludG1lbnRzfHwkdGhpc0RhdGUuaGFzQ2xhc3MoJ3ByZXYtZGF0ZScpKXt9ZWxzZSBpZigkdGhpc0RhdGUuaGFzQ2xhc3MoJ2FjdGl2ZScpKXskdGhpc0RhdGUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyQoJ3RyLmVudHJ5QmxvY2snKS5yZW1vdmUoKTt2YXIgY2FsZW5kYXJIZWlnaHQ9Ym9va2VkX2NhbGVuZGFyX3RhYmxlLmhlaWdodCgpO2Jvb2tlZF9jYWxlbmRhcl90YWJsZS5wYXJlbnQoKS5oZWlnaHQoY2FsZW5kYXJIZWlnaHQpO31lbHNleyQoJ3RyLndlZWsgdGQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7JHRoaXNEYXRlLmFkZENsYXNzKCdhY3RpdmUnKTskKCd0ci5lbnRyeUJsb2NrJykucmVtb3ZlKCk7JHRoaXNSb3cuYWZ0ZXIoJzx0ciBjbGFzcz1cImVudHJ5QmxvY2sgYm9va2VkLWxvYWRpbmdcIj48dGQgY29sc3Bhbj1cIicrY29sc3BhblNldHRpbmcrJ1wiPjwvdGQ+PC90cj4nKTskKCd0ci5lbnRyeUJsb2NrJykuZmluZCgndGQnKS5zcGluKCdib29rZWQnKTtib29rZWRfbG9hZF9jYWxlbmRhcl9kYXRlX2Jvb2tpbmdfb3B0aW9ucz17J2FjdGlvbic6J2Jvb2tlZF9jYWxlbmRhcl9kYXRlJywnZGF0ZSc6ZGF0ZSwnY2FsZW5kYXJfaWQnOmNhbGVuZGFyX2lkfTskKGRvY3VtZW50KS50cmlnZ2VyKFwiYm9va2VkLWJlZm9yZS1sb2FkaW5nLWNhbGVuZGFyLWJvb2tpbmctb3B0aW9uc1wiKTt2YXIgY2FsZW5kYXJIZWlnaHQ9Ym9va2VkX2NhbGVuZGFyX3RhYmxlLmhlaWdodCgpO2Jvb2tlZF9jYWxlbmRhcl90YWJsZS5wYXJlbnQoKS5oZWlnaHQoY2FsZW5kYXJIZWlnaHQpOyQuYWpheCh7dXJsOmJvb2tlZF9qc192YXJzLmFqYXhfdXJsLHR5cGU6J3Bvc3QnLGRhdGE6Ym9va2VkX2xvYWRfY2FsZW5kYXJfZGF0ZV9ib29raW5nX29wdGlvbnMsc3VjY2VzczpmdW5jdGlvbihodG1sKXskKCd0ci5lbnRyeUJsb2NrJykuZmluZCgndGQnKS5odG1sKGh0bWwpOyQoJ3RyLmVudHJ5QmxvY2snKS5yZW1vdmVDbGFzcygnYm9va2VkLWxvYWRpbmcnKTskKCd0ci5lbnRyeUJsb2NrJykuZmluZCgnLmJvb2tlZC1hcHB0LWxpc3QnKS5mYWRlSW4oMzAwKTskKCd0ci5lbnRyeUJsb2NrJykuZmluZCgnLmJvb2tlZC1hcHB0LWxpc3QnKS5hZGRDbGFzcygnc2hvd24nKTthZGp1c3RfY2FsZW5kYXJfYm94ZXMoKTt9fSk7fVxyXG4gICAgICAgIHJldHVybjt9KTskKCdib2R5Jykub24oJ2NsaWNrJywnLmJvb2tlZC1saXN0LXZpZXcgLmJvb2tlZC1saXN0LXZpZXctZGF0ZS1wcmV2LCAuYm9va2VkLWxpc3QtdmlldyAuYm9va2VkLWxpc3Qtdmlldy1kYXRlLW5leHQnLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgJHRoaXNMaW5rPSQodGhpcyksZGF0ZT0kdGhpc0xpbmsuYXR0cignZGF0YS1kYXRlJyksdGhpc0xpc3Q9JHRoaXNMaW5rLnBhcmVudHMoJy5ib29rZWQtbGlzdC12aWV3JyksZGVmYXVsdERhdGU9dGhpc0xpc3QuYXR0cignZGF0YS1kZWZhdWx0JyksY2FsZW5kYXJfaWQ9JHRoaXNMaW5rLnBhcmVudHMoJy5ib29rZWQtbGlzdC12aWV3LW5hdicpLmF0dHIoJ2RhdGEtY2FsZW5kYXItaWQnKTtpZih0eXBlb2YgZGVmYXVsdERhdGU9PSd1bmRlZmluZWQnKXtkZWZhdWx0RGF0ZT1mYWxzZTt9XHJcbiAgICAgICAgaWYoIWNhbGVuZGFyX2lkKXtjYWxlbmRhcl9pZD0wO31cclxuICAgICAgICB0aGlzTGlzdC5hZGRDbGFzcygnYm9va2VkLWxvYWRpbmcnKTt2YXIgYm9va2VkX2xvYWRfbGlzdF92aWV3X2RhdGVfYm9va2luZ19vcHRpb25zPXsnYWN0aW9uJzonYm9va2VkX2FwcG9pbnRtZW50X2xpc3RfZGF0ZScsJ2RhdGUnOmRhdGUsJ2NhbGVuZGFyX2lkJzpjYWxlbmRhcl9pZCwnZm9yY2VfZGVmYXVsdCc6ZGVmYXVsdERhdGV9OyQoZG9jdW1lbnQpLnRyaWdnZXIoXCJib29rZWQtYmVmb3JlLWxvYWRpbmctYXBwb2ludG1lbnQtbGlzdC1ib29raW5nLW9wdGlvbnNcIik7dGhpc0xpc3Quc3BpbignYm9va2VkX3RvcCcpOyQuYWpheCh7dXJsOmJvb2tlZF9qc192YXJzLmFqYXhfdXJsLHR5cGU6J3Bvc3QnLGRhdGE6Ym9va2VkX2xvYWRfbGlzdF92aWV3X2RhdGVfYm9va2luZ19vcHRpb25zLHN1Y2Nlc3M6ZnVuY3Rpb24oaHRtbCl7dGhpc0xpc3QuaHRtbChodG1sKTtpbml0X2FwcHRfbGlzdF9kYXRlX3BpY2tlcigpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzTGlzdC5yZW1vdmVDbGFzcygnYm9va2VkLWxvYWRpbmcnKTt9LDEpO319KTtyZXR1cm4gZmFsc2U7fSk7Ym9va2VkTmV3QXBwb2ludG1lbnQ9ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciAkYnV0dG9uPSQodGhpcyksdGl0bGU9JGJ1dHRvbi5hdHRyKCdkYXRhLXRpdGxlJyksdGltZXNsb3Q9JGJ1dHRvbi5hdHRyKCdkYXRhLXRpbWVzbG90JyksZGF0ZT0kYnV0dG9uLmF0dHIoJ2RhdGEtZGF0ZScpLGNhbGVuZGFyX2lkPSRidXR0b24uYXR0cignZGF0YS1jYWxlbmRhci1pZCcpLCR0aGlzVGltZXNsb3Q9JGJ1dHRvbi5wYXJlbnRzKCcudGltZXNsb3QnKSxpc19saXN0X3ZpZXc9JGJ1dHRvbi5wYXJlbnRzKCcuYm9va2VkLWNhbGVuZGFyLXdyYXAnKS5oYXNDbGFzcygnYm9va2VkLWxpc3QtdmlldycpO2lmKHR5cGVvZiBpc19saXN0X3ZpZXchPSd1bmRlZmluZWQnJiZpc19saXN0X3ZpZXcpe3ZhciBuZXdfY2FsZW5kYXJfaWQ9JGJ1dHRvbi5wYXJlbnRzKCcuYm9va2VkLWxpc3QtdmlldycpLmZpbmQoJy5ib29rZWQtbGlzdC12aWV3LW5hdicpLmF0dHIoJ2RhdGEtY2FsZW5kYXItaWQnKTt9ZWxzZXt2YXIgbmV3X2NhbGVuZGFyX2lkPSRidXR0b24ucGFyZW50cygndGFibGUuYm9va2VkLWNhbGVuZGFyJykuYXR0cignZGF0YS1jYWxlbmRhci1pZCcpO31cclxuICAgICAgICBjYWxlbmRhcl9pZD1uZXdfY2FsZW5kYXJfaWQ/bmV3X2NhbGVuZGFyX2lkOmNhbGVuZGFyX2lkO2Jvb2tlZF9hcHB0X2Zvcm1fb3B0aW9ucz17J2FjdGlvbic6J2Jvb2tlZF9uZXdfYXBwb2ludG1lbnRfZm9ybScsJ2RhdGUnOmRhdGUsJ3RpbWVzbG90Jzp0aW1lc2xvdCwnY2FsZW5kYXJfaWQnOmNhbGVuZGFyX2lkLCd0aXRsZSc6dGl0bGV9OyQoZG9jdW1lbnQpLnRyaWdnZXIoXCJib29rZWQtYmVmb3JlLWxvYWRpbmctYm9va2luZy1mb3JtXCIpO2NyZWF0ZV9ib29rZWRfbW9kYWwoKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JC5hamF4KHt1cmw6Ym9va2VkX2pzX3ZhcnMuYWpheF91cmwsdHlwZToncG9zdCcsZGF0YTpib29rZWRfYXBwdF9mb3JtX29wdGlvbnMsc3VjY2VzczpmdW5jdGlvbihodG1sKXskKCcuYm0td2luZG93JykuaHRtbChodG1sKTt2YXIgYm9va2VkTW9kYWw9JCgnLmJvb2tlZC1tb2RhbCcpO3ZhciBibVdpbmRvdz1ib29rZWRNb2RhbC5maW5kKCcuYm0td2luZG93Jyk7Ym1XaW5kb3cuY3NzKHsndmlzaWJpbGl0eSc6J2hpZGRlbid9KTtib29rZWRNb2RhbC5yZW1vdmVDbGFzcygnYm0tbG9hZGluZycpOyQoZG9jdW1lbnQpLnRyaWdnZXIoXCJib29rZWQtb24tbmV3LWFwcFwiKTtyZXNpemVfYm9va2VkX21vZGFsKCk7Ym1XaW5kb3cuaGlkZSgpOyQoJy5ib29rZWQtbW9kYWwgLmJtLW92ZXJsYXknKS5maW5kKCcuYm9va2VkLXNwaW5uZXInKS5yZW1vdmUoKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Ym1XaW5kb3cuY3NzKHsndmlzaWJpbGl0eSc6J3Zpc2libGUnfSk7Ym1XaW5kb3cuc2hvdygpO30sNTApO319KTt9LDEwMCk7cmV0dXJuIGZhbHNlO31cclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmJvb2tlZC1jYWxlbmRhci13cmFwIGJ1dHRvbi5uZXctYXBwdCcsYm9va2VkTmV3QXBwb2ludG1lbnQpO3ZhciBwcm9maWxlVGFicz0kKCcuYm9va2VkLXRhYnMnKTtpZighcHJvZmlsZVRhYnMuZmluZCgnbGkuYWN0aXZlJykubGVuZ3RoKXtwcm9maWxlVGFicy5maW5kKCdsaTpmaXJzdC1jaGlsZCcpLmFkZENsYXNzKFwiYWN0aXZlXCIpO31cclxuICAgICAgICBpZihwcm9maWxlVGFicy5sZW5ndGgpeyQoJy5ib29rZWQtdGFiLWNvbnRlbnQnKS5oaWRlKCk7dmFyIGFjdGl2ZVRhYj1wcm9maWxlVGFicy5maW5kKCcuYWN0aXZlID4gYScpLmF0dHIoJ2hyZWYnKTthY3RpdmVUYWI9YWN0aXZlVGFiLnNwbGl0KCcjJyk7YWN0aXZlVGFiPWFjdGl2ZVRhYlsxXTskKCcjcHJvZmlsZS0nK2FjdGl2ZVRhYikuc2hvdygpO3Byb2ZpbGVUYWJzLmZpbmQoJ2xpID4gYScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpOyQoJy5ib29rZWQtdGFiLWNvbnRlbnQnKS5oaWRlKCk7cHJvZmlsZVRhYnMuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7dmFyIGFjdGl2ZVRhYj0kKHRoaXMpLmF0dHIoJ2hyZWYnKTthY3RpdmVUYWI9YWN0aXZlVGFiLnNwbGl0KCcjJyk7YWN0aXZlVGFiPWFjdGl2ZVRhYlsxXTskKCcjcHJvZmlsZS0nK2FjdGl2ZVRhYikuc2hvdygpO3JldHVybiBmYWxzZTt9KTt9XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5ib29rZWQtcHJvZmlsZS1hcHB0LWxpc3QgLmJvb2tlZC1zaG93LWNmJyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIGhpZGRlbkJsb2NrPSQodGhpcykucGFyZW50KCkuZmluZCgnLmNmLW1ldGEtdmFsdWVzLWhpZGRlbicpO2lmKGhpZGRlbkJsb2NrLmlzKCc6dmlzaWJsZScpKXtoaWRkZW5CbG9jay5oaWRlKCk7JCh0aGlzKS5yZW1vdmVDbGFzcygnYm9va2VkLWNmLWFjdGl2ZScpO31lbHNle2hpZGRlbkJsb2NrLnNob3coKTskKHRoaXMpLmFkZENsYXNzKCdib29rZWQtY2YtYWN0aXZlJyk7fVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7fSk7aWYoJCgnI2xvZ2luZm9ybScpLmxlbmd0aCl7JCgnI2xvZ2luZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtpZigkKCcjbG9naW5mb3JtIGlucHV0W25hbWU9XCJsb2dcIl0nKS52YWwoKSYmJCgnI2xvZ2luZm9ybSBpbnB1dFtuYW1lPVwicHdkXCJdJykudmFsKCkpeyQoJyNsb2dpbmZvcm0gLmJvb2tlZC1jdXN0b20tZXJyb3InKS5oaWRlKCk7fWVsc2V7aWYoJCgnI2xvZ2luZm9ybScpLnBhcmVudHMoJy5ib29rZWQtZm9ybS13cmFwJykubGVuZ3RoKXtlLnByZXZlbnREZWZhdWx0KCk7JCgnI2xvZ2luZm9ybScpLnBhcmVudHMoJy5ib29rZWQtZm9ybS13cmFwJykuZmluZCgnLmJvb2tlZC1jdXN0b20tZXJyb3InKS5mYWRlT3V0KDIwMCkuZmFkZUluKDIwMCk7fX19KTt9XHJcbiAgICAgICAgaWYoJCgnI3Byb2ZpbGUtZm9yZ290JykubGVuZ3RoKXskKCcjcHJvZmlsZS1mb3Jnb3QgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7aWYoJCgnI3Byb2ZpbGUtZm9yZ290IGlucHV0W25hbWU9XCJ1c2VyX2xvZ2luXCJdJykudmFsKCkpeyQoJyNwcm9maWxlLWZvcmdvdCAuYm9va2VkLWN1c3RvbS1lcnJvcicpLmhpZGUoKTt9ZWxzZXtlLnByZXZlbnREZWZhdWx0KCk7JCgnI3Byb2ZpbGUtZm9yZ290JykuZmluZCgnLmJvb2tlZC1jdXN0b20tZXJyb3InKS5mYWRlT3V0KDIwMCkuZmFkZUluKDIwMCk7fX0pO31cclxuICAgICAgICBpZigkKCcuYm9va2VkLXVwbG9hZC13cmFwJykubGVuZ3RoKXskKCcuYm9va2VkLXVwbG9hZC13cmFwIGlucHV0W3R5cGU9ZmlsZV0nKS5vbignY2hhbmdlJyxmdW5jdGlvbigpe3ZhciBmaWxlTmFtZT0kKHRoaXMpLnZhbCgpOyQodGhpcykucGFyZW50KCkuZmluZCgnc3BhbicpLmh0bWwoZmlsZU5hbWUpOyQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2hhc0ZpbGUnKTt9KTt9XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5ib29rZWQtcHJvZmlsZS1hcHB0LWxpc3QgLmFwcHQtYmxvY2sgLmNhbmNlbCcsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciAkYnV0dG9uPSQodGhpcyksJHRoaXNQYXJlbnQ9JGJ1dHRvbi5wYXJlbnRzKCcuYXBwdC1ibG9jaycpLGFwcHRfaWQ9JHRoaXNQYXJlbnQuYXR0cignZGF0YS1hcHB0LWlkJyk7Y29uZmlybV9kZWxldGU9Y29uZmlybShib29rZWRfanNfdmFycy5pMThuX2NvbmZpcm1fYXBwdF9kZWxldGUpO2lmKGNvbmZpcm1fZGVsZXRlPT10cnVlKXt2YXIgY3VycmVudEFwcHRDb3VudD1wYXJzZUludCgkKCcuYm9va2VkLXByb2ZpbGUtYXBwdC1saXN0JykuZmluZCgnaDQnKS5maW5kKCdzcGFuLmNvdW50JykuaHRtbCgpKTtjdXJyZW50QXBwdENvdW50PXBhcnNlSW50KGN1cnJlbnRBcHB0Q291bnQtMSk7aWYoY3VycmVudEFwcHRDb3VudDwxKXskKCcuYm9va2VkLXByb2ZpbGUtYXBwdC1saXN0JykuZmluZCgnaDQnKS5maW5kKCdzcGFuLmNvdW50JykuaHRtbCgnMCcpOyQoJy5uby1hcHB0cy1tZXNzYWdlJykuc2xpZGVEb3duKCdmYXN0Jyk7fWVsc2V7JCgnLmJvb2tlZC1wcm9maWxlLWFwcHQtbGlzdCcpLmZpbmQoJ2g0JykuZmluZCgnc3Bhbi5jb3VudCcpLmh0bWwoY3VycmVudEFwcHRDb3VudCk7fVxyXG4gICAgICAgICAgICAkKCcuYXBwdC1ibG9jaycpLmFuaW1hdGUoeydvcGFjaXR5JzowLjR9LDApOyR0aGlzUGFyZW50LnNsaWRlVXAoJ2Zhc3QnLGZ1bmN0aW9uKCl7JCh0aGlzKS5yZW1vdmUoKTt9KTskLmFqYXgoeyd1cmwnOmJvb2tlZF9qc192YXJzLmFqYXhfdXJsLCdtZXRob2QnOidwb3N0JywnZGF0YSc6eydhY3Rpb24nOidib29rZWRfY2FuY2VsX2FwcHQnLCdhcHB0X2lkJzphcHB0X2lkfSxzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpeyQoJy5hcHB0LWJsb2NrJykuYW5pbWF0ZSh7J29wYWNpdHknOjF9LDE1MCk7fX0pO31cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO30pOyQoJ2JvZHknKS5vbigndG91Y2hzdGFydCBjbGljaycsJy5ibS1vdmVybGF5LCAuYm0td2luZG93IC5jbG9zZSwgLmJvb2tlZC1mb3JtIC5jYW5jZWwnLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTtjbG9zZV9ib29rZWRfbW9kYWwoKTtyZXR1cm4gZmFsc2U7fSk7JCgnYm9keScpLm9uKCdmb2N1c2luJywnLmJvb2tlZC1mb3JtIGlucHV0JyxmdW5jdGlvbigpe2lmKHRoaXMudGl0bGU9PXRoaXMudmFsdWUpeyQodGhpcykuYWRkQ2xhc3MoJ2hhc0NvbnRlbnQnKTt0aGlzLnZhbHVlPScnO319KS5vbignZm9jdXNvdXQnLCcuYm9va2VkLWZvcm0gaW5wdXQnLGZ1bmN0aW9uKCl7aWYodGhpcy52YWx1ZT09PScnKXskKHRoaXMpLnJlbW92ZUNsYXNzKCdoYXNDb250ZW50Jyk7dGhpcy52YWx1ZT10aGlzLnRpdGxlO319KTskKCdib2R5Jykub24oJ2NoYW5nZScsJy5ib29rZWQtZm9ybSBpbnB1dCcsZnVuY3Rpb24oKXt2YXIgY29uZGl0aW9uPSQodGhpcykuYXR0cignZGF0YS1jb25kaXRpb24nKSx0aGlzVmFsPSQodGhpcykudmFsKCk7aWYoY29uZGl0aW9uJiYkKCcuY29uZGl0aW9uLWJsb2NrJykubGVuZ3RoKXskKCcuY29uZGl0aW9uLWJsb2NrLicrY29uZGl0aW9uKS5oaWRlKCk7JCgnI2NvbmRpdGlvbi0nK3RoaXNWYWwpLmZhZGVJbigyMDApO3Jlc2l6ZV9ib29rZWRfbW9kYWwoKTt9fSk7JCgnYm9keScpLm9uKCdzdWJtaXQnLCdmb3JtI2FqYXhsb2dpbicsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpOyQoJ2Zvcm0jYWpheGxvZ2luIHAuc3RhdHVzJykuc2hvdygpLmh0bWwoJzxpIGNsYXNzPVwiYm9va2VkLWljb24gYm9va2VkLWljb24tc3Bpbm5lci1jbG9jayBib29rZWQtaWNvbi1zcGluXCI+PC9pPiZuYnNwOyZuYnNwOyZuYnNwOycrYm9va2VkX2pzX3ZhcnMuaTE4bl9wbGVhc2Vfd2FpdCk7cmVzaXplX2Jvb2tlZF9tb2RhbCgpO3ZhciAkdGhpcz0kKHRoaXMpLGRhdGU9JHRoaXMuZGF0YSgnZGF0ZScpLHRpdGxlPSR0aGlzLmRhdGEoJ3RpdGxlJyksdGltZXNsb3Q9JHRoaXMuZGF0YSgndGltZXNsb3QnKSxjYWxlbmRhcl9pZD0kdGhpcy5kYXRhKCdjYWxlbmRhci1pZCcpOyQuYWpheCh7dHlwZToncG9zdCcsdXJsOmJvb2tlZF9qc192YXJzLmFqYXhfdXJsLGRhdGE6JCgnZm9ybSNhamF4bG9naW4nKS5zZXJpYWxpemUoKSxzdWNjZXNzOmZ1bmN0aW9uKGRhdGEpe2lmKGRhdGE9PSdzdWNjZXNzJyl7Y2xvc2VfYm9va2VkX21vZGFsKCk7dmFyICRidXR0b249JCgnPGJ1dHRvbiBkYXRhLXRpdGxlPVwiJyt0aXRsZSsnXCIgZGF0YS10aW1lc2xvdD1cIicrdGltZXNsb3QrJ1wiIGRhdGEtZGF0ZT1cIicrZGF0ZSsnXCIgZGF0YS1jYWxlbmRhci1pZD1cIicrY2FsZW5kYXJfaWQrJ1wiPjwvYnV0dG9uPicpOyRidXR0b24ub24oJ2NsaWNrJyx3aW5kb3cuYm9va2VkTmV3QXBwb2ludG1lbnQpOyRidXR0b24udHJpZ2dlckhhbmRsZXIoJ2NsaWNrJyk7JGJ1dHRvbi51bmJpbmQoJ2NsaWNrJyx3aW5kb3cuYm9va2VkTmV3QXBwb2ludG1lbnQpOyRidXR0b24uZGV0YWNoKCk7fWVsc2V7JCgnZm9ybSNhamF4bG9naW4gcC5zdGF0dXMnKS5zaG93KCkuaHRtbCgnPGkgY2xhc3M9XCJib29rZWQtaWNvbiBib29rZWQtaWNvbi1hbGVydFwiIHN0eWxlPVwiY29sb3I6I0UzNTY1NlwiPjwvaT4mbmJzcDsmbmJzcDsmbmJzcDsnK2Jvb2tlZF9qc192YXJzLmkxOG5fd3JvbmdfdXNlcm5hbWVfcGFzcyk7cmVzaXplX2Jvb2tlZF9tb2RhbCgpO319fSk7ZS5wcmV2ZW50RGVmYXVsdCgpO30pOyQoJ2JvZHknKS5vbignY2xpY2snLCcuYm9va2VkLWZvcmdvdC1wYXNzd29yZCcsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpOyQoJyNhamF4bG9naW4nKS5oaWRlKCk7JCgnI2FqYXhmb3Jnb3QnKS5zaG93KCk7cmVzaXplX2Jvb2tlZF9tb2RhbCgpO30pOyQoJ2JvZHknKS5vbignY2xpY2snLCcuYm9va2VkLWZvcmdvdC1nb2JhY2snLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTskKCcjYWpheGxvZ2luJykuc2hvdygpOyQoJyNhamF4Zm9yZ290JykuaGlkZSgpO3Jlc2l6ZV9ib29rZWRfbW9kYWwoKTt9KTskKCdib2R5Jykub24oJ3N1Ym1pdCcsJ2Zvcm0jYWpheGZvcmdvdCcsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpOyQoJ2Zvcm0jYWpheGZvcmdvdCBwLnN0YXR1cycpLnNob3coKS5odG1sKCc8aSBjbGFzcz1cImJvb2tlZC1pY29uIGJvb2tlZC1pY29uLXNwaW5uZXItY2xvY2sgYm9va2VkLWljb24tc3BpblwiPjwvaT4mbmJzcDsmbmJzcDsmbmJzcDsnK2Jvb2tlZF9qc192YXJzLmkxOG5fcGxlYXNlX3dhaXQpO3Jlc2l6ZV9ib29rZWRfbW9kYWwoKTt2YXIgJHRoaXM9JCh0aGlzKTskLmFqYXgoe3R5cGU6J3Bvc3QnLHVybDpib29rZWRfanNfdmFycy5hamF4X3VybCxkYXRhOiQoJ2Zvcm0jYWpheGZvcmdvdCcpLnNlcmlhbGl6ZSgpLHN1Y2Nlc3M6ZnVuY3Rpb24oZGF0YSl7aWYoZGF0YT09J3N1Y2Nlc3MnKXtlLnByZXZlbnREZWZhdWx0KCk7JCgnI2FqYXhsb2dpbicpLnNob3coKTskKCcjYWpheGZvcmdvdCcpLmhpZGUoKTskKCdmb3JtI2FqYXhsb2dpbiBwLnN0YXR1cycpLnNob3coKS5odG1sKCc8aSBjbGFzcz1cImJvb2tlZC1pY29uIGJvb2tlZC1pY29uLWNoZWNrXCIgc3R5bGU9XCJjb2xvcjojNTZjNDc3XCI+PC9pPiZuYnNwOyZuYnNwOyZuYnNwOycrYm9va2VkX2pzX3ZhcnMuaTE4bl9wYXNzd29yZF9yZXNldCk7cmVzaXplX2Jvb2tlZF9tb2RhbCgpO31lbHNleyQoJ2Zvcm0jYWpheGZvcmdvdCBwLnN0YXR1cycpLnNob3coKS5odG1sKCc8aSBjbGFzcz1cImJvb2tlZC1pY29uIGJvb2tlZC1pY29uLWFsZXJ0XCIgc3R5bGU9XCJjb2xvcjojRTM1NjU2XCI+PC9pPiZuYnNwOyZuYnNwOyZuYnNwOycrYm9va2VkX2pzX3ZhcnMuaTE4bl9wYXNzd29yZF9yZXNldF9lcnJvcik7cmVzaXplX2Jvb2tlZF9tb2RhbCgpO319fSk7ZS5wcmV2ZW50RGVmYXVsdCgpO30pOyQoJ2JvZHknKS5vbignY2xpY2snLCcuYm9va2VkLWZvcm0gaW5wdXQjc3VibWl0LXJlcXVlc3QtYXBwb2ludG1lbnQnLGZ1bmN0aW9uKGUpeyQoJ2Zvcm0jbmV3QXBwb2ludG1lbnRGb3JtIHAuc3RhdHVzJykuc2hvdygpLmh0bWwoJzxpIGNsYXNzPVwiYm9va2VkLWljb24gYm9va2VkLWljb24tc3Bpbm5lci1jbG9jayBib29rZWQtaWNvbi1zcGluXCI+PC9pPiZuYnNwOyZuYnNwOyZuYnNwOycrYm9va2VkX2pzX3ZhcnMuaTE4bl9wbGVhc2Vfd2FpdCk7cmVzaXplX2Jvb2tlZF9tb2RhbCgpO2UucHJldmVudERlZmF1bHQoKTt2YXIgY3VzdG9tZXJUeXBlPSQoJyNuZXdBcHBvaW50bWVudEZvcm0gaW5wdXRbbmFtZT1jdXN0b21lcl90eXBlXScpLnZhbCgpLGN1c3RvbWVySUQ9JCgnI25ld0FwcG9pbnRtZW50Rm9ybSBpbnB1dFtuYW1lPXVzZXJfaWRdJykudmFsKCksbmFtZT0kKCcjbmV3QXBwb2ludG1lbnRGb3JtIGlucHV0W25hbWU9Ym9va2VkX2FwcHRfbmFtZV0nKS52YWwoKSxzdXJuYW1lPSQoJyNuZXdBcHBvaW50bWVudEZvcm0gaW5wdXRbbmFtZT1ib29rZWRfYXBwdF9zdXJuYW1lXScpLnZhbCgpLHN1cm5hbWVBY3RpdmU9JCgnI25ld0FwcG9pbnRtZW50Rm9ybSBpbnB1dFtuYW1lPWJvb2tlZF9hcHB0X3N1cm5hbWVdJykubGVuZ3RoLGd1ZXN0X25hbWU9JCgnI25ld0FwcG9pbnRtZW50Rm9ybSBpbnB1dFtuYW1lPWd1ZXN0X25hbWVdJykudmFsKCksZ3Vlc3Rfc3VybmFtZT0kKCcjbmV3QXBwb2ludG1lbnRGb3JtIGlucHV0W25hbWU9Z3Vlc3Rfc3VybmFtZV0nKS52YWwoKSxndWVzdF9zdXJuYW1lQWN0aXZlPSQoJyNuZXdBcHBvaW50bWVudEZvcm0gaW5wdXRbbmFtZT1ndWVzdF9zdXJuYW1lXScpLmxlbmd0aCxndWVzdF9lbWFpbD0kKCcjbmV3QXBwb2ludG1lbnRGb3JtIGlucHV0W25hbWU9Z3Vlc3RfZW1haWxdJykudmFsKCksZ3Vlc3RfZW1haWxBY3RpdmU9JCgnI25ld0FwcG9pbnRtZW50Rm9ybSBpbnB1dFtuYW1lPWd1ZXN0X2VtYWlsXScpLmxlbmd0aCxlbWFpbD0kKCcjbmV3QXBwb2ludG1lbnRGb3JtIGlucHV0W25hbWU9Ym9va2VkX2FwcHRfZW1haWxdJykudmFsKCkscGFzc3dvcmQ9JCgnI25ld0FwcG9pbnRtZW50Rm9ybSBpbnB1dFtuYW1lPWJvb2tlZF9hcHB0X3Bhc3N3b3JkXScpLnZhbCgpLHNob3dSZXF1aXJlZEVycm9yPWZhbHNlLGFqYXhSZXF1ZXN0cz1bXTskKHRoaXMpLnBhcmVudHMoJy5ib29rZWQtZm9ybScpLmZpbmQoJ2lucHV0LHRleHRhcmVhLHNlbGVjdCcpLmVhY2goZnVuY3Rpb24oaSxmaWVsZCl7dmFyIHJlcXVpcmVkPSQodGhpcykuYXR0cigncmVxdWlyZWQnKTtpZihyZXF1aXJlZCYmJChmaWVsZCkuYXR0cigndHlwZScpPT0naGlkZGVuJyl7dmFyIGZpZWxkUGFydHM9JChmaWVsZCkuYXR0cignbmFtZScpO2ZpZWxkUGFydHM9ZmllbGRQYXJ0cy5zcGxpdCgnLS0tJyk7ZmllbGROYW1lPWZpZWxkUGFydHNbMF07ZmllbGROdW1iZXI9ZmllbGRQYXJ0c1sxXS5zcGxpdCgnX19fJyk7ZmllbGROdW1iZXI9ZmllbGROdW1iZXJbMF07aWYoZmllbGROYW1lPT0ncmFkaW8tYnV0dG9ucy1sYWJlbCcpe3ZhciByYWRpb1ZhbHVlPWZhbHNlOyQoJ2lucHV0OnJhZGlvW25hbWU9XCJzaW5nbGUtcmFkaW8tYnV0dG9uLS0tJytmaWVsZE51bWJlcisnW11cIl06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oKXtpZigkKHRoaXMpLnZhbCgpKXtyYWRpb1ZhbHVlPSQodGhpcykudmFsKCk7fX0pO2lmKCFyYWRpb1ZhbHVlKXtzaG93UmVxdWlyZWRFcnJvcj10cnVlO319ZWxzZSBpZihmaWVsZE5hbWU9PSdjaGVja2JveGVzLWxhYmVsJyl7dmFyIGNoZWNrYm94VmFsdWU9ZmFsc2U7JCgnaW5wdXQ6Y2hlY2tib3hbbmFtZT1cInNpbmdsZS1jaGVja2JveC0tLScrZmllbGROdW1iZXIrJ1tdXCJdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKCl7aWYoJCh0aGlzKS52YWwoKSl7Y2hlY2tib3hWYWx1ZT0kKHRoaXMpLnZhbCgpO319KTtpZighY2hlY2tib3hWYWx1ZSl7c2hvd1JlcXVpcmVkRXJyb3I9dHJ1ZTt9fX1lbHNlIGlmKHJlcXVpcmVkJiYkKGZpZWxkKS5hdHRyKCd0eXBlJykhPSdoaWRkZW4nJiYkKGZpZWxkKS52YWwoKT09Jycpe3Nob3dSZXF1aXJlZEVycm9yPXRydWU7fX0pO2lmKHNob3dSZXF1aXJlZEVycm9yKXskKCdmb3JtI25ld0FwcG9pbnRtZW50Rm9ybSBwLnN0YXR1cycpLnNob3coKS5odG1sKCc8aSBjbGFzcz1cImJvb2tlZC1pY29uIGJvb2tlZC1pY29uLWFsZXJ0XCIgc3R5bGU9XCJjb2xvcjojRTM1NjU2XCI+PC9pPiZuYnNwOyZuYnNwOyZuYnNwOycrYm9va2VkX2pzX3ZhcnMuaTE4bl9maWxsX291dF9yZXF1aXJlZF9maWVsZHMpO3Jlc2l6ZV9ib29rZWRfbW9kYWwoKTtyZXR1cm4gZmFsc2U7fVxyXG4gICAgICAgICAgICBpZihjdXN0b21lclR5cGU9PSduZXcnJiYhbmFtZXx8Y3VzdG9tZXJUeXBlPT0nbmV3JyYmc3VybmFtZUFjdGl2ZSYmIXN1cm5hbWV8fGN1c3RvbWVyVHlwZT09J25ldycmJiFlbWFpbHx8Y3VzdG9tZXJUeXBlPT0nbmV3JyYmIXBhc3N3b3JkKXskKCdmb3JtI25ld0FwcG9pbnRtZW50Rm9ybSBwLnN0YXR1cycpLnNob3coKS5odG1sKCc8aSBjbGFzcz1cImJvb2tlZC1pY29uIGJvb2tlZC1pY29uLWFsZXJ0XCIgc3R5bGU9XCJjb2xvcjojRTM1NjU2XCI+PC9pPiZuYnNwOyZuYnNwOyZuYnNwOycrYm9va2VkX2pzX3ZhcnMuaTE4bl9hcHB0X3JlcXVpcmVkX2ZpZWxkcyk7cmVzaXplX2Jvb2tlZF9tb2RhbCgpO3JldHVybiBmYWxzZTt9XHJcbiAgICAgICAgICAgIGlmKGN1c3RvbWVyVHlwZT09J2d1ZXN0JyYmIWd1ZXN0X25hbWV8fGN1c3RvbWVyVHlwZT09J2d1ZXN0JyYmZ3Vlc3RfZW1haWxBY3RpdmUmJiFndWVzdF9lbWFpbHx8Y3VzdG9tZXJUeXBlPT0nZ3Vlc3QnJiZndWVzdF9zdXJuYW1lQWN0aXZlJiYhZ3Vlc3Rfc3VybmFtZSl7JCgnZm9ybSNuZXdBcHBvaW50bWVudEZvcm0gcC5zdGF0dXMnKS5zaG93KCkuaHRtbCgnPGkgY2xhc3M9XCJib29rZWQtaWNvbiBib29rZWQtaWNvbi1hbGVydFwiIHN0eWxlPVwiY29sb3I6I0UzNTY1NlwiPjwvaT4mbmJzcDsmbmJzcDsmbmJzcDsnK2Jvb2tlZF9qc192YXJzLmkxOG5fYXBwdF9yZXF1aXJlZF9maWVsZHNfZ3Vlc3QpO3Jlc2l6ZV9ib29rZWRfbW9kYWwoKTtyZXR1cm4gZmFsc2U7fVxyXG4gICAgICAgICAgICBpZihjdXN0b21lclR5cGU9PSdjdXJyZW50JyYmY3VzdG9tZXJJRHx8Y3VzdG9tZXJUeXBlPT0nZ3Vlc3QnJiZndWVzdF9uYW1lJiYhZ3Vlc3Rfc3VybmFtZUFjdGl2ZSYmIWd1ZXN0X2VtYWlsQWN0aXZlfHxjdXN0b21lclR5cGU9PSdndWVzdCcmJmd1ZXN0X25hbWUmJmd1ZXN0X3N1cm5hbWVBY3RpdmUmJmd1ZXN0X3N1cm5hbWUmJiFndWVzdF9lbWFpbEFjdGl2ZXx8Y3VzdG9tZXJUeXBlPT0nZ3Vlc3QnJiZndWVzdF9uYW1lJiZndWVzdF9lbWFpbEFjdGl2ZSYmZ3Vlc3RfZW1haWwmJiFndWVzdF9zdXJuYW1lQWN0aXZlfHxjdXN0b21lclR5cGU9PSdndWVzdCcmJmd1ZXN0X25hbWUmJmd1ZXN0X2VtYWlsQWN0aXZlJiZndWVzdF9lbWFpbCYmZ3Vlc3Rfc3VybmFtZUFjdGl2ZSYmZ3Vlc3Rfc3VybmFtZSl7U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmN1cnJlbnRVc2VyT3JHdWVzdCgpO31cclxuICAgICAgICAgICAgaWYoY3VzdG9tZXJUeXBlPT0nbmV3JyYmbmFtZSYmZW1haWwmJnBhc3N3b3JkKXtpZighc3VybmFtZUFjdGl2ZXx8c3VybmFtZUFjdGl2ZSYmc3VybmFtZSl7U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Lm5ld1VzZXIoKTt9fX0pO3ZhciBTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQ9e2Zvcm1TZWxlY3RvcjonI25ld0FwcG9pbnRtZW50Rm9ybScsZm9ybUJ0blJlcXVlc3RTZWxlY3RvcjonLmJvb2tlZC1mb3JtIGlucHV0I3N1Ym1pdC1yZXF1ZXN0LWFwcG9pbnRtZW50Jyxmb3JtU3RhdHVzU2VsZWN0b3I6J3Auc3RhdHVzJyxmb3JtU3VibWl0QnRuU2VsZWN0b3I6JyNzdWJtaXQtcmVxdWVzdC1hcHBvaW50bWVudCcsYXBwdENvbnRhaW5lclNlbGVjdG9yOicuYm9va2VkLWFwcG9pbnRtZW50LWRldGFpbHMnLGJhc2VGaWVsZHM6WydndWVzdF9uYW1lJywnZ3Vlc3Rfc3VybmFtZScsJ2d1ZXN0X2VtYWlsJywnYWN0aW9uJywnY3VzdG9tZXJfdHlwZScsJ3VzZXJfaWQnXSxhcHB0RmllbGRzOlsnYXBwb2lubWVudCcsJ2NhbGVuZGFyX2lkJywndGl0bGUnLCdkYXRlJywndGltZXN0YW1wJywndGltZXNsb3QnXSx1c2VyRmllbGRzOlsnYm9va2VkX2FwcHRfbmFtZScsJ2Jvb2tlZF9hcHB0X3N1cm5hbWUnLCdib29rZWRfYXBwdF9lbWFpbCcsJ2Jvb2tlZF9hcHB0X3Bhc3N3b3JkJ10sY2FwdGNoYUZpZWxkczpbJ2NhcHRjaGFfd29yZCcsJ2NhcHRjaGFfY29kZSddLGN1cnJlbnRBcHB0SW5kZXg6ZmFsc2UsY3VycmVudEFwcHRDb3VudGVyOmZhbHNlLGhhc0FueUVycm9yczpmYWxzZSxjdXJyZW50VXNlck9yR3Vlc3Q6ZnVuY3Rpb24oKXt2YXIgdG90YWxfYXBwdHM9U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll90b3RhbEFwcHRzKCk7aWYoIXRvdGFsX2FwcHRzKXtyZXR1cm47fVxyXG4gICAgICAgICAgICBTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX3Nob3dMb2FkaW5nTWVzc2FnZSgpO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fcmVzZXREZWZhdWx0VmFsdWVzKCk7dmFyIGRhdGE9U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9nZXRCYXNlRGF0YSgpO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5jdXJyZW50QXBwdEluZGV4PTA7U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmN1cnJlbnRBcHB0Q291bnRlcj0xO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fZG9SZXF1ZXN0QXBwb2ludG1lbnQoZGF0YSx0b3RhbF9hcHB0cyk7fSxuZXdVc2VyOmZ1bmN0aW9uKCl7dmFyIHRvdGFsX2FwcHRzPVN1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fdG90YWxBcHB0cygpO2lmKCF0b3RhbF9hcHB0cyl7cmV0dXJuO31cclxuICAgICAgICAgICAgU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9zaG93TG9hZGluZ01lc3NhZ2UoKTtTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX3Jlc2V0RGVmYXVsdFZhbHVlcygpO3ZhciBkYXRhPVN1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fZ2V0QmFzZURhdGEoKTtpZih0b3RhbF9hcHB0cz4xKXt2YXIgZGF0YV9vYmpfd2l0aF9ub19yZWZlcmVuY2U9bnVsbDtkYXRhX29ial93aXRoX25vX3JlZmVyZW5jZT0kLmV4dGVuZCh0cnVlLHt9LGRhdGEpO2RhdGFfb2JqX3dpdGhfbm9fcmVmZXJlbmNlPVN1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fYWRkVXNlclJlZ2lzdHJhdGlvbkRhdGEoZGF0YV9vYmpfd2l0aF9ub19yZWZlcmVuY2UpO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fcmVxdWVzdFVzZXJSZWdpc3RyYXRpb24oZGF0YV9vYmpfd2l0aF9ub19yZWZlcmVuY2UpO2RhdGEuY3VzdG9tZXJfdHlwZT0nY3VycmVudCc7fWVsc2V7ZGF0YT1TdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX2FkZFVzZXJSZWdpc3RyYXRpb25EYXRhKGRhdGEpO31cclxuICAgICAgICAgICAgU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmN1cnJlbnRBcHB0SW5kZXg9MDtTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX2RvUmVxdWVzdEFwcG9pbnRtZW50KGRhdGEsdG90YWxfYXBwdHMpO30sX2RvUmVxdWVzdEFwcG9pbnRtZW50OmZ1bmN0aW9uKGRhdGEsdG90YWxfYXBwdHMpe3ZhciBhcHB0X2ZpZWxkcz1TdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuYXBwdEZpZWxkcztpZihTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuY3VycmVudEFwcHRJbmRleD09PTApe1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5faGlkZUNhbmNlbEJ0bigpO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fZGlzYWJsZVN1Ym1pdEJ0bigpO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5oYXNBbnlFcnJvcnM9ZmFsc2U7fVxyXG4gICAgICAgICAgICB2YXIgZGF0YV9vYmpfd2l0aF9ub19yZWZlcmVuY2U9JC5leHRlbmQodHJ1ZSx7fSxkYXRhKTtmb3IodmFyIGk9MDtpPGFwcHRfZmllbGRzLmxlbmd0aDtpKyspe2RhdGFfb2JqX3dpdGhfbm9fcmVmZXJlbmNlW2FwcHRfZmllbGRzW2ldXT1TdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX2dldEZpZWxkVmFsKGFwcHRfZmllbGRzW2ldLFN1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5jdXJyZW50QXBwdEluZGV4KTt9XHJcbiAgICAgICAgICAgIHZhciBjYWxlbmRhcl9pZD1TdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX2dldEZpZWxkVmFsKCdjYWxlbmRhcl9pZCcsU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmN1cnJlbnRBcHB0SW5kZXgpO2RhdGFfb2JqX3dpdGhfbm9fcmVmZXJlbmNlPVN1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fYWRkQ3VzdG9tRmllbGRzRGF0YShkYXRhX29ial93aXRoX25vX3JlZmVyZW5jZSxjYWxlbmRhcl9pZCk7dmFyICRhcHB0PVN1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fZ2V0QXBwdEVsZW1lbnQoU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmN1cnJlbnRBcHB0SW5kZXgpO2lmKCEkYXBwdC5oYXNDbGFzcygnc2tpcCcpKXskLmFqYXgoe3R5cGU6J3Bvc3QnLHVybDpib29rZWRfanNfdmFycy5hamF4X3VybCxkYXRhOmRhdGFfb2JqX3dpdGhfbm9fcmVmZXJlbmNlLHN1Y2Nlc3M6ZnVuY3Rpb24ocmVzcG9uc2Upe1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fcmVxdWVzdEFwcG9pbnRtZW50UmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlKTtTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuY3VycmVudEFwcHRJbmRleCsrO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtpZihTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuY3VycmVudEFwcHRDb3VudGVyPT09dG90YWxfYXBwdHMpe2lmKCFTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuaGFzQW55RXJyb3JzKXtTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX29uQWZ0ZXJSZXF1ZXN0QXBwb2ludG1lbnQoKTt9ZWxzZXtTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX2VuYWJsZVN1Ym1pdEJ0bigpO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fc2hvd0NhbmNlbEJ0bigpO319ZWxzZXtTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuY3VycmVudEFwcHRDb3VudGVyKys7U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9kb1JlcXVlc3RBcHBvaW50bWVudChkYXRhLHRvdGFsX2FwcHRzKTt9fSwxMDApO319KTt9ZWxzZXtTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuY3VycmVudEFwcHRJbmRleCsrO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5jdXJyZW50QXBwdENvdW50ZXIrKztTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX2RvUmVxdWVzdEFwcG9pbnRtZW50KGRhdGEsdG90YWxfYXBwdHMsU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmN1cnJlbnRBcHB0SW5kZXgpO319LF90b3RhbEFwcHRzOmZ1bmN0aW9uKCl7cmV0dXJuICQoU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmZvcm1TZWxlY3RvcisnIGlucHV0W25hbWU9XCJhcHBvaW5tZW50W11cIl0nKS5sZW5ndGg7fSxfZ2V0QmFzZURhdGE6ZnVuY3Rpb24oKXt2YXIgZGF0YT17fSxmaWVsZHM9U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmJhc2VGaWVsZHM7Zm9yKHZhciBpPTA7aTxmaWVsZHMubGVuZ3RoO2krKyl7ZGF0YVtmaWVsZHNbaV1dPVN1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fZ2V0RmllbGRWYWwoZmllbGRzW2ldKTt9XHJcbiAgICAgICAgICAgIGRhdGFbJ2lzX2ZlX2Zvcm0nXT10cnVlO2RhdGFbJ3RvdGFsX2FwcHRzJ109U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll90b3RhbEFwcHRzKCk7cmV0dXJuIGRhdGE7fSxfZ2V0RmllbGRWYWw6ZnVuY3Rpb24oZmllbGRfbmFtZSxmaWVsZF9pbmRleCl7dmFyIGZpZWxkX25hbWU9dHlwZW9mIGZpZWxkX25hbWU9PT0ndW5kZWZpbmVkJz8nJzpmaWVsZF9uYW1lLGZpZWxkX2luZGV4PXR5cGVvZiBmaWVsZF9pbmRleD09PSd1bmRlZmluZWQnP2ZhbHNlOmZpZWxkX2luZGV4LHNlbGVjdG9yPVN1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5mb3JtU2VsZWN0b3IrJyAnO2lmKGZpZWxkX2luZGV4PT09ZmFsc2Upe3NlbGVjdG9yKz0nIFtuYW1lPScrZmllbGRfbmFtZSsnXSc7cmV0dXJuICQoc2VsZWN0b3IpLnZhbCgpO31cclxuICAgICAgICAgICAgc2VsZWN0b3IrPScgW25hbWU9XCInK2ZpZWxkX25hbWUrJ1tdXCJdJztyZXR1cm4gJChzZWxlY3RvcikuZXEoZmllbGRfaW5kZXgpLnZhbCgpO30sX3Jlc2V0RGVmYXVsdFZhbHVlczpmdW5jdGlvbigpeyQoJy5ib29rZWQtZm9ybSBpbnB1dCcpLmVhY2goZnVuY3Rpb24oKXt2YXIgdGhpc1ZhbD0kKHRoaXMpLnZhbCgpLHRoaXNEZWZhdWx0PSQodGhpcykuYXR0cigndGl0bGUnKTtpZih0aGlzRGVmYXVsdD09dGhpc1ZhbCl7JCh0aGlzKS52YWwoJycpO319KTt9LF9yZXNldFRvRGVmYXVsdFZhbHVlczpmdW5jdGlvbigpeyQoJy5ib29rZWQtZm9ybSBpbnB1dCcpLmVhY2goZnVuY3Rpb24oKXt2YXIgdGhpc1ZhbD0kKHRoaXMpLnZhbCgpLHRoaXNEZWZhdWx0PSQodGhpcykuYXR0cigndGl0bGUnKTtpZighdGhpc1ZhbCl7JCh0aGlzKS52YWwodGhpc0RlZmF1bHQpO319KTt9LF9hZGRVc2VyUmVnaXN0cmF0aW9uRGF0YTpmdW5jdGlvbihkYXRhKXskLmVhY2goU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LnVzZXJGaWVsZHMsZnVuY3Rpb24oaW5kZXgsZmllbGRfbmFtZSl7ZGF0YVtmaWVsZF9uYW1lXT1TdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX2dldEZpZWxkVmFsKGZpZWxkX25hbWUpO30pOyQuZWFjaChTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuY2FwdGNoYUZpZWxkcyxmdW5jdGlvbihpbmRleCxmaWVsZF9uYW1lKXt2YXIgZmllbGRfdmFsdWU9U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9nZXRGaWVsZFZhbChmaWVsZF9uYW1lKTtpZighZmllbGRfdmFsdWUpe3JldHVybjt9XHJcbiAgICAgICAgICAgIGRhdGFbZmllbGRfbmFtZV09ZmllbGRfdmFsdWU7fSk7cmV0dXJuIGRhdGE7fSxfYWRkQ3VzdG9tRmllbGRzRGF0YTpmdW5jdGlvbihkYXRhLGNhbGVuZGFyX2lkKXt2YXIgY3VzdG9tX2ZpZWxkc19kYXRhPSQoJy5jZi1ibG9jayBbbmFtZV0nKS5maWx0ZXIoZnVuY3Rpb24oaW5kZXgpe3ZhciAkdGhpcz0kKHRoaXMpO3JldHVybiBwYXJzZUludCgkdGhpcy5kYXRhKCdjYWxlbmRhci1pZCcpKT09PXBhcnNlSW50KGNhbGVuZGFyX2lkKSYmJHRoaXMuYXR0cignbmFtZScpLm1hdGNoKC8tLS1cXGQrL2cpO30pLmVhY2goZnVuY3Rpb24oaW5kZXgpe3ZhciAkdGhpcz0kKHRoaXMpLG5hbWU9JHRoaXMuYXR0cignbmFtZScpLHZhbHVlPSR0aGlzLnZhbCgpLHR5cGU9JHRoaXMuYXR0cigndHlwZScpO2lmKCF2YWx1ZSl7cmV0dXJuO31cclxuICAgICAgICAgICAgaWYoIW5hbWUubWF0Y2goL2NoZWNrYm94fHJhZGlvKy9nKSl7ZGF0YVtuYW1lXT12YWx1ZTtyZXR1cm47fVxyXG4gICAgICAgICAgICBpZihuYW1lLm1hdGNoKC9yYWRpbysvZykmJiR0aGlzLmlzKCc6Y2hlY2tlZCcpKXtkYXRhW25hbWVdPXZhbHVlO3JldHVybjt9XHJcbiAgICAgICAgICAgIGlmKCFuYW1lLm1hdGNoKC9yYWRpbysvZykmJnR5cGVvZiBkYXRhW25hbWVdPT09J3VuZGVmaW5lZCd8fCFuYW1lLm1hdGNoKC9yYWRpbysvZykmJmRhdGFbbmFtZV0uY29uc3RydWN0b3IhPT1BcnJheSl7ZGF0YVtuYW1lXT1bXTt9XHJcbiAgICAgICAgICAgIGlmKCEkdGhpcy5pcygnOmNoZWNrZWQnKSl7cmV0dXJuO31cclxuICAgICAgICAgICAgZGF0YVtuYW1lXS5wdXNoKHZhbHVlKTt9KTtyZXR1cm4gZGF0YTt9LF9yZXF1ZXN0VXNlclJlZ2lzdHJhdGlvbjpmdW5jdGlvbihiYXNlX2RhdGEsYXBwdF9pbmRleCl7JC5hamF4KHt0eXBlOidwb3N0Jyx1cmw6Ym9va2VkX2pzX3ZhcnMuYWpheF91cmwsZGF0YTpiYXNlX2RhdGEsYXN5bmM6ZmFsc2Usc3VjY2VzczpmdW5jdGlvbihyZXNwb25zZSl7U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9yZXF1ZXN0VXNlclJlZ2lzdHJhdGlvblJlc3BvbnNlSGFuZGxlcihyZXNwb25zZSk7fX0pO30sX3JlcXVlc3RVc2VyUmVnaXN0cmF0aW9uUmVzcG9uc2VIYW5kbGVyOmZ1bmN0aW9uKHJlc3BvbnNlKXt2YXIgcmVzcG9uc2VfcGFydHM9cmVzcG9uc2Uuc3BsaXQoJyMjIycpLGRhdGFfcmVzdWx0PXJlc3BvbnNlX3BhcnRzWzBdLnN1YnN0cihyZXNwb25zZV9wYXJ0c1swXS5sZW5ndGgtNSk7aWYoZGF0YV9yZXN1bHQ9PT0nZXJyb3InKXtyZXR1cm47fX0sX3JlcXVlc3RBcHBvaW50bWVudDpmdW5jdGlvbihyZXNwb25zZSl7U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9yZXF1ZXN0QXBwb2ludG1lbnRSZXNwb25zZUhhbmRsZXIocmVzcG9uc2UpO30sX3JlcXVlc3RBcHBvaW50bWVudFJlc3BvbnNlSGFuZGxlcjpmdW5jdGlvbihyZXNwb25zZSl7dmFyIHJlc3BvbnNlX3BhcnRzPXJlc3BvbnNlLnNwbGl0KCcjIyMnKSxkYXRhX3Jlc3VsdD1yZXNwb25zZV9wYXJ0c1swXS5zdWJzdHIocmVzcG9uc2VfcGFydHNbMF0ubGVuZ3RoLTUpO2lmKGRhdGFfcmVzdWx0PT09J2Vycm9yJyl7U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9yZXF1ZXN0QXBwb2ludG1lbnRPbkVycm9yKHJlc3BvbnNlX3BhcnRzKTtyZXR1cm47fVxyXG4gICAgICAgICAgICBTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX3JlcXVlc3RBcHBvaW50bWVudE9uU3VjY2VzcyhyZXNwb25zZV9wYXJ0cyk7fSxfcmVxdWVzdEFwcG9pbnRtZW50T25FcnJvcjpmdW5jdGlvbihyZXNwb25zZV9wYXJ0cyl7dmFyICRhcHB0RWw9U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9nZXRBcHB0RWxlbWVudCgpOyQoZG9jdW1lbnQpLnRyaWdnZXIoXCJib29rZWQtb24tcmVxdWVzdGVkLWFwcHQtZXJyb3JcIixbJGFwcHRFbF0pO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5faGlnaGxpZ2h0QXBwdCgpO1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5fc2V0U3RhdHVzTXNnKHJlc3BvbnNlX3BhcnRzWzFdKTtTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuaGFzQW55RXJyb3JzPXRydWU7cmVzaXplX2Jvb2tlZF9tb2RhbCgpO30sX3JlcXVlc3RBcHBvaW50bWVudE9uU3VjY2VzczpmdW5jdGlvbihyZXNwb25zZV9wYXJ0cyl7dmFyICRhcHB0RWw9U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9nZXRBcHB0RWxlbWVudCgpOyQoZG9jdW1lbnQpLnRyaWdnZXIoXCJib29rZWQtb24tcmVxdWVzdGVkLWFwcHQtc3VjY2Vzc1wiLFskYXBwdEVsXSk7U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll91bmhpZ2hsaWdodEFwcHQoKTt9LF9vbkFmdGVyUmVxdWVzdEFwcG9pbnRtZW50OmZ1bmN0aW9uKCl7dmFyIHJlZGlyZWN0T2JqPXtyZWRpcmVjdDpmYWxzZX07dmFyIHJlZGlyZWN0PSQoZG9jdW1lbnQpLnRyaWdnZXIoXCJib29rZWQtb24tcmVxdWVzdGVkLWFwcG9pbnRtZW50XCIsW3JlZGlyZWN0T2JqXSk7aWYocmVkaXJlY3RPYmoucmVkaXJlY3Qpe3JldHVybjt9XHJcbiAgICAgICAgICAgIGlmKGJvb2tlZF9qc192YXJzLnByb2ZpbGVQYWdlKXt3aW5kb3cubG9jYXRpb249Ym9va2VkX2pzX3ZhcnMucHJvZmlsZVBhZ2U7cmV0dXJuO31cclxuICAgICAgICAgICAgU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50Ll9yZWxvYWRBcHB0c0xpc3QoKTtTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX3JlbG9hZENhbGVuZGFyVGFibGUoKTt9LF9zZXRTdGF0dXNNc2c6ZnVuY3Rpb24obXNnKXt2YXIgZm9ybV9zdGF0dXNfc2VsZWN0b3I9U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmZvcm1TZWxlY3RvcisnICcrU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmZvcm1TdGF0dXNTZWxlY3RvcjskKGZvcm1fc3RhdHVzX3NlbGVjdG9yKS5zaG93KCkuaHRtbCgnPGkgY2xhc3M9XCJib29rZWQtaWNvbiBib29rZWQtaWNvbi1hbGVydFwiIHN0eWxlPVwiY29sb3I6I0UzNTY1NlwiPjwvaT4mbmJzcDsmbmJzcDsmbmJzcDsnK21zZyk7fSxfZ2V0QXBwdEVsZW1lbnQ6ZnVuY3Rpb24oYXBwdF9pbmRleCl7dmFyIGFwcHRfaW5kZXg9dHlwZW9mIGFwcHRfaW5kZXg9PT0ndW5kZWZpbmVkJz9TdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuY3VycmVudEFwcHRJbmRleDphcHB0X2luZGV4LGFwcHRfY250X3NlbGVjdG9yPVN1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5mb3JtU2VsZWN0b3IrJyAnK1N1Ym1pdFJlcXVlc3RBcHBvaW50bWVudC5hcHB0Q29udGFpbmVyU2VsZWN0b3I7cmV0dXJuICQoYXBwdF9jbnRfc2VsZWN0b3IpLmVxKGFwcHRfaW5kZXgpO30sX2hpZ2hsaWdodEFwcHQ6ZnVuY3Rpb24obXNnKXt2YXIgJGFwcHRFbD1TdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX2dldEFwcHRFbGVtZW50KCk7aWYoISRhcHB0RWwubGVuZ3RoKXtyZXR1cm47fVxyXG4gICAgICAgICAgICAkYXBwdEVsLmFkZENsYXNzKCdoYXMtZXJyb3InKTt9LF91bmhpZ2hsaWdodEFwcHQ6ZnVuY3Rpb24obXNnKXt2YXIgJGFwcHRFbD1TdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuX2dldEFwcHRFbGVtZW50KCk7aWYoISRhcHB0RWwubGVuZ3RoKXtyZXR1cm47fVxyXG4gICAgICAgICAgICAkYXBwdEVsLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKS5hZGRDbGFzcygnc2tpcCcpO30sX2VuYWJsZVN1Ym1pdEJ0bjpmdW5jdGlvbigpe3ZhciBidG5fc2VsZWN0b3I9U3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmZvcm1TZWxlY3RvcisnICcrU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmZvcm1TdWJtaXRCdG5TZWxlY3RvcjskKGJ0bl9zZWxlY3RvcikuYXR0cignZGlzYWJsZWQnLGZhbHNlKTt9LF9kaXNhYmxlU3VibWl0QnRuOmZ1bmN0aW9uKCl7dmFyIGJ0bl9zZWxlY3Rvcj1TdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuZm9ybVNlbGVjdG9yKycgJytTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuZm9ybVN1Ym1pdEJ0blNlbGVjdG9yOyQoYnRuX3NlbGVjdG9yKS5hdHRyKCdkaXNhYmxlZCcsdHJ1ZSk7fSxfc2hvd0NhbmNlbEJ0bjpmdW5jdGlvbigpeyQoU3VibWl0UmVxdWVzdEFwcG9pbnRtZW50LmZvcm1TZWxlY3RvcikuZmluZCgnYnV0dG9uLmNhbmNlbCcpLnNob3coKTt9LF9oaWRlQ2FuY2VsQnRuOmZ1bmN0aW9uKCl7JChTdWJtaXRSZXF1ZXN0QXBwb2ludG1lbnQuZm9ybVNlbGVjdG9yKS5maW5kKCdidXR0b24uY2FuY2VsJykuaGlkZSgpO30sX3Nob3dMb2FkaW5nTWVzc2FnZTpmdW5jdGlvbigpeyQoJ2Zvcm0jbmV3QXBwb2ludG1lbnRGb3JtIHAuc3RhdHVzJykuc2hvdygpLmh0bWwoJzxpIGNsYXNzPVwiYm9va2VkLWljb24gYm9va2VkLWljb24tc3Bpbm5lci1jbG9jayBib29rZWQtaWNvbi1zcGluXCI+PC9pPiZuYnNwOyZuYnNwOyZuYnNwOycrYm9va2VkX2pzX3ZhcnMuaTE4bl9wbGVhc2Vfd2FpdCk7fSxfcmVsb2FkQXBwdHNMaXN0OmZ1bmN0aW9uKCl7aWYoISQoJy5ib29rZWQtYXBwdC1saXN0JykubGVuZ3RoKXtyZXR1cm47fVxyXG4gICAgICAgICAgICAkKCcuYm9va2VkLWFwcHQtbGlzdCcpLmVhY2goZnVuY3Rpb24oKXt2YXIgJHRoaXNBcHB0TGlzdD0kKHRoaXMpLGRhdGU9JHRoaXNBcHB0TGlzdC5hdHRyKCdkYXRhLWxpc3QtZGF0ZScpLHRoaXNMaXN0PSR0aGlzQXBwdExpc3QucGFyZW50cygnLmJvb2tlZC1saXN0LXZpZXcnKSxkZWZhdWx0RGF0ZT10aGlzTGlzdC5hdHRyKCdkYXRhLWRlZmF1bHQnKSxjYWxlbmRhcl9pZD1wYXJzZUludCgkdGhpc0FwcHRMaXN0LmZpbmQoJy5ib29rZWQtbGlzdC12aWV3LW5hdicpLmF0dHIoJ2RhdGEtY2FsZW5kYXItaWQnKSl8fDA7ZGVmYXVsdERhdGU9dHlwZW9mIGRlZmF1bHREYXRlPT09J3VuZGVmaW5lZCc/ZmFsc2U6ZGVmYXVsdERhdGU7Y2FsZW5kYXJfaWQ9Y2FsZW5kYXJfaWQ/Y2FsZW5kYXJfaWQ6MDt0aGlzTGlzdC5hZGRDbGFzcygnYm9va2VkLWxvYWRpbmcnKTt2YXIgYm9va2VkX2xvYWRfbGlzdF92aWV3X2RhdGVfYm9va2luZ19vcHRpb25zPXsnYWN0aW9uJzonYm9va2VkX2FwcG9pbnRtZW50X2xpc3RfZGF0ZScsJ2RhdGUnOmRhdGUsJ2NhbGVuZGFyX2lkJzpjYWxlbmRhcl9pZCwnZm9yY2VfZGVmYXVsdCc6ZGVmYXVsdERhdGV9OyQoZG9jdW1lbnQpLnRyaWdnZXIoXCJib29rZWQtYmVmb3JlLWxvYWRpbmctYXBwb2ludG1lbnQtbGlzdC1ib29raW5nLW9wdGlvbnNcIik7dGhpc0xpc3Quc3BpbignYm9va2VkX3RvcCcpOyQuYWpheCh7dXJsOmJvb2tlZF9qc192YXJzLmFqYXhfdXJsLHR5cGU6J3Bvc3QnLGRhdGE6Ym9va2VkX2xvYWRfbGlzdF92aWV3X2RhdGVfYm9va2luZ19vcHRpb25zLHN1Y2Nlc3M6ZnVuY3Rpb24oaHRtbCl7dGhpc0xpc3QuaHRtbChodG1sKTtjbG9zZV9ib29rZWRfbW9kYWwoKTtpbml0X2FwcHRfbGlzdF9kYXRlX3BpY2tlcigpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzTGlzdC5yZW1vdmVDbGFzcygnYm9va2VkLWxvYWRpbmcnKTt9LDEpO319KTt9KTt9LF9yZWxvYWRDYWxlbmRhclRhYmxlOmZ1bmN0aW9uKCl7aWYoISQoJ3RkLmFjdGl2ZScpLmxlbmd0aCl7cmV0dXJuO31cclxuICAgICAgICAgICAgdmFyICRhY3RpdmVURD0kKCd0ZC5hY3RpdmUnKSxhY3RpdmVEYXRlPSRhY3RpdmVURC5hdHRyKCdkYXRhLWRhdGUnKSxjYWxlbmRhcl9pZD1wYXJzZUludCgkYWN0aXZlVEQucGFyZW50cygndGFibGUnKS5kYXRhKCdjYWxlbmRhci1pZCcpKXx8MDtib29rZWRfbG9hZF9jYWxlbmRhcl9kYXRlX2Jvb2tpbmdfb3B0aW9ucz17J2FjdGlvbic6J2Jvb2tlZF9jYWxlbmRhcl9kYXRlJywnZGF0ZSc6YWN0aXZlRGF0ZSwnY2FsZW5kYXJfaWQnOmNhbGVuZGFyX2lkfTskKGRvY3VtZW50KS50cmlnZ2VyKFwiYm9va2VkLWJlZm9yZS1sb2FkaW5nLWNhbGVuZGFyLWJvb2tpbmctb3B0aW9uc1wiKTskLmFqYXgoe3VybDpib29rZWRfanNfdmFycy5hamF4X3VybCx0eXBlOidwb3N0JyxkYXRhOmJvb2tlZF9sb2FkX2NhbGVuZGFyX2RhdGVfYm9va2luZ19vcHRpb25zLHN1Y2Nlc3M6ZnVuY3Rpb24oaHRtbCl7JCgndHIuZW50cnlCbG9jaycpLmZpbmQoJ3RkJykuaHRtbChodG1sKTtjbG9zZV9ib29rZWRfbW9kYWwoKTskKCd0ci5lbnRyeUJsb2NrJykucmVtb3ZlQ2xhc3MoJ2Jvb2tlZC1sb2FkaW5nJyk7JCgndHIuZW50cnlCbG9jaycpLmZpbmQoJy5ib29rZWQtYXBwdC1saXN0JykuaGlkZSgpLmZhZGVJbigzMDApOyQoJ3RyLmVudHJ5QmxvY2snKS5maW5kKCcuYm9va2VkLWFwcHQtbGlzdCcpLmFkZENsYXNzKCdzaG93bicpO2FkanVzdF9jYWxlbmRhcl9ib3hlcygpO319KTt9fX0pO2Z1bmN0aW9uIGJvb2tlZFJlbW92ZUVtcHR5VFJzKCl7JCgndGFibGUuYm9va2VkLWNhbGVuZGFyJykuZmluZCgndHIud2VlaycpLmVhY2goZnVuY3Rpb24oKXtpZigkKHRoaXMpLmNoaWxkcmVuKCkubGVuZ3RoPT0wKXskKHRoaXMpLnJlbW92ZSgpO319KTt9XHJcbiAgICBmdW5jdGlvbiBzYXZpbmdTdGF0ZShzaG93LGxpbWl0X3RvKXtzaG93PXR5cGVvZiBzaG93IT09J3VuZGVmaW5lZCc/c2hvdzp0cnVlO2xpbWl0X3RvPXR5cGVvZiBsaW1pdF90byE9PSd1bmRlZmluZWQnP2xpbWl0X3RvOmZhbHNlO2lmKGxpbWl0X3RvKXt2YXIgJHNhdmluZ1N0YXRlRElWPWxpbWl0X3RvLmZpbmQoJ2xpLmFjdGl2ZSAuc2F2aW5nU3RhdGUsIC50b3BTYXZpbmdTdGF0ZS5zYXZpbmdTdGF0ZSwgLmNhbGVuZGFyU2F2aW5nU3RhdGUnKTt2YXIgJHN0dWZmVG9IaWRlPWxpbWl0X3RvLmZpbmQoJy5tb250aE5hbWUnKTt2YXIgJHN0dWZmVG9UcmFuc3BhcmVudD1saW1pdF90by5maW5kKCd0YWJsZS5ib29rZWQtY2FsZW5kYXIgdGJvZHknKTt9ZWxzZXt2YXIgJHNhdmluZ1N0YXRlRElWPSQoJ2xpLmFjdGl2ZSAuc2F2aW5nU3RhdGUsIC50b3BTYXZpbmdTdGF0ZS5zYXZpbmdTdGF0ZSwgLmNhbGVuZGFyU2F2aW5nU3RhdGUnKTt2YXIgJHN0dWZmVG9IaWRlPSQoJy5tb250aE5hbWUnKTt2YXIgJHN0dWZmVG9UcmFuc3BhcmVudD0kKCd0YWJsZS5ib29rZWQtY2FsZW5kYXIgdGJvZHknKTt9XHJcbiAgICAgICAgaWYoc2hvdyl7JHNhdmluZ1N0YXRlRElWLmZhZGVJbigyMDApOyRzdHVmZlRvSGlkZS5oaWRlKCk7JHN0dWZmVG9UcmFuc3BhcmVudC5hbmltYXRlKHsnb3BhY2l0eSc6MC4yfSwxMDApO31lbHNleyRzYXZpbmdTdGF0ZURJVi5oaWRlKCk7JHN0dWZmVG9IaWRlLnNob3coKTskc3R1ZmZUb1RyYW5zcGFyZW50LmFuaW1hdGUoeydvcGFjaXR5JzoxfSwwKTt9fVxyXG4gICAgJChkb2N1bWVudCkuYWpheFN0b3AoZnVuY3Rpb24oKXtzYXZpbmdTdGF0ZShmYWxzZSk7fSk7ZnVuY3Rpb24gaW5pdF9hcHB0X2xpc3RfZGF0ZV9waWNrZXIoKXskKCcuYm9va2VkX2xpc3RfZGF0ZV9waWNrZXInKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIHRoaXNEYXRlUGlja2VyPSQodGhpcyk7dmFyIG1pbkRhdGVWYWw9dGhpc0RhdGVQaWNrZXIucGFyZW50cygnLmJvb2tlZC1hcHB0LWxpc3QnKS5hdHRyKCdkYXRhLW1pbi1kYXRlJyk7dmFyIG1heERhdGVWYWw9dGhpc0RhdGVQaWNrZXIucGFyZW50cygnLmJvb2tlZC1hcHB0LWxpc3QnKS5hdHRyKCdkYXRhLW1heC1kYXRlJyk7aWYodHlwZW9mIG1pbkRhdGVWYWw9PSd1bmRlZmluZWQnKXt2YXIgbWluRGF0ZVZhbD10aGlzRGF0ZVBpY2tlci5hdHRyKCdkYXRhLW1pbi1kYXRlJyk7fVxyXG4gICAgICAgIHRoaXNEYXRlUGlja2VyLmRhdGVwaWNrZXIoe2RhdGVGb3JtYXQ6J3l5LW1tLWRkJyxtaW5EYXRlOm1pbkRhdGVWYWwsbWF4RGF0ZTptYXhEYXRlVmFsLHNob3dBbmltOmZhbHNlLGJlZm9yZVNob3c6ZnVuY3Rpb24oaW5wdXQsaW5zdCl7JCgnI3VpLWRhdGVwaWNrZXItZGl2JykucmVtb3ZlQ2xhc3MoKTskKCcjdWktZGF0ZXBpY2tlci1kaXYnKS5hZGRDbGFzcygnYm9va2VkX2N1c3RvbV9kYXRlX3BpY2tlcicpO30sb25DbG9zZTpmdW5jdGlvbihkYXRlVGV4dCl7JCgnLmJvb2tlZF9saXN0X2RhdGVfcGlja2VyX3RyaWdnZXInKS5yZW1vdmVDbGFzcygnYm9va2VkLWRwLWFjdGl2ZScpO30sb25TZWxlY3Q6ZnVuY3Rpb24oZGF0ZVRleHQpe3ZhciB0aGlzSW5wdXQ9JCh0aGlzKSxkYXRlPWRhdGVUZXh0LHRoaXNMaXN0PXRoaXNJbnB1dC5wYXJlbnRzKCcuYm9va2VkLWxpc3QtdmlldycpLGRlZmF1bHREYXRlPXRoaXNMaXN0LmF0dHIoJ2RhdGEtZGVmYXVsdCcpLGNhbGVuZGFyX2lkPXRoaXNJbnB1dC5wYXJlbnRzKCcuYm9va2VkLWxpc3Qtdmlldy1uYXYnKS5hdHRyKCdkYXRhLWNhbGVuZGFyLWlkJyk7aWYodHlwZW9mIGRlZmF1bHREYXRlPT0ndW5kZWZpbmVkJyl7ZGVmYXVsdERhdGU9ZmFsc2U7fVxyXG4gICAgICAgICAgICBpZighY2FsZW5kYXJfaWQpe2NhbGVuZGFyX2lkPTA7fVxyXG4gICAgICAgICAgICB0aGlzTGlzdC5hZGRDbGFzcygnYm9va2VkLWxvYWRpbmcnKTt2YXIgYm9va2VkX2xvYWRfbGlzdF92aWV3X2RhdGVfYm9va2luZ19vcHRpb25zPXsnYWN0aW9uJzonYm9va2VkX2FwcG9pbnRtZW50X2xpc3RfZGF0ZScsJ2RhdGUnOmRhdGUsJ2NhbGVuZGFyX2lkJzpjYWxlbmRhcl9pZCwnZm9yY2VfZGVmYXVsdCc6ZGVmYXVsdERhdGV9OyQoZG9jdW1lbnQpLnRyaWdnZXIoXCJib29rZWQtYmVmb3JlLWxvYWRpbmctYXBwb2ludG1lbnQtbGlzdC1ib29raW5nLW9wdGlvbnNcIik7dGhpc0xpc3Quc3BpbignYm9va2VkX3RvcCcpOyQuYWpheCh7dXJsOmJvb2tlZF9qc192YXJzLmFqYXhfdXJsLHR5cGU6J3Bvc3QnLGRhdGE6Ym9va2VkX2xvYWRfbGlzdF92aWV3X2RhdGVfYm9va2luZ19vcHRpb25zLHN1Y2Nlc3M6ZnVuY3Rpb24oaHRtbCl7dGhpc0xpc3QuaHRtbChodG1sKTtpbml0X2FwcHRfbGlzdF9kYXRlX3BpY2tlcigpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGlzTGlzdC5yZW1vdmVDbGFzcygnYm9va2VkLWxvYWRpbmcnKTt9LDEpO319KTtyZXR1cm4gZmFsc2U7fX0pO30pOyQoJ2JvZHknKS5vbignY2xpY2snLCcuYm9va2VkX2xpc3RfZGF0ZV9waWNrZXJfdHJpZ2dlcicsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO2lmKCEkKHRoaXMpLmhhc0NsYXNzKCdib29rZWQtZHAtYWN0aXZlJykpeyQodGhpcykuYWRkQ2xhc3MoJ2Jvb2tlZC1kcC1hY3RpdmUnKTskKHRoaXMpLnBhcmVudHMoJy5ib29rZWQtYXBwdC1saXN0JykuZmluZCgnLmJvb2tlZF9saXN0X2RhdGVfcGlja2VyJykuZGF0ZXBpY2tlcignc2hvdycpO319KTt9XHJcbiAgICB2YXIgQm9va2VkVGFicz17Ym9va2luZ01vZGFsU2VsZWN0b3I6Jy5ib29rZWQtbW9kYWwnLHRhYlNlbGVjdG9yOicuYm9va2VkLXRhYnMnLHRhYk5hdlNlbGVjdG9yOicuYm9va2VkLXRhYnMtbmF2IHNwYW4nLHRhYkNudFNlbGVjdG9yOicuYm9va2VkLXRhYnMtY250JyxJbml0OmZ1bmN0aW9uKCl7JChkb2N1bWVudCkub24oJ2NsaWNrJyx0aGlzLnRhYk5hdlNlbGVjdG9yLHRoaXMudGFic05hdik7fSx0YWJzTmF2OmZ1bmN0aW9uKGV2ZW50KXtldmVudC5wcmV2ZW50RGVmYXVsdCgpO0Jvb2tlZFRhYnMuc3dpdGNoVG9UYWIoJCh0aGlzKSk7Qm9va2VkVGFicy5tYXliZVJlc2l6ZUJvb2tpbmdNb2RhbCgpO30sc3dpdGNoVG9UYWI6ZnVuY3Rpb24odGFiX25hdl9pdGVtKXt2YXIgJG5hdl9pdGVtPXRhYl9uYXZfaXRlbSx0YWJfY250X2NsYXNzPScuJyskbmF2X2l0ZW0uZGF0YSgndGFiLWNudCcpLCR0YWJzX2NvbnRhaW5lcj0kbmF2X2l0ZW0ucGFyZW50cyhCb29rZWRUYWJzLnRhYlNlbGVjdG9yKTskbmF2X2l0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgJHRhYnNfY29udGFpbmVyLmZpbmQoQm9va2VkVGFicy50YWJDbnRTZWxlY3RvcisnICcrdGFiX2NudF9jbGFzcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO30sbWF5YmVSZXNpemVCb29raW5nTW9kYWw6ZnVuY3Rpb24oKXtpZighJChCb29rZWRUYWJzLmJvb2tpbmdNb2RhbFNlbGVjdG9yKS5sZW5ndGgpe3JldHVybjt9XHJcbiAgICAgICAgcmVzaXplX2Jvb2tlZF9tb2RhbCgpO319fSkoalF1ZXJ5LHdpbmRvdyxkb2N1bWVudCk7ZnVuY3Rpb24gY3JlYXRlX2Jvb2tlZF9tb2RhbCgpe3ZhciB3aW5kb3dIZWlnaHQ9alF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCk7dmFyIHdpbmRvd1dpZHRoPWpRdWVyeSh3aW5kb3cpLndpZHRoKCk7aWYod2luZG93V2lkdGg+NzIwKXt2YXIgbWF4TW9kYWxIZWlnaHQ9d2luZG93SGVpZ2h0LTI5NTt9ZWxzZXt2YXIgbWF4TW9kYWxIZWlnaHQ9d2luZG93SGVpZ2h0O31cclxuICAgIGpRdWVyeSgnYm9keSBpbnB1dCwgYm9keSB0ZXh0YXJlYSwgYm9keSBzZWxlY3QnKS5ibHVyKCk7alF1ZXJ5KCdib2R5JykuYWRkQ2xhc3MoJ2Jvb2tlZC1ub1Njcm9sbCcpO2pRdWVyeSgnPGRpdiBjbGFzcz1cImJvb2tlZC1tb2RhbCBibS1sb2FkaW5nXCI+PGRpdiBjbGFzcz1cImJtLW92ZXJsYXlcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYm0td2luZG93XCI+PGRpdiBzdHlsZT1cImhlaWdodDoxMDBweFwiPjwvZGl2PjwvZGl2PjwvZGl2PicpLmFwcGVuZFRvKCdib2R5Jyk7alF1ZXJ5KCcuYm9va2VkLW1vZGFsIC5ibS1vdmVybGF5Jykuc3BpbignYm9va2VkX3doaXRlJyk7alF1ZXJ5KCcuYm9va2VkLW1vZGFsIC5ibS13aW5kb3cnKS5jc3MoeydtYXgtaGVpZ2h0JzptYXhNb2RhbEhlaWdodCsncHgnfSk7fVxyXG52YXIgcHJldmlvdXNSZWFsTW9kYWxIZWlnaHQ9MTAwO2Z1bmN0aW9uIHJlc2l6ZV9ib29rZWRfbW9kYWwoKXt2YXIgd2luZG93SGVpZ2h0PWpRdWVyeSh3aW5kb3cpLmhlaWdodCgpO3ZhciB3aW5kb3dXaWR0aD1qUXVlcnkod2luZG93KS53aWR0aCgpO3ZhciBjb21tb240Mz00MztpZihqUXVlcnkoJy5ib29rZWQtbW9kYWwgLmJtLXdpbmRvdyAuYm9va2VkLXNjcm9sbGFibGUnKS5sZW5ndGgpe3ZhciByZWFsTW9kYWxIZWlnaHQ9alF1ZXJ5KCcuYm9va2VkLW1vZGFsIC5ibS13aW5kb3cgLmJvb2tlZC1zY3JvbGxhYmxlJylbMF0uc2Nyb2xsSGVpZ2h0O2lmKHJlYWxNb2RhbEhlaWdodDwxMDApe3JlYWxNb2RhbEhlaWdodD1wcmV2aW91c1JlYWxNb2RhbEhlaWdodDt9ZWxzZXtwcmV2aW91c1JlYWxNb2RhbEhlaWdodD1yZWFsTW9kYWxIZWlnaHQ7fX1lbHNle3ZhciByZWFsTW9kYWxIZWlnaHQ9MDt9XHJcbiAgICB2YXIgbWluaW11bVdpbmRvd0hlaWdodD1yZWFsTW9kYWxIZWlnaHQrY29tbW9uNDMrY29tbW9uNDM7dmFyIG1vZGFsU2Nyb2xsYWJsZUhlaWdodD1yZWFsTW9kYWxIZWlnaHQtY29tbW9uNDM7dmFyIG1heE1vZGFsSGVpZ2h0O3ZhciBtYXhGb3JtSGVpZ2h0O2lmKHdpbmRvd0hlaWdodDxtaW5pbXVtV2luZG93SGVpZ2h0KXttb2RhbFNjcm9sbGFibGVIZWlnaHQ9d2luZG93SGVpZ2h0LWNvbW1vbjQzLWNvbW1vbjQzO31lbHNle21vZGFsU2Nyb2xsYWJsZUhlaWdodD1yZWFsTW9kYWxIZWlnaHQ7fVxyXG4gICAgaWYod2luZG93V2lkdGg+NzIwKXttYXhNb2RhbEhlaWdodD1tb2RhbFNjcm9sbGFibGVIZWlnaHQtMjU7bWF4Rm9ybUhlaWdodD1tYXhNb2RhbEhlaWdodC0xNTt2YXIgbW9kYWxOZWdNYXJnaW49KG1heE1vZGFsSGVpZ2h0Kzc4KS8yO31lbHNle21heE1vZGFsSGVpZ2h0PXdpbmRvd0hlaWdodC1jb21tb240MzttYXhGb3JtSGVpZ2h0PW1heE1vZGFsSGVpZ2h0LTYwO3ZhciBtb2RhbE5lZ01hcmdpbj0obWF4TW9kYWxIZWlnaHQpLzI7fVxyXG4gICAgalF1ZXJ5KCcuYm9va2VkLW1vZGFsJykuY3NzKHsnbWFyZ2luLXRvcCc6Jy0nK21vZGFsTmVnTWFyZ2luKydweCd9KTtqUXVlcnkoJy5ib29rZWQtbW9kYWwgLmJtLXdpbmRvdycpLmNzcyh7J21heC1oZWlnaHQnOm1heE1vZGFsSGVpZ2h0KydweCd9KTtqUXVlcnkoJy5ib29rZWQtbW9kYWwgLmJtLXdpbmRvdyAuYm9va2VkLXNjcm9sbGFibGUnKS5jc3MoeydtYXgtaGVpZ2h0JzptYXhGb3JtSGVpZ2h0KydweCd9KTt9XHJcbmZ1bmN0aW9uIGNsb3NlX2Jvb2tlZF9tb2RhbCgpe3ZhciBtb2RhbD1qUXVlcnkoJy5ib29rZWQtbW9kYWwnKTttb2RhbC5mYWRlT3V0KDIwMCk7bW9kYWwuYWRkQ2xhc3MoJ2JtLWNsb3NpbmcnKTtqUXVlcnkoJ2JvZHknKS5yZW1vdmVDbGFzcygnYm9va2VkLW5vU2Nyb2xsJyk7c2V0VGltZW91dChmdW5jdGlvbigpe21vZGFsLnJlbW92ZSgpO30sMzAwKTt9XHJcbmZ1bmN0aW9uIGluaXRfdG9vbHRpcHMoY29udGFpbmVyKXtqUXVlcnkoJy50b29sdGlwc3RlcicpLnRvb2x0aXBzdGVyKHt0aGVtZTondG9vbHRpcHN0ZXItbGlnaHQnLGFuaW1hdGlvbjonZ3Jvdycsc3BlZWQ6MjAwLGRlbGF5OjUwLG9mZnNldFk6LTE1fSk7fVxyXG5mdW5jdGlvbiBhZGp1c3RfY2FsZW5kYXJfYm94ZXMoKXtqUXVlcnkoJy5ib29rZWQtY2FsZW5kYXInKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIHdpbmRvd1dpZHRoPWpRdWVyeSh3aW5kb3cpLndpZHRoKCk7dmFyIHNtYWxsQ2FsZW5kYXI9alF1ZXJ5KHRoaXMpLnBhcmVudHMoJy5ib29rZWQtY2FsZW5kYXItd3JhcCcpLmhhc0NsYXNzKCdzbWFsbCcpO3ZhciBib3hlc1dpZHRoPWpRdWVyeSh0aGlzKS5maW5kKCd0Ym9keSB0ci53ZWVrIHRkJykud2lkdGgoKTt2YXIgY2FsZW5kYXJIZWlnaHQ9alF1ZXJ5KHRoaXMpLmhlaWdodCgpO2JveGVzSGVpZ2h0PWJveGVzV2lkdGgqMTtqUXVlcnkodGhpcykuZmluZCgndGJvZHkgdHIud2VlayB0ZCcpLmhlaWdodChib3hlc0hlaWdodCk7alF1ZXJ5KHRoaXMpLmZpbmQoJ3Rib2R5IHRyLndlZWsgdGQgLmRhdGUnKS5jc3MoJ2xpbmUtaGVpZ2h0Jyxib3hlc0hlaWdodCsncHgnKTtqUXVlcnkodGhpcykuZmluZCgndGJvZHkgdHIud2VlayB0ZCAuZGF0ZSAubnVtYmVyJykuY3NzKCdsaW5lLWhlaWdodCcsYm94ZXNIZWlnaHQrJ3B4Jyk7aWYoc21hbGxDYWxlbmRhcnx8d2luZG93V2lkdGg8NzIwKXtqUXVlcnkodGhpcykuZmluZCgndGJvZHkgdHIud2VlayB0ZCAuZGF0ZSAubnVtYmVyJykuY3NzKCdsaW5lLWhlaWdodCcsYm94ZXNIZWlnaHQrJ3B4Jyk7fWVsc2V7alF1ZXJ5KHRoaXMpLmZpbmQoJ3Rib2R5IHRyLndlZWsgdGQgLmRhdGUgLm51bWJlcicpLmNzcygnbGluZS1oZWlnaHQnLCcnKTt9XHJcbiAgICB2YXIgY2FsZW5kYXJIZWlnaHQ9alF1ZXJ5KHRoaXMpLmhlaWdodCgpO2pRdWVyeSh0aGlzKS5wYXJlbnQoKS5oZWlnaHQoY2FsZW5kYXJIZWlnaHQpO30pO30iXSwic291cmNlUm9vdCI6IiJ9