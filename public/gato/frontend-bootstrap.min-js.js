(self["webpackChunkbingo"] = self["webpackChunkbingo"] || []).push([["frontend-bootstrap.min-js"],{

/***/ "./assets/frontend/js/bootstrap.min.js":
/*!*********************************************!*\
  !*** ./assets/frontend/js/bootstrap.min.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
  "use strict";

  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery), +function (t) {
  "use strict";

  function e() {
    var t = document.createElement("bootstrap"),
        e = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var i in e) {
      if (void 0 !== t.style[i]) return {
        end: e[i]
      };
    }

    return !1;
  }

  t.fn.emulateTransitionEnd = function (e) {
    var i = !1,
        o = this;
    t(this).one("bsTransitionEnd", function () {
      i = !0;
    });

    var n = function n() {
      i || t(o).trigger(t.support.transition.end);
    };

    return setTimeout(n, e), this;
  }, t(function () {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function handle(e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
      }
    });
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    return this.each(function () {
      var i = t(this),
          n = i.data("bs.alert");
      n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i);
    });
  }

  var i = '[data-dismiss="alert"]',
      o = function o(e) {
    t(e).on("click", i, this.close);
  };

  o.VERSION = "3.3.6", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
    function i() {
      a.detach().trigger("closed.bs.alert").remove();
    }

    var n = t(this),
        s = n.attr("data-target");
    s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
    var a = t(s);
    e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i());
  };
  var n = t.fn.alert;
  t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
    return t.fn.alert = n, this;
  }, t(document).on("click.bs.alert.data-api", i, o.prototype.close);
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    return this.each(function () {
      var o = t(this),
          n = o.data("bs.button"),
          s = "object" == _typeof(e) && e;
      n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e);
    });
  }

  var i = function i(e, o) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1;
  };

  i.VERSION = "3.3.6", i.DEFAULTS = {
    loadingText: "loading..."
  }, i.prototype.setState = function (e) {
    var i = "disabled",
        o = this.$element,
        n = o.is("input") ? "val" : "html",
        s = o.data();
    e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
      o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i));
    }, this), 0);
  }, i.prototype.toggle = function () {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');

    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };
  var o = t.fn.button;
  t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
    return t.fn.button = o, this;
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
    var o = t(i.target);
    o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    return this.each(function () {
      var o = t(this),
          n = o.data("bs.carousel"),
          s = t.extend({}, i.DEFAULTS, o.data(), "object" == _typeof(e) && e),
          a = "string" == typeof e ? e : s.slide;
      n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle();
    });
  }

  var i = function i(e, _i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
  };

  i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, i.prototype.keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;

        case 39:
          this.next();
          break;

        default:
          return;
      }

      t.preventDefault();
    }
  }, i.prototype.cycle = function (e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
  }, i.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active);
  }, i.prototype.getItemForDirection = function (t, e) {
    var i = this.getItemIndex(e),
        o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
    if (o && !this.options.wrap) return e;
    var n = "prev" == t ? -1 : 1,
        s = (i + n) % this.$items.length;
    return this.$items.eq(s);
  }, i.prototype.to = function (t) {
    var e = this,
        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      e.to(t);
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
  }, i.prototype.pause = function (e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, i.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, i.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, i.prototype.slide = function (e, o) {
    var n = this.$element.find(".item.active"),
        s = o || this.getItemForDirection(e, n),
        a = this.interval,
        r = "next" == e ? "left" : "right",
        l = this;
    if (s.hasClass("active")) return this.sliding = !1;
    var h = s[0],
        d = t.Event("slide.bs.carousel", {
      relatedTarget: h,
      direction: r
    });

    if (this.$element.trigger(d), !d.isDefaultPrevented()) {
      if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var p = t(this.$indicators.children()[this.getItemIndex(s)]);
        p && p.addClass("active");
      }

      var c = t.Event("slid.bs.carousel", {
        relatedTarget: h,
        direction: r
      });
      return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
        s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
          l.$element.trigger(c);
        }, 0);
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this;
    }
  };
  var o = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
    return t.fn.carousel = o, this;
  };

  var n = function n(i) {
    var o,
        n = t(this),
        s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));

    if (s.hasClass("carousel")) {
      var a = t.extend({}, s.data(), n.data()),
          r = n.attr("data-slide-to");
      r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault();
    }
  };

  t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
    t('[data-ride="carousel"]').each(function () {
      var i = t(this);
      e.call(i, i.data());
    });
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    var i,
        o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(o);
  }

  function i(e) {
    return this.each(function () {
      var i = t(this),
          n = i.data("bs.collapse"),
          s = t.extend({}, o.DEFAULTS, i.data(), "object" == _typeof(e) && e);
      !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]();
    });
  }

  var o = function o(e, i) {
    this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };

  o.VERSION = "3.3.6", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
    toggle: !0
  }, o.prototype.dimension = function () {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height";
  }, o.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e,
          n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");

      if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
        var s = t.Event("show.bs.collapse");

        if (this.$element.trigger(s), !s.isDefaultPrevented()) {
          n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
          var a = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;

          var r = function r() {
            this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };

          if (!t.support.transition) return r.call(this);
          var l = t.camelCase(["scroll", a].join("-"));
          this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
        }
      }
    }
  }, o.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");

      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;

        var n = function n() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };

        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this);
      }
    }
  }, o.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, o.prototype.getParent = function () {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
      var n = t(o);
      this.addAriaAndCollapsedClass(e(n), n);
    }, this)).end();
  }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
  };
  var n = t.fn.collapse;
  t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
    return t.fn.collapse = n, this;
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
    var n = t(this);
    n.attr("data-target") || o.preventDefault();
    var s = e(n),
        a = s.data("bs.collapse"),
        r = a ? "toggle" : n.data();
    i.call(s, r);
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    var i = e.attr("data-target");
    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var o = i && t(i);
    return o && o.length ? o : e.parent();
  }

  function i(i) {
    i && 3 === i.which || (t(n).remove(), t(s).each(function () {
      var o = t(this),
          n = e(o),
          s = {
        relatedTarget: this
      };
      n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))));
    }));
  }

  function o(e) {
    return this.each(function () {
      var i = t(this),
          o = i.data("bs.dropdown");
      o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i);
    });
  }

  var n = ".dropdown-backdrop",
      s = '[data-toggle="dropdown"]',
      a = function a(e) {
    t(e).on("click.bs.dropdown", this.toggle);
  };

  a.VERSION = "3.3.6", a.prototype.toggle = function (o) {
    var n = t(this);

    if (!n.is(".disabled, :disabled")) {
      var s = e(n),
          a = s.hasClass("open");

      if (i(), !a) {
        "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
        var r = {
          relatedTarget: this
        };
        if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
        n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r));
      }

      return !1;
    }
  }, a.prototype.keydown = function (i) {
    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
      var o = t(this);

      if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
        var n = e(o),
            a = n.hasClass("open");
        if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
        var r = " li:not(.disabled):visible a",
            l = n.find(".dropdown-menu" + r);

        if (l.length) {
          var h = l.index(i.target);
          38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus");
        }
      }
    }
  };
  var r = t.fn.dropdown;
  t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
    return t.fn.dropdown = r, this;
  }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation();
  }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown);
}(jQuery), +function (t) {
  "use strict";

  function e(e, o) {
    return this.each(function () {
      var n = t(this),
          s = n.data("bs.modal"),
          a = t.extend({}, i.DEFAULTS, n.data(), "object" == _typeof(e) && e);
      s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o);
    });
  }

  var i = function i(e, _i2) {
    this.options = _i2, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, i.prototype.toggle = function (t) {
    return this.isShown ? this.hide() : this.show(t);
  }, i.prototype.show = function (e) {
    var o = this,
        n = t.Event("show.bs.modal", {
      relatedTarget: e
    });
    this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      o.$element.one("mouseup.dismiss.bs.modal", function (e) {
        t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var n = t.support.transition && o.$element.hasClass("fade");
      o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
      var s = t.Event("shown.bs.modal", {
        relatedTarget: e
      });
      n ? o.$dialog.one("bsTransitionEnd", function () {
        o.$element.trigger("focus").trigger(s);
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s);
    }));
  }, i.prototype.hide = function (e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal());
  }, i.prototype.enforceFocus = function () {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
      this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
    }, this));
  }, i.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
      27 == t.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, i.prototype.resize = function () {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
  }, i.prototype.hideModal = function () {
    var t = this;
    this.$element.hide(), this.backdrop(function () {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
    });
  }, i.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, i.prototype.backdrop = function (e) {
    var o = this,
        n = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var s = t.support.transition && n;
      if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");

      var a = function a() {
        o.removeBackdrop(), e && e();
      };

      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a();
    } else e && e();
  }, i.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, i.prototype.adjustDialog = function () {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    });
  }, i.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, i.prototype.checkScrollbar = function () {
    var t = window.innerWidth;

    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar();
  }, i.prototype.setScrollbar = function () {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
  }, i.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, i.prototype.measureScrollbar = function () {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e;
  };
  var o = t.fn.modal;
  t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
    return t.fn.modal = o, this;
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
    var o = t(this),
        n = o.attr("href"),
        s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
        a = s.data("bs.modal") ? "toggle" : t.extend({
      remote: !/#/.test(n) && n
    }, s.data(), o.data());
    o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
        o.is(":visible") && o.trigger("focus");
      });
    }), e.call(s, a, this);
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    return this.each(function () {
      var o = t(this),
          n = o.data("bs.tooltip"),
          s = "object" == _typeof(e) && e;
      (n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]());
    });
  }

  var i = function i(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e);
  };

  i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, i.prototype.init = function (e, i, o) {
    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");

    for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
      var a = n[s];
      if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));else if ("manual" != a) {
        var r = "hover" == a ? "mouseenter" : "focusin",
            l = "hover" == a ? "mouseleave" : "focusout";
        this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = t.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, i.prototype.getDefaults = function () {
    return i.DEFAULTS;
  }, i.prototype.getOptions = function (e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
    }), e;
  }, i.prototype.getDelegateOptions = function () {
    var e = {},
        i = this.getDefaults();
    return this._options && t.each(this._options, function (t, o) {
      i[t] != o && (e[t] = o);
    }), e;
  }, i.prototype.enter = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () {
      "in" == i.hoverState && i.show();
    }, i.options.delay.show)) : i.show());
  }, i.prototype.isInStateTrue = function () {
    for (var t in this.inState) {
      if (this.inState[t]) return !0;
    }

    return !1;
  }, i.prototype.leave = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () {
      "out" == i.hoverState && i.hide();
    }, i.options.delay.hide)) : i.hide());
  }, i.prototype.show = function () {
    var e = t.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !o) return;
      var n = this,
          s = this.tip(),
          a = this.getUID(this.type);
      this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
      var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
          l = /\s?auto?\s?/i,
          h = l.test(r);
      h && (r = r.replace(l, "") || "top"), s.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var d = this.getPosition(),
          p = s[0].offsetWidth,
          c = s[0].offsetHeight;

      if (h) {
        var f = r,
            u = this.getPosition(this.$viewport);
        r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r);
      }

      var g = this.getCalculatedOffset(r, d, p, c);
      this.applyPlacement(g, r);

      var v = function v() {
        var t = n.hoverState;
        n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n);
      };

      t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v();
    }
  }, i.prototype.applyPlacement = function (e, i) {
    var o = this.tip(),
        n = o[0].offsetWidth,
        s = o[0].offsetHeight,
        a = parseInt(o.css("margin-top"), 10),
        r = parseInt(o.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
      using: function using(t) {
        o.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        });
      }
    }, e), 0), o.addClass("in");
    var l = o[0].offsetWidth,
        h = o[0].offsetHeight;
    "top" == i && h != s && (e.top = e.top + s - h);
    var d = this.getViewportAdjustedDelta(i, e, l, h);
    d.left ? e.left += d.left : e.top += d.top;
    var p = /top|bottom/.test(i),
        c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
        f = p ? "offsetWidth" : "offsetHeight";
    o.offset(e), this.replaceArrow(c, o[0][f], p);
  }, i.prototype.replaceArrow = function (t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "");
  }, i.prototype.setContent = function () {
    var t = this.tip(),
        e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
  }, i.prototype.hide = function (e) {
    function o() {
      "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e();
    }

    var n = this,
        s = t(this.$tip),
        a = t.Event("hide.bs." + this.type);
    return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this);
  }, i.prototype.fixTitle = function () {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
  }, i.prototype.hasContent = function () {
    return this.getTitle();
  }, i.prototype.getPosition = function (e) {
    e = e || this.$element;
    var i = e[0],
        o = "BODY" == i.tagName,
        n = i.getBoundingClientRect();
    null == n.width && (n = t.extend({}, n, {
      width: n.right - n.left,
      height: n.bottom - n.top
    }));
    var s = o ? {
      top: 0,
      left: 0
    } : e.offset(),
        a = {
      scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
    },
        r = o ? {
      width: t(window).width(),
      height: t(window).height()
    } : null;
    return t.extend({}, n, a, r, s);
  }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
      top: e.top - o,
      left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - o / 2,
      left: e.left - i
    } : {
      top: e.top + e.height / 2 - o / 2,
      left: e.left + e.width
    };
  }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
    var n = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return n;
    var s = this.options.viewport && this.options.viewport.padding || 0,
        a = this.getPosition(this.$viewport);

    if (/right|left/.test(t)) {
      var r = e.top - s - a.scroll,
          l = e.top + s - a.scroll + o;
      r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l);
    } else {
      var h = e.left - s,
          d = e.left + s + i;
      h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d);
    }

    return n;
  }, i.prototype.getTitle = function () {
    var t,
        e = this.$element,
        i = this.options;
    return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title);
  }, i.prototype.getUID = function (t) {
    do {
      t += ~~(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  }, i.prototype.tip = function () {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, i.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, i.prototype.enable = function () {
    this.enabled = !0;
  }, i.prototype.disable = function () {
    this.enabled = !1;
  }, i.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, i.prototype.toggle = function (e) {
    var i = this;
    e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
  }, i.prototype.destroy = function () {
    var t = this;
    clearTimeout(this.timeout), this.hide(function () {
      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null;
    });
  };
  var o = t.fn.tooltip;
  t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
    return t.fn.tooltip = o, this;
  };
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    return this.each(function () {
      var o = t(this),
          n = o.data("bs.popover"),
          s = "object" == _typeof(e) && e;
      (n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]());
    });
  }

  var i = function i(t, e) {
    this.init("popover", t, e);
  };

  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
    return i.DEFAULTS;
  }, i.prototype.setContent = function () {
    var t = this.tip(),
        e = this.getTitle(),
        i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
  }, i.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, i.prototype.getContent = function () {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
  }, i.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var o = t.fn.popover;
  t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
    return t.fn.popover = o, this;
  };
}(jQuery), +function (t) {
  "use strict";

  function e(i, o) {
    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process();
  }

  function i(i) {
    return this.each(function () {
      var o = t(this),
          n = o.data("bs.scrollspy"),
          s = "object" == _typeof(i) && i;
      n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]();
    });
  }

  e.VERSION = "3.3.6", e.DEFAULTS = {
    offset: 10
  }, e.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, e.prototype.refresh = function () {
    var e = this,
        i = "offset",
        o = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var e = t(this),
          n = e.data("target") || e.attr("href"),
          s = /^#./.test(n) && t(n);
      return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null;
    }).sort(function (t, e) {
      return t[0] - e[0];
    }).each(function () {
      e.offsets.push(this[0]), e.targets.push(this[1]);
    });
  }, e.prototype.process = function () {
    var t,
        e = this.$scrollElement.scrollTop() + this.options.offset,
        i = this.getScrollHeight(),
        o = this.options.offset + i - this.$scrollElement.height(),
        n = this.offsets,
        s = this.targets,
        a = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
    if (a && e < n[0]) return this.activeTarget = null, this.clear();

    for (t = n.length; t--;) {
      a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t]);
    }
  }, e.prototype.activate = function (e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        o = t(i).parents("li").addClass("active");
    o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy");
  }, e.prototype.clear = function () {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var o = t.fn.scrollspy;
  t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
    return t.fn.scrollspy = o, this;
  }, t(window).on("load.bs.scrollspy.data-api", function () {
    t('[data-spy="scroll"]').each(function () {
      var e = t(this);
      i.call(e, e.data());
    });
  });
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    return this.each(function () {
      var o = t(this),
          n = o.data("bs.tab");
      n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]();
    });
  }

  var i = function i(e) {
    this.element = t(e);
  };

  i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
    var e = this.element,
        i = e.closest("ul:not(.dropdown-menu)"),
        o = e.data("target");

    if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var n = i.find(".active:last a"),
          s = t.Event("hide.bs.tab", {
        relatedTarget: e[0]
      }),
          a = t.Event("show.bs.tab", {
        relatedTarget: n[0]
      });

      if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
        var r = t(o);
        this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
          n.trigger({
            type: "hidden.bs.tab",
            relatedTarget: e[0]
          }), e.trigger({
            type: "shown.bs.tab",
            relatedTarget: n[0]
          });
        });
      }
    }
  }, i.prototype.activate = function (e, o, n) {
    function s() {
      a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n();
    }

    var a = o.find("> .active"),
        r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
    a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in");
  };
  var o = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
    return t.fn.tab = o, this;
  };

  var n = function n(i) {
    i.preventDefault(), e.call(t(this), "show");
  };

  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
}(jQuery), +function (t) {
  "use strict";

  function e(e) {
    return this.each(function () {
      var o = t(this),
          n = o.data("bs.affix"),
          s = "object" == _typeof(e) && e;
      n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]();
    });
  }

  var i = function i(e, o) {
    this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };

  i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.getState = function (t, e, i, o) {
    var n = this.$target.scrollTop(),
        s = this.$element.offset(),
        a = this.$target.height();
    if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
    if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
    var r = null == this.affixed,
        l = r ? n : s.top,
        h = r ? a : e;
    return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1;
  }, i.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        e = this.$element.offset();
    return this.pinnedOffset = e.top - t;
  }, i.prototype.checkPositionWithEventLoop = function () {
    setTimeout(t.proxy(this.checkPosition, this), 1);
  }, i.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var e = this.$element.height(),
          o = this.options.offset,
          n = o.top,
          s = o.bottom,
          a = Math.max(t(document).height(), t(document.body).height());
      "object" != _typeof(o) && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
      var r = this.getState(a, e, n, s);

      if (this.affixed != r) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (r ? "-" + r : ""),
            h = t.Event(l + ".bs.affix");
        if (this.$element.trigger(h), h.isDefaultPrevented()) return;
        this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix");
      }

      "bottom" == r && this.$element.offset({
        top: a - e - s
      });
    }
  };
  var o = t.fn.affix;
  t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
    return t.fn.affix = o, this;
  }, t(window).on("load", function () {
    t('[data-spy="affix"]').each(function () {
      var i = t(this),
          o = i.data();
      o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o);
    });
  });
}(jQuery);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_well-known-sy-07cc72","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bed4a0","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-31b1f3","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_j-fb1e95"], () => (__webpack_exec__("./assets/frontend/js/bootstrap.min.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5nby8uL2Fzc2V0cy9mcm9udGVuZC9qcy9ib290c3RyYXAubWluLmpzIl0sIm5hbWVzIjpbImpRdWVyeSIsIkVycm9yIiwidCIsImUiLCJmbiIsImpxdWVyeSIsInNwbGl0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiV2Via2l0VHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJpIiwic3R5bGUiLCJlbmQiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsIm8iLCJvbmUiLCJuIiwidHJpZ2dlciIsInN1cHBvcnQiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJzcGVjaWFsIiwiYnNUcmFuc2l0aW9uRW5kIiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCJ0YXJnZXQiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsImVhY2giLCJkYXRhIiwiY2FsbCIsIm9uIiwiY2xvc2UiLCJWRVJTSU9OIiwiVFJBTlNJVElPTl9EVVJBVElPTiIsInByb3RvdHlwZSIsImEiLCJkZXRhY2giLCJyZW1vdmUiLCJzIiwiYXR0ciIsInJlcGxhY2UiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImNsb3Nlc3QiLCJFdmVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJhbGVydCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsInRvZ2dsZSIsInNldFN0YXRlIiwiJGVsZW1lbnQiLCJvcHRpb25zIiwiZXh0ZW5kIiwiREVGQVVMVFMiLCJpc0xvYWRpbmciLCJsb2FkaW5nVGV4dCIsInJlc2V0VGV4dCIsInByb3h5IiwiYWRkQ2xhc3MiLCJyZW1vdmVBdHRyIiwiZmluZCIsInByb3AiLCJ0b2dnbGVDbGFzcyIsImJ1dHRvbiIsInRlc3QiLCJ0eXBlIiwic2xpZGUiLCJ0byIsImludGVydmFsIiwicGF1c2UiLCJjeWNsZSIsIiRpbmRpY2F0b3JzIiwicGF1c2VkIiwic2xpZGluZyIsIiRhY3RpdmUiLCIkaXRlbXMiLCJrZXlib2FyZCIsImtleWRvd24iLCJkb2N1bWVudEVsZW1lbnQiLCJ3cmFwIiwidGFnTmFtZSIsIndoaWNoIiwicHJldiIsIm5leHQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXRJdGVtSW5kZXgiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImluZGV4IiwiZ2V0SXRlbUZvckRpcmVjdGlvbiIsImVxIiwiciIsImwiLCJoIiwiZCIsInJlbGF0ZWRUYXJnZXQiLCJkaXJlY3Rpb24iLCJwIiwiYyIsIm9mZnNldFdpZHRoIiwiam9pbiIsImNhcm91c2VsIiwid2luZG93IiwiJHRyaWdnZXIiLCJpZCIsInRyYW5zaXRpb25pbmciLCIkcGFyZW50IiwiZ2V0UGFyZW50IiwiYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzIiwiZGltZW5zaW9uIiwic2hvdyIsImNhbWVsQ2FzZSIsImhpZGUiLCJvZmZzZXRIZWlnaHQiLCJjb2xsYXBzZSIsImNvbnRhaW5zIiwiaW5zZXJ0QWZ0ZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJkcm9wZG93biIsIiRib2R5IiwiYm9keSIsIiRkaWFsb2ciLCIkYmFja2Ryb3AiLCJpc1Nob3duIiwib3JpZ2luYWxCb2R5UGFkIiwic2Nyb2xsYmFyV2lkdGgiLCJpZ25vcmVCYWNrZHJvcENsaWNrIiwicmVtb3RlIiwibG9hZCIsIkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04iLCJiYWNrZHJvcCIsImNoZWNrU2Nyb2xsYmFyIiwic2V0U2Nyb2xsYmFyIiwiZXNjYXBlIiwicmVzaXplIiwiYXBwZW5kVG8iLCJzY3JvbGxUb3AiLCJhZGp1c3REaWFsb2ciLCJlbmZvcmNlRm9jdXMiLCJvZmYiLCJoaWRlTW9kYWwiLCJoYXMiLCJoYW5kbGVVcGRhdGUiLCJyZXNldEFkanVzdG1lbnRzIiwicmVzZXRTY3JvbGxiYXIiLCJyZW1vdmVCYWNrZHJvcCIsImN1cnJlbnRUYXJnZXQiLCJmb2N1cyIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImNzcyIsInBhZGRpbmdMZWZ0IiwiYm9keUlzT3ZlcmZsb3dpbmciLCJwYWRkaW5nUmlnaHQiLCJpbm5lcldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJNYXRoIiwiYWJzIiwibGVmdCIsImNsaWVudFdpZHRoIiwibWVhc3VyZVNjcm9sbGJhciIsInBhcnNlSW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwicmVtb3ZlQ2hpbGQiLCJtb2RhbCIsImVuYWJsZWQiLCJ0aW1lb3V0IiwiaG92ZXJTdGF0ZSIsImluU3RhdGUiLCJpbml0IiwiYW5pbWF0aW9uIiwicGxhY2VtZW50Iiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJodG1sIiwiY29udGFpbmVyIiwidmlld3BvcnQiLCJwYWRkaW5nIiwiZ2V0T3B0aW9ucyIsIiR2aWV3cG9ydCIsImlzRnVuY3Rpb24iLCJjbGljayIsImhvdmVyIiwiY29uc3RydWN0b3IiLCJlbnRlciIsImxlYXZlIiwiX29wdGlvbnMiLCJmaXhUaXRsZSIsImdldERlZmF1bHRzIiwiZ2V0RGVsZWdhdGVPcHRpb25zIiwidGlwIiwiY2xlYXJUaW1lb3V0IiwiaXNJblN0YXRlVHJ1ZSIsImhhc0NvbnRlbnQiLCJvd25lckRvY3VtZW50IiwiZ2V0VUlEIiwic2V0Q29udGVudCIsInRvcCIsImRpc3BsYXkiLCJnZXRQb3NpdGlvbiIsImYiLCJ1IiwiYm90dG9tIiwid2lkdGgiLCJnIiwiZ2V0Q2FsY3VsYXRlZE9mZnNldCIsImFwcGx5UGxhY2VtZW50IiwidiIsIiR0aXAiLCJpc05hTiIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwicm91bmQiLCJnZXRWaWV3cG9ydEFkanVzdGVkRGVsdGEiLCJyZXBsYWNlQXJyb3ciLCJhcnJvdyIsImdldFRpdGxlIiwiaGVpZ2h0Iiwic2Nyb2xsIiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCIkYXJyb3ciLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImRlc3Ryb3kiLCJyZW1vdmVEYXRhIiwidG9vbHRpcCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwicG9wb3ZlciIsIiRzY3JvbGxFbGVtZW50Iiwib2Zmc2V0cyIsInRhcmdldHMiLCJhY3RpdmVUYXJnZXQiLCJwcm9jZXNzIiwicmVmcmVzaCIsImdldFNjcm9sbEhlaWdodCIsIm1heCIsImlzV2luZG93IiwibWFwIiwic29ydCIsInB1c2giLCJhY3RpdmF0ZSIsImNsZWFyIiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsInNjcm9sbHNweSIsImVsZW1lbnQiLCJ0YWIiLCIkdGFyZ2V0IiwiY2hlY2tQb3NpdGlvbiIsImNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wIiwiYWZmaXhlZCIsInVucGluIiwicGlubmVkT2Zmc2V0IiwiUkVTRVQiLCJnZXRTdGF0ZSIsImdldFBpbm5lZE9mZnNldCIsImFmZml4Iiwib2Zmc2V0Qm90dG9tIiwib2Zmc2V0VG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBRyxlQUFhLE9BQU9BLE1BQXZCLEVBQThCLE1BQU0sSUFBSUMsS0FBSixDQUFVLHdDQUFWLENBQU47QUFBMEQsQ0FBQyxVQUFTQyxDQUFULEVBQVc7QUFBQzs7QUFBYSxNQUFJQyxDQUFDLEdBQUNELENBQUMsQ0FBQ0UsRUFBRixDQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsQ0FBdkIsRUFBMEJBLEtBQTFCLENBQWdDLEdBQWhDLENBQU47QUFBMkMsTUFBR0gsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLLENBQUwsSUFBUUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLLENBQWIsSUFBZ0IsS0FBR0EsQ0FBQyxDQUFDLENBQUQsQ0FBSixJQUFTLEtBQUdBLENBQUMsQ0FBQyxDQUFELENBQWIsSUFBa0JBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSyxD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QWNlLENBQUMsR0FBQ0osQ0FBQyxDQUFDdUIsSUFBRixFQUFoQjtBQUF5Qm5CLE9BQUMsQ0FBQ2lOLE1BQUYsR0FBU2pOLENBQUMsQ0FBQ2lOLE1BQUYsSUFBVSxFQUFuQixFQUFzQixRQUFNak4sQ0FBQyxDQUFDb1EsWUFBUixLQUF1QnBRLENBQUMsQ0FBQ2lOLE1BQUYsQ0FBU1IsTUFBVCxHQUFnQnpNLENBQUMsQ0FBQ29RLFlBQXpDLENBQXRCLEVBQTZFLFFBQU1wUSxDQUFDLENBQUNxUSxTQUFSLEtBQW9CclEsQ0FBQyxDQUFDaU4sTUFBRixDQUFTYixHQUFULEdBQWFwTSxDQUFDLENBQUNxUSxTQUFuQyxDQUE3RSxFQUEySG5SLENBQUMsQ0FBQ2tDLElBQUYsQ0FBT3hCLENBQVAsRUFBU0ksQ0FBVCxDQUEzSDtBQUF1SSxLQUF4TTtBQUEwTSxHQUF6TyxDQUFqRztBQUE0VSxDQUFuMkUsQ0FBbzJFakIsTUFBcDJFLENBRG5zRSxDIiwiZmlsZSI6ImZyb250ZW5kLWJvb3RzdHJhcC5taW4tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZihcInVuZGVmaW5lZFwiPT10eXBlb2YgalF1ZXJ5KXRocm93IG5ldyBFcnJvcihcIkJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5XCIpOytmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgZT10LmZuLmpxdWVyeS5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCIuXCIpO2lmKGVbMF08MiYmZVsxXTw5fHwxPT1lWzBdJiY5PT1lWzFdJiZlWzJdPDF8fGVbMF0+Mil0aHJvdyBuZXcgRXJyb3IoXCJCb290c3RyYXAncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeSB2ZXJzaW9uIDEuOS4xIG9yIGhpZ2hlciwgYnV0IGxvd2VyIHRoYW4gdmVyc2lvbiAzXCIpfShqUXVlcnkpLCtmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKCl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJvb3RzdHJhcFwiKSxlPXtXZWJraXRUcmFuc2l0aW9uOlwid2Via2l0VHJhbnNpdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZFwiLHRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCJ9O2Zvcih2YXIgaSBpbiBlKWlmKHZvaWQgMCE9PXQuc3R5bGVbaV0pcmV0dXJue2VuZDplW2ldfTtyZXR1cm4hMX10LmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKGUpe3ZhciBpPSExLG89dGhpczt0KHRoaXMpLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7aT0hMH0pO3ZhciBuPWZ1bmN0aW9uKCl7aXx8dChvKS50cmlnZ2VyKHQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCl9O3JldHVybiBzZXRUaW1lb3V0KG4sZSksdGhpc30sdChmdW5jdGlvbigpe3Quc3VwcG9ydC50cmFuc2l0aW9uPWUoKSx0LnN1cHBvcnQudHJhbnNpdGlvbiYmKHQuZXZlbnQuc3BlY2lhbC5ic1RyYW5zaXRpb25FbmQ9e2JpbmRUeXBlOnQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxkZWxlZ2F0ZVR5cGU6dC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGhhbmRsZTpmdW5jdGlvbihlKXtyZXR1cm4gdChlLnRhcmdldCkuaXModGhpcyk/ZS5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dm9pZCAwfX0pfSl9KGpRdWVyeSksK2Z1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBpPXQodGhpcyksbj1pLmRhdGEoXCJicy5hbGVydFwiKTtufHxpLmRhdGEoXCJicy5hbGVydFwiLG49bmV3IG8odGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZuW2VdLmNhbGwoaSl9KX12YXIgaT0nW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJyxvPWZ1bmN0aW9uKGUpe3QoZSkub24oXCJjbGlja1wiLGksdGhpcy5jbG9zZSl9O28uVkVSU0lPTj1cIjMuMy42XCIsby5UUkFOU0lUSU9OX0RVUkFUSU9OPTE1MCxvLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbihlKXtmdW5jdGlvbiBpKCl7YS5kZXRhY2goKS50cmlnZ2VyKFwiY2xvc2VkLmJzLmFsZXJ0XCIpLnJlbW92ZSgpfXZhciBuPXQodGhpcykscz1uLmF0dHIoXCJkYXRhLXRhcmdldFwiKTtzfHwocz1uLmF0dHIoXCJocmVmXCIpLHM9cyYmcy5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLFwiXCIpKTt2YXIgYT10KHMpO2UmJmUucHJldmVudERlZmF1bHQoKSxhLmxlbmd0aHx8KGE9bi5jbG9zZXN0KFwiLmFsZXJ0XCIpKSxhLnRyaWdnZXIoZT10LkV2ZW50KFwiY2xvc2UuYnMuYWxlcnRcIikpLGUuaXNEZWZhdWx0UHJldmVudGVkKCl8fChhLnJlbW92ZUNsYXNzKFwiaW5cIiksdC5zdXBwb3J0LnRyYW5zaXRpb24mJmEuaGFzQ2xhc3MoXCJmYWRlXCIpP2Eub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsaSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoby5UUkFOU0lUSU9OX0RVUkFUSU9OKTppKCkpfTt2YXIgbj10LmZuLmFsZXJ0O3QuZm4uYWxlcnQ9ZSx0LmZuLmFsZXJ0LkNvbnN0cnVjdG9yPW8sdC5mbi5hbGVydC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHQuZm4uYWxlcnQ9bix0aGlzfSx0KGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmFsZXJ0LmRhdGEtYXBpXCIsaSxvLnByb3RvdHlwZS5jbG9zZSl9KGpRdWVyeSksK2Z1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBvPXQodGhpcyksbj1vLmRhdGEoXCJicy5idXR0b25cIikscz1cIm9iamVjdFwiPT10eXBlb2YgZSYmZTtufHxvLmRhdGEoXCJicy5idXR0b25cIixuPW5ldyBpKHRoaXMscykpLFwidG9nZ2xlXCI9PWU/bi50b2dnbGUoKTplJiZuLnNldFN0YXRlKGUpfSl9dmFyIGk9ZnVuY3Rpb24oZSxvKXt0aGlzLiRlbGVtZW50PXQoZSksdGhpcy5vcHRpb25zPXQuZXh0ZW5kKHt9LGkuREVGQVVMVFMsbyksdGhpcy5pc0xvYWRpbmc9ITF9O2kuVkVSU0lPTj1cIjMuMy42XCIsaS5ERUZBVUxUUz17bG9hZGluZ1RleHQ6XCJsb2FkaW5nLi4uXCJ9LGkucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGUpe3ZhciBpPVwiZGlzYWJsZWRcIixvPXRoaXMuJGVsZW1lbnQsbj1vLmlzKFwiaW5wdXRcIik/XCJ2YWxcIjpcImh0bWxcIixzPW8uZGF0YSgpO2UrPVwiVGV4dFwiLG51bGw9PXMucmVzZXRUZXh0JiZvLmRhdGEoXCJyZXNldFRleHRcIixvW25dKCkpLHNldFRpbWVvdXQodC5wcm94eShmdW5jdGlvbigpe29bbl0obnVsbD09c1tlXT90aGlzLm9wdGlvbnNbZV06c1tlXSksXCJsb2FkaW5nVGV4dFwiPT1lPyh0aGlzLmlzTG9hZGluZz0hMCxvLmFkZENsYXNzKGkpLmF0dHIoaSxpKSk6dGhpcy5pc0xvYWRpbmcmJih0aGlzLmlzTG9hZGluZz0hMSxvLnJlbW92ZUNsYXNzKGkpLnJlbW92ZUF0dHIoaSkpfSx0aGlzKSwwKX0saS5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKCl7dmFyIHQ9ITAsZT10aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nKTtpZihlLmxlbmd0aCl7dmFyIGk9dGhpcy4kZWxlbWVudC5maW5kKFwiaW5wdXRcIik7XCJyYWRpb1wiPT1pLnByb3AoXCJ0eXBlXCIpPyhpLnByb3AoXCJjaGVja2VkXCIpJiYodD0hMSksZS5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpKTpcImNoZWNrYm94XCI9PWkucHJvcChcInR5cGVcIikmJihpLnByb3AoXCJjaGVja2VkXCIpIT09dGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSYmKHQ9ITEpLHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIikpLGkucHJvcChcImNoZWNrZWRcIix0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiYWN0aXZlXCIpKSx0JiZpLnRyaWdnZXIoXCJjaGFuZ2VcIil9ZWxzZSB0aGlzLiRlbGVtZW50LmF0dHIoXCJhcmlhLXByZXNzZWRcIiwhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSksdGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKX07dmFyIG89dC5mbi5idXR0b247dC5mbi5idXR0b249ZSx0LmZuLmJ1dHRvbi5Db25zdHJ1Y3Rvcj1pLHQuZm4uYnV0dG9uLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdC5mbi5idXR0b249byx0aGlzfSx0KGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmJ1dHRvbi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxmdW5jdGlvbihpKXt2YXIgbz10KGkudGFyZ2V0KTtvLmhhc0NsYXNzKFwiYnRuXCIpfHwobz1vLmNsb3Nlc3QoXCIuYnRuXCIpKSxlLmNhbGwobyxcInRvZ2dsZVwiKSx0KGkudGFyZ2V0KS5pcygnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyl8fHQoaS50YXJnZXQpLmlzKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKXx8aS5wcmV2ZW50RGVmYXVsdCgpfSkub24oXCJmb2N1cy5icy5idXR0b24uZGF0YS1hcGkgYmx1ci5icy5idXR0b24uZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsZnVuY3Rpb24oZSl7dChlLnRhcmdldCkuY2xvc2VzdChcIi5idG5cIikudG9nZ2xlQ2xhc3MoXCJmb2N1c1wiLC9eZm9jdXMoaW4pPyQvLnRlc3QoZS50eXBlKSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIG89dCh0aGlzKSxuPW8uZGF0YShcImJzLmNhcm91c2VsXCIpLHM9dC5leHRlbmQoe30saS5ERUZBVUxUUyxvLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgZSYmZSksYT1cInN0cmluZ1wiPT10eXBlb2YgZT9lOnMuc2xpZGU7bnx8by5kYXRhKFwiYnMuY2Fyb3VzZWxcIixuPW5ldyBpKHRoaXMscykpLFwibnVtYmVyXCI9PXR5cGVvZiBlP24udG8oZSk6YT9uW2FdKCk6cy5pbnRlcnZhbCYmbi5wYXVzZSgpLmN5Y2xlKCl9KX12YXIgaT1mdW5jdGlvbihlLGkpe3RoaXMuJGVsZW1lbnQ9dChlKSx0aGlzLiRpbmRpY2F0b3JzPXRoaXMuJGVsZW1lbnQuZmluZChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIpLHRoaXMub3B0aW9ucz1pLHRoaXMucGF1c2VkPW51bGwsdGhpcy5zbGlkaW5nPW51bGwsdGhpcy5pbnRlcnZhbD1udWxsLHRoaXMuJGFjdGl2ZT1udWxsLHRoaXMuJGl0ZW1zPW51bGwsdGhpcy5vcHRpb25zLmtleWJvYXJkJiZ0aGlzLiRlbGVtZW50Lm9uKFwia2V5ZG93bi5icy5jYXJvdXNlbFwiLHQucHJveHkodGhpcy5rZXlkb3duLHRoaXMpKSxcImhvdmVyXCI9PXRoaXMub3B0aW9ucy5wYXVzZSYmIShcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSYmdGhpcy4kZWxlbWVudC5vbihcIm1vdXNlZW50ZXIuYnMuY2Fyb3VzZWxcIix0LnByb3h5KHRoaXMucGF1c2UsdGhpcykpLm9uKFwibW91c2VsZWF2ZS5icy5jYXJvdXNlbFwiLHQucHJveHkodGhpcy5jeWNsZSx0aGlzKSl9O2kuVkVSU0lPTj1cIjMuMy42XCIsaS5UUkFOU0lUSU9OX0RVUkFUSU9OPTYwMCxpLkRFRkFVTFRTPXtpbnRlcnZhbDo1ZTMscGF1c2U6XCJob3ZlclwiLHdyYXA6ITAsa2V5Ym9hcmQ6ITB9LGkucHJvdG90eXBlLmtleWRvd249ZnVuY3Rpb24odCl7aWYoIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QodC50YXJnZXQudGFnTmFtZSkpe3N3aXRjaCh0LndoaWNoKXtjYXNlIDM3OnRoaXMucHJldigpO2JyZWFrO2Nhc2UgMzk6dGhpcy5uZXh0KCk7YnJlYWs7ZGVmYXVsdDpyZXR1cm59dC5wcmV2ZW50RGVmYXVsdCgpfX0saS5wcm90b3R5cGUuY3ljbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGV8fCh0aGlzLnBhdXNlZD0hMSksdGhpcy5pbnRlcnZhbCYmY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSx0aGlzLm9wdGlvbnMuaW50ZXJ2YWwmJiF0aGlzLnBhdXNlZCYmKHRoaXMuaW50ZXJ2YWw9c2V0SW50ZXJ2YWwodC5wcm94eSh0aGlzLm5leHQsdGhpcyksdGhpcy5vcHRpb25zLmludGVydmFsKSksdGhpc30saS5wcm90b3R5cGUuZ2V0SXRlbUluZGV4PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiRpdGVtcz10LnBhcmVudCgpLmNoaWxkcmVuKFwiLml0ZW1cIiksdGhpcy4kaXRlbXMuaW5kZXgodHx8dGhpcy4kYWN0aXZlKX0saS5wcm90b3R5cGUuZ2V0SXRlbUZvckRpcmVjdGlvbj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuZ2V0SXRlbUluZGV4KGUpLG89XCJwcmV2XCI9PXQmJjA9PT1pfHxcIm5leHRcIj09dCYmaT09dGhpcy4kaXRlbXMubGVuZ3RoLTE7aWYobyYmIXRoaXMub3B0aW9ucy53cmFwKXJldHVybiBlO3ZhciBuPVwicHJldlwiPT10Py0xOjEscz0oaStuKSV0aGlzLiRpdGVtcy5sZW5ndGg7cmV0dXJuIHRoaXMuJGl0ZW1zLmVxKHMpfSxpLnByb3RvdHlwZS50bz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLGk9dGhpcy5nZXRJdGVtSW5kZXgodGhpcy4kYWN0aXZlPXRoaXMuJGVsZW1lbnQuZmluZChcIi5pdGVtLmFjdGl2ZVwiKSk7cmV0dXJuIHQ+dGhpcy4kaXRlbXMubGVuZ3RoLTF8fDA+dD92b2lkIDA6dGhpcy5zbGlkaW5nP3RoaXMuJGVsZW1lbnQub25lKFwic2xpZC5icy5jYXJvdXNlbFwiLGZ1bmN0aW9uKCl7ZS50byh0KX0pOmk9PXQ/dGhpcy5wYXVzZSgpLmN5Y2xlKCk6dGhpcy5zbGlkZSh0Pmk/XCJuZXh0XCI6XCJwcmV2XCIsdGhpcy4kaXRlbXMuZXEodCkpfSxpLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbihlKXtyZXR1cm4gZXx8KHRoaXMucGF1c2VkPSEwKSx0aGlzLiRlbGVtZW50LmZpbmQoXCIubmV4dCwgLnByZXZcIikubGVuZ3RoJiZ0LnN1cHBvcnQudHJhbnNpdGlvbiYmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcih0LnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpLHRoaXMuY3ljbGUoITApKSx0aGlzLmludGVydmFsPWNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCksdGhpc30saS5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnNsaWRpbmc/dm9pZCAwOnRoaXMuc2xpZGUoXCJuZXh0XCIpfSxpLnByb3RvdHlwZS5wcmV2PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2xpZGluZz92b2lkIDA6dGhpcy5zbGlkZShcInByZXZcIil9LGkucHJvdG90eXBlLnNsaWRlPWZ1bmN0aW9uKGUsbyl7dmFyIG49dGhpcy4kZWxlbWVudC5maW5kKFwiLml0ZW0uYWN0aXZlXCIpLHM9b3x8dGhpcy5nZXRJdGVtRm9yRGlyZWN0aW9uKGUsbiksYT10aGlzLmludGVydmFsLHI9XCJuZXh0XCI9PWU/XCJsZWZ0XCI6XCJyaWdodFwiLGw9dGhpcztpZihzLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXJldHVybiB0aGlzLnNsaWRpbmc9ITE7dmFyIGg9c1swXSxkPXQuRXZlbnQoXCJzbGlkZS5icy5jYXJvdXNlbFwiLHtyZWxhdGVkVGFyZ2V0OmgsZGlyZWN0aW9uOnJ9KTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoZCksIWQuaXNEZWZhdWx0UHJldmVudGVkKCkpe2lmKHRoaXMuc2xpZGluZz0hMCxhJiZ0aGlzLnBhdXNlKCksdGhpcy4kaW5kaWNhdG9ycy5sZW5ndGgpe3RoaXMuJGluZGljYXRvcnMuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7dmFyIHA9dCh0aGlzLiRpbmRpY2F0b3JzLmNoaWxkcmVuKClbdGhpcy5nZXRJdGVtSW5kZXgocyldKTtwJiZwLmFkZENsYXNzKFwiYWN0aXZlXCIpfXZhciBjPXQuRXZlbnQoXCJzbGlkLmJzLmNhcm91c2VsXCIse3JlbGF0ZWRUYXJnZXQ6aCxkaXJlY3Rpb246cn0pO3JldHVybiB0LnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcInNsaWRlXCIpPyhzLmFkZENsYXNzKGUpLHNbMF0ub2Zmc2V0V2lkdGgsbi5hZGRDbGFzcyhyKSxzLmFkZENsYXNzKHIpLG4ub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtzLnJlbW92ZUNsYXNzKFtlLHJdLmpvaW4oXCIgXCIpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxuLnJlbW92ZUNsYXNzKFtcImFjdGl2ZVwiLHJdLmpvaW4oXCIgXCIpKSxsLnNsaWRpbmc9ITEsc2V0VGltZW91dChmdW5jdGlvbigpe2wuJGVsZW1lbnQudHJpZ2dlcihjKX0sMCl9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZChpLlRSQU5TSVRJT05fRFVSQVRJT04pKToobi5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxzLmFkZENsYXNzKFwiYWN0aXZlXCIpLHRoaXMuc2xpZGluZz0hMSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoYykpLGEmJnRoaXMuY3ljbGUoKSx0aGlzfX07dmFyIG89dC5mbi5jYXJvdXNlbDt0LmZuLmNhcm91c2VsPWUsdC5mbi5jYXJvdXNlbC5Db25zdHJ1Y3Rvcj1pLHQuZm4uY2Fyb3VzZWwubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiB0LmZuLmNhcm91c2VsPW8sdGhpc307dmFyIG49ZnVuY3Rpb24oaSl7dmFyIG8sbj10KHRoaXMpLHM9dChuLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8KG89bi5hdHRyKFwiaHJlZlwiKSkmJm8ucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKSk7aWYocy5oYXNDbGFzcyhcImNhcm91c2VsXCIpKXt2YXIgYT10LmV4dGVuZCh7fSxzLmRhdGEoKSxuLmRhdGEoKSkscj1uLmF0dHIoXCJkYXRhLXNsaWRlLXRvXCIpO3ImJihhLmludGVydmFsPSExKSxlLmNhbGwocyxhKSxyJiZzLmRhdGEoXCJicy5jYXJvdXNlbFwiKS50byhyKSxpLnByZXZlbnREZWZhdWx0KCl9fTt0KGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpXCIsXCJbZGF0YS1zbGlkZV1cIixuKS5vbihcImNsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpXCIsXCJbZGF0YS1zbGlkZS10b11cIixuKSx0KHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXt0KCdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9dCh0aGlzKTtlLmNhbGwoaSxpLmRhdGEoKSl9KX0pfShqUXVlcnkpLCtmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe3ZhciBpLG89ZS5hdHRyKFwiZGF0YS10YXJnZXRcIil8fChpPWUuYXR0cihcImhyZWZcIikpJiZpLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sXCJcIik7cmV0dXJuIHQobyl9ZnVuY3Rpb24gaShlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGk9dCh0aGlzKSxuPWkuZGF0YShcImJzLmNvbGxhcHNlXCIpLHM9dC5leHRlbmQoe30sby5ERUZBVUxUUyxpLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgZSYmZSk7IW4mJnMudG9nZ2xlJiYvc2hvd3xoaWRlLy50ZXN0KGUpJiYocy50b2dnbGU9ITEpLG58fGkuZGF0YShcImJzLmNvbGxhcHNlXCIsbj1uZXcgbyh0aGlzLHMpKSxcInN0cmluZ1wiPT10eXBlb2YgZSYmbltlXSgpfSl9dmFyIG89ZnVuY3Rpb24oZSxpKXt0aGlzLiRlbGVtZW50PXQoZSksdGhpcy5vcHRpb25zPXQuZXh0ZW5kKHt9LG8uREVGQVVMVFMsaSksdGhpcy4kdHJpZ2dlcj10KCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIycrZS5pZCsnXCJdLFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIycrZS5pZCsnXCJdJyksdGhpcy50cmFuc2l0aW9uaW5nPW51bGwsdGhpcy5vcHRpb25zLnBhcmVudD90aGlzLiRwYXJlbnQ9dGhpcy5nZXRQYXJlbnQoKTp0aGlzLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLiRlbGVtZW50LHRoaXMuJHRyaWdnZXIpLHRoaXMub3B0aW9ucy50b2dnbGUmJnRoaXMudG9nZ2xlKCl9O28uVkVSU0lPTj1cIjMuMy42XCIsby5UUkFOU0lUSU9OX0RVUkFUSU9OPTM1MCxvLkRFRkFVTFRTPXt0b2dnbGU6ITB9LG8ucHJvdG90eXBlLmRpbWVuc2lvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJ3aWR0aFwiKTtyZXR1cm4gdD9cIndpZHRoXCI6XCJoZWlnaHRcIn0sby5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe2lmKCF0aGlzLnRyYW5zaXRpb25pbmcmJiF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIikpe3ZhciBlLG49dGhpcy4kcGFyZW50JiZ0aGlzLiRwYXJlbnQuY2hpbGRyZW4oXCIucGFuZWxcIikuY2hpbGRyZW4oXCIuaW4sIC5jb2xsYXBzaW5nXCIpO2lmKCEobiYmbi5sZW5ndGgmJihlPW4uZGF0YShcImJzLmNvbGxhcHNlXCIpLGUmJmUudHJhbnNpdGlvbmluZykpKXt2YXIgcz10LkV2ZW50KFwic2hvdy5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIocyksIXMuaXNEZWZhdWx0UHJldmVudGVkKCkpe24mJm4ubGVuZ3RoJiYoaS5jYWxsKG4sXCJoaWRlXCIpLGV8fG4uZGF0YShcImJzLmNvbGxhcHNlXCIsbnVsbCkpO3ZhciBhPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNlXCIpLmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKVthXSgwKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLiR0cmlnZ2VyLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMudHJhbnNpdGlvbmluZz0xO3ZhciByPWZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNpbmdcIikuYWRkQ2xhc3MoXCJjb2xsYXBzZSBpblwiKVthXShcIlwiKSx0aGlzLnRyYW5zaXRpb25pbmc9MCx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJzaG93bi5icy5jb2xsYXBzZVwiKX07aWYoIXQuc3VwcG9ydC50cmFuc2l0aW9uKXJldHVybiByLmNhbGwodGhpcyk7dmFyIGw9dC5jYW1lbENhc2UoW1wic2Nyb2xsXCIsYV0uam9pbihcIi1cIikpO3RoaXMuJGVsZW1lbnQub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsdC5wcm94eShyLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChvLlRSQU5TSVRJT05fRFVSQVRJT04pW2FdKHRoaXMuJGVsZW1lbnRbMF1bbF0pfX19fSxvLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKCl7aWYoIXRoaXMudHJhbnNpdGlvbmluZyYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKXt2YXIgZT10LkV2ZW50KFwiaGlkZS5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSksIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBpPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudFtpXSh0aGlzLiRlbGVtZW50W2ldKCkpWzBdLm9mZnNldEhlaWdodCx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKS5yZW1vdmVDbGFzcyhcImNvbGxhcHNlIGluXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITEpLHRoaXMuJHRyaWdnZXIuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIG49ZnVuY3Rpb24oKXt0aGlzLnRyYW5zaXRpb25pbmc9MCx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlXCIpLnRyaWdnZXIoXCJoaWRkZW4uYnMuY29sbGFwc2VcIil9O3JldHVybiB0LnN1cHBvcnQudHJhbnNpdGlvbj92b2lkIHRoaXMuJGVsZW1lbnRbaV0oMCkub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsdC5wcm94eShuLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChvLlRSQU5TSVRJT05fRFVSQVRJT04pOm4uY2FsbCh0aGlzKX19fSxvLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXt0aGlzW3RoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKT9cImhpZGVcIjpcInNob3dcIl0oKX0sby5wcm90b3R5cGUuZ2V0UGFyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHQodGhpcy5vcHRpb25zLnBhcmVudCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCInK3RoaXMub3B0aW9ucy5wYXJlbnQrJ1wiXScpLmVhY2godC5wcm94eShmdW5jdGlvbihpLG8pe3ZhciBuPXQobyk7dGhpcy5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZShuKSxuKX0sdGhpcykpLmVuZCgpfSxvLnByb3RvdHlwZS5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3M9ZnVuY3Rpb24odCxlKXt2YXIgaT10Lmhhc0NsYXNzKFwiaW5cIik7dC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLGkpLGUudG9nZ2xlQ2xhc3MoXCJjb2xsYXBzZWRcIiwhaSkuYXR0cihcImFyaWEtZXhwYW5kZWRcIixpKX07dmFyIG49dC5mbi5jb2xsYXBzZTt0LmZuLmNvbGxhcHNlPWksdC5mbi5jb2xsYXBzZS5Db25zdHJ1Y3Rvcj1vLHQuZm4uY29sbGFwc2Uubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiB0LmZuLmNvbGxhcHNlPW4sdGhpc30sdChkb2N1bWVudCkub24oXCJjbGljay5icy5jb2xsYXBzZS5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScsZnVuY3Rpb24obyl7dmFyIG49dCh0aGlzKTtuLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8by5wcmV2ZW50RGVmYXVsdCgpO3ZhciBzPWUobiksYT1zLmRhdGEoXCJicy5jb2xsYXBzZVwiKSxyPWE/XCJ0b2dnbGVcIjpuLmRhdGEoKTtpLmNhbGwocyxyKX0pfShqUXVlcnkpLCtmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe3ZhciBpPWUuYXR0cihcImRhdGEtdGFyZ2V0XCIpO2l8fChpPWUuYXR0cihcImhyZWZcIiksaT1pJiYvI1tBLVphLXpdLy50ZXN0KGkpJiZpLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpO3ZhciBvPWkmJnQoaSk7cmV0dXJuIG8mJm8ubGVuZ3RoP286ZS5wYXJlbnQoKX1mdW5jdGlvbiBpKGkpe2kmJjM9PT1pLndoaWNofHwodChuKS5yZW1vdmUoKSx0KHMpLmVhY2goZnVuY3Rpb24oKXt2YXIgbz10KHRoaXMpLG49ZShvKSxzPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O24uaGFzQ2xhc3MoXCJvcGVuXCIpJiYoaSYmXCJjbGlja1wiPT1pLnR5cGUmJi9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoaS50YXJnZXQudGFnTmFtZSkmJnQuY29udGFpbnMoblswXSxpLnRhcmdldCl8fChuLnRyaWdnZXIoaT10LkV2ZW50KFwiaGlkZS5icy5kcm9wZG93blwiLHMpKSxpLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwoby5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksbi5yZW1vdmVDbGFzcyhcIm9wZW5cIikudHJpZ2dlcih0LkV2ZW50KFwiaGlkZGVuLmJzLmRyb3Bkb3duXCIscykpKSkpfSkpfWZ1bmN0aW9uIG8oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBpPXQodGhpcyksbz1pLmRhdGEoXCJicy5kcm9wZG93blwiKTtvfHxpLmRhdGEoXCJicy5kcm9wZG93blwiLG89bmV3IGEodGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZvW2VdLmNhbGwoaSl9KX12YXIgbj1cIi5kcm9wZG93bi1iYWNrZHJvcFwiLHM9J1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxhPWZ1bmN0aW9uKGUpe3QoZSkub24oXCJjbGljay5icy5kcm9wZG93blwiLHRoaXMudG9nZ2xlKX07YS5WRVJTSU9OPVwiMy4zLjZcIixhLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24obyl7dmFyIG49dCh0aGlzKTtpZighbi5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgcz1lKG4pLGE9cy5oYXNDbGFzcyhcIm9wZW5cIik7aWYoaSgpLCFhKXtcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiYhcy5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikubGVuZ3RoJiZ0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmFkZENsYXNzKFwiZHJvcGRvd24tYmFja2Ryb3BcIikuaW5zZXJ0QWZ0ZXIodCh0aGlzKSkub24oXCJjbGlja1wiLGkpO3ZhciByPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O2lmKHMudHJpZ2dlcihvPXQuRXZlbnQoXCJzaG93LmJzLmRyb3Bkb3duXCIscikpLG8uaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO24udHJpZ2dlcihcImZvY3VzXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpLHMudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpLnRyaWdnZXIodC5FdmVudChcInNob3duLmJzLmRyb3Bkb3duXCIscikpfXJldHVybiExfX0sYS5wcm90b3R5cGUua2V5ZG93bj1mdW5jdGlvbihpKXtpZigvKDM4fDQwfDI3fDMyKS8udGVzdChpLndoaWNoKSYmIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoaS50YXJnZXQudGFnTmFtZSkpe3ZhciBvPXQodGhpcyk7aWYoaS5wcmV2ZW50RGVmYXVsdCgpLGkuc3RvcFByb3BhZ2F0aW9uKCksIW8uaXMoXCIuZGlzYWJsZWQsIDpkaXNhYmxlZFwiKSl7dmFyIG49ZShvKSxhPW4uaGFzQ2xhc3MoXCJvcGVuXCIpO2lmKCFhJiYyNyE9aS53aGljaHx8YSYmMjc9PWkud2hpY2gpcmV0dXJuIDI3PT1pLndoaWNoJiZuLmZpbmQocykudHJpZ2dlcihcImZvY3VzXCIpLG8udHJpZ2dlcihcImNsaWNrXCIpO3ZhciByPVwiIGxpOm5vdCguZGlzYWJsZWQpOnZpc2libGUgYVwiLGw9bi5maW5kKFwiLmRyb3Bkb3duLW1lbnVcIityKTtpZihsLmxlbmd0aCl7dmFyIGg9bC5pbmRleChpLnRhcmdldCk7Mzg9PWkud2hpY2gmJmg+MCYmaC0tLDQwPT1pLndoaWNoJiZoPGwubGVuZ3RoLTEmJmgrKyx+aHx8KGg9MCksbC5lcShoKS50cmlnZ2VyKFwiZm9jdXNcIil9fX19O3ZhciByPXQuZm4uZHJvcGRvd247dC5mbi5kcm9wZG93bj1vLHQuZm4uZHJvcGRvd24uQ29uc3RydWN0b3I9YSx0LmZuLmRyb3Bkb3duLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdC5mbi5kcm9wZG93bj1yLHRoaXN9LHQoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixpKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24gZm9ybVwiLGZ1bmN0aW9uKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCl9KS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIscyxhLnByb3RvdHlwZS50b2dnbGUpLm9uKFwia2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaVwiLHMsYS5wcm90b3R5cGUua2V5ZG93bikub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24tbWVudVwiLGEucHJvdG90eXBlLmtleWRvd24pfShqUXVlcnkpLCtmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUsbyl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBuPXQodGhpcykscz1uLmRhdGEoXCJicy5tb2RhbFwiKSxhPXQuZXh0ZW5kKHt9LGkuREVGQVVMVFMsbi5kYXRhKCksXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpO3N8fG4uZGF0YShcImJzLm1vZGFsXCIscz1uZXcgaSh0aGlzLGEpKSxcInN0cmluZ1wiPT10eXBlb2YgZT9zW2VdKG8pOmEuc2hvdyYmcy5zaG93KG8pfSl9dmFyIGk9ZnVuY3Rpb24oZSxpKXt0aGlzLm9wdGlvbnM9aSx0aGlzLiRib2R5PXQoZG9jdW1lbnQuYm9keSksdGhpcy4kZWxlbWVudD10KGUpLHRoaXMuJGRpYWxvZz10aGlzLiRlbGVtZW50LmZpbmQoXCIubW9kYWwtZGlhbG9nXCIpLHRoaXMuJGJhY2tkcm9wPW51bGwsdGhpcy5pc1Nob3duPW51bGwsdGhpcy5vcmlnaW5hbEJvZHlQYWQ9bnVsbCx0aGlzLnNjcm9sbGJhcldpZHRoPTAsdGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrPSExLHRoaXMub3B0aW9ucy5yZW1vdGUmJnRoaXMuJGVsZW1lbnQuZmluZChcIi5tb2RhbC1jb250ZW50XCIpLmxvYWQodGhpcy5vcHRpb25zLnJlbW90ZSx0LnByb3h5KGZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC50cmlnZ2VyKFwibG9hZGVkLmJzLm1vZGFsXCIpfSx0aGlzKSl9O2kuVkVSU0lPTj1cIjMuMy42XCIsaS5UUkFOU0lUSU9OX0RVUkFUSU9OPTMwMCxpLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT049MTUwLGkuREVGQVVMVFM9e2JhY2tkcm9wOiEwLGtleWJvYXJkOiEwLHNob3c6ITB9LGkucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5pc1Nob3duP3RoaXMuaGlkZSgpOnRoaXMuc2hvdyh0KX0saS5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbihlKXt2YXIgbz10aGlzLG49dC5FdmVudChcInNob3cuYnMubW9kYWxcIix7cmVsYXRlZFRhcmdldDplfSk7dGhpcy4kZWxlbWVudC50cmlnZ2VyKG4pLHRoaXMuaXNTaG93bnx8bi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KHRoaXMuaXNTaG93bj0hMCx0aGlzLmNoZWNrU2Nyb2xsYmFyKCksdGhpcy5zZXRTY3JvbGxiYXIoKSx0aGlzLiRib2R5LmFkZENsYXNzKFwibW9kYWwtb3BlblwiKSx0aGlzLmVzY2FwZSgpLHRoaXMucmVzaXplKCksdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIiwnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyx0LnByb3h5KHRoaXMuaGlkZSx0aGlzKSksdGhpcy4kZGlhbG9nLm9uKFwibW91c2Vkb3duLmRpc21pc3MuYnMubW9kYWxcIixmdW5jdGlvbigpe28uJGVsZW1lbnQub25lKFwibW91c2V1cC5kaXNtaXNzLmJzLm1vZGFsXCIsZnVuY3Rpb24oZSl7dChlLnRhcmdldCkuaXMoby4kZWxlbWVudCkmJihvLmlnbm9yZUJhY2tkcm9wQ2xpY2s9ITApfSl9KSx0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uKCl7dmFyIG49dC5zdXBwb3J0LnRyYW5zaXRpb24mJm8uJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpO28uJGVsZW1lbnQucGFyZW50KCkubGVuZ3RofHxvLiRlbGVtZW50LmFwcGVuZFRvKG8uJGJvZHkpLG8uJGVsZW1lbnQuc2hvdygpLnNjcm9sbFRvcCgwKSxvLmFkanVzdERpYWxvZygpLG4mJm8uJGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGgsby4kZWxlbWVudC5hZGRDbGFzcyhcImluXCIpLG8uZW5mb3JjZUZvY3VzKCk7dmFyIHM9dC5FdmVudChcInNob3duLmJzLm1vZGFsXCIse3JlbGF0ZWRUYXJnZXQ6ZX0pO24/by4kZGlhbG9nLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7by4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihzKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGkuVFJBTlNJVElPTl9EVVJBVElPTik6by4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihzKX0pKX0saS5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbihlKXtlJiZlLnByZXZlbnREZWZhdWx0KCksZT10LkV2ZW50KFwiaGlkZS5icy5tb2RhbFwiKSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoZSksdGhpcy5pc1Nob3duJiYhZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmKHRoaXMuaXNTaG93bj0hMSx0aGlzLmVzY2FwZSgpLHRoaXMucmVzaXplKCksdChkb2N1bWVudCkub2ZmKFwiZm9jdXNpbi5icy5tb2RhbFwiKSx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiaW5cIikub2ZmKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiKS5vZmYoXCJtb3VzZXVwLmRpc21pc3MuYnMubW9kYWxcIiksdGhpcy4kZGlhbG9nLm9mZihcIm1vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIpLHQuc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT90aGlzLiRlbGVtZW50Lm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLHQucHJveHkodGhpcy5oaWRlTW9kYWwsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGkuVFJBTlNJVElPTl9EVVJBVElPTik6dGhpcy5oaWRlTW9kYWwoKSl9LGkucHJvdG90eXBlLmVuZm9yY2VGb2N1cz1mdW5jdGlvbigpe3QoZG9jdW1lbnQpLm9mZihcImZvY3VzaW4uYnMubW9kYWxcIikub24oXCJmb2N1c2luLmJzLm1vZGFsXCIsdC5wcm94eShmdW5jdGlvbih0KXt0aGlzLiRlbGVtZW50WzBdPT09dC50YXJnZXR8fHRoaXMuJGVsZW1lbnQuaGFzKHQudGFyZ2V0KS5sZW5ndGh8fHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpfSx0aGlzKSl9LGkucHJvdG90eXBlLmVzY2FwZT1mdW5jdGlvbigpe3RoaXMuaXNTaG93biYmdGhpcy5vcHRpb25zLmtleWJvYXJkP3RoaXMuJGVsZW1lbnQub24oXCJrZXlkb3duLmRpc21pc3MuYnMubW9kYWxcIix0LnByb3h5KGZ1bmN0aW9uKHQpezI3PT10LndoaWNoJiZ0aGlzLmhpZGUoKX0sdGhpcykpOnRoaXMuaXNTaG93bnx8dGhpcy4kZWxlbWVudC5vZmYoXCJrZXlkb3duLmRpc21pc3MuYnMubW9kYWxcIil9LGkucHJvdG90eXBlLnJlc2l6ZT1mdW5jdGlvbigpe3RoaXMuaXNTaG93bj90KHdpbmRvdykub24oXCJyZXNpemUuYnMubW9kYWxcIix0LnByb3h5KHRoaXMuaGFuZGxlVXBkYXRlLHRoaXMpKTp0KHdpbmRvdykub2ZmKFwicmVzaXplLmJzLm1vZGFsXCIpfSxpLnByb3RvdHlwZS5oaWRlTW9kYWw9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuJGVsZW1lbnQuaGlkZSgpLHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24oKXt0LiRib2R5LnJlbW92ZUNsYXNzKFwibW9kYWwtb3BlblwiKSx0LnJlc2V0QWRqdXN0bWVudHMoKSx0LnJlc2V0U2Nyb2xsYmFyKCksdC4kZWxlbWVudC50cmlnZ2VyKFwiaGlkZGVuLmJzLm1vZGFsXCIpfSl9LGkucHJvdG90eXBlLnJlbW92ZUJhY2tkcm9wPWZ1bmN0aW9uKCl7dGhpcy4kYmFja2Ryb3AmJnRoaXMuJGJhY2tkcm9wLnJlbW92ZSgpLHRoaXMuJGJhY2tkcm9wPW51bGx9LGkucHJvdG90eXBlLmJhY2tkcm9wPWZ1bmN0aW9uKGUpe3ZhciBvPXRoaXMsbj10aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT9cImZhZGVcIjpcIlwiO2lmKHRoaXMuaXNTaG93biYmdGhpcy5vcHRpb25zLmJhY2tkcm9wKXt2YXIgcz10LnN1cHBvcnQudHJhbnNpdGlvbiYmbjtpZih0aGlzLiRiYWNrZHJvcD10KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmFkZENsYXNzKFwibW9kYWwtYmFja2Ryb3AgXCIrbikuYXBwZW5kVG8odGhpcy4kYm9keSksdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIix0LnByb3h5KGZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s/dm9pZCh0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s9ITEpOnZvaWQodC50YXJnZXQ9PT10LmN1cnJlbnRUYXJnZXQmJihcInN0YXRpY1wiPT10aGlzLm9wdGlvbnMuYmFja2Ryb3A/dGhpcy4kZWxlbWVudFswXS5mb2N1cygpOnRoaXMuaGlkZSgpKSl9LHRoaXMpKSxzJiZ0aGlzLiRiYWNrZHJvcFswXS5vZmZzZXRXaWR0aCx0aGlzLiRiYWNrZHJvcC5hZGRDbGFzcyhcImluXCIpLCFlKXJldHVybjtzP3RoaXMuJGJhY2tkcm9wLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGkuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTik6ZSgpfWVsc2UgaWYoIXRoaXMuaXNTaG93biYmdGhpcy4kYmFja2Ryb3Ape3RoaXMuJGJhY2tkcm9wLnJlbW92ZUNsYXNzKFwiaW5cIik7dmFyIGE9ZnVuY3Rpb24oKXtvLnJlbW92ZUJhY2tkcm9wKCksZSYmZSgpfTt0LnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/dGhpcy4kYmFja2Ryb3Aub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoaS5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTphKCl9ZWxzZSBlJiZlKCl9LGkucHJvdG90eXBlLmhhbmRsZVVwZGF0ZT1mdW5jdGlvbigpe3RoaXMuYWRqdXN0RGlhbG9nKCl9LGkucHJvdG90eXBlLmFkanVzdERpYWxvZz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7dGhpcy4kZWxlbWVudC5jc3Moe3BhZGRpbmdMZWZ0OiF0aGlzLmJvZHlJc092ZXJmbG93aW5nJiZ0P3RoaXMuc2Nyb2xsYmFyV2lkdGg6XCJcIixwYWRkaW5nUmlnaHQ6dGhpcy5ib2R5SXNPdmVyZmxvd2luZyYmIXQ/dGhpcy5zY3JvbGxiYXJXaWR0aDpcIlwifSl9LGkucHJvdG90eXBlLnJlc2V0QWRqdXN0bWVudHM9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LmNzcyh7cGFkZGluZ0xlZnQ6XCJcIixwYWRkaW5nUmlnaHQ6XCJcIn0pfSxpLnByb3RvdHlwZS5jaGVja1Njcm9sbGJhcj1mdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5pbm5lcldpZHRoO2lmKCF0KXt2YXIgZT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7dD1lLnJpZ2h0LU1hdGguYWJzKGUubGVmdCl9dGhpcy5ib2R5SXNPdmVyZmxvd2luZz1kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoPHQsdGhpcy5zY3JvbGxiYXJXaWR0aD10aGlzLm1lYXN1cmVTY3JvbGxiYXIoKX0saS5wcm90b3R5cGUuc2V0U2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIHQ9cGFyc2VJbnQodGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpfHwwLDEwKTt0aGlzLm9yaWdpbmFsQm9keVBhZD1kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodHx8XCJcIix0aGlzLmJvZHlJc092ZXJmbG93aW5nJiZ0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIix0K3RoaXMuc2Nyb2xsYmFyV2lkdGgpfSxpLnByb3RvdHlwZS5yZXNldFNjcm9sbGJhcj1mdW5jdGlvbigpe3RoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiLHRoaXMub3JpZ2luYWxCb2R5UGFkKX0saS5wcm90b3R5cGUubWVhc3VyZVNjcm9sbGJhcj1mdW5jdGlvbigpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9XCJtb2RhbC1zY3JvbGxiYXItbWVhc3VyZVwiLHRoaXMuJGJvZHkuYXBwZW5kKHQpO3ZhciBlPXQub2Zmc2V0V2lkdGgtdC5jbGllbnRXaWR0aDtyZXR1cm4gdGhpcy4kYm9keVswXS5yZW1vdmVDaGlsZCh0KSxlfTt2YXIgbz10LmZuLm1vZGFsO3QuZm4ubW9kYWw9ZSx0LmZuLm1vZGFsLkNvbnN0cnVjdG9yPWksdC5mbi5tb2RhbC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHQuZm4ubW9kYWw9byx0aGlzfSx0KGRvY3VtZW50KS5vbihcImNsaWNrLmJzLm1vZGFsLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxmdW5jdGlvbihpKXt2YXIgbz10KHRoaXMpLG49by5hdHRyKFwiaHJlZlwiKSxzPXQoby5hdHRyKFwiZGF0YS10YXJnZXRcIil8fG4mJm4ucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKSksYT1zLmRhdGEoXCJicy5tb2RhbFwiKT9cInRvZ2dsZVwiOnQuZXh0ZW5kKHtyZW1vdGU6IS8jLy50ZXN0KG4pJiZufSxzLmRhdGEoKSxvLmRhdGEoKSk7by5pcyhcImFcIikmJmkucHJldmVudERlZmF1bHQoKSxzLm9uZShcInNob3cuYnMubW9kYWxcIixmdW5jdGlvbih0KXt0LmlzRGVmYXVsdFByZXZlbnRlZCgpfHxzLm9uZShcImhpZGRlbi5icy5tb2RhbFwiLGZ1bmN0aW9uKCl7by5pcyhcIjp2aXNpYmxlXCIpJiZvLnRyaWdnZXIoXCJmb2N1c1wiKX0pfSksZS5jYWxsKHMsYSx0aGlzKX0pfShqUXVlcnkpLCtmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgbz10KHRoaXMpLG49by5kYXRhKFwiYnMudG9vbHRpcFwiKSxzPVwib2JqZWN0XCI9PXR5cGVvZiBlJiZlOyhufHwhL2Rlc3Ryb3l8aGlkZS8udGVzdChlKSkmJihufHxvLmRhdGEoXCJicy50b29sdGlwXCIsbj1uZXcgaSh0aGlzLHMpKSxcInN0cmluZ1wiPT10eXBlb2YgZSYmbltlXSgpKX0pfXZhciBpPWZ1bmN0aW9uKHQsZSl7dGhpcy50eXBlPW51bGwsdGhpcy5vcHRpb25zPW51bGwsdGhpcy5lbmFibGVkPW51bGwsdGhpcy50aW1lb3V0PW51bGwsdGhpcy5ob3ZlclN0YXRlPW51bGwsdGhpcy4kZWxlbWVudD1udWxsLHRoaXMuaW5TdGF0ZT1udWxsLHRoaXMuaW5pdChcInRvb2x0aXBcIix0LGUpfTtpLlZFUlNJT049XCIzLjMuNlwiLGkuVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsaS5ERUZBVUxUUz17YW5pbWF0aW9uOiEwLHBsYWNlbWVudDpcInRvcFwiLHNlbGVjdG9yOiExLHRlbXBsYXRlOic8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIj48L2Rpdj48ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjwvZGl2PjwvZGl2PicsdHJpZ2dlcjpcImhvdmVyIGZvY3VzXCIsdGl0bGU6XCJcIixkZWxheTowLGh0bWw6ITEsY29udGFpbmVyOiExLHZpZXdwb3J0OntzZWxlY3RvcjpcImJvZHlcIixwYWRkaW5nOjB9fSxpLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKGUsaSxvKXtpZih0aGlzLmVuYWJsZWQ9ITAsdGhpcy50eXBlPWUsdGhpcy4kZWxlbWVudD10KGkpLHRoaXMub3B0aW9ucz10aGlzLmdldE9wdGlvbnMobyksdGhpcy4kdmlld3BvcnQ9dGhpcy5vcHRpb25zLnZpZXdwb3J0JiZ0KHQuaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMudmlld3BvcnQpP3RoaXMub3B0aW9ucy52aWV3cG9ydC5jYWxsKHRoaXMsdGhpcy4kZWxlbWVudCk6dGhpcy5vcHRpb25zLnZpZXdwb3J0LnNlbGVjdG9yfHx0aGlzLm9wdGlvbnMudmlld3BvcnQpLHRoaXMuaW5TdGF0ZT17Y2xpY2s6ITEsaG92ZXI6ITEsZm9jdXM6ITF9LHRoaXMuJGVsZW1lbnRbMF1pbnN0YW5jZW9mIGRvY3VtZW50LmNvbnN0cnVjdG9yJiYhdGhpcy5vcHRpb25zLnNlbGVjdG9yKXRocm93IG5ldyBFcnJvcihcImBzZWxlY3RvcmAgb3B0aW9uIG11c3QgYmUgc3BlY2lmaWVkIHdoZW4gaW5pdGlhbGl6aW5nIFwiK3RoaXMudHlwZStcIiBvbiB0aGUgd2luZG93LmRvY3VtZW50IG9iamVjdCFcIik7Zm9yKHZhciBuPXRoaXMub3B0aW9ucy50cmlnZ2VyLnNwbGl0KFwiIFwiKSxzPW4ubGVuZ3RoO3MtLTspe3ZhciBhPW5bc107aWYoXCJjbGlja1wiPT1hKXRoaXMuJGVsZW1lbnQub24oXCJjbGljay5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLHQucHJveHkodGhpcy50b2dnbGUsdGhpcykpO2Vsc2UgaWYoXCJtYW51YWxcIiE9YSl7dmFyIHI9XCJob3ZlclwiPT1hP1wibW91c2VlbnRlclwiOlwiZm9jdXNpblwiLGw9XCJob3ZlclwiPT1hP1wibW91c2VsZWF2ZVwiOlwiZm9jdXNvdXRcIjt0aGlzLiRlbGVtZW50Lm9uKHIrXCIuXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3Rvcix0LnByb3h5KHRoaXMuZW50ZXIsdGhpcykpLHRoaXMuJGVsZW1lbnQub24obCtcIi5cIit0aGlzLnR5cGUsdGhpcy5vcHRpb25zLnNlbGVjdG9yLHQucHJveHkodGhpcy5sZWF2ZSx0aGlzKSl9fXRoaXMub3B0aW9ucy5zZWxlY3Rvcj90aGlzLl9vcHRpb25zPXQuZXh0ZW5kKHt9LHRoaXMub3B0aW9ucyx7dHJpZ2dlcjpcIm1hbnVhbFwiLHNlbGVjdG9yOlwiXCJ9KTp0aGlzLmZpeFRpdGxlKCl9LGkucHJvdG90eXBlLmdldERlZmF1bHRzPWZ1bmN0aW9uKCl7cmV0dXJuIGkuREVGQVVMVFN9LGkucHJvdG90eXBlLmdldE9wdGlvbnM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU9dC5leHRlbmQoe30sdGhpcy5nZXREZWZhdWx0cygpLHRoaXMuJGVsZW1lbnQuZGF0YSgpLGUpLGUuZGVsYXkmJlwibnVtYmVyXCI9PXR5cGVvZiBlLmRlbGF5JiYoZS5kZWxheT17c2hvdzplLmRlbGF5LGhpZGU6ZS5kZWxheX0pLGV9LGkucHJvdG90eXBlLmdldERlbGVnYXRlT3B0aW9ucz1mdW5jdGlvbigpe3ZhciBlPXt9LGk9dGhpcy5nZXREZWZhdWx0cygpO3JldHVybiB0aGlzLl9vcHRpb25zJiZ0LmVhY2godGhpcy5fb3B0aW9ucyxmdW5jdGlvbih0LG8pe2lbdF0hPW8mJihlW3RdPW8pfSksZX0saS5wcm90b3R5cGUuZW50ZXI9ZnVuY3Rpb24oZSl7dmFyIGk9ZSBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/ZTp0KGUuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIGl8fChpPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGUuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSx0KGUuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxpKSksZSBpbnN0YW5jZW9mIHQuRXZlbnQmJihpLmluU3RhdGVbXCJmb2N1c2luXCI9PWUudHlwZT9cImZvY3VzXCI6XCJob3ZlclwiXT0hMCksaS50aXAoKS5oYXNDbGFzcyhcImluXCIpfHxcImluXCI9PWkuaG92ZXJTdGF0ZT92b2lkKGkuaG92ZXJTdGF0ZT1cImluXCIpOihjbGVhclRpbWVvdXQoaS50aW1lb3V0KSxpLmhvdmVyU3RhdGU9XCJpblwiLGkub3B0aW9ucy5kZWxheSYmaS5vcHRpb25zLmRlbGF5LnNob3c/dm9pZChpLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe1wiaW5cIj09aS5ob3ZlclN0YXRlJiZpLnNob3coKX0saS5vcHRpb25zLmRlbGF5LnNob3cpKTppLnNob3coKSl9LGkucHJvdG90eXBlLmlzSW5TdGF0ZVRydWU9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5pblN0YXRlKWlmKHRoaXMuaW5TdGF0ZVt0XSlyZXR1cm4hMDtyZXR1cm4hMX0saS5wcm90b3R5cGUubGVhdmU9ZnVuY3Rpb24oZSl7dmFyIGk9ZSBpbnN0YW5jZW9mIHRoaXMuY29uc3RydWN0b3I/ZTp0KGUuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIGl8fChpPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGUuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSx0KGUuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxpKSksZSBpbnN0YW5jZW9mIHQuRXZlbnQmJihpLmluU3RhdGVbXCJmb2N1c291dFwiPT1lLnR5cGU/XCJmb2N1c1wiOlwiaG92ZXJcIl09ITEpLGkuaXNJblN0YXRlVHJ1ZSgpP3ZvaWQgMDooY2xlYXJUaW1lb3V0KGkudGltZW91dCksaS5ob3ZlclN0YXRlPVwib3V0XCIsaS5vcHRpb25zLmRlbGF5JiZpLm9wdGlvbnMuZGVsYXkuaGlkZT92b2lkKGkudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJvdXRcIj09aS5ob3ZlclN0YXRlJiZpLmhpZGUoKX0saS5vcHRpb25zLmRlbGF5LmhpZGUpKTppLmhpZGUoKSl9LGkucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXt2YXIgZT10LkV2ZW50KFwic2hvdy5icy5cIit0aGlzLnR5cGUpO2lmKHRoaXMuaGFzQ29udGVudCgpJiZ0aGlzLmVuYWJsZWQpe3RoaXMuJGVsZW1lbnQudHJpZ2dlcihlKTt2YXIgbz10LmNvbnRhaW5zKHRoaXMuJGVsZW1lbnRbMF0ub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdGhpcy4kZWxlbWVudFswXSk7aWYoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8IW8pcmV0dXJuO3ZhciBuPXRoaXMscz10aGlzLnRpcCgpLGE9dGhpcy5nZXRVSUQodGhpcy50eXBlKTt0aGlzLnNldENvbnRlbnQoKSxzLmF0dHIoXCJpZFwiLGEpLHRoaXMuJGVsZW1lbnQuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIixhKSx0aGlzLm9wdGlvbnMuYW5pbWF0aW9uJiZzLmFkZENsYXNzKFwiZmFkZVwiKTt2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMucGxhY2VtZW50P3RoaXMub3B0aW9ucy5wbGFjZW1lbnQuY2FsbCh0aGlzLHNbMF0sdGhpcy4kZWxlbWVudFswXSk6dGhpcy5vcHRpb25zLnBsYWNlbWVudCxsPS9cXHM/YXV0bz9cXHM/L2ksaD1sLnRlc3Qocik7aCYmKHI9ci5yZXBsYWNlKGwsXCJcIil8fFwidG9wXCIpLHMuZGV0YWNoKCkuY3NzKHt0b3A6MCxsZWZ0OjAsZGlzcGxheTpcImJsb2NrXCJ9KS5hZGRDbGFzcyhyKS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLHRoaXMpLHRoaXMub3B0aW9ucy5jb250YWluZXI/cy5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuY29udGFpbmVyKTpzLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcImluc2VydGVkLmJzLlwiK3RoaXMudHlwZSk7dmFyIGQ9dGhpcy5nZXRQb3NpdGlvbigpLHA9c1swXS5vZmZzZXRXaWR0aCxjPXNbMF0ub2Zmc2V0SGVpZ2h0O2lmKGgpe3ZhciBmPXIsdT10aGlzLmdldFBvc2l0aW9uKHRoaXMuJHZpZXdwb3J0KTtyPVwiYm90dG9tXCI9PXImJmQuYm90dG9tK2M+dS5ib3R0b20/XCJ0b3BcIjpcInRvcFwiPT1yJiZkLnRvcC1jPHUudG9wP1wiYm90dG9tXCI6XCJyaWdodFwiPT1yJiZkLnJpZ2h0K3A+dS53aWR0aD9cImxlZnRcIjpcImxlZnRcIj09ciYmZC5sZWZ0LXA8dS5sZWZ0P1wicmlnaHRcIjpyLHMucmVtb3ZlQ2xhc3MoZikuYWRkQ2xhc3Mocil9dmFyIGc9dGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0KHIsZCxwLGMpO3RoaXMuYXBwbHlQbGFjZW1lbnQoZyxyKTt2YXIgdj1mdW5jdGlvbigpe3ZhciB0PW4uaG92ZXJTdGF0ZTtuLiRlbGVtZW50LnRyaWdnZXIoXCJzaG93bi5icy5cIituLnR5cGUpLG4uaG92ZXJTdGF0ZT1udWxsLFwib3V0XCI9PXQmJm4ubGVhdmUobil9O3Quc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiR0aXAuaGFzQ2xhc3MoXCJmYWRlXCIpP3Mub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsdikuZW11bGF0ZVRyYW5zaXRpb25FbmQoaS5UUkFOU0lUSU9OX0RVUkFUSU9OKTp2KCl9fSxpLnByb3RvdHlwZS5hcHBseVBsYWNlbWVudD1mdW5jdGlvbihlLGkpe3ZhciBvPXRoaXMudGlwKCksbj1vWzBdLm9mZnNldFdpZHRoLHM9b1swXS5vZmZzZXRIZWlnaHQsYT1wYXJzZUludChvLmNzcyhcIm1hcmdpbi10b3BcIiksMTApLHI9cGFyc2VJbnQoby5jc3MoXCJtYXJnaW4tbGVmdFwiKSwxMCk7aXNOYU4oYSkmJihhPTApLGlzTmFOKHIpJiYocj0wKSxlLnRvcCs9YSxlLmxlZnQrPXIsdC5vZmZzZXQuc2V0T2Zmc2V0KG9bMF0sdC5leHRlbmQoe3VzaW5nOmZ1bmN0aW9uKHQpe28uY3NzKHt0b3A6TWF0aC5yb3VuZCh0LnRvcCksbGVmdDpNYXRoLnJvdW5kKHQubGVmdCl9KX19LGUpLDApLG8uYWRkQ2xhc3MoXCJpblwiKTt2YXIgbD1vWzBdLm9mZnNldFdpZHRoLGg9b1swXS5vZmZzZXRIZWlnaHQ7XCJ0b3BcIj09aSYmaCE9cyYmKGUudG9wPWUudG9wK3MtaCk7dmFyIGQ9dGhpcy5nZXRWaWV3cG9ydEFkanVzdGVkRGVsdGEoaSxlLGwsaCk7ZC5sZWZ0P2UubGVmdCs9ZC5sZWZ0OmUudG9wKz1kLnRvcDt2YXIgcD0vdG9wfGJvdHRvbS8udGVzdChpKSxjPXA/MipkLmxlZnQtbitsOjIqZC50b3AtcytoLGY9cD9cIm9mZnNldFdpZHRoXCI6XCJvZmZzZXRIZWlnaHRcIjtvLm9mZnNldChlKSx0aGlzLnJlcGxhY2VBcnJvdyhjLG9bMF1bZl0scCl9LGkucHJvdG90eXBlLnJlcGxhY2VBcnJvdz1mdW5jdGlvbih0LGUsaSl7dGhpcy5hcnJvdygpLmNzcyhpP1wibGVmdFwiOlwidG9wXCIsNTAqKDEtdC9lKStcIiVcIikuY3NzKGk/XCJ0b3BcIjpcImxlZnRcIixcIlwiKX0saS5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciB0PXRoaXMudGlwKCksZT10aGlzLmdldFRpdGxlKCk7dC5maW5kKFwiLnRvb2x0aXAtaW5uZXJcIilbdGhpcy5vcHRpb25zLmh0bWw/XCJodG1sXCI6XCJ0ZXh0XCJdKGUpLHQucmVtb3ZlQ2xhc3MoXCJmYWRlIGluIHRvcCBib3R0b20gbGVmdCByaWdodFwiKX0saS5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbihlKXtmdW5jdGlvbiBvKCl7XCJpblwiIT1uLmhvdmVyU3RhdGUmJnMuZGV0YWNoKCksbi4kZWxlbWVudC5yZW1vdmVBdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKS50cmlnZ2VyKFwiaGlkZGVuLmJzLlwiK24udHlwZSksZSYmZSgpfXZhciBuPXRoaXMscz10KHRoaXMuJHRpcCksYT10LkV2ZW50KFwiaGlkZS5icy5cIit0aGlzLnR5cGUpO3JldHVybiB0aGlzLiRlbGVtZW50LnRyaWdnZXIoYSksYS5pc0RlZmF1bHRQcmV2ZW50ZWQoKT92b2lkIDA6KHMucmVtb3ZlQ2xhc3MoXCJpblwiKSx0LnN1cHBvcnQudHJhbnNpdGlvbiYmcy5oYXNDbGFzcyhcImZhZGVcIik/cy5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixvKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChpLlRSQU5TSVRJT05fRFVSQVRJT04pOm8oKSx0aGlzLmhvdmVyU3RhdGU9bnVsbCx0aGlzKX0saS5wcm90b3R5cGUuZml4VGl0bGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRlbGVtZW50Oyh0LmF0dHIoXCJ0aXRsZVwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIHQuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIikpJiZ0LmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIsdC5hdHRyKFwidGl0bGVcIil8fFwiXCIpLmF0dHIoXCJ0aXRsZVwiLFwiXCIpfSxpLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKX0saS5wcm90b3R5cGUuZ2V0UG9zaXRpb249ZnVuY3Rpb24oZSl7ZT1lfHx0aGlzLiRlbGVtZW50O3ZhciBpPWVbMF0sbz1cIkJPRFlcIj09aS50YWdOYW1lLG49aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtudWxsPT1uLndpZHRoJiYobj10LmV4dGVuZCh7fSxuLHt3aWR0aDpuLnJpZ2h0LW4ubGVmdCxoZWlnaHQ6bi5ib3R0b20tbi50b3B9KSk7dmFyIHM9bz97dG9wOjAsbGVmdDowfTplLm9mZnNldCgpLGE9e3Njcm9sbDpvP2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B8fGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wOmUuc2Nyb2xsVG9wKCl9LHI9bz97d2lkdGg6dCh3aW5kb3cpLndpZHRoKCksaGVpZ2h0OnQod2luZG93KS5oZWlnaHQoKX06bnVsbDtyZXR1cm4gdC5leHRlbmQoe30sbixhLHIscyl9LGkucHJvdG90eXBlLmdldENhbGN1bGF0ZWRPZmZzZXQ9ZnVuY3Rpb24odCxlLGksbyl7cmV0dXJuXCJib3R0b21cIj09dD97dG9wOmUudG9wK2UuaGVpZ2h0LGxlZnQ6ZS5sZWZ0K2Uud2lkdGgvMi1pLzJ9OlwidG9wXCI9PXQ/e3RvcDplLnRvcC1vLGxlZnQ6ZS5sZWZ0K2Uud2lkdGgvMi1pLzJ9OlwibGVmdFwiPT10P3t0b3A6ZS50b3ArZS5oZWlnaHQvMi1vLzIsbGVmdDplLmxlZnQtaX06e3RvcDplLnRvcCtlLmhlaWdodC8yLW8vMixsZWZ0OmUubGVmdCtlLndpZHRofX0saS5wcm90b3R5cGUuZ2V0Vmlld3BvcnRBZGp1c3RlZERlbHRhPWZ1bmN0aW9uKHQsZSxpLG8pe3ZhciBuPXt0b3A6MCxsZWZ0OjB9O2lmKCF0aGlzLiR2aWV3cG9ydClyZXR1cm4gbjt2YXIgcz10aGlzLm9wdGlvbnMudmlld3BvcnQmJnRoaXMub3B0aW9ucy52aWV3cG9ydC5wYWRkaW5nfHwwLGE9dGhpcy5nZXRQb3NpdGlvbih0aGlzLiR2aWV3cG9ydCk7aWYoL3JpZ2h0fGxlZnQvLnRlc3QodCkpe3ZhciByPWUudG9wLXMtYS5zY3JvbGwsbD1lLnRvcCtzLWEuc2Nyb2xsK287cjxhLnRvcD9uLnRvcD1hLnRvcC1yOmw+YS50b3ArYS5oZWlnaHQmJihuLnRvcD1hLnRvcCthLmhlaWdodC1sKX1lbHNle3ZhciBoPWUubGVmdC1zLGQ9ZS5sZWZ0K3MraTtoPGEubGVmdD9uLmxlZnQ9YS5sZWZ0LWg6ZD5hLnJpZ2h0JiYobi5sZWZ0PWEubGVmdCthLndpZHRoLWQpfXJldHVybiBufSxpLnByb3RvdHlwZS5nZXRUaXRsZT1mdW5jdGlvbigpe3ZhciB0LGU9dGhpcy4kZWxlbWVudCxpPXRoaXMub3B0aW9ucztyZXR1cm4gdD1lLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIpfHwoXCJmdW5jdGlvblwiPT10eXBlb2YgaS50aXRsZT9pLnRpdGxlLmNhbGwoZVswXSk6aS50aXRsZSl9LGkucHJvdG90eXBlLmdldFVJRD1mdW5jdGlvbih0KXtkbyB0Kz1+figxZTYqTWF0aC5yYW5kb20oKSk7d2hpbGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCkpO3JldHVybiB0fSxpLnByb3RvdHlwZS50aXA9ZnVuY3Rpb24oKXtpZighdGhpcy4kdGlwJiYodGhpcy4kdGlwPXQodGhpcy5vcHRpb25zLnRlbXBsYXRlKSwxIT10aGlzLiR0aXAubGVuZ3RoKSl0aHJvdyBuZXcgRXJyb3IodGhpcy50eXBlK1wiIGB0ZW1wbGF0ZWAgb3B0aW9uIG11c3QgY29uc2lzdCBvZiBleGFjdGx5IDEgdG9wLWxldmVsIGVsZW1lbnQhXCIpO3JldHVybiB0aGlzLiR0aXB9LGkucHJvdG90eXBlLmFycm93PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGFycm93PXRoaXMuJGFycm93fHx0aGlzLnRpcCgpLmZpbmQoXCIudG9vbHRpcC1hcnJvd1wiKX0saS5wcm90b3R5cGUuZW5hYmxlPWZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSEwfSxpLnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExfSxpLnByb3RvdHlwZS50b2dnbGVFbmFibGVkPWZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSF0aGlzLmVuYWJsZWR9LGkucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihlKXt2YXIgaT10aGlzO2UmJihpPXQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlKSxpfHwoaT1uZXcgdGhpcy5jb25zdHJ1Y3RvcihlLmN1cnJlbnRUYXJnZXQsdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSksdChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsaSkpKSxlPyhpLmluU3RhdGUuY2xpY2s9IWkuaW5TdGF0ZS5jbGljayxpLmlzSW5TdGF0ZVRydWUoKT9pLmVudGVyKGkpOmkubGVhdmUoaSkpOmkudGlwKCkuaGFzQ2xhc3MoXCJpblwiKT9pLmxlYXZlKGkpOmkuZW50ZXIoaSl9LGkucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2NsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpLHRoaXMuaGlkZShmdW5jdGlvbigpe3QuJGVsZW1lbnQub2ZmKFwiLlwiK3QudHlwZSkucmVtb3ZlRGF0YShcImJzLlwiK3QudHlwZSksdC4kdGlwJiZ0LiR0aXAuZGV0YWNoKCksdC4kdGlwPW51bGwsdC4kYXJyb3c9bnVsbCx0LiR2aWV3cG9ydD1udWxsfSl9O3ZhciBvPXQuZm4udG9vbHRpcDt0LmZuLnRvb2x0aXA9ZSx0LmZuLnRvb2x0aXAuQ29uc3RydWN0b3I9aSx0LmZuLnRvb2x0aXAubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiB0LmZuLnRvb2x0aXA9byx0aGlzfX0oalF1ZXJ5KSwrZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIG89dCh0aGlzKSxuPW8uZGF0YShcImJzLnBvcG92ZXJcIikscz1cIm9iamVjdFwiPT10eXBlb2YgZSYmZTsobnx8IS9kZXN0cm95fGhpZGUvLnRlc3QoZSkpJiYobnx8by5kYXRhKFwiYnMucG9wb3ZlclwiLG49bmV3IGkodGhpcyxzKSksXCJzdHJpbmdcIj09dHlwZW9mIGUmJm5bZV0oKSl9KX12YXIgaT1mdW5jdGlvbih0LGUpe3RoaXMuaW5pdChcInBvcG92ZXJcIix0LGUpfTtpZighdC5mbi50b29sdGlwKXRocm93IG5ldyBFcnJvcihcIlBvcG92ZXIgcmVxdWlyZXMgdG9vbHRpcC5qc1wiKTtpLlZFUlNJT049XCIzLjMuNlwiLGkuREVGQVVMVFM9dC5leHRlbmQoe30sdC5mbi50b29sdGlwLkNvbnN0cnVjdG9yLkRFRkFVTFRTLHtwbGFjZW1lbnQ6XCJyaWdodFwiLHRyaWdnZXI6XCJjbGlja1wiLGNvbnRlbnQ6XCJcIix0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PjxoMyBjbGFzcz1cInBvcG92ZXItdGl0bGVcIj48L2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nfSksaS5wcm90b3R5cGU9dC5leHRlbmQoe30sdC5mbi50b29sdGlwLkNvbnN0cnVjdG9yLnByb3RvdHlwZSksaS5wcm90b3R5cGUuY29uc3RydWN0b3I9aSxpLnByb3RvdHlwZS5nZXREZWZhdWx0cz1mdW5jdGlvbigpe3JldHVybiBpLkRFRkFVTFRTfSxpLnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy50aXAoKSxlPXRoaXMuZ2V0VGl0bGUoKSxpPXRoaXMuZ2V0Q29udGVudCgpO3QuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpW3RoaXMub3B0aW9ucy5odG1sP1wiaHRtbFwiOlwidGV4dFwiXShlKSx0LmZpbmQoXCIucG9wb3Zlci1jb250ZW50XCIpLmNoaWxkcmVuKCkuZGV0YWNoKCkuZW5kKClbdGhpcy5vcHRpb25zLmh0bWw/XCJzdHJpbmdcIj09dHlwZW9mIGk/XCJodG1sXCI6XCJhcHBlbmRcIjpcInRleHRcIl0oaSksdC5yZW1vdmVDbGFzcyhcImZhZGUgdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0IGluXCIpLHQuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmh0bWwoKXx8dC5maW5kKFwiLnBvcG92ZXItdGl0bGVcIikuaGlkZSgpfSxpLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKXx8dGhpcy5nZXRDb250ZW50KCl9LGkucHJvdG90eXBlLmdldENvbnRlbnQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRlbGVtZW50LGU9dGhpcy5vcHRpb25zO3JldHVybiB0LmF0dHIoXCJkYXRhLWNvbnRlbnRcIil8fChcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNvbnRlbnQ/ZS5jb250ZW50LmNhbGwodFswXSk6ZS5jb250ZW50KX0saS5wcm90b3R5cGUuYXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kYXJyb3c9dGhpcy4kYXJyb3d8fHRoaXMudGlwKCkuZmluZChcIi5hcnJvd1wiKX07dmFyIG89dC5mbi5wb3BvdmVyO3QuZm4ucG9wb3Zlcj1lLHQuZm4ucG9wb3Zlci5Db25zdHJ1Y3Rvcj1pLHQuZm4ucG9wb3Zlci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHQuZm4ucG9wb3Zlcj1vLHRoaXN9fShqUXVlcnkpLCtmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBlKGksbyl7dGhpcy4kYm9keT10KGRvY3VtZW50LmJvZHkpLHRoaXMuJHNjcm9sbEVsZW1lbnQ9dCh0KGkpLmlzKGRvY3VtZW50LmJvZHkpP3dpbmRvdzppKSx0aGlzLm9wdGlvbnM9dC5leHRlbmQoe30sZS5ERUZBVUxUUyxvKSx0aGlzLnNlbGVjdG9yPSh0aGlzLm9wdGlvbnMudGFyZ2V0fHxcIlwiKStcIiAubmF2IGxpID4gYVwiLHRoaXMub2Zmc2V0cz1bXSx0aGlzLnRhcmdldHM9W10sdGhpcy5hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLnNjcm9sbEhlaWdodD0wLHRoaXMuJHNjcm9sbEVsZW1lbnQub24oXCJzY3JvbGwuYnMuc2Nyb2xsc3B5XCIsdC5wcm94eSh0aGlzLnByb2Nlc3MsdGhpcykpLHRoaXMucmVmcmVzaCgpLHRoaXMucHJvY2VzcygpfWZ1bmN0aW9uIGkoaSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBvPXQodGhpcyksbj1vLmRhdGEoXCJicy5zY3JvbGxzcHlcIikscz1cIm9iamVjdFwiPT10eXBlb2YgaSYmaTtufHxvLmRhdGEoXCJicy5zY3JvbGxzcHlcIixuPW5ldyBlKHRoaXMscykpLFwic3RyaW5nXCI9PXR5cGVvZiBpJiZuW2ldKCl9KX1lLlZFUlNJT049XCIzLjMuNlwiLGUuREVGQVVMVFM9e29mZnNldDoxMH0sZS5wcm90b3R5cGUuZ2V0U2Nyb2xsSGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHNjcm9sbEVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0fHxNYXRoLm1heCh0aGlzLiRib2R5WzBdLnNjcm9sbEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0KX0sZS5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbigpe3ZhciBlPXRoaXMsaT1cIm9mZnNldFwiLG89MDt0aGlzLm9mZnNldHM9W10sdGhpcy50YXJnZXRzPVtdLHRoaXMuc2Nyb2xsSGVpZ2h0PXRoaXMuZ2V0U2Nyb2xsSGVpZ2h0KCksdC5pc1dpbmRvdyh0aGlzLiRzY3JvbGxFbGVtZW50WzBdKXx8KGk9XCJwb3NpdGlvblwiLG89dGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSksdGhpcy4kYm9keS5maW5kKHRoaXMuc2VsZWN0b3IpLm1hcChmdW5jdGlvbigpe3ZhciBlPXQodGhpcyksbj1lLmRhdGEoXCJ0YXJnZXRcIil8fGUuYXR0cihcImhyZWZcIikscz0vXiMuLy50ZXN0KG4pJiZ0KG4pO3JldHVybiBzJiZzLmxlbmd0aCYmcy5pcyhcIjp2aXNpYmxlXCIpJiZbW3NbaV0oKS50b3ArbyxuXV18fG51bGx9KS5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbMF0tZVswXX0pLmVhY2goZnVuY3Rpb24oKXtlLm9mZnNldHMucHVzaCh0aGlzWzBdKSxlLnRhcmdldHMucHVzaCh0aGlzWzFdKX0pfSxlLnByb3RvdHlwZS5wcm9jZXNzPWZ1bmN0aW9uKCl7dmFyIHQsZT10aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpK3RoaXMub3B0aW9ucy5vZmZzZXQsaT10aGlzLmdldFNjcm9sbEhlaWdodCgpLG89dGhpcy5vcHRpb25zLm9mZnNldCtpLXRoaXMuJHNjcm9sbEVsZW1lbnQuaGVpZ2h0KCksbj10aGlzLm9mZnNldHMscz10aGlzLnRhcmdldHMsYT10aGlzLmFjdGl2ZVRhcmdldDtpZih0aGlzLnNjcm9sbEhlaWdodCE9aSYmdGhpcy5yZWZyZXNoKCksZT49bylyZXR1cm4gYSE9KHQ9c1tzLmxlbmd0aC0xXSkmJnRoaXMuYWN0aXZhdGUodCk7aWYoYSYmZTxuWzBdKXJldHVybiB0aGlzLmFjdGl2ZVRhcmdldD1udWxsLHRoaXMuY2xlYXIoKTtmb3IodD1uLmxlbmd0aDt0LS07KWEhPXNbdF0mJmU+PW5bdF0mJih2b2lkIDA9PT1uW3QrMV18fGU8blt0KzFdKSYmdGhpcy5hY3RpdmF0ZShzW3RdKX0sZS5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oZSl7dGhpcy5hY3RpdmVUYXJnZXQ9ZSx0aGlzLmNsZWFyKCk7dmFyIGk9dGhpcy5zZWxlY3RvcisnW2RhdGEtdGFyZ2V0PVwiJytlKydcIl0sJyt0aGlzLnNlbGVjdG9yKydbaHJlZj1cIicrZSsnXCJdJyxvPXQoaSkucGFyZW50cyhcImxpXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgby5wYXJlbnQoXCIuZHJvcGRvd24tbWVudVwiKS5sZW5ndGgmJihvPW8uY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpKSxvLnRyaWdnZXIoXCJhY3RpdmF0ZS5icy5zY3JvbGxzcHlcIil9LGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dCh0aGlzLnNlbGVjdG9yKS5wYXJlbnRzVW50aWwodGhpcy5vcHRpb25zLnRhcmdldCxcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIil9O3ZhciBvPXQuZm4uc2Nyb2xsc3B5O3QuZm4uc2Nyb2xsc3B5PWksdC5mbi5zY3JvbGxzcHkuQ29uc3RydWN0b3I9ZSx0LmZuLnNjcm9sbHNweS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHQuZm4uc2Nyb2xsc3B5PW8sdGhpc30sdCh3aW5kb3cpLm9uKFwibG9hZC5icy5zY3JvbGxzcHkuZGF0YS1hcGlcIixmdW5jdGlvbigpe3QoJ1tkYXRhLXNweT1cInNjcm9sbFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpO2kuY2FsbChlLGUuZGF0YSgpKX0pfSl9KGpRdWVyeSksK2Z1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBvPXQodGhpcyksbj1vLmRhdGEoXCJicy50YWJcIik7bnx8by5kYXRhKFwiYnMudGFiXCIsbj1uZXcgaSh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGUmJm5bZV0oKX0pfXZhciBpPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudD10KGUpfTtpLlZFUlNJT049XCIzLjMuNlwiLGkuVFJBTlNJVElPTl9EVVJBVElPTj0xNTAsaS5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe3ZhciBlPXRoaXMuZWxlbWVudCxpPWUuY2xvc2VzdChcInVsOm5vdCguZHJvcGRvd24tbWVudSlcIiksbz1lLmRhdGEoXCJ0YXJnZXRcIik7aWYob3x8KG89ZS5hdHRyKFwiaHJlZlwiKSxvPW8mJm8ucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSksIWUucGFyZW50KFwibGlcIikuaGFzQ2xhc3MoXCJhY3RpdmVcIikpe3ZhciBuPWkuZmluZChcIi5hY3RpdmU6bGFzdCBhXCIpLHM9dC5FdmVudChcImhpZGUuYnMudGFiXCIse3JlbGF0ZWRUYXJnZXQ6ZVswXX0pLGE9dC5FdmVudChcInNob3cuYnMudGFiXCIse3JlbGF0ZWRUYXJnZXQ6blswXX0pO2lmKG4udHJpZ2dlcihzKSxlLnRyaWdnZXIoYSksIWEuaXNEZWZhdWx0UHJldmVudGVkKCkmJiFzLmlzRGVmYXVsdFByZXZlbnRlZCgpKXt2YXIgcj10KG8pO3RoaXMuYWN0aXZhdGUoZS5jbG9zZXN0KFwibGlcIiksaSksdGhpcy5hY3RpdmF0ZShyLHIucGFyZW50KCksZnVuY3Rpb24oKXtuLnRyaWdnZXIoe3R5cGU6XCJoaWRkZW4uYnMudGFiXCIscmVsYXRlZFRhcmdldDplWzBdfSksZS50cmlnZ2VyKHt0eXBlOlwic2hvd24uYnMudGFiXCIscmVsYXRlZFRhcmdldDpuWzBdfSl9KX19fSxpLnByb3RvdHlwZS5hY3RpdmF0ZT1mdW5jdGlvbihlLG8sbil7ZnVuY3Rpb24gcygpe2EucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikuZmluZChcIj4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmVuZCgpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITEpLGUuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCkscj8oZVswXS5vZmZzZXRXaWR0aCxlLmFkZENsYXNzKFwiaW5cIikpOmUucmVtb3ZlQ2xhc3MoXCJmYWRlXCIpLGUucGFyZW50KFwiLmRyb3Bkb3duLW1lbnVcIikubGVuZ3RoJiZlLmNsb3Nlc3QoXCJsaS5kcm9wZG93blwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKS5lbmQoKS5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSxuJiZuKCl9dmFyIGE9by5maW5kKFwiPiAuYWN0aXZlXCIpLHI9biYmdC5zdXBwb3J0LnRyYW5zaXRpb24mJihhLmxlbmd0aCYmYS5oYXNDbGFzcyhcImZhZGVcIil8fCEhby5maW5kKFwiPiAuZmFkZVwiKS5sZW5ndGgpO2EubGVuZ3RoJiZyP2Eub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIscykuZW11bGF0ZVRyYW5zaXRpb25FbmQoaS5UUkFOU0lUSU9OX0RVUkFUSU9OKTpzKCksYS5yZW1vdmVDbGFzcyhcImluXCIpfTt2YXIgbz10LmZuLnRhYjt0LmZuLnRhYj1lLHQuZm4udGFiLkNvbnN0cnVjdG9yPWksdC5mbi50YWIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiB0LmZuLnRhYj1vLHRoaXN9O3ZhciBuPWZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxlLmNhbGwodCh0aGlzKSxcInNob3dcIil9O3QoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMudGFiLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScsbikub24oXCJjbGljay5icy50YWIuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwicGlsbFwiXScsbil9KGpRdWVyeSksK2Z1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBvPXQodGhpcyksbj1vLmRhdGEoXCJicy5hZmZpeFwiKSxzPVwib2JqZWN0XCI9PXR5cGVvZiBlJiZlO258fG8uZGF0YShcImJzLmFmZml4XCIsbj1uZXcgaSh0aGlzLHMpKSxcInN0cmluZ1wiPT10eXBlb2YgZSYmbltlXSgpfSl9dmFyIGk9ZnVuY3Rpb24oZSxvKXt0aGlzLm9wdGlvbnM9dC5leHRlbmQoe30saS5ERUZBVUxUUyxvKSx0aGlzLiR0YXJnZXQ9dCh0aGlzLm9wdGlvbnMudGFyZ2V0KS5vbihcInNjcm9sbC5icy5hZmZpeC5kYXRhLWFwaVwiLHQucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLHRoaXMpKS5vbihcImNsaWNrLmJzLmFmZml4LmRhdGEtYXBpXCIsdC5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wLHRoaXMpKSx0aGlzLiRlbGVtZW50PXQoZSksdGhpcy5hZmZpeGVkPW51bGwsdGhpcy51bnBpbj1udWxsLHRoaXMucGlubmVkT2Zmc2V0PW51bGwsdGhpcy5jaGVja1Bvc2l0aW9uKCl9O2kuVkVSU0lPTj1cIjMuMy42XCIsaS5SRVNFVD1cImFmZml4IGFmZml4LXRvcCBhZmZpeC1ib3R0b21cIixpLkRFRkFVTFRTPXtvZmZzZXQ6MCx0YXJnZXQ6d2luZG93fSxpLnByb3RvdHlwZS5nZXRTdGF0ZT1mdW5jdGlvbih0LGUsaSxvKXt2YXIgbj10aGlzLiR0YXJnZXQuc2Nyb2xsVG9wKCkscz10aGlzLiRlbGVtZW50Lm9mZnNldCgpLGE9dGhpcy4kdGFyZ2V0LmhlaWdodCgpO2lmKG51bGwhPWkmJlwidG9wXCI9PXRoaXMuYWZmaXhlZClyZXR1cm4gaT5uP1widG9wXCI6ITE7aWYoXCJib3R0b21cIj09dGhpcy5hZmZpeGVkKXJldHVybiBudWxsIT1pP24rdGhpcy51bnBpbjw9cy50b3A/ITE6XCJib3R0b21cIjp0LW8+PW4rYT8hMTpcImJvdHRvbVwiO3ZhciByPW51bGw9PXRoaXMuYWZmaXhlZCxsPXI/bjpzLnRvcCxoPXI/YTplO3JldHVybiBudWxsIT1pJiZpPj1uP1widG9wXCI6bnVsbCE9byYmbCtoPj10LW8/XCJib3R0b21cIjohMX0saS5wcm90b3R5cGUuZ2V0UGlubmVkT2Zmc2V0PWZ1bmN0aW9uKCl7aWYodGhpcy5waW5uZWRPZmZzZXQpcmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0O3RoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoaS5SRVNFVCkuYWRkQ2xhc3MoXCJhZmZpeFwiKTt2YXIgdD10aGlzLiR0YXJnZXQuc2Nyb2xsVG9wKCksZT10aGlzLiRlbGVtZW50Lm9mZnNldCgpO3JldHVybiB0aGlzLnBpbm5lZE9mZnNldD1lLnRvcC10fSxpLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcD1mdW5jdGlvbigpe3NldFRpbWVvdXQodC5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb24sdGhpcyksMSl9LGkucHJvdG90eXBlLmNoZWNrUG9zaXRpb249ZnVuY3Rpb24oKXtpZih0aGlzLiRlbGVtZW50LmlzKFwiOnZpc2libGVcIikpe3ZhciBlPXRoaXMuJGVsZW1lbnQuaGVpZ2h0KCksbz10aGlzLm9wdGlvbnMub2Zmc2V0LG49by50b3Ascz1vLmJvdHRvbSxhPU1hdGgubWF4KHQoZG9jdW1lbnQpLmhlaWdodCgpLHQoZG9jdW1lbnQuYm9keSkuaGVpZ2h0KCkpO1wib2JqZWN0XCIhPXR5cGVvZiBvJiYocz1uPW8pLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW8udG9wKHRoaXMuJGVsZW1lbnQpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBzJiYocz1vLmJvdHRvbSh0aGlzLiRlbGVtZW50KSk7dmFyIHI9dGhpcy5nZXRTdGF0ZShhLGUsbixzKTtpZih0aGlzLmFmZml4ZWQhPXIpe251bGwhPXRoaXMudW5waW4mJnRoaXMuJGVsZW1lbnQuY3NzKFwidG9wXCIsXCJcIik7dmFyIGw9XCJhZmZpeFwiKyhyP1wiLVwiK3I6XCJcIiksaD10LkV2ZW50KGwrXCIuYnMuYWZmaXhcIik7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGgpLGguaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO3RoaXMuYWZmaXhlZD1yLHRoaXMudW5waW49XCJib3R0b21cIj09cj90aGlzLmdldFBpbm5lZE9mZnNldCgpOm51bGwsdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhpLlJFU0VUKS5hZGRDbGFzcyhsKS50cmlnZ2VyKGwucmVwbGFjZShcImFmZml4XCIsXCJhZmZpeGVkXCIpK1wiLmJzLmFmZml4XCIpfVwiYm90dG9tXCI9PXImJnRoaXMuJGVsZW1lbnQub2Zmc2V0KHt0b3A6YS1lLXN9KX19O3ZhciBvPXQuZm4uYWZmaXg7dC5mbi5hZmZpeD1lLHQuZm4uYWZmaXguQ29uc3RydWN0b3I9aSx0LmZuLmFmZml4Lm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdC5mbi5hZmZpeD1vLHRoaXN9LHQod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe3QoJ1tkYXRhLXNweT1cImFmZml4XCJdJykuZWFjaChmdW5jdGlvbigpe3ZhciBpPXQodGhpcyksbz1pLmRhdGEoKTtvLm9mZnNldD1vLm9mZnNldHx8e30sbnVsbCE9by5vZmZzZXRCb3R0b20mJihvLm9mZnNldC5ib3R0b209by5vZmZzZXRCb3R0b20pLG51bGwhPW8ub2Zmc2V0VG9wJiYoby5vZmZzZXQudG9wPW8ub2Zmc2V0VG9wKSxlLmNhbGwoaSxvKX0pfSl9KGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==