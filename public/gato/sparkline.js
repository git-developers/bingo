(self["webpackChunkbingo"] = self["webpackChunkbingo"] || []).push([["sparkline"],{

/***/ "./assets/plugins/sparklines/sparkline.js":
/*!************************************************!*\
  !*** ./assets/plugins/sparklines/sparkline.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function () {
  function extend(specific, general) {
    var obj = {};

    for (var key in general) {
      obj[key] = key in specific ? specific[key] : general[key];
    }

    return obj;
  }

  function Sparkline(element, options) {
    this.element = element;
    this.options = extend(options || {}, Sparkline.options);

    init: {
      this.element.innerHTML = "<canvas></canvas>";
      this.canvas = this.element.firstChild;
      this.context = this.canvas.getContext("2d");
      this.ratio = window.devicePixelRatio || 1;

      if (this.options.tooltip) {
        this.canvas.style.position = "relative";
        this.canvas.onmousemove = showTooltip.bind(this);
      }
    }
  }

  Sparkline.options = {
    width: 100,
    height: null,
    lineColor: "black",
    lineWidth: 1.5,
    startColor: "transparent",
    endColor: "black",
    maxColor: "transparent",
    minColor: "transparent",
    minValue: null,
    maxValue: null,
    minMaxValue: null,
    maxMinValue: null,
    dotRadius: 2.5,
    tooltip: null,
    fillBelow: true,
    fillLighten: 0.5,
    startLine: false,
    endLine: false,
    minLine: false,
    maxLine: false,
    bottomLine: false,
    topLine: false,
    averageLine: false
  };

  Sparkline.init = function (element, options) {
    return new Sparkline(element, options);
  };

  Sparkline.draw = function (element, points, options) {
    var sparkline = new Sparkline(element, options);
    sparkline.draw(points);
    return sparkline;
  };

  function getY(minValue, maxValue, offsetY, height, index) {
    var range = maxValue - minValue;

    if (range == 0) {
      return offsetY + height / 2;
    } else {
      return offsetY + height - (this[index] - minValue) / range * height;
    }
  }

  function drawDot(radius, x1, x2, color, line, x, y) {
    this.context.beginPath();
    this.context.fillStyle = color;
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    this.context.fill();
    drawLine.call(this, x1, x2, line, x, y);
  }

  function drawLine(x1, x2, style, x, y) {
    if (!style) return;
    this.context.save();
    this.context.strokeStyle = style.color || 'black';
    this.context.lineWidth = (style.width || 1) * this.ratio;
    this.context.globalAlpha = style.alpha || 1;
    this.context.beginPath();
    this.context.moveTo(style.direction != 'right' ? x1 : x, y);
    this.context.lineTo(style.direction != 'left' ? x2 : x, y);
    this.context.stroke();
    this.context.restore();
  }

  function showTooltip(e) {
    var x = e.offsetX || e.layerX || 0;
    var delta = (this.options.width - this.options.dotRadius * 2) / (this.points.length - 1);
    var index = minmax(0, Math.round((x - this.options.dotRadius) / delta), this.points.length - 1);
    this.canvas.title = this.options.tooltip(this.points[index], index, this.points);
  }

  Sparkline.prototype.draw = function (points) {
    points = points || [];
    this.points = points;
    this.canvas.width = this.options.width * this.ratio;
    this.canvas.style.width = this.options.width + 'px';
    var pxHeight = this.options.height || this.element.offsetHeight;
    this.canvas.height = pxHeight * this.ratio;
    this.canvas.style.height = pxHeight + 'px';
    var lineWidth = this.options.lineWidth * this.ratio;
    var offsetX = Math.max(this.options.dotRadius * this.ratio, lineWidth / 2);
    var offsetY = Math.max(this.options.dotRadius * this.ratio, lineWidth / 2);
    var width = this.canvas.width - offsetX * 2;
    var height = this.canvas.height - offsetY * 2;
    var minValue = Math.min.apply(Math, points);
    var maxValue = Math.max.apply(Math, points);
    var bottomValue = this.options.minValue != undefined ? this.options.minValue : Math.min(minValue, this.options.maxMinValue != undefined ? this.options.maxMinValue : minValue);
    var topValue = this.options.maxValue != undefined ? this.options.maxValue : Math.max(maxValue, this.options.minMaxValue != undefined ? this.options.minMaxValue : maxValue);
    var minX = offsetX;
    var maxX = offsetX;
    var x = offsetX;
    var y = getY.bind(points, bottomValue, topValue, offsetY, height);
    var delta = width / (points.length - 1);
    var dot = drawDot.bind(this, this.options.dotRadius * this.ratio, offsetX, width + offsetX);
    var line = drawLine.bind(this, offsetX, width + offsetX);
    this.context.save();
    this.context.strokeStyle = this.options.lineColor;
    this.context.fillStyle = this.options.lineColor;
    this.context.lineWidth = lineWidth;
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';

    if (this.options.fillBelow && points.length > 1) {
      this.context.save();
      this.context.beginPath();
      this.context.moveTo(x, y(0));

      for (var i = 1; i < points.length; i++) {
        x += delta;
        minX = points[i] == minValue ? x : minX;
        maxX = points[i] == maxValue ? x : maxX;
        this.context.lineTo(x, y(i));
      }

      this.context.lineTo(width + offsetX, height + offsetY + lineWidth / 2);
      this.context.lineTo(offsetX, height + offsetY + lineWidth / 2);
      this.context.fill();

      if (this.options.fillLighten > 0) {
        this.context.fillStyle = 'white';
        this.context.globalAlpha = this.options.fillLighten;
        this.context.fill();
        this.context.globalAlpha = 1;
      } else if (this.options.fillLighten < 0) {
        this.context.fillStyle = 'black';
        this.context.globalAlpha = -this.options.fillLighten;
        this.context.fill();
      }

      this.context.restore();
    }

    x = offsetX;
    this.context.beginPath();
    this.context.moveTo(x, y(0));

    for (var i = 1; i < points.length; i++) {
      x += delta;
      this.context.lineTo(x, y(i));
    }

    this.context.stroke();
    this.context.restore();
    line(this.options.bottomLine, 0, offsetY);
    line(this.options.topLine, 0, height + offsetY + lineWidth / 2);
    dot(this.options.startColor, this.options.startLine, offsetX + (points.length == 1 ? width / 2 : 0), y(0));
    dot(this.options.endColor, this.options.endLine, offsetX + (points.length == 1 ? width / 2 : width), y(points.length - 1));
    dot(this.options.minColor, this.options.minLine, minX + (points.length == 1 ? width / 2 : 0), y(points.indexOf(minValue)));
    dot(this.options.maxColor, this.options.maxLine, maxX + (points.length == 1 ? width / 2 : 0), y(points.indexOf(maxValue))); //line(this.options.averageLine, )
  };

  function minmax(a, b, c) {
    return Math.max(a, Math.min(b, c));
  }

  return Sparkline;
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_well-known-sy-07cc72","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-31b1f3","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_web_-f61df9","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7"], () => (__webpack_exec__("./assets/plugins/sparklines/sparkline.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5nby8uL2Fzc2V0cy9wbHVnaW5zL3NwYXJrbGluZXMvc3BhcmtsaW5lLmpzIiwid2VicGFjazovL2JpbmdvLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZpbGwuanMiLCJ3ZWJwYWNrOi8vYmluZ28vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly9iaW5nby8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLmpzIiwid2VicGFjazovL2JpbmdvLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vYmluZ28vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbGwuanMiLCJ3ZWJwYWNrOi8vYmluZ28vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovL2JpbmdvLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5iaW5kLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZGVmaW5lIiwid2luZG93IiwiZXh0ZW5kIiwic3BlY2lmaWMiLCJnZW5lcmFsIiwib2JqIiwia2V5IiwiU3BhcmtsaW5lIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJpbml0IiwiaW5uZXJIVE1MIiwiY2FudmFzIiwiZmlyc3RDaGlsZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwidG9vbHRpcCIsInN0eWxlIiwicG9zaXRpb24iLCJvbm1vdXNlbW92ZSIsInNob3dUb29sdGlwIiwiYmluZCIsIndpZHRoIiwiaGVpZ2h0IiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwic3RhcnRDb2xvciIsImVuZENvbG9yIiwibWF4Q29sb3IiLCJtaW5Db2xvciIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJtaW5NYXhWYWx1ZSIsIm1heE1pblZhbHVlIiwiZG90UmFkaXVzIiwiZmlsbEJlbG93IiwiZmlsbExpZ2h0ZW4iLCJzdGFydExpbmUiLCJlbmRMaW5lIiwibWluTGluZSIsIm1heExpbmUiLCJib3R0b21MaW5lIiwidG9wTGluZSIsImF2ZXJhZ2VMaW5lIiwiZHJhdyIsInBvaW50cyIsInNwYXJrbGluZSIsImdldFkiLCJvZmZzZXRZIiwiaW5kZXgiLCJyYW5nZSIsImRyYXdEb3QiLCJyYWRpdXMiLCJ4MSIsIngyIiwiY29sb3IiLCJsaW5lIiwieCIsInkiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiZHJhd0xpbmUiLCJjYWxsIiwic2F2ZSIsInN0cm9rZVN0eWxlIiwiZ2xvYmFsQWxwaGEiLCJhbHBoYSIsIm1vdmVUbyIsImRpcmVjdGlvbiIsImxpbmVUbyIsInN0cm9rZSIsInJlc3RvcmUiLCJlIiwib2Zmc2V0WCIsImxheWVyWCIsImRlbHRhIiwibGVuZ3RoIiwibWlubWF4Iiwicm91bmQiLCJ0aXRsZSIsInByb3RvdHlwZSIsInB4SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwibWF4IiwibWluIiwiYXBwbHkiLCJib3R0b21WYWx1ZSIsInVuZGVmaW5lZCIsInRvcFZhbHVlIiwibWluWCIsIm1heFgiLCJkb3QiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJpIiwiaW5kZXhPZiIsImEiLCJiIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsV0FBVUEsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDeEIsTUFBSSxJQUFKLEVBQWdEO0FBQzlDO0FBQ0FDLHdDQUFPRCxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0dBQU47QUFDRCxHQUhELE1BR08sRUFRTjtBQUNGLENBYkEsRUFhQ0UsTUFiRCxFQWFTLFlBQVk7QUFD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RCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRS9DO0FBQ0E7QUFDQSxHQUFHLGtDQUFrQztBQUNyQztBQUNBLENBQUMiLCJmaWxlIjoic3BhcmtsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxyXG4gICAgZGVmaW5lKGZhY3RvcnkpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcclxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXHJcbiAgICAvLyBsaWtlIE5vZGUuXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcclxuICAgIHJvb3QuU3BhcmtsaW5lID0gZmFjdG9yeSgpO1xyXG4gIH1cclxufSh3aW5kb3csIGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBleHRlbmQoc3BlY2lmaWMsIGdlbmVyYWwpIHtcclxuICAgIHZhciBvYmogPSB7fTtcclxuICAgIGZvciAodmFyIGtleSBpbiBnZW5lcmFsKSB7XHJcbiAgICAgIG9ialtrZXldID0ga2V5IGluIHNwZWNpZmljID8gc3BlY2lmaWNba2V5XSA6IGdlbmVyYWxba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFya2xpbmUoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMub3B0aW9ucyA9IGV4dGVuZChvcHRpb25zIHx8IHt9LCBTcGFya2xpbmUub3B0aW9ucyk7XHJcblxyXG4gICAgaW5pdDoge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCI8Y2FudmFzPjwvY2FudmFzPlwiO1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuZWxlbWVudC5maXJzdENoaWxkO1xyXG4gICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIHRoaXMucmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgdGhpcy5jYW52YXMub25tb3VzZW1vdmUgPSBzaG93VG9vbHRpcC5iaW5kKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBTcGFya2xpbmUub3B0aW9ucyA9IHtcclxuICAgIHdpZHRoOiAxMDAsXHJcbiAgICBoZWlnaHQ6IG51bGwsXHJcbiAgICBsaW5lQ29sb3I6IFwiYmxhY2tcIixcclxuICAgIGxpbmVXaWR0aDogMS41LFxyXG4gICAgc3RhcnRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgZW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgIG1heENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICBtaW5Db2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgbWluVmFsdWU6IG51bGwsXHJcbiAgICBtYXhWYWx1ZTogbnVsbCxcclxuICAgIG1pbk1heFZhbHVlOiBudWxsLFxyXG4gICAgbWF4TWluVmFsdWU6IG51bGwsXHJcbiAgICBkb3RSYWRpdXM6IDIuNSxcclxuICAgIHRvb2x0aXA6IG51bGwsXHJcbiAgICBmaWxsQmVsb3c6IHRydWUsXHJcbiAgICBmaWxsTGlnaHRlbjogMC41LFxyXG4gICAgc3RhcnRMaW5lOiBmYWxzZSxcclxuICAgIGVuZExpbmU6IGZhbHNlLFxyXG4gICAgbWluTGluZTogZmFsc2UsXHJcbiAgICBtYXhMaW5lOiBmYWxzZSxcclxuICAgIGJvdHRvbUxpbmU6IGZhbHNlLFxyXG4gICAgdG9wTGluZTogZmFsc2UsXHJcbiAgICBhdmVyYWdlTGluZTogZmFsc2VcclxuICB9O1xyXG5cclxuICBTcGFya2xpbmUuaW5pdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gbmV3IFNwYXJrbGluZShlbGVtZW50LCBvcHRpb25zKTtcclxuICB9O1xyXG5cclxuICBTcGFya2xpbmUuZHJhdyA9IGZ1bmN0aW9uIChlbGVtZW50LCBwb2ludHMsIG9wdGlvbnMpIHtcclxuICAgIHZhciBzcGFya2xpbmUgPSBuZXcgU3BhcmtsaW5lKGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgc3BhcmtsaW5lLmRyYXcocG9pbnRzKTtcclxuICAgIHJldHVybiBzcGFya2xpbmU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRZKG1pblZhbHVlLCBtYXhWYWx1ZSwgb2Zmc2V0WSwgaGVpZ2h0LCBpbmRleCkge1xyXG4gICAgdmFyIHJhbmdlID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcclxuICAgIGlmIChyYW5nZSA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBvZmZzZXRZICsgaGVpZ2h0IC8gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAob2Zmc2V0WSArIGhlaWdodCkgLSAoKHRoaXNbaW5kZXhdIC0gbWluVmFsdWUpIC8gcmFuZ2UpICogaGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhd0RvdChyYWRpdXMsIHgxLCB4MiwgY29sb3IsIGxpbmUsIHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgIGRyYXdMaW5lLmNhbGwodGhpcywgeDEsIHgyLCBsaW5lLCB4LCB5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXdMaW5lKHgxLCB4Miwgc3R5bGUsIHgsIHkpe1xyXG4gICAgaWYoIXN0eWxlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlLmNvbG9yIHx8ICdibGFjayc7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gKHN0eWxlLndpZHRoIHx8IDEpICogdGhpcy5yYXRpbztcclxuICAgIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IHN0eWxlLmFscGhhIHx8IDE7XHJcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHN0eWxlLmRpcmVjdGlvbiAhPSAncmlnaHQnID8geDEgOiB4LCB5KTtcclxuICAgIHRoaXMuY29udGV4dC5saW5lVG8oc3R5bGUuZGlyZWN0aW9uICE9ICdsZWZ0JyA/IHgyIDogeCwgeSk7XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd1Rvb2x0aXAoZSkge1xyXG4gICAgdmFyIHggPSBlLm9mZnNldFggfHwgZS5sYXllclggfHwgMDtcclxuICAgIHZhciBkZWx0YSA9ICgodGhpcy5vcHRpb25zLndpZHRoIC0gdGhpcy5vcHRpb25zLmRvdFJhZGl1cyAqIDIpIC8gKHRoaXMucG9pbnRzLmxlbmd0aCAtIDEpKTtcclxuICAgIHZhciBpbmRleCA9IG1pbm1heCgwLCBNYXRoLnJvdW5kKCh4IC0gdGhpcy5vcHRpb25zLmRvdFJhZGl1cykgLyBkZWx0YSksIHRoaXMucG9pbnRzLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzLnRpdGxlID0gdGhpcy5vcHRpb25zLnRvb2x0aXAodGhpcy5wb2ludHNbaW5kZXhdLCBpbmRleCwgdGhpcy5wb2ludHMpO1xyXG4gIH1cclxuXHJcbiAgU3BhcmtsaW5lLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKHBvaW50cykge1xyXG5cclxuICAgIHBvaW50cyA9IHBvaW50cyB8fCBbXTtcclxuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xyXG5cclxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5vcHRpb25zLndpZHRoICogdGhpcy5yYXRpbztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy5vcHRpb25zLndpZHRoICsgJ3B4JztcclxuXHJcbiAgICB2YXIgcHhIZWlnaHQgPSB0aGlzLm9wdGlvbnMuaGVpZ2h0IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBweEhlaWdodCAqIHRoaXMucmF0aW87XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBweEhlaWdodCArICdweCc7XHJcblxyXG4gICAgdmFyIGxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGggKiB0aGlzLnJhdGlvO1xyXG4gICAgdmFyIG9mZnNldFggPSBNYXRoLm1heCh0aGlzLm9wdGlvbnMuZG90UmFkaXVzICogdGhpcy5yYXRpbywgbGluZVdpZHRoLzIpO1xyXG4gICAgdmFyIG9mZnNldFkgPSBNYXRoLm1heCh0aGlzLm9wdGlvbnMuZG90UmFkaXVzICogdGhpcy5yYXRpbywgbGluZVdpZHRoLzIpO1xyXG4gICAgdmFyIHdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggLSBvZmZzZXRYICogMjtcclxuICAgIHZhciBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSBvZmZzZXRZICogMjtcclxuXHJcbiAgICB2YXIgbWluVmFsdWUgPSBNYXRoLm1pbi5hcHBseShNYXRoLCBwb2ludHMpO1xyXG4gICAgdmFyIG1heFZhbHVlID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgcG9pbnRzKTtcclxuICAgIHZhciBib3R0b21WYWx1ZSA9IHRoaXMub3B0aW9ucy5taW5WYWx1ZSAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubWluVmFsdWUgOiBNYXRoLm1pbihtaW5WYWx1ZSwgdGhpcy5vcHRpb25zLm1heE1pblZhbHVlICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5tYXhNaW5WYWx1ZSA6IG1pblZhbHVlKTtcclxuICAgIHZhciB0b3BWYWx1ZSA9IHRoaXMub3B0aW9ucy5tYXhWYWx1ZSAhPSB1bmRlZmluZWQgPyB0aGlzLm9wdGlvbnMubWF4VmFsdWUgOiBNYXRoLm1heChtYXhWYWx1ZSwgdGhpcy5vcHRpb25zLm1pbk1heFZhbHVlICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5taW5NYXhWYWx1ZSA6IG1heFZhbHVlKTtcclxuICAgIHZhciBtaW5YID0gb2Zmc2V0WDtcclxuICAgIHZhciBtYXhYID0gb2Zmc2V0WDtcclxuXHJcbiAgICB2YXIgeCA9IG9mZnNldFg7XHJcbiAgICB2YXIgeSA9IGdldFkuYmluZChwb2ludHMsIGJvdHRvbVZhbHVlLCB0b3BWYWx1ZSwgb2Zmc2V0WSwgaGVpZ2h0KTtcclxuICAgIHZhciBkZWx0YSA9IHdpZHRoIC8gKHBvaW50cy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICB2YXIgZG90ID0gZHJhd0RvdC5iaW5kKHRoaXMsIHRoaXMub3B0aW9ucy5kb3RSYWRpdXMgKiB0aGlzLnJhdGlvLCBvZmZzZXRYLCB3aWR0aCArIG9mZnNldFgpO1xyXG4gICAgdmFyIGxpbmUgPSBkcmF3TGluZS5iaW5kKHRoaXMsIG9mZnNldFgsIHdpZHRoICsgb2Zmc2V0WCk7XHJcblxyXG4gICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMubGluZUNvbG9yO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5saW5lQ29sb3I7XHJcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoO1xyXG4gICAgdGhpcy5jb250ZXh0LmxpbmVDYXAgPSAncm91bmQnO1xyXG4gICAgdGhpcy5jb250ZXh0LmxpbmVKb2luID0gJ3JvdW5kJztcclxuXHJcbiAgICBpZih0aGlzLm9wdGlvbnMuZmlsbEJlbG93ICYmIHBvaW50cy5sZW5ndGggPiAxKXtcclxuICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHgsIHkoMCkpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHggKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIG1pblggPSBwb2ludHNbaV0gPT0gbWluVmFsdWUgPyB4IDogbWluWDtcclxuICAgICAgICBtYXhYID0gcG9pbnRzW2ldID09IG1heFZhbHVlID8geCA6IG1heFg7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCwgeShpKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh3aWR0aCtvZmZzZXRYLCBoZWlnaHQgKyBvZmZzZXRZICsgbGluZVdpZHRoLzIpO1xyXG4gICAgICB0aGlzLmNvbnRleHQubGluZVRvKG9mZnNldFgsIGhlaWdodCArIG9mZnNldFkgKyBsaW5lV2lkdGgvMik7XHJcbiAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5maWxsTGlnaHRlbiA+IDApe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IHRoaXMub3B0aW9ucy5maWxsTGlnaHRlbjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgIH1lbHNlIGlmKHRoaXMub3B0aW9ucy5maWxsTGlnaHRlbiA8IDApe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IC10aGlzLm9wdGlvbnMuZmlsbExpZ2h0ZW47XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHggPSBvZmZzZXRYO1xyXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh4LCB5KDApKTtcclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHggKz0gZGVsdGE7XHJcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCwgeShpKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcblxyXG4gICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuXHJcbiAgICBsaW5lKHRoaXMub3B0aW9ucy5ib3R0b21MaW5lLCAwLCBvZmZzZXRZKTtcclxuICAgIGxpbmUodGhpcy5vcHRpb25zLnRvcExpbmUsIDAsIGhlaWdodCArIG9mZnNldFkrbGluZVdpZHRoLzIpO1xyXG5cclxuICAgIGRvdCh0aGlzLm9wdGlvbnMuc3RhcnRDb2xvciwgdGhpcy5vcHRpb25zLnN0YXJ0TGluZSwgb2Zmc2V0WCArIChwb2ludHMubGVuZ3RoID09IDEgPyB3aWR0aCAvIDIgOiAwKSwgeSgwKSk7XHJcbiAgICBkb3QodGhpcy5vcHRpb25zLmVuZENvbG9yLCB0aGlzLm9wdGlvbnMuZW5kTGluZSwgb2Zmc2V0WCArIChwb2ludHMubGVuZ3RoID09IDEgPyB3aWR0aCAvIDIgOiB3aWR0aCksIHkocG9pbnRzLmxlbmd0aC0xKSk7XHJcbiAgICBkb3QodGhpcy5vcHRpb25zLm1pbkNvbG9yLCB0aGlzLm9wdGlvbnMubWluTGluZSwgbWluWCArIChwb2ludHMubGVuZ3RoID09IDEgPyB3aWR0aCAvIDIgOiAwKSwgeShwb2ludHMuaW5kZXhPZihtaW5WYWx1ZSkpKTtcclxuICAgIGRvdCh0aGlzLm9wdGlvbnMubWF4Q29sb3IsIHRoaXMub3B0aW9ucy5tYXhMaW5lLCBtYXhYICsgKHBvaW50cy5sZW5ndGggPT0gMSA/IHdpZHRoIC8gMiA6IDApLCB5KHBvaW50cy5pbmRleE9mKG1heFZhbHVlKSkpO1xyXG5cclxuICAgIC8vbGluZSh0aGlzLm9wdGlvbnMuYXZlcmFnZUxpbmUsIClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1pbm1heChhLCBiLCBjKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoYSwgTWF0aC5taW4oYiwgYykpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFNwYXJrbGluZTtcclxufSkpO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsbGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWxsXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyogLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpO1xuICB2YXIgZW5kID0gYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuZ3RoKTtcbiAgd2hpbGUgKGVuZFBvcyA+IGluZGV4KSBPW2luZGV4KytdID0gdmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIShhcmdzTGVuZ3RoIGluIGZhY3RvcmllcykpIHtcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIHdlIGhhdmUgbm8gcHJvcGVyIGFsdGVybmF0aXZlcywgSUU4LSBvbmx5XG4gICAgZmFjdG9yaWVzW2FyZ3NMZW5ndGhdID0gRnVuY3Rpb24oJ0MsYScsICdyZXR1cm4gbmV3IEMoJyArIGxpc3Quam9pbignLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyogLCAuLi5hcmdzICovKSB7XG4gIHZhciBmbiA9IGFGdW5jdGlvbih0aGlzKTtcbiAgdmFyIHBhcnRBcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmRGdW5jdGlvbiA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogZm4uYXBwbHkodGhhdCwgYXJncyk7XG4gIH07XG4gIGlmIChpc09iamVjdChmbi5wcm90b3R5cGUpKSBib3VuZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kRnVuY3Rpb247XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyBjb2RlUG9pbnRBdCwgYXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmNvZGVwb2ludGF0XG4gIGNvZGVBdDogY3JlYXRlTWV0aG9kKGZhbHNlKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuYXRgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG4gIGNoYXJBdDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmlsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1maWxsJyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWxsYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbGxcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgZmlsbDogZmlsbFxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2ZpbGwnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1pbmRleG9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gW10uaW5kZXhPZjtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIFsxXS5pbmRleE9mKDEsIC0wKSA8IDA7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gbmF0aXZlSW5kZXhPZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuJCh7IHRhcmdldDogJ0Z1bmN0aW9uJywgcHJvdG86IHRydWUgfSwge1xuICBiaW5kOiBiaW5kXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=