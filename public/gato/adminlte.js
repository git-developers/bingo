(self["webpackChunkbingo"] = self["webpackChunkbingo"] || []).push([["adminlte"],{

/***/ "./assets/dist/js/adminlte.js":
/*!************************************!*\
  !*** ./assets/dist/js/adminlte.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.number.is-integer.js */ "./node_modules/core-js/modules/es.number.is-integer.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.fixed.js */ "./node_modules/core-js/modules/es.string.fixed.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * AdminLTE v3.0.5 (https://adminlte.io)
 * Copyright 2014-2020 Colorlib <http://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function (exports) {
  'use strict';
  /**
   * --------------------------------------------
   * AdminLTE ControlSidebar.js
   * License MIT
   * --------------------------------------------
   */

  var ControlSidebar = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'ControlSidebar';
    var DATA_KEY = 'lte.controlsidebar';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      COLLAPSED: "collapsed" + EVENT_KEY,
      EXPANDED: "expanded" + EVENT_KEY
    };
    var Selector = {
      CONTROL_SIDEBAR: '.control-sidebar',
      CONTROL_SIDEBAR_CONTENT: '.control-sidebar-content',
      DATA_TOGGLE: '[data-widget="control-sidebar"]',
      CONTENT: '.content-wrapper',
      HEADER: '.main-header',
      FOOTER: '.main-footer'
    };
    var ClassName = {
      CONTROL_SIDEBAR_ANIMATE: 'control-sidebar-animate',
      CONTROL_SIDEBAR_OPEN: 'control-sidebar-open',
      CONTROL_SIDEBAR_SLIDE: 'control-sidebar-slide-open',
      LAYOUT_FIXED: 'layout-fixed',
      NAVBAR_FIXED: 'layout-navbar-fixed',
      NAVBAR_SM_FIXED: 'layout-sm-navbar-fixed',
      NAVBAR_MD_FIXED: 'layout-md-navbar-fixed',
      NAVBAR_LG_FIXED: 'layout-lg-navbar-fixed',
      NAVBAR_XL_FIXED: 'layout-xl-navbar-fixed',
      FOOTER_FIXED: 'layout-footer-fixed',
      FOOTER_SM_FIXED: 'layout-sm-footer-fixed',
      FOOTER_MD_FIXED: 'layout-md-footer-fixed',
      FOOTER_LG_FIXED: 'layout-lg-footer-fixed',
      FOOTER_XL_FIXED: 'layout-xl-footer-fixed'
    };
    var Default = {
      controlsidebarSlide: true,
      scrollbarTheme: 'os-theme-light',
      scrollbarAutoHide: 'l'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var ControlSidebar = /*#__PURE__*/function () {
      function ControlSidebar(element, config) {
        this._element = element;
        this._config = config;

        this._init();
      } // Public


      var _proto = ControlSidebar.prototype;

      _proto.collapse = function collapse() {
        // Show the control sidebar
        if (this._config.controlsidebarSlide) {
          $('html').addClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
          $('body').removeClass(ClassName.CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
            $(Selector.CONTROL_SIDEBAR).hide();
            $('html').removeClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
            $(this).dequeue();
          });
        } else {
          $('body').removeClass(ClassName.CONTROL_SIDEBAR_OPEN);
        }

        var collapsedEvent = $.Event(Event.COLLAPSED);
        $(this._element).trigger(collapsedEvent);
      };

      _proto.show = function show() {
        // Collapse the control sidebar
        if (this._config.controlsidebarSlide) {
          $('html').addClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
          $(Selector.CONTROL_SIDEBAR).show().delay(10).queue(function () {
            $('body').addClass(ClassName.CONTROL_SIDEBAR_SLIDE).delay(300).queue(function () {
              $('html').removeClass(ClassName.CONTROL_SIDEBAR_ANIMATE);
              $(this).dequeue();
            });
            $(this).dequeue();
          });
        } else {
          $('body').addClass(ClassName.CONTROL_SIDEBAR_OPEN);
        }

        var expandedEvent = $.Event(Event.EXPANDED);
        $(this._element).trigger(expandedEvent);
      };

      _proto.toggle = function toggle() {
        var shouldClose = $('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE);

        if (shouldClose) {
          // Close the control sidebar
          this.collapse();
        } else {
          // Open the control sidebar
          this.show();
        }
      } // Private
      ;

      _proto._init = function _init() {
        var _this = this;

        this._fixHeight();

        this._fixScrollHeight();

        $(window).resize(function () {
          _this._fixHeight();

          _this._fixScrollHeight();
        });
        $(window).scroll(function () {
          if ($('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE)) {
            _this._fixScrollHeight();
          }
        });
      };

      _proto._fixScrollHeight = function _fixScrollHeight() {
        var heights = {
          scroll: $(document).height(),
          window: $(window).height(),
          header: $(Selector.HEADER).outerHeight(),
          footer: $(Selector.FOOTER).outerHeight()
        };
        var positions = {
          bottom: Math.abs(heights.window + $(window).scrollTop() - heights.scroll),
          top: $(window).scrollTop()
        };
        var navbarFixed = false;
        var footerFixed = false;

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          if ($('body').hasClass(ClassName.NAVBAR_FIXED) || $('body').hasClass(ClassName.NAVBAR_SM_FIXED) || $('body').hasClass(ClassName.NAVBAR_MD_FIXED) || $('body').hasClass(ClassName.NAVBAR_LG_FIXED) || $('body').hasClass(ClassName.NAVBAR_XL_FIXED)) {
            if ($(Selector.HEADER).css("position") === "fixed") {
              navbarFixed = true;
            }
          }

          if ($('body').hasClass(ClassName.FOOTER_FIXED) || $('body').hasClass(ClassName.FOOTER_SM_FIXED) || $('body').hasClass(ClassName.FOOTER_MD_FIXED) || $('body').hasClass(ClassName.FOOTER_LG_FIXED) || $('body').hasClass(ClassName.FOOTER_XL_FIXED)) {
            if ($(Selector.FOOTER).css("position") === "fixed") {
              footerFixed = true;
            }
          }

          if (positions.top === 0 && positions.bottom === 0) {
            $(Selector.CONTROL_SIDEBAR).css('bottom', heights.footer);
            $(Selector.CONTROL_SIDEBAR).css('top', heights.header);
            $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window - (heights.header + heights.footer));
          } else if (positions.bottom <= heights.footer) {
            if (footerFixed === false) {
              $(Selector.CONTROL_SIDEBAR).css('bottom', heights.footer - positions.bottom);
              $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window - (heights.footer - positions.bottom));
            } else {
              $(Selector.CONTROL_SIDEBAR).css('bottom', heights.footer);
            }
          } else if (positions.top <= heights.header) {
            if (navbarFixed === false) {
              $(Selector.CONTROL_SIDEBAR).css('top', heights.header - positions.top);
              $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window - (heights.header - positions.top));
            } else {
              $(Selector.CONTROL_SIDEBAR).css('top', heights.header);
            }
          } else {
            if (navbarFixed === false) {
              $(Selector.CONTROL_SIDEBAR).css('top', 0);
              $(Selector.CONTROL_SIDEBAR + ', ' + Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', heights.window);
            } else {
              $(Selector.CONTROL_SIDEBAR).css('top', heights.header);
            }
          }
        }
      };

      _proto._fixHeight = function _fixHeight() {
        var heights = {
          window: $(window).height(),
          header: $(Selector.HEADER).outerHeight(),
          footer: $(Selector.FOOTER).outerHeight()
        };

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          var sidebarHeight = heights.window - heights.header;

          if ($('body').hasClass(ClassName.FOOTER_FIXED) || $('body').hasClass(ClassName.FOOTER_SM_FIXED) || $('body').hasClass(ClassName.FOOTER_MD_FIXED) || $('body').hasClass(ClassName.FOOTER_LG_FIXED) || $('body').hasClass(ClassName.FOOTER_XL_FIXED)) {
            if ($(Selector.FOOTER).css("position") === "fixed") {
              sidebarHeight = heights.window - heights.header - heights.footer;
            }
          }

          $(Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).css('height', sidebarHeight);

          if (typeof $.fn.overlayScrollbars !== 'undefined') {
            $(Selector.CONTROL_SIDEBAR + ' ' + Selector.CONTROL_SIDEBAR_CONTENT).overlayScrollbars({
              className: this._config.scrollbarTheme,
              sizeAutoCapable: true,
              scrollbars: {
                autoHide: this._config.scrollbarAutoHide,
                clickScrolling: true
              }
            });
          }
        }
      } // Static
      ;

      ControlSidebar._jQueryInterface = function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new ControlSidebar(this, _options);
            $(this).data(DATA_KEY, data);
          }

          if (data[operation] === 'undefined') {
            throw new Error(operation + " is not a function");
          }

          data[operation]();
        });
      };

      return ControlSidebar;
    }();
    /**
     *
     * Data Api implementation
     * ====================================================
     */


    $(document).on('click', Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      ControlSidebar._jQueryInterface.call($(this), 'toggle');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = ControlSidebar._jQueryInterface;
    $.fn[NAME].Constructor = ControlSidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return ControlSidebar._jQueryInterface;
    };

    return ControlSidebar;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Layout.js
   * License MIT
   * --------------------------------------------
   */


  var Layout = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Layout';
    var DATA_KEY = 'lte.layout';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      HEADER: '.main-header',
      MAIN_SIDEBAR: '.main-sidebar',
      SIDEBAR: '.main-sidebar .sidebar',
      CONTENT: '.content-wrapper',
      BRAND: '.brand-link',
      CONTENT_HEADER: '.content-header',
      WRAPPER: '.wrapper',
      CONTROL_SIDEBAR: '.control-sidebar',
      CONTROL_SIDEBAR_CONTENT: '.control-sidebar-content',
      CONTROL_SIDEBAR_BTN: '[data-widget="control-sidebar"]',
      LAYOUT_FIXED: '.layout-fixed',
      FOOTER: '.main-footer',
      PUSHMENU_BTN: '[data-widget="pushmenu"]',
      LOGIN_BOX: '.login-box',
      REGISTER_BOX: '.register-box'
    };
    var ClassName = {
      HOLD: 'hold-transition',
      SIDEBAR: 'main-sidebar',
      CONTENT_FIXED: 'content-fixed',
      SIDEBAR_FOCUSED: 'sidebar-focused',
      LAYOUT_FIXED: 'layout-fixed',
      NAVBAR_FIXED: 'layout-navbar-fixed',
      FOOTER_FIXED: 'layout-footer-fixed',
      LOGIN_PAGE: 'login-page',
      REGISTER_PAGE: 'register-page',
      CONTROL_SIDEBAR_SLIDE_OPEN: 'control-sidebar-slide-open',
      CONTROL_SIDEBAR_OPEN: 'control-sidebar-open'
    };
    var Default = {
      scrollbarTheme: 'os-theme-light',
      scrollbarAutoHide: 'l',
      panelAutoHeight: true,
      loginRegisterAutoHeight: true
    };
    /**
     * Class Definition
     * ====================================================
     */

    var Layout = /*#__PURE__*/function () {
      function Layout(element, config) {
        this._config = config;
        this._element = element;

        this._init();
      } // Public


      var _proto = Layout.prototype;

      _proto.fixLayoutHeight = function fixLayoutHeight(extra) {
        if (extra === void 0) {
          extra = null;
        }

        var control_sidebar = 0;

        if ($('body').hasClass(ClassName.CONTROL_SIDEBAR_SLIDE_OPEN) || $('body').hasClass(ClassName.CONTROL_SIDEBAR_OPEN) || extra == 'control_sidebar') {
          control_sidebar = $(Selector.CONTROL_SIDEBAR_CONTENT).height();
        }

        var heights = {
          window: $(window).height(),
          header: $(Selector.HEADER).length !== 0 ? $(Selector.HEADER).outerHeight() : 0,
          footer: $(Selector.FOOTER).length !== 0 ? $(Selector.FOOTER).outerHeight() : 0,
          sidebar: $(Selector.SIDEBAR).length !== 0 ? $(Selector.SIDEBAR).height() : 0,
          control_sidebar: control_sidebar
        };

        var max = this._max(heights);

        var offset = this._config.panelAutoHeight;

        if (offset === true) {
          offset = 0;
        }

        if (offset !== false) {
          if (max == heights.control_sidebar) {
            $(Selector.CONTENT).css('min-height', max + offset);
          } else if (max == heights.window) {
            $(Selector.CONTENT).css('min-height', max + offset - heights.header - heights.footer);
          } else {
            $(Selector.CONTENT).css('min-height', max + offset - heights.header);
          }

          if (this._isFooterFixed()) {
            $(Selector.CONTENT).css('min-height', parseFloat($(Selector.CONTENT).css('min-height')) + heights.footer);
          }
        }

        if ($('body').hasClass(ClassName.LAYOUT_FIXED)) {
          if (offset !== false) {
            $(Selector.CONTENT).css('min-height', max + offset - heights.header - heights.footer);
          }

          if (typeof $.fn.overlayScrollbars !== 'undefined') {
            $(Selector.SIDEBAR).overlayScrollbars({
              className: this._config.scrollbarTheme,
              sizeAutoCapable: true,
              scrollbars: {
                autoHide: this._config.scrollbarAutoHide,
                clickScrolling: true
              }
            });
          }
        }
      };

      _proto.fixLoginRegisterHeight = function fixLoginRegisterHeight() {
        if ($(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).length === 0) {
          $('body, html').css('height', 'auto');
        } else if ($(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).length !== 0) {
          var box_height = $(Selector.LOGIN_BOX + ', ' + Selector.REGISTER_BOX).height();

          if ($('body').css('min-height') !== box_height) {
            $('body').css('min-height', box_height);
          }
        }
      } // Private
      ;

      _proto._init = function _init() {
        var _this = this; // Activate layout height watcher


        this.fixLayoutHeight();

        if (this._config.loginRegisterAutoHeight === true) {
          this.fixLoginRegisterHeight();
        } else if (Number.isInteger(this._config.loginRegisterAutoHeight)) {
          setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight);
        }

        $(Selector.SIDEBAR).on('collapsed.lte.treeview expanded.lte.treeview', function () {
          _this.fixLayoutHeight();
        });
        $(Selector.PUSHMENU_BTN).on('collapsed.lte.pushmenu shown.lte.pushmenu', function () {
          _this.fixLayoutHeight();
        });
        $(Selector.CONTROL_SIDEBAR_BTN).on('collapsed.lte.controlsidebar', function () {
          _this.fixLayoutHeight();
        }).on('expanded.lte.controlsidebar', function () {
          _this.fixLayoutHeight('control_sidebar');
        });
        $(window).resize(function () {
          _this.fixLayoutHeight();
        });
        setTimeout(function () {
          $('body.hold-transition').removeClass('hold-transition');
        }, 50);
      };

      _proto._max = function _max(numbers) {
        // Calculate the maximum number in a list
        var max = 0;
        Object.keys(numbers).forEach(function (key) {
          if (numbers[key] > max) {
            max = numbers[key];
          }
        });
        return max;
      };

      _proto._isFooterFixed = function _isFooterFixed() {
        return $('.main-footer').css('position') === 'fixed';
      } // Static
      ;

      Layout._jQueryInterface = function _jQueryInterface(config) {
        if (config === void 0) {
          config = '';
        }

        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Layout($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init' || config === '') {
            data['_init']();
          } else if (config === 'fixLayoutHeight' || config === 'fixLoginRegisterHeight') {
            data[config]();
          }
        });
      };

      return Layout;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on('load', function () {
      Layout._jQueryInterface.call($('body'));
    });
    $(Selector.SIDEBAR + ' a').on('focusin', function () {
      $(Selector.MAIN_SIDEBAR).addClass(ClassName.SIDEBAR_FOCUSED);
    });
    $(Selector.SIDEBAR + ' a').on('focusout', function () {
      $(Selector.MAIN_SIDEBAR).removeClass(ClassName.SIDEBAR_FOCUSED);
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Layout._jQueryInterface;
    $.fn[NAME].Constructor = Layout;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Layout._jQueryInterface;
    };

    return Layout;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE PushMenu.js
   * License MIT
   * --------------------------------------------
   */


  var PushMenu = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'PushMenu';
    var DATA_KEY = 'lte.pushmenu';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      COLLAPSED: "collapsed" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY
    };
    var Default = {
      autoCollapseSize: 992,
      enableRemember: false,
      noTransitionAfterReload: true
    };
    var Selector = {
      TOGGLE_BUTTON: '[data-widget="pushmenu"]',
      SIDEBAR_MINI: '.sidebar-mini',
      SIDEBAR_COLLAPSED: '.sidebar-collapse',
      BODY: 'body',
      OVERLAY: '#sidebar-overlay',
      WRAPPER: '.wrapper'
    };
    var ClassName = {
      COLLAPSED: 'sidebar-collapse',
      OPEN: 'sidebar-open',
      CLOSED: 'sidebar-closed'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var PushMenu = /*#__PURE__*/function () {
      function PushMenu(element, options) {
        this._element = element;
        this._options = $.extend({}, Default, options);

        if (!$(Selector.OVERLAY).length) {
          this._addOverlay();
        }

        this._init();
      } // Public


      var _proto = PushMenu.prototype;

      _proto.expand = function expand() {
        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            $(Selector.BODY).addClass(ClassName.OPEN);
          }
        }

        $(Selector.BODY).removeClass(ClassName.COLLAPSED).removeClass(ClassName.CLOSED);

        if (this._options.enableRemember) {
          localStorage.setItem("remember" + EVENT_KEY, ClassName.OPEN);
        }

        var shownEvent = $.Event(Event.SHOWN);
        $(this._element).trigger(shownEvent);
      };

      _proto.collapse = function collapse() {
        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            $(Selector.BODY).removeClass(ClassName.OPEN).addClass(ClassName.CLOSED);
          }
        }

        $(Selector.BODY).addClass(ClassName.COLLAPSED);

        if (this._options.enableRemember) {
          localStorage.setItem("remember" + EVENT_KEY, ClassName.COLLAPSED);
        }

        var collapsedEvent = $.Event(Event.COLLAPSED);
        $(this._element).trigger(collapsedEvent);
      };

      _proto.toggle = function toggle() {
        if (!$(Selector.BODY).hasClass(ClassName.COLLAPSED)) {
          this.collapse();
        } else {
          this.expand();
        }
      };

      _proto.autoCollapse = function autoCollapse(resize) {
        if (resize === void 0) {
          resize = false;
        }

        if (this._options.autoCollapseSize) {
          if ($(window).width() <= this._options.autoCollapseSize) {
            if (!$(Selector.BODY).hasClass(ClassName.OPEN)) {
              this.collapse();
            }
          } else if (resize == true) {
            if ($(Selector.BODY).hasClass(ClassName.OPEN)) {
              $(Selector.BODY).removeClass(ClassName.OPEN);
            } else if ($(Selector.BODY).hasClass(ClassName.CLOSED)) {
              this.expand();
            }
          }
        }
      };

      _proto.remember = function remember() {
        if (this._options.enableRemember) {
          var toggleState = localStorage.getItem("remember" + EVENT_KEY);

          if (toggleState == ClassName.COLLAPSED) {
            if (this._options.noTransitionAfterReload) {
              $("body").addClass('hold-transition').addClass(ClassName.COLLAPSED).delay(50).queue(function () {
                $(this).removeClass('hold-transition');
                $(this).dequeue();
              });
            } else {
              $("body").addClass(ClassName.COLLAPSED);
            }
          } else {
            if (this._options.noTransitionAfterReload) {
              $("body").addClass('hold-transition').removeClass(ClassName.COLLAPSED).delay(50).queue(function () {
                $(this).removeClass('hold-transition');
                $(this).dequeue();
              });
            } else {
              $("body").removeClass(ClassName.COLLAPSED);
            }
          }
        }
      } // Private
      ;

      _proto._init = function _init() {
        var _this = this;

        this.remember();
        this.autoCollapse();
        $(window).resize(function () {
          _this.autoCollapse(true);
        });
      };

      _proto._addOverlay = function _addOverlay() {
        var _this2 = this;

        var overlay = $('<div />', {
          id: 'sidebar-overlay'
        });
        overlay.on('click', function () {
          _this2.collapse();
        });
        $(Selector.WRAPPER).append(overlay);
      } // Static
      ;

      PushMenu._jQueryInterface = function _jQueryInterface(operation) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new PushMenu(this, _options);
            $(this).data(DATA_KEY, data);
          }

          if (typeof operation === 'string' && operation.match(/collapse|expand|toggle/)) {
            data[operation]();
          }
        });
      };

      return PushMenu;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.TOGGLE_BUTTON, function (event) {
      event.preventDefault();
      var button = event.currentTarget;

      if ($(button).data('widget') !== 'pushmenu') {
        button = $(button).closest(Selector.TOGGLE_BUTTON);
      }

      PushMenu._jQueryInterface.call($(button), 'toggle');
    });
    $(window).on('load', function () {
      PushMenu._jQueryInterface.call($(Selector.TOGGLE_BUTTON));
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = PushMenu._jQueryInterface;
    $.fn[NAME].Constructor = PushMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return PushMenu._jQueryInterface;
    };

    return PushMenu;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Treeview.js
   * License MIT
   * --------------------------------------------
   */


  var Treeview = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Treeview';
    var DATA_KEY = 'lte.treeview';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      SELECTED: "selected" + EVENT_KEY,
      EXPANDED: "expanded" + EVENT_KEY,
      COLLAPSED: "collapsed" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY
    };
    var Selector = {
      LI: '.nav-item',
      LINK: '.nav-link',
      TREEVIEW_MENU: '.nav-treeview',
      OPEN: '.menu-open',
      DATA_WIDGET: '[data-widget="treeview"]'
    };
    var ClassName = {
      LI: 'nav-item',
      LINK: 'nav-link',
      TREEVIEW_MENU: 'nav-treeview',
      OPEN: 'menu-open',
      SIDEBAR_COLLAPSED: 'sidebar-collapse'
    };
    var Default = {
      trigger: Selector.DATA_WIDGET + " " + Selector.LINK,
      animationSpeed: 300,
      accordion: true,
      expandSidebar: false,
      sidebarButtonSelector: '[data-widget="pushmenu"]'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var Treeview = /*#__PURE__*/function () {
      function Treeview(element, config) {
        this._config = config;
        this._element = element;
      } // Public


      var _proto = Treeview.prototype;

      _proto.init = function init() {
        this._setupListeners();
      };

      _proto.expand = function expand(treeviewMenu, parentLi) {
        var _this = this;

        var expandedEvent = $.Event(Event.EXPANDED);

        if (this._config.accordion) {
          var openMenuLi = parentLi.siblings(Selector.OPEN).first();
          var openTreeview = openMenuLi.find(Selector.TREEVIEW_MENU).first();
          this.collapse(openTreeview, openMenuLi);
        }

        treeviewMenu.stop().slideDown(this._config.animationSpeed, function () {
          parentLi.addClass(ClassName.OPEN);
          $(_this._element).trigger(expandedEvent);
        });

        if (this._config.expandSidebar) {
          this._expandSidebar();
        }
      };

      _proto.collapse = function collapse(treeviewMenu, parentLi) {
        var _this2 = this;

        var collapsedEvent = $.Event(Event.COLLAPSED);
        treeviewMenu.stop().slideUp(this._config.animationSpeed, function () {
          parentLi.removeClass(ClassName.OPEN);
          $(_this2._element).trigger(collapsedEvent);
          treeviewMenu.find(Selector.OPEN + " > " + Selector.TREEVIEW_MENU).slideUp();
          treeviewMenu.find(Selector.OPEN).removeClass(ClassName.OPEN);
        });
      };

      _proto.toggle = function toggle(event) {
        var $relativeTarget = $(event.currentTarget);
        var $parent = $relativeTarget.parent();
        var treeviewMenu = $parent.find('> ' + Selector.TREEVIEW_MENU);

        if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
          if (!$parent.is(Selector.LI)) {
            treeviewMenu = $parent.parent().find('> ' + Selector.TREEVIEW_MENU);
          }

          if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
            return;
          }
        }

        event.preventDefault();
        var parentLi = $relativeTarget.parents(Selector.LI).first();
        var isOpen = parentLi.hasClass(ClassName.OPEN);

        if (isOpen) {
          this.collapse($(treeviewMenu), parentLi);
        } else {
          this.expand($(treeviewMenu), parentLi);
        }
      } // Private
      ;

      _proto._setupListeners = function _setupListeners() {
        var _this3 = this;

        $(document).on('click', this._config.trigger, function (event) {
          _this3.toggle(event);
        });
      };

      _proto._expandSidebar = function _expandSidebar() {
        if ($('body').hasClass(ClassName.SIDEBAR_COLLAPSED)) {
          $(this._config.sidebarButtonSelector).PushMenu('expand');
        }
      } // Static
      ;

      Treeview._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Treeview($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init') {
            data[config]();
          }
        });
      };

      return Treeview;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      $(Selector.DATA_WIDGET).each(function () {
        Treeview._jQueryInterface.call($(this), 'init');
      });
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Treeview._jQueryInterface;
    $.fn[NAME].Constructor = Treeview;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Treeview._jQueryInterface;
    };

    return Treeview;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE DirectChat.js
   * License MIT
   * --------------------------------------------
   */


  var DirectChat = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'DirectChat';
    var DATA_KEY = 'lte.directchat';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      TOGGLED: "toggled{EVENT_KEY}"
    };
    var Selector = {
      DATA_TOGGLE: '[data-widget="chat-pane-toggle"]',
      DIRECT_CHAT: '.direct-chat'
    };
    var ClassName = {
      DIRECT_CHAT_OPEN: 'direct-chat-contacts-open'
    };
    /**
     * Class Definition
     * ====================================================
     */

    var DirectChat = /*#__PURE__*/function () {
      function DirectChat(element, config) {
        this._element = element;
      }

      var _proto = DirectChat.prototype;

      _proto.toggle = function toggle() {
        $(this._element).parents(Selector.DIRECT_CHAT).first().toggleClass(ClassName.DIRECT_CHAT_OPEN);
        var toggledEvent = $.Event(Event.TOGGLED);
        $(this._element).trigger(toggledEvent);
      } // Static
      ;

      DirectChat._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new DirectChat($(this));
            $(this).data(DATA_KEY, data);
          }

          data[config]();
        });
      };

      return DirectChat;
    }();
    /**
     *
     * Data Api implementation
     * ====================================================
     */


    $(document).on('click', Selector.DATA_TOGGLE, function (event) {
      if (event) event.preventDefault();

      DirectChat._jQueryInterface.call($(this), 'toggle');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = DirectChat._jQueryInterface;
    $.fn[NAME].Constructor = DirectChat;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return DirectChat._jQueryInterface;
    };

    return DirectChat;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE TodoList.js
   * License MIT
   * --------------------------------------------
   */


  var TodoList = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'TodoList';
    var DATA_KEY = 'lte.todolist';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      DATA_TOGGLE: '[data-widget="todo-list"]'
    };
    var ClassName = {
      TODO_LIST_DONE: 'done'
    };
    var Default = {
      onCheck: function onCheck(item) {
        return item;
      },
      onUnCheck: function onUnCheck(item) {
        return item;
      }
    };
    /**
     * Class Definition
     * ====================================================
     */

    var TodoList = /*#__PURE__*/function () {
      function TodoList(element, config) {
        this._config = config;
        this._element = element;

        this._init();
      } // Public


      var _proto = TodoList.prototype;

      _proto.toggle = function toggle(item) {
        item.parents('li').toggleClass(ClassName.TODO_LIST_DONE);

        if (!$(item).prop('checked')) {
          this.unCheck($(item));
          return;
        }

        this.check(item);
      };

      _proto.check = function check(item) {
        this._config.onCheck.call(item);
      };

      _proto.unCheck = function unCheck(item) {
        this._config.onUnCheck.call(item);
      } // Private
      ;

      _proto._init = function _init() {
        var that = this;
        $(Selector.DATA_TOGGLE).find('input:checkbox:checked').parents('li').toggleClass(ClassName.TODO_LIST_DONE);
        $(Selector.DATA_TOGGLE).on('change', 'input:checkbox', function (event) {
          that.toggle($(event.target));
        });
      } // Static
      ;

      TodoList._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _options = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new TodoList($(this), _options);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'init') {
            data[config]();
          }
        });
      };

      return TodoList;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(window).on('load', function () {
      TodoList._jQueryInterface.call($(Selector.DATA_TOGGLE));
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = TodoList._jQueryInterface;
    $.fn[NAME].Constructor = TodoList;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return TodoList._jQueryInterface;
    };

    return TodoList;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE CardWidget.js
   * License MIT
   * --------------------------------------------
   */


  var CardWidget = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'CardWidget';
    var DATA_KEY = 'lte.cardwidget';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      EXPANDED: "expanded" + EVENT_KEY,
      COLLAPSED: "collapsed" + EVENT_KEY,
      MAXIMIZED: "maximized" + EVENT_KEY,
      MINIMIZED: "minimized" + EVENT_KEY,
      REMOVED: "removed" + EVENT_KEY
    };
    var ClassName = {
      CARD: 'card',
      COLLAPSED: 'collapsed-card',
      COLLAPSING: 'collapsing-card',
      EXPANDING: 'expanding-card',
      WAS_COLLAPSED: 'was-collapsed',
      MAXIMIZED: 'maximized-card'
    };
    var Selector = {
      DATA_REMOVE: '[data-card-widget="remove"]',
      DATA_COLLAPSE: '[data-card-widget="collapse"]',
      DATA_MAXIMIZE: '[data-card-widget="maximize"]',
      CARD: "." + ClassName.CARD,
      CARD_HEADER: '.card-header',
      CARD_BODY: '.card-body',
      CARD_FOOTER: '.card-footer',
      COLLAPSED: "." + ClassName.COLLAPSED
    };
    var Default = {
      animationSpeed: 'normal',
      collapseTrigger: Selector.DATA_COLLAPSE,
      removeTrigger: Selector.DATA_REMOVE,
      maximizeTrigger: Selector.DATA_MAXIMIZE,
      collapseIcon: 'fa-minus',
      expandIcon: 'fa-plus',
      maximizeIcon: 'fa-expand',
      minimizeIcon: 'fa-compress'
    };

    var CardWidget = /*#__PURE__*/function () {
      function CardWidget(element, settings) {
        this._element = element;
        this._parent = element.parents(Selector.CARD).first();

        if (element.hasClass(ClassName.CARD)) {
          this._parent = element;
        }

        this._settings = $.extend({}, Default, settings);
      }

      var _proto = CardWidget.prototype;

      _proto.collapse = function collapse() {
        var _this = this;

        this._parent.addClass(ClassName.COLLAPSING).children(Selector.CARD_BODY + ", " + Selector.CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
          _this._parent.addClass(ClassName.COLLAPSED).removeClass(ClassName.COLLAPSING);
        });

        this._parent.find('> ' + Selector.CARD_HEADER + ' ' + this._settings.collapseTrigger + ' .' + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);

        var collapsed = $.Event(Event.COLLAPSED);

        this._element.trigger(collapsed, this._parent);
      };

      _proto.expand = function expand() {
        var _this2 = this;

        this._parent.addClass(ClassName.EXPANDING).children(Selector.CARD_BODY + ", " + Selector.CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
          _this2._parent.removeClass(ClassName.COLLAPSED).removeClass(ClassName.EXPANDING);
        });

        this._parent.find('> ' + Selector.CARD_HEADER + ' ' + this._settings.collapseTrigger + ' .' + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);

        var expanded = $.Event(Event.EXPANDED);

        this._element.trigger(expanded, this._parent);
      };

      _proto.remove = function remove() {
        this._parent.slideUp();

        var removed = $.Event(Event.REMOVED);

        this._element.trigger(removed, this._parent);
      };

      _proto.toggle = function toggle() {
        if (this._parent.hasClass(ClassName.COLLAPSED)) {
          this.expand();
          return;
        }

        this.collapse();
      };

      _proto.maximize = function maximize() {
        this._parent.find(this._settings.maximizeTrigger + ' .' + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon);

        this._parent.css({
          'height': this._parent.height(),
          'width': this._parent.width(),
          'transition': 'all .15s'
        }).delay(150).queue(function () {
          $(this).addClass(ClassName.MAXIMIZED);
          $('html').addClass(ClassName.MAXIMIZED);

          if ($(this).hasClass(ClassName.COLLAPSED)) {
            $(this).addClass(ClassName.WAS_COLLAPSED);
          }

          $(this).dequeue();
        });

        var maximized = $.Event(Event.MAXIMIZED);

        this._element.trigger(maximized, this._parent);
      };

      _proto.minimize = function minimize() {
        this._parent.find(this._settings.maximizeTrigger + ' .' + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon);

        this._parent.css('cssText', 'height:' + this._parent[0].style.height + ' !important;' + 'width:' + this._parent[0].style.width + ' !important; transition: all .15s;').delay(10).queue(function () {
          $(this).removeClass(ClassName.MAXIMIZED);
          $('html').removeClass(ClassName.MAXIMIZED);
          $(this).css({
            'height': 'inherit',
            'width': 'inherit'
          });

          if ($(this).hasClass(ClassName.WAS_COLLAPSED)) {
            $(this).removeClass(ClassName.WAS_COLLAPSED);
          }

          $(this).dequeue();
        });

        var MINIMIZED = $.Event(Event.MINIMIZED);

        this._element.trigger(MINIMIZED, this._parent);
      };

      _proto.toggleMaximize = function toggleMaximize() {
        if (this._parent.hasClass(ClassName.MAXIMIZED)) {
          this.minimize();
          return;
        }

        this.maximize();
      } // Private
      ;

      _proto._init = function _init(card) {
        var _this3 = this;

        this._parent = card;
        $(this).find(this._settings.collapseTrigger).click(function () {
          _this3.toggle();
        });
        $(this).find(this._settings.maximizeTrigger).click(function () {
          _this3.toggleMaximize();
        });
        $(this).find(this._settings.removeTrigger).click(function () {
          _this3.remove();
        });
      } // Static
      ;

      CardWidget._jQueryInterface = function _jQueryInterface(config) {
        var data = $(this).data(DATA_KEY);

        var _options = $.extend({}, Default, $(this).data());

        if (!data) {
          data = new CardWidget($(this), _options);
          $(this).data(DATA_KEY, typeof config === 'string' ? data : config);
        }

        if (typeof config === 'string' && config.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)) {
          data[config]();
        } else if (_typeof(config) === 'object') {
          data._init($(this));
        }
      };

      return CardWidget;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.DATA_COLLAPSE, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardWidget._jQueryInterface.call($(this), 'toggle');
    });
    $(document).on('click', Selector.DATA_REMOVE, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardWidget._jQueryInterface.call($(this), 'remove');
    });
    $(document).on('click', Selector.DATA_MAXIMIZE, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardWidget._jQueryInterface.call($(this), 'toggleMaximize');
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = CardWidget._jQueryInterface;
    $.fn[NAME].Constructor = CardWidget;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return CardWidget._jQueryInterface;
    };

    return CardWidget;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE CardRefresh.js
   * License MIT
   * --------------------------------------------
   */


  var CardRefresh = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'CardRefresh';
    var DATA_KEY = 'lte.cardrefresh';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      LOADED: "loaded" + EVENT_KEY,
      OVERLAY_ADDED: "overlay.added" + EVENT_KEY,
      OVERLAY_REMOVED: "overlay.removed" + EVENT_KEY
    };
    var ClassName = {
      CARD: 'card'
    };
    var Selector = {
      CARD: "." + ClassName.CARD,
      DATA_REFRESH: '[data-card-widget="card-refresh"]'
    };
    var Default = {
      source: '',
      sourceSelector: '',
      params: {},
      trigger: Selector.DATA_REFRESH,
      content: '.card-body',
      loadInContent: true,
      loadOnInit: true,
      responseType: '',
      overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
      onLoadStart: function onLoadStart() {},
      onLoadDone: function onLoadDone(response) {
        return response;
      }
    };

    var CardRefresh = /*#__PURE__*/function () {
      function CardRefresh(element, settings) {
        this._element = element;
        this._parent = element.parents(Selector.CARD).first();
        this._settings = $.extend({}, Default, settings);
        this._overlay = $(this._settings.overlayTemplate);

        if (element.hasClass(ClassName.CARD)) {
          this._parent = element;
        }

        if (this._settings.source === '') {
          throw new Error('Source url was not defined. Please specify a url in your CardRefresh source option.');
        }
      }

      var _proto = CardRefresh.prototype;

      _proto.load = function load() {
        this._addOverlay();

        this._settings.onLoadStart.call($(this));

        $.get(this._settings.source, this._settings.params, function (response) {
          if (this._settings.loadInContent) {
            if (this._settings.sourceSelector != '') {
              response = $(response).find(this._settings.sourceSelector).html();
            }

            this._parent.find(this._settings.content).html(response);
          }

          this._settings.onLoadDone.call($(this), response);

          this._removeOverlay();
        }.bind(this), this._settings.responseType !== '' && this._settings.responseType);
        var loadedEvent = $.Event(Event.LOADED);
        $(this._element).trigger(loadedEvent);
      };

      _proto._addOverlay = function _addOverlay() {
        this._parent.append(this._overlay);

        var overlayAddedEvent = $.Event(Event.OVERLAY_ADDED);
        $(this._element).trigger(overlayAddedEvent);
      };

      _proto._removeOverlay = function _removeOverlay() {
        this._parent.find(this._overlay).remove();

        var overlayRemovedEvent = $.Event(Event.OVERLAY_REMOVED);
        $(this._element).trigger(overlayRemovedEvent);
      }; // Private


      _proto._init = function _init(card) {
        var _this = this;

        $(this).find(this._settings.trigger).on('click', function () {
          _this.load();
        });

        if (this._settings.loadOnInit) {
          this.load();
        }
      } // Static
      ;

      CardRefresh._jQueryInterface = function _jQueryInterface(config) {
        var data = $(this).data(DATA_KEY);

        var _options = $.extend({}, Default, $(this).data());

        if (!data) {
          data = new CardRefresh($(this), _options);
          $(this).data(DATA_KEY, typeof config === 'string' ? data : config);
        }

        if (typeof config === 'string' && config.match(/load/)) {
          data[config]();
        } else {
          data._init($(this));
        }
      };

      return CardRefresh;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(document).on('click', Selector.DATA_REFRESH, function (event) {
      if (event) {
        event.preventDefault();
      }

      CardRefresh._jQueryInterface.call($(this), 'load');
    });
    $(document).ready(function () {
      $(Selector.DATA_REFRESH).each(function () {
        CardRefresh._jQueryInterface.call($(this));
      });
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = CardRefresh._jQueryInterface;
    $.fn[NAME].Constructor = CardRefresh;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return CardRefresh._jQueryInterface;
    };

    return CardRefresh;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Dropdown.js
   * License MIT
   * --------------------------------------------
   */


  var Dropdown = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Dropdown';
    var DATA_KEY = 'lte.dropdown';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Selector = {
      NAVBAR: '.navbar',
      DROPDOWN_MENU: '.dropdown-menu',
      DROPDOWN_MENU_ACTIVE: '.dropdown-menu.show',
      DROPDOWN_TOGGLE: '[data-toggle="dropdown"]'
    };
    var ClassName = {
      DROPDOWN_HOVER: 'dropdown-hover',
      DROPDOWN_RIGHT: 'dropdown-menu-right'
    };
    var Default = {};
    /**
     * Class Definition
     * ====================================================
     */

    var Dropdown = /*#__PURE__*/function () {
      function Dropdown(element, config) {
        this._config = config;
        this._element = element;
      } // Public


      var _proto = Dropdown.prototype;

      _proto.toggleSubmenu = function toggleSubmenu() {
        this._element.siblings().show().toggleClass("show");

        if (!this._element.next().hasClass('show')) {
          this._element.parents('.dropdown-menu').first().find('.show').removeClass("show").hide();
        }

        this._element.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show").hide();
        });
      };

      _proto.fixPosition = function fixPosition() {
        var elm = $(Selector.DROPDOWN_MENU_ACTIVE);

        if (elm.length !== 0) {
          if (elm.hasClass(ClassName.DROPDOWN_RIGHT)) {
            elm.css('left', 'inherit');
            elm.css('right', 0);
          } else {
            elm.css('left', 0);
            elm.css('right', 'inherit');
          }

          var offset = elm.offset();
          var width = elm.width();
          var windowWidth = $(window).width();
          var visiblePart = windowWidth - offset.left;

          if (offset.left < 0) {
            elm.css('left', 'inherit');
            elm.css('right', offset.left - 5);
          } else {
            if (visiblePart < width) {
              elm.css('left', 'inherit');
              elm.css('right', 0);
            }
          }
        }
      } // Static
      ;

      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = $.extend({}, Default, $(this).data());

          if (!data) {
            data = new Dropdown($(this), _config);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggleSubmenu' || config == 'fixPosition') {
            data[config]();
          }
        });
      };

      return Dropdown;
    }();
    /**
     * Data API
     * ====================================================
     */


    $(Selector.DROPDOWN_MENU + ' ' + Selector.DROPDOWN_TOGGLE).on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($(this), 'toggleSubmenu');
    });
    $(Selector.NAVBAR + ' ' + Selector.DROPDOWN_TOGGLE).on("click", function (event) {
      event.preventDefault();
      setTimeout(function () {
        Dropdown._jQueryInterface.call($(this), 'fixPosition');
      }, 1);
    });
    /**
     * jQuery API
     * ====================================================
     */

    $.fn[NAME] = Dropdown._jQueryInterface;
    $.fn[NAME].Constructor = Dropdown;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };

    return Dropdown;
  }(jQuery);
  /**
   * --------------------------------------------
   * AdminLTE Toasts.js
   * License MIT
   * --------------------------------------------
   */


  var Toasts = function ($) {
    /**
     * Constants
     * ====================================================
     */
    var NAME = 'Toasts';
    var DATA_KEY = 'lte.toasts';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      INIT: "init" + EVENT_KEY,
      CREATED: "created" + EVENT_KEY,
      REMOVED: "removed" + EVENT_KEY
    };
    var Selector = {
      BODY: 'toast-body',
      CONTAINER_TOP_RIGHT: '#toastsContainerTopRight',
      CONTAINER_TOP_LEFT: '#toastsContainerTopLeft',
      CONTAINER_BOTTOM_RIGHT: '#toastsContainerBottomRight',
      CONTAINER_BOTTOM_LEFT: '#toastsContainerBottomLeft'
    };
    var ClassName = {
      TOP_RIGHT: 'toasts-top-right',
      TOP_LEFT: 'toasts-top-left',
      BOTTOM_RIGHT: 'toasts-bottom-right',
      BOTTOM_LEFT: 'toasts-bottom-left',
      FADE: 'fade'
    };
    var Position = {
      TOP_RIGHT: 'topRight',
      TOP_LEFT: 'topLeft',
      BOTTOM_RIGHT: 'bottomRight',
      BOTTOM_LEFT: 'bottomLeft'
    };
    var Default = {
      position: Position.TOP_RIGHT,
      fixed: true,
      autohide: false,
      autoremove: true,
      delay: 1000,
      fade: true,
      icon: null,
      image: null,
      imageAlt: null,
      imageHeight: '25px',
      title: null,
      subtitle: null,
      close: true,
      body: null,
      "class": null
    };
    /**
     * Class Definition
     * ====================================================
     */

    var Toasts = /*#__PURE__*/function () {
      function Toasts(element, config) {
        this._config = config;

        this._prepareContainer();

        var initEvent = $.Event(Event.INIT);
        $('body').trigger(initEvent);
      } // Public


      var _proto = Toasts.prototype;

      _proto.create = function create() {
        var toast = $('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
        toast.data('autohide', this._config.autohide);
        toast.data('animation', this._config.fade);

        if (this._config["class"]) {
          toast.addClass(this._config["class"]);
        }

        if (this._config.delay && this._config.delay != 500) {
          toast.data('delay', this._config.delay);
        }

        var toast_header = $('<div class="toast-header">');

        if (this._config.image != null) {
          var toast_image = $('<img />').addClass('rounded mr-2').attr('src', this._config.image).attr('alt', this._config.imageAlt);

          if (this._config.imageHeight != null) {
            toast_image.height(this._config.imageHeight).width('auto');
          }

          toast_header.append(toast_image);
        }

        if (this._config.icon != null) {
          toast_header.append($('<i />').addClass('mr-2').addClass(this._config.icon));
        }

        if (this._config.title != null) {
          toast_header.append($('<strong />').addClass('mr-auto').html(this._config.title));
        }

        if (this._config.subtitle != null) {
          toast_header.append($('<small />').html(this._config.subtitle));
        }

        if (this._config.close == true) {
          var toast_close = $('<button data-dismiss="toast" />').attr('type', 'button').addClass('ml-2 mb-1 close').attr('aria-label', 'Close').append('<span aria-hidden="true">&times;</span>');

          if (this._config.title == null) {
            toast_close.toggleClass('ml-2 ml-auto');
          }

          toast_header.append(toast_close);
        }

        toast.append(toast_header);

        if (this._config.body != null) {
          toast.append($('<div class="toast-body" />').html(this._config.body));
        }

        $(this._getContainerId()).prepend(toast);
        var createdEvent = $.Event(Event.CREATED);
        $('body').trigger(createdEvent);
        toast.toast('show');

        if (this._config.autoremove) {
          toast.on('hidden.bs.toast', function () {
            $(this).delay(200).remove();
            var removedEvent = $.Event(Event.REMOVED);
            $('body').trigger(removedEvent);
          });
        }
      } // Static
      ;

      _proto._getContainerId = function _getContainerId() {
        if (this._config.position == Position.TOP_RIGHT) {
          return Selector.CONTAINER_TOP_RIGHT;
        } else if (this._config.position == Position.TOP_LEFT) {
          return Selector.CONTAINER_TOP_LEFT;
        } else if (this._config.position == Position.BOTTOM_RIGHT) {
          return Selector.CONTAINER_BOTTOM_RIGHT;
        } else if (this._config.position == Position.BOTTOM_LEFT) {
          return Selector.CONTAINER_BOTTOM_LEFT;
        }
      };

      _proto._prepareContainer = function _prepareContainer() {
        if ($(this._getContainerId()).length === 0) {
          var container = $('<div />').attr('id', this._getContainerId().replace('#', ''));

          if (this._config.position == Position.TOP_RIGHT) {
            container.addClass(ClassName.TOP_RIGHT);
          } else if (this._config.position == Position.TOP_LEFT) {
            container.addClass(ClassName.TOP_LEFT);
          } else if (this._config.position == Position.BOTTOM_RIGHT) {
            container.addClass(ClassName.BOTTOM_RIGHT);
          } else if (this._config.position == Position.BOTTOM_LEFT) {
            container.addClass(ClassName.BOTTOM_LEFT);
          }

          $('body').append(container);
        }

        if (this._config.fixed) {
          $(this._getContainerId()).addClass('fixed');
        } else {
          $(this._getContainerId()).removeClass('fixed');
        }
      } // Static
      ;

      Toasts._jQueryInterface = function _jQueryInterface(option, config) {
        return this.each(function () {
          var _options = $.extend({}, Default, config);

          var toast = new Toasts($(this), _options);

          if (option === 'create') {
            toast[option]();
          }
        });
      };

      return Toasts;
    }();
    /**
     * jQuery API
     * ====================================================
     */


    $.fn[NAME] = Toasts._jQueryInterface;
    $.fn[NAME].Constructor = Toasts;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Toasts._jQueryInterface;
    };

    return Toasts;
  }(jQuery);

  exports.CardRefresh = CardRefresh;
  exports.CardWidget = CardWidget;
  exports.ControlSidebar = ControlSidebar;
  exports.DirectChat = DirectChat;
  exports.Dropdown = Dropdown;
  exports.Layout = Layout;
  exports.PushMenu = PushMenu;
  exports.Toasts = Toasts;
  exports.TodoList = TodoList;
  exports.Treeview = Treeview;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_well-known-sy-07cc72","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-31b1f3","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-2bd885"], () => (__webpack_exec__("./assets/dist/js/adminlte.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5nby8uLi9idWlsZC9qcy9Db250cm9sU2lkZWJhci5qcyIsIndlYnBhY2s6Ly9iaW5nby8uLi9idWlsZC9qcy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vYmluZ28vLi4vYnVpbGQvanMvUHVzaE1lbnUuanMiLCJ3ZWJwYWNrOi8vYmluZ28vLi4vYnVpbGQvanMvVHJlZXZpZXcuanMiLCJ3ZWJwYWNrOi8vYmluZ28vLi4vYnVpbGQvanMvRGlyZWN0Q2hhdC5qcyIsIndlYnBhY2s6Ly9iaW5nby8uLi9idWlsZC9qcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly9iaW5nby8uLi9idWlsZC9qcy9DYXJkV2lkZ2V0LmpzIiwid2VicGFjazovL2JpbmdvLy4uL2J1aWxkL2pzL0NhcmRSZWZyZXNoLmpzIiwid2VicGFjazovL2JpbmdvLy4uL2J1aWxkL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovL2JpbmdvLy4uL2J1aWxkL2pzL1RvYXN0cy5qcyJdLCJuYW1lcyI6WyJDb250cm9sU2lkZWJhciIsIk5BTUUiLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsIiQiLCJFdmVudCIsIkNPTExBUFNFRCIsIkVYUEFOREVEIiwiU2VsZWN0b3IiLCJDT05UUk9MX1NJREVCQVIiLCJDT05UUk9MX1NJREVCQVJfQ09OVEVOVCIsIkRBVEFfVE9HR0xFIiwiQ09OVEVOVCIsIkhFQURFUiIsIkZPT1RFUiIsIkNsYXNzTmFtZSIsIkNPTlRST0xfU0lERUJBUl9BTklNQVRFIiwiQ09OVFJPTF9TSURFQkFSX09QRU4iLCJDT05UUk9MX1NJREVCQVJfU0xJREUiLCJMQVlPVVRfRklYRUQiLCJOQVZCQVJfRklYRUQiLCJOQVZCQVJfU01fRklYRUQiLCJOQVZCQVJfTURfRklYRUQiLCJOQVZCQVJfTEdfRklYRUQiLCJOQVZCQVJfWExfRklYRUQiLCJGT09URVJfRklYRUQiLCJGT09URVJfU01fRklYRUQiLCJGT09URVJfTURfRklYRUQiLCJGT09URVJfTEdfRklYRUQiLCJGT09URVJfWExfRklYRUQiLCJEZWZhdWx0IiwiY29udHJvbHNpZGViYXJTbGlkZSIsInNjcm9sbGJhclRoZW1lIiwic2Nyb2xsYmFyQXV0b0hpZGUiLCJjb2xsYXBzZSIsImNvbGxhcHNlZEV2ZW50Iiwic2hvdyIsImV4cGFuZGVkRXZlbnQiLCJ0b2dnbGUiLCJzaG91bGRDbG9zZSIsIl9pbml0IiwiX2ZpeFNjcm9sbEhlaWdodCIsImhlaWdodHMiLCJzY3JvbGwiLCJ3aW5kb3ciLCJoZWFkZXIiLCJmb290ZXIiLCJwb3NpdGlvbnMiLCJib3R0b20iLCJNYXRoIiwidG9wIiwibmF2YmFyRml4ZWQiLCJmb290ZXJGaXhlZCIsIl9maXhIZWlnaHQiLCJzaWRlYmFySGVpZ2h0IiwiY2xhc3NOYW1lIiwic2l6ZUF1dG9DYXBhYmxlIiwic2Nyb2xsYmFycyIsImF1dG9IaWRlIiwiY2xpY2tTY3JvbGxpbmciLCJkYXRhIiwiX29wdGlvbnMiLCJvcGVyYXRpb24iLCJldmVudCIsIkxheW91dCIsIk1BSU5fU0lERUJBUiIsIlNJREVCQVIiLCJCUkFORCIsIkNPTlRFTlRfSEVBREVSIiwiV1JBUFBFUiIsIkNPTlRST0xfU0lERUJBUl9CVE4iLCJQVVNITUVOVV9CVE4iLCJMT0dJTl9CT1giLCJSRUdJU1RFUl9CT1giLCJIT0xEIiwiQ09OVEVOVF9GSVhFRCIsIlNJREVCQVJfRk9DVVNFRCIsIkxPR0lOX1BBR0UiLCJSRUdJU1RFUl9QQUdFIiwiQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU4iLCJwYW5lbEF1dG9IZWlnaHQiLCJsb2dpblJlZ2lzdGVyQXV0b0hlaWdodCIsImZpeExheW91dEhlaWdodCIsImV4dHJhIiwiY29udHJvbF9zaWRlYmFyIiwic2lkZWJhciIsIm1heCIsIm9mZnNldCIsInBhcnNlRmxvYXQiLCJmaXhMb2dpblJlZ2lzdGVySGVpZ2h0IiwiYm94X2hlaWdodCIsIk51bWJlciIsInNldEludGVydmFsIiwic2V0VGltZW91dCIsIl9tYXgiLCJPYmplY3QiLCJudW1iZXJzIiwiX2lzRm9vdGVyRml4ZWQiLCJjb25maWciLCJQdXNoTWVudSIsIlNIT1dOIiwiYXV0b0NvbGxhcHNlU2l6ZSIsImVuYWJsZVJlbWVtYmVyIiwibm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQiLCJUT0dHTEVfQlVUVE9OIiwiU0lERUJBUl9NSU5JIiwiU0lERUJBUl9DT0xMQVBTRUQiLCJCT0RZIiwiT1ZFUkxBWSIsIk9QRU4iLCJDTE9TRUQiLCJleHBhbmQiLCJsb2NhbFN0b3JhZ2UiLCJzaG93bkV2ZW50IiwiYXV0b0NvbGxhcHNlIiwicmVzaXplIiwicmVtZW1iZXIiLCJ0b2dnbGVTdGF0ZSIsIl9hZGRPdmVybGF5Iiwib3ZlcmxheSIsImlkIiwiYnV0dG9uIiwiVHJlZXZpZXciLCJTRUxFQ1RFRCIsIkxPQURfREFUQV9BUEkiLCJMSSIsIkxJTksiLCJUUkVFVklFV19NRU5VIiwiREFUQV9XSURHRVQiLCJ0cmlnZ2VyIiwiYW5pbWF0aW9uU3BlZWQiLCJhY2NvcmRpb24iLCJleHBhbmRTaWRlYmFyIiwic2lkZWJhckJ1dHRvblNlbGVjdG9yIiwiaW5pdCIsIm9wZW5NZW51TGkiLCJwYXJlbnRMaSIsIm9wZW5UcmVldmlldyIsInRyZWV2aWV3TWVudSIsIiRyZWxhdGl2ZVRhcmdldCIsIiRwYXJlbnQiLCJpc09wZW4iLCJfc2V0dXBMaXN0ZW5lcnMiLCJfZXhwYW5kU2lkZWJhciIsIkRpcmVjdENoYXQiLCJUT0dHTEVEIiwiRElSRUNUX0NIQVQiLCJESVJFQ1RfQ0hBVF9PUEVOIiwidG9nZ2xlZEV2ZW50IiwiVG9kb0xpc3QiLCJUT0RPX0xJU1RfRE9ORSIsIm9uQ2hlY2siLCJvblVuQ2hlY2siLCJpdGVtIiwiY2hlY2siLCJ1bkNoZWNrIiwidGhhdCIsIkNhcmRXaWRnZXQiLCJNQVhJTUlaRUQiLCJNSU5JTUlaRUQiLCJSRU1PVkVEIiwiQ0FSRCIsIkNPTExBUFNJTkciLCJFWFBBTkRJTkciLCJXQVNfQ09MTEFQU0VEIiwiREFUQV9SRU1PVkUiLCJEQVRBX0NPTExBUFNFIiwiREFUQV9NQVhJTUlaRSIsIkNBUkRfSEVBREVSIiwiQ0FSRF9CT0RZIiwiQ0FSRF9GT09URVIiLCJjb2xsYXBzZVRyaWdnZXIiLCJyZW1vdmVUcmlnZ2VyIiwibWF4aW1pemVUcmlnZ2VyIiwiY29sbGFwc2VJY29uIiwiZXhwYW5kSWNvbiIsIm1heGltaXplSWNvbiIsIm1pbmltaXplSWNvbiIsImVsZW1lbnQiLCJjb2xsYXBzZWQiLCJleHBhbmRlZCIsInJlbW92ZSIsInJlbW92ZWQiLCJtYXhpbWl6ZSIsIm1heGltaXplZCIsIm1pbmltaXplIiwidG9nZ2xlTWF4aW1pemUiLCJDYXJkUmVmcmVzaCIsIkxPQURFRCIsIk9WRVJMQVlfQURERUQiLCJPVkVSTEFZX1JFTU9WRUQiLCJEQVRBX1JFRlJFU0giLCJzb3VyY2UiLCJzb3VyY2VTZWxlY3RvciIsInBhcmFtcyIsImNvbnRlbnQiLCJsb2FkSW5Db250ZW50IiwibG9hZE9uSW5pdCIsInJlc3BvbnNlVHlwZSIsIm92ZXJsYXlUZW1wbGF0ZSIsIm9uTG9hZFN0YXJ0Iiwib25Mb2FkRG9uZSIsImxvYWQiLCJyZXNwb25zZSIsImxvYWRlZEV2ZW50Iiwib3ZlcmxheUFkZGVkRXZlbnQiLCJfcmVtb3ZlT3ZlcmxheSIsIm92ZXJsYXlSZW1vdmVkRXZlbnQiLCJEcm9wZG93biIsIk5BVkJBUiIsIkRST1BET1dOX01FTlUiLCJEUk9QRE9XTl9NRU5VX0FDVElWRSIsIkRST1BET1dOX1RPR0dMRSIsIkRST1BET1dOX0hPVkVSIiwiRFJPUERPV05fUklHSFQiLCJ0b2dnbGVTdWJtZW51IiwiZml4UG9zaXRpb24iLCJlbG0iLCJ3aWR0aCIsIndpbmRvd1dpZHRoIiwidmlzaWJsZVBhcnQiLCJfY29uZmlnIiwiVG9hc3RzIiwiSU5JVCIsIkNSRUFURUQiLCJDT05UQUlORVJfVE9QX1JJR0hUIiwiQ09OVEFJTkVSX1RPUF9MRUZUIiwiQ09OVEFJTkVSX0JPVFRPTV9SSUdIVCIsIkNPTlRBSU5FUl9CT1RUT01fTEVGVCIsIlRPUF9SSUdIVCIsIlRPUF9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiQk9UVE9NX0xFRlQiLCJGQURFIiwiUG9zaXRpb24iLCJwb3NpdGlvbiIsImZpeGVkIiwiYXV0b2hpZGUiLCJhdXRvcmVtb3ZlIiwiZGVsYXkiLCJmYWRlIiwiaWNvbiIsImltYWdlIiwiaW1hZ2VBbHQiLCJpbWFnZUhlaWdodCIsInRpdGxlIiwic3VidGl0bGUiLCJjbG9zZSIsImJvZHkiLCJjbGFzcyIsImluaXRFdmVudCIsImNyZWF0ZSIsInRvYXN0IiwidG9hc3RfaGVhZGVyIiwidG9hc3RfaW1hZ2UiLCJ0b2FzdF9jbG9zZSIsImNyZWF0ZWRFdmVudCIsInJlbW92ZWRFdmVudCIsIl9nZXRDb250YWluZXJJZCIsIl9wcmVwYXJlQ29udGFpbmVyIiwiY29udGFpbmVyIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBT0EsTUFBTUEsY0FBYyxHQUFJLGFBQU87QUFDN0I7Ozs7QUFLQSxRQUFNQyxJQUFJLEdBQVY7QUFDQSxRQUFNQyxRQUFRLEdBQWQ7QUFDQSxRQUFNQyxTQUFTLFNBQWY7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0MsQ0FBQyxDQUFEQSxHQUEzQixJQUEyQkEsQ0FBM0I7QUFHQSxRQUFNQyxLQUFLLEdBQUc7QUFDWkMsZUFBUyxnQkFERztBQUVaQyxjQUFRLGVBQWFMO0FBRlQsS0FBZDtBQUtBLFFBQU1NLFFBQVEsR0FBRztBQUNmQyxxQkFBZSxFQURBO0FBRWZDLDZCQUF1QixFQUZSO0FBR2ZDLGlCQUFXLEVBSEk7QUFJZkMsYUFBTyxFQUpRO0FBS2ZDLFlBQU0sRUFMUztBQU1mQyxZQUFNLEVBQUU7QUFOTyxLQUFqQjtBQVNBLFFBQU1DLFNBQVMsR0FBRztBQUNoQkMsNkJBQXVCLEVBRFA7QUFFaEJDLDBCQUFvQixFQUZKO0FBR2hCQywyQkFBcUIsRUFITDtBQUloQkMsa0JBQVksRUFKSTtBQUtoQkMsa0JBQVksRUFMSTtBQU1o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LEdBQUcsV0FBV3hQLENBQUMsQ0FBWixJQUFZLENBQVosRUFBWixRQUFZLENBQVo7O0FBRUEsY0FBSWlRLE1BQU0sS0FBVixVQUF5QjtBQUN2QlQsaUJBQUssQ0FBTEEsTUFBSyxDQUFMQTtBQUNEO0FBTkgsU0FBTyxDQUFQO0FBbk1pQjs7QUFBQTtBQUFBO0FBOE1yQjs7Ozs7O0FBS0F4UCxLQUFDLENBQURBLFdBQWEwTixNQUFNLENBQW5CMU47QUFDQUEsS0FBQyxDQUFEQTs7QUFDQUEsS0FBQyxDQUFEQSxzQkFBeUIsWUFBWTtBQUNuQ0EsT0FBQyxDQUFEQTtBQUNBLGFBQU8wTixNQUFNLENBQWI7QUFGRjFOOztBQUtBO0FBMU5hLEdBQUMsQ0FBaEIsTUFBZ0IsQ0FBaEIiLCJmaWxlIjoiYWRtaW5sdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBDb250cm9sU2lkZWJhci5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQ29udHJvbFNpZGViYXIgPSAoKCQpID0+IHtcbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdDb250cm9sU2lkZWJhcidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2x0ZS5jb250cm9sc2lkZWJhcidcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIENPTExBUFNFRDogYGNvbGxhcHNlZCR7RVZFTlRfS0VZfWAsXG4gICAgRVhQQU5ERUQ6IGBleHBhbmRlZCR7RVZFTlRfS0VZfWAsXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBDT05UUk9MX1NJREVCQVI6ICcuY29udHJvbC1zaWRlYmFyJyxcbiAgICBDT05UUk9MX1NJREVCQVJfQ09OVEVOVDogJy5jb250cm9sLXNpZGViYXItY29udGVudCcsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS13aWRnZXQ9XCJjb250cm9sLXNpZGViYXJcIl0nLFxuICAgIENPTlRFTlQ6ICcuY29udGVudC13cmFwcGVyJyxcbiAgICBIRUFERVI6ICcubWFpbi1oZWFkZXInLFxuICAgIEZPT1RFUjogJy5tYWluLWZvb3RlcicsXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ09OVFJPTF9TSURFQkFSX0FOSU1BVEU6ICdjb250cm9sLXNpZGViYXItYW5pbWF0ZScsXG4gICAgQ09OVFJPTF9TSURFQkFSX09QRU46ICdjb250cm9sLXNpZGViYXItb3BlbicsXG4gICAgQ09OVFJPTF9TSURFQkFSX1NMSURFOiAnY29udHJvbC1zaWRlYmFyLXNsaWRlLW9wZW4nLFxuICAgIExBWU9VVF9GSVhFRDogJ2xheW91dC1maXhlZCcsXG4gICAgTkFWQkFSX0ZJWEVEOiAnbGF5b3V0LW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX1NNX0ZJWEVEOiAnbGF5b3V0LXNtLW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX01EX0ZJWEVEOiAnbGF5b3V0LW1kLW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX0xHX0ZJWEVEOiAnbGF5b3V0LWxnLW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX1hMX0ZJWEVEOiAnbGF5b3V0LXhsLW5hdmJhci1maXhlZCcsXG4gICAgRk9PVEVSX0ZJWEVEOiAnbGF5b3V0LWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX1NNX0ZJWEVEOiAnbGF5b3V0LXNtLWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX01EX0ZJWEVEOiAnbGF5b3V0LW1kLWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX0xHX0ZJWEVEOiAnbGF5b3V0LWxnLWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX1hMX0ZJWEVEOiAnbGF5b3V0LXhsLWZvb3Rlci1maXhlZCcsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGNvbnRyb2xzaWRlYmFyU2xpZGU6IHRydWUsXG4gICAgc2Nyb2xsYmFyVGhlbWUgOiAnb3MtdGhlbWUtbGlnaHQnLFxuICAgIHNjcm9sbGJhckF1dG9IaWRlOiAnbCcsXG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIENvbnRyb2xTaWRlYmFyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgICB0aGlzLl9jb25maWcgID0gY29uZmlnXG5cbiAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuXG4gICAgY29sbGFwc2UoKSB7XG4gICAgICAvLyBTaG93IHRoZSBjb250cm9sIHNpZGViYXJcbiAgICAgIGlmICh0aGlzLl9jb25maWcuY29udHJvbHNpZGViYXJTbGlkZSkge1xuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSkuZGVsYXkoMzAwKS5xdWV1ZShmdW5jdGlvbigpe1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5oaWRlKClcbiAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9PUEVOKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xsYXBzZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ09MTEFQU0VEKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGNvbGxhcHNlZEV2ZW50KVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAvLyBDb2xsYXBzZSB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGUpIHtcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfQU5JTUFURSlcbiAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLnNob3coKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSkuZGVsYXkoMzAwKS5xdWV1ZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfQU5JTUFURSlcbiAgICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfT1BFTilcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwYW5kZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuRVhQQU5ERUQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoZXhwYW5kZWRFdmVudClcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBjb25zdCBzaG91bGRDbG9zZSA9ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICQoJ2JvZHknKVxuICAgICAgICAuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSlcbiAgICAgIGlmIChzaG91bGRDbG9zZSkge1xuICAgICAgICAvLyBDbG9zZSB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIHRoaXMuc2hvdygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuXG4gICAgX2luaXQoKSB7XG4gICAgICB0aGlzLl9maXhIZWlnaHQoKVxuICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcblxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ZpeEhlaWdodCgpXG4gICAgICAgIHRoaXMuX2ZpeFNjcm9sbEhlaWdodCgpXG4gICAgICB9KVxuXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX1NMSURFKSkge1xuICAgICAgICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBfZml4U2Nyb2xsSGVpZ2h0KCkge1xuICAgICAgY29uc3QgaGVpZ2h0cyA9IHtcbiAgICAgICAgc2Nyb2xsOiAkKGRvY3VtZW50KS5oZWlnaHQoKSxcbiAgICAgICAgd2luZG93OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICAgIGhlYWRlcjogJChTZWxlY3Rvci5IRUFERVIpLm91dGVySGVpZ2h0KCksXG4gICAgICAgIGZvb3RlcjogJChTZWxlY3Rvci5GT09URVIpLm91dGVySGVpZ2h0KCksXG4gICAgICB9XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB7XG4gICAgICAgIGJvdHRvbTogTWF0aC5hYnMoKGhlaWdodHMud2luZG93ICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSAtIGhlaWdodHMuc2Nyb2xsKSxcbiAgICAgICAgdG9wOiAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICB9XG5cbiAgICAgIGxldCBuYXZiYXJGaXhlZCA9IGZhbHNlO1xuICAgICAgbGV0IGZvb3RlckZpeGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkxBWU9VVF9GSVhFRCkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX1NNX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX01EX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX0xHX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX1hMX0ZJWEVEKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5IRUFERVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIG5hdmJhckZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1NNX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX01EX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0xHX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1hMX0ZJWEVEKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5GT09URVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIGZvb3RlckZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb25zLnRvcCA9PT0gMCAmJiBwb3NpdGlvbnMuYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcsICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyAtIChoZWlnaHRzLmhlYWRlciArIGhlaWdodHMuZm9vdGVyKSlcbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbnMuYm90dG9tIDw9IGhlaWdodHMuZm9vdGVyKSB7XG4gICAgICAgICAgaWYgKGZvb3RlckZpeGVkID09PSBmYWxzZSkgeyAgXG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuY3NzKCdib3R0b20nLCBoZWlnaHRzLmZvb3RlciAtIHBvc2l0aW9ucy5ib3R0b20pO1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnLCAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cgLSAoaGVpZ2h0cy5mb290ZXIgLSBwb3NpdGlvbnMuYm90dG9tKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbnMudG9wIDw9IGhlaWdodHMuaGVhZGVyKSB7XG4gICAgICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIgLSBwb3NpdGlvbnMudG9wKTtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJywgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9DT05URU5UKS5jc3MoJ2hlaWdodCcsIGhlaWdodHMud2luZG93IC0gKGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcCkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgMCk7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcsICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIF9maXhIZWlnaHQoKSB7XG4gICAgICBjb25zdCBoZWlnaHRzID0ge1xuICAgICAgICB3aW5kb3c6ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAgICAgaGVhZGVyOiAkKFNlbGVjdG9yLkhFQURFUikub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgZm9vdGVyOiAkKFNlbGVjdG9yLkZPT1RFUikub3V0ZXJIZWlnaHQoKSxcbiAgICAgIH1cblxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgICBsZXQgc2lkZWJhckhlaWdodCA9IGhlaWdodHMud2luZG93IC0gaGVpZ2h0cy5oZWFkZXI7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1NNX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX01EX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0xHX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1hMX0ZJWEVEKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5GT09URVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIHNpZGViYXJIZWlnaHQgPSBoZWlnaHRzLndpbmRvdyAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBzaWRlYmFySGVpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLm92ZXJsYXlTY3JvbGxiYXJzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgICA6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJUaGVtZSxcbiAgICAgICAgICAgIHNpemVBdXRvQ2FwYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxiYXJzIDoge1xuICAgICAgICAgICAgICBhdXRvSGlkZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhckF1dG9IaWRlLCBcbiAgICAgICAgICAgICAgY2xpY2tTY3JvbGxpbmcgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShvcGVyYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb250cm9sU2lkZWJhcih0aGlzLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVtvcGVyYXRpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtvcGVyYXRpb259IGlzIG5vdCBhIGZ1bmN0aW9uYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxuICB9KVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbnRyb2xTaWRlYmFyXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ29udHJvbFNpZGViYXJcbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFNpZGViYXJcbiAgXG4iLCIvKipcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQWRtaW5MVEUgTGF5b3V0LmpzXHJcbiAqIExpY2Vuc2UgTUlUXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKCgkKSA9PiB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnRzXHJcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAqL1xyXG5cclxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnTGF5b3V0J1xyXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUubGF5b3V0J1xyXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXHJcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxyXG5cclxuICBjb25zdCBFdmVudCA9IHtcclxuICAgIFNJREVCQVI6ICdzaWRlYmFyJ1xyXG4gIH1cclxuXHJcbiAgY29uc3QgU2VsZWN0b3IgPSB7XHJcbiAgICBIRUFERVIgICAgICAgICA6ICcubWFpbi1oZWFkZXInLFxyXG4gICAgTUFJTl9TSURFQkFSICAgOiAnLm1haW4tc2lkZWJhcicsXHJcbiAgICBTSURFQkFSICAgICAgICA6ICcubWFpbi1zaWRlYmFyIC5zaWRlYmFyJyxcclxuICAgIENPTlRFTlQgICAgICAgIDogJy5jb250ZW50LXdyYXBwZXInLFxyXG4gICAgQlJBTkQgICAgICAgICAgOiAnLmJyYW5kLWxpbmsnLFxyXG4gICAgQ09OVEVOVF9IRUFERVIgOiAnLmNvbnRlbnQtaGVhZGVyJyxcclxuICAgIFdSQVBQRVIgICAgICAgIDogJy53cmFwcGVyJyxcclxuICAgIENPTlRST0xfU0lERUJBUjogJy5jb250cm9sLXNpZGViYXInLFxyXG4gICAgQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQ6ICcuY29udHJvbC1zaWRlYmFyLWNvbnRlbnQnLFxyXG4gICAgQ09OVFJPTF9TSURFQkFSX0JUTjogJ1tkYXRhLXdpZGdldD1cImNvbnRyb2wtc2lkZWJhclwiXScsXHJcbiAgICBMQVlPVVRfRklYRUQgICA6ICcubGF5b3V0LWZpeGVkJyxcclxuICAgIEZPT1RFUiAgICAgICAgIDogJy5tYWluLWZvb3RlcicsXHJcbiAgICBQVVNITUVOVV9CVE4gICA6ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXScsXHJcbiAgICBMT0dJTl9CT1ggICAgICA6ICcubG9naW4tYm94JyxcclxuICAgIFJFR0lTVEVSX0JPWCAgIDogJy5yZWdpc3Rlci1ib3gnXHJcbiAgfVxyXG5cclxuICBjb25zdCBDbGFzc05hbWUgPSB7XHJcbiAgICBIT0xEICAgICAgICAgICA6ICdob2xkLXRyYW5zaXRpb24nLFxyXG4gICAgU0lERUJBUiAgICAgICAgOiAnbWFpbi1zaWRlYmFyJyxcclxuICAgIENPTlRFTlRfRklYRUQgIDogJ2NvbnRlbnQtZml4ZWQnLFxyXG4gICAgU0lERUJBUl9GT0NVU0VEOiAnc2lkZWJhci1mb2N1c2VkJyxcclxuICAgIExBWU9VVF9GSVhFRCAgIDogJ2xheW91dC1maXhlZCcsXHJcbiAgICBOQVZCQVJfRklYRUQgICA6ICdsYXlvdXQtbmF2YmFyLWZpeGVkJyxcclxuICAgIEZPT1RFUl9GSVhFRCAgIDogJ2xheW91dC1mb290ZXItZml4ZWQnLFxyXG4gICAgTE9HSU5fUEFHRSAgICAgOiAnbG9naW4tcGFnZScsXHJcbiAgICBSRUdJU1RFUl9QQUdFICA6ICdyZWdpc3Rlci1wYWdlJyxcclxuICAgIENPTlRST0xfU0lERUJBUl9TTElERV9PUEVOOiAnY29udHJvbC1zaWRlYmFyLXNsaWRlLW9wZW4nLFxyXG4gICAgQ09OVFJPTF9TSURFQkFSX09QRU46ICdjb250cm9sLXNpZGViYXItb3BlbicsXHJcbiAgfVxyXG5cclxuICBjb25zdCBEZWZhdWx0ID0ge1xyXG4gICAgc2Nyb2xsYmFyVGhlbWUgOiAnb3MtdGhlbWUtbGlnaHQnLFxyXG4gICAgc2Nyb2xsYmFyQXV0b0hpZGU6ICdsJyxcclxuICAgIHBhbmVsQXV0b0hlaWdodDogdHJ1ZSxcclxuICAgIGxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0OiB0cnVlLFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxyXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgKi9cclxuXHJcbiAgY2xhc3MgTGF5b3V0IHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xyXG4gICAgICB0aGlzLl9jb25maWcgID0gY29uZmlnXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XHJcblxyXG4gICAgICB0aGlzLl9pbml0KClcclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWNcclxuXHJcbiAgICBmaXhMYXlvdXRIZWlnaHQoZXh0cmEgPSBudWxsKSB7XHJcbiAgICAgIGxldCBjb250cm9sX3NpZGViYXIgPSAwXHJcblxyXG4gICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfU0xJREVfT1BFTikgfHwgJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfT1BFTikgfHwgZXh0cmEgPT0gJ2NvbnRyb2xfc2lkZWJhcicpIHtcclxuICAgICAgICBjb250cm9sX3NpZGViYXIgPSAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9DT05URU5UKS5oZWlnaHQoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBoZWlnaHRzID0ge1xyXG4gICAgICAgIHdpbmRvdzogJCh3aW5kb3cpLmhlaWdodCgpLFxyXG4gICAgICAgIGhlYWRlcjogJChTZWxlY3Rvci5IRUFERVIpLmxlbmd0aCAhPT0gMCA/ICQoU2VsZWN0b3IuSEVBREVSKS5vdXRlckhlaWdodCgpIDogMCxcclxuICAgICAgICBmb290ZXI6ICQoU2VsZWN0b3IuRk9PVEVSKS5sZW5ndGggIT09IDAgPyAkKFNlbGVjdG9yLkZPT1RFUikub3V0ZXJIZWlnaHQoKSA6IDAsXHJcbiAgICAgICAgc2lkZWJhcjogJChTZWxlY3Rvci5TSURFQkFSKS5sZW5ndGggIT09IDAgPyAkKFNlbGVjdG9yLlNJREVCQVIpLmhlaWdodCgpIDogMCxcclxuICAgICAgICBjb250cm9sX3NpZGViYXI6IGNvbnRyb2xfc2lkZWJhcixcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbWF4ID0gdGhpcy5fbWF4KGhlaWdodHMpXHJcbiAgICAgIGxldCBvZmZzZXQgPSB0aGlzLl9jb25maWcucGFuZWxBdXRvSGVpZ2h0XHJcblxyXG4gICAgICBpZiAob2Zmc2V0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgb2Zmc2V0ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG9mZnNldCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAobWF4ID09IGhlaWdodHMuY29udHJvbF9zaWRlYmFyKSB7XHJcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIChtYXggKyBvZmZzZXQpKVxyXG4gICAgICAgIH0gZWxzZSBpZiAobWF4ID09IGhlaWdodHMud2luZG93KSB7XHJcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIChtYXggKyBvZmZzZXQpIC0gaGVpZ2h0cy5oZWFkZXIgLSBoZWlnaHRzLmZvb3RlcilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnLCAobWF4ICsgb2Zmc2V0KSAtIGhlaWdodHMuaGVhZGVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5faXNGb290ZXJGaXhlZCgpKSB7XHJcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIHBhcnNlRmxvYXQoJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnKSkgKyBoZWlnaHRzLmZvb3Rlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKENsYXNzTmFtZS5MQVlPVVRfRklYRUQpKSB7XHJcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVEVOVCkuY3NzKCdtaW4taGVpZ2h0JywgKG1heCArIG9mZnNldCkgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgJChTZWxlY3Rvci5TSURFQkFSKS5vdmVybGF5U2Nyb2xsYmFycyh7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgICA6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJUaGVtZSxcclxuICAgICAgICAgICAgc2l6ZUF1dG9DYXBhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsYmFycyA6IHtcclxuICAgICAgICAgICAgICBhdXRvSGlkZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhckF1dG9IaWRlLCBcclxuICAgICAgICAgICAgICBjbGlja1Njcm9sbGluZyA6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXhMb2dpblJlZ2lzdGVySGVpZ2h0KCkge1xyXG4gICAgICBpZiAoJChTZWxlY3Rvci5MT0dJTl9CT1ggKyAnLCAnICsgU2VsZWN0b3IuUkVHSVNURVJfQk9YKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAkKCdib2R5LCBodG1sJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpXHJcbiAgICAgIH0gZWxzZSBpZiAoJChTZWxlY3Rvci5MT0dJTl9CT1ggKyAnLCAnICsgU2VsZWN0b3IuUkVHSVNURVJfQk9YKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBsZXQgYm94X2hlaWdodCA9ICQoU2VsZWN0b3IuTE9HSU5fQk9YICsgJywgJyArIFNlbGVjdG9yLlJFR0lTVEVSX0JPWCkuaGVpZ2h0KClcclxuXHJcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5jc3MoJ21pbi1oZWlnaHQnKSAhPT0gYm94X2hlaWdodCkge1xyXG4gICAgICAgICAgJCgnYm9keScpLmNzcygnbWluLWhlaWdodCcsIGJveF9oZWlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJpdmF0ZVxyXG5cclxuICAgIF9pbml0KCkge1xyXG4gICAgICAvLyBBY3RpdmF0ZSBsYXlvdXQgaGVpZ2h0IHdhdGNoZXJcclxuICAgICAgdGhpcy5maXhMYXlvdXRIZWlnaHQoKVxyXG5cclxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5sb2dpblJlZ2lzdGVyQXV0b0hlaWdodCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuZml4TG9naW5SZWdpc3RlckhlaWdodCgpXHJcbiAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQpKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5maXhMb2dpblJlZ2lzdGVySGVpZ2h0LCB0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAkKFNlbGVjdG9yLlNJREVCQVIpXHJcbiAgICAgICAgLm9uKCdjb2xsYXBzZWQubHRlLnRyZWV2aWV3IGV4cGFuZGVkLmx0ZS50cmVldmlldycsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgJChTZWxlY3Rvci5QVVNITUVOVV9CVE4pXHJcbiAgICAgICAgLm9uKCdjb2xsYXBzZWQubHRlLnB1c2htZW51IHNob3duLmx0ZS5wdXNobWVudScsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQlROKVxyXG4gICAgICAgIC5vbignY29sbGFwc2VkLmx0ZS5jb250cm9sc2lkZWJhcicsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignZXhwYW5kZWQubHRlLmNvbnRyb2xzaWRlYmFyJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maXhMYXlvdXRIZWlnaHQoJ2NvbnRyb2xfc2lkZWJhcicpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICQod2luZG93KS5yZXNpemUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KClcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoJ2JvZHkuaG9sZC10cmFuc2l0aW9uJykucmVtb3ZlQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpXHJcblxyXG4gICAgICB9LCA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgX21heChudW1iZXJzKSB7XHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBudW1iZXIgaW4gYSBsaXN0XHJcbiAgICAgIGxldCBtYXggPSAwXHJcblxyXG4gICAgICBPYmplY3Qua2V5cyhudW1iZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBpZiAobnVtYmVyc1trZXldID4gbWF4KSB7XHJcbiAgICAgICAgICBtYXggPSBudW1iZXJzW2tleV1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gbWF4XHJcbiAgICB9XHJcblxyXG4gICAgX2lzRm9vdGVyRml4ZWQoKSB7XHJcbiAgICAgIHJldHVybiAkKCcubWFpbi1mb290ZXInKS5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RhdGljXHJcblxyXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnID0gJycpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXHJcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXHJcblxyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgZGF0YSA9IG5ldyBMYXlvdXQoJCh0aGlzKSwgX29wdGlvbnMpXHJcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcgfHwgY29uZmlnID09PSAnJykge1xyXG4gICAgICAgICAgZGF0YVsnX2luaXQnXSgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcgPT09ICdmaXhMYXlvdXRIZWlnaHQnIHx8IGNvbmZpZyA9PT0gJ2ZpeExvZ2luUmVnaXN0ZXJIZWlnaHQnKSB7XHJcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgQVBJXHJcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAqL1xyXG5cclxuICAkKHdpbmRvdykub24oJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBMYXlvdXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoJ2JvZHknKSlcclxuICB9KVxyXG5cclxuICAkKFNlbGVjdG9yLlNJREVCQVIgKyAnIGEnKS5vbignZm9jdXNpbicsICgpID0+IHtcclxuICAgICQoU2VsZWN0b3IuTUFJTl9TSURFQkFSKS5hZGRDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9GT0NVU0VEKTtcclxuICB9KVxyXG5cclxuICAkKFNlbGVjdG9yLlNJREVCQVIgKyAnIGEnKS5vbignZm9jdXNvdXQnLCAoKSA9PiB7XHJcbiAgICAkKFNlbGVjdG9yLk1BSU5fU0lERUJBUikucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNJREVCQVJfRk9DVVNFRCk7XHJcbiAgfSlcclxuXHJcbiAgLyoqXHJcbiAgICogalF1ZXJ5IEFQSVxyXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgKi9cclxuXHJcbiAgJC5mbltOQU1FXSA9IExheW91dC5falF1ZXJ5SW50ZXJmYWNlXHJcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IExheW91dFxyXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcclxuICAgIHJldHVybiBMYXlvdXQuX2pRdWVyeUludGVyZmFjZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIExheW91dFxyXG59KShqUXVlcnkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgUHVzaE1lbnUuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFB1c2hNZW51ID0gKCgkKSA9PiB7XG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnUHVzaE1lbnUnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUucHVzaG1lbnUnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBDT0xMQVBTRUQ6IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGF1dG9Db2xsYXBzZVNpemU6IDk5MixcbiAgICBlbmFibGVSZW1lbWJlcjogZmFsc2UsXG4gICAgbm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQ6IHRydWVcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIFRPR0dMRV9CVVRUT046ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXScsXG4gICAgU0lERUJBUl9NSU5JOiAnLnNpZGViYXItbWluaScsXG4gICAgU0lERUJBUl9DT0xMQVBTRUQ6ICcuc2lkZWJhci1jb2xsYXBzZScsXG4gICAgQk9EWTogJ2JvZHknLFxuICAgIE9WRVJMQVk6ICcjc2lkZWJhci1vdmVybGF5JyxcbiAgICBXUkFQUEVSOiAnLndyYXBwZXInXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ09MTEFQU0VEOiAnc2lkZWJhci1jb2xsYXBzZScsXG4gICAgT1BFTjogJ3NpZGViYXItb3BlbicsXG4gICAgQ0xPU0VEOiAnc2lkZWJhci1jbG9zZWQnXG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIFB1c2hNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgICAgdGhpcy5fb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBvcHRpb25zKVxuXG4gICAgICBpZiAoISQoU2VsZWN0b3IuT1ZFUkxBWSkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2FkZE92ZXJsYXkoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcblxuICAgIGV4cGFuZCgpIHtcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJChTZWxlY3Rvci5CT0RZKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ0xPU0VEKVxuXG4gICAgICBpZih0aGlzLl9vcHRpb25zLmVuYWJsZVJlbWVtYmVyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGByZW1lbWJlciR7RVZFTlRfS0VZfWAsIENsYXNzTmFtZS5PUEVOKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTilcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGNvbGxhcHNlKCkge1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICAgJChTZWxlY3Rvci5CT0RZKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNMT1NFRClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkKFNlbGVjdG9yLkJPRFkpLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG5cbiAgICAgIGlmKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJlbWVtYmVyJHtFVkVOVF9LRVl9YCwgQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sbGFwc2VkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNPTExBUFNFRClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihjb2xsYXBzZWRFdmVudClcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAoISQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmV4cGFuZCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXV0b0NvbGxhcHNlKHJlc2l6ZSA9IGZhbHNlKSB7XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSB0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgICBpZiAoISQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzaXplID09IHRydWUpIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5CT0RZKS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTikpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgICAgfSBlbHNlIGlmKCQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNMT1NFRCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1lbWJlcigpIHtcbiAgICAgIGlmKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgbGV0IHRvZ2dsZVN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHJlbWVtYmVyJHtFVkVOVF9LRVl9YClcbiAgICAgICAgaWYgKHRvZ2dsZVN0YXRlID09IENsYXNzTmFtZS5DT0xMQVBTRUQpe1xuICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLm5vVHJhbnNpdGlvbkFmdGVyUmVsb2FkKSB7XG4gICAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKCdob2xkLXRyYW5zaXRpb24nKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZCkge1xuICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpLmRlbGF5KDUwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICAgICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuXG4gICAgX2luaXQoKSB7XG4gICAgICB0aGlzLnJlbWVtYmVyKClcbiAgICAgIHRoaXMuYXV0b0NvbGxhcHNlKClcblxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0b0NvbGxhcHNlKHRydWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9hZGRPdmVybGF5KCkge1xuICAgICAgY29uc3Qgb3ZlcmxheSA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICAgIGlkOiAnc2lkZWJhci1vdmVybGF5J1xuICAgICAgfSlcblxuICAgICAgb3ZlcmxheS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgICAgfSlcblxuICAgICAgJChTZWxlY3Rvci5XUkFQUEVSKS5hcHBlbmQob3ZlcmxheSlcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFB1c2hNZW51KHRoaXMsIF9vcHRpb25zKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2NvbGxhcHNlfGV4cGFuZHx0b2dnbGUvKSkge1xuICAgICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuVE9HR0xFX0JVVFRPTiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcblxuICAgIGlmICgkKGJ1dHRvbikuZGF0YSgnd2lkZ2V0JykgIT09ICdwdXNobWVudScpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yLlRPR0dMRV9CVVRUT04pXG4gICAgfVxuXG4gICAgUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYnV0dG9uKSwgJ3RvZ2dsZScpXG4gIH0pXG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKFNlbGVjdG9yLlRPR0dMRV9CVVRUT04pKVxuICB9KVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFB1c2hNZW51XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gUHVzaE1lbnVcbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgUHVzaE1lbnVcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIFRyZWV2aWV3LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUcmVldmlldyA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ1RyZWV2aWV3J1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLnRyZWV2aWV3J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgU0VMRUNURUQgICAgIDogYHNlbGVjdGVkJHtFVkVOVF9LRVl9YCxcbiAgICBFWFBBTkRFRCAgICAgOiBgZXhwYW5kZWQke0VWRU5UX0tFWX1gLFxuICAgIENPTExBUFNFRCAgICA6IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gLFxuICAgIExPQURfREFUQV9BUEk6IGBsb2FkJHtFVkVOVF9LRVl9YFxuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgTEkgICAgICAgICAgIDogJy5uYXYtaXRlbScsXG4gICAgTElOSyAgICAgICAgIDogJy5uYXYtbGluaycsXG4gICAgVFJFRVZJRVdfTUVOVTogJy5uYXYtdHJlZXZpZXcnLFxuICAgIE9QRU4gICAgICAgICA6ICcubWVudS1vcGVuJyxcbiAgICBEQVRBX1dJREdFVCAgOiAnW2RhdGEtd2lkZ2V0PVwidHJlZXZpZXdcIl0nXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgTEkgICAgICAgICAgICAgICA6ICduYXYtaXRlbScsXG4gICAgTElOSyAgICAgICAgICAgICA6ICduYXYtbGluaycsXG4gICAgVFJFRVZJRVdfTUVOVSAgICA6ICduYXYtdHJlZXZpZXcnLFxuICAgIE9QRU4gICAgICAgICAgICAgOiAnbWVudS1vcGVuJyxcbiAgICBTSURFQkFSX0NPTExBUFNFRDogJ3NpZGViYXItY29sbGFwc2UnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIHRyaWdnZXIgICAgICAgICAgICAgIDogYCR7U2VsZWN0b3IuREFUQV9XSURHRVR9ICR7U2VsZWN0b3IuTElOS31gLFxuICAgIGFuaW1hdGlvblNwZWVkICAgICAgIDogMzAwLFxuICAgIGFjY29yZGlvbiAgICAgICAgICAgIDogdHJ1ZSxcbiAgICBleHBhbmRTaWRlYmFyICAgICAgICA6IGZhbHNlLFxuICAgIHNpZGViYXJCdXR0b25TZWxlY3RvcjogJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJ1xuICB9XG5cbiAgLyoqXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cbiAgY2xhc3MgVHJlZXZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnICA9IGNvbmZpZ1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLl9zZXR1cExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgZXhwYW5kKHRyZWV2aWV3TWVudSwgcGFyZW50TGkpIHtcbiAgICAgIGNvbnN0IGV4cGFuZGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkVYUEFOREVEKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmFjY29yZGlvbikge1xuICAgICAgICBjb25zdCBvcGVuTWVudUxpICAgPSBwYXJlbnRMaS5zaWJsaW5ncyhTZWxlY3Rvci5PUEVOKS5maXJzdCgpXG4gICAgICAgIGNvbnN0IG9wZW5UcmVldmlldyA9IG9wZW5NZW51TGkuZmluZChTZWxlY3Rvci5UUkVFVklFV19NRU5VKS5maXJzdCgpXG4gICAgICAgIHRoaXMuY29sbGFwc2Uob3BlblRyZWV2aWV3LCBvcGVuTWVudUxpKVxuICAgICAgfVxuXG4gICAgICB0cmVldmlld01lbnUuc3RvcCgpLnNsaWRlRG93bih0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsICgpID0+IHtcbiAgICAgICAgcGFyZW50TGkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihleHBhbmRlZEV2ZW50KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5leHBhbmRTaWRlYmFyKSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZFNpZGViYXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxhcHNlKHRyZWV2aWV3TWVudSwgcGFyZW50TGkpIHtcbiAgICAgIGNvbnN0IGNvbGxhcHNlZEV2ZW50ID0gJC5FdmVudChFdmVudC5DT0xMQVBTRUQpXG5cbiAgICAgIHRyZWV2aWV3TWVudS5zdG9wKCkuc2xpZGVVcCh0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsICgpID0+IHtcbiAgICAgICAgcGFyZW50TGkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihjb2xsYXBzZWRFdmVudClcbiAgICAgICAgdHJlZXZpZXdNZW51LmZpbmQoYCR7U2VsZWN0b3IuT1BFTn0gPiAke1NlbGVjdG9yLlRSRUVWSUVXX01FTlV9YCkuc2xpZGVVcCgpXG4gICAgICAgIHRyZWV2aWV3TWVudS5maW5kKFNlbGVjdG9yLk9QRU4pLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQpIHtcblxuICAgICAgY29uc3QgJHJlbGF0aXZlVGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgY29uc3QgJHBhcmVudCA9ICRyZWxhdGl2ZVRhcmdldC5wYXJlbnQoKVxuXG4gICAgICBsZXQgdHJlZXZpZXdNZW51ID0gJHBhcmVudC5maW5kKCc+ICcgKyBTZWxlY3Rvci5UUkVFVklFV19NRU5VKVxuXG4gICAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTZWxlY3Rvci5UUkVFVklFV19NRU5VKSkge1xuXG4gICAgICAgIGlmICghJHBhcmVudC5pcyhTZWxlY3Rvci5MSSkpIHtcbiAgICAgICAgICB0cmVldmlld01lbnUgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoJz4gJyArIFNlbGVjdG9yLlRSRUVWSUVXX01FTlUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTZWxlY3Rvci5UUkVFVklFV19NRU5VKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgY29uc3QgcGFyZW50TGkgPSAkcmVsYXRpdmVUYXJnZXQucGFyZW50cyhTZWxlY3Rvci5MSSkuZmlyc3QoKVxuICAgICAgY29uc3QgaXNPcGVuICAgPSBwYXJlbnRMaS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTilcblxuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICB0aGlzLmNvbGxhcHNlKCQodHJlZXZpZXdNZW51KSwgcGFyZW50TGkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmV4cGFuZCgkKHRyZWV2aWV3TWVudSksIHBhcmVudExpKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9zZXR1cExpc3RlbmVycygpIHtcbiAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMuX2NvbmZpZy50cmlnZ2VyLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGUoZXZlbnQpXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9leHBhbmRTaWRlYmFyKCkge1xuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9DT0xMQVBTRUQpKSB7XG4gICAgICAgICQodGhpcy5fY29uZmlnLnNpZGViYXJCdXR0b25TZWxlY3RvcikuUHVzaE1lbnUoJ2V4cGFuZCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUcmVldmlldygkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gICAgJChTZWxlY3Rvci5EQVRBX1dJREdFVCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2luaXQnKVxuICAgIH0pXG4gIH0pXG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gVHJlZXZpZXcuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVHJlZXZpZXdcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBUcmVldmlld1xufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBUcmVldmlld1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgRGlyZWN0Q2hhdC5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgRGlyZWN0Q2hhdCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0RpcmVjdENoYXQnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUuZGlyZWN0Y2hhdCdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIFRPR0dMRUQ6IGB0b2dnbGVke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXdpZGdldD1cImNoYXQtcGFuZS10b2dnbGVcIl0nLFxuICAgIERJUkVDVF9DSEFUOiAnLmRpcmVjdC1jaGF0J1xuICB9O1xuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBESVJFQ1RfQ0hBVF9PUEVOOiAnZGlyZWN0LWNoYXQtY29udGFjdHMtb3BlbidcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIERpcmVjdENoYXQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnBhcmVudHMoU2VsZWN0b3IuRElSRUNUX0NIQVQpLmZpcnN0KCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkRJUkVDVF9DSEFUX09QRU4pO1xuXG4gICAgICBjb25zdCB0b2dnbGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlRPR0dMRUQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIodG9nZ2xlZEV2ZW50KVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERpcmVjdENoYXQoJCh0aGlzKSlcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIERpcmVjdENoYXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gRGlyZWN0Q2hhdC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEaXJlY3RDaGF0XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBEaXJlY3RDaGF0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdENoYXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIFRvZG9MaXN0LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUb2RvTGlzdCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ1RvZG9MaXN0J1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLnRvZG9saXN0J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS13aWRnZXQ9XCJ0b2RvLWxpc3RcIl0nXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgVE9ET19MSVNUX0RPTkU6ICdkb25lJ1xuICB9XG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBvbkNoZWNrOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSxcbiAgICBvblVuQ2hlY2s6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyAgPSBjb25maWdcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuXG4gICAgdG9nZ2xlKGl0ZW0pIHtcbiAgICAgIGl0ZW0ucGFyZW50cygnbGknKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuVE9ET19MSVNUX0RPTkUpO1xuICAgICAgaWYgKCEgJChpdGVtKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgdGhpcy51bkNoZWNrKCQoaXRlbSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2soaXRlbSk7XG4gICAgfVxuXG4gICAgY2hlY2sgKGl0ZW0pIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5vbkNoZWNrLmNhbGwoaXRlbSk7XG4gICAgfVxuXG4gICAgdW5DaGVjayAoaXRlbSkge1xuICAgICAgdGhpcy5fY29uZmlnLm9uVW5DaGVjay5jYWxsKGl0ZW0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9pbml0KCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAkKFNlbGVjdG9yLkRBVEFfVE9HR0xFKS5maW5kKCdpbnB1dDpjaGVja2JveDpjaGVja2VkJykucGFyZW50cygnbGknKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuVE9ET19MSVNUX0RPTkUpXG4gICAgICAkKFNlbGVjdG9yLkRBVEFfVE9HR0xFKS5vbignY2hhbmdlJywgJ2lucHV0OmNoZWNrYm94JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoYXQudG9nZ2xlKCQoZXZlbnQudGFyZ2V0KSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb2RvTGlzdCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcbiAgICBUb2RvTGlzdC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG4gIH0pXG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9kb0xpc3RcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIFRvZG9MaXN0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBDYXJkV2lkZ2V0LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDYXJkV2lkZ2V0ID0gKCgkKSA9PiB7XG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnQ2FyZFdpZGdldCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2x0ZS5jYXJkd2lkZ2V0J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgRVhQQU5ERUQ6IGBleHBhbmRlZCR7RVZFTlRfS0VZfWAsXG4gICAgQ09MTEFQU0VEOiBgY29sbGFwc2VkJHtFVkVOVF9LRVl9YCxcbiAgICBNQVhJTUlaRUQ6IGBtYXhpbWl6ZWQke0VWRU5UX0tFWX1gLFxuICAgIE1JTklNSVpFRDogYG1pbmltaXplZCR7RVZFTlRfS0VZfWAsXG4gICAgUkVNT1ZFRDogYHJlbW92ZWQke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ0FSRDogJ2NhcmQnLFxuICAgIENPTExBUFNFRDogJ2NvbGxhcHNlZC1jYXJkJyxcbiAgICBDT0xMQVBTSU5HOiAnY29sbGFwc2luZy1jYXJkJyxcbiAgICBFWFBBTkRJTkc6ICdleHBhbmRpbmctY2FyZCcsXG4gICAgV0FTX0NPTExBUFNFRDogJ3dhcy1jb2xsYXBzZWQnLFxuICAgIE1BWElNSVpFRDogJ21heGltaXplZC1jYXJkJyxcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERBVEFfUkVNT1ZFOiAnW2RhdGEtY2FyZC13aWRnZXQ9XCJyZW1vdmVcIl0nLFxuICAgIERBVEFfQ09MTEFQU0U6ICdbZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCJdJyxcbiAgICBEQVRBX01BWElNSVpFOiAnW2RhdGEtY2FyZC13aWRnZXQ9XCJtYXhpbWl6ZVwiXScsXG4gICAgQ0FSRDogYC4ke0NsYXNzTmFtZS5DQVJEfWAsXG4gICAgQ0FSRF9IRUFERVI6ICcuY2FyZC1oZWFkZXInLFxuICAgIENBUkRfQk9EWTogJy5jYXJkLWJvZHknLFxuICAgIENBUkRfRk9PVEVSOiAnLmNhcmQtZm9vdGVyJyxcbiAgICBDT0xMQVBTRUQ6IGAuJHtDbGFzc05hbWUuQ09MTEFQU0VEfWAsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGFuaW1hdGlvblNwZWVkOiAnbm9ybWFsJyxcbiAgICBjb2xsYXBzZVRyaWdnZXI6IFNlbGVjdG9yLkRBVEFfQ09MTEFQU0UsXG4gICAgcmVtb3ZlVHJpZ2dlcjogU2VsZWN0b3IuREFUQV9SRU1PVkUsXG4gICAgbWF4aW1pemVUcmlnZ2VyOiBTZWxlY3Rvci5EQVRBX01BWElNSVpFLFxuICAgIGNvbGxhcHNlSWNvbjogJ2ZhLW1pbnVzJyxcbiAgICBleHBhbmRJY29uOiAnZmEtcGx1cycsXG4gICAgbWF4aW1pemVJY29uOiAnZmEtZXhwYW5kJyxcbiAgICBtaW5pbWl6ZUljb246ICdmYS1jb21wcmVzcycsXG4gIH1cblxuICBjbGFzcyBDYXJkV2lkZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzZXR0aW5ncykge1xuICAgICAgdGhpcy5fZWxlbWVudCAgPSBlbGVtZW50XG4gICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50LnBhcmVudHMoU2VsZWN0b3IuQ0FSRCkuZmlyc3QoKVxuXG4gICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhDbGFzc05hbWUuQ0FSRCkpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBzZXR0aW5ncylcbiAgICB9XG5cbiAgICBjb2xsYXBzZSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORykuY2hpbGRyZW4oYCR7U2VsZWN0b3IuQ0FSRF9CT0RZfSwgJHtTZWxlY3Rvci5DQVJEX0ZPT1RFUn1gKVxuICAgICAgICAuc2xpZGVVcCh0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgfSlcblxuICAgICAgdGhpcy5fcGFyZW50LmZpbmQoJz4gJyArIFNlbGVjdG9yLkNBUkRfSEVBREVSICsgJyAnICsgdGhpcy5fc2V0dGluZ3MuY29sbGFwc2VUcmlnZ2VyICsgJyAuJyArIHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbilcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pXG4gICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pXG5cbiAgICAgIGNvbnN0IGNvbGxhcHNlZCA9ICQuRXZlbnQoRXZlbnQuQ09MTEFQU0VEKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoY29sbGFwc2VkLCB0aGlzLl9wYXJlbnQpXG4gICAgfVxuXG4gICAgZXhwYW5kKCkge1xuICAgICAgdGhpcy5fcGFyZW50LmFkZENsYXNzKENsYXNzTmFtZS5FWFBBTkRJTkcpLmNoaWxkcmVuKGAke1NlbGVjdG9yLkNBUkRfQk9EWX0sICR7U2VsZWN0b3IuQ0FSRF9GT09URVJ9YClcbiAgICAgICAgLnNsaWRlRG93bih0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRVhQQU5ESU5HKVxuICAgICAgICB9KVxuXG4gICAgICB0aGlzLl9wYXJlbnQuZmluZCgnPiAnICsgU2VsZWN0b3IuQ0FSRF9IRUFERVIgKyAnICcgKyB0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXIgKyAnIC4nICsgdGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbilcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbilcbiAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pXG5cbiAgICAgIGNvbnN0IGV4cGFuZGVkID0gJC5FdmVudChFdmVudC5FWFBBTkRFRClcblxuICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKGV4cGFuZGVkLCB0aGlzLl9wYXJlbnQpXG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgdGhpcy5fcGFyZW50LnNsaWRlVXAoKVxuXG4gICAgICBjb25zdCByZW1vdmVkID0gJC5FdmVudChFdmVudC5SRU1PVkVEKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIocmVtb3ZlZCwgdGhpcy5fcGFyZW50KVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wYXJlbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkpIHtcbiAgICAgICAgdGhpcy5leHBhbmQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb2xsYXBzZSgpXG4gICAgfVxuICAgIFxuICAgIG1heGltaXplKCkge1xuICAgICAgdGhpcy5fcGFyZW50LmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyICsgJyAuJyArIHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbilcbiAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICAgIHRoaXMuX3BhcmVudC5jc3Moe1xuICAgICAgICAnaGVpZ2h0JzogdGhpcy5fcGFyZW50LmhlaWdodCgpLFxuICAgICAgICAnd2lkdGgnOiB0aGlzLl9wYXJlbnQud2lkdGgoKSxcbiAgICAgICAgJ3RyYW5zaXRpb24nOiAnYWxsIC4xNXMnXG4gICAgICB9KS5kZWxheSgxNTApLnF1ZXVlKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRClcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKENsYXNzTmFtZS5NQVhJTUlaRUQpXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhDbGFzc05hbWUuV0FTX0NPTExBUFNFRClcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgfSlcblxuICAgICAgY29uc3QgbWF4aW1pemVkID0gJC5FdmVudChFdmVudC5NQVhJTUlaRUQpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcihtYXhpbWl6ZWQsIHRoaXMuX3BhcmVudClcbiAgICB9XG5cbiAgICBtaW5pbWl6ZSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlciArICcgLicgKyB0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pXG4gICAgICAgIC5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZUljb24pXG4gICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pXG4gICAgICB0aGlzLl9wYXJlbnQuY3NzKCdjc3NUZXh0JywgJ2hlaWdodDonICsgdGhpcy5fcGFyZW50WzBdLnN0eWxlLmhlaWdodCArICcgIWltcG9ydGFudDsnICtcbiAgICAgICAgJ3dpZHRoOicgKyB0aGlzLl9wYXJlbnRbMF0uc3R5bGUud2lkdGggKyAnICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246IGFsbCAuMTVzOydcbiAgICAgICkuZGVsYXkoMTApLnF1ZXVlKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRClcbiAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5NQVhJTUlaRUQpXG4gICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAnaGVpZ2h0JzogJ2luaGVyaXQnLFxuICAgICAgICAgICd3aWR0aCc6ICdpbmhlcml0J1xuICAgICAgICB9KVxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhDbGFzc05hbWUuV0FTX0NPTExBUFNFRCkpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5XQVNfQ09MTEFQU0VEKVxuICAgICAgICB9XG4gICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBNSU5JTUlaRUQgPSAkLkV2ZW50KEV2ZW50Lk1JTklNSVpFRClcblxuICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKE1JTklNSVpFRCwgdGhpcy5fcGFyZW50KVxuICAgIH1cblxuICAgIHRvZ2dsZU1heGltaXplKCkge1xuICAgICAgaWYgKHRoaXMuX3BhcmVudC5oYXNDbGFzcyhDbGFzc05hbWUuTUFYSU1JWkVEKSkge1xuICAgICAgICB0aGlzLm1pbmltaXplKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMubWF4aW1pemUoKVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9pbml0KGNhcmQpIHtcbiAgICAgIHRoaXMuX3BhcmVudCA9IGNhcmRcblxuICAgICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcikuY2xpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICB9KVxuXG4gICAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlTWF4aW1pemUoKVxuICAgICAgfSlcblxuICAgICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLnJlbW92ZVRyaWdnZXIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2FyZFdpZGdldCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGRhdGE6IGNvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIGNvbmZpZy5tYXRjaCgvY29sbGFwc2V8ZXhwYW5kfHJlbW92ZXx0b2dnbGV8bWF4aW1pemV8bWluaW1pemV8dG9nZ2xlTWF4aW1pemUvKSkge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBkYXRhLl9pbml0KCQodGhpcykpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9DT0xMQVBTRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9SRU1PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdyZW1vdmUnKVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLkRBVEFfTUFYSU1JWkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGVNYXhpbWl6ZScpXG4gIH0pXG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJkV2lkZ2V0XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBDYXJkV2lkZ2V0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IENhcmRXaWRnZXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIENhcmRSZWZyZXNoLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDYXJkUmVmcmVzaCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0NhcmRSZWZyZXNoJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLmNhcmRyZWZyZXNoJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgTE9BREVEOiBgbG9hZGVkJHtFVkVOVF9LRVl9YCxcbiAgICBPVkVSTEFZX0FEREVEOiBgb3ZlcmxheS5hZGRlZCR7RVZFTlRfS0VZfWAsXG4gICAgT1ZFUkxBWV9SRU1PVkVEOiBgb3ZlcmxheS5yZW1vdmVkJHtFVkVOVF9LRVl9YCxcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBDQVJEOiAnY2FyZCcsXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBDQVJEOiBgLiR7Q2xhc3NOYW1lLkNBUkR9YCxcbiAgICBEQVRBX1JFRlJFU0g6ICdbZGF0YS1jYXJkLXdpZGdldD1cImNhcmQtcmVmcmVzaFwiXScsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIHNvdXJjZTogJycsXG4gICAgc291cmNlU2VsZWN0b3I6ICcnLFxuICAgIHBhcmFtczoge30sXG4gICAgdHJpZ2dlcjogU2VsZWN0b3IuREFUQV9SRUZSRVNILFxuICAgIGNvbnRlbnQ6ICcuY2FyZC1ib2R5JyxcbiAgICBsb2FkSW5Db250ZW50OiB0cnVlLFxuICAgIGxvYWRPbkluaXQ6IHRydWUsXG4gICAgcmVzcG9uc2VUeXBlOiAnJyxcbiAgICBvdmVybGF5VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxpIGNsYXNzPVwiZmFzIGZhLTJ4IGZhLXN5bmMtYWx0IGZhLXNwaW5cIj48L2k+PC9kaXY+JyxcbiAgICBvbkxvYWRTdGFydDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgb25Mb2FkRG9uZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgQ2FyZFJlZnJlc2gge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNldHRpbmdzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ICA9IGVsZW1lbnRcbiAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQucGFyZW50cyhTZWxlY3Rvci5DQVJEKS5maXJzdCgpXG4gICAgICB0aGlzLl9zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBzZXR0aW5ncylcbiAgICAgIHRoaXMuX292ZXJsYXkgPSAkKHRoaXMuX3NldHRpbmdzLm92ZXJsYXlUZW1wbGF0ZSlcblxuICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNBUkQpKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNvdXJjZSA9PT0gJycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb3VyY2UgdXJsIHdhcyBub3QgZGVmaW5lZC4gUGxlYXNlIHNwZWNpZnkgYSB1cmwgaW4geW91ciBDYXJkUmVmcmVzaCBzb3VyY2Ugb3B0aW9uLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICB0aGlzLl9hZGRPdmVybGF5KClcbiAgICAgIHRoaXMuX3NldHRpbmdzLm9uTG9hZFN0YXJ0LmNhbGwoJCh0aGlzKSlcblxuICAgICAgJC5nZXQodGhpcy5fc2V0dGluZ3Muc291cmNlLCB0aGlzLl9zZXR0aW5ncy5wYXJhbXMsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubG9hZEluQ29udGVudCkge1xuICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zb3VyY2VTZWxlY3RvciAhPSAnJykge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSAkKHJlc3BvbnNlKS5maW5kKHRoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yKS5odG1sKClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5jb250ZW50KS5odG1sKHJlc3BvbnNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3Mub25Mb2FkRG9uZS5jYWxsKCQodGhpcyksIHJlc3BvbnNlKVxuICAgICAgICB0aGlzLl9yZW1vdmVPdmVybGF5KCk7XG4gICAgICB9LmJpbmQodGhpcyksIHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlVHlwZSAhPT0gJycgJiYgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VUeXBlKVxuXG4gICAgICBjb25zdCBsb2FkZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuTE9BREVEKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGxvYWRlZEV2ZW50KVxuICAgIH1cblxuICAgIF9hZGRPdmVybGF5KCkge1xuICAgICAgdGhpcy5fcGFyZW50LmFwcGVuZCh0aGlzLl9vdmVybGF5KVxuXG4gICAgICBjb25zdCBvdmVybGF5QWRkZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuT1ZFUkxBWV9BRERFRClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihvdmVybGF5QWRkZWRFdmVudClcbiAgICB9O1xuXG4gICAgX3JlbW92ZU92ZXJsYXkoKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9vdmVybGF5KS5yZW1vdmUoKVxuXG4gICAgICBjb25zdCBvdmVybGF5UmVtb3ZlZEV2ZW50ID0gJC5FdmVudChFdmVudC5PVkVSTEFZX1JFTU9WRUQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIob3ZlcmxheVJlbW92ZWRFdmVudClcbiAgICB9O1xuXG5cbiAgICAvLyBQcml2YXRlXG5cbiAgICBfaW5pdChjYXJkKSB7XG4gICAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MudHJpZ2dlcikub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWQoKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxvYWRPbkluaXQpIHtcbiAgICAgICAgdGhpcy5sb2FkKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2FyZFJlZnJlc2goJCh0aGlzKSwgX29wdGlvbnMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBkYXRhOiBjb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2xvYWQvKSkge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YS5faW5pdCgkKHRoaXMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLkRBVEFfUkVGUkVTSCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdsb2FkJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChTZWxlY3Rvci5EQVRBX1JFRlJFU0gpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSlcbiAgICB9KVxuICB9KVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcmRSZWZyZXNoXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ2FyZFJlZnJlc2hcbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFJlZnJlc2hcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIERyb3Bkb3duLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBEcm9wZG93biA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0Ryb3Bkb3duJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLmRyb3Bkb3duJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgTkFWQkFSOiAnLm5hdmJhcicsXG4gICAgRFJPUERPV05fTUVOVTogJy5kcm9wZG93bi1tZW51JyxcbiAgICBEUk9QRE9XTl9NRU5VX0FDVElWRTogJy5kcm9wZG93bi1tZW51LnNob3cnLFxuICAgIERST1BET1dOX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBEUk9QRE9XTl9IT1ZFUjogJ2Ryb3Bkb3duLWhvdmVyJyxcbiAgICBEUk9QRE9XTl9SSUdIVDogJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICB9XG5cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIERyb3Bkb3duIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyAgPSBjb25maWdcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG5cbiAgICB0b2dnbGVTdWJtZW51KCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zaWJsaW5ncygpLnNob3coKS50b2dnbGVDbGFzcyhcInNob3dcIilcblxuICAgICAgaWYgKCEgdGhpcy5fZWxlbWVudC5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudHMoJy5kcm9wZG93bi1tZW51JykuZmlyc3QoKS5maW5kKCcuc2hvdycpLnJlbW92ZUNsYXNzKFwic2hvd1wiKS5oaWRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnRzKCdsaS5uYXYtaXRlbS5kcm9wZG93bi5zaG93Jykub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLXN1Ym1lbnUgLnNob3cnKS5yZW1vdmVDbGFzcyhcInNob3dcIikuaGlkZSgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZpeFBvc2l0aW9uKCkge1xuICAgICAgbGV0IGVsbSA9ICQoU2VsZWN0b3IuRFJPUERPV05fTUVOVV9BQ1RJVkUpXG5cbiAgICAgIGlmIChlbG0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmIChlbG0uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX1JJR0hUKSkge1xuICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAnaW5oZXJpdCcpXG4gICAgICAgICAgZWxtLmNzcygncmlnaHQnLCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAwKVxuICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0JywgJ2luaGVyaXQnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IGVsbS5vZmZzZXQoKVxuICAgICAgICBsZXQgd2lkdGggPSBlbG0ud2lkdGgoKVxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKVxuICAgICAgICBsZXQgdmlzaWJsZVBhcnQgPSB3aW5kb3dXaWR0aCAtIG9mZnNldC5sZWZ0XG5cbiAgICAgICAgaWYgKG9mZnNldC5sZWZ0IDwgMCkge1xuICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAnaW5oZXJpdCcpXG4gICAgICAgICAgZWxtLmNzcygncmlnaHQnLCAob2Zmc2V0LmxlZnQgLSA1KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodmlzaWJsZVBhcnQgPCB3aWR0aCkge1xuICAgICAgICAgICAgZWxtLmNzcygnbGVmdCcsICdpbmhlcml0JylcbiAgICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0JywgMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gIFxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX2NvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKCQodGhpcyksIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZVN1Ym1lbnUnIHx8IGNvbmZpZyA9PSAnZml4UG9zaXRpb24nKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkKFNlbGVjdG9yLkRST1BET1dOX01FTlUgKyAnICcgKyBTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlU3VibWVudScpXG4gIH0pO1xuXG4gICQoU2VsZWN0b3IuTkFWQkFSICsgJyAnICsgU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAnZml4UG9zaXRpb24nKVxuICAgIH0sIDEpXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBEcm9wZG93blxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgVG9hc3RzLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUb2FzdHMgPSAoKCQpID0+IHtcbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdUb2FzdHMnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUudG9hc3RzJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSU5JVDogYGluaXQke0VWRU5UX0tFWX1gLFxuICAgIENSRUFURUQ6IGBjcmVhdGVkJHtFVkVOVF9LRVl9YCxcbiAgICBSRU1PVkVEOiBgcmVtb3ZlZCR7RVZFTlRfS0VZfWAsXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBCT0RZOiAndG9hc3QtYm9keScsXG4gICAgQ09OVEFJTkVSX1RPUF9SSUdIVDogJyN0b2FzdHNDb250YWluZXJUb3BSaWdodCcsXG4gICAgQ09OVEFJTkVSX1RPUF9MRUZUOiAnI3RvYXN0c0NvbnRhaW5lclRvcExlZnQnLFxuICAgIENPTlRBSU5FUl9CT1RUT01fUklHSFQ6ICcjdG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnLFxuICAgIENPTlRBSU5FUl9CT1RUT01fTEVGVDogJyN0b2FzdHNDb250YWluZXJCb3R0b21MZWZ0JyxcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBUT1BfUklHSFQ6ICd0b2FzdHMtdG9wLXJpZ2h0JyxcbiAgICBUT1BfTEVGVDogJ3RvYXN0cy10b3AtbGVmdCcsXG4gICAgQk9UVE9NX1JJR0hUOiAndG9hc3RzLWJvdHRvbS1yaWdodCcsXG4gICAgQk9UVE9NX0xFRlQ6ICd0b2FzdHMtYm90dG9tLWxlZnQnLFxuICAgIEZBREU6ICdmYWRlJyxcbiAgfVxuXG4gIGNvbnN0IFBvc2l0aW9uID0ge1xuICAgIFRPUF9SSUdIVDogJ3RvcFJpZ2h0JyxcbiAgICBUT1BfTEVGVDogJ3RvcExlZnQnLFxuICAgIEJPVFRPTV9SSUdIVDogJ2JvdHRvbVJpZ2h0JyxcbiAgICBCT1RUT01fTEVGVDogJ2JvdHRvbUxlZnQnLFxuICB9XG5cbiAgY29uc3QgSWQgPSB7XG4gICAgQ09OVEFJTkVSX1RPUF9SSUdIVDogJ3RvYXN0c0NvbnRhaW5lclRvcFJpZ2h0JyxcbiAgICBDT05UQUlORVJfVE9QX0xFRlQ6ICd0b2FzdHNDb250YWluZXJUb3BMZWZ0JyxcbiAgICBDT05UQUlORVJfQk9UVE9NX1JJR0hUOiAndG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnLFxuICAgIENPTlRBSU5FUl9CT1RUT01fTEVGVDogJ3RvYXN0c0NvbnRhaW5lckJvdHRvbUxlZnQnLFxuICB9XG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uVE9QX1JJR0hULFxuICAgIGZpeGVkOiB0cnVlLFxuICAgIGF1dG9oaWRlOiBmYWxzZSxcbiAgICBhdXRvcmVtb3ZlOiB0cnVlLFxuICAgIGRlbGF5OiAxMDAwLFxuICAgIGZhZGU6IHRydWUsXG4gICAgaWNvbjogbnVsbCxcbiAgICBpbWFnZTogbnVsbCxcbiAgICBpbWFnZUFsdDogbnVsbCxcbiAgICBpbWFnZUhlaWdodDogJzI1cHgnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHN1YnRpdGxlOiBudWxsLFxuICAgIGNsb3NlOiB0cnVlLFxuICAgIGJvZHk6IG51bGwsXG4gICAgY2xhc3M6IG51bGwsXG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICBjbGFzcyBUb2FzdHMge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnICA9IGNvbmZpZ1xuXG4gICAgICB0aGlzLl9wcmVwYXJlQ29udGFpbmVyKCk7XG5cbiAgICAgIGNvbnN0IGluaXRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSU5JVClcbiAgICAgICQoJ2JvZHknKS50cmlnZ2VyKGluaXRFdmVudClcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgIHZhciB0b2FzdCA9ICQoJzxkaXYgY2xhc3M9XCJ0b2FzdFwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiLz4nKVxuXG4gICAgICB0b2FzdC5kYXRhKCdhdXRvaGlkZScsIHRoaXMuX2NvbmZpZy5hdXRvaGlkZSlcbiAgICAgIHRvYXN0LmRhdGEoJ2FuaW1hdGlvbicsIHRoaXMuX2NvbmZpZy5mYWRlKVxuICAgICAgXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmNsYXNzKSB7XG4gICAgICAgIHRvYXN0LmFkZENsYXNzKHRoaXMuX2NvbmZpZy5jbGFzcylcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5kZWxheSAmJiB0aGlzLl9jb25maWcuZGVsYXkgIT0gNTAwKSB7XG4gICAgICAgIHRvYXN0LmRhdGEoJ2RlbGF5JywgdGhpcy5fY29uZmlnLmRlbGF5KVxuICAgICAgfVxuXG4gICAgICB2YXIgdG9hc3RfaGVhZGVyID0gJCgnPGRpdiBjbGFzcz1cInRvYXN0LWhlYWRlclwiPicpXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgICB2YXIgdG9hc3RfaW1hZ2UgPSAkKCc8aW1nIC8+JykuYWRkQ2xhc3MoJ3JvdW5kZWQgbXItMicpLmF0dHIoJ3NyYycsIHRoaXMuX2NvbmZpZy5pbWFnZSkuYXR0cignYWx0JywgdGhpcy5fY29uZmlnLmltYWdlQWx0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pbWFnZUhlaWdodCAhPSBudWxsKSB7XG4gICAgICAgICAgdG9hc3RfaW1hZ2UuaGVpZ2h0KHRoaXMuX2NvbmZpZy5pbWFnZUhlaWdodCkud2lkdGgoJ2F1dG8nKVxuICAgICAgICB9XG5cbiAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCh0b2FzdF9pbWFnZSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pY29uICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCgkKCc8aSAvPicpLmFkZENsYXNzKCdtci0yJykuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmljb24pKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRpdGxlICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCgkKCc8c3Ryb25nIC8+JykuYWRkQ2xhc3MoJ21yLWF1dG8nKS5odG1sKHRoaXMuX2NvbmZpZy50aXRsZSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuc3VidGl0bGUgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdF9oZWFkZXIuYXBwZW5kKCQoJzxzbWFsbCAvPicpLmh0bWwodGhpcy5fY29uZmlnLnN1YnRpdGxlKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5jbG9zZSA9PSB0cnVlKSB7XG4gICAgICAgIHZhciB0b2FzdF9jbG9zZSA9ICQoJzxidXR0b24gZGF0YS1kaXNtaXNzPVwidG9hc3RcIiAvPicpLmF0dHIoJ3R5cGUnLCAnYnV0dG9uJykuYWRkQ2xhc3MoJ21sLTIgbWItMSBjbG9zZScpLmF0dHIoJ2FyaWEtbGFiZWwnLCAnQ2xvc2UnKS5hcHBlbmQoJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+JylcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGl0bGUgPT0gbnVsbCkge1xuICAgICAgICAgIHRvYXN0X2Nsb3NlLnRvZ2dsZUNsYXNzKCdtbC0yIG1sLWF1dG8nKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0b2FzdF9oZWFkZXIuYXBwZW5kKHRvYXN0X2Nsb3NlKVxuICAgICAgfVxuXG4gICAgICB0b2FzdC5hcHBlbmQodG9hc3RfaGVhZGVyKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJvZHkgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdC5hcHBlbmQoJCgnPGRpdiBjbGFzcz1cInRvYXN0LWJvZHlcIiAvPicpLmh0bWwodGhpcy5fY29uZmlnLmJvZHkpKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLnByZXBlbmQodG9hc3QpXG5cbiAgICAgIGNvbnN0IGNyZWF0ZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ1JFQVRFRClcbiAgICAgICQoJ2JvZHknKS50cmlnZ2VyKGNyZWF0ZWRFdmVudClcblxuICAgICAgdG9hc3QudG9hc3QoJ3Nob3cnKVxuXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b3JlbW92ZSkge1xuICAgICAgICB0b2FzdC5vbignaGlkZGVuLmJzLnRvYXN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQodGhpcykuZGVsYXkoMjAwKS5yZW1vdmUoKTtcblxuICAgICAgICAgIGNvbnN0IHJlbW92ZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuUkVNT1ZFRClcbiAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcihyZW1vdmVkRXZlbnQpXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuXG4gICAgX2dldENvbnRhaW5lcklkKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfUklHSFQpIHtcbiAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9UT1BfUklHSFQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfTEVGVCkge1xuICAgICAgICByZXR1cm4gU2VsZWN0b3IuQ09OVEFJTkVSX1RPUF9MRUZUO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX1JJR0hUKSB7XG4gICAgICAgIHJldHVybiBTZWxlY3Rvci5DT05UQUlORVJfQk9UVE9NX1JJR0hUO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX0xFRlQpIHtcbiAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9CT1RUT01fTEVGVDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcHJlcGFyZUNvbnRhaW5lcigpIHtcbiAgICAgIGlmICgkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gJCgnPGRpdiAvPicpLmF0dHIoJ2lkJywgdGhpcy5fZ2V0Q29udGFpbmVySWQoKS5yZXBsYWNlKCcjJywgJycpKVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLlRPUF9SSUdIVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuVE9QX1JJR0hUKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfTEVGVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuVE9QX0xFRlQpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLkJPVFRPTV9SSUdIVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuQk9UVE9NX1JJR0hUKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5CT1RUT01fTEVGVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuQk9UVE9NX0xFRlQpXG4gICAgICAgIH1cblxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKGNvbnRhaW5lcilcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5maXhlZCkge1xuICAgICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmFkZENsYXNzKCdmaXhlZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLnJlbW92ZUNsYXNzKCdmaXhlZCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShvcHRpb24sIGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsIGNvbmZpZylcbiAgICAgICAgdmFyIHRvYXN0ID0gbmV3IFRvYXN0cygkKHRoaXMpLCBfb3B0aW9ucylcblxuICAgICAgICBpZiAob3B0aW9uID09PSAnY3JlYXRlJykge1xuICAgICAgICAgIHRvYXN0W29wdGlvbl0oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb2FzdHNcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gVG9hc3RzXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==