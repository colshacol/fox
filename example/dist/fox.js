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

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var App = function App() {
  return _index.default.create("div", {
    className: "App"
  }, _index.default.create("animated", null, _index.default.create("p", null, "I'm an ", "<animated>", " builtIn. I come pre-installed!")), _index.default.create(Foo, null));
};

var Foo = function Foo() {
  return _index.default.create("div", {
    className: "Foo"
  }, _index.default.create("p", null, "I AM FOO, HEAR ME ROAR."), _index.default.create(Bar, {
    gooboo: [0, 'g', 0]
  }, _index.default.create("i", null, "italic?")));
};

var Bar =
/*#__PURE__*/
function (_fox$Wrapper) {
  _inheritsLoose(Bar, _fox$Wrapper);

  function Bar() {
    return _fox$Wrapper.apply(this, arguments) || this;
  }

  var _proto = Bar.prototype;

  _proto.render = function render(_ref) {
    var props = _ref.props,
        children = _ref.children,
        state = _ref.state;
    return _index.default.create("div", {
      className: "Bar"
    }, _index.default.create("p", null, "I AM bar hear me bark?"));
  };

  return Bar;
}(_index.default.Wrapper);

_index.default.render(_index.default.create(App, null), document.querySelector("#mountPoint"));

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

/***/ "./src/core/Wrapper.js":
/*!*****************************!*\
  !*** ./src/core/Wrapper.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Wrapper = void 0;

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Wrapper = function Wrapper(props, children) {
  var _this = this;

  this.props = props;
  this.children = children;
  this.state = {
    stateful: true
  };

  this.render = function () {
    return _this.render({
      props: props,
      children: children,
      state: _this.state
    });
  };
};

exports.Wrapper = Wrapper;

var Bar =
/*#__PURE__*/
function (_Wrapper) {
  _inheritsLoose(Bar, _Wrapper);

  function Bar() {
    return _Wrapper.apply(this, arguments) || this;
  }

  var _proto = Bar.prototype;

  _proto.render = function render(_ref) {
    var state = _ref.state,
        props = _ref.props,
        children = _ref.children;
    return fox.create("div", {
      className: "Bar"
    }, fox.create("p", null, "I AM bar hear me bark?"));
  };

  return Bar;
}(Wrapper);

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
  return _index.default.create("div", {
    "data-foxy-bi": true,
    className: "animated rollIn"
  }, children);
};

exports.animated = animated;

/***/ }),

/***/ "./src/core/builtIn/builtIns/index.js":
/*!********************************************!*\
  !*** ./src/core/builtIn/builtIns/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.builtIns = void 0;

var _animated = __webpack_require__(/*! ./animated */ "./src/core/builtIn/builtIns/animated.js");

var _isString = __webpack_require__(/*! ../../../utilities/isString */ "./src/utilities/isString.js");

var _exists = function _exists(tag, cb) {
  return (0, _isString.isString)(tag) && tag in builtIns; // return isString(tag) && tag in builtIns && cb();
};

var builtIns = {
  animated: _animated.animated,
  _exists: _exists
};
exports.builtIns = builtIns;

/***/ }),

/***/ "./src/core/create.js":
/*!****************************!*\
  !*** ./src/core/create.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.create = void 0;

var _uuid = _interopRequireDefault(__webpack_require__(/*! uuid */ "./node_modules/uuid/index.js"));

var _createElement = __webpack_require__(/*! ./element/createElement */ "./src/core/element/createElement.js");

var _applyProps = __webpack_require__(/*! ../utilities/dom/applyProps */ "./src/utilities/dom/applyProps.js");

var _appendChildren = __webpack_require__(/*! ../utilities/dom/appendChildren */ "./src/utilities/dom/appendChildren.js");

var _createChildren = __webpack_require__(/*! ./element/createChildren */ "./src/core/element/createChildren.js");

var _EMAP = __webpack_require__(/*! ./store/EMAP */ "./src/core/store/EMAP.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = function create(tag, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  props = props || {};

  var _fid = (0, _uuid.default)();

  var _element = (0, _createElement.createElement)(tag, props, children);

  var _children = (0, _createChildren.createChildren)(children);

  _EMAP.EMAP.set(_fid, {
    _element: _element,
    tag: tag,
    props: props,
    children: children
  });

  (0, _appendChildren.appendChildren)(_element, _children);
  (0, _applyProps.applyProps)(_element, props, _fid);
  return _element;
};

exports.create = create;

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

var _isString = __webpack_require__(/*! ../../utilities/isString */ "./src/utilities/isString.js");

// NOTE: Mainly just handles text nodes.
var createChildren = function createChildren(children) {
  children = children || [];
  return children.map(function (child) {
    if (Array.isArray(child)) return createChildren(child);
    return (0, _isString.isString)(child) ? document.createTextNode(child) : child;
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

var _builtIns = __webpack_require__(/*! ../builtIn/builtIns */ "./src/core/builtIn/builtIns/index.js");

var _Wrapper = __webpack_require__(/*! ../Wrapper */ "./src/core/Wrapper.js");

var createElement = function createElement(tag, props, children) {
  switch (typeof tag) {
    case 'string':
      return _builtIns.builtIns._exists(tag) ? _builtIns.builtIns[tag](props, children) : document.createElement(tag);

    case 'function':
      return tag instanceof _Wrapper.Wrapper ? new tag(props, children).render() : tag(props, children);
  }
};

exports.createElement = createElement;

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Wrapper = exports.render = exports.create = void 0;

var _create = __webpack_require__(/*! ./create */ "./src/core/create.js");

exports.create = _create.create;

var _render = __webpack_require__(/*! ./render */ "./src/core/render.js");

exports.render = _render.render;

var _Wrapper = __webpack_require__(/*! ./Wrapper */ "./src/core/Wrapper.js");

exports.Wrapper = _Wrapper.Wrapper;

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

var render = function render(element, node) {
  (0, _removeChildren.removeChildren)(node) && node.appendChild(element);
};

exports.render = render;

/***/ }),

/***/ "./src/core/store/EMAP.js":
/*!********************************!*\
  !*** ./src/core/store/EMAP.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EMAP = void 0;
var EMAP = new Map();
exports.EMAP = EMAP;

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
  create: _core.create,
  render: _core.render
};
exports.default = _default;

/***/ }),

/***/ "./src/utilities/dom/appendChildren.js":
/*!*********************************************!*\
  !*** ./src/utilities/dom/appendChildren.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.appendChildren = void 0;
var i = 0;

var appendChildren = function appendChildren(element, children) {
  // NOTE: builtIns (bi) handle their own children.
  if (element['data-foxy-bi']) return;
  children.forEach(function (child, ii) {
    if (Array.isArray(child)) return appendChildren(element, child);
    child && element.appendChild(child);
  });
  return element;
};

exports.appendChildren = appendChildren;

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
  (0, _entriesOf.entriesOf)(props).forEach(function (_ref) {
    var name = _ref[0],
        value = _ref[1];
    (0, _isHandler.isHandler)(name) ? (0, _applyHandler.applyHandler)(element, (0, _handlerName.handlerName)(name), value) : element[name] = value;
  });
  element._fid = _fid;
  return element;
};

exports.applyProps = applyProps;

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYnVpbHRJbi9idWlsdElucy9hbmltYXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9idWlsdEluL2J1aWx0SW5zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9lbGVtZW50L2NyZWF0ZUNoaWxkcmVuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2VsZW1lbnQvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvc3RvcmUvRU1BUC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9kb20vYXBwZW5kQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9kb20vYXBwbHlIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2FwcGx5UHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9kb20vaGFuZGxlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9kb20vcmVtb3ZlQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9kb20vcmVtb3ZlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2VudHJpZXNPZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2ZpbGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2lzSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2lzU3RyaW5nLmpzIl0sIm5hbWVzIjpbIkFwcCIsIkZvbyIsIkJhciIsInJlbmRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJzdGF0ZSIsIldyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGF0ZWZ1bCIsImFuaW1hdGVkIiwiX2ZpZCIsIl9leGlzdHMiLCJ0YWciLCJjYiIsImJ1aWx0SW5zIiwiY3JlYXRlIiwiX2VsZW1lbnQiLCJfY2hpbGRyZW4iLCJzZXQiLCJjcmVhdGVDaGlsZHJlbiIsIm1hcCIsIkFycmF5IiwiaXNBcnJheSIsImNoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudCIsIm5vZGUiLCJhcHBlbmRDaGlsZCIsIkVNQVAiLCJNYXAiLCJpIiwiYXBwZW5kQ2hpbGRyZW4iLCJmb3JFYWNoIiwiaWkiLCJhcHBseUhhbmRsZXIiLCJuYW1lIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBseVByb3BzIiwidmFsdWUiLCJoYW5kbGVyTmFtZSIsInByb3BOYW1lIiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJyZW1vdmVDaGlsZHJlbiIsImZyb20iLCJjaGlsZE5vZGVzIiwicmVtb3ZlTm9kZSIsInJlbW92ZSIsImVudHJpZXNPZiIsInRhcmdldCIsIk9iamVjdCIsImVudHJpZXMiLCJmaWxlQXJyYXkiLCJhcnJheSIsImRldGVybWluYXRvciIsInJlZHVj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LE9BQTVCO0FBQ0EsU0FBT04sSUFBUDtBQUNELENBSE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUNPLElBQU1xQixhQUFhLFNBQWJBLFVBQWEsT0FBUTtBQUNoQ3JCLE9BQUtzQixNQUFMO0FBQ0QsQ0FGTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxNQUFELEVBQVk7QUFDcEMsU0FBT0MsT0FBT0MsT0FBUCxDQUFlRixNQUFmLENBQVA7QUFDQSxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUcsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBUUMsWUFBUixFQUF5QjtBQUNqRCxTQUFPRCxNQUFNRSxNQUFOLENBQWEsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQ3BDSCxpQkFBYUcsSUFBYixJQUNHRCxNQUFNLENBQU4sRUFBU0UsSUFBVCxDQUFjRCxJQUFkLENBREgsR0FFR0QsTUFBTSxDQUFOLEVBQVNFLElBQVQsQ0FBY0QsSUFBZCxDQUZIO0FBSUEsV0FBT0QsS0FBUDtBQUNBLEdBTk0sRUFNSixDQUFDLEVBQUQsRUFBSyxFQUFMLENBTkksQ0FBUDtBQU9BLENBUk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNRyxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUFZbkIsU0FBU29CLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBWjtBQUFBLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLFNBQVU7QUFDaEMsU0FBTyxPQUFPWixNQUFQLEtBQWtCLFFBQXpCO0FBQ0QsQ0FGTSIsImZpbGUiOiJmb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9leGFtcGxlL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGZveCBmcm9tIFwiZm94XCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuXHRcdFx0PGFuaW1hdGVkPlxuXHRcdFx0XHQ8cD5JJ20gYW4ge1wiPGFuaW1hdGVkPlwifSBidWlsdEluLiBJIGNvbWUgcHJlLWluc3RhbGxlZCE8L3A+XG5cdFx0XHQ8L2FuaW1hdGVkPlxuXHRcdFx0PEZvbyAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgRm9vID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiRm9vXCI+XG5cdFx0XHQ8cD5JIEFNIEZPTywgSEVBUiBNRSBST0FSLjwvcD5cblx0XHRcdDxCYXIgZ29vYm9vPXtbMCwgJ2cnLCAwXX0+XG5cdFx0XHRcdDxpPml0YWxpYz88L2k+XG5cdFx0XHQ8L0Jhcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNsYXNzIEJhciBleHRlbmRzIGZveC5XcmFwcGVyIHtcblx0cmVuZGVyKHsgcHJvcHMsIGNoaWxkcmVuLCBzdGF0ZSB9KSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQmFyXCI+XG5cdFx0XHRcdDxwPkkgQU0gYmFyIGhlYXIgbWUgYmFyaz88L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZm94LnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vdW50UG9pbnRcIikpO1xuIiwidmFyIHYxID0gcmVxdWlyZSgnLi92MScpO1xudmFyIHY0ID0gcmVxdWlyZSgnLi92NCcpO1xuXG52YXIgdXVpZCA9IHY0O1xudXVpZC52MSA9IHYxO1xudXVpZC52NCA9IHY0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV1aWQ7XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgcmV0dXJuIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIHZhciBzZWVkQnl0ZXMgPSBybmcoKTtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW1xuICAgICAgICBzZWVkQnl0ZXNbMF0gfCAweDAxLFxuICAgICAgICBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XVxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiZXhwb3J0IGNsYXNzIFdyYXBwZXIge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcywgY2hpbGRyZW4pIHtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXHRcdHRoaXMuc3RhdGUgPSB7IHN0YXRlZnVsOiB0cnVlIH1cblx0XHR0aGlzLnJlbmRlciA9ICgpID0+IHRoaXMucmVuZGVyKHsgcHJvcHMsIGNoaWxkcmVuLCBzdGF0ZTogdGhpcy5zdGF0ZSB9KVxuXHR9XG59XG5cbmNsYXNzIEJhciBleHRlbmRzIFdyYXBwZXIge1xuXHRyZW5kZXIoeyBzdGF0ZSwgcHJvcHMsIGNoaWxkcmVuIH0pIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJCYXJcIj5cblx0XHRcdFx0PHA+SSBBTSBiYXIgaGVhciBtZSBiYXJrPzwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSIsImltcG9ydCBmb3ggZnJvbSBcImZveFwiO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0ZWQgPSAocHJvcHMsIGNoaWxkcmVuLCBfZmlkKSA9PiB7XG5cdHJldHVybiA8ZGl2IGRhdGEtZm94eS1iaSBjbGFzc05hbWU9XCJhbmltYXRlZCByb2xsSW5cIj57Y2hpbGRyZW59PC9kaXY+XG59IiwiaW1wb3J0IHsgYW5pbWF0ZWQgfSBmcm9tICcuL2FuaW1hdGVkJ1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICd1dGlsaXRpZXMvaXNTdHJpbmcnXG5cbmNvbnN0IF9leGlzdHMgPSAodGFnLCBjYikgPT4ge1xuXHRyZXR1cm4gaXNTdHJpbmcodGFnKSAmJiB0YWcgaW4gYnVpbHRJbnM7XG5cdC8vIHJldHVybiBpc1N0cmluZyh0YWcpICYmIHRhZyBpbiBidWlsdElucyAmJiBjYigpO1xufVxuXG5leHBvcnQgY29uc3QgYnVpbHRJbnMgPSB7XG5cdGFuaW1hdGVkLFxuXHRfZXhpc3RzXG59IiwiaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJlbGVtZW50L2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGFwcGx5UHJvcHMgfSBmcm9tIFwidXRpbGl0aWVzL2RvbS9hcHBseVByb3BzXCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gXCJ1dGlsaXRpZXMvZG9tL2FwcGVuZENoaWxkcmVuXCI7XG5pbXBvcnQgeyBjcmVhdGVDaGlsZHJlbiB9IGZyb20gXCJlbGVtZW50L2NyZWF0ZUNoaWxkcmVuXCI7XG5pbXBvcnQgeyBFTUFQIH0gZnJvbSBcInN0b3JlL0VNQVBcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xuXHRwcm9wcyA9IHByb3BzIHx8IHt9O1xuXHRjb25zdCBfZmlkID0gdXVpZCgpO1xuXG5cdGNvbnN0IF9lbGVtZW50ID0gY3JlYXRlRWxlbWVudCh0YWcsIHByb3BzLCBjaGlsZHJlbik7XG5cdGNvbnN0IF9jaGlsZHJlbiA9IGNyZWF0ZUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuXHRFTUFQLnNldChfZmlkLCB7IF9lbGVtZW50LCB0YWcsIHByb3BzLCBjaGlsZHJlbiB9KTtcblxuXHRhcHBlbmRDaGlsZHJlbihfZWxlbWVudCwgX2NoaWxkcmVuKTtcblx0YXBwbHlQcm9wcyhfZWxlbWVudCwgcHJvcHMsIF9maWQpO1xuXG5cdHJldHVybiBfZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAndXRpbGl0aWVzL2lzU3RyaW5nJ1xuXG4vLyBOT1RFOiBNYWlubHkganVzdCBoYW5kbGVzIHRleHQgbm9kZXMuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2hpbGRyZW4gPSAoY2hpbGRyZW4pID0+IHtcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiB8fCBbXTtcblxuICByZXR1cm4gY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHJldHVybiBjcmVhdGVDaGlsZHJlbihjaGlsZCk7XG4gICAgcmV0dXJuIGlzU3RyaW5nKGNoaWxkKSA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSA6IGNoaWxkO1xuICB9KTtcbn07IiwiaW1wb3J0IHsgYnVpbHRJbnMgfSBmcm9tIFwiYnVpbHRJbi9idWlsdEluc1wiO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gJy4uL1dyYXBwZXInO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIHByb3BzLCBjaGlsZHJlbikgPT4ge1xuXHRzd2l0Y2ggKHR5cGVvZiB0YWcpIHtcblx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0cmV0dXJuIGJ1aWx0SW5zLl9leGlzdHModGFnKVxuXHRcdFx0XHQ/IGJ1aWx0SW5zW3RhZ10ocHJvcHMsIGNoaWxkcmVuKVxuXHRcdFx0XHQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuXHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdHJldHVybiB0YWcgaW5zdGFuY2VvZiBXcmFwcGVyXG5cdFx0XHRcdD8gKG5ldyB0YWcocHJvcHMsIGNoaWxkcmVuKSkucmVuZGVyKClcblx0XHRcdFx0OiB0YWcocHJvcHMsIGNoaWxkcmVuKTtcblx0fVxufTsiLCJleHBvcnQgeyBjcmVhdGUgfSBmcm9tICcuL2NyZWF0ZSdcbmV4cG9ydCB7IHJlbmRlciB9IGZyb20gJy4vcmVuZGVyJ1xuZXhwb3J0IHsgV3JhcHBlciB9IGZyb20gJy4vV3JhcHBlciciLCJpbXBvcnQgeyByZW1vdmVDaGlsZHJlbiB9IGZyb20gJ3V0aWxpdGllcy9kb20vcmVtb3ZlQ2hpbGRyZW4nXG5cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuICByZW1vdmVDaGlsZHJlbihub2RlKSAmJiBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufSIsImV4cG9ydCBjb25zdCBFTUFQID0gbmV3IE1hcCgpOyIsImltcG9ydCB7IGNyZWF0ZSwgcmVuZGVyLCBXcmFwcGVyIH0gZnJvbSAnLi9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdFdyYXBwZXIsXG5cdGNyZWF0ZSxcblx0cmVuZGVyXG59IiwibGV0IGkgPSAwO1xuXG5leHBvcnQgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAoZWxlbWVudCwgY2hpbGRyZW4pID0+IHtcblx0Ly8gTk9URTogYnVpbHRJbnMgKGJpKSBoYW5kbGUgdGhlaXIgb3duIGNoaWxkcmVuLlxuXHRpZiAoZWxlbWVudFsnZGF0YS1mb3h5LWJpJ10pIHJldHVybjtcblxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaWkpID0+IHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHJldHVybiBhcHBlbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZCk7XG4gICAgY2hpbGQgJiYgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTsiLCJleHBvcnQgY29uc3QgYXBwbHlIYW5kbGVyID0gKGVsZW1lbnQsIG5hbWUsIGhhbmRsZXIpID0+IHtcclxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlcik7XHJcblx0cmV0dXJuIGVsZW1lbnQ7XHJcbn0iLCJpbXBvcnQgeyBhcHBseUhhbmRsZXIgfSBmcm9tICd1dGlsaXRpZXMvZG9tL2FwcGx5SGFuZGxlcidcbmltcG9ydCB7IGlzSGFuZGxlciB9IGZyb20gXCJ1dGlsaXRpZXMvaXNIYW5kbGVyXCI7XG5pbXBvcnQgeyBlbnRyaWVzT2YgfSBmcm9tIFwidXRpbGl0aWVzL2VudHJpZXNPZlwiO1xuaW1wb3J0IHsgZmlsZUFycmF5IH0gZnJvbSAndXRpbGl0aWVzL2ZpbGVBcnJheSdcbmltcG9ydCB7IGhhbmRsZXJOYW1lIH0gZnJvbSBcIi4vaGFuZGxlck5hbWVcIjtcblxuZXhwb3J0IGNvbnN0IGFwcGx5UHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIF9maWQpID0+IHtcblx0ZW50cmllc09mKHByb3BzKS5mb3JFYWNoKChbIG5hbWUsIHZhbHVlIF0pID0+IHtcblx0XHRpc0hhbmRsZXIobmFtZSlcblx0XHRcdD8gYXBwbHlIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXJOYW1lKG5hbWUpLCB2YWx1ZSlcblx0XHRcdDogZWxlbWVudFtuYW1lXSA9IHZhbHVlXG5cdH0pXG5cblx0ZWxlbWVudC5fZmlkID0gX2ZpZDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59OyIsImV4cG9ydCBjb25zdCBoYW5kbGVyTmFtZSA9IChwcm9wTmFtZSkgPT4ge1xyXG4gIHJldHVybiBwcm9wTmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKTtcclxufSIsImltcG9ydCB7IHJlbW92ZU5vZGUgfSBmcm9tICd1dGlsaXRpZXMvZG9tL3JlbW92ZU5vZGUnXHJcblxyXG4vLyBSZW1vdmUgYWxsIGNoaWxkcmVuIGZyb20gYSBub2RlLlxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hpbGRyZW4gPSBub2RlID0+IHtcclxuICBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZm9yRWFjaChyZW1vdmVOb2RlKTtcclxuICByZXR1cm4gbm9kZTtcclxufTsiLCIvLyBUZWxsIGEgbm9kZSB0byBraWxsIGl0c2VsZi5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGUgPSBub2RlID0+IHtcclxuICBub2RlLnJlbW92ZSgpO1xyXG59OyIsImV4cG9ydCBjb25zdCBlbnRyaWVzT2YgPSAodGFyZ2V0KSA9PiB7XG5cdHJldHVybiBPYmplY3QuZW50cmllcyh0YXJnZXQpO1xufSIsImV4cG9ydCBjb25zdCBmaWxlQXJyYXkgPSAoYXJyYXksIGRldGVybWluYXRvcikgPT4ge1xyXG5cdHJldHVybiBhcnJheS5yZWR1Y2UoKGZpbmFsLCBpdGVtKSA9PiB7XHJcblx0XHRkZXRlcm1pbmF0b3IoaXRlbSlcclxuXHRcdFx0PyBmaW5hbFswXS5wdXNoKGl0ZW0pXHJcblx0XHRcdDogZmluYWxbMV0ucHVzaChpdGVtKVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmluYWw7XHJcblx0fSwgW1tdLCBbXV0pXHJcbn0iLCJleHBvcnQgY29uc3QgaXNIYW5kbGVyID0gcHJvcE5hbWUgPT4gcHJvcE5hbWUuc3RhcnRzV2l0aChcIm9uXCIpOyIsImV4cG9ydCBjb25zdCBpc1N0cmluZyA9IHRhcmdldCA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09IFwic3RyaW5nXCI7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==