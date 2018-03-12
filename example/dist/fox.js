/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = _interopRequireDefault(__webpack_require__(/*! ../src/index.js */ "./src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  name: 'Tommy'
};

var setName = function setName() {
  state.name = state.name.split('').reverse().join('');
  console.log(state.name);
};

var App = function App(props, children) {
  return _index.default.createNode("section", {
    className: "App"
  }, _index.default.createNode("a", {
    href: "google.com"
  }, "Google"), _index.default.createNode("p", null, "I am awesome."), _index.default.createNode("strong", {
    id: "strong"
  }, "And really cool."), _index.default.createNode("button", {
    onClick: setName
  }, "reverse name"));
};

var mountPoint = document.querySelector("#mountPoint");

_index.default.render(App, mountPoint);

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && msCrypto.getRandomValues.bind(msCrypto));
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/core/builtIn/builtIns/animated.js":
/*!***********************************************!*\
  !*** ./src/core/builtIn/builtIns/animated.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.animated = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../../../index.js */ "./src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animated = function animated(props, children, _fid) {
  return _index.default.createNode("div", {
    "data-foxy-bi": true,
    className: "animated rollIn"
  }, children);
};

exports.animated = animated;

/***/ }),

/***/ "./src/core/builtIn/index.js":
/*!***********************************!*\
  !*** ./src/core/builtIn/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.builtIn = void 0;

var _isString = __webpack_require__(/*! ../../utilities/isString */ "./src/utilities/isString.js");

var _animated = __webpack_require__(/*! ./builtIns/animated */ "./src/core/builtIn/builtIns/animated.js");

var _exists2 = __webpack_require__(/*! ./utilities/_exists */ "./src/core/builtIn/utilities/_exists.js");

var _match2 = __webpack_require__(/*! ./utilities/_match */ "./src/core/builtIn/utilities/_match.js");

var builtIn = {
  elements: {
    animated: _animated.animated
  },
  _match: _match2._match,
  _exists: _exists2._exists
};
exports.builtIn = builtIn;

/***/ }),

/***/ "./src/core/builtIn/utilities/_exists.js":
/*!***********************************************!*\
  !*** ./src/core/builtIn/utilities/_exists.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._exists = void 0;

var _ = __webpack_require__(/*! ./.. */ "./src/core/builtIn/index.js");

var _isString = __webpack_require__(/*! ../../../utilities/isString */ "./src/utilities/isString.js");

var _exists = function _exists(tag, cb) {
  return (0, _isString.isString)(tag) && tag in _.builtIn.elements; // return isString(tag) && tag in builtIns && cb();
};

exports._exists = _exists;

/***/ }),

/***/ "./src/core/builtIn/utilities/_match.js":
/*!**********************************************!*\
  !*** ./src/core/builtIn/utilities/_match.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports._match = void 0;

var _ = __webpack_require__(/*! ./.. */ "./src/core/builtIn/index.js");

var _isString = __webpack_require__(/*! ../../../utilities/isString */ "./src/utilities/isString.js");

var _match = function _match(tag) {
  return (0, _isString.isString)(tag) && _.builtIn._exists(tag) && _.builtIn.elements[tag] || tag;
};

exports._match = _match;

/***/ }),

/***/ "./src/core/component/component.js":
/*!*****************************************!*\
  !*** ./src/core/component/component.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.component = void 0;

var _builtIn = __webpack_require__(/*! ../builtIn */ "./src/core/builtIn/index.js");

// TODO: Handle custom components.
var component = function component(data) {
  return element({
    tag: data.tag({
      props: props,
      children: children
    }),
    props: data.props,
    children: data.children
  });
};

exports.component = component;

/***/ }),

/***/ "./src/core/component/index.js":
/*!*************************************!*\
  !*** ./src/core/component/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.component = void 0;

var _component = __webpack_require__(/*! ./component */ "./src/core/component/component.js");

exports.component = _component.component;

/***/ }),

/***/ "./src/core/createNode.js":
/*!********************************!*\
  !*** ./src/core/createNode.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createNode = void 0;

var _builtIn = __webpack_require__(/*! ./builtIn */ "./src/core/builtIn/index.js");

var createNode = function createNode(tag, props) {
  props = props || {};

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    tag: prepareTag(tag),
    props: prepareProps(props),
    children: prepareChildren(children)
  };
};

exports.createNode = createNode;

var prepareTag = function prepareTag(tag) {
  return _builtIn.builtIn._match(tag) || tag;
}; // NOTE: Placeholder for processing.


var prepareProps = function prepareProps(props) {
  return props;
}; // NOTE: Placeholder for processing.


var prepareChildren = function prepareChildren(children) {
  return children;
};

/***/ }),

/***/ "./src/core/element/createChildren.js":
/*!********************************************!*\
  !*** ./src/core/element/createChildren.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createChildren = void 0;

var _handleNode = __webpack_require__(/*! ../handleNode */ "./src/core/handleNode.js");

var _vdom = __webpack_require__(/*! ../vdom */ "./src/core/vdom/index.js");

var createChildren = function createChildren(children, parent) {
  return children.map(function (node) {
    var element = (0, _handleNode.handleNode)(node, parent);

    _vdom.VDOM.register({
      element: element,
      parent: parent,
      node: node
    });

    parent.appendChild(element);
    return element;
  });
};

exports.createChildren = createChildren;

/***/ }),

/***/ "./src/core/element/createElement.js":
/*!*******************************************!*\
  !*** ./src/core/element/createElement.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createElement = void 0;

var createElement = function createElement(tag) {
  return document.createElement(tag);
};

exports.createElement = createElement;

/***/ }),

/***/ "./src/core/element/element.js":
/*!*************************************!*\
  !*** ./src/core/element/element.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.element = void 0;

var _uuid = _interopRequireDefault(__webpack_require__(/*! uuid */ "./node_modules/uuid/index.js"));

var _handleNode = __webpack_require__(/*! ../handleNode */ "./src/core/handleNode.js");

var _createElement = __webpack_require__(/*! ./createElement */ "./src/core/element/createElement.js");

var _createChildren = __webpack_require__(/*! ./createChildren */ "./src/core/element/createChildren.js");

var _applyProps = __webpack_require__(/*! ../../utilities/dom/applyProps */ "./src/utilities/dom/applyProps.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element = function element(data, parent) {
  var _element = (0, _createElement.createElement)(data.tag);

  var _children = (0, _createChildren.createChildren)(data.children, _element);

  (0, _applyProps.applyProps)(_element, data.props);
  return _element;
};

exports.element = element;

/***/ }),

/***/ "./src/core/element/index.js":
/*!***********************************!*\
  !*** ./src/core/element/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.element = void 0;

var _element = __webpack_require__(/*! ./element */ "./src/core/element/element.js");

exports.element = _element.element;

/***/ }),

/***/ "./src/core/handleNode.js":
/*!********************************!*\
  !*** ./src/core/handleNode.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.handleNode = void 0;

var _removeChildren = __webpack_require__(/*! ../utilities/dom/removeChildren */ "./src/utilities/dom/removeChildren.js");

var _firstTruthy = __webpack_require__(/*! ../utilities/firstTruthy */ "./src/utilities/firstTruthy.js");

var _isString = __webpack_require__(/*! ../utilities/isString */ "./src/utilities/isString.js");

var _isFunction = __webpack_require__(/*! ../utilities/isFunction */ "./src/utilities/isFunction.js");

var _textNode = __webpack_require__(/*! ../utilities/textNode */ "./src/utilities/textNode.js");

var _component = __webpack_require__(/*! ./component */ "./src/core/component/index.js");

var _element = __webpack_require__(/*! ./element */ "./src/core/element/index.js");

var handleNode = function handleNode(data, parent) {
  return (0, _firstTruthy.firstTruthy)([function () {
    return (0, _isString.isString)(data) && (0, _textNode.textNode)(data);
  }, function () {
    return (0, _isString.isString)(data.tag) && (0, _element.element)(data, parent);
  }, function () {
    return (0, _isFunction.isFunction)(data.tag) && (0, _component.component)(data, parent);
  }, function () {
    return (0, _isFunction.isFunction)(data) && handleNode(data(), parent);
  }]);
};

exports.handleNode = handleNode;

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.render = exports.createNode = exports.handleNode = void 0;

var _handleNode = __webpack_require__(/*! ./handleNode */ "./src/core/handleNode.js");

exports.handleNode = _handleNode.handleNode;

var _createNode = __webpack_require__(/*! ./createNode */ "./src/core/createNode.js");

exports.createNode = _createNode.createNode;

var _render = __webpack_require__(/*! ./render */ "./src/core/render.js");

exports.render = _render.render;

/***/ }),

/***/ "./src/core/render.js":
/*!****************************!*\
  !*** ./src/core/render.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.render = void 0;

var _removeChildren = __webpack_require__(/*! ../utilities/dom/removeChildren */ "./src/utilities/dom/removeChildren.js");

var _handleNode = __webpack_require__(/*! ./handleNode */ "./src/core/handleNode.js");

var _vdom = __webpack_require__(/*! ./vdom */ "./src/core/vdom/index.js");

var render = function render(node, parent) {
  _vdom.VDOM.render.introduce({
    node: node,
    parent: parent
  });
};

exports.render = render;

/***/ }),

/***/ "./src/core/vdom/index.js":
/*!********************************!*\
  !*** ./src/core/vdom/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.VDOM = void 0;

var _removeChildren = __webpack_require__(/*! ../../utilities/dom/removeChildren */ "./src/utilities/dom/removeChildren.js");

var _handleNode = __webpack_require__(/*! ../handleNode */ "./src/core/handleNode.js");

var _introduce = __webpack_require__(/*! ./introduce */ "./src/core/vdom/introduce.js");

var _remove = __webpack_require__(/*! ./remove */ "./src/core/vdom/remove.js");

var VMAP = new Map();

var VDOM = function VDOM() {
  this.render = {
    remove: _remove.remove,
    introduce: _introduce.introduce
  };

  this.register = function (_ref) {
    var element = _ref.element,
        parent = _ref.parent,
        node = _ref.node;
    VMAP.set(element, {
      parent: parent,
      node: node
    });
    console.log(VMAP);
  };
};

var _Vdom = new VDOM();

exports.VDOM = _Vdom;

/***/ }),

/***/ "./src/core/vdom/introduce.js":
/*!************************************!*\
  !*** ./src/core/vdom/introduce.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.introduce = void 0;

var _removeChildren = __webpack_require__(/*! ../../utilities/dom/removeChildren */ "./src/utilities/dom/removeChildren.js");

var _handleNode = __webpack_require__(/*! ../handleNode */ "./src/core/handleNode.js");

var introduce = function introduce(_ref) {
  var node = _ref.node,
      parent = _ref.parent;
  return (0, _removeChildren.removeChildren)(parent) && parent.appendChild((0, _handleNode.handleNode)(node()));
};

exports.introduce = introduce;

/***/ }),

/***/ "./src/core/vdom/remove.js":
/*!*********************************!*\
  !*** ./src/core/vdom/remove.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.remove = void 0;

var remove = function remove(oldNode, parent) {
  return parent.removeChild(parent.childNodes[0]);
};

exports.remove = remove;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _core = __webpack_require__(/*! ./core */ "./src/core/index.js");

var _default = {
  Wrapper: _core.Wrapper,
  createNode: _core.createNode,
  render: _core.render
};
exports.default = _default;

/***/ }),

/***/ "./src/utilities/dom/applyHandler.js":
/*!*******************************************!*\
  !*** ./src/utilities/dom/applyHandler.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.applyHandler = void 0;

var applyHandler = function applyHandler(element, name, handler) {
  element.addEventListener(name, handler);
  return element;
};

exports.applyHandler = applyHandler;

/***/ }),

/***/ "./src/utilities/dom/applyProps.js":
/*!*****************************************!*\
  !*** ./src/utilities/dom/applyProps.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.applyProps = void 0;

var _applyHandler = __webpack_require__(/*! ./applyHandler */ "./src/utilities/dom/applyHandler.js");

var _isHandler = __webpack_require__(/*! ../isHandler */ "./src/utilities/isHandler.js");

var _entriesOf = __webpack_require__(/*! ../entriesOf */ "./src/utilities/entriesOf.js");

var _fileArray = __webpack_require__(/*! ../fileArray */ "./src/utilities/fileArray.js");

var _handlerName = __webpack_require__(/*! ./handlerName */ "./src/utilities/dom/handlerName.js");

var applyProps = function applyProps(element, props, _fid) {
  (0, _entriesOf.entriesOf)(props).forEach(applyPropTo(element)); // element._fid = _fid;

  return element;
};

exports.applyProps = applyProps;

var applyPropTo = function applyPropTo(element) {
  return function (_ref) {
    var name = _ref[0],
        value = _ref[1];
    (0, _isHandler.isHandler)(name) ? (0, _applyHandler.applyHandler)(element, (0, _handlerName.handlerName)(name), value) : element[name] = value;
  };
};

/***/ }),

/***/ "./src/utilities/dom/handlerName.js":
/*!******************************************!*\
  !*** ./src/utilities/dom/handlerName.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.handlerName = void 0;

var handlerName = function handlerName(propName) {
  return propName.toLowerCase().substring(2);
};

exports.handlerName = handlerName;

/***/ }),

/***/ "./src/utilities/dom/removeChildren.js":
/*!*********************************************!*\
  !*** ./src/utilities/dom/removeChildren.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeChildren = void 0;

var _removeNode = __webpack_require__(/*! ./removeNode */ "./src/utilities/dom/removeNode.js");

// Remove all children from a node.
var removeChildren = function removeChildren(node) {
  Array.from(node.childNodes).forEach(_removeNode.removeNode);
  return node;
};

exports.removeChildren = removeChildren;

/***/ }),

/***/ "./src/utilities/dom/removeNode.js":
/*!*****************************************!*\
  !*** ./src/utilities/dom/removeNode.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removeNode = void 0;

// Tell a node to kill itself.
var removeNode = function removeNode(node) {
  node.remove();
};

exports.removeNode = removeNode;

/***/ }),

/***/ "./src/utilities/entriesOf.js":
/*!************************************!*\
  !*** ./src/utilities/entriesOf.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.entriesOf = void 0;

var entriesOf = function entriesOf(target) {
  return Object.entries(target);
};

exports.entriesOf = entriesOf;

/***/ }),

/***/ "./src/utilities/fileArray.js":
/*!************************************!*\
  !*** ./src/utilities/fileArray.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.fileArray = void 0;

var fileArray = function fileArray(array, determinator) {
  return array.reduce(function (final, item) {
    determinator(item) ? final[0].push(item) : final[1].push(item);
    return final;
  }, [[], []]);
};

exports.fileArray = fileArray;

/***/ }),

/***/ "./src/utilities/firstTruthy.js":
/*!**************************************!*\
  !*** ./src/utilities/firstTruthy.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.firstTruthy = void 0;

var firstTruthy = function firstTruthy(cases, defaultValue) {
  for (var _iterator = cases, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _case2 = _ref;

    var result = _case2();

    if (result) return result;
  }

  return defaultValue; // return values.find(value => !!value())[0] || defaultValue;
};

exports.firstTruthy = firstTruthy;

/***/ }),

/***/ "./src/utilities/isFunction.js":
/*!*************************************!*\
  !*** ./src/utilities/isFunction.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isFunction = void 0;

var isFunction = function isFunction(target) {
  return typeof target === "function";
};

exports.isFunction = isFunction;

/***/ }),

/***/ "./src/utilities/isHandler.js":
/*!************************************!*\
  !*** ./src/utilities/isHandler.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isHandler = void 0;

var isHandler = function isHandler(propName) {
  return propName.startsWith("on");
};

exports.isHandler = isHandler;

/***/ }),

/***/ "./src/utilities/isString.js":
/*!***********************************!*\
  !*** ./src/utilities/isString.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isString = void 0;

var isString = function isString(target) {
  return typeof target === "string";
};

exports.isString = isString;

/***/ }),

/***/ "./src/utilities/textNode.js":
/*!***********************************!*\
  !*** ./src/utilities/textNode.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.textNode = void 0;

var textNode = function textNode(text) {
  return document.createTextNode(text);
};

exports.textNode = textNode;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2J1aWx0SW4vYnVpbHRJbnMvYW5pbWF0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYnVpbHRJbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9idWlsdEluL3V0aWxpdGllcy9fZXhpc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2J1aWx0SW4vdXRpbGl0aWVzL19tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jb21wb25lbnQvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jcmVhdGVOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2VsZW1lbnQvY3JlYXRlQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZWxlbWVudC9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2VsZW1lbnQvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2hhbmRsZU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3Zkb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdmRvbS9pbnRyb2R1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvdmRvbS9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2FwcGx5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2RvbS9hcHBseVByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2hhbmRsZXJOYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL3JlbW92ZUNoaWxkcmVuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL3JlbW92ZU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9lbnRyaWVzT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9maWxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9maXJzdFRydXRoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9pc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3RleHROb2RlLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiY29uc29sZSIsImxvZyIsIkFwcCIsInByb3BzIiwiY2hpbGRyZW4iLCJtb3VudFBvaW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyIiwiYW5pbWF0ZWQiLCJfZmlkIiwiYnVpbHRJbiIsImVsZW1lbnRzIiwiX21hdGNoIiwiX2V4aXN0cyIsInRhZyIsImNiIiwiY29tcG9uZW50IiwiZWxlbWVudCIsImRhdGEiLCJjcmVhdGVOb2RlIiwicHJlcGFyZVRhZyIsInByZXBhcmVQcm9wcyIsInByZXBhcmVDaGlsZHJlbiIsImNyZWF0ZUNoaWxkcmVuIiwicGFyZW50IiwibWFwIiwibm9kZSIsInJlZ2lzdGVyIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiX2VsZW1lbnQiLCJfY2hpbGRyZW4iLCJoYW5kbGVOb2RlIiwiaW50cm9kdWNlIiwiVk1BUCIsIk1hcCIsIlZET00iLCJyZW1vdmUiLCJzZXQiLCJfVmRvbSIsIm9sZE5vZGUiLCJyZW1vdmVDaGlsZCIsImNoaWxkTm9kZXMiLCJXcmFwcGVyIiwiYXBwbHlIYW5kbGVyIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBseVByb3BzIiwiZm9yRWFjaCIsImFwcGx5UHJvcFRvIiwidmFsdWUiLCJoYW5kbGVyTmFtZSIsInByb3BOYW1lIiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJyZW1vdmVDaGlsZHJlbiIsIkFycmF5IiwiZnJvbSIsInJlbW92ZU5vZGUiLCJlbnRyaWVzT2YiLCJ0YXJnZXQiLCJPYmplY3QiLCJlbnRyaWVzIiwiZmlsZUFycmF5IiwiYXJyYXkiLCJkZXRlcm1pbmF0b3IiLCJyZWR1Y2UiLCJmaW5hbCIsIml0ZW0iLCJwdXNoIiwiZmlyc3RUcnV0aHkiLCJjYXNlcyIsImRlZmF1bHRWYWx1ZSIsIl9jYXNlIiwicmVzdWx0IiwiaXNGdW5jdGlvbiIsImlzSGFuZGxlciIsInN0YXJ0c1dpdGgiLCJpc1N0cmluZyIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7O0FBRUEsSUFBTUEsUUFBUTtBQUNiQyxRQUFNO0FBRE8sQ0FBZDs7QUFJQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNyQkYsUUFBTUMsSUFBTixHQUFhRCxNQUFNQyxJQUFOLENBQVdFLEtBQVgsQ0FBaUIsRUFBakIsRUFBcUJDLE9BQXJCLEdBQStCQyxJQUEvQixDQUFvQyxFQUFwQyxDQUFiO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWVAsTUFBTUMsSUFBbEI7QUFDQSxDQUhEOztBQUtBLElBQU1PLE1BQU0sU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDaEMsU0FDQztBQUFTLGVBQVU7QUFBbkIsS0FDQztBQUFHLFVBQUs7QUFBUixjQURELEVBRUMscURBRkQsRUFHQztBQUFRLFFBQUc7QUFBWCx3QkFIRCxFQUlDO0FBQVEsYUFBU1I7QUFBakIsb0JBSkQsQ0FERDtBQVFBLENBVEQ7O0FBWUEsSUFBTVMsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFuQjs7QUFDQSxlQUFJQyxNQUFKLENBQVdOLEdBQVgsRUFBZ0JHLFVBQWhCLEU7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOzs7O0FBRU8sSUFBTUksV0FBVyxTQUFYQSxRQUFXLENBQUNOLEtBQUQsRUFBUUMsUUFBUixFQUFrQk0sSUFBbEIsRUFBMkI7QUFDbEQsU0FBTztBQUFLLHdCQUFMO0FBQWtCLGVBQVU7QUFBNUIsS0FBK0NOLFFBQS9DLENBQVA7QUFDQSxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTU8sVUFBVTtBQUN0QkMsWUFBVTtBQUNUSDtBQURTLEdBRFk7QUFJdEJJLHdCQUpzQjtBQUt0QkM7QUFMc0IsQ0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QOztBQUNBOztBQUVPLElBQU1BLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQU1DLEVBQU4sRUFBYTtBQUNuQyxTQUFPLHdCQUFTRCxHQUFULEtBQWlCQSxPQUFPLFVBQVFILFFBQXZDLENBRG1DLENBRW5DO0FBQ0EsQ0FITTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQOztBQUNBOztBQUVPLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDRSxHQUFELEVBQVM7QUFDOUIsU0FBTyx3QkFBU0EsR0FBVCxLQUFpQixVQUFRRCxPQUFSLENBQWdCQyxHQUFoQixDQUFqQixJQUF5QyxVQUFRSCxRQUFSLENBQWlCRyxHQUFqQixDQUF6QyxJQUFrRUEsR0FBekU7QUFDQSxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7O0FBRUE7QUFDTyxJQUFNRSxZQUFZLFNBQVpBLFNBQVksT0FBUTtBQUNoQyxTQUFPQyxRQUFRO0FBQ2RILFNBQUtJLEtBQUtKLEdBQUwsQ0FBUztBQUFFWixrQkFBRjtBQUFTQztBQUFULEtBQVQsQ0FEUztBQUVkRCxXQUFPZ0IsS0FBS2hCLEtBRkU7QUFHZEMsY0FBVWUsS0FBS2Y7QUFIRCxHQUFSLENBQVA7QUFLQSxDQU5NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFTyxJQUFNZ0IsYUFBYSxTQUFiQSxVQUFhLENBQUNMLEdBQUQsRUFBTVosS0FBTixFQUE2QjtBQUN0REEsVUFBUUEsU0FBUyxFQUFqQjs7QUFEc0Qsb0NBQWJDLFFBQWE7QUFBYkEsWUFBYTtBQUFBOztBQUd0RCxTQUFPO0FBQ05XLFNBQUtNLFdBQVdOLEdBQVgsQ0FEQztBQUVOWixXQUFPbUIsYUFBYW5CLEtBQWIsQ0FGRDtBQUdOQyxjQUFVbUIsZ0JBQWdCbkIsUUFBaEI7QUFISixHQUFQO0FBS0EsQ0FSTTs7OztBQVVQLElBQU1pQixhQUFhLFNBQWJBLFVBQWEsQ0FBQ04sR0FBRCxFQUFTO0FBQzNCLFNBQU8saUJBQVFGLE1BQVIsQ0FBZUUsR0FBZixLQUF1QkEsR0FBOUI7QUFDQSxDQUZELEMsQ0FJQTs7O0FBQ0EsSUFBTU8sZUFBZSxTQUFmQSxZQUFlLENBQUNuQixLQUFELEVBQVc7QUFDL0IsU0FBT0EsS0FBUDtBQUNBLENBRkQsQyxDQUlBOzs7QUFDQSxJQUFNb0Isa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDbkIsUUFBRCxFQUFjO0FBQ3JDLFNBQU9BLFFBQVA7QUFDQSxDQUZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOztBQUNBOztBQUVPLElBQU1vQixpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNwQixRQUFELEVBQVdxQixNQUFYLEVBQXNCO0FBQ25ELFNBQU9yQixTQUFTc0IsR0FBVCxDQUFhLGdCQUFRO0FBQzNCLFFBQU1SLFVBQVUsNEJBQVdTLElBQVgsRUFBaUJGLE1BQWpCLENBQWhCOztBQUNBLGVBQUtHLFFBQUwsQ0FBYztBQUFFVixzQkFBRjtBQUFXTyxvQkFBWDtBQUFtQkU7QUFBbkIsS0FBZDs7QUFDQUYsV0FBT0ksV0FBUCxDQUFtQlgsT0FBbkI7QUFDQSxXQUFPQSxPQUFQO0FBQ0EsR0FMTSxDQUFQO0FBTUEsQ0FQTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLElBQU1ZLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ2YsR0FBRCxFQUFTO0FBQ3JDLFNBQU9ULFNBQVN3QixhQUFULENBQXVCZixHQUF2QixDQUFQO0FBQ0EsQ0FGTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUcsVUFBVSxTQUFWQSxPQUFVLENBQUNDLElBQUQsRUFBT00sTUFBUCxFQUFrQjtBQUN4QyxNQUFNTSxXQUFXLGtDQUFjWixLQUFLSixHQUFuQixDQUFqQjs7QUFDQSxNQUFNaUIsWUFBWSxvQ0FBZWIsS0FBS2YsUUFBcEIsRUFBOEIyQixRQUE5QixDQUFsQjs7QUFDQSw4QkFBV0EsUUFBWCxFQUFxQlosS0FBS2hCLEtBQTFCO0FBRUEsU0FBTzRCLFFBQVA7QUFDQSxDQU5NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNRSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ2QsSUFBRCxFQUFPTSxNQUFQLEVBQWtCO0FBQzNDLFNBQU8sOEJBQVksQ0FDbEI7QUFBQSxXQUFNLHdCQUFTTixJQUFULEtBQWtCLHdCQUFTQSxJQUFULENBQXhCO0FBQUEsR0FEa0IsRUFFbEI7QUFBQSxXQUFNLHdCQUFTQSxLQUFLSixHQUFkLEtBQXNCLHNCQUFRSSxJQUFSLEVBQWNNLE1BQWQsQ0FBNUI7QUFBQSxHQUZrQixFQUdsQjtBQUFBLFdBQU0sNEJBQVdOLEtBQUtKLEdBQWhCLEtBQXdCLDBCQUFVSSxJQUFWLEVBQWdCTSxNQUFoQixDQUE5QjtBQUFBLEdBSGtCLEVBSWxCO0FBQUEsV0FBTSw0QkFBV04sSUFBWCxLQUFvQmMsV0FBV2QsTUFBWCxFQUFtQk0sTUFBbkIsQ0FBMUI7QUFBQSxHQUprQixDQUFaLENBQVA7QUFNQSxDQVBNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7O0FBQ0E7O0FBRUE7O0FBRU8sSUFBTWpCLFNBQVMsU0FBVEEsTUFBUyxDQUFDbUIsSUFBRCxFQUFPRixNQUFQLEVBQWtCO0FBQ3ZDLGFBQUtqQixNQUFMLENBQVkwQixTQUFaLENBQXNCO0FBQUVQLGNBQUY7QUFBUUY7QUFBUixHQUF0QjtBQUNBLENBRk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMUDs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQSxJQUFNVSxPQUFPLElBQUlDLEdBQUosRUFBYjs7SUFFTUMsSTtPQUNMN0IsTSxHQUFTO0FBQ1I4QiwwQkFEUTtBQUVSSjtBQUZRLEc7O09BS1ROLFEsR0FBVyxnQkFBK0I7QUFBQSxRQUE1QlYsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsUUFBbkJPLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLFFBQVhFLElBQVcsUUFBWEEsSUFBVztBQUN6Q1EsU0FBS0ksR0FBTCxDQUFTckIsT0FBVCxFQUFrQjtBQUFFTyxvQkFBRjtBQUFVRTtBQUFWLEtBQWxCO0FBQ0EzQixZQUFRQyxHQUFSLENBQVlrQyxJQUFaO0FBQ0EsRzs7O0FBR0YsSUFBTUssUUFBUSxJQUFJSCxJQUFKLEVBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7O0FBQ0E7O0FBRU8sSUFBTUgsWUFBWSxTQUFaQSxTQUFZLE9BQXNCO0FBQUEsTUFBbkJQLElBQW1CLFFBQW5CQSxJQUFtQjtBQUFBLE1BQWJGLE1BQWEsUUFBYkEsTUFBYTtBQUM5QyxTQUFPLG9DQUFlQSxNQUFmLEtBQTBCQSxPQUFPSSxXQUFQLENBQW1CLDRCQUFXRixNQUFYLENBQW5CLENBQWpDO0FBQ0EsQ0FGTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLElBQU1XLFNBQVMsU0FBVEEsTUFBUyxDQUFDRyxPQUFELEVBQVVoQixNQUFWLEVBQXFCO0FBQzFDLFNBQU9BLE9BQU9pQixXQUFQLENBQW1CakIsT0FBT2tCLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FBbkIsQ0FBUDtBQUNBLENBRk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7ZUFFZTtBQUNkQyx3QkFEYztBQUVkeEIsOEJBRmM7QUFHZFo7QUFIYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUixJQUFNcUMsZUFBZSxTQUFmQSxZQUFlLENBQUMzQixPQUFELEVBQVV2QixJQUFWLEVBQWdCbUQsT0FBaEIsRUFBNEI7QUFDdkQ1QixVQUFRNkIsZ0JBQVIsQ0FBeUJwRCxJQUF6QixFQUErQm1ELE9BQS9CO0FBQ0EsU0FBTzVCLE9BQVA7QUFDQSxDQUhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTThCLGFBQWEsU0FBYkEsVUFBYSxDQUFDOUIsT0FBRCxFQUFVZixLQUFWLEVBQWlCTyxJQUFqQixFQUEwQjtBQUNuRCw0QkFBVVAsS0FBVixFQUFpQjhDLE9BQWpCLENBQXlCQyxZQUFZaEMsT0FBWixDQUF6QixFQURtRCxDQUduRDs7QUFDQyxTQUFPQSxPQUFQO0FBQ0QsQ0FMTTs7OztBQU9QLElBQU1nQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ2hDLE9BQUQ7QUFBQSxTQUFhLGdCQUFxQjtBQUFBLFFBQWxCdkIsSUFBa0I7QUFBQSxRQUFad0QsS0FBWTtBQUNyRCw4QkFBVXhELElBQVYsSUFDRyxnQ0FBYXVCLE9BQWIsRUFBc0IsOEJBQVl2QixJQUFaLENBQXRCLEVBQXlDd0QsS0FBekMsQ0FESCxHQUVHakMsUUFBUXZCLElBQVIsSUFBZ0J3RCxLQUZuQjtBQUdBLEdBSm1CO0FBQUEsQ0FBcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTyxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU9BLFNBQVNDLFdBQVQsR0FBdUJDLFNBQXZCLENBQWlDLENBQWpDLENBQVA7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7O0FBRUE7QUFDTyxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLE9BQVE7QUFDcENDLFFBQU1DLElBQU4sQ0FBVy9CLEtBQUtnQixVQUFoQixFQUE0Qk0sT0FBNUI7QUFDQSxTQUFPdEIsSUFBUDtBQUNELENBSE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUNPLElBQU1nQyxhQUFhLFNBQWJBLFVBQWEsT0FBUTtBQUNoQ2hDLE9BQUtXLE1BQUw7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTXNCLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxNQUFELEVBQVk7QUFDcEMsU0FBT0MsT0FBT0MsT0FBUCxDQUFlRixNQUFmLENBQVA7QUFDQSxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUcsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBUUMsWUFBUixFQUF5QjtBQUNqRCxTQUFPRCxNQUFNRSxNQUFOLENBQWEsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQ3BDSCxpQkFBYUcsSUFBYixJQUNHRCxNQUFNLENBQU4sRUFBU0UsSUFBVCxDQUFjRCxJQUFkLENBREgsR0FFR0QsTUFBTSxDQUFOLEVBQVNFLElBQVQsQ0FBY0QsSUFBZCxDQUZIO0FBSUEsV0FBT0QsS0FBUDtBQUNBLEdBTk0sRUFNSixDQUFDLEVBQUQsRUFBSyxFQUFMLENBTkksQ0FBUDtBQU9BLENBUk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNRyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxZQUFSLEVBQXlCO0FBQ25ELHVCQUFrQkQsS0FBbEIsa0hBQXlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxRQUFoQkUsTUFBZ0I7O0FBQ3hCLFFBQU1DLFNBQVNELFFBQWY7O0FBQ0EsUUFBSUMsTUFBSixFQUFZLE9BQU9BLE1BQVA7QUFDWjs7QUFFRCxTQUFPRixZQUFQLENBTm1ELENBUW5EO0FBQ0EsQ0FUTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1HLGFBQWEsU0FBYkEsVUFBYSxTQUFVO0FBQ2xDLFNBQU8sT0FBT2YsTUFBUCxLQUFrQixVQUF6QjtBQUNELENBRk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNZ0IsWUFBWSxTQUFaQSxTQUFZO0FBQUEsU0FBWXhCLFNBQVN5QixVQUFULENBQW9CLElBQXBCLENBQVo7QUFBQSxDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxTQUFVO0FBQ2hDLFNBQU8sT0FBT2xCLE1BQVAsS0FBa0IsUUFBekI7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTW1CLFdBQVcsU0FBWEEsUUFBVyxPQUFRO0FBQy9CLFNBQU8xRSxTQUFTMkUsY0FBVCxDQUF3QkMsSUFBeEIsQ0FBUDtBQUNBLENBRk0iLCJmaWxlIjoiZm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhhbXBsZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBmb3ggZnJvbSBcImZveFwiO1xuXG5jb25zdCBzdGF0ZSA9IHtcblx0bmFtZTogJ1RvbW15J1xufVxuXG5jb25zdCBzZXROYW1lID0gKCkgPT4ge1xuXHRzdGF0ZS5uYW1lID0gc3RhdGUubmFtZS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuXHRjb25zb2xlLmxvZyhzdGF0ZS5uYW1lKVxufVxuXG5jb25zdCBBcHAgPSAocHJvcHMsIGNoaWxkcmVuKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwiQXBwXCI+XG5cdFx0XHQ8YSBocmVmPVwiZ29vZ2xlLmNvbVwiPkdvb2dsZTwvYT5cblx0XHRcdDxwPkkgYW0gYXdlc29tZS48L3A+XG5cdFx0XHQ8c3Ryb25nIGlkPVwic3Ryb25nXCI+QW5kIHJlYWxseSBjb29sLjwvc3Ryb25nPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzZXROYW1lfT5yZXZlcnNlIG5hbWU8L2J1dHRvbj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59O1xuXG5cbmNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vdW50UG9pbnRcIik7XG5mb3gucmVuZGVyKEFwcCwgbW91bnRQb2ludCk7XG4iLCJ2YXIgdjEgPSByZXF1aXJlKCcuL3YxJyk7XG52YXIgdjQgPSByZXF1aXJlKCcuL3Y0Jyk7XG5cbnZhciB1dWlkID0gdjQ7XG51dWlkLnYxID0gdjE7XG51dWlkLnY0ID0gdjQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJpbXBvcnQgZm94IGZyb20gXCJmb3hcIjtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGVkID0gKHByb3BzLCBjaGlsZHJlbiwgX2ZpZCkgPT4ge1xuXHRyZXR1cm4gPGRpdiBkYXRhLWZveHktYmkgY2xhc3NOYW1lPVwiYW5pbWF0ZWQgcm9sbEluXCI+e2NoaWxkcmVufTwvZGl2PlxufSIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAndXRpbGl0aWVzL2lzU3RyaW5nJ1xuXG5pbXBvcnQgeyBhbmltYXRlZCB9IGZyb20gJy4vYnVpbHRJbnMvYW5pbWF0ZWQnXG5pbXBvcnQgeyBfZXhpc3RzIH0gZnJvbSAnLi91dGlsaXRpZXMvX2V4aXN0cydcbmltcG9ydCB7IF9tYXRjaCB9IGZyb20gJy4vdXRpbGl0aWVzL19tYXRjaCdcblxuZXhwb3J0IGNvbnN0IGJ1aWx0SW4gPSB7XG5cdGVsZW1lbnRzOiB7XG5cdFx0YW5pbWF0ZWRcblx0fSxcblx0X21hdGNoLFxuXHRfZXhpc3RzXG59IiwiaW1wb3J0IHsgYnVpbHRJbiB9IGZyb20gJ2J1aWx0SW4nXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ3V0aWxpdGllcy9pc1N0cmluZydcblxuZXhwb3J0IGNvbnN0IF9leGlzdHMgPSAodGFnLCBjYikgPT4ge1xuXHRyZXR1cm4gaXNTdHJpbmcodGFnKSAmJiB0YWcgaW4gYnVpbHRJbi5lbGVtZW50cztcblx0Ly8gcmV0dXJuIGlzU3RyaW5nKHRhZykgJiYgdGFnIGluIGJ1aWx0SW5zICYmIGNiKCk7XG59IiwiaW1wb3J0IHsgYnVpbHRJbiB9IGZyb20gJ2J1aWx0SW4nXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ3V0aWxpdGllcy9pc1N0cmluZydcblxuZXhwb3J0IGNvbnN0IF9tYXRjaCA9ICh0YWcpID0+IHtcblx0cmV0dXJuIGlzU3RyaW5nKHRhZykgJiYgYnVpbHRJbi5fZXhpc3RzKHRhZykgJiYgYnVpbHRJbi5lbGVtZW50c1t0YWddIHx8IHRhZztcbn0iLCJpbXBvcnQgeyBidWlsdEluIH0gZnJvbSAnYnVpbHRJbic7XG5cbi8vIFRPRE86IEhhbmRsZSBjdXN0b20gY29tcG9uZW50cy5cbmV4cG9ydCBjb25zdCBjb21wb25lbnQgPSBkYXRhID0+IHtcblx0cmV0dXJuIGVsZW1lbnQoe1xuXHRcdHRhZzogZGF0YS50YWcoeyBwcm9wcywgY2hpbGRyZW4gfSksXG5cdFx0cHJvcHM6IGRhdGEucHJvcHMsXG5cdFx0Y2hpbGRyZW46IGRhdGEuY2hpbGRyZW5cblx0fSk7XG59OyIsImV4cG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JyIsImltcG9ydCB7IGJ1aWx0SW4gfSBmcm9tIFwiYnVpbHRJblwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTm9kZSA9ICh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xuXHRwcm9wcyA9IHByb3BzIHx8IHt9XG5cblx0cmV0dXJuIHtcblx0XHR0YWc6IHByZXBhcmVUYWcodGFnKSxcblx0XHRwcm9wczogcHJlcGFyZVByb3BzKHByb3BzKSxcblx0XHRjaGlsZHJlbjogcHJlcGFyZUNoaWxkcmVuKGNoaWxkcmVuKVxuXHR9O1xufTtcblxuY29uc3QgcHJlcGFyZVRhZyA9ICh0YWcpID0+IHtcblx0cmV0dXJuIGJ1aWx0SW4uX21hdGNoKHRhZykgfHwgdGFnO1xufVxuXG4vLyBOT1RFOiBQbGFjZWhvbGRlciBmb3IgcHJvY2Vzc2luZy5cbmNvbnN0IHByZXBhcmVQcm9wcyA9IChwcm9wcykgPT4ge1xuXHRyZXR1cm4gcHJvcHM7XG59XG5cbi8vIE5PVEU6IFBsYWNlaG9sZGVyIGZvciBwcm9jZXNzaW5nLlxuY29uc3QgcHJlcGFyZUNoaWxkcmVuID0gKGNoaWxkcmVuKSA9PiB7XG5cdHJldHVybiBjaGlsZHJlbjtcbn0iLCJpbXBvcnQgeyBoYW5kbGVOb2RlIH0gZnJvbSBcImNvcmUvaGFuZGxlTm9kZVwiO1xuaW1wb3J0IHsgVkRPTSB9IGZyb20gJ3Zkb20nXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDaGlsZHJlbiA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG5cdHJldHVybiBjaGlsZHJlbi5tYXAobm9kZSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IGhhbmRsZU5vZGUobm9kZSwgcGFyZW50KTtcblx0XHRWRE9NLnJlZ2lzdGVyKHsgZWxlbWVudCwgcGFyZW50LCBub2RlIH0pXG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9KVxufSIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZykgPT4ge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xufSIsImltcG9ydCB1dWlkIGZyb20gJ3V1aWQnXG5cbmltcG9ydCB7IGhhbmRsZU5vZGUgfSBmcm9tICdjb3JlL2hhbmRsZU5vZGUnXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9jcmVhdGVFbGVtZW50J1xuaW1wb3J0IHsgY3JlYXRlQ2hpbGRyZW4gfSBmcm9tICcuL2NyZWF0ZUNoaWxkcmVuJ1xuaW1wb3J0IHsgYXBwbHlQcm9wcyB9IGZyb20gJ3V0aWxpdGllcy9kb20vYXBwbHlQcm9wcydcblxuZXhwb3J0IGNvbnN0IGVsZW1lbnQgPSAoZGF0YSwgcGFyZW50KSA9PiB7XG5cdGNvbnN0IF9lbGVtZW50ID0gY3JlYXRlRWxlbWVudChkYXRhLnRhZyk7XG5cdGNvbnN0IF9jaGlsZHJlbiA9IGNyZWF0ZUNoaWxkcmVuKGRhdGEuY2hpbGRyZW4sIF9lbGVtZW50KTtcblx0YXBwbHlQcm9wcyhfZWxlbWVudCwgZGF0YS5wcm9wcylcblxuXHRyZXR1cm4gX2VsZW1lbnQ7XG59OyIsImV4cG9ydCB7IGVsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQnOyIsImltcG9ydCB7IHJlbW92ZUNoaWxkcmVuIH0gZnJvbSBcInV0aWxpdGllcy9kb20vcmVtb3ZlQ2hpbGRyZW5cIjtcbmltcG9ydCB7IGZpcnN0VHJ1dGh5IH0gZnJvbSBcInV0aWxpdGllcy9maXJzdFRydXRoeVwiO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tIFwidXRpbGl0aWVzL2lzU3RyaW5nXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcInV0aWxpdGllcy9pc0Z1bmN0aW9uXCI7XG5pbXBvcnQgeyB0ZXh0Tm9kZSB9IGZyb20gXCJ1dGlsaXRpZXMvdGV4dE5vZGVcIjtcbmltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJ2NvbXBvbmVudCc7XG5pbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnZWxlbWVudCc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOb2RlID0gKGRhdGEsIHBhcmVudCkgPT4ge1xuXHRyZXR1cm4gZmlyc3RUcnV0aHkoW1xuXHRcdCgpID0+IGlzU3RyaW5nKGRhdGEpICYmIHRleHROb2RlKGRhdGEpLFxuXHRcdCgpID0+IGlzU3RyaW5nKGRhdGEudGFnKSAmJiBlbGVtZW50KGRhdGEsIHBhcmVudCksXG5cdFx0KCkgPT4gaXNGdW5jdGlvbihkYXRhLnRhZykgJiYgY29tcG9uZW50KGRhdGEsIHBhcmVudCksXG5cdFx0KCkgPT4gaXNGdW5jdGlvbihkYXRhKSAmJiBoYW5kbGVOb2RlKGRhdGEoKSwgcGFyZW50KVxuXHRdKTtcbn07IiwiZXhwb3J0IHsgaGFuZGxlTm9kZSB9IGZyb20gJy4vaGFuZGxlTm9kZSdcbmV4cG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tICcuL2NyZWF0ZU5vZGUnXG5leHBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlciciLCJpbXBvcnQgeyByZW1vdmVDaGlsZHJlbiB9IGZyb20gXCJ1dGlsaXRpZXMvZG9tL3JlbW92ZUNoaWxkcmVuXCI7XG5pbXBvcnQgeyBoYW5kbGVOb2RlIH0gZnJvbSBcImNvcmUvaGFuZGxlTm9kZVwiO1xuXG5pbXBvcnQgeyBWRE9NIH0gZnJvbSAnLi92ZG9tJztcblxuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChub2RlLCBwYXJlbnQpID0+IHtcblx0VkRPTS5yZW5kZXIuaW50cm9kdWNlKHsgbm9kZSwgcGFyZW50IH0pXG59OyIsImltcG9ydCB7IHJlbW92ZUNoaWxkcmVuIH0gZnJvbSBcInV0aWxpdGllcy9kb20vcmVtb3ZlQ2hpbGRyZW5cIjtcbmltcG9ydCB7IGhhbmRsZU5vZGUgfSBmcm9tIFwiY29yZS9oYW5kbGVOb2RlXCI7XG5cbmltcG9ydCB7IGludHJvZHVjZSB9IGZyb20gJy4vaW50cm9kdWNlJ1xuaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSAnLi9yZW1vdmUnXG5cbmNvbnN0IFZNQVAgPSBuZXcgTWFwKCk7XG5cbmNsYXNzIFZET00ge1xuXHRyZW5kZXIgPSB7XG5cdFx0cmVtb3ZlLFxuXHRcdGludHJvZHVjZVxuXHR9XG5cblx0cmVnaXN0ZXIgPSAoeyBlbGVtZW50LCBwYXJlbnQsIG5vZGUgfSkgPT4ge1xuXHRcdFZNQVAuc2V0KGVsZW1lbnQsIHsgcGFyZW50LCBub2RlIH0pXG5cdFx0Y29uc29sZS5sb2coVk1BUCk7XG5cdH1cbn1cblxuY29uc3QgX1Zkb20gPSBuZXcgVkRPTSgpXG5cbmV4cG9ydCB7IF9WZG9tIGFzIFZET00gfSIsImltcG9ydCB7IHJlbW92ZUNoaWxkcmVuIH0gZnJvbSBcInV0aWxpdGllcy9kb20vcmVtb3ZlQ2hpbGRyZW5cIjtcbmltcG9ydCB7IGhhbmRsZU5vZGUgfSBmcm9tIFwiY29yZS9oYW5kbGVOb2RlXCI7XG5cbmV4cG9ydCBjb25zdCBpbnRyb2R1Y2UgPSAoeyBub2RlLCBwYXJlbnQgfSkgPT4ge1xuXHRyZXR1cm4gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSAmJiBwYXJlbnQuYXBwZW5kQ2hpbGQoaGFuZGxlTm9kZShub2RlKCkpKTtcbn07IiwiZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChvbGROb2RlLCBwYXJlbnQpID0+IHtcblx0cmV0dXJuIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuY2hpbGROb2Rlc1swXSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5vZGUsIHJlbmRlciwgV3JhcHBlciB9IGZyb20gJy4vY29yZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRXcmFwcGVyLFxuXHRjcmVhdGVOb2RlLFxuXHRyZW5kZXJcbn0iLCJleHBvcnQgY29uc3QgYXBwbHlIYW5kbGVyID0gKGVsZW1lbnQsIG5hbWUsIGhhbmRsZXIpID0+IHtcclxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlcik7XHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgeyBhcHBseUhhbmRsZXIgfSBmcm9tICd1dGlsaXRpZXMvZG9tL2FwcGx5SGFuZGxlcidcbmltcG9ydCB7IGlzSGFuZGxlciB9IGZyb20gXCJ1dGlsaXRpZXMvaXNIYW5kbGVyXCI7XG5pbXBvcnQgeyBlbnRyaWVzT2YgfSBmcm9tIFwidXRpbGl0aWVzL2VudHJpZXNPZlwiO1xuaW1wb3J0IHsgZmlsZUFycmF5IH0gZnJvbSAndXRpbGl0aWVzL2ZpbGVBcnJheSdcbmltcG9ydCB7IGhhbmRsZXJOYW1lIH0gZnJvbSBcIi4vaGFuZGxlck5hbWVcIjtcblxuZXhwb3J0IGNvbnN0IGFwcGx5UHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIF9maWQpID0+IHtcblx0ZW50cmllc09mKHByb3BzKS5mb3JFYWNoKGFwcGx5UHJvcFRvKGVsZW1lbnQpKVxuXG5cdC8vIGVsZW1lbnQuX2ZpZCA9IF9maWQ7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgYXBwbHlQcm9wVG8gPSAoZWxlbWVudCkgPT4gKFsgbmFtZSwgdmFsdWUgXSkgPT4ge1xuXHRpc0hhbmRsZXIobmFtZSlcblx0XHQ/IGFwcGx5SGFuZGxlcihlbGVtZW50LCBoYW5kbGVyTmFtZShuYW1lKSwgdmFsdWUpXG5cdFx0OiBlbGVtZW50W25hbWVdID0gdmFsdWVcbn0iLCJleHBvcnQgY29uc3QgaGFuZGxlck5hbWUgPSAocHJvcE5hbWUpID0+IHtcclxuICByZXR1cm4gcHJvcE5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMik7XHJcbn0iLCJpbXBvcnQgeyByZW1vdmVOb2RlIH0gZnJvbSAndXRpbGl0aWVzL2RvbS9yZW1vdmVOb2RlJ1xyXG5cclxuLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBmcm9tIGEgbm9kZS5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcmVuID0gbm9kZSA9PiB7XHJcbiAgQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpLmZvckVhY2gocmVtb3ZlTm9kZSk7XHJcbiAgcmV0dXJuIG5vZGU7XHJcbn07IiwiLy8gVGVsbCBhIG5vZGUgdG8ga2lsbCBpdHNlbGYuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlID0gbm9kZSA9PiB7XHJcbiAgbm9kZS5yZW1vdmUoKTtcclxufTsiLCJleHBvcnQgY29uc3QgZW50cmllc09mID0gKHRhcmdldCkgPT4ge1xuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGFyZ2V0KTtcbn0iLCJleHBvcnQgY29uc3QgZmlsZUFycmF5ID0gKGFycmF5LCBkZXRlcm1pbmF0b3IpID0+IHtcclxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKChmaW5hbCwgaXRlbSkgPT4ge1xyXG5cdFx0ZGV0ZXJtaW5hdG9yKGl0ZW0pXHJcblx0XHRcdD8gZmluYWxbMF0ucHVzaChpdGVtKVxyXG5cdFx0XHQ6IGZpbmFsWzFdLnB1c2goaXRlbSlcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZpbmFsO1xyXG5cdH0sIFtbXSwgW11dKVxyXG59IiwiZXhwb3J0IGNvbnN0IGZpcnN0VHJ1dGh5ID0gKGNhc2VzLCBkZWZhdWx0VmFsdWUpID0+IHtcblx0Zm9yIChsZXQgX2Nhc2Ugb2YgY2FzZXMpIHtcblx0XHRjb25zdCByZXN1bHQgPSBfY2FzZSgpO1xuXHRcdGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xuXG5cdC8vIHJldHVybiB2YWx1ZXMuZmluZCh2YWx1ZSA9PiAhIXZhbHVlKCkpWzBdIHx8IGRlZmF1bHRWYWx1ZTtcbn0iLCJleHBvcnQgY29uc3QgaXNGdW5jdGlvbiA9IHRhcmdldCA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09IFwiZnVuY3Rpb25cIjtcclxufTsiLCJleHBvcnQgY29uc3QgaXNIYW5kbGVyID0gcHJvcE5hbWUgPT4gcHJvcE5hbWUuc3RhcnRzV2l0aChcIm9uXCIpOyIsImV4cG9ydCBjb25zdCBpc1N0cmluZyA9IHRhcmdldCA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09IFwic3RyaW5nXCI7XHJcbn07IiwiZXhwb3J0IGNvbnN0IHRleHROb2RlID0gdGV4dCA9PiB7XG5cdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==