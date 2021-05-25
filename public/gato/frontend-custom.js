(self["webpackChunkbingo"] = self["webpackChunkbingo"] || []).push([["frontend-custom"],{

/***/ "./assets/frontend/js/custom.js":
/*!**************************************!*\
  !*** ./assets/frontend/js/custom.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

(function ($) {
  $(window).on('load', function () {
    $('#preloader').fadeOut(1000);
  });
})(jQuery);

jQuery(document).ready(function () {
  'use strict';

  jQuery(window).load(function () {
    jQuery('.body-wrapper').each(function () {
      var header_area = jQuery('.header');
      var main_area = header_area.children('.navbar-default');
      var logo = main_area.find('.navbar-header');
      var navigation = main_area.find('.navbar-collapse');
      var original = {
        nav_top: navigation.css('margin-top')
      };
      jQuery(window).scroll(function () {
        if (main_area.hasClass('bb-fixed-header') && (jQuery(this).scrollTop() === 0 || jQuery(this).width() < 750)) {
          main_area.removeClass('bb-fixed-header').appendTo(header_area);
          navigation.animate({
            'margin-top': original.nav_top
          }, {
            duration: 300,
            queue: false,
            complete: function complete() {
              header_area.css('height', 'auto');
            }
          });
        } else if (!main_area.hasClass('bb-fixed-header') && jQuery(this).width() > 750 && jQuery(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt(jQuery('html').css('margin-top'), 10)) {
          header_area.css('height', header_area.height());
          main_area.css({
            'opacity': '0'
          }).addClass('bb-fixed-header');
          main_area.appendTo(jQuery('body')).animate({
            'opacity': 1
          });
          navigation.css({
            'margin-top': '0px'
          });
        }
      });
    });
    jQuery(window).trigger('resize');
    jQuery(window).trigger('scroll');
  });
  var jQueryheroSlider = jQuery('.main-slider .inner');

  if (jQueryheroSlider.length > 0) {
    jQueryheroSlider.each(function () {
      var loop = jQuery(this).parent().data('loop'),
          autoplay = jQuery(this).parent().data('autoplay'),
          interval = jQuery(this).parent().data('interval') || 3000;
      jQuery(this).owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        navText: [],
        autoplay: false,
        autoplayTimeout: interval,
        autoplayHoverPause: true,
        smartSpeed: 700
      });
    });
  }

  jQuery('.rtl .main-slider .inner').owlCarousel({
    rtl: true
  });

  function resizeContentMobile() {
    var height = jQuery(window).height() - 119;
    jQuery('.slideResize').height(height);
  }

  resizeContentMobile();

  function resizeContent() {
    var height = jQuery(window).height() - 159;
    jQuery('.slideResize').height(height);
  }

  resizeContent();

  if (jQuery(window).width() < 768) {
    resizeContentMobile();
  } else {
    resizeContent();
  }

  jQuery(window).resize(function () {
    resizeContent();
    resizeContentMobile();
  });
  jQuery('a[href="#pageTop"]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    jQuery('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });
  jQuery('.scrolling  a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var target = jQuery(this).attr('href');
    jQuery(target).velocity('scroll', {
      duration: 800,
      offset: -150,
      easing: 'easeOutExpo',
      mobileHA: false
    });
  });
});
jQuery(document).ready(function ($) {
  $('.tilt-image img').tilt({
    maxTilt: 20,
    perspective: 1000
  });
});
jQuery(document).ready(function ($) {
  $('.tilt-image-gallery img').tilt({
    maxTilt: 20,
    perspective: 700,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1,
    speed: 500,
    transition: true,
    disableAxis: null,
    reset: true,
    glare: false,
    maxGlare: 1
  });
});
jQuery(window).on('elementor/frontend/init', function () {
  elementorFrontend.hooks.addAction('frontend/element_ready/team_section.default', function () {
    jQuery(".team-slider").owlCarousel({
      items: 4,
      autoplay: true,
      loop: true,
      dots: true,
      responsive: {
        0: {
          nav: false,
          items: 1
        },
        400: {
          nav: false,
          items: 1
        },
        600: {
          nav: false,
          items: 2
        },
        650: {
          nav: false,
          items: 2
        },
        700: {
          nav: false,
          items: 2
        },
        770: {
          nav: false,
          items: 3
        },
        800: {
          nav: false,
          items: 3
        },
        1000: {
          items: 4
        }
      }
    });
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/team_section.default', function () {
    jQuery('.angel-tab li a:first').tab('show');
  });
  elementorFrontend.hooks.addAction('frontend/element_ready/slider.default', function () {
    var jQueryheroSlider = jQuery('.main-slider .inner');

    if (jQueryheroSlider.length > 0) {
      jQueryheroSlider.each(function () {
        var loop = jQuery(this).parent().data('loop'),
            autoplay = jQuery(this).parent().data('autoplay'),
            interval = jQuery(this).parent().data('interval') || 3000;
        jQuery(this).owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          nav: true,
          dots: true,
          navText: [],
          autoplay: false,
          autoplayTimeout: interval,
          autoplayHoverPause: true,
          smartSpeed: 700
        });
      });
    }

    jQuery('.rtl .main-slider .inner').owlCarousel({
      rtl: true
    });

    function resizeContentMobile() {
      var height = jQuery(window).height() - 119;
      jQuery('.slideResize').height(height);
    }

    resizeContentMobile();

    function resizeContent() {
      var height = jQuery(window).height() - 159;
      jQuery('.slideResize').height(height);
    }

    resizeContent();

    if (jQuery(window).width() < 768) {
      resizeContentMobile();
    } else {
      resizeContent();
    }

    jQuery(window).resize(function () {
      resizeContent();
      resizeContentMobile();
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_well-known-sy-07cc72","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_parse-int_js"], () => (__webpack_exec__("./assets/frontend/js/custom.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5nby8uL2Fzc2V0cy9mcm9udGVuZC9qcy9jdXN0b20uanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIm9uIiwiZmFkZU91dCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJsb2FkIiwiZWFjaCIsImhlYWRlcl9hcmVhIiwibWFpbl9hcmVhIiwiY2hpbGRyZW4iLCJsb2dvIiwiZmluZCIsIm5hdmlnYXRpb24iLCJvcmlnaW5hbCIsIm5hdl90b3AiLCJjc3MiLCJzY3JvbGwiLCJoYXNDbGFzcyIsInNjcm9sbFRvcCIsIndpZHRoIiwicmVtb3ZlQ2xhc3MiLCJhcHBlbmRUbyIsImFuaW1hdGUiLCJkdXJhdGlvbiIsInF1ZXVlIiwiY29tcGxldGUiLCJvZmZzZXQiLCJ0b3AiLCJoZWlnaHQiLCJwYXJzZUludCIsImFkZENsYXNzIiwidHJpZ2dlciIsImpRdWVyeWhlcm9TbGlkZXIiLCJsZW5ndGgiLCJsb29wIiwicGFyZW50IiwiZGF0YSIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwibWFyZ2luIiwibmF2IiwiZG90cyIsIm5hdlRleHQiLCJhdXRvcGxheVRpbWVvdXQiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJzbWFydFNwZWVkIiwicnRsIiwicmVzaXplQ29udGVudE1vYmlsZSIsInJlc2l6ZUNvbnRlbnQiLCJyZXNpemUiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJhdHRyIiwidmVsb2NpdHkiLCJlYXNpbmciLCJtb2JpbGVIQSIsInRpbHQiLCJtYXhUaWx0IiwicGVyc3BlY3RpdmUiLCJzY2FsZSIsInNwZWVkIiwidHJhbnNpdGlvbiIsImRpc2FibGVBeGlzIiwicmVzZXQiLCJnbGFyZSIsIm1heEdsYXJlIiwiZWxlbWVudG9yRnJvbnRlbmQiLCJob29rcyIsImFkZEFjdGlvbiIsInJlc3BvbnNpdmUiLCJ0YWIiXSwibWFwcGluZ3MiOiI7Ozs7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QixNQUFmLEtBQXdCLEdBQW5DO0FBQXVDMUIsWUFBTSxDQUFDLGNBQUQsQ0FBTixDQUF1QjBCLE1BQXZCLENBQThCQSxNQUE5QjtBQUF1Qzs7QUFDN0hzQixpQkFBYTs7QUFBRyxRQUFHaEQsTUFBTSxDQUFDSCxNQUFELENBQU4sQ0FBZW9CLEtBQWYsS0FBdUIsR0FBMUIsRUFBOEI7QUFBQzhCLHlCQUFtQjtBQUFJLEtBQXRELE1BQ1o7QUFBQ0MsbUJBQWE7QUFBSTs7QUFDdEJoRCxVQUFNLENBQUNILE1BQUQsQ0FBTixDQUFlb0QsTUFBZixDQUFzQixZQUFVO0FBQUNELG1CQUFhO0FBQUdELHlCQUFtQjtBQUFJLEtBQXhFO0FBQTJFLEdBTDB2QztBQUt2dkMsQ0FMdXNCLEUiLCJmaWxlIjoiZnJvbnRlbmQtY3VzdG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpeyQod2luZG93KS5vbignbG9hZCcsZnVuY3Rpb24oKXskKCcjcHJlbG9hZGVyJykuZmFkZU91dCgxMDAwKTt9KTt9KShqUXVlcnkpO2pRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXsndXNlIHN0cmljdCc7alF1ZXJ5KHdpbmRvdykubG9hZChmdW5jdGlvbigpe2pRdWVyeSgnLmJvZHktd3JhcHBlcicpLmVhY2goZnVuY3Rpb24oKXt2YXIgaGVhZGVyX2FyZWE9alF1ZXJ5KCcuaGVhZGVyJyk7dmFyIG1haW5fYXJlYT1oZWFkZXJfYXJlYS5jaGlsZHJlbignLm5hdmJhci1kZWZhdWx0Jyk7dmFyIGxvZ289bWFpbl9hcmVhLmZpbmQoJy5uYXZiYXItaGVhZGVyJyk7dmFyIG5hdmlnYXRpb249bWFpbl9hcmVhLmZpbmQoJy5uYXZiYXItY29sbGFwc2UnKTt2YXIgb3JpZ2luYWw9e25hdl90b3A6bmF2aWdhdGlvbi5jc3MoJ21hcmdpbi10b3AnKX07alF1ZXJ5KHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7aWYobWFpbl9hcmVhLmhhc0NsYXNzKCdiYi1maXhlZC1oZWFkZXInKSYmKGpRdWVyeSh0aGlzKS5zY3JvbGxUb3AoKT09PTB8fGpRdWVyeSh0aGlzKS53aWR0aCgpPDc1MCkpe21haW5fYXJlYS5yZW1vdmVDbGFzcygnYmItZml4ZWQtaGVhZGVyJykuYXBwZW5kVG8oaGVhZGVyX2FyZWEpO25hdmlnYXRpb24uYW5pbWF0ZSh7J21hcmdpbi10b3AnOm9yaWdpbmFsLm5hdl90b3B9LHtkdXJhdGlvbjozMDAscXVldWU6ZmFsc2UsY29tcGxldGU6ZnVuY3Rpb24oKXtoZWFkZXJfYXJlYS5jc3MoJ2hlaWdodCcsJ2F1dG8nKTt9fSk7fWVsc2UgaWYoIW1haW5fYXJlYS5oYXNDbGFzcygnYmItZml4ZWQtaGVhZGVyJykmJmpRdWVyeSh0aGlzKS53aWR0aCgpPjc1MCYmalF1ZXJ5KHRoaXMpLnNjcm9sbFRvcCgpPmhlYWRlcl9hcmVhLm9mZnNldCgpLnRvcCtoZWFkZXJfYXJlYS5oZWlnaHQoKS1wYXJzZUludChqUXVlcnkoJ2h0bWwnKS5jc3MoJ21hcmdpbi10b3AnKSwxMCkpe2hlYWRlcl9hcmVhLmNzcygnaGVpZ2h0JyxoZWFkZXJfYXJlYS5oZWlnaHQoKSk7bWFpbl9hcmVhLmNzcyh7J29wYWNpdHknOicwJ30pLmFkZENsYXNzKCdiYi1maXhlZC1oZWFkZXInKTttYWluX2FyZWEuYXBwZW5kVG8oalF1ZXJ5KCdib2R5JykpLmFuaW1hdGUoeydvcGFjaXR5JzoxfSk7bmF2aWdhdGlvbi5jc3MoeydtYXJnaW4tdG9wJzonMHB4J30pO319KTt9KTtqUXVlcnkod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtqUXVlcnkod2luZG93KS50cmlnZ2VyKCdzY3JvbGwnKTt9KTt2YXIgalF1ZXJ5aGVyb1NsaWRlcj1qUXVlcnkoJy5tYWluLXNsaWRlciAuaW5uZXInKTtpZihqUXVlcnloZXJvU2xpZGVyLmxlbmd0aD4wKXtqUXVlcnloZXJvU2xpZGVyLmVhY2goZnVuY3Rpb24oKXt2YXIgbG9vcD1qUXVlcnkodGhpcykucGFyZW50KCkuZGF0YSgnbG9vcCcpLGF1dG9wbGF5PWpRdWVyeSh0aGlzKS5wYXJlbnQoKS5kYXRhKCdhdXRvcGxheScpLGludGVydmFsPWpRdWVyeSh0aGlzKS5wYXJlbnQoKS5kYXRhKCdpbnRlcnZhbCcpfHwzMDAwO2pRdWVyeSh0aGlzKS5vd2xDYXJvdXNlbCh7aXRlbXM6MSxsb29wOnRydWUsbWFyZ2luOjAsbmF2OnRydWUsZG90czp0cnVlLG5hdlRleHQ6W10sYXV0b3BsYXk6ZmFsc2UsYXV0b3BsYXlUaW1lb3V0OmludGVydmFsLGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlLHNtYXJ0U3BlZWQ6NzAwfSk7fSk7fVxyXG4gICAgalF1ZXJ5KCcucnRsIC5tYWluLXNsaWRlciAuaW5uZXInKS5vd2xDYXJvdXNlbCh7cnRsOnRydWV9KTtmdW5jdGlvbiByZXNpemVDb250ZW50TW9iaWxlKCl7dmFyIGhlaWdodD1qUXVlcnkod2luZG93KS5oZWlnaHQoKS0xMTk7alF1ZXJ5KCcuc2xpZGVSZXNpemUnKS5oZWlnaHQoaGVpZ2h0KTt9XHJcbiAgICByZXNpemVDb250ZW50TW9iaWxlKCk7ZnVuY3Rpb24gcmVzaXplQ29udGVudCgpe3ZhciBoZWlnaHQ9alF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCktMTU5O2pRdWVyeSgnLnNsaWRlUmVzaXplJykuaGVpZ2h0KGhlaWdodCk7fVxyXG4gICAgcmVzaXplQ29udGVudCgpO2lmKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk8NzY4KXtyZXNpemVDb250ZW50TW9iaWxlKCk7fVxyXG4gICAgZWxzZXtyZXNpemVDb250ZW50KCk7fVxyXG4gICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7cmVzaXplQ29udGVudCgpO3Jlc2l6ZUNvbnRlbnRNb2JpbGUoKTt9KTtqUXVlcnkoJ2FbaHJlZj1cIiNwYWdlVG9wXCJdJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7ZS5zdG9wUHJvcGFnYXRpb24oKTtqUXVlcnkoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6MH0sMTUwMCk7cmV0dXJuIGZhbHNlO30pO2pRdWVyeSgnLnNjcm9sbGluZyAgYVtocmVmKj1cIiNcIl0nKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTtlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciB0YXJnZXQ9alF1ZXJ5KHRoaXMpLmF0dHIoJ2hyZWYnKTtqUXVlcnkodGFyZ2V0KS52ZWxvY2l0eSgnc2Nyb2xsJyx7ZHVyYXRpb246ODAwLG9mZnNldDotMTUwLGVhc2luZzonZWFzZU91dEV4cG8nLG1vYmlsZUhBOmZhbHNlfSk7fSk7fSk7alF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKXskKCcudGlsdC1pbWFnZSBpbWcnKS50aWx0KHttYXhUaWx0OjIwLHBlcnNwZWN0aXZlOjEwMDAsfSk7fSk7alF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKXskKCcudGlsdC1pbWFnZS1nYWxsZXJ5IGltZycpLnRpbHQoe21heFRpbHQ6MjAscGVyc3BlY3RpdmU6NzAwLGVhc2luZzpcImN1YmljLWJlemllciguMDMsLjk4LC41MiwuOTkpXCIsc2NhbGU6MSxzcGVlZDo1MDAsdHJhbnNpdGlvbjp0cnVlLGRpc2FibGVBeGlzOm51bGwscmVzZXQ6dHJ1ZSxnbGFyZTpmYWxzZSxtYXhHbGFyZToxfSk7fSk7alF1ZXJ5KHdpbmRvdykub24oJ2VsZW1lbnRvci9mcm9udGVuZC9pbml0JyxmdW5jdGlvbigpe2VsZW1lbnRvckZyb250ZW5kLmhvb2tzLmFkZEFjdGlvbignZnJvbnRlbmQvZWxlbWVudF9yZWFkeS90ZWFtX3NlY3Rpb24uZGVmYXVsdCcsZnVuY3Rpb24oKXtqUXVlcnkoXCIudGVhbS1zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe2l0ZW1zOjQsYXV0b3BsYXk6dHJ1ZSxsb29wOnRydWUsZG90czp0cnVlLHJlc3BvbnNpdmU6ezA6e25hdjpmYWxzZSxpdGVtczoxfSw0MDA6e25hdjpmYWxzZSxpdGVtczoxfSw2MDA6e25hdjpmYWxzZSxpdGVtczoyfSw2NTA6e25hdjpmYWxzZSxpdGVtczoyfSw3MDA6e25hdjpmYWxzZSxpdGVtczoyfSw3NzA6e25hdjpmYWxzZSxpdGVtczozfSw4MDA6e25hdjpmYWxzZSxpdGVtczozfSwxMDAwOntpdGVtczo0fX19KTt9KTtlbGVtZW50b3JGcm9udGVuZC5ob29rcy5hZGRBY3Rpb24oJ2Zyb250ZW5kL2VsZW1lbnRfcmVhZHkvdGVhbV9zZWN0aW9uLmRlZmF1bHQnLGZ1bmN0aW9uKCl7alF1ZXJ5KCcuYW5nZWwtdGFiIGxpIGE6Zmlyc3QnKS50YWIoJ3Nob3cnKX0pO2VsZW1lbnRvckZyb250ZW5kLmhvb2tzLmFkZEFjdGlvbignZnJvbnRlbmQvZWxlbWVudF9yZWFkeS9zbGlkZXIuZGVmYXVsdCcsZnVuY3Rpb24oKXt2YXIgalF1ZXJ5aGVyb1NsaWRlcj1qUXVlcnkoJy5tYWluLXNsaWRlciAuaW5uZXInKTtpZihqUXVlcnloZXJvU2xpZGVyLmxlbmd0aD4wKXtqUXVlcnloZXJvU2xpZGVyLmVhY2goZnVuY3Rpb24oKXt2YXIgbG9vcD1qUXVlcnkodGhpcykucGFyZW50KCkuZGF0YSgnbG9vcCcpLGF1dG9wbGF5PWpRdWVyeSh0aGlzKS5wYXJlbnQoKS5kYXRhKCdhdXRvcGxheScpLGludGVydmFsPWpRdWVyeSh0aGlzKS5wYXJlbnQoKS5kYXRhKCdpbnRlcnZhbCcpfHwzMDAwO2pRdWVyeSh0aGlzKS5vd2xDYXJvdXNlbCh7aXRlbXM6MSxsb29wOnRydWUsbWFyZ2luOjAsbmF2OnRydWUsZG90czp0cnVlLG5hdlRleHQ6W10sYXV0b3BsYXk6ZmFsc2UsYXV0b3BsYXlUaW1lb3V0OmludGVydmFsLGF1dG9wbGF5SG92ZXJQYXVzZTp0cnVlLHNtYXJ0U3BlZWQ6NzAwfSk7fSk7fVxyXG4gICAgalF1ZXJ5KCcucnRsIC5tYWluLXNsaWRlciAuaW5uZXInKS5vd2xDYXJvdXNlbCh7cnRsOnRydWV9KTtmdW5jdGlvbiByZXNpemVDb250ZW50TW9iaWxlKCl7dmFyIGhlaWdodD1qUXVlcnkod2luZG93KS5oZWlnaHQoKS0xMTk7alF1ZXJ5KCcuc2xpZGVSZXNpemUnKS5oZWlnaHQoaGVpZ2h0KTt9XHJcbiAgICByZXNpemVDb250ZW50TW9iaWxlKCk7ZnVuY3Rpb24gcmVzaXplQ29udGVudCgpe3ZhciBoZWlnaHQ9alF1ZXJ5KHdpbmRvdykuaGVpZ2h0KCktMTU5O2pRdWVyeSgnLnNsaWRlUmVzaXplJykuaGVpZ2h0KGhlaWdodCk7fVxyXG4gICAgcmVzaXplQ29udGVudCgpO2lmKGpRdWVyeSh3aW5kb3cpLndpZHRoKCk8NzY4KXtyZXNpemVDb250ZW50TW9iaWxlKCk7fVxyXG4gICAgZWxzZXtyZXNpemVDb250ZW50KCk7fVxyXG4gICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7cmVzaXplQ29udGVudCgpO3Jlc2l6ZUNvbnRlbnRNb2JpbGUoKTt9KTt9KTt9KTsiXSwic291cmNlUm9vdCI6IiJ9