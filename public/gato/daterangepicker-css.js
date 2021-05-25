(self["webpackChunkbingo"] = self["webpackChunkbingo"] || []).push([["daterangepicker-css"],{

/***/ "./assets/plugins/daterangepicker/daterangepicker.js":
/*!***********************************************************!*\
  !*** ./assets/plugins/daterangepicker/daterangepicker.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
* @version: 3.0.5
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2019 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
  if (true) {
    // AMD. Make globaly available as well
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (moment, jquery) {
      if (!jquery.fn) jquery.fn = {}; // webpack server rendering

      if (typeof moment !== 'function' && moment["default"]) moment = moment["default"];
      return factory(moment, jquery);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var moment, jQuery; }
})(this, function (moment, $) {
  var DateRangePicker = function DateRangePicker(element, options, cb) {
    //default settings for options
    this.parentEl = 'body';
    this.element = $(element);
    this.startDate = moment().startOf('day');
    this.endDate = moment().endOf('day');
    this.minDate = false;
    this.maxDate = false;
    this.maxSpan = false;
    this.autoApply = false;
    this.singleDatePicker = false;
    this.showDropdowns = false;
    this.minYear = moment().subtract(100, 'year').format('YYYY');
    this.maxYear = moment().add(100, 'year').format('YYYY');
    this.showWeekNumbers = false;
    this.showISOWeekNumbers = false;
    this.showCustomRangeLabel = true;
    this.timePicker = false;
    this.timePicker24Hour = false;
    this.timePickerIncrement = 1;
    this.timePickerSeconds = false;
    this.linkedCalendars = true;
    this.autoUpdateInput = true;
    this.alwaysShowCalendars = false;
    this.ranges = {};
    this.opens = 'right';
    if (this.element.hasClass('pull-right')) this.opens = 'left';
    this.drops = 'down';
    if (this.element.hasClass('dropup')) this.drops = 'up';
    this.buttonClasses = 'btn btn-sm';
    this.applyButtonClasses = 'btn-primary';
    this.cancelButtonClasses = 'btn-default';
    this.locale = {
      direction: 'ltr',
      format: moment.localeData().longDateFormat('L'),
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      weekLabel: 'W',
      customRangeLabel: 'Custom Range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek()
    };

    this.callback = function () {}; //some state information


    this.isShowing = false;
    this.leftCalendar = {};
    this.rightCalendar = {}; //custom options from user

    if (_typeof(options) !== 'object' || options === null) options = {}; //allow setting options with data attributes
    //data-api options will be overwritten with custom javascript options

    options = $.extend(this.element.data(), options); //html template for the picker UI

    if (typeof options.template !== 'string' && !(options.template instanceof $)) options.template = '<div class="daterangepicker">' + '<div class="ranges"></div>' + '<div class="drp-calendar left">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + '</div>' + '<div class="drp-calendar right">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + '</div>' + '<div class="drp-buttons">' + '<span class="drp-selected"></span>' + '<button class="cancelBtn" type="button"></button>' + '<button class="applyBtn" disabled="disabled" type="button"></button> ' + '</div>' + '</div>';
    this.parentEl = options.parentEl && $(options.parentEl).length ? $(options.parentEl) : $(this.parentEl);
    this.container = $(options.template).appendTo(this.parentEl); //
    // handle all the possible options overriding defaults
    //

    if (_typeof(options.locale) === 'object') {
      if (typeof options.locale.direction === 'string') this.locale.direction = options.locale.direction;
      if (typeof options.locale.format === 'string') this.locale.format = options.locale.format;
      if (typeof options.locale.separator === 'string') this.locale.separator = options.locale.separator;
      if (_typeof(options.locale.daysOfWeek) === 'object') this.locale.daysOfWeek = options.locale.daysOfWeek.slice();
      if (_typeof(options.locale.monthNames) === 'object') this.locale.monthNames = options.locale.monthNames.slice();
      if (typeof options.locale.firstDay === 'number') this.locale.firstDay = options.locale.firstDay;
      if (typeof options.locale.applyLabel === 'string') this.locale.applyLabel = options.locale.applyLabel;
      if (typeof options.locale.cancelLabel === 'string') this.locale.cancelLabel = options.locale.cancelLabel;
      if (typeof options.locale.weekLabel === 'string') this.locale.weekLabel = options.locale.weekLabel;

      if (typeof options.locale.customRangeLabel === 'string') {
        //Support unicode chars in the custom range name.
        var elem = document.createElement('textarea');
        elem.innerHTML = options.locale.customRangeLabel;
        var rangeHtml = elem.value;
        this.locale.customRangeLabel = rangeHtml;
      }
    }

    this.container.addClass(this.locale.direction);
    if (typeof options.startDate === 'string') this.startDate = moment(options.startDate, this.locale.format);
    if (typeof options.endDate === 'string') this.endDate = moment(options.endDate, this.locale.format);
    if (typeof options.minDate === 'string') this.minDate = moment(options.minDate, this.locale.format);
    if (typeof options.maxDate === 'string') this.maxDate = moment(options.maxDate, this.locale.format);
    if (_typeof(options.startDate) === 'object') this.startDate = moment(options.startDate);
    if (_typeof(options.endDate) === 'object') this.endDate = moment(options.endDate);
    if (_typeof(options.minDate) === 'object') this.minDate = moment(options.minDate);
    if (_typeof(options.maxDate) === 'object') this.maxDate = moment(options.maxDate); // sanity check for bad options

    if (this.minDate && this.startDate.isBefore(this.minDate)) this.startDate = this.minDate.clone(); // sanity check for bad options

    if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();
    if (typeof options.applyButtonClasses === 'string') this.applyButtonClasses = options.applyButtonClasses;
    if (typeof options.applyClass === 'string') //backwards compat
      this.applyButtonClasses = options.applyClass;
    if (typeof options.cancelButtonClasses === 'string') this.cancelButtonClasses = options.cancelButtonClasses;
    if (typeof options.cancelClass === 'string') //backwards compat
      this.cancelButtonClasses = options.cancelClass;
    if (_typeof(options.maxSpan) === 'object') this.maxSpan = options.maxSpan;
    if (_typeof(options.dateLimit) === 'object') //backwards compat
      this.maxSpan = options.dateLimit;
    if (typeof options.opens === 'string') this.opens = options.opens;
    if (typeof options.drops === 'string') this.drops = options.drops;
    if (typeof options.showWeekNumbers === 'boolean') this.showWeekNumbers = options.showWeekNumbers;
    if (typeof options.showISOWeekNumbers === 'boolean') this.showISOWeekNumbers = options.showISOWeekNumbers;
    if (typeof options.buttonClasses === 'string') this.buttonClasses = options.buttonClasses;
    if (_typeof(options.buttonClasses) === 'object') this.buttonClasses = options.buttonClasses.join(' ');
    if (typeof options.showDropdowns === 'boolean') this.showDropdowns = options.showDropdowns;
    if (typeof options.minYear === 'number') this.minYear = options.minYear;
    if (typeof options.maxYear === 'number') this.maxYear = options.maxYear;
    if (typeof options.showCustomRangeLabel === 'boolean') this.showCustomRangeLabel = options.showCustomRangeLabel;

    if (typeof options.singleDatePicker === 'boolean') {
      this.singleDatePicker = options.singleDatePicker;
      if (this.singleDatePicker) this.endDate = this.startDate.clone();
    }

    if (typeof options.timePicker === 'boolean') this.timePicker = options.timePicker;
    if (typeof options.timePickerSeconds === 'boolean') this.timePickerSeconds = options.timePickerSeconds;
    if (typeof options.timePickerIncrement === 'number') this.timePickerIncrement = options.timePickerIncrement;
    if (typeof options.timePicker24Hour === 'boolean') this.timePicker24Hour = options.timePicker24Hour;
    if (typeof options.autoApply === 'boolean') this.autoApply = options.autoApply;
    if (typeof options.autoUpdateInput === 'boolean') this.autoUpdateInput = options.autoUpdateInput;
    if (typeof options.linkedCalendars === 'boolean') this.linkedCalendars = options.linkedCalendars;
    if (typeof options.isInvalidDate === 'function') this.isInvalidDate = options.isInvalidDate;
    if (typeof options.isCustomDate === 'function') this.isCustomDate = options.isCustomDate;
    if (typeof options.alwaysShowCalendars === 'boolean') this.alwaysShowCalendars = options.alwaysShowCalendars; // update day names order to firstDay

    if (this.locale.firstDay != 0) {
      var iterator = this.locale.firstDay;

      while (iterator > 0) {
        this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
        iterator--;
      }
    }

    var start, end, range; //if no start/end dates set, check if an input element contains initial values

    if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
      if ($(this.element).is(':text')) {
        var val = $(this.element).val(),
            split = val.split(this.locale.separator);
        start = end = null;

        if (split.length == 2) {
          start = moment(split[0], this.locale.format);
          end = moment(split[1], this.locale.format);
        } else if (this.singleDatePicker && val !== "") {
          start = moment(val, this.locale.format);
          end = moment(val, this.locale.format);
        }

        if (start !== null && end !== null) {
          this.setStartDate(start);
          this.setEndDate(end);
        }
      }
    }

    if (_typeof(options.ranges) === 'object') {
      for (range in options.ranges) {
        if (typeof options.ranges[range][0] === 'string') start = moment(options.ranges[range][0], this.locale.format);else start = moment(options.ranges[range][0]);
        if (typeof options.ranges[range][1] === 'string') end = moment(options.ranges[range][1], this.locale.format);else end = moment(options.ranges[range][1]); // If the start or end date exceed those allowed by the minDate or maxSpan
        // options, shorten the range to the allowable period.

        if (this.minDate && start.isBefore(this.minDate)) start = this.minDate.clone();
        var maxDate = this.maxDate;
        if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) maxDate = start.clone().add(this.maxSpan);
        if (maxDate && end.isAfter(maxDate)) end = maxDate.clone(); // If the end of the range is before the minimum or the start of the range is
        // after the maximum, don't display this range option at all.

        if (this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day') || maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')) continue; //Support unicode chars in the range names.

        var elem = document.createElement('textarea');
        elem.innerHTML = range;
        var rangeHtml = elem.value;
        this.ranges[rangeHtml] = [start, end];
      }

      var list = '<ul>';

      for (range in this.ranges) {
        list += '<li data-range-key="' + range + '">' + range + '</li>';
      }

      if (this.showCustomRangeLabel) {
        list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
      }

      list += '</ul>';
      this.container.find('.ranges').prepend(list);
    }

    if (typeof cb === 'function') {
      this.callback = cb;
    }

    if (!this.timePicker) {
      this.startDate = this.startDate.startOf('day');
      this.endDate = this.endDate.endOf('day');
      this.container.find('.calendar-time').hide();
    } //can't be used together for now


    if (this.timePicker && this.autoApply) this.autoApply = false;

    if (this.autoApply) {
      this.container.addClass('auto-apply');
    }

    if (_typeof(options.ranges) === 'object') this.container.addClass('show-ranges');

    if (this.singleDatePicker) {
      this.container.addClass('single');
      this.container.find('.drp-calendar.left').addClass('single');
      this.container.find('.drp-calendar.left').show();
      this.container.find('.drp-calendar.right').hide();

      if (!this.timePicker) {
        this.container.addClass('auto-apply');
      }
    }

    if (typeof options.ranges === 'undefined' && !this.singleDatePicker || this.alwaysShowCalendars) {
      this.container.addClass('show-calendar');
    }

    this.container.addClass('opens' + this.opens); //apply CSS classes and labels to buttons

    this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
    if (this.applyButtonClasses.length) this.container.find('.applyBtn').addClass(this.applyButtonClasses);
    if (this.cancelButtonClasses.length) this.container.find('.cancelBtn').addClass(this.cancelButtonClasses);
    this.container.find('.applyBtn').html(this.locale.applyLabel);
    this.container.find('.cancelBtn').html(this.locale.cancelLabel); //
    // event listeners
    //

    this.container.find('.drp-calendar').on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this)).on('click.daterangepicker', '.next', $.proxy(this.clickNext, this)).on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this)).on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this)).on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this));
    this.container.find('.ranges').on('click.daterangepicker', 'li', $.proxy(this.clickRange, this));
    this.container.find('.drp-buttons').on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this)).on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this));

    if (this.element.is('input') || this.element.is('button')) {
      this.element.on({
        'click.daterangepicker': $.proxy(this.show, this),
        'focus.daterangepicker': $.proxy(this.show, this),
        'keyup.daterangepicker': $.proxy(this.elementChanged, this),
        'keydown.daterangepicker': $.proxy(this.keydown, this) //IE 11 compatibility

      });
    } else {
      this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
      this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this));
    } //
    // if attached to a text input, set the initial value
    //


    this.updateElement();
  };

  DateRangePicker.prototype = {
    constructor: DateRangePicker,
    setStartDate: function setStartDate(startDate) {
      if (typeof startDate === 'string') this.startDate = moment(startDate, this.locale.format);
      if (_typeof(startDate) === 'object') this.startDate = moment(startDate);
      if (!this.timePicker) this.startDate = this.startDate.startOf('day');
      if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

      if (this.minDate && this.startDate.isBefore(this.minDate)) {
        this.startDate = this.minDate.clone();
        if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      }

      if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
        this.startDate = this.maxDate.clone();
        if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      }

      if (!this.isShowing) this.updateElement();
      this.updateMonthsInView();
    },
    setEndDate: function setEndDate(endDate) {
      if (typeof endDate === 'string') this.endDate = moment(endDate, this.locale.format);
      if (_typeof(endDate) === 'object') this.endDate = moment(endDate);
      if (!this.timePicker) this.endDate = this.endDate.endOf('day');
      if (this.timePicker && this.timePickerIncrement) this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      if (this.endDate.isBefore(this.startDate)) this.endDate = this.startDate.clone();
      if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();
      if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate)) this.endDate = this.startDate.clone().add(this.maxSpan);
      this.previousRightTime = this.endDate.clone();
      this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
      if (!this.isShowing) this.updateElement();
      this.updateMonthsInView();
    },
    isInvalidDate: function isInvalidDate() {
      return false;
    },
    isCustomDate: function isCustomDate() {
      return false;
    },
    updateView: function updateView() {
      if (this.timePicker) {
        this.renderTimePicker('left');
        this.renderTimePicker('right');

        if (!this.endDate) {
          this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
        } else {
          this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
        }
      }

      if (this.endDate) this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
      this.updateMonthsInView();
      this.updateCalendars();
      this.updateFormInputs();
    },
    updateMonthsInView: function updateMonthsInView() {
      if (this.endDate) {
        //if both dates are visible already, do nothing
        if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM')) && (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))) {
          return;
        }

        this.leftCalendar.month = this.startDate.clone().date(2);

        if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
          this.rightCalendar.month = this.endDate.clone().date(2);
        } else {
          this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
        }
      } else {
        if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
          this.leftCalendar.month = this.startDate.clone().date(2);
          this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
        }
      }

      if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
        this.rightCalendar.month = this.maxDate.clone().date(2);
        this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
      }
    },
    updateCalendars: function updateCalendars() {
      if (this.timePicker) {
        var hour, minute, second;

        if (this.endDate) {
          hour = parseInt(this.container.find('.left .hourselect').val(), 10);
          minute = parseInt(this.container.find('.left .minuteselect').val(), 10);

          if (isNaN(minute)) {
            minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);
          }

          second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;

          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.left .ampmselect').val();
            if (ampm === 'PM' && hour < 12) hour += 12;
            if (ampm === 'AM' && hour === 12) hour = 0;
          }
        } else {
          hour = parseInt(this.container.find('.right .hourselect').val(), 10);
          minute = parseInt(this.container.find('.right .minuteselect').val(), 10);

          if (isNaN(minute)) {
            minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);
          }

          second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;

          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.right .ampmselect').val();
            if (ampm === 'PM' && hour < 12) hour += 12;
            if (ampm === 'AM' && hour === 12) hour = 0;
          }
        }

        this.leftCalendar.month.hour(hour).minute(minute).second(second);
        this.rightCalendar.month.hour(hour).minute(minute).second(second);
      }

      this.renderCalendar('left');
      this.renderCalendar('right'); //highlight any predefined range matching the current start and end dates

      this.container.find('.ranges li').removeClass('active');
      if (this.endDate == null) return;
      this.calculateChosenLabel();
    },
    renderCalendar: function renderCalendar(side) {
      //
      // Build the matrix of dates that will populate the calendar
      //
      var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
      var month = calendar.month.month();
      var year = calendar.month.year();
      var hour = calendar.month.hour();
      var minute = calendar.month.minute();
      var second = calendar.month.second();
      var daysInMonth = moment([year, month]).daysInMonth();
      var firstDay = moment([year, month, 1]);
      var lastDay = moment([year, month, daysInMonth]);
      var lastMonth = moment(firstDay).subtract(1, 'month').month();
      var lastYear = moment(firstDay).subtract(1, 'month').year();
      var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
      var dayOfWeek = firstDay.day(); //initialize a 6 rows x 7 columns array for the calendar

      var calendar = [];
      calendar.firstDay = firstDay;
      calendar.lastDay = lastDay;

      for (var i = 0; i < 6; i++) {
        calendar[i] = [];
      } //populate the calendar with date objects


      var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
      if (startDay > daysInLastMonth) startDay -= 7;
      if (dayOfWeek == this.locale.firstDay) startDay = daysInLastMonth - 6;
      var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);
      var col, row;

      for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
        if (i > 0 && col % 7 === 0) {
          col = 0;
          row++;
        }

        calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
        curDate.hour(12);

        if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
          calendar[row][col] = this.minDate.clone();
        }

        if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
          calendar[row][col] = this.maxDate.clone();
        }
      } //make the calendar object available to hoverDate/clickDate


      if (side == 'left') {
        this.leftCalendar.calendar = calendar;
      } else {
        this.rightCalendar.calendar = calendar;
      } //
      // Display the calendar
      //


      var minDate = side == 'left' ? this.minDate : this.startDate;
      var maxDate = this.maxDate;
      var selected = side == 'left' ? this.startDate : this.endDate;
      var arrow = this.locale.direction == 'ltr' ? {
        left: 'chevron-left',
        right: 'chevron-right'
      } : {
        left: 'chevron-right',
        right: 'chevron-left'
      };
      var html = '<table class="table-condensed">';
      html += '<thead>';
      html += '<tr>'; // add empty cell for week number

      if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th></th>';

      if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
        html += '<th class="prev available"><span></span></th>';
      } else {
        html += '<th></th>';
      }

      var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

      if (this.showDropdowns) {
        var currentMonth = calendar[1][1].month();
        var currentYear = calendar[1][1].year();
        var maxYear = maxDate && maxDate.year() || this.maxYear;
        var minYear = minDate && minDate.year() || this.minYear;
        var inMinYear = currentYear == minYear;
        var inMaxYear = currentYear == maxYear;
        var monthHtml = '<select class="monthselect">';

        for (var m = 0; m < 12; m++) {
          if ((!inMinYear || minDate && m >= minDate.month()) && (!inMaxYear || maxDate && m <= maxDate.month())) {
            monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>";
          } else {
            monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
          }
        }

        monthHtml += "</select>";
        var yearHtml = '<select class="yearselect">';

        for (var y = minYear; y <= maxYear; y++) {
          yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"' : '') + '>' + y + '</option>';
        }

        yearHtml += '</select>';
        dateHtml = monthHtml + yearHtml;
      }

      html += '<th colspan="5" class="month">' + dateHtml + '</th>';

      if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
        html += '<th class="next available"><span></span></th>';
      } else {
        html += '<th></th>';
      }

      html += '</tr>';
      html += '<tr>'; // add week number label

      if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th class="week">' + this.locale.weekLabel + '</th>';
      $.each(this.locale.daysOfWeek, function (index, dayOfWeek) {
        html += '<th>' + dayOfWeek + '</th>';
      });
      html += '</tr>';
      html += '</thead>';
      html += '<tbody>'; //adjust maxDate to reflect the maxSpan setting in order to
      //grey out end dates beyond the maxSpan

      if (this.endDate == null && this.maxSpan) {
        var maxLimit = this.startDate.clone().add(this.maxSpan).endOf('day');

        if (!maxDate || maxLimit.isBefore(maxDate)) {
          maxDate = maxLimit;
        }
      }

      for (var row = 0; row < 6; row++) {
        html += '<tr>'; // add week number

        if (this.showWeekNumbers) html += '<td class="week">' + calendar[row][0].week() + '</td>';else if (this.showISOWeekNumbers) html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

        for (var col = 0; col < 7; col++) {
          var classes = []; //highlight today's date

          if (calendar[row][col].isSame(new Date(), "day")) classes.push('today'); //highlight weekends

          if (calendar[row][col].isoWeekday() > 5) classes.push('weekend'); //grey out the dates in other months displayed at beginning and end of this calendar

          if (calendar[row][col].month() != calendar[1][1].month()) classes.push('off', 'ends'); //don't allow selection of dates before the minimum date

          if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day')) classes.push('off', 'disabled'); //don't allow selection of dates after the maximum date

          if (maxDate && calendar[row][col].isAfter(maxDate, 'day')) classes.push('off', 'disabled'); //don't allow selection of date if a custom function decides it's invalid

          if (this.isInvalidDate(calendar[row][col])) classes.push('off', 'disabled'); //highlight the currently selected start date

          if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD')) classes.push('active', 'start-date'); //highlight the currently selected end date

          if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD')) classes.push('active', 'end-date'); //highlight dates in-between the selected dates

          if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate) classes.push('in-range'); //apply custom classes for this date

          var isCustom = this.isCustomDate(calendar[row][col]);

          if (isCustom !== false) {
            if (typeof isCustom === 'string') classes.push(isCustom);else Array.prototype.push.apply(classes, isCustom);
          }

          var cname = '',
              disabled = false;

          for (var i = 0; i < classes.length; i++) {
            cname += classes[i] + ' ';
            if (classes[i] == 'disabled') disabled = true;
          }

          if (!disabled) cname += 'available';
          html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';
        }

        html += '</tr>';
      }

      html += '</tbody>';
      html += '</table>';
      this.container.find('.drp-calendar.' + side + ' .calendar-table').html(html);
    },
    renderTimePicker: function renderTimePicker(side) {
      // Don't bother updating the time picker if it's currently disabled
      // because an end date hasn't been clicked yet
      if (side == 'right' && !this.endDate) return;
      var html,
          selected,
          minDate,
          maxDate = this.maxDate;
      if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate))) maxDate = this.startDate.clone().add(this.maxSpan);

      if (side == 'left') {
        selected = this.startDate.clone();
        minDate = this.minDate;
      } else if (side == 'right') {
        selected = this.endDate.clone();
        minDate = this.startDate; //Preserve the time already selected

        var timeSelector = this.container.find('.drp-calendar.right .calendar-time');

        if (timeSelector.html() != '') {
          selected.hour(!isNaN(selected.hour()) ? selected.hour() : timeSelector.find('.hourselect option:selected').val());
          selected.minute(!isNaN(selected.minute()) ? selected.minute() : timeSelector.find('.minuteselect option:selected').val());
          selected.second(!isNaN(selected.second()) ? selected.second() : timeSelector.find('.secondselect option:selected').val());

          if (!this.timePicker24Hour) {
            var ampm = timeSelector.find('.ampmselect option:selected').val();
            if (ampm === 'PM' && selected.hour() < 12) selected.hour(selected.hour() + 12);
            if (ampm === 'AM' && selected.hour() === 12) selected.hour(0);
          }
        }

        if (selected.isBefore(this.startDate)) selected = this.startDate.clone();
        if (maxDate && selected.isAfter(maxDate)) selected = maxDate.clone();
      } //
      // hours
      //


      html = '<select class="hourselect">';
      var start = this.timePicker24Hour ? 0 : 1;
      var end = this.timePicker24Hour ? 23 : 12;

      for (var i = start; i <= end; i++) {
        var i_in_24 = i;
        if (!this.timePicker24Hour) i_in_24 = selected.hour() >= 12 ? i == 12 ? 12 : i + 12 : i == 12 ? 0 : i;
        var time = selected.clone().hour(i_in_24);
        var disabled = false;
        if (minDate && time.minute(59).isBefore(minDate)) disabled = true;
        if (maxDate && time.minute(0).isAfter(maxDate)) disabled = true;

        if (i_in_24 == selected.hour() && !disabled) {
          html += '<option value="' + i + '" selected="selected">' + i + '</option>';
        } else if (disabled) {
          html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
        } else {
          html += '<option value="' + i + '">' + i + '</option>';
        }
      }

      html += '</select> '; //
      // minutes
      //

      html += ': <select class="minuteselect">';

      for (var i = 0; i < 60; i += this.timePickerIncrement) {
        var padded = i < 10 ? '0' + i : i;
        var time = selected.clone().minute(i);
        var disabled = false;
        if (minDate && time.second(59).isBefore(minDate)) disabled = true;
        if (maxDate && time.second(0).isAfter(maxDate)) disabled = true;

        if (selected.minute() == i && !disabled) {
          html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
        } else if (disabled) {
          html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
        } else {
          html += '<option value="' + i + '">' + padded + '</option>';
        }
      }

      html += '</select> '; //
      // seconds
      //

      if (this.timePickerSeconds) {
        html += ': <select class="secondselect">';

        for (var i = 0; i < 60; i++) {
          var padded = i < 10 ? '0' + i : i;
          var time = selected.clone().second(i);
          var disabled = false;
          if (minDate && time.isBefore(minDate)) disabled = true;
          if (maxDate && time.isAfter(maxDate)) disabled = true;

          if (selected.second() == i && !disabled) {
            html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
          } else if (disabled) {
            html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
          } else {
            html += '<option value="' + i + '">' + padded + '</option>';
          }
        }

        html += '</select> ';
      } //
      // AM/PM
      //


      if (!this.timePicker24Hour) {
        html += '<select class="ampmselect">';
        var am_html = '';
        var pm_html = '';
        if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) am_html = ' disabled="disabled" class="disabled"';
        if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) pm_html = ' disabled="disabled" class="disabled"';

        if (selected.hour() >= 12) {
          html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
        } else {
          html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
        }

        html += '</select>';
      }

      this.container.find('.drp-calendar.' + side + ' .calendar-time').html(html);
    },
    updateFormInputs: function updateFormInputs() {
      if (this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate))) {
        this.container.find('button.applyBtn').removeAttr('disabled');
      } else {
        this.container.find('button.applyBtn').attr('disabled', 'disabled');
      }
    },
    move: function move() {
      var parentOffset = {
        top: 0,
        left: 0
      },
          containerTop;
      var parentRightEdge = $(window).width();

      if (!this.parentEl.is('body')) {
        parentOffset = {
          top: this.parentEl.offset().top - this.parentEl.scrollTop(),
          left: this.parentEl.offset().left - this.parentEl.scrollLeft()
        };
        parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
      }

      if (this.drops == 'up') containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;else containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top; // Force the container to it's actual width

      this.container.css({
        top: 0,
        left: 0,
        right: 'auto'
      });
      var containerWidth = this.container.outerWidth();
      this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('drop-up');

      if (this.opens == 'left') {
        var containerRight = parentRightEdge - this.element.offset().left - this.element.outerWidth();

        if (containerWidth + containerRight > $(window).width()) {
          this.container.css({
            top: containerTop,
            right: 'auto',
            left: 9
          });
        } else {
          this.container.css({
            top: containerTop,
            right: containerRight,
            left: 'auto'
          });
        }
      } else if (this.opens == 'center') {
        var containerLeft = this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 - containerWidth / 2;

        if (containerLeft < 0) {
          this.container.css({
            top: containerTop,
            right: 'auto',
            left: 9
          });
        } else if (containerLeft + containerWidth > $(window).width()) {
          this.container.css({
            top: containerTop,
            left: 'auto',
            right: 0
          });
        } else {
          this.container.css({
            top: containerTop,
            left: containerLeft,
            right: 'auto'
          });
        }
      } else {
        var containerLeft = this.element.offset().left - parentOffset.left;

        if (containerLeft + containerWidth > $(window).width()) {
          this.container.css({
            top: containerTop,
            left: 'auto',
            right: 0
          });
        } else {
          this.container.css({
            top: containerTop,
            left: containerLeft,
            right: 'auto'
          });
        }
      }
    },
    show: function show(e) {
      if (this.isShowing) return; // Create a click proxy that is private to this instance of datepicker, for unbinding

      this._outsideClickProxy = $.proxy(function (e) {
        this.outsideClick(e);
      }, this); // Bind global datepicker mousedown for hiding and

      $(document).on('mousedown.daterangepicker', this._outsideClickProxy) // also support mobile devices
      .on('touchend.daterangepicker', this._outsideClickProxy) // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
      .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy) // and also close when focus changes to outside the picker (eg. tabbing between controls)
      .on('focusin.daterangepicker', this._outsideClickProxy); // Reposition the picker if the window is resized while it's open

      $(window).on('resize.daterangepicker', $.proxy(function (e) {
        this.move(e);
      }, this));
      this.oldStartDate = this.startDate.clone();
      this.oldEndDate = this.endDate.clone();
      this.previousRightTime = this.endDate.clone();
      this.updateView();
      this.container.show();
      this.move();
      this.element.trigger('show.daterangepicker', this);
      this.isShowing = true;
    },
    hide: function hide(e) {
      if (!this.isShowing) return; //incomplete date selection, revert to last values

      if (!this.endDate) {
        this.startDate = this.oldStartDate.clone();
        this.endDate = this.oldEndDate.clone();
      } //if a new date range was selected, invoke the user callback function


      if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel); //if picker is attached to a text input, update it

      this.updateElement();
      $(document).off('.daterangepicker');
      $(window).off('.daterangepicker');
      this.container.hide();
      this.element.trigger('hide.daterangepicker', this);
      this.isShowing = false;
    },
    toggle: function toggle(e) {
      if (this.isShowing) {
        this.hide();
      } else {
        this.show();
      }
    },
    outsideClick: function outsideClick(e) {
      var target = $(e.target); // if the page is clicked anywhere except within the daterangerpicker/button
      // itself then call this.hide()

      if ( // ie modal dialog fix
      e.type == "focusin" || target.closest(this.element).length || target.closest(this.container).length || target.closest('.calendar-table').length) return;
      this.hide();
      this.element.trigger('outsideClick.daterangepicker', this);
    },
    showCalendars: function showCalendars() {
      this.container.addClass('show-calendar');
      this.move();
      this.element.trigger('showCalendar.daterangepicker', this);
    },
    hideCalendars: function hideCalendars() {
      this.container.removeClass('show-calendar');
      this.element.trigger('hideCalendar.daterangepicker', this);
    },
    clickRange: function clickRange(e) {
      var label = e.target.getAttribute('data-range-key');
      this.chosenLabel = label;

      if (label == this.locale.customRangeLabel) {
        this.showCalendars();
      } else {
        var dates = this.ranges[label];
        this.startDate = dates[0];
        this.endDate = dates[1];

        if (!this.timePicker) {
          this.startDate.startOf('day');
          this.endDate.endOf('day');
        }

        if (!this.alwaysShowCalendars) this.hideCalendars();
        this.clickApply();
      }
    },
    clickPrev: function clickPrev(e) {
      var cal = $(e.target).parents('.drp-calendar');

      if (cal.hasClass('left')) {
        this.leftCalendar.month.subtract(1, 'month');
        if (this.linkedCalendars) this.rightCalendar.month.subtract(1, 'month');
      } else {
        this.rightCalendar.month.subtract(1, 'month');
      }

      this.updateCalendars();
    },
    clickNext: function clickNext(e) {
      var cal = $(e.target).parents('.drp-calendar');

      if (cal.hasClass('left')) {
        this.leftCalendar.month.add(1, 'month');
      } else {
        this.rightCalendar.month.add(1, 'month');
        if (this.linkedCalendars) this.leftCalendar.month.add(1, 'month');
      }

      this.updateCalendars();
    },
    hoverDate: function hoverDate(e) {
      //ignore dates that can't be selected
      if (!$(e.target).hasClass('available')) return;
      var title = $(e.target).attr('data-title');
      var row = title.substr(1, 1);
      var col = title.substr(3, 1);
      var cal = $(e.target).parents('.drp-calendar');
      var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col]; //highlight the dates between the start date and the date being hovered as a potential end date

      var leftCalendar = this.leftCalendar;
      var rightCalendar = this.rightCalendar;
      var startDate = this.startDate;

      if (!this.endDate) {
        this.container.find('.drp-calendar tbody td').each(function (index, el) {
          //skip week numbers, only look at dates
          if ($(el).hasClass('week')) return;
          var title = $(el).attr('data-title');
          var row = title.substr(1, 1);
          var col = title.substr(3, 1);
          var cal = $(el).parents('.drp-calendar');
          var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

          if (dt.isAfter(startDate) && dt.isBefore(date) || dt.isSame(date, 'day')) {
            $(el).addClass('in-range');
          } else {
            $(el).removeClass('in-range');
          }
        });
      }
    },
    clickDate: function clickDate(e) {
      if (!$(e.target).hasClass('available')) return;
      var title = $(e.target).attr('data-title');
      var row = title.substr(1, 1);
      var col = title.substr(3, 1);
      var cal = $(e.target).parents('.drp-calendar');
      var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col]; //
      // this function needs to do a few things:
      // * alternate between selecting a start and end date for the range,
      // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
      // * if autoapply is enabled, and an end date was chosen, apply the selection
      // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
      // * if one of the inputs above the calendars was focused, cancel that manual input
      //

      if (this.endDate || date.isBefore(this.startDate, 'day')) {
        //picking start
        if (this.timePicker) {
          var hour = parseInt(this.container.find('.left .hourselect').val(), 10);

          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.left .ampmselect').val();
            if (ampm === 'PM' && hour < 12) hour += 12;
            if (ampm === 'AM' && hour === 12) hour = 0;
          }

          var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);

          if (isNaN(minute)) {
            minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);
          }

          var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
          date = date.clone().hour(hour).minute(minute).second(second);
        }

        this.endDate = null;
        this.setStartDate(date.clone());
      } else if (!this.endDate && date.isBefore(this.startDate)) {
        //special case: clicking the same date for start/end,
        //but the time of the end date is before the start date
        this.setEndDate(this.startDate.clone());
      } else {
        // picking end
        if (this.timePicker) {
          var hour = parseInt(this.container.find('.right .hourselect').val(), 10);

          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.right .ampmselect').val();
            if (ampm === 'PM' && hour < 12) hour += 12;
            if (ampm === 'AM' && hour === 12) hour = 0;
          }

          var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);

          if (isNaN(minute)) {
            minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);
          }

          var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
          date = date.clone().hour(hour).minute(minute).second(second);
        }

        this.setEndDate(date.clone());

        if (this.autoApply) {
          this.calculateChosenLabel();
          this.clickApply();
        }
      }

      if (this.singleDatePicker) {
        this.setEndDate(this.startDate);
        if (!this.timePicker) this.clickApply();
      }

      this.updateView(); //This is to cancel the blur event handler if the mouse was in one of the inputs

      e.stopPropagation();
    },
    calculateChosenLabel: function calculateChosenLabel() {
      var customRange = true;
      var i = 0;

      for (var range in this.ranges) {
        if (this.timePicker) {
          var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm"; //ignore times when comparing dates if time picker seconds is not enabled

          if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
            customRange = false;
            this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
            break;
          }
        } else {
          //ignore times when comparing dates if time picker is not enabled
          if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
            customRange = false;
            this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
            break;
          }
        }

        i++;
      }

      if (customRange) {
        if (this.showCustomRangeLabel) {
          this.chosenLabel = this.container.find('.ranges li:last').addClass('active').attr('data-range-key');
        } else {
          this.chosenLabel = null;
        }

        this.showCalendars();
      }
    },
    clickApply: function clickApply(e) {
      this.hide();
      this.element.trigger('apply.daterangepicker', this);
    },
    clickCancel: function clickCancel(e) {
      this.startDate = this.oldStartDate;
      this.endDate = this.oldEndDate;
      this.hide();
      this.element.trigger('cancel.daterangepicker', this);
    },
    monthOrYearChanged: function monthOrYearChanged(e) {
      var isLeft = $(e.target).closest('.drp-calendar').hasClass('left'),
          leftOrRight = isLeft ? 'left' : 'right',
          cal = this.container.find('.drp-calendar.' + leftOrRight); // Month must be Number for new moment versions

      var month = parseInt(cal.find('.monthselect').val(), 10);
      var year = cal.find('.yearselect').val();

      if (!isLeft) {
        if (year < this.startDate.year() || year == this.startDate.year() && month < this.startDate.month()) {
          month = this.startDate.month();
          year = this.startDate.year();
        }
      }

      if (this.minDate) {
        if (year < this.minDate.year() || year == this.minDate.year() && month < this.minDate.month()) {
          month = this.minDate.month();
          year = this.minDate.year();
        }
      }

      if (this.maxDate) {
        if (year > this.maxDate.year() || year == this.maxDate.year() && month > this.maxDate.month()) {
          month = this.maxDate.month();
          year = this.maxDate.year();
        }
      }

      if (isLeft) {
        this.leftCalendar.month.month(month).year(year);
        if (this.linkedCalendars) this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
      } else {
        this.rightCalendar.month.month(month).year(year);
        if (this.linkedCalendars) this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
      }

      this.updateCalendars();
    },
    timeChanged: function timeChanged(e) {
      var cal = $(e.target).closest('.drp-calendar'),
          isLeft = cal.hasClass('left');
      var hour = parseInt(cal.find('.hourselect').val(), 10);
      var minute = parseInt(cal.find('.minuteselect').val(), 10);

      if (isNaN(minute)) {
        minute = parseInt(cal.find('.minuteselect option:last').val(), 10);
      }

      var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

      if (!this.timePicker24Hour) {
        var ampm = cal.find('.ampmselect').val();
        if (ampm === 'PM' && hour < 12) hour += 12;
        if (ampm === 'AM' && hour === 12) hour = 0;
      }

      if (isLeft) {
        var start = this.startDate.clone();
        start.hour(hour);
        start.minute(minute);
        start.second(second);
        this.setStartDate(start);

        if (this.singleDatePicker) {
          this.endDate = this.startDate.clone();
        } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
          this.setEndDate(start.clone());
        }
      } else if (this.endDate) {
        var end = this.endDate.clone();
        end.hour(hour);
        end.minute(minute);
        end.second(second);
        this.setEndDate(end);
      } //update the calendars so all clickable dates reflect the new time component


      this.updateCalendars(); //update the form inputs above the calendars with the new time

      this.updateFormInputs(); //re-render the time pickers because changing one selection can affect what's enabled in another

      this.renderTimePicker('left');
      this.renderTimePicker('right');
    },
    elementChanged: function elementChanged() {
      if (!this.element.is('input')) return;
      if (!this.element.val().length) return;
      var dateString = this.element.val().split(this.locale.separator),
          start = null,
          end = null;

      if (dateString.length === 2) {
        start = moment(dateString[0], this.locale.format);
        end = moment(dateString[1], this.locale.format);
      }

      if (this.singleDatePicker || start === null || end === null) {
        start = moment(this.element.val(), this.locale.format);
        end = start;
      }

      if (!start.isValid() || !end.isValid()) return;
      this.setStartDate(start);
      this.setEndDate(end);
      this.updateView();
    },
    keydown: function keydown(e) {
      //hide on tab or enter
      if (e.keyCode === 9 || e.keyCode === 13) {
        this.hide();
      } //hide on esc and prevent propagation


      if (e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        this.hide();
      }
    },
    updateElement: function updateElement() {
      if (this.element.is('input') && this.autoUpdateInput) {
        var newValue = this.startDate.format(this.locale.format);

        if (!this.singleDatePicker) {
          newValue += this.locale.separator + this.endDate.format(this.locale.format);
        }

        if (newValue !== this.element.val()) {
          this.element.val(newValue).trigger('change');
        }
      }
    },
    remove: function remove() {
      this.container.remove();
      this.element.off('.daterangepicker');
      this.element.removeData();
    }
  };

  $.fn.daterangepicker = function (options, callback) {
    var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);
    this.each(function () {
      var el = $(this);
      if (el.data('daterangepicker')) el.data('daterangepicker').remove();
      el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));
    });
    return this;
  };

  return DateRangePicker;
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_well-known-sy-07cc72","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-31b1f3","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-248d90","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_j-bdcbd3"], () => (__webpack_exec__("./assets/plugins/daterangepicker/daterangepicker.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5nby8uL2Fzc2V0cy9wbHVnaW5zL2RhdGVyYW5nZXBpY2tlci9kYXRlcmFuZ2VwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vYmluZ28vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZXxzeW5jfC9eLy4qJCJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImRlZmluZSIsIm1vbWVudCIsImpxdWVyeSIsImZuIiwiJCIsIkRhdGVSYW5nZVBpY2tlciIsImVsZW1lbnQiLCJvcHRpb25zIiwiY2IiLCJwYXJlbnRFbCIsInN0YXJ0RGF0ZSIsInN0YXJ0T2YiLCJlbmREYXRlIiwiZW5kT2YiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIm1heFNwYW4iLCJhdXRvQXBwbHkiLCJzaW5nbGVEYXRlUGlja2VyIiwic2hvd0Ryb3Bkb3ducyIsIm1pblllYXIiLCJzdWJ0cmFjdCIsImZvcm1hdCIsIm1heFllYXIiLCJhZGQiLCJzaG93V2Vla051bWJlcnMiLCJzaG93SVNPV2Vla051bWJlcnMiLCJzaG93Q3VzdG9tUmFuZ2VMYWJlbCIsInRpbWVQaWNrZXIiLCJ0aW1lUGlja2VyMjRIb3VyIiwidGltZVBpY2tlckluY3JlbWVudCIsInRpbWVQaWNrZXJTZWNvbmRzIiwibGlua2VkQ2FsZW5kYXJzIiwiYXV0b1VwZGF0ZUlucHV0IiwiYWx3YXlzU2hvd0NhbGVuZGFycyIsInJhbmdlcyIsIm9wZW5zIiwiaGFzQ2xhc3MiLCJkcm9wcyIsImJ1dHRvbkNsYXNzZXMiLCJhcHBseUJ1dHRvbkNsYXNzZXMiLCJjYW5jZWxCdXR0b25DbGFzc2VzIiwibG9jYWxlIiwiZGlyZWN0aW9uIiwibG9jYWxlRGF0YSIsImxvbmdEYXRlRm9ybWF0Iiwic2VwYXJhdG9yIiwiYXBwbHlMYWJlbCIsImNhbmNlbExhYmVsIiwid2Vla0xhYmVsIiwiY3VzdG9tUmFuZ2VMYWJlbCIsImRheXNPZldlZWsiLCJ3ZWVrZGF5c01pbiIsIm1vbnRoTmFtZXMiLCJtb250aHNTaG9ydCIsImZpcnN0RGF5IiwiZmlyc3REYXlPZldlZWsiLCJjYWxsYmFjayIsImlzU2hvd2luZyIsImxlZnRDYWxlbmRhciIsInJpZ2h0Q2FsZW5kYXIiLCJleHRlbmQiLCJkYXRhIiwidGVtcGxhdGUiLCJsZW5ndGgiLCJjb250YWluZXIiLCJhcHBlbmRUbyIsInNsaWNlIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInJhbmdlSHRtbCIsInZhbHVlIiwiYWRkQ2xhc3MiLCJpc0JlZm9yZSIsImNsb25lIiwiaXNBZnRlciIsImFwcGx5Q2xhc3MiLCJjYW5jZWxDbGFzcyIsImRhdGVMaW1pdCIsImpvaW4iLCJpc0ludmFsaWREYXRlIiwiaXNDdXN0b21EYXRlIiwiaXRlcmF0b3IiLCJwdXNoIiwic2hpZnQiLCJzdGFydCIsImVuZCIsInJhbmdlIiwiaXMiLCJ2YWwiLCJzcGxpdCIsInNldFN0YXJ0RGF0ZSIsInNldEVuZERhdGUiLCJ0aW1lcGlja2VyIiwibGlzdCIsImZpbmQiLCJwcmVwZW5kIiwiaGlkZSIsInNob3ciLCJodG1sIiwib24iLCJwcm94eSIsImNsaWNrUHJldiIsImNsaWNrTmV4dCIsImNsaWNrRGF0ZSIsImhvdmVyRGF0ZSIsIm1vbnRoT3JZZWFyQ2hhbmdlZCIsInRpbWVDaGFuZ2VkIiwiY2xpY2tSYW5nZSIsImNsaWNrQXBwbHkiLCJjbGlja0NhbmNlbCIsImVsZW1lbnRDaGFuZ2VkIiwia2V5ZG93biIsInRvZ2dsZSIsInVwZGF0ZUVsZW1lbnQiLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsIm1pbnV0ZSIsIk1hdGgiLCJyb3VuZCIsImZsb29yIiwidXBkYXRlTW9udGhzSW5WaWV3IiwicHJldmlvdXNSaWdodFRpbWUiLCJ1cGRhdGVWaWV3IiwicmVuZGVyVGltZVBpY2tlciIsImF0dHIiLCJyZW1vdmVBdHRyIiwicmVtb3ZlQ2xhc3MiLCJ1cGRhdGVDYWxlbmRhcnMiLCJ1cGRhdGVGb3JtSW5wdXRzIiwibW9udGgiLCJkYXRlIiwieWVhciIsImhvdXIiLCJzZWNvbmQiLCJwYXJzZUludCIsImlzTmFOIiwiYW1wbSIsInJlbmRlckNhbGVuZGFyIiwiY2FsY3VsYXRlQ2hvc2VuTGFiZWwiLCJzaWRlIiwiY2FsZW5kYXIiLCJkYXlzSW5Nb250aCIsImxhc3REYXkiLCJsYXN0TW9udGgiLCJsYXN0WWVhciIsImRheXNJbkxhc3RNb250aCIsImRheU9mV2VlayIsImRheSIsImkiLCJzdGFydERheSIsImN1ckRhdGUiLCJjb2wiLCJyb3ciLCJzZWxlY3RlZCIsImFycm93IiwibGVmdCIsInJpZ2h0IiwiZGF0ZUh0bWwiLCJjdXJyZW50TW9udGgiLCJjdXJyZW50WWVhciIsImluTWluWWVhciIsImluTWF4WWVhciIsIm1vbnRoSHRtbCIsIm0iLCJ5ZWFySHRtbCIsInkiLCJlYWNoIiwiaW5kZXgiLCJtYXhMaW1pdCIsIndlZWsiLCJpc29XZWVrIiwiY2xhc3NlcyIsImlzU2FtZSIsIkRhdGUiLCJpc29XZWVrZGF5IiwiaXNDdXN0b20iLCJBcnJheSIsImFwcGx5IiwiY25hbWUiLCJkaXNhYmxlZCIsInJlcGxhY2UiLCJ0aW1lU2VsZWN0b3IiLCJpX2luXzI0IiwidGltZSIsInBhZGRlZCIsImFtX2h0bWwiLCJwbV9odG1sIiwibW92ZSIsInBhcmVudE9mZnNldCIsInRvcCIsImNvbnRhaW5lclRvcCIsInBhcmVudFJpZ2h0RWRnZSIsIndpbmRvdyIsIndpZHRoIiwib2Zmc2V0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImNsaWVudFdpZHRoIiwib3V0ZXJIZWlnaHQiLCJjc3MiLCJjb250YWluZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJjb250YWluZXJSaWdodCIsImNvbnRhaW5lckxlZnQiLCJlIiwiX291dHNpZGVDbGlja1Byb3h5Iiwib3V0c2lkZUNsaWNrIiwib2xkU3RhcnREYXRlIiwib2xkRW5kRGF0ZSIsInRyaWdnZXIiLCJjaG9zZW5MYWJlbCIsIm9mZiIsInRhcmdldCIsInR5cGUiLCJjbG9zZXN0Iiwic2hvd0NhbGVuZGFycyIsImhpZGVDYWxlbmRhcnMiLCJsYWJlbCIsImdldEF0dHJpYnV0ZSIsImRhdGVzIiwiY2FsIiwicGFyZW50cyIsInRpdGxlIiwic3Vic3RyIiwiZWwiLCJkdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1c3RvbVJhbmdlIiwiaXNMZWZ0IiwibGVmdE9yUmlnaHQiLCJkYXRlU3RyaW5nIiwiaXNWYWxpZCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1ZhbHVlIiwicmVtb3ZlIiwicmVtb3ZlRGF0YSIsImRhdGVyYW5nZXBpY2tlciIsImltcGxlbWVudE9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyxXQUFVQSxJQUFWLEVBQWdCQyxPQUFoQixFQUF5QjtBQUN0QixNQUFJLElBQUosRUFBZ0Q7QUFDNUM7QUFDQUMscUNBQU8sQ0FBQyxvRUFBRCxFQUFXLHlFQUFYLENBQUQsbUNBQXVCLFVBQVVDLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ25ELFVBQUksQ0FBQ0EsTUFBTSxDQUFDQyxFQUFaLEVBQWdCRCxNQUFNLENBQUNDLEVBQVAsR0FBWSxFQUFaLENBRG1DLENBQ25COztBQUNoQyxVQUFJLE9BQU9GLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sV0FBMUMsRUFBb0RBLE1BQU0sR0FBR0EsTUFBTSxXQUFmO0FBQ3BELGFBQU9GLE9BQU8sQ0FBQ0UsTUFBRCxFQUFTQyxNQUFULENBQWQ7QUFDSCxLQUpLO0FBQUEsa0dBQU47QUFLSCxHQVBELE1BT08sdUJBYU47QUFDSixDQXRCQSxFQXNCQyxJQXRCRCxFQXNCTyxVQUFTRCxNQUFULEVBQWlCRyxDQUFqQixFQUFvQjtBQUN4QixNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCQyxFQUEzQixFQUErQjtBQUVqRDtBQUNBLFNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkUiLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLWNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4qIEB2ZXJzaW9uOiAzLjAuNVxyXG4qIEBhdXRob3I6IERhbiBHcm9zc21hbiBodHRwOi8vd3d3LmRhbmdyb3NzbWFuLmluZm8vXHJcbiogQGNvcHlyaWdodDogQ29weXJpZ2h0IChjKSAyMDEyLTIwMTkgRGFuIEdyb3NzbWFuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4qIEBsaWNlbnNlOiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4qIEB3ZWJzaXRlOiBodHRwOi8vd3d3LmRhdGVyYW5nZXBpY2tlci5jb20vXHJcbiovXHJcbi8vIEZvbGxvd2luZyB0aGUgVU1EIHRlbXBsYXRlIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvdGVtcGxhdGVzL3JldHVybkV4cG9ydHNHbG9iYWwuanNcclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgLy8gQU1ELiBNYWtlIGdsb2JhbHkgYXZhaWxhYmxlIGFzIHdlbGxcclxuICAgICAgICBkZWZpbmUoWydtb21lbnQnLCAnanF1ZXJ5J10sIGZ1bmN0aW9uIChtb21lbnQsIGpxdWVyeSkge1xyXG4gICAgICAgICAgICBpZiAoIWpxdWVyeS5mbikganF1ZXJ5LmZuID0ge307IC8vIHdlYnBhY2sgc2VydmVyIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vbWVudCAhPT0gJ2Z1bmN0aW9uJyAmJiBtb21lbnQuZGVmYXVsdCkgbW9tZW50ID0gbW9tZW50LmRlZmF1bHRcclxuICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkobW9tZW50LCBqcXVlcnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgIC8vIE5vZGUgLyBCcm93c2VyaWZ5XHJcbiAgICAgICAgLy9pc29tb3JwaGljIGlzc3VlXHJcbiAgICAgICAgdmFyIGpRdWVyeSA9ICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnKSA/IHdpbmRvdy5qUXVlcnkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKCFqUXVlcnkpIHtcclxuICAgICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbiAgICAgICAgICAgIGlmICghalF1ZXJ5LmZuKSBqUXVlcnkuZm4gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1vbWVudCA9ICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubW9tZW50ICE9ICd1bmRlZmluZWQnKSA/IHdpbmRvdy5tb21lbnQgOiByZXF1aXJlKCdtb21lbnQnKTtcclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkobW9tZW50LCBqUXVlcnkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcclxuICAgICAgICByb290LmRhdGVyYW5nZXBpY2tlciA9IGZhY3Rvcnkocm9vdC5tb21lbnQsIHJvb3QualF1ZXJ5KTtcclxuICAgIH1cclxufSh0aGlzLCBmdW5jdGlvbihtb21lbnQsICQpIHtcclxuICAgIHZhciBEYXRlUmFuZ2VQaWNrZXIgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zLCBjYikge1xyXG5cclxuICAgICAgICAvL2RlZmF1bHQgc2V0dGluZ3MgZm9yIG9wdGlvbnNcclxuICAgICAgICB0aGlzLnBhcmVudEVsID0gJ2JvZHknO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQoKS5zdGFydE9mKCdkYXknKTtcclxuICAgICAgICB0aGlzLmVuZERhdGUgPSBtb21lbnQoKS5lbmRPZignZGF5Jyk7XHJcbiAgICAgICAgdGhpcy5taW5EYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYXhEYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYXhTcGFuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hdXRvQXBwbHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNpbmdsZURhdGVQaWNrZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob3dEcm9wZG93bnMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1pblllYXIgPSBtb21lbnQoKS5zdWJ0cmFjdCgxMDAsICd5ZWFyJykuZm9ybWF0KCdZWVlZJyk7XHJcbiAgICAgICAgdGhpcy5tYXhZZWFyID0gbW9tZW50KCkuYWRkKDEwMCwgJ3llYXInKS5mb3JtYXQoJ1lZWVknKTtcclxuICAgICAgICB0aGlzLnNob3dXZWVrTnVtYmVycyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0lTT1dlZWtOdW1iZXJzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93Q3VzdG9tUmFuZ2VMYWJlbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50aW1lUGlja2VyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lUGlja2VyMjRIb3VyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lUGlja2VySW5jcmVtZW50ID0gMTtcclxuICAgICAgICB0aGlzLnRpbWVQaWNrZXJTZWNvbmRzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saW5rZWRDYWxlbmRhcnMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZUlucHV0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFsd2F5c1Nob3dDYWxlbmRhcnMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJhbmdlcyA9IHt9O1xyXG5cclxuICAgICAgICB0aGlzLm9wZW5zID0gJ3JpZ2h0JztcclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Lmhhc0NsYXNzKCdwdWxsLXJpZ2h0JykpXHJcbiAgICAgICAgICAgIHRoaXMub3BlbnMgPSAnbGVmdCc7XHJcblxyXG4gICAgICAgIHRoaXMuZHJvcHMgPSAnZG93bic7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5oYXNDbGFzcygnZHJvcHVwJykpXHJcbiAgICAgICAgICAgIHRoaXMuZHJvcHMgPSAndXAnO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzZXMgPSAnYnRuIGJ0bi1zbSc7XHJcbiAgICAgICAgdGhpcy5hcHBseUJ1dHRvbkNsYXNzZXMgPSAnYnRuLXByaW1hcnknO1xyXG4gICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uQ2xhc3NlcyA9ICdidG4tZGVmYXVsdCc7XHJcblxyXG4gICAgICAgIHRoaXMubG9jYWxlID0ge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdsdHInLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IG1vbWVudC5sb2NhbGVEYXRhKCkubG9uZ0RhdGVGb3JtYXQoJ0wnKSxcclxuICAgICAgICAgICAgc2VwYXJhdG9yOiAnIC0gJyxcclxuICAgICAgICAgICAgYXBwbHlMYWJlbDogJ0FwcGx5JyxcclxuICAgICAgICAgICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICB3ZWVrTGFiZWw6ICdXJyxcclxuICAgICAgICAgICAgY3VzdG9tUmFuZ2VMYWJlbDogJ0N1c3RvbSBSYW5nZScsXHJcbiAgICAgICAgICAgIGRheXNPZldlZWs6IG1vbWVudC53ZWVrZGF5c01pbigpLFxyXG4gICAgICAgICAgICBtb250aE5hbWVzOiBtb21lbnQubW9udGhzU2hvcnQoKSxcclxuICAgICAgICAgICAgZmlyc3REYXk6IG1vbWVudC5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBmdW5jdGlvbigpIHsgfTtcclxuXHJcbiAgICAgICAgLy9zb21lIHN0YXRlIGluZm9ybWF0aW9uXHJcbiAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxlZnRDYWxlbmRhciA9IHt9O1xyXG4gICAgICAgIHRoaXMucmlnaHRDYWxlbmRhciA9IHt9O1xyXG5cclxuICAgICAgICAvL2N1c3RvbSBvcHRpb25zIGZyb20gdXNlclxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcgfHwgb3B0aW9ucyA9PT0gbnVsbClcclxuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAvL2FsbG93IHNldHRpbmcgb3B0aW9ucyB3aXRoIGRhdGEgYXR0cmlidXRlc1xyXG4gICAgICAgIC8vZGF0YS1hcGkgb3B0aW9ucyB3aWxsIGJlIG92ZXJ3cml0dGVuIHdpdGggY3VzdG9tIGphdmFzY3JpcHQgb3B0aW9uc1xyXG4gICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh0aGlzLmVsZW1lbnQuZGF0YSgpLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy9odG1sIHRlbXBsYXRlIGZvciB0aGUgcGlja2VyIFVJXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRlbXBsYXRlICE9PSAnc3RyaW5nJyAmJiAhKG9wdGlvbnMudGVtcGxhdGUgaW5zdGFuY2VvZiAkKSlcclxuICAgICAgICAgICAgb3B0aW9ucy50ZW1wbGF0ZSA9XHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZGF0ZXJhbmdlcGlja2VyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJhbmdlc1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkcnAtY2FsZW5kYXIgbGVmdFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2FsZW5kYXItdGFibGVcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNhbGVuZGFyLXRpbWVcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZHJwLWNhbGVuZGFyIHJpZ2h0XCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYWxlbmRhci10YWJsZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2FsZW5kYXItdGltZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkcnAtYnV0dG9uc1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImRycC1zZWxlY3RlZFwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImNhbmNlbEJ0blwiIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImFwcGx5QnRuXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj4gJyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICB0aGlzLnBhcmVudEVsID0gKG9wdGlvbnMucGFyZW50RWwgJiYgJChvcHRpb25zLnBhcmVudEVsKS5sZW5ndGgpID8gJChvcHRpb25zLnBhcmVudEVsKSA6ICQodGhpcy5wYXJlbnRFbCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKG9wdGlvbnMudGVtcGxhdGUpLmFwcGVuZFRvKHRoaXMucGFyZW50RWwpO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGhhbmRsZSBhbGwgdGhlIHBvc3NpYmxlIG9wdGlvbnMgb3ZlcnJpZGluZyBkZWZhdWx0c1xyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICdvYmplY3QnKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlLmRpcmVjdGlvbiA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZS5kaXJlY3Rpb24gPSBvcHRpb25zLmxvY2FsZS5kaXJlY3Rpb247XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlLmZvcm1hdCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZS5mb3JtYXQgPSBvcHRpb25zLmxvY2FsZS5mb3JtYXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlLnNlcGFyYXRvciA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZS5zZXBhcmF0b3IgPSBvcHRpb25zLmxvY2FsZS5zZXBhcmF0b3I7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlLmRheXNPZldlZWsgPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUuZGF5c09mV2VlayA9IG9wdGlvbnMubG9jYWxlLmRheXNPZldlZWsuc2xpY2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUubW9udGhOYW1lcyA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUubW9udGhOYW1lcyA9IG9wdGlvbnMubG9jYWxlLm1vbnRoTmFtZXMuc2xpY2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUuZmlyc3REYXkgPT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlLmZpcnN0RGF5ID0gb3B0aW9ucy5sb2NhbGUuZmlyc3REYXk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlLmFwcGx5TGFiZWwgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlLmFwcGx5TGFiZWwgPSBvcHRpb25zLmxvY2FsZS5hcHBseUxhYmVsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZS5jYW5jZWxMYWJlbCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUuY2FuY2VsTGFiZWwgPSBvcHRpb25zLmxvY2FsZS5jYW5jZWxMYWJlbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUud2Vla0xhYmVsID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICB0aGlzLmxvY2FsZS53ZWVrTGFiZWwgPSBvcHRpb25zLmxvY2FsZS53ZWVrTGFiZWw7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlLmN1c3RvbVJhbmdlTGFiZWwgPT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgICAgIC8vU3VwcG9ydCB1bmljb2RlIGNoYXJzIGluIHRoZSBjdXN0b20gcmFuZ2UgbmFtZS5cclxuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gb3B0aW9ucy5sb2NhbGUuY3VzdG9tUmFuZ2VMYWJlbDtcclxuICAgICAgICAgICAgICAgIHZhciByYW5nZUh0bWwgPSBlbGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUuY3VzdG9tUmFuZ2VMYWJlbCA9IHJhbmdlSHRtbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcyh0aGlzLmxvY2FsZS5kaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3RhcnREYXRlID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSBtb21lbnQob3B0aW9ucy5zdGFydERhdGUsIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5lbmREYXRlID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gbW9tZW50KG9wdGlvbnMuZW5kRGF0ZSwgdGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm1pbkRhdGUgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB0aGlzLm1pbkRhdGUgPSBtb21lbnQob3B0aW9ucy5taW5EYXRlLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubWF4RGF0ZSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHRoaXMubWF4RGF0ZSA9IG1vbWVudChvcHRpb25zLm1heERhdGUsIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zdGFydERhdGUgPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IG1vbWVudChvcHRpb25zLnN0YXJ0RGF0ZSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5lbmREYXRlID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gbW9tZW50KG9wdGlvbnMuZW5kRGF0ZSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5taW5EYXRlID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgdGhpcy5taW5EYXRlID0gbW9tZW50KG9wdGlvbnMubWluRGF0ZSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tYXhEYXRlID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgdGhpcy5tYXhEYXRlID0gbW9tZW50KG9wdGlvbnMubWF4RGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIHNhbml0eSBjaGVjayBmb3IgYmFkIG9wdGlvbnNcclxuICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIHRoaXMuc3RhcnREYXRlLmlzQmVmb3JlKHRoaXMubWluRGF0ZSkpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5taW5EYXRlLmNsb25lKCk7XHJcblxyXG4gICAgICAgIC8vIHNhbml0eSBjaGVjayBmb3IgYmFkIG9wdGlvbnNcclxuICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIHRoaXMuZW5kRGF0ZS5pc0FmdGVyKHRoaXMubWF4RGF0ZSkpXHJcbiAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMubWF4RGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXBwbHlCdXR0b25DbGFzc2VzID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgdGhpcy5hcHBseUJ1dHRvbkNsYXNzZXMgPSBvcHRpb25zLmFwcGx5QnV0dG9uQ2xhc3NlcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFwcGx5Q2xhc3MgPT09ICdzdHJpbmcnKSAvL2JhY2t3YXJkcyBjb21wYXRcclxuICAgICAgICAgICAgdGhpcy5hcHBseUJ1dHRvbkNsYXNzZXMgPSBvcHRpb25zLmFwcGx5Q2xhc3M7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jYW5jZWxCdXR0b25DbGFzc2VzID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxCdXR0b25DbGFzc2VzID0gb3B0aW9ucy5jYW5jZWxCdXR0b25DbGFzc2VzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuY2FuY2VsQ2xhc3MgPT09ICdzdHJpbmcnKSAvL2JhY2t3YXJkcyBjb21wYXRcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxCdXR0b25DbGFzc2VzID0gb3B0aW9ucy5jYW5jZWxDbGFzcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm1heFNwYW4gPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICB0aGlzLm1heFNwYW4gPSBvcHRpb25zLm1heFNwYW47XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kYXRlTGltaXQgPT09ICdvYmplY3QnKSAvL2JhY2t3YXJkcyBjb21wYXRcclxuICAgICAgICAgICAgdGhpcy5tYXhTcGFuID0gb3B0aW9ucy5kYXRlTGltaXQ7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vcGVucyA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHRoaXMub3BlbnMgPSBvcHRpb25zLm9wZW5zO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuZHJvcHMgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICB0aGlzLmRyb3BzID0gb3B0aW9ucy5kcm9wcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNob3dXZWVrTnVtYmVycyA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICB0aGlzLnNob3dXZWVrTnVtYmVycyA9IG9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2hvd0lTT1dlZWtOdW1iZXJzID09PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lTT1dlZWtOdW1iZXJzID0gb3B0aW9ucy5zaG93SVNPV2Vla051bWJlcnM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5idXR0b25DbGFzc2VzID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgdGhpcy5idXR0b25DbGFzc2VzID0gb3B0aW9ucy5idXR0b25DbGFzc2VzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYnV0dG9uQ2xhc3NlcyA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xhc3NlcyA9IG9wdGlvbnMuYnV0dG9uQ2xhc3Nlcy5qb2luKCcgJyk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaG93RHJvcGRvd25zID09PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3ducyA9IG9wdGlvbnMuc2hvd0Ryb3Bkb3ducztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm1pblllYXIgPT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICB0aGlzLm1pblllYXIgPSBvcHRpb25zLm1pblllYXI7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tYXhZZWFyID09PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgdGhpcy5tYXhZZWFyID0gb3B0aW9ucy5tYXhZZWFyO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2hvd0N1c3RvbVJhbmdlTGFiZWwgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgdGhpcy5zaG93Q3VzdG9tUmFuZ2VMYWJlbCA9IG9wdGlvbnMuc2hvd0N1c3RvbVJhbmdlTGFiZWw7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGVEYXRlUGlja2VyID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVEYXRlUGlja2VyID0gb3B0aW9ucy5zaW5nbGVEYXRlUGlja2VyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaW5nbGVEYXRlUGlja2VyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50aW1lUGlja2VyID09PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgIHRoaXMudGltZVBpY2tlciA9IG9wdGlvbnMudGltZVBpY2tlcjtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRpbWVQaWNrZXJTZWNvbmRzID09PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgIHRoaXMudGltZVBpY2tlclNlY29uZHMgPSBvcHRpb25zLnRpbWVQaWNrZXJTZWNvbmRzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGltZVBpY2tlckluY3JlbWVudCA9PT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRoaXMudGltZVBpY2tlckluY3JlbWVudCA9IG9wdGlvbnMudGltZVBpY2tlckluY3JlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRpbWVQaWNrZXIyNEhvdXIgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyMjRIb3VyID0gb3B0aW9ucy50aW1lUGlja2VyMjRIb3VyO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYXV0b0FwcGx5ID09PSAnYm9vbGVhbicpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0FwcGx5ID0gb3B0aW9ucy5hdXRvQXBwbHk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hdXRvVXBkYXRlSW5wdXQgPT09ICdib29sZWFuJylcclxuICAgICAgICAgICAgdGhpcy5hdXRvVXBkYXRlSW5wdXQgPSBvcHRpb25zLmF1dG9VcGRhdGVJbnB1dDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxpbmtlZENhbGVuZGFycyA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICB0aGlzLmxpbmtlZENhbGVuZGFycyA9IG9wdGlvbnMubGlua2VkQ2FsZW5kYXJzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuaXNJbnZhbGlkRGF0ZSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgdGhpcy5pc0ludmFsaWREYXRlID0gb3B0aW9ucy5pc0ludmFsaWREYXRlO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuaXNDdXN0b21EYXRlID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLmlzQ3VzdG9tRGF0ZSA9IG9wdGlvbnMuaXNDdXN0b21EYXRlO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYWx3YXlzU2hvd0NhbGVuZGFycyA9PT0gJ2Jvb2xlYW4nKVxyXG4gICAgICAgICAgICB0aGlzLmFsd2F5c1Nob3dDYWxlbmRhcnMgPSBvcHRpb25zLmFsd2F5c1Nob3dDYWxlbmRhcnM7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBkYXkgbmFtZXMgb3JkZXIgdG8gZmlyc3REYXlcclxuICAgICAgICBpZiAodGhpcy5sb2NhbGUuZmlyc3REYXkgIT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLmxvY2FsZS5maXJzdERheTtcclxuICAgICAgICAgICAgd2hpbGUgKGl0ZXJhdG9yID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUuZGF5c09mV2Vlay5wdXNoKHRoaXMubG9jYWxlLmRheXNPZldlZWsuc2hpZnQoKSk7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvci0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3RhcnQsIGVuZCwgcmFuZ2U7XHJcblxyXG4gICAgICAgIC8vaWYgbm8gc3RhcnQvZW5kIGRhdGVzIHNldCwgY2hlY2sgaWYgYW4gaW5wdXQgZWxlbWVudCBjb250YWlucyBpbml0aWFsIHZhbHVlc1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zdGFydERhdGUgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvcHRpb25zLmVuZERhdGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMuZWxlbWVudCkuaXMoJzp0ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWwgPSAkKHRoaXMuZWxlbWVudCkudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3BsaXQgPSB2YWwuc3BsaXQodGhpcy5sb2NhbGUuc2VwYXJhdG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IGVuZCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBtb21lbnQoc3BsaXRbMF0sIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbW9tZW50KHNwbGl0WzFdLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNpbmdsZURhdGVQaWNrZXIgJiYgdmFsICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBtb21lbnQodmFsLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IG1vbWVudCh2YWwsIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgIT09IG51bGwgJiYgZW5kICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShlbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMucmFuZ2VzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBmb3IgKHJhbmdlIGluIG9wdGlvbnMucmFuZ2VzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnJhbmdlc1tyYW5nZV1bMF0gPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gbW9tZW50KG9wdGlvbnMucmFuZ2VzW3JhbmdlXVswXSwgdGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG1vbWVudChvcHRpb25zLnJhbmdlc1tyYW5nZV1bMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5yYW5nZXNbcmFuZ2VdWzFdID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICAgICAgICBlbmQgPSBtb21lbnQob3B0aW9ucy5yYW5nZXNbcmFuZ2VdWzFdLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IG1vbWVudChvcHRpb25zLnJhbmdlc1tyYW5nZV1bMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzdGFydCBvciBlbmQgZGF0ZSBleGNlZWQgdGhvc2UgYWxsb3dlZCBieSB0aGUgbWluRGF0ZSBvciBtYXhTcGFuXHJcbiAgICAgICAgICAgICAgICAvLyBvcHRpb25zLCBzaG9ydGVuIHRoZSByYW5nZSB0byB0aGUgYWxsb3dhYmxlIHBlcmlvZC5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pbkRhdGUgJiYgc3RhcnQuaXNCZWZvcmUodGhpcy5taW5EYXRlKSlcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMubWluRGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4U3BhbiAmJiBtYXhEYXRlICYmIHN0YXJ0LmNsb25lKCkuYWRkKHRoaXMubWF4U3BhbikuaXNBZnRlcihtYXhEYXRlKSlcclxuICAgICAgICAgICAgICAgICAgICBtYXhEYXRlID0gc3RhcnQuY2xvbmUoKS5hZGQodGhpcy5tYXhTcGFuKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXhEYXRlICYmIGVuZC5pc0FmdGVyKG1heERhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IG1heERhdGUuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZW5kIG9mIHRoZSByYW5nZSBpcyBiZWZvcmUgdGhlIG1pbmltdW0gb3IgdGhlIHN0YXJ0IG9mIHRoZSByYW5nZSBpc1xyXG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIG1heGltdW0sIGRvbid0IGRpc3BsYXkgdGhpcyByYW5nZSBvcHRpb24gYXQgYWxsLlxyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLm1pbkRhdGUgJiYgZW5kLmlzQmVmb3JlKHRoaXMubWluRGF0ZSwgdGhpcy50aW1lcGlja2VyID8gJ21pbnV0ZScgOiAnZGF5JykpXHJcbiAgICAgICAgICAgICAgICAgIHx8IChtYXhEYXRlICYmIHN0YXJ0LmlzQWZ0ZXIobWF4RGF0ZSwgdGhpcy50aW1lcGlja2VyID8gJ21pbnV0ZScgOiAnZGF5JykpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vU3VwcG9ydCB1bmljb2RlIGNoYXJzIGluIHRoZSByYW5nZSBuYW1lcy5cclxuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2VIdG1sID0gZWxlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlc1tyYW5nZUh0bWxdID0gW3N0YXJ0LCBlbmRdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbGlzdCA9ICc8dWw+JztcclxuICAgICAgICAgICAgZm9yIChyYW5nZSBpbiB0aGlzLnJhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgbGlzdCArPSAnPGxpIGRhdGEtcmFuZ2Uta2V5PVwiJyArIHJhbmdlICsgJ1wiPicgKyByYW5nZSArICc8L2xpPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0N1c3RvbVJhbmdlTGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgKz0gJzxsaSBkYXRhLXJhbmdlLWtleT1cIicgKyB0aGlzLmxvY2FsZS5jdXN0b21SYW5nZUxhYmVsICsgJ1wiPicgKyB0aGlzLmxvY2FsZS5jdXN0b21SYW5nZUxhYmVsICsgJzwvbGk+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaXN0ICs9ICc8L3VsPic7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5yYW5nZXMnKS5wcmVwZW5kKGxpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHRoaXMuc3RhcnREYXRlLnN0YXJ0T2YoJ2RheScpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZERhdGUgPSB0aGlzLmVuZERhdGUuZW5kT2YoJ2RheScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuY2FsZW5kYXItdGltZScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY2FuJ3QgYmUgdXNlZCB0b2dldGhlciBmb3Igbm93XHJcbiAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlciAmJiB0aGlzLmF1dG9BcHBseSlcclxuICAgICAgICAgICAgdGhpcy5hdXRvQXBwbHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0FwcGx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKCdhdXRvLWFwcGx5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMucmFuZ2VzID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ3Nob3ctcmFuZ2VzJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ3NpbmdsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuZHJwLWNhbGVuZGFyLmxlZnQnKS5hZGRDbGFzcygnc2luZ2xlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5kcnAtY2FsZW5kYXIubGVmdCcpLnNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLmRycC1jYWxlbmRhci5yaWdodCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKCdhdXRvLWFwcGx5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIG9wdGlvbnMucmFuZ2VzID09PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5zaW5nbGVEYXRlUGlja2VyKSB8fCB0aGlzLmFsd2F5c1Nob3dDYWxlbmRhcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoJ3Nob3ctY2FsZW5kYXInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENsYXNzKCdvcGVucycgKyB0aGlzLm9wZW5zKTtcclxuXHJcbiAgICAgICAgLy9hcHBseSBDU1MgY2xhc3NlcyBhbmQgbGFiZWxzIHRvIGJ1dHRvbnNcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuYXBwbHlCdG4sIC5jYW5jZWxCdG4nKS5hZGRDbGFzcyh0aGlzLmJ1dHRvbkNsYXNzZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmFwcGx5QnV0dG9uQ2xhc3Nlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5hcHBseUJ0bicpLmFkZENsYXNzKHRoaXMuYXBwbHlCdXR0b25DbGFzc2VzKTtcclxuICAgICAgICBpZiAodGhpcy5jYW5jZWxCdXR0b25DbGFzc2VzLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLmNhbmNlbEJ0bicpLmFkZENsYXNzKHRoaXMuY2FuY2VsQnV0dG9uQ2xhc3Nlcyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLmFwcGx5QnRuJykuaHRtbCh0aGlzLmxvY2FsZS5hcHBseUxhYmVsKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuY2FuY2VsQnRuJykuaHRtbCh0aGlzLmxvY2FsZS5jYW5jZWxMYWJlbCk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gZXZlbnQgbGlzdGVuZXJzXHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLmRycC1jYWxlbmRhcicpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2suZGF0ZXJhbmdlcGlja2VyJywgJy5wcmV2JywgJC5wcm94eSh0aGlzLmNsaWNrUHJldiwgdGhpcykpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2suZGF0ZXJhbmdlcGlja2VyJywgJy5uZXh0JywgJC5wcm94eSh0aGlzLmNsaWNrTmV4dCwgdGhpcykpXHJcbiAgICAgICAgICAgIC5vbignbW91c2Vkb3duLmRhdGVyYW5nZXBpY2tlcicsICd0ZC5hdmFpbGFibGUnLCAkLnByb3h5KHRoaXMuY2xpY2tEYXRlLCB0aGlzKSlcclxuICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLmRhdGVyYW5nZXBpY2tlcicsICd0ZC5hdmFpbGFibGUnLCAkLnByb3h5KHRoaXMuaG92ZXJEYXRlLCB0aGlzKSlcclxuICAgICAgICAgICAgLm9uKCdjaGFuZ2UuZGF0ZXJhbmdlcGlja2VyJywgJ3NlbGVjdC55ZWFyc2VsZWN0JywgJC5wcm94eSh0aGlzLm1vbnRoT3JZZWFyQ2hhbmdlZCwgdGhpcykpXHJcbiAgICAgICAgICAgIC5vbignY2hhbmdlLmRhdGVyYW5nZXBpY2tlcicsICdzZWxlY3QubW9udGhzZWxlY3QnLCAkLnByb3h5KHRoaXMubW9udGhPclllYXJDaGFuZ2VkLCB0aGlzKSlcclxuICAgICAgICAgICAgLm9uKCdjaGFuZ2UuZGF0ZXJhbmdlcGlja2VyJywgJ3NlbGVjdC5ob3Vyc2VsZWN0LHNlbGVjdC5taW51dGVzZWxlY3Qsc2VsZWN0LnNlY29uZHNlbGVjdCxzZWxlY3QuYW1wbXNlbGVjdCcsICQucHJveHkodGhpcy50aW1lQ2hhbmdlZCwgdGhpcykpXHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5yYW5nZXMnKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrLmRhdGVyYW5nZXBpY2tlcicsICdsaScsICQucHJveHkodGhpcy5jbGlja1JhbmdlLCB0aGlzKSlcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLmRycC1idXR0b25zJylcclxuICAgICAgICAgICAgLm9uKCdjbGljay5kYXRlcmFuZ2VwaWNrZXInLCAnYnV0dG9uLmFwcGx5QnRuJywgJC5wcm94eSh0aGlzLmNsaWNrQXBwbHksIHRoaXMpKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrLmRhdGVyYW5nZXBpY2tlcicsICdidXR0b24uY2FuY2VsQnRuJywgJC5wcm94eSh0aGlzLmNsaWNrQ2FuY2VsLCB0aGlzKSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5pcygnaW5wdXQnKSB8fCB0aGlzLmVsZW1lbnQuaXMoJ2J1dHRvbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5vbih7XHJcbiAgICAgICAgICAgICAgICAnY2xpY2suZGF0ZXJhbmdlcGlja2VyJzogJC5wcm94eSh0aGlzLnNob3csIHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgJ2ZvY3VzLmRhdGVyYW5nZXBpY2tlcic6ICQucHJveHkodGhpcy5zaG93LCB0aGlzKSxcclxuICAgICAgICAgICAgICAgICdrZXl1cC5kYXRlcmFuZ2VwaWNrZXInOiAkLnByb3h5KHRoaXMuZWxlbWVudENoYW5nZWQsIHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgJ2tleWRvd24uZGF0ZXJhbmdlcGlja2VyJzogJC5wcm94eSh0aGlzLmtleWRvd24sIHRoaXMpIC8vSUUgMTEgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2NsaWNrLmRhdGVyYW5nZXBpY2tlcicsICQucHJveHkodGhpcy50b2dnbGUsIHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm9uKCdrZXlkb3duLmRhdGVyYW5nZXBpY2tlcicsICQucHJveHkodGhpcy50b2dnbGUsIHRoaXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gaWYgYXR0YWNoZWQgdG8gYSB0ZXh0IGlucHV0LCBzZXQgdGhlIGluaXRpYWwgdmFsdWVcclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIERhdGVSYW5nZVBpY2tlci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yOiBEYXRlUmFuZ2VQaWNrZXIsXHJcblxyXG4gICAgICAgIHNldFN0YXJ0RGF0ZTogZnVuY3Rpb24oc3RhcnREYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhcnREYXRlID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSwgdGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhcnREYXRlID09PSAnb2JqZWN0JylcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5zdGFydERhdGUuc3RhcnRPZignZGF5Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyICYmIHRoaXMudGltZVBpY2tlckluY3JlbWVudClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlLm1pbnV0ZShNYXRoLnJvdW5kKHRoaXMuc3RhcnREYXRlLm1pbnV0ZSgpIC8gdGhpcy50aW1lUGlja2VySW5jcmVtZW50KSAqIHRoaXMudGltZVBpY2tlckluY3JlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIHRoaXMuc3RhcnREYXRlLmlzQmVmb3JlKHRoaXMubWluRGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5taW5EYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyICYmIHRoaXMudGltZVBpY2tlckluY3JlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZS5taW51dGUoTWF0aC5yb3VuZCh0aGlzLnN0YXJ0RGF0ZS5taW51dGUoKSAvIHRoaXMudGltZVBpY2tlckluY3JlbWVudCkgKiB0aGlzLnRpbWVQaWNrZXJJbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIHRoaXMuc3RhcnREYXRlLmlzQWZ0ZXIodGhpcy5tYXhEYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLm1heERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIgJiYgdGhpcy50aW1lUGlja2VySW5jcmVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlLm1pbnV0ZShNYXRoLmZsb29yKHRoaXMuc3RhcnREYXRlLm1pbnV0ZSgpIC8gdGhpcy50aW1lUGlja2VySW5jcmVtZW50KSAqIHRoaXMudGltZVBpY2tlckluY3JlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Nob3dpbmcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9udGhzSW5WaWV3KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0RW5kRGF0ZTogZnVuY3Rpb24oZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVuZERhdGUgPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gbW9tZW50KGVuZERhdGUsIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVuZERhdGUgPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gbW9tZW50KGVuZERhdGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUgPSB0aGlzLmVuZERhdGUuZW5kT2YoJ2RheScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlciAmJiB0aGlzLnRpbWVQaWNrZXJJbmNyZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUubWludXRlKE1hdGgucm91bmQodGhpcy5lbmREYXRlLm1pbnV0ZSgpIC8gdGhpcy50aW1lUGlja2VySW5jcmVtZW50KSAqIHRoaXMudGltZVBpY2tlckluY3JlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbmREYXRlLmlzQmVmb3JlKHRoaXMuc3RhcnREYXRlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMuc3RhcnREYXRlLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIHRoaXMuZW5kRGF0ZS5pc0FmdGVyKHRoaXMubWF4RGF0ZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUgPSB0aGlzLm1heERhdGUuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1heFNwYW4gJiYgdGhpcy5zdGFydERhdGUuY2xvbmUoKS5hZGQodGhpcy5tYXhTcGFuKS5pc0JlZm9yZSh0aGlzLmVuZERhdGUpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5hZGQodGhpcy5tYXhTcGFuKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNSaWdodFRpbWUgPSB0aGlzLmVuZERhdGUuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5kcnAtc2VsZWN0ZWQnKS5odG1sKHRoaXMuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmxvY2FsZS5mb3JtYXQpICsgdGhpcy5sb2NhbGUuc2VwYXJhdG9yICsgdGhpcy5lbmREYXRlLmZvcm1hdCh0aGlzLmxvY2FsZS5mb3JtYXQpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1Nob3dpbmcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9udGhzSW5WaWV3KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaXNJbnZhbGlkRGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpc0N1c3RvbURhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdXBkYXRlVmlldzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGltZVBpY2tlcignbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUaW1lUGlja2VyKCdyaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcucmlnaHQgLmNhbGVuZGFyLXRpbWUgc2VsZWN0JykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLnJpZ2h0IC5jYWxlbmRhci10aW1lIHNlbGVjdCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5kcnAtc2VsZWN0ZWQnKS5odG1sKHRoaXMuc3RhcnREYXRlLmZvcm1hdCh0aGlzLmxvY2FsZS5mb3JtYXQpICsgdGhpcy5sb2NhbGUuc2VwYXJhdG9yICsgdGhpcy5lbmREYXRlLmZvcm1hdCh0aGlzLmxvY2FsZS5mb3JtYXQpKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNb250aHNJblZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxlbmRhcnMoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JtSW5wdXRzKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdXBkYXRlTW9udGhzSW5WaWV3OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaWYgYm90aCBkYXRlcyBhcmUgdmlzaWJsZSBhbHJlYWR5LCBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2luZ2xlRGF0ZVBpY2tlciAmJiB0aGlzLmxlZnRDYWxlbmRhci5tb250aCAmJiB0aGlzLnJpZ2h0Q2FsZW5kYXIubW9udGggJiZcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGFydERhdGUuZm9ybWF0KCdZWVlZLU1NJykgPT0gdGhpcy5sZWZ0Q2FsZW5kYXIubW9udGguZm9ybWF0KCdZWVlZLU1NJykgfHwgdGhpcy5zdGFydERhdGUuZm9ybWF0KCdZWVlZLU1NJykgPT0gdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmZvcm1hdCgnWVlZWS1NTScpKVxyXG4gICAgICAgICAgICAgICAgICAgICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZW5kRGF0ZS5mb3JtYXQoJ1lZWVktTU0nKSA9PSB0aGlzLmxlZnRDYWxlbmRhci5tb250aC5mb3JtYXQoJ1lZWVktTU0nKSB8fCB0aGlzLmVuZERhdGUuZm9ybWF0KCdZWVlZLU1NJykgPT0gdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmZvcm1hdCgnWVlZWS1NTScpKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYWxlbmRhci5tb250aCA9IHRoaXMuc3RhcnREYXRlLmNsb25lKCkuZGF0ZSgyKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5saW5rZWRDYWxlbmRhcnMgJiYgKHRoaXMuZW5kRGF0ZS5tb250aCgpICE9IHRoaXMuc3RhcnREYXRlLm1vbnRoKCkgfHwgdGhpcy5lbmREYXRlLnllYXIoKSAhPSB0aGlzLnN0YXJ0RGF0ZS55ZWFyKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID0gdGhpcy5lbmREYXRlLmNsb25lKCkuZGF0ZSgyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5kYXRlKDIpLmFkZCgxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0Q2FsZW5kYXIubW9udGguZm9ybWF0KCdZWVlZLU1NJykgIT0gdGhpcy5zdGFydERhdGUuZm9ybWF0KCdZWVlZLU1NJykgJiYgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmZvcm1hdCgnWVlZWS1NTScpICE9IHRoaXMuc3RhcnREYXRlLmZvcm1hdCgnWVlZWS1NTScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FsZW5kYXIubW9udGggPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpLmRhdGUoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5kYXRlKDIpLmFkZCgxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIHRoaXMubGlua2VkQ2FsZW5kYXJzICYmICF0aGlzLnNpbmdsZURhdGVQaWNrZXIgJiYgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID4gdGhpcy5tYXhEYXRlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID0gdGhpcy5tYXhEYXRlLmNsb25lKCkuZGF0ZSgyKTtcclxuICAgICAgICAgICAgICB0aGlzLmxlZnRDYWxlbmRhci5tb250aCA9IHRoaXMubWF4RGF0ZS5jbG9uZSgpLmRhdGUoMikuc3VidHJhY3QoMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVDYWxlbmRhcnM6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhvdXIsIG1pbnV0ZSwgc2Vjb25kO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5maW5kKCcubGVmdCAuaG91cnNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLmxlZnQgLm1pbnV0ZXNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKG1pbnV0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLmxlZnQgLm1pbnV0ZXNlbGVjdCBvcHRpb246bGFzdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IHRoaXMudGltZVBpY2tlclNlY29uZHMgPyBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5maW5kKCcubGVmdCAuc2Vjb25kc2VsZWN0JykudmFsKCksIDEwKSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFtcG0gPSB0aGlzLmNvbnRhaW5lci5maW5kKCcubGVmdCAuYW1wbXNlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW1wbSA9PT0gJ1BNJyAmJiBob3VyIDwgMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW1wbSA9PT0gJ0FNJyAmJiBob3VyID09PSAxMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAuaG91cnNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLnJpZ2h0IC5taW51dGVzZWxlY3QnKS52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihtaW51dGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAubWludXRlc2VsZWN0IG9wdGlvbjpsYXN0JykudmFsKCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kID0gdGhpcy50aW1lUGlja2VyU2Vjb25kcyA/IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAuc2Vjb25kc2VsZWN0JykudmFsKCksIDEwKSA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFtcG0gPSB0aGlzLmNvbnRhaW5lci5maW5kKCcucmlnaHQgLmFtcG1zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdQTScgJiYgaG91ciA8IDEyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdBTScgJiYgaG91ciA9PT0gMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYWxlbmRhci5tb250aC5ob3VyKGhvdXIpLm1pbnV0ZShtaW51dGUpLnNlY29uZChzZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoLmhvdXIoaG91cikubWludXRlKG1pbnV0ZSkuc2Vjb25kKHNlY29uZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FsZW5kYXIoJ2xlZnQnKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDYWxlbmRhcigncmlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vaGlnaGxpZ2h0IGFueSBwcmVkZWZpbmVkIHJhbmdlIG1hdGNoaW5nIHRoZSBjdXJyZW50IHN0YXJ0IGFuZCBlbmQgZGF0ZXNcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuZmluZCgnLnJhbmdlcyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZUNob3NlbkxhYmVsKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVuZGVyQ2FsZW5kYXI6IGZ1bmN0aW9uKHNpZGUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBtYXRyaXggb2YgZGF0ZXMgdGhhdCB3aWxsIHBvcHVsYXRlIHRoZSBjYWxlbmRhclxyXG4gICAgICAgICAgICAvL1xyXG5cclxuICAgICAgICAgICAgdmFyIGNhbGVuZGFyID0gc2lkZSA9PSAnbGVmdCcgPyB0aGlzLmxlZnRDYWxlbmRhciA6IHRoaXMucmlnaHRDYWxlbmRhcjtcclxuICAgICAgICAgICAgdmFyIG1vbnRoID0gY2FsZW5kYXIubW9udGgubW9udGgoKTtcclxuICAgICAgICAgICAgdmFyIHllYXIgPSBjYWxlbmRhci5tb250aC55ZWFyKCk7XHJcbiAgICAgICAgICAgIHZhciBob3VyID0gY2FsZW5kYXIubW9udGguaG91cigpO1xyXG4gICAgICAgICAgICB2YXIgbWludXRlID0gY2FsZW5kYXIubW9udGgubWludXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmQgPSBjYWxlbmRhci5tb250aC5zZWNvbmQoKTtcclxuICAgICAgICAgICAgdmFyIGRheXNJbk1vbnRoID0gbW9tZW50KFt5ZWFyLCBtb250aF0pLmRheXNJbk1vbnRoKCk7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdERheSA9IG1vbWVudChbeWVhciwgbW9udGgsIDFdKTtcclxuICAgICAgICAgICAgdmFyIGxhc3REYXkgPSBtb21lbnQoW3llYXIsIG1vbnRoLCBkYXlzSW5Nb250aF0pO1xyXG4gICAgICAgICAgICB2YXIgbGFzdE1vbnRoID0gbW9tZW50KGZpcnN0RGF5KS5zdWJ0cmFjdCgxLCAnbW9udGgnKS5tb250aCgpO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFllYXIgPSBtb21lbnQoZmlyc3REYXkpLnN1YnRyYWN0KDEsICdtb250aCcpLnllYXIoKTtcclxuICAgICAgICAgICAgdmFyIGRheXNJbkxhc3RNb250aCA9IG1vbWVudChbbGFzdFllYXIsIGxhc3RNb250aF0pLmRheXNJbk1vbnRoKCk7XHJcbiAgICAgICAgICAgIHZhciBkYXlPZldlZWsgPSBmaXJzdERheS5kYXkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vaW5pdGlhbGl6ZSBhIDYgcm93cyB4IDcgY29sdW1ucyBhcnJheSBmb3IgdGhlIGNhbGVuZGFyXHJcbiAgICAgICAgICAgIHZhciBjYWxlbmRhciA9IFtdO1xyXG4gICAgICAgICAgICBjYWxlbmRhci5maXJzdERheSA9IGZpcnN0RGF5O1xyXG4gICAgICAgICAgICBjYWxlbmRhci5sYXN0RGF5ID0gbGFzdERheTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxlbmRhcltpXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3BvcHVsYXRlIHRoZSBjYWxlbmRhciB3aXRoIGRhdGUgb2JqZWN0c1xyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXkgPSBkYXlzSW5MYXN0TW9udGggLSBkYXlPZldlZWsgKyB0aGlzLmxvY2FsZS5maXJzdERheSArIDE7XHJcbiAgICAgICAgICAgIGlmIChzdGFydERheSA+IGRheXNJbkxhc3RNb250aClcclxuICAgICAgICAgICAgICAgIHN0YXJ0RGF5IC09IDc7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF5T2ZXZWVrID09IHRoaXMubG9jYWxlLmZpcnN0RGF5KVxyXG4gICAgICAgICAgICAgICAgc3RhcnREYXkgPSBkYXlzSW5MYXN0TW9udGggLSA2O1xyXG5cclxuICAgICAgICAgICAgdmFyIGN1ckRhdGUgPSBtb21lbnQoW2xhc3RZZWFyLCBsYXN0TW9udGgsIHN0YXJ0RGF5LCAxMiwgbWludXRlLCBzZWNvbmRdKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjb2wsIHJvdztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGNvbCA9IDAsIHJvdyA9IDA7IGkgPCA0MjsgaSsrLCBjb2wrKywgY3VyRGF0ZSA9IG1vbWVudChjdXJEYXRlKS5hZGQoMjQsICdob3VyJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID4gMCAmJiBjb2wgJSA3ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbGVuZGFyW3Jvd11bY29sXSA9IGN1ckRhdGUuY2xvbmUoKS5ob3VyKGhvdXIpLm1pbnV0ZShtaW51dGUpLnNlY29uZChzZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgY3VyRGF0ZS5ob3VyKDEyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLm1pbkRhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgJiYgY2FsZW5kYXJbcm93XVtjb2xdLmlzQmVmb3JlKHRoaXMubWluRGF0ZSkgJiYgc2lkZSA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhcltyb3ddW2NvbF0gPSB0aGlzLm1pbkRhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLm1heERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgJiYgY2FsZW5kYXJbcm93XVtjb2xdLmlzQWZ0ZXIodGhpcy5tYXhEYXRlKSAmJiBzaWRlID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhcltyb3ddW2NvbF0gPSB0aGlzLm1heERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbWFrZSB0aGUgY2FsZW5kYXIgb2JqZWN0IGF2YWlsYWJsZSB0byBob3ZlckRhdGUvY2xpY2tEYXRlXHJcbiAgICAgICAgICAgIGlmIChzaWRlID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FsZW5kYXIuY2FsZW5kYXIgPSBjYWxlbmRhcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDYWxlbmRhci5jYWxlbmRhciA9IGNhbGVuZGFyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBEaXNwbGF5IHRoZSBjYWxlbmRhclxyXG4gICAgICAgICAgICAvL1xyXG5cclxuICAgICAgICAgICAgdmFyIG1pbkRhdGUgPSBzaWRlID09ICdsZWZ0JyA/IHRoaXMubWluRGF0ZSA6IHRoaXMuc3RhcnREYXRlO1xyXG4gICAgICAgICAgICB2YXIgbWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gc2lkZSA9PSAnbGVmdCcgPyB0aGlzLnN0YXJ0RGF0ZSA6IHRoaXMuZW5kRGF0ZTtcclxuICAgICAgICAgICAgdmFyIGFycm93ID0gdGhpcy5sb2NhbGUuZGlyZWN0aW9uID09ICdsdHInID8ge2xlZnQ6ICdjaGV2cm9uLWxlZnQnLCByaWdodDogJ2NoZXZyb24tcmlnaHQnfSA6IHtsZWZ0OiAnY2hldnJvbi1yaWdodCcsIHJpZ2h0OiAnY2hldnJvbi1sZWZ0J307XHJcblxyXG4gICAgICAgICAgICB2YXIgaHRtbCA9ICc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nO1xyXG4gICAgICAgICAgICBodG1sICs9ICc8dGhlYWQ+JztcclxuICAgICAgICAgICAgaHRtbCArPSAnPHRyPic7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgZW1wdHkgY2VsbCBmb3Igd2VlayBudW1iZXJcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWtOdW1iZXJzIHx8IHRoaXMuc2hvd0lTT1dlZWtOdW1iZXJzKVxyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHRoPjwvdGg+JztcclxuXHJcbiAgICAgICAgICAgIGlmICgoIW1pbkRhdGUgfHwgbWluRGF0ZS5pc0JlZm9yZShjYWxlbmRhci5maXJzdERheSkpICYmICghdGhpcy5saW5rZWRDYWxlbmRhcnMgfHwgc2lkZSA9PSAnbGVmdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8dGggY2xhc3M9XCJwcmV2IGF2YWlsYWJsZVwiPjxzcGFuPjwvc3Bhbj48L3RoPic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8dGg+PC90aD4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0ZUh0bWwgPSB0aGlzLmxvY2FsZS5tb250aE5hbWVzW2NhbGVuZGFyWzFdWzFdLm1vbnRoKCldICsgY2FsZW5kYXJbMV1bMV0uZm9ybWF0KFwiIFlZWVlcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93RHJvcGRvd25zKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudE1vbnRoID0gY2FsZW5kYXJbMV1bMV0ubW9udGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WWVhciA9IGNhbGVuZGFyWzFdWzFdLnllYXIoKTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXhZZWFyID0gKG1heERhdGUgJiYgbWF4RGF0ZS55ZWFyKCkpIHx8ICh0aGlzLm1heFllYXIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pblllYXIgPSAobWluRGF0ZSAmJiBtaW5EYXRlLnllYXIoKSkgfHwgKHRoaXMubWluWWVhcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5NaW5ZZWFyID0gY3VycmVudFllYXIgPT0gbWluWWVhcjtcclxuICAgICAgICAgICAgICAgIHZhciBpbk1heFllYXIgPSBjdXJyZW50WWVhciA9PSBtYXhZZWFyO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtb250aEh0bWwgPSAnPHNlbGVjdCBjbGFzcz1cIm1vbnRoc2VsZWN0XCI+JztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgMTI7IG0rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoIWluTWluWWVhciB8fCAobWluRGF0ZSAmJiBtID49IG1pbkRhdGUubW9udGgoKSkpICYmICghaW5NYXhZZWFyIHx8IChtYXhEYXRlICYmIG0gPD0gbWF4RGF0ZS5tb250aCgpKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBtICsgXCInXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0gPT09IGN1cnJlbnRNb250aCA/IFwiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPlwiICsgdGhpcy5sb2NhbGUubW9udGhOYW1lc1ttXSArIFwiPC9vcHRpb24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBtICsgXCInXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG0gPT09IGN1cnJlbnRNb250aCA/IFwiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGRpc2FibGVkPSdkaXNhYmxlZCc+XCIgKyB0aGlzLmxvY2FsZS5tb250aE5hbWVzW21dICsgXCI8L29wdGlvbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtb250aEh0bWwgKz0gXCI8L3NlbGVjdD5cIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgeWVhckh0bWwgPSAnPHNlbGVjdCBjbGFzcz1cInllYXJzZWxlY3RcIj4nO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IG1pblllYXI7IHkgPD0gbWF4WWVhcjsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhckh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgeSArICdcIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoeSA9PT0gY3VycmVudFllYXIgPyAnIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPicgKyB5ICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB5ZWFySHRtbCArPSAnPC9zZWxlY3Q+JztcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRlSHRtbCA9IG1vbnRoSHRtbCArIHllYXJIdG1sO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBodG1sICs9ICc8dGggY29sc3Bhbj1cIjVcIiBjbGFzcz1cIm1vbnRoXCI+JyArIGRhdGVIdG1sICsgJzwvdGg+JztcclxuICAgICAgICAgICAgaWYgKCghbWF4RGF0ZSB8fCBtYXhEYXRlLmlzQWZ0ZXIoY2FsZW5kYXIubGFzdERheSkpICYmICghdGhpcy5saW5rZWRDYWxlbmRhcnMgfHwgc2lkZSA9PSAncmlnaHQnIHx8IHRoaXMuc2luZ2xlRGF0ZVBpY2tlcikpIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0aCBjbGFzcz1cIm5leHQgYXZhaWxhYmxlXCI+PHNwYW4+PC9zcGFuPjwvdGg+JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0aD48L3RoPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvdHI+JztcclxuICAgICAgICAgICAgaHRtbCArPSAnPHRyPic7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgd2VlayBudW1iZXIgbGFiZWxcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWtOdW1iZXJzIHx8IHRoaXMuc2hvd0lTT1dlZWtOdW1iZXJzKVxyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHRoIGNsYXNzPVwid2Vla1wiPicgKyB0aGlzLmxvY2FsZS53ZWVrTGFiZWwgKyAnPC90aD4nO1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKHRoaXMubG9jYWxlLmRheXNPZldlZWssIGZ1bmN0aW9uKGluZGV4LCBkYXlPZldlZWspIHtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0aD4nICsgZGF5T2ZXZWVrICsgJzwvdGg+JztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBodG1sICs9ICc8L3RyPic7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvdGhlYWQ+JztcclxuICAgICAgICAgICAgaHRtbCArPSAnPHRib2R5Pic7XHJcblxyXG4gICAgICAgICAgICAvL2FkanVzdCBtYXhEYXRlIHRvIHJlZmxlY3QgdGhlIG1heFNwYW4gc2V0dGluZyBpbiBvcmRlciB0b1xyXG4gICAgICAgICAgICAvL2dyZXkgb3V0IGVuZCBkYXRlcyBiZXlvbmQgdGhlIG1heFNwYW5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSA9PSBudWxsICYmIHRoaXMubWF4U3Bhbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heExpbWl0ID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5hZGQodGhpcy5tYXhTcGFuKS5lbmRPZignZGF5Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1heERhdGUgfHwgbWF4TGltaXQuaXNCZWZvcmUobWF4RGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhEYXRlID0gbWF4TGltaXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IDY7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8dHI+JztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgd2VlayBudW1iZXJcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dXZWVrTnVtYmVycylcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8dGQgY2xhc3M9XCJ3ZWVrXCI+JyArIGNhbGVuZGFyW3Jvd11bMF0ud2VlaygpICsgJzwvdGQ+JztcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2hvd0lTT1dlZWtOdW1iZXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0ZCBjbGFzcz1cIndlZWtcIj4nICsgY2FsZW5kYXJbcm93XVswXS5pc29XZWVrKCkgKyAnPC90ZD4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IDc7IGNvbCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGFzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaGxpZ2h0IHRvZGF5J3MgZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxlbmRhcltyb3ddW2NvbF0uaXNTYW1lKG5ldyBEYXRlKCksIFwiZGF5XCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3RvZGF5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaGxpZ2h0IHdlZWtlbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGVuZGFyW3Jvd11bY29sXS5pc29XZWVrZGF5KCkgPiA1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3dlZWtlbmQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9ncmV5IG91dCB0aGUgZGF0ZXMgaW4gb3RoZXIgbW9udGhzIGRpc3BsYXllZCBhdCBiZWdpbm5pbmcgYW5kIGVuZCBvZiB0aGlzIGNhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGVuZGFyW3Jvd11bY29sXS5tb250aCgpICE9IGNhbGVuZGFyWzFdWzFdLm1vbnRoKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnb2ZmJywgJ2VuZHMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb24ndCBhbGxvdyBzZWxlY3Rpb24gb2YgZGF0ZXMgYmVmb3JlIHRoZSBtaW5pbXVtIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXS5pc0JlZm9yZSh0aGlzLm1pbkRhdGUsICdkYXknKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdvZmYnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb24ndCBhbGxvdyBzZWxlY3Rpb24gb2YgZGF0ZXMgYWZ0ZXIgdGhlIG1heGltdW0gZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhEYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXS5pc0FmdGVyKG1heERhdGUsICdkYXknKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdvZmYnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb24ndCBhbGxvdyBzZWxlY3Rpb24gb2YgZGF0ZSBpZiBhIGN1c3RvbSBmdW5jdGlvbiBkZWNpZGVzIGl0J3MgaW52YWxpZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZERhdGUoY2FsZW5kYXJbcm93XVtjb2xdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdvZmYnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9oaWdobGlnaHQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBzdGFydCBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGVuZGFyW3Jvd11bY29sXS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLnN0YXJ0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdhY3RpdmUnLCAnc3RhcnQtZGF0ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2hpZ2hsaWdodCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVuZCBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSAhPSBudWxsICYmIGNhbGVuZGFyW3Jvd11bY29sXS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLmVuZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnYWN0aXZlJywgJ2VuZC1kYXRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaGlnaGxpZ2h0IGRhdGVzIGluLWJldHdlZW4gdGhlIHNlbGVjdGVkIGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kRGF0ZSAhPSBudWxsICYmIGNhbGVuZGFyW3Jvd11bY29sXSA+IHRoaXMuc3RhcnREYXRlICYmIGNhbGVuZGFyW3Jvd11bY29sXSA8IHRoaXMuZW5kRGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdpbi1yYW5nZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2FwcGx5IGN1c3RvbSBjbGFzc2VzIGZvciB0aGlzIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNDdXN0b20gPSB0aGlzLmlzQ3VzdG9tRGF0ZShjYWxlbmRhcltyb3ddW2NvbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0N1c3RvbSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpc0N1c3RvbSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goaXNDdXN0b20pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjbGFzc2VzLCBpc0N1c3RvbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY25hbWUgPSAnJywgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY25hbWUgKz0gY2xhc3Nlc1tpXSArICcgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzZXNbaV0gPT0gJ2Rpc2FibGVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNhYmxlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY25hbWUgKz0gJ2F2YWlsYWJsZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjbmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykgKyAnXCIgZGF0YS10aXRsZT1cIicgKyAncicgKyByb3cgKyAnYycgKyBjb2wgKyAnXCI+JyArIGNhbGVuZGFyW3Jvd11bY29sXS5kYXRlKCkgKyAnPC90ZD4nO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gJzwvdHI+JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaHRtbCArPSAnPC90Ym9keT4nO1xyXG4gICAgICAgICAgICBodG1sICs9ICc8L3RhYmxlPic7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuZHJwLWNhbGVuZGFyLicgKyBzaWRlICsgJyAuY2FsZW5kYXItdGFibGUnKS5odG1sKGh0bWwpO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZW5kZXJUaW1lUGlja2VyOiBmdW5jdGlvbihzaWRlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBEb24ndCBib3RoZXIgdXBkYXRpbmcgdGhlIHRpbWUgcGlja2VyIGlmIGl0J3MgY3VycmVudGx5IGRpc2FibGVkXHJcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgYW4gZW5kIGRhdGUgaGFzbid0IGJlZW4gY2xpY2tlZCB5ZXRcclxuICAgICAgICAgICAgaWYgKHNpZGUgPT0gJ3JpZ2h0JyAmJiAhdGhpcy5lbmREYXRlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgaHRtbCwgc2VsZWN0ZWQsIG1pbkRhdGUsIG1heERhdGUgPSB0aGlzLm1heERhdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXhTcGFuICYmICghdGhpcy5tYXhEYXRlIHx8IHRoaXMuc3RhcnREYXRlLmNsb25lKCkuYWRkKHRoaXMubWF4U3BhbikuaXNCZWZvcmUodGhpcy5tYXhEYXRlKSkpXHJcbiAgICAgICAgICAgICAgICBtYXhEYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5hZGQodGhpcy5tYXhTcGFuKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaWRlID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgbWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaWRlID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdGhpcy5lbmREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBtaW5EYXRlID0gdGhpcy5zdGFydERhdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9QcmVzZXJ2ZSB0aGUgdGltZSBhbHJlYWR5IHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZVNlbGVjdG9yID0gdGhpcy5jb250YWluZXIuZmluZCgnLmRycC1jYWxlbmRhci5yaWdodCAuY2FsZW5kYXItdGltZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVTZWxlY3Rvci5odG1sKCkgIT0gJycpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuaG91cighaXNOYU4oc2VsZWN0ZWQuaG91cigpKSA/IHNlbGVjdGVkLmhvdXIoKSA6IHRpbWVTZWxlY3Rvci5maW5kKCcuaG91cnNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQubWludXRlKCFpc05hTihzZWxlY3RlZC5taW51dGUoKSkgPyBzZWxlY3RlZC5taW51dGUoKSA6IHRpbWVTZWxlY3Rvci5maW5kKCcubWludXRlc2VsZWN0IG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5zZWNvbmQoIWlzTmFOKHNlbGVjdGVkLnNlY29uZCgpKSA/IHNlbGVjdGVkLnNlY29uZCgpIDogdGltZVNlbGVjdG9yLmZpbmQoJy5zZWNvbmRzZWxlY3Qgb3B0aW9uOnNlbGVjdGVkJykudmFsKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcjI0SG91cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1wbSA9IHRpbWVTZWxlY3Rvci5maW5kKCcuYW1wbXNlbGVjdCBvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdQTScgJiYgc2VsZWN0ZWQuaG91cigpIDwgMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5ob3VyKHNlbGVjdGVkLmhvdXIoKSArIDEyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdBTScgJiYgc2VsZWN0ZWQuaG91cigpID09PSAxMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLmhvdXIoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQuaXNCZWZvcmUodGhpcy5zdGFydERhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF4RGF0ZSAmJiBzZWxlY3RlZC5pc0FmdGVyKG1heERhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gbWF4RGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gaG91cnNcclxuICAgICAgICAgICAgLy9cclxuXHJcbiAgICAgICAgICAgIGh0bWwgPSAnPHNlbGVjdCBjbGFzcz1cImhvdXJzZWxlY3RcIj4nO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy50aW1lUGlja2VyMjRIb3VyID8gMCA6IDE7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSB0aGlzLnRpbWVQaWNrZXIyNEhvdXIgPyAyMyA6IDEyO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaV9pbl8yNCA9IGk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcjI0SG91cilcclxuICAgICAgICAgICAgICAgICAgICBpX2luXzI0ID0gc2VsZWN0ZWQuaG91cigpID49IDEyID8gKGkgPT0gMTIgPyAxMiA6IGkgKyAxMikgOiAoaSA9PSAxMiA/IDAgOiBpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9IHNlbGVjdGVkLmNsb25lKCkuaG91cihpX2luXzI0KTtcclxuICAgICAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pbkRhdGUgJiYgdGltZS5taW51dGUoNTkpLmlzQmVmb3JlKG1pbkRhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXhEYXRlICYmIHRpbWUubWludXRlKDApLmlzQWZ0ZXIobWF4RGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpX2luXzI0ID09IHNlbGVjdGVkLmhvdXIoKSAmJiAhZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGkgKyAnXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPicgKyBpICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiIGRpc2FibGVkPVwiZGlzYWJsZWRcIiBjbGFzcz1cImRpc2FibGVkXCI+JyArIGkgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBpICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGh0bWwgKz0gJzwvc2VsZWN0PiAnO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gbWludXRlc1xyXG4gICAgICAgICAgICAvL1xyXG5cclxuICAgICAgICAgICAgaHRtbCArPSAnOiA8c2VsZWN0IGNsYXNzPVwibWludXRlc2VsZWN0XCI+JztcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjA7IGkgKz0gdGhpcy50aW1lUGlja2VySW5jcmVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFkZGVkID0gaSA8IDEwID8gJzAnICsgaSA6IGk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9IHNlbGVjdGVkLmNsb25lKCkubWludXRlKGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pbkRhdGUgJiYgdGltZS5zZWNvbmQoNTkpLmlzQmVmb3JlKG1pbkRhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXhEYXRlICYmIHRpbWUuc2Vjb25kKDApLmlzQWZ0ZXIobWF4RGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5taW51dGUoKSA9PSBpICYmICFkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+JyArIHBhZGRlZCArICc8L29wdGlvbj4nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIiBkaXNhYmxlZD1cImRpc2FibGVkXCIgY2xhc3M9XCJkaXNhYmxlZFwiPicgKyBwYWRkZWQgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBwYWRkZWQgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaHRtbCArPSAnPC9zZWxlY3Q+ICc7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBzZWNvbmRzXHJcbiAgICAgICAgICAgIC8vXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lUGlja2VyU2Vjb25kcykge1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnOiA8c2VsZWN0IGNsYXNzPVwic2Vjb25kc2VsZWN0XCI+JztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDYwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFkZGVkID0gaSA8IDEwID8gJzAnICsgaSA6IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWUgPSBzZWxlY3RlZC5jbG9uZSgpLnNlY29uZChpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbkRhdGUgJiYgdGltZS5pc0JlZm9yZShtaW5EYXRlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhEYXRlICYmIHRpbWUuaXNBZnRlcihtYXhEYXRlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQuc2Vjb25kKCkgPT0gaSAmJiAhZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj4nICsgcGFkZGVkICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGkgKyAnXCIgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIGNsYXNzPVwiZGlzYWJsZWRcIj4nICsgcGFkZGVkICsgJzwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBwYWRkZWQgKyAnPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPC9zZWxlY3Q+ICc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIEFNL1BNXHJcbiAgICAgICAgICAgIC8vXHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcjI0SG91cikge1xyXG4gICAgICAgICAgICAgICAgaHRtbCArPSAnPHNlbGVjdCBjbGFzcz1cImFtcG1zZWxlY3RcIj4nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhbV9odG1sID0gJyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG1faHRtbCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtaW5EYXRlICYmIHNlbGVjdGVkLmNsb25lKCkuaG91cigxMikubWludXRlKDApLnNlY29uZCgwKS5pc0JlZm9yZShtaW5EYXRlKSlcclxuICAgICAgICAgICAgICAgICAgICBhbV9odG1sID0gJyBkaXNhYmxlZD1cImRpc2FibGVkXCIgY2xhc3M9XCJkaXNhYmxlZFwiJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF4RGF0ZSAmJiBzZWxlY3RlZC5jbG9uZSgpLmhvdXIoMCkubWludXRlKDApLnNlY29uZCgwKS5pc0FmdGVyKG1heERhdGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHBtX2h0bWwgPSAnIGRpc2FibGVkPVwiZGlzYWJsZWRcIiBjbGFzcz1cImRpc2FibGVkXCInO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5ob3VyKCkgPj0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8b3B0aW9uIHZhbHVlPVwiQU1cIicgKyBhbV9odG1sICsgJz5BTTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJQTVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicgKyBwbV9odG1sICsgJz5QTTwvb3B0aW9uPic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxvcHRpb24gdmFsdWU9XCJBTVwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicgKyBhbV9odG1sICsgJz5BTTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJQTVwiJyArIHBtX2h0bWwgKyAnPlBNPC9vcHRpb24+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBodG1sICs9ICc8L3NlbGVjdD4nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCcuZHJwLWNhbGVuZGFyLicgKyBzaWRlICsgJyAuY2FsZW5kYXItdGltZScpLmh0bWwoaHRtbCk7XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZUZvcm1JbnB1dHM6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2luZ2xlRGF0ZVBpY2tlciB8fCAodGhpcy5lbmREYXRlICYmICh0aGlzLnN0YXJ0RGF0ZS5pc0JlZm9yZSh0aGlzLmVuZERhdGUpIHx8IHRoaXMuc3RhcnREYXRlLmlzU2FtZSh0aGlzLmVuZERhdGUpKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJ2J1dHRvbi5hcHBseUJ0bicpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5maW5kKCdidXR0b24uYXBwbHlCdG4nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50T2Zmc2V0ID0geyB0b3A6IDAsIGxlZnQ6IDAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclRvcDtcclxuICAgICAgICAgICAgdmFyIHBhcmVudFJpZ2h0RWRnZSA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyZW50RWwuaXMoJ2JvZHknKSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50T2Zmc2V0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGhpcy5wYXJlbnRFbC5vZmZzZXQoKS50b3AgLSB0aGlzLnBhcmVudEVsLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMucGFyZW50RWwub2Zmc2V0KCkubGVmdCAtIHRoaXMucGFyZW50RWwuc2Nyb2xsTGVmdCgpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcGFyZW50UmlnaHRFZGdlID0gdGhpcy5wYXJlbnRFbFswXS5jbGllbnRXaWR0aCArIHRoaXMucGFyZW50RWwub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZHJvcHMgPT0gJ3VwJylcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclRvcCA9IHRoaXMuZWxlbWVudC5vZmZzZXQoKS50b3AgLSB0aGlzLmNvbnRhaW5lci5vdXRlckhlaWdodCgpIC0gcGFyZW50T2Zmc2V0LnRvcDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyVG9wID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpLnRvcCArIHRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpIC0gcGFyZW50T2Zmc2V0LnRvcDtcclxuXHJcbiAgICAgICAgICAgIC8vIEZvcmNlIHRoZSBjb250YWluZXIgdG8gaXQncyBhY3R1YWwgd2lkdGhcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY3NzKHtcclxuICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lci5vdXRlcldpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lclt0aGlzLmRyb3BzID09ICd1cCcgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oJ2Ryb3AtdXAnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wZW5zID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lclJpZ2h0ID0gcGFyZW50UmlnaHRFZGdlIC0gdGhpcy5lbGVtZW50Lm9mZnNldCgpLmxlZnQgLSB0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcldpZHRoICsgY29udGFpbmVyUmlnaHQgPiAkKHdpbmRvdykud2lkdGgoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogY29udGFpbmVyUmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3BlbnMgPT0gJ2NlbnRlcicpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJMZWZ0ID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpLmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCArIHRoaXMuZWxlbWVudC5vdXRlcldpZHRoKCkgLyAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGNvbnRhaW5lcldpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lckxlZnQgKyBjb250YWluZXJXaWR0aCA+ICQod2luZG93KS53aWR0aCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjb250YWluZXJUb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjb250YWluZXJUb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNvbnRhaW5lckxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnYXV0bydcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJMZWZ0ID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpLmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdDtcclxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJMZWZ0ICsgY29udGFpbmVyV2lkdGggPiAkKHdpbmRvdykud2lkdGgoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY29udGFpbmVyVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjb250YWluZXJMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJ2F1dG8nXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzaG93OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2hvd2luZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY2xpY2sgcHJveHkgdGhhdCBpcyBwcml2YXRlIHRvIHRoaXMgaW5zdGFuY2Ugb2YgZGF0ZXBpY2tlciwgZm9yIHVuYmluZGluZ1xyXG4gICAgICAgICAgICB0aGlzLl9vdXRzaWRlQ2xpY2tQcm94eSA9ICQucHJveHkoZnVuY3Rpb24oZSkgeyB0aGlzLm91dHNpZGVDbGljayhlKTsgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyBCaW5kIGdsb2JhbCBkYXRlcGlja2VyIG1vdXNlZG93biBmb3IgaGlkaW5nIGFuZFxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KVxyXG4gICAgICAgICAgICAgIC5vbignbW91c2Vkb3duLmRhdGVyYW5nZXBpY2tlcicsIHRoaXMuX291dHNpZGVDbGlja1Byb3h5KVxyXG4gICAgICAgICAgICAgIC8vIGFsc28gc3VwcG9ydCBtb2JpbGUgZGV2aWNlc1xyXG4gICAgICAgICAgICAgIC5vbigndG91Y2hlbmQuZGF0ZXJhbmdlcGlja2VyJywgdGhpcy5fb3V0c2lkZUNsaWNrUHJveHkpXHJcbiAgICAgICAgICAgICAgLy8gYWxzbyBleHBsaWNpdGx5IHBsYXkgbmljZSB3aXRoIEJvb3RzdHJhcCBkcm9wZG93bnMsIHdoaWNoIHN0b3BQcm9wYWdhdGlvbiB3aGVuIGNsaWNraW5nIHRoZW1cclxuICAgICAgICAgICAgICAub24oJ2NsaWNrLmRhdGVyYW5nZXBpY2tlcicsICdbZGF0YS10b2dnbGU9ZHJvcGRvd25dJywgdGhpcy5fb3V0c2lkZUNsaWNrUHJveHkpXHJcbiAgICAgICAgICAgICAgLy8gYW5kIGFsc28gY2xvc2Ugd2hlbiBmb2N1cyBjaGFuZ2VzIHRvIG91dHNpZGUgdGhlIHBpY2tlciAoZWcuIHRhYmJpbmcgYmV0d2VlbiBjb250cm9scylcclxuICAgICAgICAgICAgICAub24oJ2ZvY3VzaW4uZGF0ZXJhbmdlcGlja2VyJywgdGhpcy5fb3V0c2lkZUNsaWNrUHJveHkpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVwb3NpdGlvbiB0aGUgcGlja2VyIGlmIHRoZSB3aW5kb3cgaXMgcmVzaXplZCB3aGlsZSBpdCdzIG9wZW5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuZGF0ZXJhbmdlcGlja2VyJywgJC5wcm94eShmdW5jdGlvbihlKSB7IHRoaXMubW92ZShlKTsgfSwgdGhpcykpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbGRTdGFydERhdGUgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9sZEVuZERhdGUgPSB0aGlzLmVuZERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1JpZ2h0VGltZSA9IHRoaXMuZW5kRGF0ZS5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnNob3coKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50cmlnZ2VyKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvd2luZyA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTaG93aW5nKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAvL2luY29tcGxldGUgZGF0ZSBzZWxlY3Rpb24sIHJldmVydCB0byBsYXN0IHZhbHVlc1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydERhdGUgPSB0aGlzLm9sZFN0YXJ0RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gdGhpcy5vbGRFbmREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaWYgYSBuZXcgZGF0ZSByYW5nZSB3YXMgc2VsZWN0ZWQsIGludm9rZSB0aGUgdXNlciBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnREYXRlLmlzU2FtZSh0aGlzLm9sZFN0YXJ0RGF0ZSkgfHwgIXRoaXMuZW5kRGF0ZS5pc1NhbWUodGhpcy5vbGRFbmREYXRlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5zdGFydERhdGUuY2xvbmUoKSwgdGhpcy5lbmREYXRlLmNsb25lKCksIHRoaXMuY2hvc2VuTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgLy9pZiBwaWNrZXIgaXMgYXR0YWNoZWQgdG8gYSB0ZXh0IGlucHV0LCB1cGRhdGUgaXRcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFbGVtZW50KCk7XHJcblxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJy5kYXRlcmFuZ2VwaWNrZXInKTtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9mZignLmRhdGVyYW5nZXBpY2tlcicpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50cmlnZ2VyKCdoaWRlLmRhdGVyYW5nZXBpY2tlcicsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRvZ2dsZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1Nob3dpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvdXRzaWRlQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgcGFnZSBpcyBjbGlja2VkIGFueXdoZXJlIGV4Y2VwdCB3aXRoaW4gdGhlIGRhdGVyYW5nZXJwaWNrZXIvYnV0dG9uXHJcbiAgICAgICAgICAgIC8vIGl0c2VsZiB0aGVuIGNhbGwgdGhpcy5oaWRlKClcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgLy8gaWUgbW9kYWwgZGlhbG9nIGZpeFxyXG4gICAgICAgICAgICAgICAgZS50eXBlID09IFwiZm9jdXNpblwiIHx8XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmVsZW1lbnQpLmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5jb250YWluZXIpLmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoJy5jYWxlbmRhci10YWJsZScpLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQudHJpZ2dlcignb3V0c2lkZUNsaWNrLmRhdGVyYW5nZXBpY2tlcicsIHRoaXMpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNob3dDYWxlbmRhcnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygnc2hvdy1jYWxlbmRhcicpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnRyaWdnZXIoJ3Nob3dDYWxlbmRhci5kYXRlcmFuZ2VwaWNrZXInLCB0aGlzKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoaWRlQ2FsZW5kYXJzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ3Nob3ctY2FsZW5kYXInKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnRyaWdnZXIoJ2hpZGVDYWxlbmRhci5kYXRlcmFuZ2VwaWNrZXInLCB0aGlzKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbGlja1JhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yYW5nZS1rZXknKTtcclxuICAgICAgICAgICAgdGhpcy5jaG9zZW5MYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgICAgICBpZiAobGFiZWwgPT0gdGhpcy5sb2NhbGUuY3VzdG9tUmFuZ2VMYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2FsZW5kYXJzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZXMgPSB0aGlzLnJhbmdlc1tsYWJlbF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IGRhdGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gZGF0ZXNbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZS5zdGFydE9mKCdkYXknKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUuZW5kT2YoJ2RheScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hbHdheXNTaG93Q2FsZW5kYXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZUNhbGVuZGFycygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja0FwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbGlja1ByZXY6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGNhbCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5kcnAtY2FsZW5kYXInKTtcclxuICAgICAgICAgICAgaWYgKGNhbC5oYXNDbGFzcygnbGVmdCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYWxlbmRhci5tb250aC5zdWJ0cmFjdCgxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpbmtlZENhbGVuZGFycylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2FsZW5kYXIubW9udGguc3VidHJhY3QoMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2FsZW5kYXIubW9udGguc3VidHJhY3QoMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYWxlbmRhcnMoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbGlja05leHQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGNhbCA9ICQoZS50YXJnZXQpLnBhcmVudHMoJy5kcnAtY2FsZW5kYXInKTtcclxuICAgICAgICAgICAgaWYgKGNhbC5oYXNDbGFzcygnbGVmdCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRDYWxlbmRhci5tb250aC5hZGQoMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2FsZW5kYXIubW9udGguYWRkKDEsICdtb250aCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlua2VkQ2FsZW5kYXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdENhbGVuZGFyLm1vbnRoLmFkZCgxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGVuZGFycygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhvdmVyRGF0ZTogZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAgICAgLy9pZ25vcmUgZGF0ZXMgdGhhdCBjYW4ndCBiZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICBpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCdhdmFpbGFibGUnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gJChlLnRhcmdldCkuYXR0cignZGF0YS10aXRsZScpO1xyXG4gICAgICAgICAgICB2YXIgcm93ID0gdGl0bGUuc3Vic3RyKDEsIDEpO1xyXG4gICAgICAgICAgICB2YXIgY29sID0gdGl0bGUuc3Vic3RyKDMsIDEpO1xyXG4gICAgICAgICAgICB2YXIgY2FsID0gJChlLnRhcmdldCkucGFyZW50cygnLmRycC1jYWxlbmRhcicpO1xyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IGNhbC5oYXNDbGFzcygnbGVmdCcpID8gdGhpcy5sZWZ0Q2FsZW5kYXIuY2FsZW5kYXJbcm93XVtjb2xdIDogdGhpcy5yaWdodENhbGVuZGFyLmNhbGVuZGFyW3Jvd11bY29sXTtcclxuXHJcbiAgICAgICAgICAgIC8vaGlnaGxpZ2h0IHRoZSBkYXRlcyBiZXR3ZWVuIHRoZSBzdGFydCBkYXRlIGFuZCB0aGUgZGF0ZSBiZWluZyBob3ZlcmVkIGFzIGEgcG90ZW50aWFsIGVuZCBkYXRlXHJcbiAgICAgICAgICAgIHZhciBsZWZ0Q2FsZW5kYXIgPSB0aGlzLmxlZnRDYWxlbmRhcjtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0Q2FsZW5kYXIgPSB0aGlzLnJpZ2h0Q2FsZW5kYXI7XHJcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLnN0YXJ0RGF0ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmZpbmQoJy5kcnAtY2FsZW5kYXIgdGJvZHkgdGQnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NraXAgd2VlayBudW1iZXJzLCBvbmx5IGxvb2sgYXQgZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbCkuaGFzQ2xhc3MoJ3dlZWsnKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSAkKGVsKS5hdHRyKCdkYXRhLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IHRpdGxlLnN1YnN0cigxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29sID0gdGl0bGUuc3Vic3RyKDMsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWwgPSAkKGVsKS5wYXJlbnRzKCcuZHJwLWNhbGVuZGFyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR0ID0gY2FsLmhhc0NsYXNzKCdsZWZ0JykgPyBsZWZ0Q2FsZW5kYXIuY2FsZW5kYXJbcm93XVtjb2xdIDogcmlnaHRDYWxlbmRhci5jYWxlbmRhcltyb3ddW2NvbF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZHQuaXNBZnRlcihzdGFydERhdGUpICYmIGR0LmlzQmVmb3JlKGRhdGUpKSB8fCBkdC5pc1NhbWUoZGF0ZSwgJ2RheScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWwpLmFkZENsYXNzKCdpbi1yYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWwpLnJlbW92ZUNsYXNzKCdpbi1yYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbGlja0RhdGU6IGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2F2YWlsYWJsZScpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSAkKGUudGFyZ2V0KS5hdHRyKCdkYXRhLXRpdGxlJyk7XHJcbiAgICAgICAgICAgIHZhciByb3cgPSB0aXRsZS5zdWJzdHIoMSwgMSk7XHJcbiAgICAgICAgICAgIHZhciBjb2wgPSB0aXRsZS5zdWJzdHIoMywgMSk7XHJcbiAgICAgICAgICAgIHZhciBjYWwgPSAkKGUudGFyZ2V0KS5wYXJlbnRzKCcuZHJwLWNhbGVuZGFyJyk7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gY2FsLmhhc0NsYXNzKCdsZWZ0JykgPyB0aGlzLmxlZnRDYWxlbmRhci5jYWxlbmRhcltyb3ddW2NvbF0gOiB0aGlzLnJpZ2h0Q2FsZW5kYXIuY2FsZW5kYXJbcm93XVtjb2xdO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBkbyBhIGZldyB0aGluZ3M6XHJcbiAgICAgICAgICAgIC8vICogYWx0ZXJuYXRlIGJldHdlZW4gc2VsZWN0aW5nIGEgc3RhcnQgYW5kIGVuZCBkYXRlIGZvciB0aGUgcmFuZ2UsXHJcbiAgICAgICAgICAgIC8vICogaWYgdGhlIHRpbWUgcGlja2VyIGlzIGVuYWJsZWQsIGFwcGx5IHRoZSBob3VyL21pbnV0ZS9zZWNvbmQgZnJvbSB0aGUgc2VsZWN0IGJveGVzIHRvIHRoZSBjbGlja2VkIGRhdGVcclxuICAgICAgICAgICAgLy8gKiBpZiBhdXRvYXBwbHkgaXMgZW5hYmxlZCwgYW5kIGFuIGVuZCBkYXRlIHdhcyBjaG9zZW4sIGFwcGx5IHRoZSBzZWxlY3Rpb25cclxuICAgICAgICAgICAgLy8gKiBpZiBzaW5nbGUgZGF0ZSBwaWNrZXIgbW9kZSwgYW5kIHRpbWUgcGlja2VyIGlzbid0IGVuYWJsZWQsIGFwcGx5IHRoZSBzZWxlY3Rpb24gaW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgLy8gKiBpZiBvbmUgb2YgdGhlIGlucHV0cyBhYm92ZSB0aGUgY2FsZW5kYXJzIHdhcyBmb2N1c2VkLCBjYW5jZWwgdGhhdCBtYW51YWwgaW5wdXRcclxuICAgICAgICAgICAgLy9cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZERhdGUgfHwgZGF0ZS5pc0JlZm9yZSh0aGlzLnN0YXJ0RGF0ZSwgJ2RheScpKSB7IC8vcGlja2luZyBzdGFydFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBob3VyID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLmxlZnQgLmhvdXJzZWxlY3QnKS52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50aW1lUGlja2VyMjRIb3VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbXBtID0gdGhpcy5jb250YWluZXIuZmluZCgnLmxlZnQgLmFtcG1zZWxlY3QnKS52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdQTScgJiYgaG91ciA8IDEyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSAxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtcG0gPT09ICdBTScgJiYgaG91ciA9PT0gMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pbnV0ZSA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5sZWZ0IC5taW51dGVzZWxlY3QnKS52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihtaW51dGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5sZWZ0IC5taW51dGVzZWxlY3Qgb3B0aW9uOmxhc3QnKS52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2Vjb25kID0gdGhpcy50aW1lUGlja2VyU2Vjb25kcyA/IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5sZWZ0IC5zZWNvbmRzZWxlY3QnKS52YWwoKSwgMTApIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlID0gZGF0ZS5jbG9uZSgpLmhvdXIoaG91cikubWludXRlKG1pbnV0ZSkuc2Vjb25kKHNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZERhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZGF0ZS5jbG9uZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5lbmREYXRlICYmIGRhdGUuaXNCZWZvcmUodGhpcy5zdGFydERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAvL3NwZWNpYWwgY2FzZTogY2xpY2tpbmcgdGhlIHNhbWUgZGF0ZSBmb3Igc3RhcnQvZW5kLFxyXG4gICAgICAgICAgICAgICAgLy9idXQgdGhlIHRpbWUgb2YgdGhlIGVuZCBkYXRlIGlzIGJlZm9yZSB0aGUgc3RhcnQgZGF0ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKHRoaXMuc3RhcnREYXRlLmNsb25lKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBwaWNraW5nIGVuZFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBob3VyID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLnJpZ2h0IC5ob3Vyc2VsZWN0JykudmFsKCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcjI0SG91cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1wbSA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAuYW1wbXNlbGVjdCcpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW1wbSA9PT0gJ1BNJyAmJiBob3VyIDwgMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW1wbSA9PT0gJ0FNJyAmJiBob3VyID09PSAxMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWludXRlID0gcGFyc2VJbnQodGhpcy5jb250YWluZXIuZmluZCgnLnJpZ2h0IC5taW51dGVzZWxlY3QnKS52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihtaW51dGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KHRoaXMuY29udGFpbmVyLmZpbmQoJy5yaWdodCAubWludXRlc2VsZWN0IG9wdGlvbjpsYXN0JykudmFsKCksIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlY29uZCA9IHRoaXMudGltZVBpY2tlclNlY29uZHMgPyBwYXJzZUludCh0aGlzLmNvbnRhaW5lci5maW5kKCcucmlnaHQgLnNlY29uZHNlbGVjdCcpLnZhbCgpLCAxMCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBkYXRlLmNsb25lKCkuaG91cihob3VyKS5taW51dGUobWludXRlKS5zZWNvbmQoc2Vjb25kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkYXRlLmNsb25lKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b0FwcGx5KSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlQ2hvc2VuTGFiZWwoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja0FwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RW5kRGF0ZSh0aGlzLnN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGltZVBpY2tlcilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrQXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XHJcblxyXG4gICAgICAgICAgICAvL1RoaXMgaXMgdG8gY2FuY2VsIHRoZSBibHVyIGV2ZW50IGhhbmRsZXIgaWYgdGhlIG1vdXNlIHdhcyBpbiBvbmUgb2YgdGhlIGlucHV0c1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjYWxjdWxhdGVDaG9zZW5MYWJlbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY3VzdG9tUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHJhbmdlIGluIHRoaXMucmFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGltZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLnRpbWVQaWNrZXJTZWNvbmRzID8gXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIgOiBcIllZWVktTU0tREQgSEg6bW1cIjtcclxuICAgICAgICAgICAgICAgICAgICAvL2lnbm9yZSB0aW1lcyB3aGVuIGNvbXBhcmluZyBkYXRlcyBpZiB0aW1lIHBpY2tlciBzZWNvbmRzIGlzIG5vdCBlbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnREYXRlLmZvcm1hdChmb3JtYXQpID09IHRoaXMucmFuZ2VzW3JhbmdlXVswXS5mb3JtYXQoZm9ybWF0KSAmJiB0aGlzLmVuZERhdGUuZm9ybWF0KGZvcm1hdCkgPT0gdGhpcy5yYW5nZXNbcmFuZ2VdWzFdLmZvcm1hdChmb3JtYXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVJhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvc2VuTGFiZWwgPSB0aGlzLmNvbnRhaW5lci5maW5kKCcucmFuZ2VzIGxpOmVxKCcgKyBpICsgJyknKS5hZGRDbGFzcygnYWN0aXZlJykuYXR0cignZGF0YS1yYW5nZS1rZXknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2lnbm9yZSB0aW1lcyB3aGVuIGNvbXBhcmluZyBkYXRlcyBpZiB0aW1lIHBpY2tlciBpcyBub3QgZW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSB0aGlzLnJhbmdlc1tyYW5nZV1bMF0uZm9ybWF0KCdZWVlZLU1NLUREJykgJiYgdGhpcy5lbmREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpID09IHRoaXMucmFuZ2VzW3JhbmdlXVsxXS5mb3JtYXQoJ1lZWVktTU0tREQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21SYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNob3NlbkxhYmVsID0gdGhpcy5jb250YWluZXIuZmluZCgnLnJhbmdlcyBsaTplcSgnICsgaSArICcpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLmF0dHIoJ2RhdGEtcmFuZ2Uta2V5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VzdG9tUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDdXN0b21SYW5nZUxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9zZW5MYWJlbCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5yYW5nZXMgbGk6bGFzdCcpLmFkZENsYXNzKCdhY3RpdmUnKS5hdHRyKCdkYXRhLXJhbmdlLWtleScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNob3NlbkxhYmVsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NhbGVuZGFycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2xpY2tBcHBseTogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnRyaWdnZXIoJ2FwcGx5LmRhdGVyYW5nZXBpY2tlcicsIHRoaXMpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNsaWNrQ2FuY2VsOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gdGhpcy5vbGRTdGFydERhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHRoaXMub2xkRW5kRGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC50cmlnZ2VyKCdjYW5jZWwuZGF0ZXJhbmdlcGlja2VyJywgdGhpcyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbW9udGhPclllYXJDaGFuZ2VkOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBpc0xlZnQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJwLWNhbGVuZGFyJykuaGFzQ2xhc3MoJ2xlZnQnKSxcclxuICAgICAgICAgICAgICAgIGxlZnRPclJpZ2h0ID0gaXNMZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGNhbCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5kcnAtY2FsZW5kYXIuJytsZWZ0T3JSaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyBNb250aCBtdXN0IGJlIE51bWJlciBmb3IgbmV3IG1vbWVudCB2ZXJzaW9uc1xyXG4gICAgICAgICAgICB2YXIgbW9udGggPSBwYXJzZUludChjYWwuZmluZCgnLm1vbnRoc2VsZWN0JykudmFsKCksIDEwKTtcclxuICAgICAgICAgICAgdmFyIHllYXIgPSBjYWwuZmluZCgnLnllYXJzZWxlY3QnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeWVhciA8IHRoaXMuc3RhcnREYXRlLnllYXIoKSB8fCAoeWVhciA9PSB0aGlzLnN0YXJ0RGF0ZS55ZWFyKCkgJiYgbW9udGggPCB0aGlzLnN0YXJ0RGF0ZS5tb250aCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5zdGFydERhdGUubW9udGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyID0gdGhpcy5zdGFydERhdGUueWVhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5taW5EYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeWVhciA8IHRoaXMubWluRGF0ZS55ZWFyKCkgfHwgKHllYXIgPT0gdGhpcy5taW5EYXRlLnllYXIoKSAmJiBtb250aCA8IHRoaXMubWluRGF0ZS5tb250aCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5taW5EYXRlLm1vbnRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhciA9IHRoaXMubWluRGF0ZS55ZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1heERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh5ZWFyID4gdGhpcy5tYXhEYXRlLnllYXIoKSB8fCAoeWVhciA9PSB0aGlzLm1heERhdGUueWVhcigpICYmIG1vbnRoID4gdGhpcy5tYXhEYXRlLm1vbnRoKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGggPSB0aGlzLm1heERhdGUubW9udGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyID0gdGhpcy5tYXhEYXRlLnllYXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FsZW5kYXIubW9udGgubW9udGgobW9udGgpLnllYXIoeWVhcik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saW5rZWRDYWxlbmRhcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodENhbGVuZGFyLm1vbnRoID0gdGhpcy5sZWZ0Q2FsZW5kYXIubW9udGguY2xvbmUoKS5hZGQoMSwgJ21vbnRoJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q2FsZW5kYXIubW9udGgubW9udGgobW9udGgpLnllYXIoeWVhcik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saW5rZWRDYWxlbmRhcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0Q2FsZW5kYXIubW9udGggPSB0aGlzLnJpZ2h0Q2FsZW5kYXIubW9udGguY2xvbmUoKS5zdWJ0cmFjdCgxLCAnbW9udGgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGVuZGFycygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRpbWVDaGFuZ2VkOiBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2FsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmRycC1jYWxlbmRhcicpLFxyXG4gICAgICAgICAgICAgICAgaXNMZWZ0ID0gY2FsLmhhc0NsYXNzKCdsZWZ0Jyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaG91ciA9IHBhcnNlSW50KGNhbC5maW5kKCcuaG91cnNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgIHZhciBtaW51dGUgPSBwYXJzZUludChjYWwuZmluZCgnLm1pbnV0ZXNlbGVjdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgIGlmIChpc05hTihtaW51dGUpKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51dGUgPSBwYXJzZUludChjYWwuZmluZCgnLm1pbnV0ZXNlbGVjdCBvcHRpb246bGFzdCcpLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHNlY29uZCA9IHRoaXMudGltZVBpY2tlclNlY29uZHMgPyBwYXJzZUludChjYWwuZmluZCgnLnNlY29uZHNlbGVjdCcpLnZhbCgpLCAxMCkgOiAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVQaWNrZXIyNEhvdXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhbXBtID0gY2FsLmZpbmQoJy5hbXBtc2VsZWN0JykudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW1wbSA9PT0gJ1BNJyAmJiBob3VyIDwgMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgaG91ciArPSAxMjtcclxuICAgICAgICAgICAgICAgIGlmIChhbXBtID09PSAnQU0nICYmIGhvdXIgPT09IDEyKVxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnQuaG91cihob3VyKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0Lm1pbnV0ZShtaW51dGUpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnQuc2Vjb25kKHNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShzdGFydCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbmREYXRlICYmIHRoaXMuZW5kRGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSBzdGFydC5mb3JtYXQoJ1lZWVktTU0tREQnKSAmJiB0aGlzLmVuZERhdGUuaXNCZWZvcmUoc3RhcnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKHN0YXJ0LmNsb25lKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IHRoaXMuZW5kRGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgZW5kLmhvdXIoaG91cik7XHJcbiAgICAgICAgICAgICAgICBlbmQubWludXRlKG1pbnV0ZSk7XHJcbiAgICAgICAgICAgICAgICBlbmQuc2Vjb25kKHNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVuZERhdGUoZW5kKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy91cGRhdGUgdGhlIGNhbGVuZGFycyBzbyBhbGwgY2xpY2thYmxlIGRhdGVzIHJlZmxlY3QgdGhlIG5ldyB0aW1lIGNvbXBvbmVudFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhbGVuZGFycygpO1xyXG5cclxuICAgICAgICAgICAgLy91cGRhdGUgdGhlIGZvcm0gaW5wdXRzIGFib3ZlIHRoZSBjYWxlbmRhcnMgd2l0aCB0aGUgbmV3IHRpbWVcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JtSW5wdXRzKCk7XHJcblxyXG4gICAgICAgICAgICAvL3JlLXJlbmRlciB0aGUgdGltZSBwaWNrZXJzIGJlY2F1c2UgY2hhbmdpbmcgb25lIHNlbGVjdGlvbiBjYW4gYWZmZWN0IHdoYXQncyBlbmFibGVkIGluIGFub3RoZXJcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJUaW1lUGlja2VyKCdsZWZ0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVGltZVBpY2tlcigncmlnaHQnKTtcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZWxlbWVudENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5pcygnaW5wdXQnKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC52YWwoKS5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRlU3RyaW5nID0gdGhpcy5lbGVtZW50LnZhbCgpLnNwbGl0KHRoaXMubG9jYWxlLnNlcGFyYXRvciksXHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBlbmQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGVTdHJpbmcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG1vbWVudChkYXRlU3RyaW5nWzBdLCB0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgZW5kID0gbW9tZW50KGRhdGVTdHJpbmdbMV0sIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbmdsZURhdGVQaWNrZXIgfHwgc3RhcnQgPT09IG51bGwgfHwgZW5kID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG1vbWVudCh0aGlzLmVsZW1lbnQudmFsKCksIHRoaXMubG9jYWxlLmZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBzdGFydDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFzdGFydC5pc1ZhbGlkKCkgfHwgIWVuZC5pc1ZhbGlkKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKHN0YXJ0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRFbmREYXRlKGVuZCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGtleWRvd246IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgLy9oaWRlIG9uIHRhYiBvciBlbnRlclxyXG4gICAgICAgICAgICBpZiAoKGUua2V5Q29kZSA9PT0gOSkgfHwgKGUua2V5Q29kZSA9PT0gMTMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9oaWRlIG9uIGVzYyBhbmQgcHJldmVudCBwcm9wYWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZUVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmlzKCdpbnB1dCcpICYmIHRoaXMuYXV0b1VwZGF0ZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5sb2NhbGUuZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaW5nbGVEYXRlUGlja2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgKz0gdGhpcy5sb2NhbGUuc2VwYXJhdG9yICsgdGhpcy5lbmREYXRlLmZvcm1hdCh0aGlzLmxvY2FsZS5mb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLmVsZW1lbnQudmFsKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQudmFsKG5ld1ZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub2ZmKCcuZGF0ZXJhbmdlcGlja2VyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVEYXRhKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5kYXRlcmFuZ2VwaWNrZXIgPSBmdW5jdGlvbihvcHRpb25zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBpbXBsZW1lbnRPcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sICQuZm4uZGF0ZXJhbmdlcGlja2VyLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChlbC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKSlcclxuICAgICAgICAgICAgICAgIGVsLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBlbC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInLCBuZXcgRGF0ZVJhbmdlUGlja2VyKGVsLCBpbXBsZW1lbnRPcHRpb25zLCBjYWxsYmFjaykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gRGF0ZVJhbmdlUGlja2VyO1xyXG5cclxufSkpO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi1iZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4tYmQuanNcIixcblx0XCIuL2JuLWJkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ib1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vYnMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jeVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2N5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vZGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZGUtYXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUtY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2R2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9lbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taW4uanNcIixcblx0XCIuL2VuLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLXNnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1zZy5qc1wiLFxuXHRcIi4vZW4tc2cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9lcy1kb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtbXhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLW14LmpzXCIsXG5cdFwiLi9lcy1teC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZmlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maWwuanNcIixcblx0XCIuL2ZvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2ZyLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9meVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2Z5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZ2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ29tLWRldmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1kZXZhLmpzXCIsXG5cdFwiLi9nb20tZGV2YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL29jLWxuY1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9vYy1sbmMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL29jLWxuYy5qc1wiLFxuXHRcIi4vcGEtaW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcGwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3B0LWJyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQuanNcIixcblx0XCIuL3JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9ydVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3J1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vc2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zaVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zcVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NxLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci1jeXJsLmpzXCIsXG5cdFwiLi9zci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi9zdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90ZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGV0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90Z1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RnLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90aC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ay5qc1wiLFxuXHRcIi4vdGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1tb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtbW8uanNcIixcblx0XCIuL3poLW1vLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyJdLCJzb3VyY2VSb290IjoiIn0=