(self["webpackChunkbingo"] = self["webpackChunkbingo"] || []).push([["demo"],{

/***/ "./assets/dist/js/demo.js":
/*!********************************!*\
  !*** ./assets/dist/js/demo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {
  'use strict';

  var $sidebar = $('.control-sidebar');
  var $container = $('<div />', {
    "class": 'p-3 control-sidebar-content'
  });
  $sidebar.append($container);
  var navbar_dark_skins = ['navbar-primary', 'navbar-secondary', 'navbar-info', 'navbar-success', 'navbar-danger', 'navbar-indigo', 'navbar-purple', 'navbar-pink', 'navbar-navy', 'navbar-lightblue', 'navbar-teal', 'navbar-cyan', 'navbar-dark', 'navbar-gray-dark', 'navbar-gray'];
  var navbar_light_skins = ['navbar-light', 'navbar-warning', 'navbar-white', 'navbar-orange'];
  $container.append('<h5>Customize AdminLTE</h5><hr class="mb-2"/>');
  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0');
    } else {
      $('.main-header').removeClass('border-bottom-0');
    }
  });
  var $no_border_container = $('<div />', {
    'class': 'mb-1'
  }).append($no_border_checkbox).append('<span>No Navbar border</span>');
  $container.append($no_border_container);
  var $text_sm_body_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm');
    } else {
      $('body').removeClass('text-sm');
    }
  });
  var $text_sm_body_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_body_checkbox).append('<span>Body small text</span>');
  $container.append($text_sm_body_container);
  var $text_sm_header_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm');
    } else {
      $('.main-header').removeClass('text-sm');
    }
  });
  var $text_sm_header_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_header_checkbox).append('<span>Navbar small text</span>');
  $container.append($text_sm_header_container);
  var $text_sm_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm');
    } else {
      $('.nav-sidebar').removeClass('text-sm');
    }
  });
  var $text_sm_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_sidebar_checkbox).append('<span>Sidebar nav small text</span>');
  $container.append($text_sm_sidebar_container);
  var $text_sm_footer_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-footer').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm');
    } else {
      $('.main-footer').removeClass('text-sm');
    }
  });
  var $text_sm_footer_container = $('<div />', {
    'class': 'mb-1'
  }).append($text_sm_footer_checkbox).append('<span>Footer small text</span>');
  $container.append($text_sm_footer_container);
  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat');
    } else {
      $('.nav-sidebar').removeClass('nav-flat');
    }
  });
  var $flat_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($flat_sidebar_checkbox).append('<span>Sidebar nav flat style</span>');
  $container.append($flat_sidebar_container);
  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy');
    } else {
      $('.nav-sidebar').removeClass('nav-legacy');
    }
  });
  var $legacy_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($legacy_sidebar_checkbox).append('<span>Sidebar nav legacy style</span>');
  $container.append($legacy_sidebar_container);
  var $compact_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact');
    } else {
      $('.nav-sidebar').removeClass('nav-compact');
    }
  });
  var $compact_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($compact_sidebar_checkbox).append('<span>Sidebar nav compact</span>');
  $container.append($compact_sidebar_container);
  var $child_indent_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent');
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent');
    }
  });
  var $child_indent_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($child_indent_sidebar_checkbox).append('<span>Sidebar nav child indent</span>');
  $container.append($child_indent_sidebar_container);
  var $no_expand_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand');
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand');
    }
  });
  var $no_expand_sidebar_container = $('<div />', {
    'class': 'mb-1'
  }).append($no_expand_sidebar_checkbox).append('<span>Main Sidebar disable hover/focus auto expand</span>');
  $container.append($no_expand_sidebar_container);
  var $text_sm_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm');
    } else {
      $('.brand-link').removeClass('text-sm');
    }
  });
  var $text_sm_brand_container = $('<div />', {
    'class': 'mb-4'
  }).append($text_sm_brand_checkbox).append('<span>Brand small text</span>');
  $container.append($text_sm_brand_container);
  $container.append('<h6>Navbar Variants</h6>');
  var $navbar_variants = $('<div />', {
    'class': 'd-flex'
  });
  var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins);
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
    var color = $(this).data('color');
    var $main_header = $('.main-header');
    $main_header.removeClass('navbar-dark').removeClass('navbar-light');
    navbar_all_colors.map(function (color) {
      $main_header.removeClass(color);
    });

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark');
    } else {
      $main_header.addClass('navbar-light');
    }

    $main_header.addClass(color);
  });
  $navbar_variants.append($navbar_variants_colors);
  $container.append($navbar_variants);
  var sidebar_colors = ['bg-primary', 'bg-warning', 'bg-info', 'bg-danger', 'bg-success', 'bg-indigo', 'bg-lightblue', 'bg-navy', 'bg-purple', 'bg-fuchsia', 'bg-pink', 'bg-maroon', 'bg-orange', 'bg-lime', 'bg-teal', 'bg-olive'];
  var accent_colors = ['accent-primary', 'accent-warning', 'accent-info', 'accent-danger', 'accent-success', 'accent-indigo', 'accent-lightblue', 'accent-navy', 'accent-purple', 'accent-fuchsia', 'accent-pink', 'accent-maroon', 'accent-orange', 'accent-lime', 'accent-teal', 'accent-olive'];
  var sidebar_skins = ['sidebar-dark-primary', 'sidebar-dark-warning', 'sidebar-dark-info', 'sidebar-dark-danger', 'sidebar-dark-success', 'sidebar-dark-indigo', 'sidebar-dark-lightblue', 'sidebar-dark-navy', 'sidebar-dark-purple', 'sidebar-dark-fuchsia', 'sidebar-dark-pink', 'sidebar-dark-maroon', 'sidebar-dark-orange', 'sidebar-dark-lime', 'sidebar-dark-teal', 'sidebar-dark-olive', 'sidebar-light-primary', 'sidebar-light-warning', 'sidebar-light-info', 'sidebar-light-danger', 'sidebar-light-success', 'sidebar-light-indigo', 'sidebar-light-lightblue', 'sidebar-light-navy', 'sidebar-light-purple', 'sidebar-light-fuchsia', 'sidebar-light-pink', 'sidebar-light-maroon', 'sidebar-light-orange', 'sidebar-light-lime', 'sidebar-light-teal', 'sidebar-light-olive'];
  $container.append('<h6>Accent Color Variants</h6>');
  var $accent_variants = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($accent_variants);
  $container.append(createSkinBlock(accent_colors, function () {
    var color = $(this).data('color');
    var accent_class = color;
    var $body = $('body');
    accent_colors.map(function (skin) {
      $body.removeClass(skin);
    });
    $body.addClass(accent_class);
  }));
  $container.append('<h6>Dark Sidebar Variants</h6>');
  var $sidebar_variants_dark = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($sidebar_variants_dark);
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin);
    });
    $sidebar.addClass(sidebar_class);
  }));
  $container.append('<h6>Light Sidebar Variants</h6>');
  var $sidebar_variants_light = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($sidebar_variants_light);
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color');
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '');
    var $sidebar = $('.main-sidebar');
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin);
    });
    $sidebar.addClass(sidebar_class);
  }));
  var logo_skins = navbar_all_colors;
  $container.append('<h6>Brand Logo Variants</h6>');
  var $logo_variants = $('<div />', {
    'class': 'd-flex'
  });
  $container.append($logo_variants);
  var $clear_btn = $('<a />', {
    href: 'javascript:void(0)'
  }).text('clear').on('click', function () {
    var $logo = $('.brand-link');
    logo_skins.map(function (skin) {
      $logo.removeClass(skin);
    });
  });
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color');
    var $logo = $('.brand-link');
    logo_skins.map(function (skin) {
      $logo.removeClass(skin);
    });
    $logo.addClass(color);
  }).append($clear_btn));

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    });
    colors.map(function (color) {
      var $color = $('<div />', {
        'class': (_typeof(color) === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-') + ' elevation-2'
      });
      $block.append($color);
      $color.data('color', color);
      $color.css({
        width: '40px',
        height: '20px',
        borderRadius: '25px',
        marginRight: 10,
        marginBottom: 10,
        opacity: 0.8,
        cursor: 'pointer'
      });
      $color.hover(function () {
        $(this).css({
          opacity: 1
        }).removeClass('elevation-2').addClass('elevation-4');
      }, function () {
        $(this).css({
          opacity: 0.8
        }).removeClass('elevation-4').addClass('elevation-2');
      });

      if (callback) {
        $color.on('click', callback);
      }
    });
    return $block;
  }

  $('.product-image-thumb').on('click', function () {
    var image_element = $(this).find('img');
    $('.product-image').prop('src', $(image_element).attr('src'));
    $('.product-image-thumb.active').removeClass('active');
    $(this).addClass('active');
  });
  $("input[data-bootstrap-switch]").each(function () {
    $(this).bootstrapSwitch('state', $(this).prop('checked'));
  });
})(jQuery);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_well-known-sy-07cc72","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-31b1f3","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-c3b762"], () => (__webpack_exec__("./assets/dist/js/demo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5nby8uL2Fzc2V0cy9kaXN0L2pzL2RlbW8uanMiXSwibmFtZXMiOlsiJCIsIiRzaWRlYmFyIiwiJGNvbnRhaW5lciIsImFwcGVuZCIsIm5hdmJhcl9kYXJrX3NraW5zIiwibmF2YmFyX2xpZ2h0X3NraW5zIiwiJG5vX2JvcmRlcl9jaGVja2JveCIsInR5cGUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJoYXNDbGFzcyIsIm9uIiwiaXMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJG5vX2JvcmRlcl9jb250YWluZXIiLCIkdGV4dF9zbV9ib2R5X2NoZWNrYm94IiwiJHRleHRfc21fYm9keV9jb250YWluZXIiLCIkdGV4dF9zbV9oZWFkZXJfY2hlY2tib3giLCIkdGV4dF9zbV9oZWFkZXJfY29udGFpbmVyIiwiJHRleHRfc21fc2lkZWJhcl9jaGVja2JveCIsIiR0ZXh0X3NtX3NpZGViYXJfY29udGFpbmVyIiwiJHRleHRfc21fZm9vdGVyX2NoZWNrYm94IiwiJHRleHRfc21fZm9vdGVyX2NvbnRhaW5lciIsIiRmbGF0X3NpZGViYXJfY2hlY2tib3giLCIkZmxhdF9zaWRlYmFyX2NvbnRhaW5lciIsIiRsZWdhY3lfc2lkZWJhcl9jaGVja2JveCIsIiRsZWdhY3lfc2lkZWJhcl9jb250YWluZXIiLCIkY29tcGFjdF9zaWRlYmFyX2NoZWNrYm94IiwiJGNvbXBhY3Rfc2lkZWJhcl9jb250YWluZXIiLCIkY2hpbGRfaW5kZW50X3NpZGViYXJfY2hlY2tib3giLCIkY2hpbGRfaW5kZW50X3NpZGViYXJfY29udGFpbmVyIiwiJG5vX2V4cGFuZF9zaWRlYmFyX2NoZWNrYm94IiwiJG5vX2V4cGFuZF9zaWRlYmFyX2NvbnRhaW5lciIsIiR0ZXh0X3NtX2JyYW5kX2NoZWNrYm94IiwiJHRleHRfc21fYnJhbmRfY29udGFpbmVyIiwiJG5hdmJhcl92YXJpYW50cyIsIm5hdmJhcl9hbGxfY29sb3JzIiwiY29uY2F0IiwiJG5hdmJhcl92YXJpYW50c19jb2xvcnMiLCJjcmVhdGVTa2luQmxvY2siLCJlIiwiY29sb3IiLCJkYXRhIiwiJG1haW5faGVhZGVyIiwibWFwIiwiaW5kZXhPZiIsInNpZGViYXJfY29sb3JzIiwiYWNjZW50X2NvbG9ycyIsInNpZGViYXJfc2tpbnMiLCIkYWNjZW50X3ZhcmlhbnRzIiwiYWNjZW50X2NsYXNzIiwiJGJvZHkiLCJza2luIiwiJHNpZGViYXJfdmFyaWFudHNfZGFyayIsInNpZGViYXJfY2xhc3MiLCJyZXBsYWNlIiwiJHNpZGViYXJfdmFyaWFudHNfbGlnaHQiLCJsb2dvX3NraW5zIiwiJGxvZ29fdmFyaWFudHMiLCIkY2xlYXJfYnRuIiwiaHJlZiIsInRleHQiLCIkbG9nbyIsImNvbG9ycyIsImNhbGxiYWNrIiwiJGJsb2NrIiwiJGNvbG9yIiwiam9pbiIsImNzcyIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJvcGFjaXR5IiwiY3Vyc29yIiwiaG92ZXIiLCJpbWFnZV9lbGVtZW50IiwiZmluZCIsInByb3AiLCJhdHRyIiwiZWFjaCIsImJvb3RzdHJhcFN3aXRjaCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVQSxDQUFWLEVBQWE7QUFDWjs7QUFFQSxNQUFJQyxRQUFRLEdBQUtELENBQUMsQ0FBQyxrQkFBRCxDQUFsQjtBQUNBLE1BQUlFLFVBQVUsR0FBR0YsQ0FBQyxDQUFDLFNBQUQsRUFBWTtBQUM1QixhQUFPO0FBRHFCLEdBQVosQ0FBbEI7QUFJQUMsVUFBUSxDQUFDRSxNQUFULENBQWdCRCxVQUFoQjtBQUVBLE1BQUlFLGlCQUFpQixHQUFHLENBQ3RCLGdCQURzQixFQUV0QixrQkFGc0IsRUFHdEIsYUFIc0IsRUFJdEIsZ0JBSnNCLEVBS3RCLGVBTHNCLEVBTXRCLGVBTnNCLEVBT3RCLGVBUHNCLEVB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QUFoRTtBQUNELE9BRkQsRUFFRyxZQUFZO0FBQ2JiLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFFLEdBQVIsQ0FBWTtBQUFFTSxpQkFBTyxFQUFFO0FBQVgsU0FBWixFQUE4QjdELFdBQTlCLENBQTBDLGFBQTFDLEVBQXlERCxRQUF6RCxDQUFrRSxhQUFsRTtBQUNELE9BSkQ7O0FBTUEsVUFBSW9ELFFBQUosRUFBYztBQUNaRSxjQUFNLENBQUN4RCxFQUFQLENBQVUsT0FBVixFQUFtQnNELFFBQW5CO0FBQ0Q7QUFDRixLQTVCRDtBQThCQSxXQUFPQyxNQUFQO0FBQ0Q7O0FBRURsRSxHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQlcsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsWUFBVztBQUMvQyxRQUFNbUUsYUFBYSxHQUFHOUUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0UsSUFBUixDQUFhLEtBQWIsQ0FBdEI7QUFDQS9FLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZ0YsSUFBcEIsQ0FBeUIsS0FBekIsRUFBZ0NoRixDQUFDLENBQUM4RSxhQUFELENBQUQsQ0FBaUJHLElBQWpCLENBQXNCLEtBQXRCLENBQWhDO0FBQ0FqRixLQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ2MsV0FBakMsQ0FBNkMsUUFBN0M7QUFDQWQsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxRQUFSLENBQWlCLFFBQWpCO0FBQ0QsR0FMRDtBQU9BYixHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ2tGLElBQWxDLENBQXVDLFlBQVU7QUFDL0NsRixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRixlQUFSLENBQXdCLE9BQXhCLEVBQWlDbkYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0YsSUFBUixDQUFhLFNBQWIsQ0FBakM7QUFDRCxHQUZEO0FBSUQsQ0F4YUQsRUF3YUdJLE1BeGFILEUiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQWRtaW5MVEUgRGVtbyBNZW51XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFlvdSBzaG91bGQgbm90IHVzZSB0aGlzIGZpbGUgaW4gcHJvZHVjdGlvbi5cbiAqIFRoaXMgZmlsZSBpcyBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5LlxuICovXG4oZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnXG5cbiAgdmFyICRzaWRlYmFyICAgPSAkKCcuY29udHJvbC1zaWRlYmFyJylcbiAgdmFyICRjb250YWluZXIgPSAkKCc8ZGl2IC8+Jywge1xuICAgIGNsYXNzOiAncC0zIGNvbnRyb2wtc2lkZWJhci1jb250ZW50J1xuICB9KVxuXG4gICRzaWRlYmFyLmFwcGVuZCgkY29udGFpbmVyKVxuXG4gIHZhciBuYXZiYXJfZGFya19za2lucyA9IFtcbiAgICAnbmF2YmFyLXByaW1hcnknLFxuICAgICduYXZiYXItc2Vjb25kYXJ5JyxcbiAgICAnbmF2YmFyLWluZm8nLFxuICAgICduYXZiYXItc3VjY2VzcycsXG4gICAgJ25hdmJhci1kYW5nZXInLFxuICAgICduYXZiYXItaW5kaWdvJyxcbiAgICAnbmF2YmFyLXB1cnBsZScsXG4gICAgJ25hdmJhci1waW5rJyxcbiAgICAnbmF2YmFyLW5hdnknLFxuICAgICduYXZiYXItbGlnaHRibHVlJyxcbiAgICAnbmF2YmFyLXRlYWwnLFxuICAgICduYXZiYXItY3lhbicsXG4gICAgJ25hdmJhci1kYXJrJyxcbiAgICAnbmF2YmFyLWdyYXktZGFyaycsXG4gICAgJ25hdmJhci1ncmF5JyxcbiAgXVxuXG4gIHZhciBuYXZiYXJfbGlnaHRfc2tpbnMgPSBbXG4gICAgJ25hdmJhci1saWdodCcsXG4gICAgJ25hdmJhci13YXJuaW5nJyxcbiAgICAnbmF2YmFyLXdoaXRlJyxcbiAgICAnbmF2YmFyLW9yYW5nZScsXG4gIF1cblxuICAkY29udGFpbmVyLmFwcGVuZChcbiAgICAnPGg1PkN1c3RvbWl6ZSBBZG1pbkxURTwvaDU+PGhyIGNsYXNzPVwibWItMlwiLz4nXG4gIClcblxuICB2YXIgJG5vX2JvcmRlcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4taGVhZGVyJykuaGFzQ2xhc3MoJ2JvcmRlci1ib3R0b20tMCcpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCdib3JkZXItYm90dG9tLTAnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygnYm9yZGVyLWJvdHRvbS0wJylcbiAgICB9XG4gIH0pXG4gIHZhciAkbm9fYm9yZGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCRub19ib3JkZXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Tm8gTmF2YmFyIGJvcmRlcjwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkbm9fYm9yZGVyX2NvbnRhaW5lcilcblxuICB2YXIgJHRleHRfc21fYm9keV9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnYm9keScpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0ZXh0LXNtJylcbiAgICB9XG4gIH0pXG4gIHZhciAkdGV4dF9zbV9ib2R5X2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCR0ZXh0X3NtX2JvZHlfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+Qm9keSBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX2JvZHlfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9oZWFkZXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLWhlYWRlcicpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygndGV4dC1zbScpXG4gICAgfVxuICB9KVxuICB2YXIgJHRleHRfc21faGVhZGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCR0ZXh0X3NtX2hlYWRlcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5OYXZiYXIgc21hbGwgdGV4dDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9oZWFkZXJfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygndGV4dC1zbScpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCd0ZXh0LXNtJylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsnY2xhc3MnOiAnbWItMSd9KS5hcHBlbmQoJHRleHRfc21fc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBzbWFsbCB0ZXh0PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCR0ZXh0X3NtX3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkdGV4dF9zbV9mb290ZXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5tYWluLWZvb3RlcicpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm1haW4tZm9vdGVyJykuYWRkQ2xhc3MoJ3RleHQtc20nKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1mb290ZXInKS5yZW1vdmVDbGFzcygndGV4dC1zbScpXG4gICAgfVxuICB9KVxuICB2YXIgJHRleHRfc21fZm9vdGVyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCR0ZXh0X3NtX2Zvb3Rlcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5Gb290ZXIgc21hbGwgdGV4dDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkdGV4dF9zbV9mb290ZXJfY29udGFpbmVyKVxuXG4gIHZhciAkZmxhdF9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWZsYXQnKSxcbiAgICAnY2xhc3MnOiAnbXItMSdcbiAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5hZGRDbGFzcygnbmF2LWZsYXQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWZsYXQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRmbGF0X3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsnY2xhc3MnOiAnbWItMSd9KS5hcHBlbmQoJGZsYXRfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBmbGF0IHN0eWxlPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRmbGF0X3NpZGViYXJfY29udGFpbmVyKVxuXG4gIHZhciAkbGVnYWN5X3NpZGViYXJfY2hlY2tib3ggPSAkKCc8aW5wdXQgLz4nLCB7XG4gICAgdHlwZSAgIDogJ2NoZWNrYm94JyxcbiAgICB2YWx1ZSAgOiAxLFxuICAgIGNoZWNrZWQ6ICQoJy5uYXYtc2lkZWJhcicpLmhhc0NsYXNzKCduYXYtbGVnYWN5JyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1sZWdhY3knKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubmF2LXNpZGViYXInKS5yZW1vdmVDbGFzcygnbmF2LWxlZ2FjeScpXG4gICAgfVxuICB9KVxuICB2YXIgJGxlZ2FjeV9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCRsZWdhY3lfc2lkZWJhcl9jaGVja2JveCkuYXBwZW5kKCc8c3Bhbj5TaWRlYmFyIG5hdiBsZWdhY3kgc3R5bGU8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJGxlZ2FjeV9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGNvbXBhY3Rfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLm5hdi1zaWRlYmFyJykuaGFzQ2xhc3MoJ25hdi1jb21wYWN0JyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykuYWRkQ2xhc3MoJ25hdi1jb21wYWN0JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1jb21wYWN0JylcbiAgICB9XG4gIH0pXG4gIHZhciAkY29tcGFjdF9zaWRlYmFyX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTEnfSkuYXBwZW5kKCRjb21wYWN0X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgY29tcGFjdDwvc3Bhbj4nKVxuICAkY29udGFpbmVyLmFwcGVuZCgkY29tcGFjdF9zaWRlYmFyX2NvbnRhaW5lcilcblxuICB2YXIgJGNoaWxkX2luZGVudF9zaWRlYmFyX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcubmF2LXNpZGViYXInKS5oYXNDbGFzcygnbmF2LWNoaWxkLWluZGVudCcpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5uYXYtc2lkZWJhcicpLmFkZENsYXNzKCduYXYtY2hpbGQtaW5kZW50JylcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm5hdi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ25hdi1jaGlsZC1pbmRlbnQnKVxuICAgIH1cbiAgfSlcbiAgdmFyICRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jb250YWluZXIgPSAkKCc8ZGl2IC8+JywgeydjbGFzcyc6ICdtYi0xJ30pLmFwcGVuZCgkY2hpbGRfaW5kZW50X3NpZGViYXJfY2hlY2tib3gpLmFwcGVuZCgnPHNwYW4+U2lkZWJhciBuYXYgY2hpbGQgaW5kZW50PC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRjaGlsZF9pbmRlbnRfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICRub19leHBhbmRfc2lkZWJhcl9jaGVja2JveCA9ICQoJzxpbnB1dCAvPicsIHtcbiAgICB0eXBlICAgOiAnY2hlY2tib3gnLFxuICAgIHZhbHVlICA6IDEsXG4gICAgY2hlY2tlZDogJCgnLm1haW4tc2lkZWJhcicpLmhhc0NsYXNzKCdzaWRlYmFyLW5vLWV4cGFuZCcpLFxuICAgICdjbGFzcyc6ICdtci0xJ1xuICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICQoJy5tYWluLXNpZGViYXInKS5hZGRDbGFzcygnc2lkZWJhci1uby1leHBhbmQnKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItbm8tZXhwYW5kJylcbiAgICB9XG4gIH0pXG4gIHZhciAkbm9fZXhwYW5kX3NpZGViYXJfY29udGFpbmVyID0gJCgnPGRpdiAvPicsIHsnY2xhc3MnOiAnbWItMSd9KS5hcHBlbmQoJG5vX2V4cGFuZF9zaWRlYmFyX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPk1haW4gU2lkZWJhciBkaXNhYmxlIGhvdmVyL2ZvY3VzIGF1dG8gZXhwYW5kPC9zcGFuPicpXG4gICRjb250YWluZXIuYXBwZW5kKCRub19leHBhbmRfc2lkZWJhcl9jb250YWluZXIpXG5cbiAgdmFyICR0ZXh0X3NtX2JyYW5kX2NoZWNrYm94ID0gJCgnPGlucHV0IC8+Jywge1xuICAgIHR5cGUgICA6ICdjaGVja2JveCcsXG4gICAgdmFsdWUgIDogMSxcbiAgICBjaGVja2VkOiAkKCcuYnJhbmQtbGluaycpLmhhc0NsYXNzKCd0ZXh0LXNtJyksXG4gICAgJ2NsYXNzJzogJ21yLTEnXG4gIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgJCgnLmJyYW5kLWxpbmsnKS5hZGRDbGFzcygndGV4dC1zbScpXG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5icmFuZC1saW5rJykucmVtb3ZlQ2xhc3MoJ3RleHQtc20nKVxuICAgIH1cbiAgfSlcbiAgdmFyICR0ZXh0X3NtX2JyYW5kX2NvbnRhaW5lciA9ICQoJzxkaXYgLz4nLCB7J2NsYXNzJzogJ21iLTQnfSkuYXBwZW5kKCR0ZXh0X3NtX2JyYW5kX2NoZWNrYm94KS5hcHBlbmQoJzxzcGFuPkJyYW5kIHNtYWxsIHRleHQ8L3NwYW4+JylcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHRleHRfc21fYnJhbmRfY29udGFpbmVyKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+TmF2YmFyIFZhcmlhbnRzPC9oNj4nKVxuXG4gIHZhciAkbmF2YmFyX3ZhcmlhbnRzICAgICAgICA9ICQoJzxkaXYgLz4nLCB7XG4gICAgJ2NsYXNzJzogJ2QtZmxleCdcbiAgfSlcbiAgdmFyIG5hdmJhcl9hbGxfY29sb3JzICAgICAgID0gbmF2YmFyX2Rhcmtfc2tpbnMuY29uY2F0KG5hdmJhcl9saWdodF9za2lucylcbiAgdmFyICRuYXZiYXJfdmFyaWFudHNfY29sb3JzID0gY3JlYXRlU2tpbkJsb2NrKG5hdmJhcl9hbGxfY29sb3JzLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBjb2xvciA9ICQodGhpcykuZGF0YSgnY29sb3InKVxuICAgIHZhciAkbWFpbl9oZWFkZXIgPSAkKCcubWFpbi1oZWFkZXInKVxuICAgICRtYWluX2hlYWRlci5yZW1vdmVDbGFzcygnbmF2YmFyLWRhcmsnKS5yZW1vdmVDbGFzcygnbmF2YmFyLWxpZ2h0JylcbiAgICBuYXZiYXJfYWxsX2NvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAkbWFpbl9oZWFkZXIucmVtb3ZlQ2xhc3MoY29sb3IpXG4gICAgfSlcblxuICAgIGlmIChuYXZiYXJfZGFya19za2lucy5pbmRleE9mKGNvbG9yKSA+IC0xKSB7XG4gICAgICAkbWFpbl9oZWFkZXIuYWRkQ2xhc3MoJ25hdmJhci1kYXJrJylcbiAgICB9IGVsc2Uge1xuICAgICAgJG1haW5faGVhZGVyLmFkZENsYXNzKCduYXZiYXItbGlnaHQnKVxuICAgIH1cblxuICAgICRtYWluX2hlYWRlci5hZGRDbGFzcyhjb2xvcilcbiAgfSlcblxuICAkbmF2YmFyX3ZhcmlhbnRzLmFwcGVuZCgkbmF2YmFyX3ZhcmlhbnRzX2NvbG9ycylcblxuICAkY29udGFpbmVyLmFwcGVuZCgkbmF2YmFyX3ZhcmlhbnRzKVxuXG4gIHZhciBzaWRlYmFyX2NvbG9ycyA9IFtcbiAgICAnYmctcHJpbWFyeScsXG4gICAgJ2JnLXdhcm5pbmcnLFxuICAgICdiZy1pbmZvJyxcbiAgICAnYmctZGFuZ2VyJyxcbiAgICAnYmctc3VjY2VzcycsXG4gICAgJ2JnLWluZGlnbycsXG4gICAgJ2JnLWxpZ2h0Ymx1ZScsXG4gICAgJ2JnLW5hdnknLFxuICAgICdiZy1wdXJwbGUnLFxuICAgICdiZy1mdWNoc2lhJyxcbiAgICAnYmctcGluaycsXG4gICAgJ2JnLW1hcm9vbicsXG4gICAgJ2JnLW9yYW5nZScsXG4gICAgJ2JnLWxpbWUnLFxuICAgICdiZy10ZWFsJyxcbiAgICAnYmctb2xpdmUnXG4gIF1cblxuICB2YXIgYWNjZW50X2NvbG9ycyA9IFtcbiAgICAnYWNjZW50LXByaW1hcnknLFxuICAgICdhY2NlbnQtd2FybmluZycsXG4gICAgJ2FjY2VudC1pbmZvJyxcbiAgICAnYWNjZW50LWRhbmdlcicsXG4gICAgJ2FjY2VudC1zdWNjZXNzJyxcbiAgICAnYWNjZW50LWluZGlnbycsXG4gICAgJ2FjY2VudC1saWdodGJsdWUnLFxuICAgICdhY2NlbnQtbmF2eScsXG4gICAgJ2FjY2VudC1wdXJwbGUnLFxuICAgICdhY2NlbnQtZnVjaHNpYScsXG4gICAgJ2FjY2VudC1waW5rJyxcbiAgICAnYWNjZW50LW1hcm9vbicsXG4gICAgJ2FjY2VudC1vcmFuZ2UnLFxuICAgICdhY2NlbnQtbGltZScsXG4gICAgJ2FjY2VudC10ZWFsJyxcbiAgICAnYWNjZW50LW9saXZlJ1xuICBdXG5cbiAgdmFyIHNpZGViYXJfc2tpbnMgPSBbXG4gICAgJ3NpZGViYXItZGFyay1wcmltYXJ5JyxcbiAgICAnc2lkZWJhci1kYXJrLXdhcm5pbmcnLFxuICAgICdzaWRlYmFyLWRhcmstaW5mbycsXG4gICAgJ3NpZGViYXItZGFyay1kYW5nZXInLFxuICAgICdzaWRlYmFyLWRhcmstc3VjY2VzcycsXG4gICAgJ3NpZGViYXItZGFyay1pbmRpZ28nLFxuICAgICdzaWRlYmFyLWRhcmstbGlnaHRibHVlJyxcbiAgICAnc2lkZWJhci1kYXJrLW5hdnknLFxuICAgICdzaWRlYmFyLWRhcmstcHVycGxlJyxcbiAgICAnc2lkZWJhci1kYXJrLWZ1Y2hzaWEnLFxuICAgICdzaWRlYmFyLWRhcmstcGluaycsXG4gICAgJ3NpZGViYXItZGFyay1tYXJvb24nLFxuICAgICdzaWRlYmFyLWRhcmstb3JhbmdlJyxcbiAgICAnc2lkZWJhci1kYXJrLWxpbWUnLFxuICAgICdzaWRlYmFyLWRhcmstdGVhbCcsXG4gICAgJ3NpZGViYXItZGFyay1vbGl2ZScsXG4gICAgJ3NpZGViYXItbGlnaHQtcHJpbWFyeScsXG4gICAgJ3NpZGViYXItbGlnaHQtd2FybmluZycsXG4gICAgJ3NpZGViYXItbGlnaHQtaW5mbycsXG4gICAgJ3NpZGViYXItbGlnaHQtZGFuZ2VyJyxcbiAgICAnc2lkZWJhci1saWdodC1zdWNjZXNzJyxcbiAgICAnc2lkZWJhci1saWdodC1pbmRpZ28nLFxuICAgICdzaWRlYmFyLWxpZ2h0LWxpZ2h0Ymx1ZScsXG4gICAgJ3NpZGViYXItbGlnaHQtbmF2eScsXG4gICAgJ3NpZGViYXItbGlnaHQtcHVycGxlJyxcbiAgICAnc2lkZWJhci1saWdodC1mdWNoc2lhJyxcbiAgICAnc2lkZWJhci1saWdodC1waW5rJyxcbiAgICAnc2lkZWJhci1saWdodC1tYXJvb24nLFxuICAgICdzaWRlYmFyLWxpZ2h0LW9yYW5nZScsXG4gICAgJ3NpZGViYXItbGlnaHQtbGltZScsXG4gICAgJ3NpZGViYXItbGlnaHQtdGVhbCcsXG4gICAgJ3NpZGViYXItbGlnaHQtb2xpdmUnXG4gIF1cblxuICAkY29udGFpbmVyLmFwcGVuZCgnPGg2PkFjY2VudCBDb2xvciBWYXJpYW50czwvaDY+JylcbiAgdmFyICRhY2NlbnRfdmFyaWFudHMgPSAkKCc8ZGl2IC8+Jywge1xuICAgICdjbGFzcyc6ICdkLWZsZXgnXG4gIH0pXG4gICRjb250YWluZXIuYXBwZW5kKCRhY2NlbnRfdmFyaWFudHMpXG4gICRjb250YWluZXIuYXBwZW5kKGNyZWF0ZVNraW5CbG9jayhhY2NlbnRfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yICAgICAgICAgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgYWNjZW50X2NsYXNzID0gY29sb3JcbiAgICB2YXIgJGJvZHkgICAgICA9ICQoJ2JvZHknKVxuICAgIGFjY2VudF9jb2xvcnMubWFwKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkYm9keS5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICAkYm9keS5hZGRDbGFzcyhhY2NlbnRfY2xhc3MpXG4gIH0pKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+RGFyayBTaWRlYmFyIFZhcmlhbnRzPC9oNj4nKVxuICB2YXIgJHNpZGViYXJfdmFyaWFudHNfZGFyayA9ICQoJzxkaXYgLz4nLCB7XG4gICAgJ2NsYXNzJzogJ2QtZmxleCdcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoJHNpZGViYXJfdmFyaWFudHNfZGFyaylcbiAgJGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU2tpbkJsb2NrKHNpZGViYXJfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yICAgICAgICAgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgc2lkZWJhcl9jbGFzcyA9ICdzaWRlYmFyLWRhcmstJyArIGNvbG9yLnJlcGxhY2UoJ2JnLScsICcnKVxuICAgIHZhciAkc2lkZWJhciAgICAgID0gJCgnLm1haW4tc2lkZWJhcicpXG4gICAgc2lkZWJhcl9za2lucy5tYXAoZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRzaWRlYmFyLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcblxuICAgICRzaWRlYmFyLmFkZENsYXNzKHNpZGViYXJfY2xhc3MpXG4gIH0pKVxuXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+TGlnaHQgU2lkZWJhciBWYXJpYW50czwvaDY+JylcbiAgdmFyICRzaWRlYmFyX3ZhcmlhbnRzX2xpZ2h0ID0gJCgnPGRpdiAvPicsIHtcbiAgICAnY2xhc3MnOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkc2lkZWJhcl92YXJpYW50c19saWdodClcbiAgJGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU2tpbkJsb2NrKHNpZGViYXJfY29sb3JzLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yICAgICAgICAgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgc2lkZWJhcl9jbGFzcyA9ICdzaWRlYmFyLWxpZ2h0LScgKyBjb2xvci5yZXBsYWNlKCdiZy0nLCAnJylcbiAgICB2YXIgJHNpZGViYXIgICAgICA9ICQoJy5tYWluLXNpZGViYXInKVxuICAgIHNpZGViYXJfc2tpbnMubWFwKGZ1bmN0aW9uIChza2luKSB7XG4gICAgICAkc2lkZWJhci5yZW1vdmVDbGFzcyhza2luKVxuICAgIH0pXG5cbiAgICAkc2lkZWJhci5hZGRDbGFzcyhzaWRlYmFyX2NsYXNzKVxuICB9KSlcblxuICB2YXIgbG9nb19za2lucyA9IG5hdmJhcl9hbGxfY29sb3JzXG4gICRjb250YWluZXIuYXBwZW5kKCc8aDY+QnJhbmQgTG9nbyBWYXJpYW50czwvaDY+JylcbiAgdmFyICRsb2dvX3ZhcmlhbnRzID0gJCgnPGRpdiAvPicsIHtcbiAgICAnY2xhc3MnOiAnZC1mbGV4J1xuICB9KVxuICAkY29udGFpbmVyLmFwcGVuZCgkbG9nb192YXJpYW50cylcbiAgdmFyICRjbGVhcl9idG4gPSAkKCc8YSAvPicsIHtcbiAgICBocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJ1xuICB9KS50ZXh0KCdjbGVhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGxvZ28gPSAkKCcuYnJhbmQtbGluaycpXG4gICAgbG9nb19za2lucy5tYXAoZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRsb2dvLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcbiAgfSlcbiAgJGNvbnRhaW5lci5hcHBlbmQoY3JlYXRlU2tpbkJsb2NrKGxvZ29fc2tpbnMsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcbiAgICB2YXIgJGxvZ28gPSAkKCcuYnJhbmQtbGluaycpXG4gICAgbG9nb19za2lucy5tYXAoZnVuY3Rpb24gKHNraW4pIHtcbiAgICAgICRsb2dvLnJlbW92ZUNsYXNzKHNraW4pXG4gICAgfSlcbiAgICAkbG9nby5hZGRDbGFzcyhjb2xvcilcbiAgfSkuYXBwZW5kKCRjbGVhcl9idG4pKVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraW5CbG9jayhjb2xvcnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyICRibG9jayA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICAnY2xhc3MnOiAnZC1mbGV4IGZsZXgtd3JhcCBtYi0zJ1xuICAgIH0pXG5cbiAgICBjb2xvcnMubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgdmFyICRjb2xvciA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICAgICdjbGFzcyc6ICh0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnID8gY29sb3Iuam9pbignICcpIDogY29sb3IpLnJlcGxhY2UoJ25hdmJhci0nLCAnYmctJykucmVwbGFjZSgnYWNjZW50LScsICdiZy0nKSArICcgZWxldmF0aW9uLTInXG4gICAgICB9KVxuXG4gICAgICAkYmxvY2suYXBwZW5kKCRjb2xvcilcblxuICAgICAgJGNvbG9yLmRhdGEoJ2NvbG9yJywgY29sb3IpXG5cbiAgICAgICRjb2xvci5jc3Moe1xuICAgICAgICB3aWR0aCAgICAgICA6ICc0MHB4JyxcbiAgICAgICAgaGVpZ2h0ICAgICAgOiAnMjBweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzI1cHgnLFxuICAgICAgICBtYXJnaW5SaWdodCA6IDEwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICBvcGFjaXR5ICAgICA6IDAuOCxcbiAgICAgICAgY3Vyc29yICAgICAgOiAncG9pbnRlcidcbiAgICAgIH0pXG5cbiAgICAgICRjb2xvci5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuY3NzKHsgb3BhY2l0eTogMSB9KS5yZW1vdmVDbGFzcygnZWxldmF0aW9uLTInKS5hZGRDbGFzcygnZWxldmF0aW9uLTQnKVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNzcyh7IG9wYWNpdHk6IDAuOCB9KS5yZW1vdmVDbGFzcygnZWxldmF0aW9uLTQnKS5hZGRDbGFzcygnZWxldmF0aW9uLTInKVxuICAgICAgfSlcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICRjb2xvci5vbignY2xpY2snLCBjYWxsYmFjaylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICRibG9ja1xuICB9XG5cbiAgJCgnLnByb2R1Y3QtaW1hZ2UtdGh1bWInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpbWFnZV9lbGVtZW50ID0gJCh0aGlzKS5maW5kKCdpbWcnKTtcbiAgICAkKCcucHJvZHVjdC1pbWFnZScpLnByb3AoJ3NyYycsICQoaW1hZ2VfZWxlbWVudCkuYXR0cignc3JjJykpXG4gICAgJCgnLnByb2R1Y3QtaW1hZ2UtdGh1bWIuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcblxuICAkKFwiaW5wdXRbZGF0YS1ib290c3RyYXAtc3dpdGNoXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5ib290c3RyYXBTd2l0Y2goJ3N0YXRlJywgJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpO1xuICB9KTtcblxufSkoalF1ZXJ5KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==