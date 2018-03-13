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


__webpack_require__(/*! ./logger */ "./example/logger.js");

var _index = _interopRequireDefault(__webpack_require__(/*! ../src/index.js */ "./src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// STATE NOT WORKING YET
var state = {
  name: "Tommy"
};

var setName = function setName() {
  state.name = state.name.split("").reverse().join("");
  console.log(state.name);
};

var App = function App(_ref) {
  var props = _ref.props,
      children = _ref.children;
  return _index.default.create("main", {
    className: "App"
  }, _index.default.create("animated", null, _index.default.create("img", {
    src: "https://pbs.twimg.com/profile_images/931971635288174593/DjhdoFLE_bigger.jpg",
    alt: "some prick"
  })), _index.default.create("a", {
    href: "google.com"
  }, "Google"), _index.default.create("p", null, "I am awesome."), _index.default.create("strong", {
    id: "strong"
  }, "And really cool."), _index.default.create("button", {
    onClick: setName
  }, "reverse name"), _index.default.create("div", {
    className: "row"
  }, _index.default.create("nav", null, _index.default.create("ul", null, _index.default.create("li", null, "first"), _index.default.create("li", null, "second"), _index.default.create("li", null, _index.default.create("i", null, "third"), _index.default.create("section", null, _index.default.create("a", {
    href: "facebook.com"
  }, "how do you do?")))))), _index.default.create(Bar, {
    fuck: true
  }));
};

var Bar = function Bar(_ref2) {
  var props = _ref2.props,
      children = _ref2.children;
  return _index.default.create("nav", null, _index.default.create("ul", null, _index.default.create("li", null, "aaaa"), _index.default.create("li", null, "bbbb"), _index.default.create("li", null, _index.default.create("i", null, "cccc"), _index.default.create("section", null, _index.default.create("a", {
    href: "youtube.com"
  }, "go to youtube")))));
};

var mountPoint = document.querySelector("#mountPoint");

_index.default.mount(_index.default.create(App, {
  dog: true
}), mountPoint, true);

/***/ }),

/***/ "./example/logger.js":
/*!***************************!*\
  !*** ./example/logger.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import pwc from 'pretty-web-console'
// // configure your stylized loggers 
// const loggerA = pwc().size('medium').weight('bold')
// const loggerB = pwc().large().bold()
// // log anything! 
// loggerA.log('hi')
// loggerB.log('hi')
// // you can even extend your loggers 
// loggerA.fantasy().underline().info('i am back')
// // pass in a config object 
// const logger = pwc({
// 	color: 'DarkOrange',
// 	bgColor: 'BlanchedAlmond'
// })
// // log it! 
// logger.log('hi')
// // feel free to mix-and-match between different methods 
// pwc({ color: 'green' }).size('large').bold().log('hi again')

/***/ }),

/***/ "./src/core/builtIn.js":
/*!*****************************!*\
  !*** ./src/core/builtIn.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.builtIns = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../index.js */ "./src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var builtIns = {
  animated: function animated(_ref) {
    var props = _ref.props,
        children = _ref.children;
    console.group('animated()', {
      props: props,
      children: children
    });
    return _index.default.create("div", {
      "data-foxy-builtIn": true,
      className: "animated rollIn"
    }, children.map(function (c) {
      return c;
    }));
  }
};
exports.builtIns = builtIns;

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.component = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../index.js */ "./src/index.js"));

var _applyProps = __webpack_require__(/*! ../utilities/applyProps */ "./src/utilities/applyProps.js");

var _removeChildren = __webpack_require__(/*! ../utilities/dom/removeChildren */ "./src/utilities/dom/removeChildren.js");

var _mount = __webpack_require__(/*! ./mount */ "./src/core/mount.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(_ref) {
  var _element = _ref._element,
      $parent = _ref.$parent;

  // console.group("component()", { _element, $parent });
  var $newElement = _element._createdElement = _element.tag(_element);

  var element = document.createElement($newElement.tag);
  console.log({
    $newElement: $newElement,
    element: element
  });
  $newElement.children && $newElement.children.forEach(function (child) {
    (0, _mount.mount)(child, element);
  });
  return element;
};

exports.component = component;

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

var _index = _interopRequireDefault(__webpack_require__(/*! ../index.js */ "./src/index.js"));

var _applyProps = __webpack_require__(/*! ../utilities/applyProps */ "./src/utilities/applyProps.js");

var _removeChildren = __webpack_require__(/*! ../utilities/dom/removeChildren */ "./src/utilities/dom/removeChildren.js");

var _builtIn = __webpack_require__(/*! ./builtIn */ "./src/core/builtIn.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var create = function create(tag, props) {
  if (props === void 0) {
    props = {};
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (typeof tag === 'function') return tag({
    props: props,
    children: children
  });

  if (typeof tag === 'string' && tag in _builtIn.builtIns) {
    var b = _builtIn.builtIns[tag]({
      props: props,
      children: children
    });

    tag = b.tag;
    props = _extends({}, props, b.props);
    children = b.children[0];
  }

  return {
    tag: tag,
    props: props,
    children: children
  };
};

exports.create = create;

/***/ }),

/***/ "./src/core/element.js":
/*!*****************************!*\
  !*** ./src/core/element.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.element = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../index.js */ "./src/index.js"));

var _applyProps = __webpack_require__(/*! ../utilities/applyProps */ "./src/utilities/applyProps.js");

var _removeChildren = __webpack_require__(/*! ../utilities/dom/removeChildren */ "./src/utilities/dom/removeChildren.js");

var _mount = __webpack_require__(/*! ./mount */ "./src/core/mount.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element = function element(_ref) {
  var _element = _ref._element,
      $parent = _ref.$parent;
  // console.group("element()", { _element, $parent });
  var element = _element.$element = document.createElement(_element.tag);
  console.log({
    _element: _element,
    element: element
  });
  _element.children && _element.children.forEach(function (child) {
    (0, _mount.mount)(child, element);
  });
  (0, _applyProps.applyProps)(_element);
  return element;
};

exports.element = element;

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.create = exports.builtIn = exports.element = exports.component = exports.mount = void 0;

var _mount = __webpack_require__(/*! ./mount */ "./src/core/mount.js");

exports.mount = _mount.mount;

var _component = __webpack_require__(/*! ./component */ "./src/core/component.js");

exports.component = _component.component;

var _element = __webpack_require__(/*! ./element */ "./src/core/element.js");

exports.element = _element.element;

var _builtIn = __webpack_require__(/*! ./builtIn */ "./src/core/builtIn.js");

exports.builtIn = _builtIn.builtIn;

var _create = __webpack_require__(/*! ./create */ "./src/core/create.js");

exports.create = _create.create;

/***/ }),

/***/ "./src/core/mount.js":
/*!***************************!*\
  !*** ./src/core/mount.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.mount = exports.textNode = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ../index.js */ "./src/index.js"));

var _applyProps = __webpack_require__(/*! ../utilities/applyProps */ "./src/utilities/applyProps.js");

var _removeChildren = __webpack_require__(/*! ../utilities/dom/removeChildren */ "./src/utilities/dom/removeChildren.js");

var _component = __webpack_require__(/*! ./component */ "./src/core/component.js");

var _element2 = __webpack_require__(/*! ./element */ "./src/core/element.js");

var _builtIn = __webpack_require__(/*! ./builtIn */ "./src/core/builtIn.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textNode = function textNode(_ref) {
  var _element = _ref._element,
      $parent = _ref.$parent;
  return document.createTextNode(_element);
};

exports.textNode = textNode;

var mount = function mount(_element, $parent, root) {
  var $element = typeof _element === "string" ? textNode({
    _element: _element,
    $parent: $parent
  }) : typeof _element.tag === "function" ? (0, _component.component)({
    _element: _element,
    $parent: $parent
  }) : (0, _element2.element)({
    _element: _element,
    $parent: $parent
  });
  root ? (0, _removeChildren.removeChildren)($parent) && $parent.appendChild($element) : $parent.appendChild($element);
};

exports.mount = mount;

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
  create: _core.create,
  mount: _core.mount
};
exports.default = _default;

/***/ }),

/***/ "./src/utilities/applyProps.js":
/*!*************************************!*\
  !*** ./src/utilities/applyProps.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.applyProps = void 0;

var _applyHandler = __webpack_require__(/*! ./dom/applyHandler */ "./src/utilities/dom/applyHandler.js");

var _isHandler = __webpack_require__(/*! ./isHandler */ "./src/utilities/isHandler.js");

var _entriesOf = __webpack_require__(/*! ./entriesOf */ "./src/utilities/entriesOf.js");

var _fileArray = __webpack_require__(/*! ./fileArray */ "./src/utilities/fileArray.js");

var _handlerName = __webpack_require__(/*! ./dom/handlerName */ "./src/utilities/dom/handlerName.js");

var applyProps = function applyProps(_ref) {
  var $element = _ref.$element,
      _ref$props = _ref.props,
      props = _ref$props === void 0 ? {} : _ref$props,
      _fid = _ref._fid;
  props = props || {};
  console.log({
    $element: $element,
    props: props
  });
  (0, _entriesOf.entriesOf)(props).forEach(applyPropTo($element));
};

exports.applyProps = applyProps;

var applyPropTo = function applyPropTo(element) {
  return function (_ref2) {
    var name = _ref2[0],
        value = _ref2[1];
    (0, _isHandler.isHandler)(name) && (0, _applyHandler.applyHandler)(element, (0, _handlerName.handlerName)(name), value);

    if (name === 'className') {
      var unique = [];
      return element[name] = value.split(' ').filter(function (cn) {
        return unique.includes(cn) ? false : unique.push(cn), true;
      }).join(' ');
    }

    element[name] = value;
  };
};

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
  if (target instanceof Set) return target.entries();
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9idWlsdEluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9tb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9hcHBseVByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2FwcGx5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2RvbS9oYW5kbGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2RvbS9yZW1vdmVDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2RvbS9yZW1vdmVOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZW50cmllc09mLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZmlsZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvaXNIYW5kbGVyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiY29uc29sZSIsImxvZyIsIkFwcCIsInByb3BzIiwiY2hpbGRyZW4iLCJCYXIiLCJtb3VudFBvaW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW91bnQiLCJidWlsdElucyIsImFuaW1hdGVkIiwiZ3JvdXAiLCJtYXAiLCJjIiwiY29tcG9uZW50IiwiX2VsZW1lbnQiLCIkcGFyZW50IiwiJG5ld0VsZW1lbnQiLCJfY3JlYXRlZEVsZW1lbnQiLCJ0YWciLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImZvckVhY2giLCJjaGlsZCIsImNyZWF0ZSIsImIiLCIkZWxlbWVudCIsInRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJyb290IiwiYXBwZW5kQ2hpbGQiLCJhcHBseVByb3BzIiwiX2ZpZCIsImFwcGx5UHJvcFRvIiwidmFsdWUiLCJ1bmlxdWUiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImNuIiwicHVzaCIsImFwcGx5SGFuZGxlciIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlck5hbWUiLCJwcm9wTmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwicmVtb3ZlQ2hpbGRyZW4iLCJBcnJheSIsImZyb20iLCJub2RlIiwiY2hpbGROb2RlcyIsInJlbW92ZU5vZGUiLCJyZW1vdmUiLCJlbnRyaWVzT2YiLCJ0YXJnZXQiLCJTZXQiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZmlsZUFycmF5IiwiYXJyYXkiLCJkZXRlcm1pbmF0b3IiLCJyZWR1Y2UiLCJmaW5hbCIsIml0ZW0iLCJpc0hhbmRsZXIiLCJzdGFydHNXaXRoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNQSxRQUFRO0FBQ2JDLFFBQU07QUFETyxDQUFkOztBQUlBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQ3JCRixRQUFNQyxJQUFOLEdBQWFELE1BQU1DLElBQU4sQ0FDWEUsS0FEVyxDQUNMLEVBREssRUFFWEMsT0FGVyxHQUdYQyxJQUhXLENBR04sRUFITSxDQUFiO0FBSUFDLFVBQVFDLEdBQVIsQ0FBWVAsTUFBTUMsSUFBbEI7QUFDQSxDQU5EOztBQVFBLElBQU1PLE1BQU0sU0FBTkEsR0FBTSxPQUF5QjtBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDcEMsU0FDQztBQUFNLGVBQVU7QUFBaEIsS0FDQyx3Q0FDQztBQUNDLFNBQUksNkVBREw7QUFFQyxTQUFJO0FBRkwsSUFERCxDQURELEVBT0M7QUFBRyxVQUFLO0FBQVIsY0FQRCxFQVFDLGlEQVJELEVBU0M7QUFBUSxRQUFHO0FBQVgsd0JBVEQsRUFVQztBQUFRLGFBQVNSO0FBQWpCLG9CQVZELEVBV0M7QUFBSyxlQUFVO0FBQWYsS0FDQyxtQ0FDQyxrQ0FDQywwQ0FERCxFQUVDLDJDQUZELEVBR0Msa0NBQ0MseUNBREQsRUFFQyx1Q0FDQztBQUFHLFVBQUs7QUFBUixzQkFERCxDQUZELENBSEQsQ0FERCxDQURELENBWEQsRUF5QkMsc0JBQUMsR0FBRDtBQUFLO0FBQUwsSUF6QkQsQ0FERDtBQTZCQSxDQTlCRDs7QUFnQ0EsSUFBTVMsTUFBTSxTQUFOQSxHQUFNLFFBQXlCO0FBQUEsTUFBdEJGLEtBQXNCLFNBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUNwQyxTQUNDLG1DQUNDLGtDQUNDLHlDQURELEVBRUMseUNBRkQsRUFHQyxrQ0FDQyx3Q0FERCxFQUVDLHVDQUNDO0FBQUcsVUFBSztBQUFSLHFCQURELENBRkQsQ0FIRCxDQURELENBREQ7QUFjQSxDQWZEOztBQWlCQSxJQUFNRSxhQUFhQyxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQW5COztBQUNBLGVBQUlDLEtBQUosQ0FBVSxzQkFBQyxHQUFEO0FBQUssT0FBSztBQUFWLEVBQVYsRUFBOEJILFVBQTlCLEVBQTBDLElBQTFDLEU7Ozs7Ozs7Ozs7O0FDbEVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7Ozs7QUFFTyxJQUFNSSxXQUFXO0FBQ3ZCQyxZQUFVLHdCQUF5QjtBQUFBLFFBQXRCUixLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxRQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbENKLFlBQVFZLEtBQVIsQ0FBYyxZQUFkLEVBQTRCO0FBQUVULGtCQUFGO0FBQVNDO0FBQVQsS0FBNUI7QUFDQSxXQUNDO0FBQUssK0JBQUw7QUFBdUIsaUJBQVU7QUFBakMsT0FDRUEsU0FBU1MsR0FBVCxDQUFhO0FBQUEsYUFBS0MsQ0FBTDtBQUFBLEtBQWIsQ0FERixDQUREO0FBS0E7QUFSc0IsQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUMsWUFBWSxTQUFaQSxTQUFZLE9BQTJCO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFDbkQ7QUFFQSxNQUFNQyxjQUFjRixTQUFTRyxlQUFULEdBQTJCSCxTQUFTSSxHQUFULENBQWFKLFFBQWIsQ0FBL0M7O0FBQ0EsTUFBTUssVUFBVWQsU0FBU2UsYUFBVCxDQUF1QkosWUFBWUUsR0FBbkMsQ0FBaEI7QUFFQXBCLFVBQVFDLEdBQVIsQ0FBWTtBQUFFaUIsNEJBQUY7QUFBZUc7QUFBZixHQUFaO0FBRUFILGNBQVlkLFFBQVosSUFBd0JjLFlBQVlkLFFBQVosQ0FBcUJtQixPQUFyQixDQUE2QixpQkFBUztBQUM3RCxzQkFBTUMsS0FBTixFQUFhSCxPQUFiO0FBQ0EsR0FGdUIsQ0FBeEI7QUFJQSxTQUFPQSxPQUFQO0FBQ0EsQ0FiTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFTyxJQUFNSSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0wsR0FBRCxFQUFNakIsS0FBTixFQUFrQztBQUFBLE1BQTVCQSxLQUE0QjtBQUE1QkEsU0FBNEIsR0FBcEIsRUFBb0I7QUFBQTs7QUFBQSxvQ0FBYkMsUUFBYTtBQUFiQSxZQUFhO0FBQUE7O0FBQ3ZELE1BQUksT0FBT2dCLEdBQVAsS0FBZSxVQUFuQixFQUErQixPQUFPQSxJQUFJO0FBQUVqQixnQkFBRjtBQUFTQztBQUFULEdBQUosQ0FBUDs7QUFDL0IsTUFBSSxPQUFPZ0IsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLHdCQUEvQixFQUFnRDtBQUMvQyxRQUFNTSxJQUFJLGtCQUFTTixHQUFULEVBQWM7QUFBRWpCLGtCQUFGO0FBQVNDO0FBQVQsS0FBZCxDQUFWOztBQUNBZ0IsVUFBTU0sRUFBRU4sR0FBUjtBQUNBakIseUJBQWFBLEtBQWIsRUFBdUJ1QixFQUFFdkIsS0FBekI7QUFDQUMsZUFBV3NCLEVBQUV0QixRQUFGLENBQVcsQ0FBWCxDQUFYO0FBQ0E7O0FBRUQsU0FBTztBQUNOZ0IsWUFETTtBQUVOakIsZ0JBRk07QUFHTkM7QUFITSxHQUFQO0FBS0EsQ0FkTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTWlCLFVBQVUsdUJBQTJCO0FBQUEsTUFBeEJMLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNqRDtBQUVBLE1BQU1JLFVBQVVMLFNBQVNXLFFBQVQsR0FBb0JwQixTQUFTZSxhQUFULENBQXVCTixTQUFTSSxHQUFoQyxDQUFwQztBQUVBcEIsVUFBUUMsR0FBUixDQUFZO0FBQUVlLHNCQUFGO0FBQVlLO0FBQVosR0FBWjtBQUVBTCxXQUFTWixRQUFULElBQXFCWSxTQUFTWixRQUFULENBQWtCbUIsT0FBbEIsQ0FBMEIsaUJBQVM7QUFDdkQsc0JBQU1DLEtBQU4sRUFBYUgsT0FBYjtBQUNBLEdBRm9CLENBQXJCO0FBSUEsOEJBQVdMLFFBQVg7QUFFQSxTQUFPSyxPQUFQO0FBQ0EsQ0FkTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1PLFdBQVcsU0FBWEEsUUFBVyxPQUEyQjtBQUFBLE1BQXhCWixRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDbEQsU0FBT1YsU0FBU3NCLGNBQVQsQ0FBd0JiLFFBQXhCLENBQVA7QUFDQSxDQUZNOzs7O0FBSUEsSUFBTVAsUUFBUSxTQUFSQSxLQUFRLENBQUNPLFFBQUQsRUFBV0MsT0FBWCxFQUFvQmEsSUFBcEIsRUFBNkI7QUFFakQsTUFBTUgsV0FDRCxPQUFPWCxRQUFQLEtBQW9CLFFBRG5CLEdBRUpZLFNBQVM7QUFBRVosc0JBQUY7QUFBWUM7QUFBWixHQUFULENBRkksR0FHTSxPQUFPRCxTQUFTSSxHQUFoQixLQUF3QixVQUg5QixHQUlKLDBCQUFVO0FBQUVKLHNCQUFGO0FBQVlDO0FBQVosR0FBVixDQUpJLEdBTUosdUJBQVE7QUFBRUQsc0JBQUY7QUFBWUM7QUFBWixHQUFSLENBTkY7QUFVQWEsU0FDRyxvQ0FBZWIsT0FBZixLQUEyQkEsUUFBUWMsV0FBUixDQUFvQkosUUFBcEIsQ0FEOUIsR0FFR1YsUUFBUWMsV0FBUixDQUFvQkosUUFBcEIsQ0FGSDtBQUdBLENBZk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYUDs7ZUFFZTtBQUNkRixzQkFEYztBQUVkaEI7QUFGYyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNdUIsYUFBYSxTQUFiQSxVQUFhLE9BQWtDO0FBQUEsTUFBaENMLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLHdCQUF0QnhCLEtBQXNCO0FBQUEsTUFBdEJBLEtBQXNCLDJCQUFkLEVBQWM7QUFBQSxNQUFWOEIsSUFBVSxRQUFWQSxJQUFVO0FBQzNEOUIsVUFBUUEsU0FBUyxFQUFqQjtBQUNBSCxVQUFRQyxHQUFSLENBQVk7QUFBRTBCLHNCQUFGO0FBQWF4QjtBQUFiLEdBQVo7QUFDQSw0QkFBVUEsS0FBVixFQUFpQm9CLE9BQWpCLENBQXlCVyxZQUFZUCxRQUFaLENBQXpCO0FBQ0EsQ0FKTTs7OztBQU1QLElBQU1PLGNBQWMsU0FBZEEsV0FBYyxDQUFDYixPQUFEO0FBQUEsU0FBYSxpQkFBcUI7QUFBQSxRQUFsQjFCLElBQWtCO0FBQUEsUUFBWndDLEtBQVk7QUFDckQsOEJBQVV4QyxJQUFWLEtBQW1CLGdDQUFhMEIsT0FBYixFQUFzQiw4QkFBWTFCLElBQVosQ0FBdEIsRUFBeUN3QyxLQUF6QyxDQUFuQjs7QUFFQSxRQUFJeEMsU0FBUyxXQUFiLEVBQTBCO0FBQ3pCLFVBQU15QyxTQUFTLEVBQWY7QUFDQSxhQUFRZixRQUFRMUIsSUFBUixJQUFnQndDLE1BQU10QyxLQUFOLENBQVksR0FBWixFQUFpQndDLE1BQWpCLENBQXdCLGNBQU07QUFDckQsZUFBT0QsT0FBT0UsUUFBUCxDQUFnQkMsRUFBaEIsSUFDSixLQURJLEdBRUpILE9BQU9JLElBQVAsQ0FBWUQsRUFBWixDQUZJLEVBRWEsSUFGcEI7QUFHQSxPQUp1QixFQUlyQnhDLElBSnFCLENBSWhCLEdBSmdCLENBQXhCO0FBS0E7O0FBRURzQixZQUFRMUIsSUFBUixJQUFnQndDLEtBQWhCO0FBQ0EsR0FibUI7QUFBQSxDQUFwQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pPLElBQU1NLGVBQWUsU0FBZkEsWUFBZSxDQUFDcEIsT0FBRCxFQUFVMUIsSUFBVixFQUFnQitDLE9BQWhCLEVBQTRCO0FBQ3ZEckIsVUFBUXNCLGdCQUFSLENBQXlCaEQsSUFBekIsRUFBK0IrQyxPQUEvQjtBQUNBLFNBQU9yQixPQUFQO0FBQ0EsQ0FITTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU11QixjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3ZDLFNBQU9BLFNBQVNDLFdBQVQsR0FBdUJDLFNBQXZCLENBQWlDLENBQWpDLENBQVA7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7O0FBRUE7QUFDTyxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLE9BQVE7QUFDcENDLFFBQU1DLElBQU4sQ0FBV0MsS0FBS0MsVUFBaEIsRUFBNEI3QixPQUE1QjtBQUNBLFNBQU80QixJQUFQO0FBQ0QsQ0FITTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQ08sSUFBTUUsYUFBYSxTQUFiQSxVQUFhLE9BQVE7QUFDaENGLE9BQUtHLE1BQUw7QUFDRCxDQUZNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBWTtBQUNwQyxNQUFJQSxrQkFBa0JDLEdBQXRCLEVBQTJCLE9BQU9ELE9BQU9FLE9BQVAsRUFBUDtBQUMzQixTQUFPQyxPQUFPRCxPQUFQLENBQWVGLE1BQWYsQ0FBUDtBQUNBLENBSE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNSSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFRQyxZQUFSLEVBQXlCO0FBQ2pELFNBQU9ELE1BQU1FLE1BQU4sQ0FBYSxVQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDcENILGlCQUFhRyxJQUFiLElBQ0dELE1BQU0sQ0FBTixFQUFTeEIsSUFBVCxDQUFjeUIsSUFBZCxDQURILEdBRUdELE1BQU0sQ0FBTixFQUFTeEIsSUFBVCxDQUFjeUIsSUFBZCxDQUZIO0FBSUEsV0FBT0QsS0FBUDtBQUNBLEdBTk0sRUFNSixDQUFDLEVBQUQsRUFBSyxFQUFMLENBTkksQ0FBUDtBQU9BLENBUk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNRSxZQUFZLFNBQVpBLFNBQVk7QUFBQSxTQUFZckIsU0FBU3NCLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBWjtBQUFBLENBQWxCIiwiZmlsZSI6ImZveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2V4YW1wbGUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL2xvZ2dlclwiO1xuaW1wb3J0IGZveCBmcm9tIFwiZm94XCI7XG5cbi8vIFNUQVRFIE5PVCBXT1JLSU5HIFlFVFxuY29uc3Qgc3RhdGUgPSB7XG5cdG5hbWU6IFwiVG9tbXlcIlxufTtcblxuY29uc3Qgc2V0TmFtZSA9ICgpID0+IHtcblx0c3RhdGUubmFtZSA9IHN0YXRlLm5hbWVcblx0XHQuc3BsaXQoXCJcIilcblx0XHQucmV2ZXJzZSgpXG5cdFx0LmpvaW4oXCJcIik7XG5cdGNvbnNvbGUubG9nKHN0YXRlLm5hbWUpO1xufTtcblxuY29uc3QgQXBwID0gKHsgcHJvcHMsIGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJBcHBcIj5cblx0XHRcdDxhbmltYXRlZD5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy85MzE5NzE2MzUyODgxNzQ1OTMvRGpoZG9GTEVfYmlnZ2VyLmpwZ1wiXG5cdFx0XHRcdFx0YWx0PVwic29tZSBwcmlja1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2FuaW1hdGVkPlxuXHRcdFx0PGEgaHJlZj1cImdvb2dsZS5jb21cIj5Hb29nbGU8L2E+XG5cdFx0XHQ8cD5JIGFtIGF3ZXNvbWUuPC9wPlxuXHRcdFx0PHN0cm9uZyBpZD1cInN0cm9uZ1wiPkFuZCByZWFsbHkgY29vbC48L3N0cm9uZz5cblx0XHRcdDxidXR0b24gb25DbGljaz17c2V0TmFtZX0+cmV2ZXJzZSBuYW1lPC9idXR0b24+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHQ8bmF2PlxuXHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdDxsaT5maXJzdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGk+c2Vjb25kPC9saT5cblx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0PGk+dGhpcmQ8L2k+XG5cdFx0XHRcdFx0XHRcdDxzZWN0aW9uPlxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJmYWNlYm9vay5jb21cIj5ob3cgZG8geW91IGRvPzwvYT5cblx0XHRcdFx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L25hdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEJhciBmdWNrIC8+XG5cdFx0PC9tYWluPlxuXHQpO1xufTtcblxuY29uc3QgQmFyID0gKHsgcHJvcHMsIGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8bmF2PlxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGk+YWFhYTwvbGk+XG5cdFx0XHRcdDxsaT5iYmJiPC9saT5cblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxpPmNjY2M8L2k+XG5cdFx0XHRcdFx0PHNlY3Rpb24+XG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwieW91dHViZS5jb21cIj5nbyB0byB5b3V0dWJlPC9hPlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0PC9uYXY+XG5cdCk7XG59O1xuXG5jb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3VudFBvaW50XCIpO1xuZm94Lm1vdW50KDxBcHAgZG9nPXt0cnVlfSAvPiwgbW91bnRQb2ludCwgdHJ1ZSk7XG4iLCIvLyBpbXBvcnQgcHdjIGZyb20gJ3ByZXR0eS13ZWItY29uc29sZSdcblxuLy8gLy8gY29uZmlndXJlIHlvdXIgc3R5bGl6ZWQgbG9nZ2VycyBcbi8vIGNvbnN0IGxvZ2dlckEgPSBwd2MoKS5zaXplKCdtZWRpdW0nKS53ZWlnaHQoJ2JvbGQnKVxuLy8gY29uc3QgbG9nZ2VyQiA9IHB3YygpLmxhcmdlKCkuYm9sZCgpXG4gXG4vLyAvLyBsb2cgYW55dGhpbmchIFxuLy8gbG9nZ2VyQS5sb2coJ2hpJylcbi8vIGxvZ2dlckIubG9nKCdoaScpXG4gXG4vLyAvLyB5b3UgY2FuIGV2ZW4gZXh0ZW5kIHlvdXIgbG9nZ2VycyBcbi8vIGxvZ2dlckEuZmFudGFzeSgpLnVuZGVybGluZSgpLmluZm8oJ2kgYW0gYmFjaycpXG5cbi8vIC8vIHBhc3MgaW4gYSBjb25maWcgb2JqZWN0IFxuLy8gY29uc3QgbG9nZ2VyID0gcHdjKHtcbi8vIFx0Y29sb3I6ICdEYXJrT3JhbmdlJyxcbi8vIFx0YmdDb2xvcjogJ0JsYW5jaGVkQWxtb25kJ1xuLy8gfSlcbiBcbi8vIC8vIGxvZyBpdCEgXG4vLyBsb2dnZXIubG9nKCdoaScpXG4gXG4vLyAvLyBmZWVsIGZyZWUgdG8gbWl4LWFuZC1tYXRjaCBiZXR3ZWVuIGRpZmZlcmVudCBtZXRob2RzIFxuLy8gcHdjKHsgY29sb3I6ICdncmVlbicgfSkuc2l6ZSgnbGFyZ2UnKS5ib2xkKCkubG9nKCdoaSBhZ2FpbicpIiwiaW1wb3J0IGZveCBmcm9tICdmb3gnO1xuXG5leHBvcnQgY29uc3QgYnVpbHRJbnMgPSB7XG5cdGFuaW1hdGVkOiAoeyBwcm9wcywgY2hpbGRyZW4gfSkgPT4ge1xuXHRcdGNvbnNvbGUuZ3JvdXAoJ2FuaW1hdGVkKCknLCB7IHByb3BzLCBjaGlsZHJlbiB9KVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGRhdGEtZm94eS1idWlsdEluIGNsYXNzTmFtZT1cImFuaW1hdGVkIHJvbGxJblwiPlxuXHRcdFx0XHR7Y2hpbGRyZW4ubWFwKGMgPT4gYyl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuIiwiaW1wb3J0IGZveCBmcm9tICdmb3gnO1xuaW1wb3J0IHsgYXBwbHlQcm9wcyB9IGZyb20gXCJ1dGlsaXRpZXMvYXBwbHlQcm9wc1wiO1xuaW1wb3J0IHsgcmVtb3ZlQ2hpbGRyZW4gfSBmcm9tIFwidXRpbGl0aWVzL2RvbS9yZW1vdmVDaGlsZHJlblwiO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICcuL21vdW50J1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50ID0gKHsgX2VsZW1lbnQsICRwYXJlbnQgfSkgPT4ge1xuXHQvLyBjb25zb2xlLmdyb3VwKFwiY29tcG9uZW50KClcIiwgeyBfZWxlbWVudCwgJHBhcmVudCB9KTtcblx0XG5cdGNvbnN0ICRuZXdFbGVtZW50ID0gX2VsZW1lbnQuX2NyZWF0ZWRFbGVtZW50ID0gX2VsZW1lbnQudGFnKF9lbGVtZW50KTtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJG5ld0VsZW1lbnQudGFnKTtcblxuXHRjb25zb2xlLmxvZyh7ICRuZXdFbGVtZW50LCBlbGVtZW50IH0pXG5cdFxuXHQkbmV3RWxlbWVudC5jaGlsZHJlbiAmJiAkbmV3RWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRtb3VudChjaGlsZCwgZWxlbWVudCk7XG5cdH0pXG5cdFxuXHRyZXR1cm4gZWxlbWVudDtcbn07IiwiaW1wb3J0IGZveCBmcm9tICdmb3gnO1xuaW1wb3J0IHsgYXBwbHlQcm9wcyB9IGZyb20gXCJ1dGlsaXRpZXMvYXBwbHlQcm9wc1wiO1xuaW1wb3J0IHsgcmVtb3ZlQ2hpbGRyZW4gfSBmcm9tIFwidXRpbGl0aWVzL2RvbS9yZW1vdmVDaGlsZHJlblwiO1xuaW1wb3J0IHsgYnVpbHRJbnMgfSBmcm9tIFwiLi9idWlsdEluXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAodGFnLCBwcm9wcyA9IHt9LCAuLi5jaGlsZHJlbikgPT4ge1xuXHRpZiAodHlwZW9mIHRhZyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHRhZyh7IHByb3BzLCBjaGlsZHJlbiB9KVxuXHRpZiAodHlwZW9mIHRhZyA9PT0gJ3N0cmluZycgJiYgdGFnIGluIGJ1aWx0SW5zKSB7XG5cdFx0Y29uc3QgYiA9IGJ1aWx0SW5zW3RhZ10oeyBwcm9wcywgY2hpbGRyZW4gfSlcblx0XHR0YWcgPSBiLnRhZztcblx0XHRwcm9wcyA9IHsgLi4ucHJvcHMsIC4uLmIucHJvcHMgfTtcblx0XHRjaGlsZHJlbiA9IGIuY2hpbGRyZW5bMF07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHRhZyxcblx0XHRwcm9wcyxcblx0XHRjaGlsZHJlblxuXHR9O1xufTsiLCJpbXBvcnQgZm94IGZyb20gJ2ZveCc7XG5pbXBvcnQgeyBhcHBseVByb3BzIH0gZnJvbSBcInV0aWxpdGllcy9hcHBseVByb3BzXCI7XG5pbXBvcnQgeyByZW1vdmVDaGlsZHJlbiB9IGZyb20gXCJ1dGlsaXRpZXMvZG9tL3JlbW92ZUNoaWxkcmVuXCI7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJy4vbW91bnQnXG5cbmV4cG9ydCBjb25zdCBlbGVtZW50ID0gKHsgX2VsZW1lbnQsICRwYXJlbnQgfSkgPT4ge1xuXHQvLyBjb25zb2xlLmdyb3VwKFwiZWxlbWVudCgpXCIsIHsgX2VsZW1lbnQsICRwYXJlbnQgfSk7XG5cblx0Y29uc3QgZWxlbWVudCA9IF9lbGVtZW50LiRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfZWxlbWVudC50YWcpO1xuXG5cdGNvbnNvbGUubG9nKHsgX2VsZW1lbnQsIGVsZW1lbnQgfSlcblx0XG5cdF9lbGVtZW50LmNoaWxkcmVuICYmIF9lbGVtZW50LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdG1vdW50KGNoaWxkLCBlbGVtZW50KTtcblx0fSlcblxuXHRhcHBseVByb3BzKF9lbGVtZW50KVxuXHRcblx0cmV0dXJuIGVsZW1lbnQ7XG59OyIsImV4cG9ydCB7IG1vdW50IH0gZnJvbSAnLi9tb3VudCdcbmV4cG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50J1xuZXhwb3J0IHsgZWxlbWVudCB9IGZyb20gJy4vZWxlbWVudCdcbmV4cG9ydCB7IGJ1aWx0SW4gfSBmcm9tICcuL2J1aWx0SW4nXG5leHBvcnQgeyBjcmVhdGUgfSBmcm9tICcuL2NyZWF0ZSdcblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IGZveCBmcm9tICdmb3gnO1xuaW1wb3J0IHsgYXBwbHlQcm9wcyB9IGZyb20gXCJ1dGlsaXRpZXMvYXBwbHlQcm9wc1wiO1xuaW1wb3J0IHsgcmVtb3ZlQ2hpbGRyZW4gfSBmcm9tIFwidXRpbGl0aWVzL2RvbS9yZW1vdmVDaGlsZHJlblwiO1xuaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnXG5pbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50J1xuaW1wb3J0IHsgYnVpbHRJbiB9IGZyb20gJy4vYnVpbHRJbidcblxuZXhwb3J0IGNvbnN0IHRleHROb2RlID0gKHsgX2VsZW1lbnQsICRwYXJlbnQgfSkgPT4ge1xuXHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoX2VsZW1lbnQpO1xufVxuXG5leHBvcnQgY29uc3QgbW91bnQgPSAoX2VsZW1lbnQsICRwYXJlbnQsIHJvb3QpID0+IHtcblxuXHRjb25zdCAkZWxlbWVudCA9IGRvIHtcblx0XHRpZiAodHlwZW9mIF9lbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHR0ZXh0Tm9kZSh7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIF9lbGVtZW50LnRhZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRjb21wb25lbnQoeyBfZWxlbWVudCwgJHBhcmVudCB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudCh7IF9lbGVtZW50LCAkcGFyZW50IH0pO1xuXHRcdH1cblx0fTtcblxuXHRyb290XG5cdFx0PyByZW1vdmVDaGlsZHJlbigkcGFyZW50KSAmJiAkcGFyZW50LmFwcGVuZENoaWxkKCRlbGVtZW50KVxuXHRcdDogJHBhcmVudC5hcHBlbmRDaGlsZCgkZWxlbWVudCk7XG59OyIsImltcG9ydCB7IGNyZWF0ZSwgbW91bnQgfSBmcm9tICcuL2NvcmUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y3JlYXRlLFxuXHRtb3VudFxufSIsImltcG9ydCB7IGFwcGx5SGFuZGxlciB9IGZyb20gJ3V0aWxpdGllcy9kb20vYXBwbHlIYW5kbGVyJ1xuaW1wb3J0IHsgaXNIYW5kbGVyIH0gZnJvbSBcInV0aWxpdGllcy9pc0hhbmRsZXJcIjtcbmltcG9ydCB7IGVudHJpZXNPZiB9IGZyb20gXCJ1dGlsaXRpZXMvZW50cmllc09mXCI7XG5pbXBvcnQgeyBmaWxlQXJyYXkgfSBmcm9tICd1dGlsaXRpZXMvZmlsZUFycmF5JztcbmltcG9ydCB7IGhhbmRsZXJOYW1lIH0gZnJvbSAndXRpbGl0aWVzL2RvbS9oYW5kbGVyTmFtZSc7XG5cbmV4cG9ydCBjb25zdCBhcHBseVByb3BzID0gKHskZWxlbWVudCwgcHJvcHMgPSB7fSwgX2ZpZH0pID0+IHtcblx0cHJvcHMgPSBwcm9wcyB8fCB7fTtcblx0Y29uc29sZS5sb2coeyAkZWxlbWVudCwgIHByb3BzIH0pXG5cdGVudHJpZXNPZihwcm9wcykuZm9yRWFjaChhcHBseVByb3BUbygkZWxlbWVudCkpXG59O1xuXG5jb25zdCBhcHBseVByb3BUbyA9IChlbGVtZW50KSA9PiAoWyBuYW1lLCB2YWx1ZSBdKSA9PiB7XG5cdGlzSGFuZGxlcihuYW1lKSAmJiBhcHBseUhhbmRsZXIoZWxlbWVudCwgaGFuZGxlck5hbWUobmFtZSksIHZhbHVlKVxuXG5cdGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuXHRcdGNvbnN0IHVuaXF1ZSA9IFtdXG5cdFx0cmV0dXJuIChlbGVtZW50W25hbWVdID0gdmFsdWUuc3BsaXQoJyAnKS5maWx0ZXIoY24gPT4ge1xuXHRcdFx0cmV0dXJuIHVuaXF1ZS5pbmNsdWRlcyhjbilcblx0XHRcdFx0PyBmYWxzZVxuXHRcdFx0XHQ6IHVuaXF1ZS5wdXNoKGNuKSwgdHJ1ZTtcblx0XHR9KS5qb2luKCcgJykpO1xuXHR9XG5cblx0ZWxlbWVudFtuYW1lXSA9IHZhbHVlO1xufSIsImV4cG9ydCBjb25zdCBhcHBseUhhbmRsZXIgPSAoZWxlbWVudCwgbmFtZSwgaGFuZGxlcikgPT4ge1xyXG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyKTtcclxuXHRyZXR1cm4gZWxlbWVudDtcclxufSIsImV4cG9ydCBjb25zdCBoYW5kbGVyTmFtZSA9IChwcm9wTmFtZSkgPT4ge1xyXG4gIHJldHVybiBwcm9wTmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKTtcclxufSIsImltcG9ydCB7IHJlbW92ZU5vZGUgfSBmcm9tICd1dGlsaXRpZXMvZG9tL3JlbW92ZU5vZGUnXHJcblxyXG4vLyBSZW1vdmUgYWxsIGNoaWxkcmVuIGZyb20gYSBub2RlLlxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2hpbGRyZW4gPSBub2RlID0+IHtcclxuICBBcnJheS5mcm9tKG5vZGUuY2hpbGROb2RlcykuZm9yRWFjaChyZW1vdmVOb2RlKTtcclxuICByZXR1cm4gbm9kZTtcclxufTsiLCIvLyBUZWxsIGEgbm9kZSB0byBraWxsIGl0c2VsZi5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGUgPSBub2RlID0+IHtcclxuICBub2RlLnJlbW92ZSgpO1xyXG59OyIsImV4cG9ydCBjb25zdCBlbnRyaWVzT2YgPSAodGFyZ2V0KSA9PiB7XG5cdGlmICh0YXJnZXQgaW5zdGFuY2VvZiBTZXQpIHJldHVybiB0YXJnZXQuZW50cmllcygpO1xuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGFyZ2V0KTtcbn0iLCJleHBvcnQgY29uc3QgZmlsZUFycmF5ID0gKGFycmF5LCBkZXRlcm1pbmF0b3IpID0+IHtcclxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKChmaW5hbCwgaXRlbSkgPT4ge1xyXG5cdFx0ZGV0ZXJtaW5hdG9yKGl0ZW0pXHJcblx0XHRcdD8gZmluYWxbMF0ucHVzaChpdGVtKVxyXG5cdFx0XHQ6IGZpbmFsWzFdLnB1c2goaXRlbSlcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZpbmFsO1xyXG5cdH0sIFtbXSwgW11dKVxyXG59IiwiZXhwb3J0IGNvbnN0IGlzSGFuZGxlciA9IHByb3BOYW1lID0+IHByb3BOYW1lLnN0YXJ0c1dpdGgoXCJvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9