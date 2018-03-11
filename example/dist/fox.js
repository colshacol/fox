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


var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _index = _interopRequireDefault(__webpack_require__(/*! ../src/index.js */ "./src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = (0, _mobx.observable)({
  foo: true
}); // No work yet.

var setFoo = (0, _mobx.action)(function () {
  console.log("setting foo");
  state.foo = !state.foo;
});

var App = function App() {
  return _index.default.create("div", {
    className: "App"
  }, _index.default.create("animated", null, _index.default.create("p", null, "I'm an ", "<animated>", " builtIn. I come pre-installed!")), _index.default.create(Foo, null));
};

var Foo = function Foo() {
  return _index.default.create("div", {
    className: "Foo"
  }, _index.default.create("p", null, "I AM FOO, HEAR ME ROAR."));
};

var Wrapper =
/*#__PURE__*/
function () {
  function Wrapper(props, children) {
    var _this = this;

    this.props = props;
    this.children = children;

    this.render = function () {
      return _this.render(props, children);
    };
  }

  var _proto = Wrapper.prototype;

  _proto.render = function render(props, children) {
    return children;
  };

  return Wrapper;
}();

_index.default.render(_index.default.create(App, null), document.querySelector("#mountPoint"));

/***/ }),

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: extras, Reaction, untracked, IDerivationState, Atom, BaseAtom, useStrict, isStrictModeEnabled, spy, comparer, asReference, asFlat, asStructure, asMap, isModifierDescriptor, isObservableObject, isBoxedObservable, isObservableArray, ObservableMap, isObservableMap, map, transaction, observable, computed, isObservable, isComputed, extendObservable, extendShallowObservable, observe, intercept, autorun, autorunAsync, when, reaction, action, isAction, runInAction, expr, toJS, createTransformer, whyRun, trace, isArrayLike, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extras", function() { return extras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atom", function() { return Atom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAtom", function() { return BaseAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStrict", function() { return useStrict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStrictModeEnabled", function() { return isStrictModeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asReference", function() { return asReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asFlat", function() { return asFlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asStructure", function() { return asStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMap", function() { return asMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModifierDescriptor", function() { return isModifierDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShallowObservable", function() { return extendShallowObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorunAsync", function() { return autorunAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expr", function() { return expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransformer", function() { return createTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whyRun", function() { return whyRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var BaseAtom = (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function BaseAtom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = true; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    BaseAtom.prototype.onBecomeUnobserved = function () {
        // noop
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     */
    BaseAtom.prototype.reportObserved = function () {
        reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    BaseAtom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    BaseAtom.prototype.toString = function () {
        return this.name;
    };
    return BaseAtom;
}());
var Atom = (function (_super) {
    __extends(Atom, _super);
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.onBecomeObservedHandler = onBecomeObservedHandler;
        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
        _this.isPendingUnobservation = false; // for effective unobserving.
        _this.isBeingTracked = false;
        return _this;
    }
    Atom.prototype.reportObserved = function () {
        startBatch();
        _super.prototype.reportObserved.call(this);
        if (!this.isBeingTracked) {
            this.isBeingTracked = true;
            this.onBecomeObservedHandler();
        }
        endBatch();
        return !!globalState.trackingDerivation;
        // return doesn't really give useful info, because it can be as well calling computed which calls atom (no reactions)
        // also it could not trigger when calculating reaction dependent on Atom because Atom's value was cached by computed called by given reaction.
    };
    Atom.prototype.onBecomeUnobserved = function () {
        this.isBeingTracked = false;
        this.onBecomeUnobservedHandler();
    };
    return Atom;
}(BaseAtom));
var isAtom = createInstanceofPredicate("Atom", BaseAtom);

function hasInterceptors(interceptable) {
    return interceptable.interceptors && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = objectAssign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(objectAssign({}, change, END_EVENT));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        var idx = globalState.spyListeners.indexOf(listener);
        if (idx !== -1)
            globalState.spyListeners.splice(idx, 1);
    });
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
var IS_ITERATING_MARKER = "__$$iterating";
function arrayAsIterator(array) {
    // returning an array for entries(), values() etc for maps was a mis-interpretation of the specs..,
    // yet it is quite convenient to be able to use the response both as array directly and as iterator
    // it is suboptimal, but alas...
    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
    var idx = -1;
    addHiddenFinalProp(array, "next", function next() {
        idx++;
        return {
            done: idx >= this.length,
            value: idx < this.length ? this[idx] : undefined
        };
    });
    return array;
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", {
        set: function () {
            v = true;
        }
    });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = (function () {
    function StubArray() {
    }
    return StubArray;
}());
function inherit(ctor, proto) {
    if (typeof Object["setPrototypeOf"] !== "undefined") {
        Object["setPrototypeOf"](ctor.prototype, proto);
    }
    else if (typeof ctor.prototype.__proto__ !== "undefined") {
        ctor.prototype.__proto__ = proto;
    }
    else {
        ctor["prototype"] = proto;
    }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {
    
    [
        "constructor",
        "push",
        "shift",
        "concat",
        "pop",
        "unshift",
        "replace",
        "find",
        "findIndex",
        "splice",
        "reverse",
        "sort"
    ].forEach(function (key) {
        Object.defineProperty(StubArray.prototype, key, {
            configurable: true,
            writable: true,
            value: Array.prototype[key]
        });
    });
}
var ObservableArrayAdministration = (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.values = [];
        this.lastKnownLength = 0;
        this.interceptors = null;
        this.changeListeners = null;
        this.atom = new BaseAtom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = [];
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
        var _a;
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.array,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            _this.spliceWithArray(0, 0, initialValues);
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return (isObservableArray(a) ? a.peek() : a); }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        this.$mobx.atom.reportObserved();
        return this.$mobx.dehanceValues(this.$mobx.values);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.get(idx);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var items = this.peek(), l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [
                oldItems[fromIndex]
            ], oldItems.slice(toIndex + 1));
        }
        else {
            // toIndex < fromIndex
            newItems = oldItems.slice(0, toIndex).concat([
                oldItems[fromIndex]
            ], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.dehanceValue(impl.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl
                .values
                .length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    return arrayAsIterator(this.slice());
});
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
[
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        return baseFunc.apply(this.peek(), arguments);
    });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            // TODO: Check `this`?, see #752?
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var UNCHANGED = {};
var ObservableValue = (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.dehancer = undefined;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", object: _this, newValue: _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    object: this,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue ? newValue : UNCHANGED;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(BaseAtom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

var messages = {
    m001: "It is not allowed to assign new values to @action fields",
    m002: "`runInAction` expects a function",
    m003: "`runInAction` expects a function without arguments",
    m004: "autorun expects a function",
    m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
    m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
    m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
    m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
    m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
    m012: "computed takes one or two arguments if used as function",
    m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
    m014: "extendObservable expected 2 or more arguments",
    m015: "extendObservable expects an object as first argument",
    m016: "extendObservable should not be used on maps, use map.merge instead",
    m017: "all arguments of extendObservable should be objects",
    m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
    m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
    m020: "modifiers can only be used for individual object properties",
    m021: "observable expects zero or one arguments",
    m022: "@observable can not be used on getters, use @computed instead",
    m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
    m025: "whyRun can only be used on reactions and computed values",
    m026: "`action` can only be invoked on functions",
    m028: "It is not allowed to set `useStrict` when a derivation is running",
    m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
    m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
    m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
    m031: "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
    m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
    m033: "`observe` doesn't support the fire immediately property for observable maps.",
    m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
    m035: "Cannot make the designated object observable; it is not extensible",
    m036: "It is not possible to get index atoms from arrays",
    m037: "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
    m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
};
function getMessage(id) {
    return messages[id];
}

function createAction(actionName, fn) {
    invariant(typeof fn === "function", getMessage("m026"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    res.originalFn = fn;
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            fn: fn,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy)
        spyReportEnd({ time: Date.now() - runInfo.startTime });
}
function useStrict(strict) {
    invariant(globalState.trackingDerivation === null, getMessage("m028"));
    globalState.strictMode = strict;
    globalState.allowStateChanges = !strict;
}
function isStrictModeEnabled() {
    return globalState.strictMode;
}
function allowStateChanges(allowStateChanges, func) {
    // TODO: deprecate / refactor this function in next major
    // Currently only used by `@observer`
    // Proposed change: remove first param, rename to `forbidStateChanges`,
    // require error callback instead of the hardcoded error message now used
    // Use `inAction` instead of allowStateChanges in derivation.ts to check strictMode
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}

/**
 * Constructs a decorator, that normalizes the differences between
 * TypeScript and Babel. Mainly caused by the fact that legacy-decorator cannot assign
 * values during instance creation to properties that have a getter setter.
 *
 * - Sigh -
 *
 * Also takes care of the difference between @decorator field and @decorator(args) field, and different forms of values.
 * For performance (cpu and mem) reasons the properties are always defined on the prototype (at least initially).
 * This means that these properties despite being enumerable might not show up in Object.keys() (but they will show up in for...in loops).
 */
function createClassPropertyDecorator(
    /**
     * This function is invoked once, when the property is added to a new instance.
     * When this happens is not strictly determined due to differences in TS and Babel:
     * Typescript: Usually when constructing the new instance
     * Babel, sometimes Typescript: during the first get / set
     * Both: when calling `runLazyInitializers(instance)`
     */
    onInitialize, get, set, enumerable, 
    /**
     * Can this decorator invoked with arguments? e.g. @decorator(args)
     */
    allowCustomArguments) {
    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
        if (argLen === void 0) { argLen = 0; }
        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
        if (!descriptor) {
            // typescript (except for getter / setters)
            var newDescriptor = {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
                    }
                    else {
                        set.call(this, key, v);
                    }
                }
            };
            if (arguments.length < 3 || (arguments.length === 5 && argLen < 3)) {
                // Typescript target is ES3, so it won't define property for us
                // or using Reflect.decorate polyfill, which will return no descriptor
                // (see https://github.com/mobxjs/mobx/issues/333)
                Object.defineProperty(target, key, newDescriptor);
            }
            return newDescriptor;
        }
        else {
            // babel and typescript getter / setter props
            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || [] // support inheritance
                );
            }
            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
            target.__mobxLazyInitializers.push(function (instance) {
                onInitialize(instance, key, initializer_1 ? initializer_1.call(instance) : value_1, customArgs, descriptor);
            });
            return {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    set.call(this, key, v);
                }
            };
        }
    }
    if (allowCustomArguments) {
        /** If custom arguments are allowed, we should return a function that returns a decorator */
        return function () {
            /** Direct invocation: @decorator bla */
            if (quacksLikeADecorator(arguments))
                return classPropertyDecorator.apply(null, arguments);
            /** Indirect invocation: @decorator(args) bla */
            var outerArgs = arguments;
            var argLen = arguments.length;
            return function (target, key, descriptor) {
                return classPropertyDecorator(target, key, descriptor, outerArgs, argLen);
            };
        };
    }
    return classPropertyDecorator;
}
function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
        addHiddenProp(instance, "__mobxInitializedProps", {});
    instance.__mobxInitializedProps[key] = true;
    onInitialize(instance, key, v, customArgs, baseDescriptor);
}
function runLazyInitializers(instance) {
    if (instance.__mobxDidRunLazyInitializers === true)
        return;
    if (instance.__mobxLazyInitializers) {
        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
        instance.__mobxDidRunLazyInitializers &&
            instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
    }
}
function quacksLikeADecorator(args) {
    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
}

var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
    var actionName = args && args.length === 1 ? args[0] : value.name || key || "<unnamed action>";
    var wrappedAction = action(actionName, value);
    addHiddenProp(target, key, wrappedAction);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, true);
var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
    defineBoundAction(target, key, value);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, false);
var action = function action(arg1, arg2, arg3, arg4) {
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    return namedActionDecorator(arg2).apply(null, arguments);
};
action.bound = function boundAction(arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
        var action_1 = createAction("<not yet bound action>", arg1);
        action_1.autoBind = true;
        return action_1;
    }
    return boundActionDecorator.apply(null, arguments);
};
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor && typeof descriptor.value === "function") {
            // TypeScript @action method() { }. Defined on proto before being decorated
            // Don't use the field decorator if we are just decorating a method
            descriptor.value = createAction(name, descriptor.value);
            descriptor.enumerable = false;
            descriptor.configurable = true;
            return descriptor;
        }
        if (descriptor !== undefined && descriptor.get !== undefined) {
            throw new Error("[mobx] action is not expected to be used with getters");
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function runInAction(arg1, arg2, arg3) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    var scope = typeof arg1 === "function" ? arg2 : arg3;
    invariant(typeof fn === "function", getMessage("m002"));
    invariant(fn.length === 0, getMessage("m003"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    return executeAction(actionName, fn, scope, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    var res = function () {
        return executeAction(propertyName, fn, target, arguments);
    };
    res.isMobxAction = true;
    addHiddenProp(target, propertyName, res);
}

// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
function deepEqual(a, b) {
    return eq(a, b);
}
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
var toString = Object.prototype.toString;
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a), key;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.peek();
    if (isObservableMap(a))
        return a.entries();
    if (isES6Map(a))
        return iteratorToArray(a.entries());
    return a;
}
function has(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function defaultComparer(a, b) {
    return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

function autorun(arg1, arg2, arg3) {
    var name, view, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        view = arg2;
        scope = arg3;
    }
    else {
        name = arg1.name || "Autorun@" + getNextId();
        view = arg1;
        scope = arg2;
    }
    invariant(typeof view === "function", getMessage("m004"));
    invariant(isAction(view) === false, getMessage("m005"));
    if (scope)
        view = view.bind(scope);
    var reaction = new Reaction(name, function () {
        this.track(reactionRunner);
    });
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
function when(arg1, arg2, arg3, arg4) {
    var name, predicate, effect, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        predicate = arg2;
        effect = arg3;
        scope = arg4;
    }
    else {
        name = "When@" + getNextId();
        predicate = arg1;
        effect = arg2;
        scope = arg3;
    }
    var disposer = autorun(name, function (r) {
        if (predicate.call(scope)) {
            r.dispose();
            var prevUntracked = untrackedStart();
            effect.call(scope);
            untrackedEnd(prevUntracked);
        }
    });
    return disposer;
}
function autorunAsync(arg1, arg2, arg3, arg4) {
    var name, func, delay, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        func = arg2;
        delay = arg3;
        scope = arg4;
    }
    else {
        name = arg1.name || "AutorunAsync@" + getNextId();
        func = arg1;
        delay = arg2;
        scope = arg3;
    }
    invariant(isAction(func) === false, getMessage("m006"));
    if (delay === void 0)
        delay = 1;
    if (scope)
        func = func.bind(scope);
    var isScheduled = false;
    var r = new Reaction(name, function () {
        if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                if (!r.isDisposed)
                    r.track(reactionRunner);
            }, delay);
        }
    });
    function reactionRunner() {
        func(r);
    }
    r.schedule();
    return r.getDisposer();
}
function reaction(expression, effect, arg3) {
    if (arguments.length > 3) {
        fail(getMessage("m007"));
    }
    if (isModifierDescriptor(expression)) {
        fail(getMessage("m008"));
    }
    var opts;
    if (typeof arg3 === "object") {
        opts = arg3;
    }
    else {
        opts = {};
    }
    opts.name =
        opts.name || expression.name || effect.name || "Reaction@" + getNextId();
    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
    opts.delay = opts.delay || 0;
    opts.compareStructural = opts.compareStructural || opts.struct || false;
    // TODO: creates ugly spy events, use `effect = (r) => runInAction(opts.name, () => effect(r))` instead
    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
    if (opts.context) {
        expression = expression.bind(opts.context);
    }
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.equals
        ? opts.equals
        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
    var r = new Reaction(opts.name, function () {
        if (firstTime || opts.delay < 1) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                reactionRunner();
            }, opts.delay);
        }
    });
    function reactionRunner() {
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effect(value, r);
        if (!firstTime && changed === true)
            effect(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce an new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(derivation, scope, equals, name, setter) {
        this.derivation = derivation;
        this.scope = scope;
        this.equals = equals;
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        this.name = name || "ComputedValue@" + getNextId();
        if (setter)
            this.setter = createAction(name + "-setter", setter);
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        clearObserving(this);
        this.value = undefined;
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
        if (globalState.inBatch === 0) {
            // This is an minor optimization which could be omitted to simplify the code
            // The computedValue is accessed outside of any mobx stuff. Batch observing should be enough and don't need
            // tracking as it will never be called again inside this batch.
            startBatch();
            if (shouldCompute(this)) {
                if (this.isTracing !== TraceMode.NONE) {
                    console.log("[mobx.trace] '" + this
                        .name + "' is being read outside a reactive context and doing a full recompute");
                }
                this.value = this.computeValue(false);
            }
            endBatch();
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this
                .name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false, "[ComputedValue '" + this
                .name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                fn: this.derivation
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = (this.value = this.computeValue(true));
        return (wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue));
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            try {
                res = this.derivation.call(this.scope);
            }
            catch (e) {
                res = new CaughtException(e);
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype.whyRun = function () {
        var isTracking = Boolean(globalState.trackingDerivation);
        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking
            ? "[active] the value of this computation is needed by a reaction"
            : this.isComputing
                ? "[get] The value of this computed was requested outside a reaction"
                : "[idle] not running at the moment") + "\n" +
            (this.dependenciesState === IDerivationState.NOT_TRACKING
                ? getMessage("m032")
                : " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this.isComputing && isTracking
                    ? " (... or any observable accessed during the remainder of the current run)"
                    : "") + "\n    " + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

var ObservableObjectAdministration = (function () {
    function ObservableObjectAdministration(target, name) {
        this.target = target;
        this.name = name;
        this.values = {};
        this.changeListeners = null;
        this.interceptors = null;
    }
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name) {
    if (isObservableObject(target) && target.hasOwnProperty("$mobx"))
        return target.$mobx;
    invariant(Object.isExtensible(target), getMessage("m035"));
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, name);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
    if (adm.values[propName] && !isComputedValue(adm.values[propName])) {
        // already observable property
        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
        adm.target[propName] = descriptor.value; // the property setter will make 'value' reactive if needed.
        return;
    }
    // not yet observable property
    if ("value" in descriptor) {
        // not a computed value
        if (isModifierDescriptor(descriptor.value)) {
            // x : ref(someValue)
            var modifierDescriptor = descriptor.value;
            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
        }
        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
        }
        else if (isComputedValue(descriptor.value)) {
            // x: computed(someExpr)
            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
        }
        else {
            // x: someValue
            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
        }
    }
    else {
        // get x() { return 3 } set x(v) { }
        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, comparer.default, true);
    }
}
function defineObservableProperty(adm, propName, newValue, enhancer) {
    assertPropertyConfigurable(adm.target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: adm.target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = (adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false));
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
    notifyPropertyAddition(adm, adm.target, propName, newValue);
}
function defineComputedProperty(adm, propName, getter, setter, equals, asInstanceProperty) {
    if (asInstanceProperty)
        assertPropertyConfigurable(adm.target, propName);
    adm.values[propName] = new ComputedValue(getter, adm.target, equals, adm.name + "." + propName, setter);
    if (asInstanceProperty) {
        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
    }
}
function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
    var name = adm.name + "." + propName;
    computedValue.name = name;
    if (!computedValue.scope)
        computedValue.scope = adm.target;
    adm.values[propName] = computedValue;
    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = {};
var computedPropertyConfigs = {};
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this.$mobx.values[propName].get();
            },
            set: function (v) {
                setPropertyValue(this, propName, v);
            }
        }));
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: true,
            enumerable: false,
            get: function () {
                return this.$mobx.values[propName].get();
            },
            set: function (v) {
                return this.$mobx.values[propName].set(v);
            }
        }));
}
function setPropertyValue(instance, name, newValue) {
    var adm = instance.$mobx;
    var observable = adm.values[name];
    // intercept
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            type: "update",
            object: instance,
            name: name,
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    newValue = observable.prepareNewValue(newValue);
    // notify spy & observers
    if (newValue !== UNCHANGED) {
        var notify = hasListeners(adm);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "update",
                object: instance,
                oldValue: observable.value,
                name: name,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        observable.setNewValue(newValue);
        if (notify)
            notifyListeners(adm, change);
        if (notifySpy)
            spyReportEnd();
    }
}
function notifyPropertyAddition(adm, object, name, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy
        ? {
            type: "add",
            object: object,
            name: name,
            newValue: newValue
        }
        : null;
    if (notifySpy)
        spyReportStart(change);
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

/**
 * Returns true if the provided value is reactive.
 * @param value object, function or array
 * @param property if property is specified, checks whether value.property is reactive.
 */
function isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableArray(value) || isObservableMap(value))
            throw new Error(getMessage("m019"));
        else if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value.$mobx ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}

function createDecoratorForEnhancer(enhancer) {
    invariant(!!enhancer, ":(");
    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
        assertPropertyConfigurable(target, name);
        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
        var adm = asObservableObject(target, undefined);
        defineObservableProperty(adm, name, baseValue, enhancer);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined // See #505
        )
            return undefined;
        return observable.get();
    }, function (name, value) {
        setPropertyValue(this, name, value);
    }, true, false);
}

function extendObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, deepEnhancer, properties);
}
function extendShallowObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, referenceEnhancer, properties);
}
function extendObservableHelper(target, defaultEnhancer, properties) {
    invariant(arguments.length >= 2, getMessage("m014"));
    invariant(typeof target === "object", getMessage("m015"));
    invariant(!isObservableMap(target), getMessage("m016"));
    properties.forEach(function (propSet) {
        invariant(typeof propSet === "object", getMessage("m017"));
        invariant(!isObservable(propSet), getMessage("m018"));
    });
    var adm = asObservableObject(target);
    var definedProps = {};
    // Note could be optimised if properties.length === 1
    for (var i = properties.length - 1; i >= 0; i--) {
        var propSet = properties[i];
        for (var key in propSet)
            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
                definedProps[key] = true;
                if (target === propSet && !isPropertyConfigurable(target, key))
                    continue; // see #111, skip non-configurable or non-writable props for `observable(object)`.
                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
            }
    }
    return target;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v) {
    if (v === void 0) { v = undefined; }
    // @observable someProp;
    if (typeof arguments[1] === "string")
        return deepDecorator.apply(null, arguments);
    invariant(arguments.length <= 1, getMessage("m021"));
    invariant(!isModifierDescriptor(v), getMessage("m020"));
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = deepEnhancer(v, undefined, undefined);
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    return observable.box(v);
}
var observableFactories = {
    box: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        return new ObservableValue(value, deepEnhancer, name);
    },
    shallowBox: function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        return new ObservableValue(value, referenceEnhancer, name);
    },
    array: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        return new ObservableArray(initialValues, deepEnhancer, name);
    },
    shallowArray: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        return new ObservableArray(initialValues, referenceEnhancer, name);
    },
    map: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        return new ObservableMap(initialValues, deepEnhancer, name);
    },
    shallowMap: function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        return new ObservableMap(initialValues, referenceEnhancer, name);
    },
    object: function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("object");
        var res = {};
        // convert to observable object
        asObservableObject(res, name);
        // add properties
        extendObservable(res, props);
        return res;
    },
    shallowObject: function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowObject");
        var res = {};
        asObservableObject(res, name);
        extendShallowObservable(res, props);
        return res;
    },
    ref: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(referenceEnhancer, arguments[0]);
        }
        else {
            return refDecorator.apply(null, arguments);
        }
    },
    shallow: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(shallowEnhancer, arguments[0]);
        }
        else {
            return shallowDecorator.apply(null, arguments);
        }
    },
    deep: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepEnhancer, arguments[0]);
        }
        else {
            return deepDecorator.apply(null, arguments);
        }
    },
    struct: function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
        }
        else {
            return deepStructDecorator.apply(null, arguments);
        }
    }
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
observable.deep.struct = observable.struct;
observable.ref.struct = function () {
    if (arguments.length < 2) {
        return createModifierDescriptor(refStructEnhancer, arguments[0]);
    }
    else {
        return refStructDecorator.apply(null, arguments);
    }
};
function incorrectlyUsedAsDecorator(methodName) {
    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function isModifierDescriptor(thing) {
    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
}
function createModifierDescriptor(enhancer, initialValue) {
    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
    return {
        isMobxModifierDescriptor: true,
        initialValue: initialValue,
        enhancer: enhancer
    };
}
function deepEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, name);
    if (isPlainObject(v))
        return observable.object(v, name);
    if (isES6Map(v))
        return observable.map(v, name);
    return v;
}
function shallowEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
        return v;
    if (Array.isArray(v))
        return observable.shallowArray(v, name);
    if (isPlainObject(v))
        return observable.shallowObject(v, name);
    if (isES6Map(v))
        return observable.shallowMap(v, name);
    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function deepStructEnhancer(v, oldValue, name) {
    // don't confuse structurally compare enhancer with ref enhancer! The latter is probably
    // more suited for immutable objects
    if (deepEqual(v, oldValue))
        return oldValue;
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return new ObservableArray(v, deepStructEnhancer, name);
    if (isES6Map(v))
        return new ObservableMap(v, deepStructEnhancer, name);
    if (isPlainObject(v)) {
        var res = {};
        asObservableObject(res, name);
        extendObservableHelper(res, deepStructEnhancer, [v]);
        return res;
    }
    return v;
}
function refStructEnhancer(v, oldValue, name) {
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

var ObservableMapMarker = {};
var ObservableMap = (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._data = Object.create(null);
        this._hasMap = Object.create(null); // hasMap, not hashMap >-).
        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
        this.interceptors = null;
        this.changeListeners = null;
        this.dehancer = undefined;
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return typeof this._data[key] !== "undefined";
    };
    ObservableMap.prototype.has = function (key) {
        if (!this.isValidKey(key))
            return false;
        key = "" + key;
        if (this._hasMap[key])
            return this._hasMap[key].get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap.prototype.set = function (key, value) {
        this.assertValidKey(key);
        key = "" + key;
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        this.assertValidKey(key);
        key = "" + key;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data[key].value,
                    name: key
                }
                : null;
            if (notifySpy)
                spyReportStart(change);
            transaction(function () {
                _this._keys.remove(key);
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data[key];
                observable$$1.setNewValue(undefined);
                _this._data[key] = undefined;
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap[key];
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
        }
        return entry;
    };
    ObservableMap.prototype._updateValue = function (name, newValue) {
        var observable$$1 = this._data[name];
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable$$1.value,
                    name: name,
                    newValue: newValue
                }
                : null;
            if (notifySpy)
                spyReportStart(change);
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (name, newValue) {
        var _this = this;
        transaction(function () {
            var observable$$1 = (_this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false));
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(name, true);
            _this._keys.push(name);
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: name,
                newValue: newValue
            }
            : null;
        if (notifySpy)
            spyReportStart(change);
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        key = "" + key;
        if (this.has(key))
            return this.dehanceValue(this._data[key].get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        return arrayAsIterator(this._keys.slice());
    };
    ObservableMap.prototype.values = function () {
        return arrayAsIterator(this._keys.map(this.get, this));
    };
    ObservableMap.prototype.entries = function () {
        var _this = this;
        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                _this.keys().forEach(_this.delete, _this);
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = _this.keys();
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values might still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        var _this = this;
        var res = {};
        this.keys().forEach(function (key) { return (res[key] = _this.get(key)); });
        return res;
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableMap.prototype.isValidKey = function (key) {
        if (key === null || key === undefined)
            return false;
        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
            return true;
        return false;
    };
    ObservableMap.prototype.assertValidKey = function (key) {
        if (!this.isValidKey(key))
            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        invariant(fireImmediately !== true, getMessage("m033"));
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
function map(initialValues) {
    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
    return observable.map(initialValues);
}
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
function getGlobal() {
    return typeof window !== "undefined" ? window : global;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message, thing) {
    invariant(false, message, thing);
    throw "X"; // unreachable
}
function invariant(check, message, thing) {
    if (!check)
        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg) {
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function joinStrings(things, limit, separator) {
    if (limit === void 0) { limit = 100; }
    if (separator === void 0) { separator = " - "; }
    if (!things)
        return "";
    var sliced = things.slice(0, limit);
    return "" + sliced.join(separator) + (things.length > limit
        ? " (... and " + (things.length - limit) + "more)"
        : "");
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function objectAssign() {
    var res = arguments[0];
    for (var i = 1, l = arguments.length; i < l; i++) {
        var source = arguments[i];
        for (var key in source)
            if (hasOwnProperty(source, key)) {
                res[key] = source[key];
            }
    }
    return res;
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(object, propName) {
    return prototypeHasOwnProperty.call(object, propName);
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function areBothNaN(a, b) {
    return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function getMapLikeKeys(map$$1) {
    if (isPlainObject(map$$1))
        return Object.keys(map$$1);
    if (Array.isArray(map$$1))
        return map$$1.map(function (_a) {
            var key = _a[0];
            return key;
        });
    if (isES6Map(map$$1))
        return Array.from(map$$1.keys());
    if (isObservableMap(map$$1))
        return map$$1.keys();
    return fail("Cannot get keys from " + map$$1);
}
function iteratorToArray(it) {
    var res = [];
    while (true) {
        var r = it.next();
        if (r.done)
            break;
        res.push(r.value);
    }
    return res;
}
function primitiveSymbol() {
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
var MobXGlobals = (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         */
        this.version = 5;
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.strictMode = false;
        /**
         * Used by createTransformer to detect that the global state has been reset.
         */
        this.resetId = 0;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
    }
    return MobXGlobals;
}());
var globalState = new MobXGlobals();
var shareGlobalStateCalled = false;
var runInIsolationCalled = false;
var warnedAboutMultipleInstances = false;
{
    var global_1 = getGlobal();
    if (!global_1.__mobxInstanceCount) {
        global_1.__mobxInstanceCount = 1;
    }
    else {
        global_1.__mobxInstanceCount++;
        setTimeout(function () {
            if (!shareGlobalStateCalled && !runInIsolationCalled && !warnedAboutMultipleInstances) {
                warnedAboutMultipleInstances = true;
                console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details.");
            }
        });
    }
}
function isolateGlobalState() {
    runInIsolationCalled = true;
    getGlobal().__mobxInstanceCount--;
}
function shareGlobalState() {
    // TODO: remove in 4.0; just use peer dependencies instead.
    deprecated("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details.");
    shareGlobalStateCalled = true;
    var global = getGlobal();
    var ownState = globalState;
    /**
     * Backward compatibility check
     */
    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
    if (global.__mobxGlobal)
        globalState = global.__mobxGlobal;
    else
        global.__mobxGlobal = ownState;
}
function getGlobalState() {
    return globalState;
}

/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    globalState.resetId++;
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.strictMode;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            invariant(property === undefined, getMessage("m036"));
            return thing.$mobx.atom;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return getAtom(anyThing._keys);
            var observable = anyThing._data[property] || anyThing._hasMap[property];
            invariant(!!observable, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        if (property && !thing.$mobx)
            thing[property]; // See #1072 // TODO: remove in 4.0
        if (isObservableObject(thing)) {
            if (!property)
                return fail("please specify a property");
            var observable = thing.$mobx.values[property];
            invariant(!!observable, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail("Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    invariant(thing, "Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    runLazyInitializers(thing);
    if (thing.$mobx)
        return thing.$mobx;
    invariant(false, "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        // because object assignment is relatively expensive, let's not store data about index 0.
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
        if (filler !== node) {
            // otherwise node was the last element, which already got removed from array
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                // map store all indexes but 0, see comment in `addObserver`
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (!observable.isPendingUnobservation) {
        // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                observable.onBecomeUnobserved();
                // NOTE: onBecomeUnobserved might push to `pendingUnobservations`
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
        }
    }
    else if (observable.observers.length === 0) {
        queueForUnobservation(observable);
    }
}
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    try {
                        obj.get();
                    }
                    catch (e) {
                        // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers$$1 = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers$$1)
        fail(getMessage("m031") + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && hasObservers$$1)
        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    try {
        result = f.call(context);
    }
    catch (e) {
        result = new CaughtException(e);
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

function log(msg) {
    console.log(msg);
    return msg;
}
function whyRun(thing, prop) {
    deprecated("`whyRun` is deprecated in favor of `trace`");
    thing = getAtomFromArgs(arguments);
    if (!thing)
        return log(getMessage("m024"));
    if (isComputedValue(thing) || isReaction(thing))
        return log(thing.whyRun());
    return fail(getMessage("m025"));
}
function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

var Reaction = (function () {
    function Reaction(name, onInvalidate) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                this.onInvalidate();
                if (this._isTrackPending && isSpyEnabled()) {
                    // onInvalidate didn't trigger track right away..
                    spyReport({
                        object: this,
                        type: "scheduled-reaction"
                    });
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                object: this,
                type: "reaction",
                fn: fn
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        var messageToUser = getMessage("m037");
        console.error(message || messageToUser /* latter will not be true, make sure uglify doesn't remove */, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                message: message,
                error: error,
                object: this
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        r.onError = registerErrorHandler;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.whyRun = function () {
        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed
            ? "stopped"
            : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + (this._isRunning
            ? " (... or any observable accessed during the remainder of the current run)"
            : "") + "\n\t" + getMessage("m038") + "\n";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
function registerErrorHandler(handler) {
    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
    this.$mobx.errorHandler = handler;
}
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function asReference(value) {
    deprecated("asReference is deprecated, use observable.ref instead");
    return observable.ref(value);
}
function asStructure(value) {
    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
    return observable.struct(value);
}
function asFlat(value) {
    deprecated("asFlat is deprecated, use observable.shallow instead");
    return observable.shallow(value);
}
function asMap(data) {
    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
    return observable.map(data || {});
}

function createComputedDecorator(equals) {
    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
        var adm = asObservableObject(target, "");
        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, equals, false);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined // See #505
        )
            return undefined;
        return observable.get();
    }, function (name, value) {
        this.$mobx.values[name].set(value);
    }, false, false);
}
var computedDecorator = createComputedDecorator(comparer.default);
var computedStructDecorator = createComputedDecorator(comparer.structural);
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        return computedDecorator.apply(null, arguments);
    }
    invariant(typeof arg1 === "function", getMessage("m011"));
    invariant(arguments.length < 3, getMessage("m012"));
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
    var equals = opts.equals
        ? opts.equals
        : opts.compareStructural || opts.struct ? comparer.structural : comparer.default;
    return new ComputedValue(arg1, opts.context, equals, opts.name || arg1.name || "", opts.setter);
};
computed.struct = computedStructDecorator;
computed.equals = createComputedDecorator;

function isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value.$mobx.values[property])
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

/**
 * expr can be used to create temporarily views inside views.
 * This can be improved to improve performance if a value changes often, but usually doesn't affect the outcome of an expression.
 *
 * In the following example the expression prevents that a component is rerender _each time_ the selection changes;
 * instead it will only rerenders when the current todo is (de)selected.
 *
 * reactiveComponent((props) => {
 *     const todo = props.todo;
 *     const isSelected = mobx.expr(() => props.viewState.selection === todo);
 *     return <div className={isSelected ? "todo todo-selected" : "todo"}>{todo.title}</div>
 * });
 *
 */
function expr(expr, scope) {
    if (!isComputingDerivation())
        console.warn(getMessage("m013"));
    // optimization: would be more efficient if the expr itself wouldn't be evaluated first on the next change, but just a 'changed' signal would be fired
    return computed(expr, { context: scope }).get();
}

function toJS(source, detectCycles, __alreadySeen) {
    if (detectCycles === void 0) { detectCycles = true; }
    if (__alreadySeen === void 0) { __alreadySeen = []; }
    // optimization: using ES6 map would be more efficient!
    // optimization: lift this function outside toJS, this makes recursion expensive
    function cache(value) {
        if (detectCycles)
            __alreadySeen.push([source, value]);
        return value;
    }
    if (isObservable(source)) {
        if (detectCycles && __alreadySeen === null)
            __alreadySeen = [];
        if (detectCycles && source !== null && typeof source === "object") {
            for (var i = 0, l = __alreadySeen.length; i < l; i++)
                if (__alreadySeen[i][0] === source)
                    return __alreadySeen[i][1];
        }
        if (isObservableArray(source)) {
            var res = cache([]);
            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
            res.length = toAdd.length;
            for (var i = 0, l = toAdd.length; i < l; i++)
                res[i] = toAdd[i];
            return res;
        }
        if (isObservableObject(source)) {
            var res = cache({});
            for (var key in source)
                res[key] = toJS(source[key], detectCycles, __alreadySeen);
            return res;
        }
        if (isObservableMap(source)) {
            var res_1 = cache({});
            source.forEach(function (value, key) { return (res_1[key] = toJS(value, detectCycles, __alreadySeen)); });
            return res_1;
        }
        if (isObservableValue(source))
            return toJS(source.get(), detectCycles, __alreadySeen);
    }
    return source;
}

function createTransformer(transformer, onCleanup) {
    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
    // Memoizes: object id -> reactive view that applies transformer to the object
    var objectCache = {};
    // If the resetId changes, we will clear the object cache, see #163
    // This construction is used to avoid leaking refs to the objectCache directly
    var resetId = globalState.resetId;
    // Local transformer class specifically for this transformer
    var Transformer = (function (_super) {
        __extends(Transformer, _super);
        function Transformer(sourceIdentifier, sourceObject) {
            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, comparer.default, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
            _this.sourceIdentifier = sourceIdentifier;
            _this.sourceObject = sourceObject;
            return _this;
        }
        Transformer.prototype.onBecomeUnobserved = function () {
            var lastValue = this.value;
            _super.prototype.onBecomeUnobserved.call(this);
            delete objectCache[this.sourceIdentifier];
            if (onCleanup)
                onCleanup(lastValue, this.sourceObject);
        };
        return Transformer;
    }(ComputedValue));
    return function (object) {
        if (resetId !== globalState.resetId) {
            objectCache = {};
            resetId = globalState.resetId;
        }
        var identifier = getMemoizationId(object);
        var reactiveTransformer = objectCache[identifier];
        if (reactiveTransformer)
            return reactiveTransformer.get();
        // Not in cache; create a reactive view
        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
        return reactiveTransformer.get();
    };
}
function getMemoizationId(object) {
    if (typeof object === "string" || typeof object === "number")
        return object;
    if (object === null || typeof object !== "object")
        throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
    var tid = object.$transformId;
    if (tid === undefined) {
        tid = getNextId();
        addHiddenProp(object, "$transformId", tid);
    }
    return tid;
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail("InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail("Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail("An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
var extras = {
    allowStateChanges: allowStateChanges,
    deepEqual: deepEqual,
    getAtom: getAtom,
    getDebugName: getDebugName,
    getDependencyTree: getDependencyTree,
    getAdministration: getAdministration,
    getGlobalState: getGlobalState,
    getObserverTree: getObserverTree,
    interceptReads: interceptReads,
    isComputingDerivation: isComputingDerivation,
    isSpyEnabled: isSpyEnabled,
    onReactionError: onReactionError,
    reserveArrayBuffer: reserveArrayBuffer,
    resetGlobalState: resetGlobalState,
    isolateGlobalState: isolateGlobalState,
    shareGlobalState: shareGlobalState,
    spyReport: spyReport,
    spyReportEnd: spyReportEnd,
    spyReportStart: spyReportStart,
    setReactionScheduler: setReactionScheduler
};
var everything = {
    Reaction: Reaction,
    untracked: untracked,
    Atom: Atom,
    BaseAtom: BaseAtom,
    useStrict: useStrict,
    isStrictModeEnabled: isStrictModeEnabled,
    spy: spy,
    comparer: comparer,
    asReference: asReference,
    asFlat: asFlat,
    asStructure: asStructure,
    asMap: asMap,
    isModifierDescriptor: isModifierDescriptor,
    isObservableObject: isObservableObject,
    isBoxedObservable: isObservableValue,
    isObservableArray: isObservableArray,
    ObservableMap: ObservableMap,
    isObservableMap: isObservableMap,
    map: map,
    transaction: transaction,
    observable: observable,
    computed: computed,
    isObservable: isObservable,
    isComputed: isComputed,
    extendObservable: extendObservable,
    extendShallowObservable: extendShallowObservable,
    observe: observe,
    intercept: intercept,
    autorun: autorun,
    autorunAsync: autorunAsync,
    when: when,
    reaction: reaction,
    action: action,
    isAction: isAction,
    runInAction: runInAction,
    expr: expr,
    toJS: toJS,
    createTransformer: createTransformer,
    whyRun: whyRun,
    isArrayLike: isArrayLike,
    extras: extras
};
var warnedAboutDefaultExport = false;
var _loop_1 = function (p) {
    var val = everything[p];
    Object.defineProperty(everything, p, {
        get: function () {
            if (!warnedAboutDefaultExport) {
                warnedAboutDefaultExport = true;
                console.warn("Using default export (`import mobx from 'mobx'`) is deprecated " +
                    "and won’t work in mobx@4.0.0\n" +
                    "Use `import * as mobx from 'mobx'` instead");
            }
            return val;
        }
    });
};
for (var p in everything) {
    _loop_1(p);
}
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: spy, extras: extras });
}

/* harmony default export */ __webpack_exports__["default"] = (everything);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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

// NOTE: Not implemented yet.
var Component = function Component() {};

var createElement = function createElement(tag, props, children) {
  switch (typeof tag) {
    case 'string':
      return _builtIns.builtIns._exists(tag) ? _builtIns.builtIns[tag](props, children) : document.createElement(tag);

    case 'function':
      return tag instanceof Component ? new tag(props, children) : tag(props, children);
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
exports.render = exports.create = void 0;

var _create = __webpack_require__(/*! ./create */ "./src/core/create.js");

exports.create = _create.create;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9ieC9saWIvbW9ieC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2J1aWx0SW4vYnVpbHRJbnMvYW5pbWF0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYnVpbHRJbi9idWlsdElucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvZWxlbWVudC9jcmVhdGVDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9lbGVtZW50L2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL3N0b3JlL0VNQVAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2FwcGVuZENoaWxkcmVuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2FwcGx5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2RvbS9hcHBseVByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2hhbmRsZXJOYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL3JlbW92ZUNoaWxkcmVuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL3JlbW92ZU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9lbnRyaWVzT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9maWxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9pc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9pc1N0cmluZy5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImZvbyIsInNldEZvbyIsImNvbnNvbGUiLCJsb2ciLCJBcHAiLCJGb28iLCJXcmFwcGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFuaW1hdGVkIiwiX2ZpZCIsIl9leGlzdHMiLCJ0YWciLCJjYiIsImJ1aWx0SW5zIiwiY3JlYXRlIiwiX2VsZW1lbnQiLCJfY2hpbGRyZW4iLCJzZXQiLCJjcmVhdGVDaGlsZHJlbiIsIm1hcCIsIkFycmF5IiwiaXNBcnJheSIsImNoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJDb21wb25lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudCIsIm5vZGUiLCJhcHBlbmRDaGlsZCIsIkVNQVAiLCJNYXAiLCJpIiwiYXBwZW5kQ2hpbGRyZW4iLCJmb3JFYWNoIiwiaWkiLCJhcHBseUhhbmRsZXIiLCJuYW1lIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBseVByb3BzIiwidmFsdWUiLCJoYW5kbGVyTmFtZSIsInByb3BOYW1lIiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJyZW1vdmVDaGlsZHJlbiIsImZyb20iLCJjaGlsZE5vZGVzIiwicmVtb3ZlTm9kZSIsInJlbW92ZSIsImVudHJpZXNPZiIsInRhcmdldCIsIk9iamVjdCIsImVudHJpZXMiLCJmaWxlQXJyYXkiLCJhcnJheSIsImRldGVybWluYXRvciIsInJlZHVjZSIsImZpbmFsIiwiaXRlbSIsInB1c2giLCJpc0hhbmRsZXIiLCJzdGFydHNXaXRoIiwiaXNTdHJpbmciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLHNCQUFXO0FBQ3hCQyxPQUFLO0FBRG1CLENBQVgsQ0FBZCxDLENBSUE7O0FBQ0EsSUFBTUMsU0FBUyxrQkFBTyxZQUFNO0FBQzNCQyxVQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBSixRQUFNQyxHQUFOLEdBQVksQ0FBQ0QsTUFBTUMsR0FBbkI7QUFDQSxDQUhjLENBQWY7O0FBS0EsSUFBTUksTUFBTSxTQUFOQSxHQUFNLEdBQU07QUFDakIsU0FDQztBQUFLLGVBQVU7QUFBZixLQUNDLHdDQUNDLDRDQUFXLFlBQVgsb0NBREQsQ0FERCxFQUlDLHNCQUFDLEdBQUQsT0FKRCxDQUREO0FBUUEsQ0FURDs7QUFXQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sR0FBTTtBQUNqQixTQUNDO0FBQUssZUFBVTtBQUFmLEtBQ0MsMkRBREQs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsOEJBQThCLEVBQUU7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUEwRyxpQkFBaUIsRUFBRTtBQUM3SCxzRUFBc0UsaUJBQWlCLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVyxXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCx1REFBdUQsRUFBRTtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx5QkFBeUI7QUFDM0QsOEJBQThCLHVDQUF1QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxvREFBb0QsOENBQThDLEVBQUU7QUFDcEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxzRUFBc0Usd0JBQXdCLEVBQUU7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5R0FBeUcsaUJBQWlCLEVBQUU7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseUJBQXlCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLHNEQUFzRCxPQUFPO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3Qix5QkFBeUIsRUFBRSxFQUFFO0FBQzNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsYUFBYSxFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwyQ0FBMkMsRUFBRSxXQUFXO0FBQ3RGLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDOztBQUVBO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RCxtQ0FBbUMsb0JBQW9CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsT0FBTztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGlEQUFpRCxFQUFFO0FBQ3hHO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxrREFBa0QsZ0VBQWdFLEVBQUU7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxrQ0FBa0MsRUFBRTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMkJBQTJCO0FBQ3pFOztBQUV3aUI7Ozs7Ozs7Ozs7Ozs7QUMxc0h4aUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7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QUFXLFNBQVhBLFFBQVcsU0FBVTtBQUNoQyxTQUFPLE9BQU9aLE1BQVAsS0FBa0IsUUFBekI7QUFDRCxDQUZNIiwiZmlsZSI6ImZveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2V4YW1wbGUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhdXRvcnVuLCBhY3Rpb24gfSBmcm9tIFwibW9ieFwiO1xuaW1wb3J0IGZveCBmcm9tIFwiZm94XCI7XG5cbmNvbnN0IHN0YXRlID0gb2JzZXJ2YWJsZSh7XG5cdGZvbzogdHJ1ZVxufSk7XG5cbi8vIE5vIHdvcmsgeWV0LlxuY29uc3Qgc2V0Rm9vID0gYWN0aW9uKCgpID0+IHtcblx0Y29uc29sZS5sb2coXCJzZXR0aW5nIGZvb1wiKTtcblx0c3RhdGUuZm9vID0gIXN0YXRlLmZvbztcbn0pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cblx0XHRcdDxhbmltYXRlZD5cblx0XHRcdFx0PHA+SSdtIGFuIHtcIjxhbmltYXRlZD5cIn0gYnVpbHRJbi4gSSBjb21lIHByZS1pbnN0YWxsZWQhPC9wPlxuXHRcdFx0PC9hbmltYXRlZD5cblx0XHRcdDxGb28gLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IEZvbyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkZvb1wiPlxuXHRcdFx0PHA+SSBBTSBGT08sIEhFQVIgTUUgUk9BUi48L3A+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jbGFzcyBXcmFwcGVyIHtcblx0Y29uc3RydWN0b3IocHJvcHMsIGNoaWxkcmVuKSB7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblx0XHR0aGlzLnJlbmRlciA9ICgpID0+IHRoaXMucmVuZGVyKHByb3BzLCBjaGlsZHJlbik7XG5cdH1cblxuXHRyZW5kZXIocHJvcHMsIGNoaWxkcmVuKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuO1xuXHR9XG59XG5cbmZveC5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3VudFBvaW50XCIpKTtcbiIsIi8qKiBNb2JYIC0gKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUsIDIwMTYgLSBNSVQgTGljZW5zZWQgKi9cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XG5cbi8qKlxuICogQW55dGhpbmcgdGhhdCBjYW4gYmUgdXNlZCB0byBfc3RvcmVfIHN0YXRlIGlzIGFuIEF0b20gaW4gbW9ieC4gQXRvbXMgaGF2ZSB0d28gaW1wb3J0YW50IGpvYnNcbiAqXG4gKiAxKSBkZXRlY3Qgd2hlbiB0aGV5IGFyZSBiZWluZyBfdXNlZF8gYW5kIHJlcG9ydCB0aGlzICh1c2luZyByZXBvcnRPYnNlcnZlZCkuIFRoaXMgYWxsb3dzIG1vYnggdG8gbWFrZSB0aGUgY29ubmVjdGlvbiBiZXR3ZWVuIHJ1bm5pbmcgZnVuY3Rpb25zIGFuZCB0aGUgZGF0YSB0aGV5IHVzZWRcbiAqIDIpIHRoZXkgc2hvdWxkIG5vdGlmeSBtb2J4IHdoZW5ldmVyIHRoZXkgaGF2ZSBfY2hhbmdlZF8uIFRoaXMgd2F5IG1vYnggY2FuIHJlLXJ1biBhbnkgZnVuY3Rpb25zIChkZXJpdmF0aW9ucykgdGhhdCBhcmUgdXNpbmcgdGhpcyBhdG9tLlxuICovXG52YXIgQmFzZUF0b20gPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBhdG9tLiBGb3IgZGVidWdnaW5nIHB1cnBvc2VzIGl0IGlzIHJlY29tbWVuZGVkIHRvIGdpdmUgaXQgYSBuYW1lLlxuICAgICAqIFRoZSBvbkJlY29tZU9ic2VydmVkIGFuZCBvbkJlY29tZVVub2JzZXJ2ZWQgY2FsbGJhY2tzIGNhbiBiZSB1c2VkIGZvciByZXNvdXJjZSBtYW5hZ2VtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEJhc2VBdG9tKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJBdG9tQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gdHJ1ZTsgLy8gZm9yIGVmZmVjdGl2ZSB1bm9ic2VydmluZy4gQmFzZUF0b20gaGFzIHRydWUsIGZvciBleHRyYSBvcHRpbWl6YXRpb24sIHNvIGl0cyBvbkJlY29tZVVub2JzZXJ2ZWQgbmV2ZXIgZ2V0cyBjYWxsZWQsIGJlY2F1c2UgaXQncyBub3QgbmVlZGVkXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzSW5kZXhlcyA9IHt9O1xuICAgICAgICB0aGlzLmRpZmZWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMubGFzdEFjY2Vzc2VkQnkgPSAwO1xuICAgICAgICB0aGlzLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbiAgICB9XG4gICAgQmFzZUF0b20ucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH07XG4gICAgLyoqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIHRvIG5vdGlmeSBtb2J4IHRoYXQgeW91ciBhdG9tIGhhcyBiZWVuIHVzZWQgc29tZWhvdy5cbiAgICAgKi9cbiAgICBCYXNlQXRvbS5wcm90b3R5cGUucmVwb3J0T2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW52b2tlIHRoaXMgbWV0aG9kIF9hZnRlcl8gdGhpcyBtZXRob2QgaGFzIGNoYW5nZWQgdG8gc2lnbmFsIG1vYnggdGhhdCBhbGwgaXRzIG9ic2VydmVycyBzaG91bGQgaW52YWxpZGF0ZS5cbiAgICAgKi9cbiAgICBCYXNlQXRvbS5wcm90b3R5cGUucmVwb3J0Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICBwcm9wYWdhdGVDaGFuZ2VkKHRoaXMpO1xuICAgICAgICBlbmRCYXRjaCgpO1xuICAgIH07XG4gICAgQmFzZUF0b20ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEJhc2VBdG9tO1xufSgpKTtcbnZhciBBdG9tID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXRvbSwgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYXRvbS4gRm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBpdCBpcyByZWNvbW1lbmRlZCB0byBnaXZlIGl0IGEgbmFtZS5cbiAgICAgKiBUaGUgb25CZWNvbWVPYnNlcnZlZCBhbmQgb25CZWNvbWVVbm9ic2VydmVkIGNhbGxiYWNrcyBjYW4gYmUgdXNlZCBmb3IgcmVzb3VyY2UgbWFuYWdlbWVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBdG9tKG5hbWUsIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiQXRvbUBcIiArIGdldE5leHRJZCgpOyB9XG4gICAgICAgIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7IG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyID0gbm9vcDsgfVxuICAgICAgICBpZiAob25CZWNvbWVVbm9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7IG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPSBub29wOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5vbkJlY29tZU9ic2VydmVkSGFuZGxlciA9IG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyO1xuICAgICAgICBfdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID0gb25CZWNvbWVVbm9ic2VydmVkSGFuZGxlcjtcbiAgICAgICAgX3RoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IGZhbHNlOyAvLyBmb3IgZWZmZWN0aXZlIHVub2JzZXJ2aW5nLlxuICAgICAgICBfdGhpcy5pc0JlaW5nVHJhY2tlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEF0b20ucHJvdG90eXBlLnJlcG9ydE9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVwb3J0T2JzZXJ2ZWQuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQmVpbmdUcmFja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzQmVpbmdUcmFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVPYnNlcnZlZEhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgICByZXR1cm4gISFnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgICAgIC8vIHJldHVybiBkb2Vzbid0IHJlYWxseSBnaXZlIHVzZWZ1bCBpbmZvLCBiZWNhdXNlIGl0IGNhbiBiZSBhcyB3ZWxsIGNhbGxpbmcgY29tcHV0ZWQgd2hpY2ggY2FsbHMgYXRvbSAobm8gcmVhY3Rpb25zKVxuICAgICAgICAvLyBhbHNvIGl0IGNvdWxkIG5vdCB0cmlnZ2VyIHdoZW4gY2FsY3VsYXRpbmcgcmVhY3Rpb24gZGVwZW5kZW50IG9uIEF0b20gYmVjYXVzZSBBdG9tJ3MgdmFsdWUgd2FzIGNhY2hlZCBieSBjb21wdXRlZCBjYWxsZWQgYnkgZ2l2ZW4gcmVhY3Rpb24uXG4gICAgfTtcbiAgICBBdG9tLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNCZWluZ1RyYWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXRvbTtcbn0oQmFzZUF0b20pKTtcbnZhciBpc0F0b20gPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiQXRvbVwiLCBCYXNlQXRvbSk7XG5cbmZ1bmN0aW9uIGhhc0ludGVyY2VwdG9ycyhpbnRlcmNlcHRhYmxlKSB7XG4gICAgcmV0dXJuIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzICYmIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzLmxlbmd0aCA+IDA7XG59XG5mdW5jdGlvbiByZWdpc3RlckludGVyY2VwdG9yKGludGVyY2VwdGFibGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgaW50ZXJjZXB0b3JzID0gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgfHwgKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzID0gW10pO1xuICAgIGludGVyY2VwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGludGVyY2VwdG9ycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgIGludGVyY2VwdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdENoYW5nZShpbnRlcmNlcHRhYmxlLCBjaGFuZ2UpIHtcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycztcbiAgICAgICAgaWYgKGludGVyY2VwdG9ycylcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaW50ZXJjZXB0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IGludGVyY2VwdG9yc1tpXShjaGFuZ2UpO1xuICAgICAgICAgICAgICAgIGludmFyaWFudCghY2hhbmdlIHx8IGNoYW5nZS50eXBlLCBcIkludGVyY2VwdCBoYW5kbGVycyBzaG91bGQgcmV0dXJuIG5vdGhpbmcgb3IgYSBjaGFuZ2Ugb2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNMaXN0ZW5lcnMobGlzdGVuYWJsZSkge1xuICAgIHJldHVybiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyAmJiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycy5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5hYmxlLCBoYW5kbGVyKSB7XG4gICAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzIHx8IChsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyA9IFtdKTtcbiAgICBsaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpXG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMobGlzdGVuYWJsZSwgY2hhbmdlKSB7XG4gICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcbiAgICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnM7XG4gICAgaWYgKCFsaXN0ZW5lcnMpXG4gICAgICAgIHJldHVybjtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGlzdGVuZXJzW2ldKGNoYW5nZSk7XG4gICAgfVxuICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG59XG5cbmZ1bmN0aW9uIGlzU3B5RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gISFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoO1xufVxuZnVuY3Rpb24gc3B5UmVwb3J0KGV2ZW50KSB7XG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMubGVuZ3RoKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGxpc3RlbmVycyA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XG59XG5mdW5jdGlvbiBzcHlSZXBvcnRTdGFydChldmVudCkge1xuICAgIHZhciBjaGFuZ2UgPSBvYmplY3RBc3NpZ24oe30sIGV2ZW50LCB7IHNweVJlcG9ydFN0YXJ0OiB0cnVlIH0pO1xuICAgIHNweVJlcG9ydChjaGFuZ2UpO1xufVxudmFyIEVORF9FVkVOVCA9IHsgc3B5UmVwb3J0RW5kOiB0cnVlIH07XG5mdW5jdGlvbiBzcHlSZXBvcnRFbmQoY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZSlcbiAgICAgICAgc3B5UmVwb3J0KG9iamVjdEFzc2lnbih7fSwgY2hhbmdlLCBFTkRfRVZFTlQpKTtcbiAgICBlbHNlXG4gICAgICAgIHNweVJlcG9ydChFTkRfRVZFTlQpO1xufVxuZnVuY3Rpb24gc3B5KGxpc3RlbmVyKSB7XG4gICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpXG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGl0ZXJhdG9yU3ltYm9sKCkge1xuICAgIHJldHVybiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvcikgfHwgXCJAQGl0ZXJhdG9yXCI7XG59XG52YXIgSVNfSVRFUkFUSU5HX01BUktFUiA9IFwiX18kJGl0ZXJhdGluZ1wiO1xuZnVuY3Rpb24gYXJyYXlBc0l0ZXJhdG9yKGFycmF5KSB7XG4gICAgLy8gcmV0dXJuaW5nIGFuIGFycmF5IGZvciBlbnRyaWVzKCksIHZhbHVlcygpIGV0YyBmb3IgbWFwcyB3YXMgYSBtaXMtaW50ZXJwcmV0YXRpb24gb2YgdGhlIHNwZWNzLi4sXG4gICAgLy8geWV0IGl0IGlzIHF1aXRlIGNvbnZlbmllbnQgdG8gYmUgYWJsZSB0byB1c2UgdGhlIHJlc3BvbnNlIGJvdGggYXMgYXJyYXkgZGlyZWN0bHkgYW5kIGFzIGl0ZXJhdG9yXG4gICAgLy8gaXQgaXMgc3Vib3B0aW1hbCwgYnV0IGFsYXMuLi5cbiAgICBpbnZhcmlhbnQoYXJyYXlbSVNfSVRFUkFUSU5HX01BUktFUl0gIT09IHRydWUsIFwiSWxsZWdhbCBzdGF0ZTogY2Fubm90IHJlY3ljbGUgYXJyYXkgYXMgaXRlcmF0b3JcIik7XG4gICAgYWRkSGlkZGVuRmluYWxQcm9wKGFycmF5LCBJU19JVEVSQVRJTkdfTUFSS0VSLCB0cnVlKTtcbiAgICB2YXIgaWR4ID0gLTE7XG4gICAgYWRkSGlkZGVuRmluYWxQcm9wKGFycmF5LCBcIm5leHRcIiwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgaWR4Kys7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb25lOiBpZHggPj0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICB2YWx1ZTogaWR4IDwgdGhpcy5sZW5ndGggPyB0aGlzW2lkeF0gOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBkZWNsYXJlSXRlcmF0b3IocHJvdG90VHlwZSwgaXRlcmF0b3JGYWN0b3J5KSB7XG4gICAgYWRkSGlkZGVuRmluYWxQcm9wKHByb3RvdFR5cGUsIGl0ZXJhdG9yU3ltYm9sKCksIGl0ZXJhdG9yRmFjdG9yeSk7XG59XG5cbnZhciBNQVhfU1BMSUNFX1NJWkUgPSAxMDAwMDsgLy8gU2VlIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy84NTlcbi8vIERldGVjdHMgYnVnIGluIHNhZmFyaSA5LjEuMSAob3IgaU9TIDkgc2FmYXJpIG1vYmlsZSkuIFNlZSAjMzY0XG52YXIgc2FmYXJpUHJvdG90eXBlU2V0dGVySW5oZXJpdGFuY2VCdWcgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciB2ID0gZmFsc2U7XG4gICAgdmFyIHAgPSB7fTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocCwgXCIwXCIsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5jcmVhdGUocClbXCIwXCJdID0gMTtcbiAgICByZXR1cm4gdiA9PT0gZmFsc2U7XG59KSgpO1xuLyoqXG4gKiBUaGlzIGFycmF5IGJ1ZmZlciBjb250YWlucyB0d28gbGlzdHMgb2YgcHJvcGVydGllcywgc28gdGhhdCBhbGwgYXJyYXlzXG4gKiBjYW4gcmVjeWNsZSB0aGVpciBwcm9wZXJ0eSBkZWZpbml0aW9ucywgd2hpY2ggc2lnbmlmaWNhbnRseSBpbXByb3ZlcyBwZXJmb3JtYW5jZSBvZiBjcmVhdGluZ1xuICogcHJvcGVydGllcyBvbiB0aGUgZmx5LlxuICovXG52YXIgT0JTRVJWQUJMRV9BUlJBWV9CVUZGRVJfU0laRSA9IDA7XG4vLyBUeXBlc2NyaXB0IHdvcmthcm91bmQgdG8gbWFrZSBzdXJlIE9ic2VydmFibGVBcnJheSBleHRlbmRzIEFycmF5XG52YXIgU3R1YkFycmF5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdHViQXJyYXkoKSB7XG4gICAgfVxuICAgIHJldHVybiBTdHViQXJyYXk7XG59KCkpO1xuZnVuY3Rpb24gaW5oZXJpdChjdG9yLCBwcm90bykge1xuICAgIGlmICh0eXBlb2YgT2JqZWN0W1wic2V0UHJvdG90eXBlT2ZcIl0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgT2JqZWN0W1wic2V0UHJvdG90eXBlT2ZcIl0oY3Rvci5wcm90b3R5cGUsIHByb3RvKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGN0b3IucHJvdG90eXBlLl9fcHJvdG9fXyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjdG9yLnByb3RvdHlwZS5fX3Byb3RvX18gPSBwcm90bztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN0b3JbXCJwcm90b3R5cGVcIl0gPSBwcm90bztcbiAgICB9XG59XG5pbmhlcml0KFN0dWJBcnJheSwgQXJyYXkucHJvdG90eXBlKTtcbi8vIFdlZXggZnJlZXplIEFycmF5LnByb3RvdHlwZVxuLy8gTWFrZSB0aGVtIHdyaXRlYWJsZSBhbmQgY29uZmlndXJhYmxlIGluIHByb3RvdHlwZSBjaGFpblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvd2VleC9wdWxsLzE1MjlcbmlmIChPYmplY3QuaXNGcm96ZW4oQXJyYXkpKSB7XG4gICAgXG4gICAgW1xuICAgICAgICBcImNvbnN0cnVjdG9yXCIsXG4gICAgICAgIFwicHVzaFwiLFxuICAgICAgICBcInNoaWZ0XCIsXG4gICAgICAgIFwiY29uY2F0XCIsXG4gICAgICAgIFwicG9wXCIsXG4gICAgICAgIFwidW5zaGlmdFwiLFxuICAgICAgICBcInJlcGxhY2VcIixcbiAgICAgICAgXCJmaW5kXCIsXG4gICAgICAgIFwiZmluZEluZGV4XCIsXG4gICAgICAgIFwic3BsaWNlXCIsXG4gICAgICAgIFwicmV2ZXJzZVwiLFxuICAgICAgICBcInNvcnRcIlxuICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHViQXJyYXkucHJvdG90eXBlLCBrZXksIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IEFycmF5LnByb3RvdHlwZVtrZXldXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgYXJyYXksIG93bmVkKSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICAgICAgdGhpcy5vd25lZCA9IG93bmVkO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLmxhc3RLbm93bkxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuaW50ZXJjZXB0b3JzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmF0b20gPSBuZXcgQmFzZUF0b20obmFtZSB8fCBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpKTtcbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7IHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lICsgXCJbLi5dXCIpOyB9O1xuICAgIH1cbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAodGhpcy5kZWhhbmNlcik7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLmFycmF5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzLnNsaWNlKCksXG4gICAgICAgICAgICAgICAgYWRkZWRDb3VudDogdGhpcy52YWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlbW92ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmdldEFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIChuZXdMZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdMZW5ndGggIT09IFwibnVtYmVyXCIgfHwgbmV3TGVuZ3RoIDwgMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBPdXQgb2YgcmFuZ2U6IFwiICsgbmV3TGVuZ3RoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBuZXdJdGVtcyA9IG5ldyBBcnJheShuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkOyAvLyBObyBBcnJheS5maWxsIGV2ZXJ5d2hlcmUuLi5cbiAgICAgICAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5KGN1cnJlbnRMZW5ndGgsIDAsIG5ld0l0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNwbGljZVdpdGhBcnJheShuZXdMZW5ndGgsIGN1cnJlbnRMZW5ndGggLSBuZXdMZW5ndGgpO1xuICAgIH07XG4gICAgLy8gYWRkcyAvIHJlbW92ZXMgdGhlIG5lY2Vzc2FyeSBudW1lcmljIHByb3BlcnRpZXMgdG8gdGhpcyBvYmplY3RcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUudXBkYXRlQXJyYXlMZW5ndGggPSBmdW5jdGlvbiAob2xkTGVuZ3RoLCBkZWx0YSkge1xuICAgICAgICBpZiAob2xkTGVuZ3RoICE9PSB0aGlzLmxhc3RLbm93bkxlbmd0aClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBNb2RpZmljYXRpb24gZXhjZXB0aW9uOiB0aGUgaW50ZXJuYWwgc3RydWN0dXJlIG9mIGFuIG9ic2VydmFibGUgYXJyYXkgd2FzIGNoYW5nZWQuIERpZCB5b3UgdXNlIHBlZWsoKSB0byBjaGFuZ2UgaXQ/XCIpO1xuICAgICAgICB0aGlzLmxhc3RLbm93bkxlbmd0aCArPSBkZWx0YTtcbiAgICAgICAgaWYgKGRlbHRhID4gMCAmJiBvbGRMZW5ndGggKyBkZWx0YSArIDEgPiBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFKVxuICAgICAgICAgICAgcmVzZXJ2ZUFycmF5QnVmZmVyKG9sZExlbmd0aCArIGRlbHRhICsgMSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuc3BsaWNlV2l0aEFycmF5ID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID4gbGVuZ3RoKVxuICAgICAgICAgICAgaW5kZXggPSBsZW5ndGg7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4IDwgMClcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgIGVsc2UgaWYgKGRlbGV0ZUNvdW50ID09PSB1bmRlZmluZWQgfHwgZGVsZXRlQ291bnQgPT09IG51bGwpXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZGVsZXRlQ291bnQsIGxlbmd0aCAtIGluZGV4KSk7XG4gICAgICAgIGlmIChuZXdJdGVtcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgbmV3SXRlbXMgPSBbXTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLmFycmF5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IG5ld0l0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBFTVBUWV9BUlJBWTtcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gY2hhbmdlLnJlbW92ZWRDb3VudDtcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gY2hhbmdlLmFkZGVkO1xuICAgICAgICB9XG4gICAgICAgIG5ld0l0ZW1zID0gbmV3SXRlbXMubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBfdGhpcy5lbmhhbmNlcih2LCB1bmRlZmluZWQpOyB9KTtcbiAgICAgICAgdmFyIGxlbmd0aERlbHRhID0gbmV3SXRlbXMubGVuZ3RoIC0gZGVsZXRlQ291bnQ7XG4gICAgICAgIHRoaXMudXBkYXRlQXJyYXlMZW5ndGgobGVuZ3RoLCBsZW5ndGhEZWx0YSk7IC8vIGNyZWF0ZSBvciByZW1vdmUgbmV3IGVudHJpZXNcbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuc3BsaWNlSXRlbXNJbnRvVmFsdWVzKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xuICAgICAgICBpZiAoZGVsZXRlQ291bnQgIT09IDAgfHwgbmV3SXRlbXMubGVuZ3RoICE9PSAwKVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlBcnJheVNwbGljZShpbmRleCwgbmV3SXRlbXMsIHJlcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZXMocmVzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zcGxpY2VJdGVtc0ludG9WYWx1ZXMgPSBmdW5jdGlvbiAoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xuICAgICAgICBpZiAobmV3SXRlbXMubGVuZ3RoIDwgTUFYX1NQTElDRV9TSVpFKSB7XG4gICAgICAgICAgICByZXR1cm4gKF9hID0gdGhpcy52YWx1ZXMpLnNwbGljZS5hcHBseShfYSwgW2luZGV4LCBkZWxldGVDb3VudF0uY29uY2F0KG5ld0l0ZW1zKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy52YWx1ZXMuc2xpY2UoaW5kZXgsIGluZGV4ICsgZGVsZXRlQ291bnQpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5zbGljZSgwLCBpbmRleClcbiAgICAgICAgICAgICAgICAuY29uY2F0KG5ld0l0ZW1zLCB0aGlzLnZhbHVlcy5zbGljZShpbmRleCArIGRlbGV0ZUNvdW50KSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfYTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5ub3RpZnlBcnJheUNoaWxkVXBkYXRlID0gZnVuY3Rpb24gKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9ICF0aGlzLm93bmVkICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLmFycmF5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm5vdGlmeUFycmF5U3BsaWNlID0gZnVuY3Rpb24gKGluZGV4LCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWQgJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMuYXJyYXksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZCxcbiAgICAgICAgICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiByZW1vdmVkLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBhZGRlZENvdW50OiBhZGRlZC5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIC8vIGNvbmZvcm06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L29ic2VydmVcbiAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb247XG59KCkpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9ic2VydmFibGVBcnJheSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZW5oYW5jZXIsIG5hbWUsIG93bmVkKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgaWYgKG93bmVkID09PSB2b2lkIDApIHsgb3duZWQgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBfdGhpcywgb3duZWQpO1xuICAgICAgICBhZGRIaWRkZW5GaW5hbFByb3AoX3RoaXMsIFwiJG1vYnhcIiwgYWRtKTtcbiAgICAgICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzLnNwbGljZVdpdGhBcnJheSgwLCAwLCBpbml0aWFsVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2FmYXJpUHJvdG90eXBlU2V0dGVySW5oZXJpdGFuY2VCdWcpIHtcbiAgICAgICAgICAgIC8vIFNlZW1zIHRoYXQgU2FmYXJpIHdvbid0IHVzZSBudW1lcmljIHByb3RvdHlwZSBzZXR0ZXIgdW50aWxsIGFueSAqIG51bWVyaWMgcHJvcGVydHkgaXNcbiAgICAgICAgICAgIC8vIGRlZmluZWQgb24gdGhlIGluc3RhbmNlLiBBZnRlciB0aGF0IGl0IHdvcmtzIGZpbmUsIGV2ZW4gaWYgdGhpcyBwcm9wZXJ0eSBpcyBkZWxldGVkLlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFkbS5hcnJheSwgXCIwXCIsIEVOVFJZXzApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5pbnRlcmNlcHQoaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5ID09PSB2b2lkIDApIHsgZmlyZUltbWVkaWF0ZWx5ID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vYngub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZSgwKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJyYXlzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcnJheXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRtb2J4LmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkodGhpcy5wZWVrKCksIGFycmF5cy5tYXAoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIChpc09ic2VydmFibGVBcnJheShhKSA/IGEucGVlaygpIDogYSk7IH0pKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdJdGVtcykge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5zcGxpY2VXaXRoQXJyYXkoMCwgdGhpcy4kbW9ieC52YWx1ZXMubGVuZ3RoLCBuZXdJdGVtcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyB0aGlzIGFycmF5IGJhY2sgdG8gYSAoc2hhbGxvdykgamF2YXNjcmlwdCBzdHJ1Y3R1cmUuXG4gICAgICogRm9yIGEgZGVlcCBjbG9uZSB1c2UgbW9ieC50b0pTXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS50b0pTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbGljZSgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVzZWQgYnkgSlNPTi5zdHJpbmdpZnlcbiAgICAgICAgcmV0dXJuIHRoaXMudG9KUygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRtb2J4LmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vYnguZGVoYW5jZVZhbHVlcyh0aGlzLiRtb2J4LnZhbHVlcyk7XG4gICAgfTtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9maW5kXG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGhpc0FyZywgZnJvbUluZGV4KSB7XG4gICAgICAgIGlmIChmcm9tSW5kZXggPT09IHZvaWQgMCkgeyBmcm9tSW5kZXggPSAwOyB9XG4gICAgICAgIHZhciBpZHggPSB0aGlzLmZpbmRJbmRleC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gaWR4ID09PSAtMSA/IHVuZGVmaW5lZCA6IHRoaXMuZ2V0KGlkeCk7XG4gICAgfTtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9maW5kSW5kZXhcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uIChwcmVkaWNhdGUsIHRoaXNBcmcsIGZyb21JbmRleCkge1xuICAgICAgICBpZiAoZnJvbUluZGV4ID09PSB2b2lkIDApIHsgZnJvbUluZGV4ID0gMDsgfVxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLnBlZWsoKSwgbCA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IGZyb21JbmRleDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCBpdGVtc1tpXSwgaSwgdGhpcykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICAgIC8qXG4gICAgICogZnVuY3Rpb25zIHRoYXQgZG8gYWx0ZXIgdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiB0aGUgYXJyYXksIChiYXNlZCBvbiBsaWIuZXM2LmQudHMpXG4gICAgICogc2luY2UgdGhlc2UgZnVuY3Rpb25zIGFsdGVyIHRoZSBpbm5lciBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMuXG4gICAgICogQmVjYXVzZSB0aGUgaGF2ZSBzaWRlIGVmZmVjdHMsIHRoZXkgc2hvdWxkIG5vdCBiZSB1c2VkIGluIGNvbXB1dGVkIGZ1bmN0aW9uLFxuICAgICAqIGFuZCBmb3IgdGhhdCByZWFzb24gdGhlIGRvIG5vdCBjYWxsIGRlcGVuZGVuY3lTdGF0ZS5ub3RpZnlPYnNlcnZlZFxuICAgICAqL1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuc3BsaWNlID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCkge1xuICAgICAgICB2YXIgbmV3SXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG5ld0l0ZW1zW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5zcGxpY2VXaXRoQXJyYXkoaW5kZXgpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRtb2J4LnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLiRtb2J4LnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuc3BsaWNlV2l0aEFycmF5ID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG1vYnguc3BsaWNlV2l0aEFycmF5KGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGl0ZW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFkbSA9IHRoaXMuJG1vYng7XG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoYWRtLnZhbHVlcy5sZW5ndGgsIDAsIGl0ZW1zKTtcbiAgICAgICAgcmV0dXJuIGFkbS52YWx1ZXMubGVuZ3RoO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwbGljZShNYXRoLm1heCh0aGlzLiRtb2J4LnZhbHVlcy5sZW5ndGggLSAxLCAwKSwgMSlbMF07XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRtID0gdGhpcy4kbW9ieDtcbiAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheSgwLCAwLCBpdGVtcyk7XG4gICAgICAgIHJldHVybiBhZG0udmFsdWVzLmxlbmd0aDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gcmV2ZXJzZSBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XG4gICAgICAgIC8vIHdoaWNoIG1ha2VzIGl0IGJvdGggYSAnZGVyaXZhdGlvbicgYW5kIGEgJ211dGF0aW9uJy5cbiAgICAgICAgLy8gc28gd2UgZGV2aWF0ZSBmcm9tIHRoZSBkZWZhdWx0IGFuZCBqdXN0IG1ha2UgaXQgYW4gZGVydml0YXRpb25cbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5zbGljZSgpO1xuICAgICAgICByZXR1cm4gY2xvbmUucmV2ZXJzZS5hcHBseShjbG9uZSwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIChjb21wYXJlRm4pIHtcbiAgICAgICAgLy8gc29ydCBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XG4gICAgICAgIC8vIHdoaWNoIGdvZXMgYWdhaW5zdCBhbGwgZ29vZCBwcmFjdGljZXMuIExldCdzIG5vdCBjaGFuZ2UgdGhlIGFycmF5IGluIHBsYWNlIVxuICAgICAgICB2YXIgY2xvbmUgPSB0aGlzLnNsaWNlKCk7XG4gICAgICAgIHJldHVybiBjbG9uZS5zb3J0LmFwcGx5KGNsb25lLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuJG1vYnguZGVoYW5jZVZhbHVlcyh0aGlzLiRtb2J4LnZhbHVlcykuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tJbmRleChpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBJbmRleCBvdXQgb2YgYm91bmRzOiBcIiArIGluZGV4ICsgXCIgaXMgbmVnYXRpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy4kbW9ieC52YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBJbmRleCBvdXQgb2YgYm91bmRzOiBcIiArIGluZGV4ICsgXCIgaXMgbm90IHNtYWxsZXIgdGhhbiBcIiArIGxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tJbmRleC5jYWxsKHRoaXMsIGZyb21JbmRleCk7XG4gICAgICAgIGNoZWNrSW5kZXguY2FsbCh0aGlzLCB0b0luZGV4KTtcbiAgICAgICAgaWYgKGZyb21JbmRleCA9PT0gdG9JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvbGRJdGVtcyA9IHRoaXMuJG1vYngudmFsdWVzO1xuICAgICAgICB2YXIgbmV3SXRlbXM7XG4gICAgICAgIGlmIChmcm9tSW5kZXggPCB0b0luZGV4KSB7XG4gICAgICAgICAgICBuZXdJdGVtcyA9IG9sZEl0ZW1zLnNsaWNlKDAsIGZyb21JbmRleCkuY29uY2F0KG9sZEl0ZW1zLnNsaWNlKGZyb21JbmRleCArIDEsIHRvSW5kZXggKyAxKSwgW1xuICAgICAgICAgICAgICAgIG9sZEl0ZW1zW2Zyb21JbmRleF1cbiAgICAgICAgICAgIF0sIG9sZEl0ZW1zLnNsaWNlKHRvSW5kZXggKyAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0b0luZGV4IDwgZnJvbUluZGV4XG4gICAgICAgICAgICBuZXdJdGVtcyA9IG9sZEl0ZW1zLnNsaWNlKDAsIHRvSW5kZXgpLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgb2xkSXRlbXNbZnJvbUluZGV4XVxuICAgICAgICAgICAgXSwgb2xkSXRlbXMuc2xpY2UodG9JbmRleCwgZnJvbUluZGV4KSwgb2xkSXRlbXMuc2xpY2UoZnJvbUluZGV4ICsgMSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVwbGFjZShuZXdJdGVtcyk7XG4gICAgfTtcbiAgICAvLyBTZWUgIzczNCwgaW4gY2FzZSBwcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIHVucmVsaWFibGUuLi5cbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgaW1wbCA9IHRoaXMuJG1vYng7XG4gICAgICAgIGlmIChpbXBsKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCBpbXBsLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbXBsLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1wbC5kZWhhbmNlVmFsdWUoaW1wbC52YWx1ZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4LmFycmF5XSBBdHRlbXB0IHRvIHJlYWQgYW4gYXJyYXkgaW5kZXggKFwiICsgaW5kZXggKyBcIikgdGhhdCBpcyBvdXQgb2YgYm91bmRzIChcIiArIGltcGxcbiAgICAgICAgICAgICAgICAudmFsdWVzXG4gICAgICAgICAgICAgICAgLmxlbmd0aCArIFwiKS4gUGxlYXNlIGNoZWNrIGxlbmd0aCBmaXJzdC4gT3V0IG9mIGJvdW5kIGluZGljZXMgd2lsbCBub3QgYmUgdHJhY2tlZCBieSBNb2JYXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvLyBTZWUgIzczNCwgaW4gY2FzZSBwcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIHVucmVsaWFibGUuLi5cbiAgICBPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChpbmRleCwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXMuJG1vYng7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBhZG0udmFsdWVzO1xuICAgICAgICBpZiAoaW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgYXQgaW5kZXggaW4gcmFuZ2VcbiAgICAgICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKGFkbS5hdG9tKTtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHZhbHVlc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKGFkbSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKGFkbSwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZhbHVlID0gYWRtLmVuaGFuY2VyKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZCA9IG5ld1ZhbHVlICE9PSBvbGRWYWx1ZTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIGFkbS5ub3RpZnlBcnJheUNoaWxkVXBkYXRlKGluZGV4LCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBhZGQgYSBuZXcgaXRlbVxuICAgICAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgMCwgW25ld1ZhbHVlXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBvdXQgb2YgYm91bmRzXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC5hcnJheV0gSW5kZXggb3V0IG9mIGJvdW5kcywgXCIgKyBpbmRleCArIFwiIGlzIGxhcmdlciB0aGFuIFwiICsgdmFsdWVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlQXJyYXk7XG59KFN0dWJBcnJheSkpO1xuZGVjbGFyZUl0ZXJhdG9yKE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJyYXlBc0l0ZXJhdG9yKHRoaXMuc2xpY2UoKSk7XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLCBcImxlbmd0aFwiLCB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9ieC5nZXRBcnJheUxlbmd0aCgpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAobmV3TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuJG1vYnguc2V0QXJyYXlMZW5ndGgobmV3TGVuZ3RoKTtcbiAgICB9XG59KTtcbltcbiAgICBcImV2ZXJ5XCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZvckVhY2hcIixcbiAgICBcImluZGV4T2ZcIixcbiAgICBcImpvaW5cIixcbiAgICBcImxhc3RJbmRleE9mXCIsXG4gICAgXCJtYXBcIixcbiAgICBcInJlZHVjZVwiLFxuICAgIFwicmVkdWNlUmlnaHRcIixcbiAgICBcInNsaWNlXCIsXG4gICAgXCJzb21lXCIsXG4gICAgXCJ0b1N0cmluZ1wiLFxuICAgIFwidG9Mb2NhbGVTdHJpbmdcIlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChmdW5jTmFtZSkge1xuICAgIHZhciBiYXNlRnVuYyA9IEFycmF5LnByb3RvdHlwZVtmdW5jTmFtZV07XG4gICAgaW52YXJpYW50KHR5cGVvZiBiYXNlRnVuYyA9PT0gXCJmdW5jdGlvblwiLCBcIkJhc2UgZnVuY3Rpb24gbm90IGRlZmluZWQgb24gQXJyYXkgcHJvdG90eXBlOiAnXCIgKyBmdW5jTmFtZSArIFwiJ1wiKTtcbiAgICBhZGRIaWRkZW5Qcm9wKE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIGZ1bmNOYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBiYXNlRnVuYy5hcHBseSh0aGlzLnBlZWsoKSwgYXJndW1lbnRzKTtcbiAgICB9KTtcbn0pO1xuLyoqXG4gKiBXZSBkb24ndCB3YW50IHRob3NlIHRvIHNob3cgdXAgaW4gYGZvciAoY29uc3Qga2V5IGluIGFyKWAgLi4uXG4gKi9cbm1ha2VOb25FbnVtZXJhYmxlKE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIFtcbiAgICBcImNvbnN0cnVjdG9yXCIsXG4gICAgXCJpbnRlcmNlcHRcIixcbiAgICBcIm9ic2VydmVcIixcbiAgICBcImNsZWFyXCIsXG4gICAgXCJjb25jYXRcIixcbiAgICBcImdldFwiLFxuICAgIFwicmVwbGFjZVwiLFxuICAgIFwidG9KU1wiLFxuICAgIFwidG9KU09OXCIsXG4gICAgXCJwZWVrXCIsXG4gICAgXCJmaW5kXCIsXG4gICAgXCJmaW5kSW5kZXhcIixcbiAgICBcInNwbGljZVwiLFxuICAgIFwic3BsaWNlV2l0aEFycmF5XCIsXG4gICAgXCJwdXNoXCIsXG4gICAgXCJwb3BcIixcbiAgICBcInNldFwiLFxuICAgIFwic2hpZnRcIixcbiAgICBcInVuc2hpZnRcIixcbiAgICBcInJldmVyc2VcIixcbiAgICBcInNvcnRcIixcbiAgICBcInJlbW92ZVwiLFxuICAgIFwibW92ZVwiLFxuICAgIFwidG9TdHJpbmdcIixcbiAgICBcInRvTG9jYWxlU3RyaW5nXCJcbl0pO1xuLy8gU2VlICMzNjRcbnZhciBFTlRSWV8wID0gY3JlYXRlQXJyYXlFbnRyeURlc2NyaXB0b3IoMCk7XG5mdW5jdGlvbiBjcmVhdGVBcnJheUVudHJ5RGVzY3JpcHRvcihpbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IENoZWNrIGB0aGlzYD8sIHNlZSAjNzUyP1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGluZGV4LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQXJyYXlCdWZmZXJJdGVtKGluZGV4KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVBcnJheS5wcm90b3R5cGUsIFwiXCIgKyBpbmRleCwgY3JlYXRlQXJyYXlFbnRyeURlc2NyaXB0b3IoaW5kZXgpKTtcbn1cbmZ1bmN0aW9uIHJlc2VydmVBcnJheUJ1ZmZlcihtYXgpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkU7IGluZGV4IDwgbWF4OyBpbmRleCsrKVxuICAgICAgICBjcmVhdGVBcnJheUJ1ZmZlckl0ZW0oaW5kZXgpO1xuICAgIE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUgPSBtYXg7XG59XG5yZXNlcnZlQXJyYXlCdWZmZXIoMTAwMCk7XG52YXIgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbik7XG5mdW5jdGlvbiBpc09ic2VydmFibGVBcnJheSh0aGluZykge1xuICAgIHJldHVybiBpc09iamVjdCh0aGluZykgJiYgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbih0aGluZy4kbW9ieCk7XG59XG5cbnZhciBVTkNIQU5HRUQgPSB7fTtcbnZhciBPYnNlcnZhYmxlVmFsdWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPYnNlcnZhYmxlVmFsdWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBlbmhhbmNlciwgbmFtZSwgbm90aWZ5U3B5KSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgaWYgKG5vdGlmeVNweSA9PT0gdm9pZCAwKSB7IG5vdGlmeVNweSA9IHRydWU7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcbiAgICAgICAgX3RoaXMuaGFzVW5yZXBvcnRlZENoYW5nZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5kZWhhbmNlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgX3RoaXMudmFsdWUgPSBlbmhhbmNlcih2YWx1ZSwgdW5kZWZpbmVkLCBuYW1lKTtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBpc1NweUVuYWJsZWQoKSkge1xuICAgICAgICAgICAgLy8gb25seSBub3RpZnkgc3B5IGlmIHRoaXMgaXMgYSBzdGFuZC1hbG9uZSBvYnNlcnZhYmxlXG4gICAgICAgICAgICBzcHlSZXBvcnQoeyB0eXBlOiBcImNyZWF0ZVwiLCBvYmplY3Q6IF90aGlzLCBuZXdWYWx1ZTogX3RoaXMudmFsdWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucHJlcGFyZU5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBVTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkpIHtcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5wcmVwYXJlTmV3VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcyk7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gVU5DSEFOR0VEO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXBwbHkgbW9kaWZpZXJcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmVuaGFuY2VyKG5ld1ZhbHVlLCB0aGlzLnZhbHVlLCB0aGlzLm5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSAhPT0gbmV3VmFsdWUgPyBuZXdWYWx1ZSA6IFVOQ0hBTkdFRDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuc2V0TmV3VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgaWYgKGhhc0xpc3RlbmVycyh0aGlzKSkge1xuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpXG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyBcIltcIiArIHRoaXMudmFsdWUgKyBcIl1cIjtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVWYWx1ZTtcbn0oQmFzZUF0b20pKTtcbk9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGVbcHJpbWl0aXZlU3ltYm9sKCldID0gT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS52YWx1ZU9mO1xudmFyIGlzT2JzZXJ2YWJsZVZhbHVlID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVWYWx1ZVwiLCBPYnNlcnZhYmxlVmFsdWUpO1xuXG52YXIgbWVzc2FnZXMgPSB7XG4gICAgbTAwMTogXCJJdCBpcyBub3QgYWxsb3dlZCB0byBhc3NpZ24gbmV3IHZhbHVlcyB0byBAYWN0aW9uIGZpZWxkc1wiLFxuICAgIG0wMDI6IFwiYHJ1bkluQWN0aW9uYCBleHBlY3RzIGEgZnVuY3Rpb25cIixcbiAgICBtMDAzOiBcImBydW5JbkFjdGlvbmAgZXhwZWN0cyBhIGZ1bmN0aW9uIHdpdGhvdXQgYXJndW1lbnRzXCIsXG4gICAgbTAwNDogXCJhdXRvcnVuIGV4cGVjdHMgYSBmdW5jdGlvblwiLFxuICAgIG0wMDU6IFwiV2FybmluZzogYXR0ZW1wdGVkIHRvIHBhc3MgYW4gYWN0aW9uIHRvIGF1dG9ydW4uIEFjdGlvbnMgYXJlIHVudHJhY2tlZCBhbmQgd2lsbCBub3QgdHJpZ2dlciBvbiBzdGF0ZSBjaGFuZ2VzLiBVc2UgYHJlYWN0aW9uYCBvciB3cmFwIG9ubHkgeW91ciBzdGF0ZSBtb2RpZmljYXRpb24gY29kZSBpbiBhbiBhY3Rpb24uXCIsXG4gICAgbTAwNjogXCJXYXJuaW5nOiBhdHRlbXB0ZWQgdG8gcGFzcyBhbiBhY3Rpb24gdG8gYXV0b3J1bkFzeW5jLiBBY3Rpb25zIGFyZSB1bnRyYWNrZWQgYW5kIHdpbGwgbm90IHRyaWdnZXIgb24gc3RhdGUgY2hhbmdlcy4gVXNlIGByZWFjdGlvbmAgb3Igd3JhcCBvbmx5IHlvdXIgc3RhdGUgbW9kaWZpY2F0aW9uIGNvZGUgaW4gYW4gYWN0aW9uLlwiLFxuICAgIG0wMDc6IFwicmVhY3Rpb24gb25seSBhY2NlcHRzIDIgb3IgMyBhcmd1bWVudHMuIElmIG1pZ3JhdGluZyBmcm9tIE1vYlggMiwgcGxlYXNlIHByb3ZpZGUgYW4gb3B0aW9ucyBvYmplY3RcIixcbiAgICBtMDA4OiBcIndyYXBwaW5nIHJlYWN0aW9uIGV4cHJlc3Npb24gaW4gYGFzUmVmZXJlbmNlYCBpcyBubyBsb25nZXIgc3VwcG9ydGVkLCB1c2Ugb3B0aW9ucyBvYmplY3QgaW5zdGVhZFwiLFxuICAgIG0wMDk6IFwiQGNvbXB1dGVkIGNhbiBvbmx5IGJlIHVzZWQgb24gZ2V0dGVyIGZ1bmN0aW9ucywgbGlrZTogJ0Bjb21wdXRlZCBnZXQgbXlQcm9wcygpIHsgcmV0dXJuIC4uLjsgfScuIEl0IGxvb2tzIGxpa2UgaXQgd2FzIHVzZWQgb24gYSBwcm9wZXJ0eS5cIixcbiAgICBtMDEwOiBcIkBjb21wdXRlZCBjYW4gb25seSBiZSB1c2VkIG9uIGdldHRlciBmdW5jdGlvbnMsIGxpa2U6ICdAY29tcHV0ZWQgZ2V0IG15UHJvcHMoKSB7IHJldHVybiAuLi47IH0nXCIsXG4gICAgbTAxMTogXCJGaXJzdCBhcmd1bWVudCB0byBgY29tcHV0ZWRgIHNob3VsZCBiZSBhbiBleHByZXNzaW9uLiBJZiB1c2luZyBjb21wdXRlZCBhcyBkZWNvcmF0b3IsIGRvbid0IHBhc3MgaXQgYXJndW1lbnRzXCIsXG4gICAgbTAxMjogXCJjb21wdXRlZCB0YWtlcyBvbmUgb3IgdHdvIGFyZ3VtZW50cyBpZiB1c2VkIGFzIGZ1bmN0aW9uXCIsXG4gICAgbTAxMzogXCJbbW9ieC5leHByXSAnZXhwcicgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbnNpZGUgb3RoZXIgcmVhY3RpdmUgZnVuY3Rpb25zLlwiLFxuICAgIG0wMTQ6IFwiZXh0ZW5kT2JzZXJ2YWJsZSBleHBlY3RlZCAyIG9yIG1vcmUgYXJndW1lbnRzXCIsXG4gICAgbTAxNTogXCJleHRlbmRPYnNlcnZhYmxlIGV4cGVjdHMgYW4gb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50XCIsXG4gICAgbTAxNjogXCJleHRlbmRPYnNlcnZhYmxlIHNob3VsZCBub3QgYmUgdXNlZCBvbiBtYXBzLCB1c2UgbWFwLm1lcmdlIGluc3RlYWRcIixcbiAgICBtMDE3OiBcImFsbCBhcmd1bWVudHMgb2YgZXh0ZW5kT2JzZXJ2YWJsZSBzaG91bGQgYmUgb2JqZWN0c1wiLFxuICAgIG0wMTg6IFwiZXh0ZW5kaW5nIGFuIG9iamVjdCB3aXRoIGFub3RoZXIgb2JzZXJ2YWJsZSAob2JqZWN0KSBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgY29uc3RydWN0IGFuIGV4cGxpY2l0IHByb3BlcnR5bWFwLCB1c2luZyBgdG9KU2AgaWYgbmVlZC4gU2VlIGlzc3VlICM1NDBcIixcbiAgICBtMDE5OiBcIlttb2J4LmlzT2JzZXJ2YWJsZV0gaXNPYnNlcnZhYmxlKG9iamVjdCwgcHJvcGVydHlOYW1lKSBpcyBub3Qgc3VwcG9ydGVkIGZvciBhcnJheXMgYW5kIG1hcHMuIFVzZSBtYXAuaGFzIG9yIGFycmF5Lmxlbmd0aCBpbnN0ZWFkLlwiLFxuICAgIG0wMjA6IFwibW9kaWZpZXJzIGNhbiBvbmx5IGJlIHVzZWQgZm9yIGluZGl2aWR1YWwgb2JqZWN0IHByb3BlcnRpZXNcIixcbiAgICBtMDIxOiBcIm9ic2VydmFibGUgZXhwZWN0cyB6ZXJvIG9yIG9uZSBhcmd1bWVudHNcIixcbiAgICBtMDIyOiBcIkBvYnNlcnZhYmxlIGNhbiBub3QgYmUgdXNlZCBvbiBnZXR0ZXJzLCB1c2UgQGNvbXB1dGVkIGluc3RlYWRcIixcbiAgICBtMDI0OiBcIndoeVJ1bigpIGNhbiBvbmx5IGJlIHVzZWQgaWYgYSBkZXJpdmF0aW9uIGlzIGFjdGl2ZSwgb3IgYnkgcGFzc2luZyBhbiBjb21wdXRlZCB2YWx1ZSAvIHJlYWN0aW9uIGV4cGxpY2l0bHkuIElmIHlvdSBpbnZva2VkIHdoeVJ1biBmcm9tIGluc2lkZSBhIGNvbXB1dGF0aW9uOyB0aGUgY29tcHV0YXRpb24gaXMgY3VycmVudGx5IHN1c3BlbmRlZCBidXQgcmUtZXZhbHVhdGluZyBiZWNhdXNlIHNvbWVib2R5IHJlcXVlc3RlZCBpdHMgdmFsdWUuXCIsXG4gICAgbTAyNTogXCJ3aHlSdW4gY2FuIG9ubHkgYmUgdXNlZCBvbiByZWFjdGlvbnMgYW5kIGNvbXB1dGVkIHZhbHVlc1wiLFxuICAgIG0wMjY6IFwiYGFjdGlvbmAgY2FuIG9ubHkgYmUgaW52b2tlZCBvbiBmdW5jdGlvbnNcIixcbiAgICBtMDI4OiBcIkl0IGlzIG5vdCBhbGxvd2VkIHRvIHNldCBgdXNlU3RyaWN0YCB3aGVuIGEgZGVyaXZhdGlvbiBpcyBydW5uaW5nXCIsXG4gICAgbTAyOTogXCJJTlRFUk5BTCBFUlJPUiBvbmx5IG9uQmVjb21lVW5vYnNlcnZlZCBzaG91bGRuJ3QgYmUgY2FsbGVkIHR3aWNlIGluIGEgcm93XCIsXG4gICAgbTAzMGE6IFwiU2luY2Ugc3RyaWN0LW1vZGUgaXMgZW5hYmxlZCwgY2hhbmdpbmcgb2JzZXJ2ZWQgb2JzZXJ2YWJsZSB2YWx1ZXMgb3V0c2lkZSBhY3Rpb25zIGlzIG5vdCBhbGxvd2VkLiBQbGVhc2Ugd3JhcCB0aGUgY29kZSBpbiBhbiBgYWN0aW9uYCBpZiB0aGlzIGNoYW5nZSBpcyBpbnRlbmRlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIixcbiAgICBtMDMwYjogXCJTaWRlIGVmZmVjdHMgbGlrZSBjaGFuZ2luZyBzdGF0ZSBhcmUgbm90IGFsbG93ZWQgYXQgdGhpcyBwb2ludC4gQXJlIHlvdSB0cnlpbmcgdG8gbW9kaWZ5IHN0YXRlIGZyb20sIGZvciBleGFtcGxlLCB0aGUgcmVuZGVyIGZ1bmN0aW9uIG9mIGEgUmVhY3QgY29tcG9uZW50PyBUcmllZCB0byBtb2RpZnk6IFwiLFxuICAgIG0wMzE6IFwiQ29tcHV0ZWQgdmFsdWVzIGFyZSBub3QgYWxsb3dlZCB0byBjYXVzZSBzaWRlIGVmZmVjdHMgYnkgY2hhbmdpbmcgb2JzZXJ2YWJsZXMgdGhhdCBhcmUgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIixcbiAgICBtMDMyOiBcIiogVGhpcyBjb21wdXRhdGlvbiBpcyBzdXNwZW5kZWQgKG5vdCBpbiB1c2UgYnkgYW55IHJlYWN0aW9uKSBhbmQgd29uJ3QgcnVuIGF1dG9tYXRpY2FsbHkuXFxuXHREaWRuJ3QgZXhwZWN0IHRoaXMgY29tcHV0YXRpb24gdG8gYmUgc3VzcGVuZGVkIGF0IHRoaXMgcG9pbnQ/XFxuXHQgIDEuIE1ha2Ugc3VyZSB0aGlzIGNvbXB1dGF0aW9uIGlzIHVzZWQgYnkgYSByZWFjdGlvbiAocmVhY3Rpb24sIGF1dG9ydW4sIG9ic2VydmVyKS5cXG5cdCAgMi4gQ2hlY2sgd2hldGhlciB5b3UgYXJlIHVzaW5nIHRoaXMgY29tcHV0YXRpb24gc3luY2hyb25vdXNseSAoaW4gdGhlIHNhbWUgc3RhY2sgYXMgdGhleSByZWFjdGlvbiB0aGF0IG5lZWRzIGl0KS5cIixcbiAgICBtMDMzOiBcImBvYnNlcnZlYCBkb2Vzbid0IHN1cHBvcnQgdGhlIGZpcmUgaW1tZWRpYXRlbHkgcHJvcGVydHkgZm9yIG9ic2VydmFibGUgbWFwcy5cIixcbiAgICBtMDM0OiBcImBtb2J4Lm1hcGAgaXMgZGVwcmVjYXRlZCwgdXNlIGBuZXcgT2JzZXJ2YWJsZU1hcGAgb3IgYG1vYngub2JzZXJ2YWJsZS5tYXBgIGluc3RlYWRcIixcbiAgICBtMDM1OiBcIkNhbm5vdCBtYWtlIHRoZSBkZXNpZ25hdGVkIG9iamVjdCBvYnNlcnZhYmxlOyBpdCBpcyBub3QgZXh0ZW5zaWJsZVwiLFxuICAgIG0wMzY6IFwiSXQgaXMgbm90IHBvc3NpYmxlIHRvIGdldCBpbmRleCBhdG9tcyBmcm9tIGFycmF5c1wiLFxuICAgIG0wMzc6IFwiSGkgdGhlcmUhIEknbSBzb3JyeSB5b3UgaGF2ZSBqdXN0IHJ1biBpbnRvIGFuIGV4Y2VwdGlvbi5cXG5JZiB5b3VyIGRlYnVnZ2VyIGVuZHMgdXAgaGVyZSwga25vdyB0aGF0IHNvbWUgcmVhY3Rpb24gKGxpa2UgdGhlIHJlbmRlcigpIG9mIGFuIG9ic2VydmVyIGNvbXBvbmVudCwgYXV0b3J1biBvciByZWFjdGlvbilcXG50aHJldyBhbiBleGNlcHRpb24gYW5kIHRoYXQgbW9ieCBjYXVnaHQgaXQsIHRvIGF2b2lkIHRoYXQgaXQgYnJpbmdzIHRoZSByZXN0IG9mIHlvdXIgYXBwbGljYXRpb24gZG93bi5cXG5UaGUgb3JpZ2luYWwgY2F1c2Ugb2YgdGhlIGV4Y2VwdGlvbiAodGhlIGNvZGUgdGhhdCBjYXVzZWQgdGhpcyByZWFjdGlvbiB0byBydW4gKGFnYWluKSksIGlzIHN0aWxsIGluIHRoZSBzdGFjay5cXG5cXG5Ib3dldmVyLCBtb3JlIGludGVyZXN0aW5nIGlzIHRoZSBhY3R1YWwgc3RhY2sgdHJhY2Ugb2YgdGhlIGVycm9yIGl0c2VsZi5cXG5Ib3BlZnVsbHkgdGhlIGVycm9yIGlzIGFuIGluc3RhbmNlb2YgRXJyb3IsIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHlvdSBjYW4gaW5zcGVjdCB0aGUgb3JpZ2luYWwgc3RhY2sgb2YgdGhlIGVycm9yIGZyb20gd2hlcmUgaXQgd2FzIHRocm93bi5cXG5TZWUgYGVycm9yLnN0YWNrYCBwcm9wZXJ0eSwgb3IgcHJlc3MgdGhlIHZlcnkgc3VidGxlIFxcXCIoLi4uKVxcXCIgbGluayB5b3Ugc2VlIG5lYXIgdGhlIGNvbnNvbGUuZXJyb3IgbWVzc2FnZSB0aGF0IHByb2JhYmx5IGJyb3VnaHQgeW91IGhlcmUuXFxuVGhhdCBzdGFjayBpcyBtb3JlIGludGVyZXN0aW5nIHRoYW4gdGhlIHN0YWNrIG9mIHRoaXMgY29uc29sZS5lcnJvciBpdHNlbGYuXFxuXFxuSWYgdGhlIGV4Y2VwdGlvbiB5b3Ugc2VlIGlzIGFuIGV4Y2VwdGlvbiB5b3UgY3JlYXRlZCB5b3Vyc2VsZiwgbWFrZSBzdXJlIHRvIHVzZSBgdGhyb3cgbmV3IEVycm9yKFxcXCJPb3BzXFxcIilgIGluc3RlYWQgb2YgYHRocm93IFxcXCJPb3BzXFxcImAsXFxuYmVjYXVzZSB0aGUgamF2YXNjcmlwdCBlbnZpcm9ubWVudCB3aWxsIG9ubHkgcHJlc2VydmUgdGhlIG9yaWdpbmFsIHN0YWNrIHRyYWNlIGluIHRoZSBmaXJzdCBmb3JtLlxcblxcbllvdSBjYW4gYWxzbyBtYWtlIHN1cmUgdGhlIGRlYnVnZ2VyIHBhdXNlcyB0aGUgbmV4dCB0aW1lIHRoaXMgdmVyeSBzYW1lIGV4Y2VwdGlvbiBpcyB0aHJvd24gYnkgZW5hYmxpbmcgXFxcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25cXFwiLlxcbihOb3RlIHRoYXQgaXQgbWlnaHQgcGF1c2Ugb24gbWFueSBvdGhlciwgdW5yZWxhdGVkIGV4Y2VwdGlvbiBhcyB3ZWxsKS5cXG5cXG5JZiB0aGF0IGFsbCBkb2Vzbid0IGhlbHAgeW91IG91dCwgZmVlbCBmcmVlIHRvIG9wZW4gYW4gaXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3VlcyFcXG5cIixcbiAgICBtMDM4OiBcIk1pc3NpbmcgaXRlbXMgaW4gdGhpcyBsaXN0P1xcbiAgICAxLiBDaGVjayB3aGV0aGVyIGFsbCB1c2VkIHZhbHVlcyBhcmUgcHJvcGVybHkgbWFya2VkIGFzIG9ic2VydmFibGUgKHVzZSBpc09ic2VydmFibGUgdG8gdmVyaWZ5KVxcbiAgICAyLiBNYWtlIHN1cmUgeW91IGRpZG4ndCBkZXJlZmVyZW5jZSB2YWx1ZXMgdG9vIGVhcmx5LiBNb2JYIG9ic2VydmVzIHByb3BzLCBub3QgcHJpbWl0aXZlcy4gRS5nOiB1c2UgJ3BlcnNvbi5uYW1lJyBpbnN0ZWFkIG9mICduYW1lJyBpbiB5b3VyIGNvbXB1dGF0aW9uLlxcblwiXG59O1xuZnVuY3Rpb24gZ2V0TWVzc2FnZShpZCkge1xuICAgIHJldHVybiBtZXNzYWdlc1tpZF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbikge1xuICAgIGludmFyaWFudCh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiwgZ2V0TWVzc2FnZShcIm0wMjZcIikpO1xuICAgIGludmFyaWFudCh0eXBlb2YgYWN0aW9uTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBhY3Rpb25OYW1lLmxlbmd0aCA+IDAsIFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xuICAgIHZhciByZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmVzLm9yaWdpbmFsRm4gPSBmbjtcbiAgICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gZXhlY3V0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgICB2YXIgcnVuSW5mbyA9IHN0YXJ0QWN0aW9uKGFjdGlvbk5hbWUsIGZuLCBzY29wZSwgYXJncyk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlLCBhcmdzKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGVuZEFjdGlvbihydW5JbmZvKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdGFydEFjdGlvbihhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCkgJiYgISFhY3Rpb25OYW1lO1xuICAgIHZhciBzdGFydFRpbWUgPSAwO1xuICAgIGlmIChub3RpZnlTcHkpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIGwgPSAoYXJncyAmJiBhcmdzLmxlbmd0aCkgfHwgMDtcbiAgICAgICAgdmFyIGZsYXR0ZW5kQXJncyA9IG5ldyBBcnJheShsKTtcbiAgICAgICAgaWYgKGwgPiAwKVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICAgICAgZmxhdHRlbmRBcmdzW2ldID0gYXJnc1tpXTtcbiAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xuICAgICAgICAgICAgdHlwZTogXCJhY3Rpb25cIixcbiAgICAgICAgICAgIG5hbWU6IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBmbjogZm4sXG4gICAgICAgICAgICBvYmplY3Q6IHNjb3BlLFxuICAgICAgICAgICAgYXJndW1lbnRzOiBmbGF0dGVuZEFyZ3NcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBwcmV2RGVyaXZhdGlvbiA9IHVudHJhY2tlZFN0YXJ0KCk7XG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHZhciBwcmV2QWxsb3dTdGF0ZUNoYW5nZXMgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByZXZEZXJpdmF0aW9uOiBwcmV2RGVyaXZhdGlvbixcbiAgICAgICAgcHJldkFsbG93U3RhdGVDaGFuZ2VzOiBwcmV2QWxsb3dTdGF0ZUNoYW5nZXMsXG4gICAgICAgIG5vdGlmeVNweTogbm90aWZ5U3B5LFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZVxuICAgIH07XG59XG5mdW5jdGlvbiBlbmRBY3Rpb24ocnVuSW5mbykge1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHJ1bkluZm8ucHJldkFsbG93U3RhdGVDaGFuZ2VzKTtcbiAgICBlbmRCYXRjaCgpO1xuICAgIHVudHJhY2tlZEVuZChydW5JbmZvLnByZXZEZXJpdmF0aW9uKTtcbiAgICBpZiAocnVuSW5mby5ub3RpZnlTcHkpXG4gICAgICAgIHNweVJlcG9ydEVuZCh7IHRpbWU6IERhdGUubm93KCkgLSBydW5JbmZvLnN0YXJ0VGltZSB9KTtcbn1cbmZ1bmN0aW9uIHVzZVN0cmljdChzdHJpY3QpIHtcbiAgICBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID09PSBudWxsLCBnZXRNZXNzYWdlKFwibTAyOFwiKSk7XG4gICAgZ2xvYmFsU3RhdGUuc3RyaWN0TW9kZSA9IHN0cmljdDtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9ICFzdHJpY3Q7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGVFbmFibGVkKCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZS5zdHJpY3RNb2RlO1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXMoYWxsb3dTdGF0ZUNoYW5nZXMsIGZ1bmMpIHtcbiAgICAvLyBUT0RPOiBkZXByZWNhdGUgLyByZWZhY3RvciB0aGlzIGZ1bmN0aW9uIGluIG5leHQgbWFqb3JcbiAgICAvLyBDdXJyZW50bHkgb25seSB1c2VkIGJ5IGBAb2JzZXJ2ZXJgXG4gICAgLy8gUHJvcG9zZWQgY2hhbmdlOiByZW1vdmUgZmlyc3QgcGFyYW0sIHJlbmFtZSB0byBgZm9yYmlkU3RhdGVDaGFuZ2VzYCxcbiAgICAvLyByZXF1aXJlIGVycm9yIGNhbGxiYWNrIGluc3RlYWQgb2YgdGhlIGhhcmRjb2RlZCBlcnJvciBtZXNzYWdlIG5vdyB1c2VkXG4gICAgLy8gVXNlIGBpbkFjdGlvbmAgaW5zdGVhZCBvZiBhbGxvd1N0YXRlQ2hhbmdlcyBpbiBkZXJpdmF0aW9uLnRzIHRvIGNoZWNrIHN0cmljdE1vZGVcbiAgICB2YXIgcHJldiA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQoYWxsb3dTdGF0ZUNoYW5nZXMpO1xuICAgIHZhciByZXM7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzID0gZnVuYygpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldik7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKSB7XG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcztcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGFsbG93U3RhdGVDaGFuZ2VzO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldikge1xuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gcHJldjtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgZGVjb3JhdG9yLCB0aGF0IG5vcm1hbGl6ZXMgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW5cbiAqIFR5cGVTY3JpcHQgYW5kIEJhYmVsLiBNYWlubHkgY2F1c2VkIGJ5IHRoZSBmYWN0IHRoYXQgbGVnYWN5LWRlY29yYXRvciBjYW5ub3QgYXNzaWduXG4gKiB2YWx1ZXMgZHVyaW5nIGluc3RhbmNlIGNyZWF0aW9uIHRvIHByb3BlcnRpZXMgdGhhdCBoYXZlIGEgZ2V0dGVyIHNldHRlci5cbiAqXG4gKiAtIFNpZ2ggLVxuICpcbiAqIEFsc28gdGFrZXMgY2FyZSBvZiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIEBkZWNvcmF0b3IgZmllbGQgYW5kIEBkZWNvcmF0b3IoYXJncykgZmllbGQsIGFuZCBkaWZmZXJlbnQgZm9ybXMgb2YgdmFsdWVzLlxuICogRm9yIHBlcmZvcm1hbmNlIChjcHUgYW5kIG1lbSkgcmVhc29ucyB0aGUgcHJvcGVydGllcyBhcmUgYWx3YXlzIGRlZmluZWQgb24gdGhlIHByb3RvdHlwZSAoYXQgbGVhc3QgaW5pdGlhbGx5KS5cbiAqIFRoaXMgbWVhbnMgdGhhdCB0aGVzZSBwcm9wZXJ0aWVzIGRlc3BpdGUgYmVpbmcgZW51bWVyYWJsZSBtaWdodCBub3Qgc2hvdyB1cCBpbiBPYmplY3Qua2V5cygpIChidXQgdGhleSB3aWxsIHNob3cgdXAgaW4gZm9yLi4uaW4gbG9vcHMpLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDbGFzc1Byb3BlcnR5RGVjb3JhdG9yKFxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZCBvbmNlLCB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBhZGRlZCB0byBhIG5ldyBpbnN0YW5jZS5cbiAgICAgKiBXaGVuIHRoaXMgaGFwcGVucyBpcyBub3Qgc3RyaWN0bHkgZGV0ZXJtaW5lZCBkdWUgdG8gZGlmZmVyZW5jZXMgaW4gVFMgYW5kIEJhYmVsOlxuICAgICAqIFR5cGVzY3JpcHQ6IFVzdWFsbHkgd2hlbiBjb25zdHJ1Y3RpbmcgdGhlIG5ldyBpbnN0YW5jZVxuICAgICAqIEJhYmVsLCBzb21ldGltZXMgVHlwZXNjcmlwdDogZHVyaW5nIHRoZSBmaXJzdCBnZXQgLyBzZXRcbiAgICAgKiBCb3RoOiB3aGVuIGNhbGxpbmcgYHJ1bkxhenlJbml0aWFsaXplcnMoaW5zdGFuY2UpYFxuICAgICAqL1xuICAgIG9uSW5pdGlhbGl6ZSwgZ2V0LCBzZXQsIGVudW1lcmFibGUsIFxuICAgIC8qKlxuICAgICAqIENhbiB0aGlzIGRlY29yYXRvciBpbnZva2VkIHdpdGggYXJndW1lbnRzPyBlLmcuIEBkZWNvcmF0b3IoYXJncylcbiAgICAgKi9cbiAgICBhbGxvd0N1c3RvbUFyZ3VtZW50cykge1xuICAgIGZ1bmN0aW9uIGNsYXNzUHJvcGVydHlEZWNvcmF0b3IodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IsIGN1c3RvbUFyZ3MsIGFyZ0xlbikge1xuICAgICAgICBpZiAoYXJnTGVuID09PSB2b2lkIDApIHsgYXJnTGVuID0gMDsgfVxuICAgICAgICBpbnZhcmlhbnQoYWxsb3dDdXN0b21Bcmd1bWVudHMgfHwgcXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJndW1lbnRzKSwgXCJUaGlzIGZ1bmN0aW9uIGlzIGEgZGVjb3JhdG9yLCBidXQgaXQgd2Fzbid0IGludm9rZWQgbGlrZSBhIGRlY29yYXRvclwiKTtcbiAgICAgICAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAvLyB0eXBlc2NyaXB0IChleGNlcHQgZm9yIGdldHRlciAvIHNldHRlcnMpXG4gICAgICAgICAgICB2YXIgbmV3RGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBlbnVtZXJhYmxlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9fbW9ieEluaXRpYWxpemVkUHJvcHMgfHwgdGhpcy5fX21vYnhJbml0aWFsaXplZFByb3BzW2tleV0gIT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlc2NyaXB0SW5pdGlhbGl6ZVByb3BlcnR5KHRoaXMsIGtleSwgdW5kZWZpbmVkLCBvbkluaXRpYWxpemUsIGN1c3RvbUFyZ3MsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0LmNhbGwodGhpcywga2V5KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9fbW9ieEluaXRpYWxpemVkUHJvcHMgfHwgdGhpcy5fX21vYnhJbml0aWFsaXplZFByb3BzW2tleV0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzY3JpcHRJbml0aWFsaXplUHJvcGVydHkodGhpcywga2V5LCB2LCBvbkluaXRpYWxpemUsIGN1c3RvbUFyZ3MsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0LmNhbGwodGhpcywga2V5LCB2KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMgfHwgKGFyZ3VtZW50cy5sZW5ndGggPT09IDUgJiYgYXJnTGVuIDwgMykpIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlc2NyaXB0IHRhcmdldCBpcyBFUzMsIHNvIGl0IHdvbid0IGRlZmluZSBwcm9wZXJ0eSBmb3IgdXNcbiAgICAgICAgICAgICAgICAvLyBvciB1c2luZyBSZWZsZWN0LmRlY29yYXRlIHBvbHlmaWxsLCB3aGljaCB3aWxsIHJldHVybiBubyBkZXNjcmlwdG9yXG4gICAgICAgICAgICAgICAgLy8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzMzMylcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIG5ld0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld0Rlc2NyaXB0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBiYWJlbCBhbmQgdHlwZXNjcmlwdCBnZXR0ZXIgLyBzZXR0ZXIgcHJvcHNcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcGVydHkodGFyZ2V0LCBcIl9fbW9ieExhenlJbml0aWFsaXplcnNcIikpIHtcbiAgICAgICAgICAgICAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgXCJfX21vYnhMYXp5SW5pdGlhbGl6ZXJzXCIsICh0YXJnZXQuX19tb2J4TGF6eUluaXRpYWxpemVycyAmJiB0YXJnZXQuX19tb2J4TGF6eUluaXRpYWxpemVycy5zbGljZSgpKSB8fCBbXSAvLyBzdXBwb3J0IGluaGVyaXRhbmNlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZV8xID0gZGVzY3JpcHRvci52YWx1ZSwgaW5pdGlhbGl6ZXJfMSA9IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXI7XG4gICAgICAgICAgICB0YXJnZXQuX19tb2J4TGF6eUluaXRpYWxpemVycy5wdXNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG9uSW5pdGlhbGl6ZShpbnN0YW5jZSwga2V5LCBpbml0aWFsaXplcl8xID8gaW5pdGlhbGl6ZXJfMS5jYWxsKGluc3RhbmNlKSA6IHZhbHVlXzEsIGN1c3RvbUFyZ3MsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGVudW1lcmFibGUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX21vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuTGF6eUluaXRpYWxpemVycyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldC5jYWxsKHRoaXMsIGtleSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9fbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnMgIT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5MYXp5SW5pdGlhbGl6ZXJzKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBzZXQuY2FsbCh0aGlzLCBrZXksIHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFsbG93Q3VzdG9tQXJndW1lbnRzKSB7XG4gICAgICAgIC8qKiBJZiBjdXN0b20gYXJndW1lbnRzIGFyZSBhbGxvd2VkLCB3ZSBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgZGVjb3JhdG9yICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvKiogRGlyZWN0IGludm9jYXRpb246IEBkZWNvcmF0b3IgYmxhICovXG4gICAgICAgICAgICBpZiAocXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NQcm9wZXJ0eURlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgLyoqIEluZGlyZWN0IGludm9jYXRpb246IEBkZWNvcmF0b3IoYXJncykgYmxhICovXG4gICAgICAgICAgICB2YXIgb3V0ZXJBcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGFyZ0xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzUHJvcGVydHlEZWNvcmF0b3IodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IsIG91dGVyQXJncywgYXJnTGVuKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBjbGFzc1Byb3BlcnR5RGVjb3JhdG9yO1xufVxuZnVuY3Rpb24gdHlwZXNjcmlwdEluaXRpYWxpemVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB2LCBvbkluaXRpYWxpemUsIGN1c3RvbUFyZ3MsIGJhc2VEZXNjcmlwdG9yKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShpbnN0YW5jZSwgXCJfX21vYnhJbml0aWFsaXplZFByb3BzXCIpKVxuICAgICAgICBhZGRIaWRkZW5Qcm9wKGluc3RhbmNlLCBcIl9fbW9ieEluaXRpYWxpemVkUHJvcHNcIiwge30pO1xuICAgIGluc3RhbmNlLl9fbW9ieEluaXRpYWxpemVkUHJvcHNba2V5XSA9IHRydWU7XG4gICAgb25Jbml0aWFsaXplKGluc3RhbmNlLCBrZXksIHYsIGN1c3RvbUFyZ3MsIGJhc2VEZXNjcmlwdG9yKTtcbn1cbmZ1bmN0aW9uIHJ1bkxhenlJbml0aWFsaXplcnMoaW5zdGFuY2UpIHtcbiAgICBpZiAoaW5zdGFuY2UuX19tb2J4RGlkUnVuTGF6eUluaXRpYWxpemVycyA9PT0gdHJ1ZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChpbnN0YW5jZS5fX21vYnhMYXp5SW5pdGlhbGl6ZXJzKSB7XG4gICAgICAgIGFkZEhpZGRlblByb3AoaW5zdGFuY2UsIFwiX19tb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1wiLCB0cnVlKTtcbiAgICAgICAgaW5zdGFuY2UuX19tb2J4RGlkUnVuTGF6eUluaXRpYWxpemVycyAmJlxuICAgICAgICAgICAgaW5zdGFuY2UuX19tb2J4TGF6eUluaXRpYWxpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbml0aWFsaXplcikgeyByZXR1cm4gaW5pdGlhbGl6ZXIoaW5zdGFuY2UpOyB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBxdWFja3NMaWtlQURlY29yYXRvcihhcmdzKSB7XG4gICAgcmV0dXJuIChhcmdzLmxlbmd0aCA9PT0gMiB8fCBhcmdzLmxlbmd0aCA9PT0gMykgJiYgdHlwZW9mIGFyZ3NbMV0gPT09IFwic3RyaW5nXCI7XG59XG5cbnZhciBhY3Rpb25GaWVsZERlY29yYXRvciA9IGNyZWF0ZUNsYXNzUHJvcGVydHlEZWNvcmF0b3IoZnVuY3Rpb24gKHRhcmdldCwga2V5LCB2YWx1ZSwgYXJncywgb3JpZ2luYWxEZXNjcmlwdG9yKSB7XG4gICAgdmFyIGFjdGlvbk5hbWUgPSBhcmdzICYmIGFyZ3MubGVuZ3RoID09PSAxID8gYXJnc1swXSA6IHZhbHVlLm5hbWUgfHwga2V5IHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xuICAgIHZhciB3cmFwcGVkQWN0aW9uID0gYWN0aW9uKGFjdGlvbk5hbWUsIHZhbHVlKTtcbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwga2V5LCB3cmFwcGVkQWN0aW9uKTtcbn0sIGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpc1trZXldO1xufSwgZnVuY3Rpb24gKCkge1xuICAgIGludmFyaWFudChmYWxzZSwgZ2V0TWVzc2FnZShcIm0wMDFcIikpO1xufSwgZmFsc2UsIHRydWUpO1xudmFyIGJvdW5kQWN0aW9uRGVjb3JhdG9yID0gY3JlYXRlQ2xhc3NQcm9wZXJ0eURlY29yYXRvcihmdW5jdGlvbiAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgZGVmaW5lQm91bmRBY3Rpb24odGFyZ2V0LCBrZXksIHZhbHVlKTtcbn0sIGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpc1trZXldO1xufSwgZnVuY3Rpb24gKCkge1xuICAgIGludmFyaWFudChmYWxzZSwgZ2V0TWVzc2FnZShcIm0wMDFcIikpO1xufSwgZmFsc2UsIGZhbHNlKTtcbnZhciBhY3Rpb24gPSBmdW5jdGlvbiBhY3Rpb24oYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiLCBhcmcxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgYXJnMiA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gY3JlYXRlQWN0aW9uKGFyZzEsIGFyZzIpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4gbmFtZWRBY3Rpb25EZWNvcmF0b3IoYXJnMSk7XG4gICAgcmV0dXJuIG5hbWVkQWN0aW9uRGVjb3JhdG9yKGFyZzIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59O1xuYWN0aW9uLmJvdW5kID0gZnVuY3Rpb24gYm91bmRBY3Rpb24oYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhciBhY3Rpb25fMSA9IGNyZWF0ZUFjdGlvbihcIjxub3QgeWV0IGJvdW5kIGFjdGlvbj5cIiwgYXJnMSk7XG4gICAgICAgIGFjdGlvbl8xLmF1dG9CaW5kID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbl8xO1xuICAgIH1cbiAgICByZXR1cm4gYm91bmRBY3Rpb25EZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn07XG5mdW5jdGlvbiBuYW1lZEFjdGlvbkRlY29yYXRvcihuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IgJiYgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCBAYWN0aW9uIG1ldGhvZCgpIHsgfS4gRGVmaW5lZCBvbiBwcm90byBiZWZvcmUgYmVpbmcgZGVjb3JhdGVkXG4gICAgICAgICAgICAvLyBEb24ndCB1c2UgdGhlIGZpZWxkIGRlY29yYXRvciBpZiB3ZSBhcmUganVzdCBkZWNvcmF0aW5nIGEgbWV0aG9kXG4gICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gY3JlYXRlQWN0aW9uKG5hbWUsIGRlc2NyaXB0b3IudmFsdWUpO1xuICAgICAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkICYmIGRlc2NyaXB0b3IuZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4XSBhY3Rpb24gaXMgbm90IGV4cGVjdGVkIHRvIGJlIHVzZWQgd2l0aCBnZXR0ZXJzXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJvdW5kIGluc3RhbmNlIG1ldGhvZHNcbiAgICAgICAgcmV0dXJuIGFjdGlvbkZpZWxkRGVjb3JhdG9yKG5hbWUpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bkluQWN0aW9uKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICB2YXIgYWN0aW9uTmFtZSA9IHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiID8gYXJnMSA6IGFyZzEubmFtZSB8fCBcIjx1bm5hbWVkIGFjdGlvbj5cIjtcbiAgICB2YXIgZm4gPSB0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiID8gYXJnMSA6IGFyZzI7XG4gICAgdmFyIHNjb3BlID0gdHlwZW9mIGFyZzEgPT09IFwiZnVuY3Rpb25cIiA/IGFyZzIgOiBhcmczO1xuICAgIGludmFyaWFudCh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiwgZ2V0TWVzc2FnZShcIm0wMDJcIikpO1xuICAgIGludmFyaWFudChmbi5sZW5ndGggPT09IDAsIGdldE1lc3NhZ2UoXCJtMDAzXCIpKTtcbiAgICBpbnZhcmlhbnQodHlwZW9mIGFjdGlvbk5hbWUgPT09IFwic3RyaW5nXCIgJiYgYWN0aW9uTmFtZS5sZW5ndGggPiAwLCBcImFjdGlvbnMgc2hvdWxkIGhhdmUgdmFsaWQgbmFtZXMsIGdvdDogJ1wiICsgYWN0aW9uTmFtZSArIFwiJ1wiKTtcbiAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbihhY3Rpb25OYW1lLCBmbiwgc2NvcGUsIHVuZGVmaW5lZCk7XG59XG5mdW5jdGlvbiBpc0FjdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IFwiZnVuY3Rpb25cIiAmJiB0aGluZy5pc01vYnhBY3Rpb24gPT09IHRydWU7XG59XG5mdW5jdGlvbiBkZWZpbmVCb3VuZEFjdGlvbih0YXJnZXQsIHByb3BlcnR5TmFtZSwgZm4pIHtcbiAgICB2YXIgcmVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXhlY3V0ZUFjdGlvbihwcm9wZXJ0eU5hbWUsIGZuLCB0YXJnZXQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXMuaXNNb2J4QWN0aW9uID0gdHJ1ZTtcbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgcHJvcGVydHlOYW1lLCByZXMpO1xufVxuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvYmxvYi81YzIzN2E3YzY4MmZiNjhmZDUzNzgyMDNmMGJmMjJkY2UxNjI0ODU0L3VuZGVyc2NvcmUuanMjTDExODYtTDEyODlcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGVxKGEsIGIpO1xufVxuLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbmZ1bmN0aW9uIGVxKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKVxuICAgICAgICByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XG4gICAgLy8gYG51bGxgIG9yIGB1bmRlZmluZWRgIG9ubHkgZXF1YWwgdG8gaXRzZWxmIChzdHJpY3QgY29tcGFyaXNvbikuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgIGlmIChhICE9PSBhKVxuICAgICAgICByZXR1cm4gYiAhPT0gYjtcbiAgICAvLyBFeGhhdXN0IHByaW1pdGl2ZSBjaGVja3NcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBhO1xuICAgIGlmICh0eXBlICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGRlZXBFcShhLCBiLCBhU3RhY2ssIGJTdGFjayk7XG59XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbmZ1bmN0aW9uIGRlZXBFcShhLCBiLCBhU3RhY2ssIGJTdGFjaykge1xuICAgIC8vIFVud3JhcCBhbnkgd3JhcHBlZCBvYmplY3RzLlxuICAgIGEgPSB1bndyYXAoYSk7XG4gICAgYiA9IHVud3JhcChiKTtcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxuICAgIHZhciBjbGFzc05hbWUgPSB0b1N0cmluZy5jYWxsKGEpO1xuICAgIGlmIChjbGFzc05hbWUgIT09IHRvU3RyaW5nLmNhbGwoYikpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgICAvLyBTdHJpbmdzLCBudW1iZXJzLCByZWd1bGFyIGV4cHJlc3Npb25zLCBkYXRlcywgYW5kIGJvb2xlYW5zIGFyZSBjb21wYXJlZCBieSB2YWx1ZS5cbiAgICAgICAgY2FzZSBcIltvYmplY3QgUmVnRXhwXVwiOlxuICAgICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxuICAgICAgICBjYXNlIFwiW29iamVjdCBTdHJpbmddXCI6XG4gICAgICAgICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDsgdGh1cywgYFwiNVwiYCBpc1xuICAgICAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBhID09PSBcIlwiICsgYjtcbiAgICAgICAgY2FzZSBcIltvYmplY3QgTnVtYmVyXVwiOlxuICAgICAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICAgICAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOLlxuICAgICAgICAgICAgaWYgKCthICE9PSArYSlcbiAgICAgICAgICAgICAgICByZXR1cm4gK2IgIT09ICtiO1xuICAgICAgICAgICAgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiArYSA9PT0gMCA/IDEgLyArYSA9PT0gMSAvIGIgOiArYSA9PT0gK2I7XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IERhdGVdXCI6XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IEJvb2xlYW5dXCI6XG4gICAgICAgICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWVyaWMgcHJpbWl0aXZlIHZhbHVlcy4gRGF0ZXMgYXJlIGNvbXBhcmVkIGJ5IHRoZWlyXG4gICAgICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXG4gICAgICAgICAgICAvLyBvZiBgTmFOYCBhcmUgbm90IGVxdWl2YWxlbnQuXG4gICAgICAgICAgICByZXR1cm4gK2EgPT09ICtiO1xuICAgICAgICBjYXNlIFwiW29iamVjdCBTeW1ib2xdXCI6XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLnZhbHVlT2YuY2FsbChhKSA9PT0gU3ltYm9sLnZhbHVlT2YuY2FsbChiKSk7XG4gICAgfVxuICAgIHZhciBhcmVBcnJheXMgPSBjbGFzc05hbWUgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICBpZiAoIWFyZUFycmF5cykge1xuICAgICAgICBpZiAodHlwZW9mIGEgIT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyBPYmplY3RzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWl2YWxlbnQsIGJ1dCBgT2JqZWN0YHMgb3IgYEFycmF5YHNcbiAgICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cbiAgICAgICAgdmFyIGFDdG9yID0gYS5jb25zdHJ1Y3RvciwgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmXG4gICAgICAgICAgICAhKHR5cGVvZiBhQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBiQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAgICAgYkN0b3IgaW5zdGFuY2VvZiBiQ3RvcikgJiZcbiAgICAgICAgICAgIChcImNvbnN0cnVjdG9yXCIgaW4gYSAmJiBcImNvbnN0cnVjdG9yXCIgaW4gYikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cbiAgICBhU3RhY2sgPSBhU3RhY2sgfHwgW107XG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpXG4gICAgICAgICAgICByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgYVN0YWNrLCBiU3RhY2spKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYSksIGtleTtcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAgICAgICAga2V5ID0ga2V5c1tsZW5ndGhdO1xuICAgICAgICAgICAgaWYgKCEoaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIGFTdGFjay5wb3AoKTtcbiAgICBiU3RhY2sucG9wKCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB1bndyYXAoYSkge1xuICAgIGlmIChpc09ic2VydmFibGVBcnJheShhKSlcbiAgICAgICAgcmV0dXJuIGEucGVlaygpO1xuICAgIGlmIChpc09ic2VydmFibGVNYXAoYSkpXG4gICAgICAgIHJldHVybiBhLmVudHJpZXMoKTtcbiAgICBpZiAoaXNFUzZNYXAoYSkpXG4gICAgICAgIHJldHVybiBpdGVyYXRvclRvQXJyYXkoYS5lbnRyaWVzKCkpO1xuICAgIHJldHVybiBhO1xufVxuZnVuY3Rpb24gaGFzKGEsIGtleSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHlDb21wYXJlcihhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG59XG5mdW5jdGlvbiBzdHJ1Y3R1cmFsQ29tcGFyZXIoYSwgYikge1xuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYik7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZXIoYSwgYikge1xuICAgIHJldHVybiBhcmVCb3RoTmFOKGEsIGIpIHx8IGlkZW50aXR5Q29tcGFyZXIoYSwgYik7XG59XG52YXIgY29tcGFyZXIgPSB7XG4gICAgaWRlbnRpdHk6IGlkZW50aXR5Q29tcGFyZXIsXG4gICAgc3RydWN0dXJhbDogc3RydWN0dXJhbENvbXBhcmVyLFxuICAgIGRlZmF1bHQ6IGRlZmF1bHRDb21wYXJlclxufTtcblxuZnVuY3Rpb24gYXV0b3J1bihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgdmFyIG5hbWUsIHZpZXcsIHNjb3BlO1xuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBuYW1lID0gYXJnMTtcbiAgICAgICAgdmlldyA9IGFyZzI7XG4gICAgICAgIHNjb3BlID0gYXJnMztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5hbWUgPSBhcmcxLm5hbWUgfHwgXCJBdXRvcnVuQFwiICsgZ2V0TmV4dElkKCk7XG4gICAgICAgIHZpZXcgPSBhcmcxO1xuICAgICAgICBzY29wZSA9IGFyZzI7XG4gICAgfVxuICAgIGludmFyaWFudCh0eXBlb2YgdmlldyA9PT0gXCJmdW5jdGlvblwiLCBnZXRNZXNzYWdlKFwibTAwNFwiKSk7XG4gICAgaW52YXJpYW50KGlzQWN0aW9uKHZpZXcpID09PSBmYWxzZSwgZ2V0TWVzc2FnZShcIm0wMDVcIikpO1xuICAgIGlmIChzY29wZSlcbiAgICAgICAgdmlldyA9IHZpZXcuYmluZChzY29wZSk7XG4gICAgdmFyIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50cmFjayhyZWFjdGlvblJ1bm5lcik7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgICAgIHZpZXcocmVhY3Rpb24pO1xuICAgIH1cbiAgICByZWFjdGlvbi5zY2hlZHVsZSgpO1xuICAgIHJldHVybiByZWFjdGlvbi5nZXREaXNwb3NlcigpO1xufVxuZnVuY3Rpb24gd2hlbihhcmcxLCBhcmcyLCBhcmczLCBhcmc0KSB7XG4gICAgdmFyIG5hbWUsIHByZWRpY2F0ZSwgZWZmZWN0LCBzY29wZTtcbiAgICBpZiAodHlwZW9mIGFyZzEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbmFtZSA9IGFyZzE7XG4gICAgICAgIHByZWRpY2F0ZSA9IGFyZzI7XG4gICAgICAgIGVmZmVjdCA9IGFyZzM7XG4gICAgICAgIHNjb3BlID0gYXJnNDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5hbWUgPSBcIldoZW5AXCIgKyBnZXROZXh0SWQoKTtcbiAgICAgICAgcHJlZGljYXRlID0gYXJnMTtcbiAgICAgICAgZWZmZWN0ID0gYXJnMjtcbiAgICAgICAgc2NvcGUgPSBhcmczO1xuICAgIH1cbiAgICB2YXIgZGlzcG9zZXIgPSBhdXRvcnVuKG5hbWUsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChzY29wZSkpIHtcbiAgICAgICAgICAgIHIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdmFyIHByZXZVbnRyYWNrZWQgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgICAgICAgICAgZWZmZWN0LmNhbGwoc2NvcGUpO1xuICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpc3Bvc2VyO1xufVxuZnVuY3Rpb24gYXV0b3J1bkFzeW5jKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICB2YXIgbmFtZSwgZnVuYywgZGVsYXksIHNjb3BlO1xuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBuYW1lID0gYXJnMTtcbiAgICAgICAgZnVuYyA9IGFyZzI7XG4gICAgICAgIGRlbGF5ID0gYXJnMztcbiAgICAgICAgc2NvcGUgPSBhcmc0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbmFtZSA9IGFyZzEubmFtZSB8fCBcIkF1dG9ydW5Bc3luY0BcIiArIGdldE5leHRJZCgpO1xuICAgICAgICBmdW5jID0gYXJnMTtcbiAgICAgICAgZGVsYXkgPSBhcmcyO1xuICAgICAgICBzY29wZSA9IGFyZzM7XG4gICAgfVxuICAgIGludmFyaWFudChpc0FjdGlvbihmdW5jKSA9PT0gZmFsc2UsIGdldE1lc3NhZ2UoXCJtMDA2XCIpKTtcbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMClcbiAgICAgICAgZGVsYXkgPSAxO1xuICAgIGlmIChzY29wZSlcbiAgICAgICAgZnVuYyA9IGZ1bmMuYmluZChzY29wZSk7XG4gICAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgdmFyIHIgPSBuZXcgUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghci5pc0Rpc3Bvc2VkKVxuICAgICAgICAgICAgICAgICAgICByLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJlYWN0aW9uUnVubmVyKCkge1xuICAgICAgICBmdW5jKHIpO1xuICAgIH1cbiAgICByLnNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHIuZ2V0RGlzcG9zZXIoKTtcbn1cbmZ1bmN0aW9uIHJlYWN0aW9uKGV4cHJlc3Npb24sIGVmZmVjdCwgYXJnMykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMykge1xuICAgICAgICBmYWlsKGdldE1lc3NhZ2UoXCJtMDA3XCIpKTtcbiAgICB9XG4gICAgaWYgKGlzTW9kaWZpZXJEZXNjcmlwdG9yKGV4cHJlc3Npb24pKSB7XG4gICAgICAgIGZhaWwoZ2V0TWVzc2FnZShcIm0wMDhcIikpO1xuICAgIH1cbiAgICB2YXIgb3B0cztcbiAgICBpZiAodHlwZW9mIGFyZzMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgb3B0cyA9IGFyZzM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIG9wdHMubmFtZSA9XG4gICAgICAgIG9wdHMubmFtZSB8fCBleHByZXNzaW9uLm5hbWUgfHwgZWZmZWN0Lm5hbWUgfHwgXCJSZWFjdGlvbkBcIiArIGdldE5leHRJZCgpO1xuICAgIG9wdHMuZmlyZUltbWVkaWF0ZWx5ID0gYXJnMyA9PT0gdHJ1ZSB8fCBvcHRzLmZpcmVJbW1lZGlhdGVseSA9PT0gdHJ1ZTtcbiAgICBvcHRzLmRlbGF5ID0gb3B0cy5kZWxheSB8fCAwO1xuICAgIG9wdHMuY29tcGFyZVN0cnVjdHVyYWwgPSBvcHRzLmNvbXBhcmVTdHJ1Y3R1cmFsIHx8IG9wdHMuc3RydWN0IHx8IGZhbHNlO1xuICAgIC8vIFRPRE86IGNyZWF0ZXMgdWdseSBzcHkgZXZlbnRzLCB1c2UgYGVmZmVjdCA9IChyKSA9PiBydW5JbkFjdGlvbihvcHRzLm5hbWUsICgpID0+IGVmZmVjdChyKSlgIGluc3RlYWRcbiAgICBlZmZlY3QgPSBhY3Rpb24ob3B0cy5uYW1lLCBvcHRzLmNvbnRleHQgPyBlZmZlY3QuYmluZChvcHRzLmNvbnRleHQpIDogZWZmZWN0KTtcbiAgICBpZiAob3B0cy5jb250ZXh0KSB7XG4gICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLmJpbmQob3B0cy5jb250ZXh0KTtcbiAgICB9XG4gICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG4gICAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhciBlcXVhbHMgPSBvcHRzLmVxdWFsc1xuICAgICAgICA/IG9wdHMuZXF1YWxzXG4gICAgICAgIDogb3B0cy5jb21wYXJlU3RydWN0dXJhbCB8fCBvcHRzLnN0cnVjdCA/IGNvbXBhcmVyLnN0cnVjdHVyYWwgOiBjb21wYXJlci5kZWZhdWx0O1xuICAgIHZhciByID0gbmV3IFJlYWN0aW9uKG9wdHMubmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZmlyc3RUaW1lIHx8IG9wdHMuZGVsYXkgPCAxKSB7XG4gICAgICAgICAgICByZWFjdGlvblJ1bm5lcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgaXNTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZWFjdGlvblJ1bm5lcigpO1xuICAgICAgICAgICAgfSwgb3B0cy5kZWxheSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcbiAgICAgICAgaWYgKHIuaXNEaXNwb3NlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgci50cmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gZXhwcmVzc2lvbihyKTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSBmaXJzdFRpbWUgfHwgIWVxdWFscyh2YWx1ZSwgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIHZhbHVlID0gbmV4dFZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGZpcnN0VGltZSAmJiBvcHRzLmZpcmVJbW1lZGlhdGVseSlcbiAgICAgICAgICAgIGVmZmVjdCh2YWx1ZSwgcik7XG4gICAgICAgIGlmICghZmlyc3RUaW1lICYmIGNoYW5nZWQgPT09IHRydWUpXG4gICAgICAgICAgICBlZmZlY3QodmFsdWUsIHIpO1xuICAgICAgICBpZiAoZmlyc3RUaW1lKVxuICAgICAgICAgICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gICAgfVxuICAgIHIuc2NoZWR1bGUoKTtcbiAgICByZXR1cm4gci5nZXREaXNwb3NlcigpO1xufVxuXG4vKipcbiAqIEEgbm9kZSBpbiB0aGUgc3RhdGUgZGVwZW5kZW5jeSByb290IHRoYXQgb2JzZXJ2ZXMgb3RoZXIgbm9kZXMsIGFuZCBjYW4gYmUgb2JzZXJ2ZWQgaXRzZWxmLlxuICpcbiAqIENvbXB1dGVkVmFsdWUgd2lsbCByZW1lbWJlciB0aGUgcmVzdWx0IG9mIHRoZSBjb21wdXRhdGlvbiBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBiYXRjaCwgb3JcbiAqIHdoaWxlIGJlaW5nIG9ic2VydmVkLlxuICpcbiAqIER1cmluZyB0aGlzIHRpbWUgaXQgd2lsbCByZWNvbXB1dGUgb25seSB3aGVuIG9uZSBvZiBpdHMgZGlyZWN0IGRlcGVuZGVuY2llcyBjaGFuZ2VkLFxuICogYnV0IG9ubHkgd2hlbiBpdCBpcyBiZWluZyBhY2Nlc3NlZCB3aXRoIGBDb21wdXRlZFZhbHVlLmdldCgpYC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBkZXNjcmlwdGlvbjpcbiAqIDEuIEZpcnN0IHRpbWUgaXQncyBiZWluZyBhY2Nlc3NlZCBpdCB3aWxsIGNvbXB1dGUgYW5kIHJlbWVtYmVyIHJlc3VsdFxuICogICAgZ2l2ZSBiYWNrIHJlbWVtYmVyZWQgcmVzdWx0IHVudGlsIDIuIGhhcHBlbnNcbiAqIDIuIEZpcnN0IHRpbWUgYW55IGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2UsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB3YWl0IGZvciAzLlxuICogMy4gV2hlbiBpdCdzIGJlaW5nIGFjY2Vzc2VkLCByZWNvbXB1dGUgaWYgYW55IHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkLlxuICogICAgaWYgcmVzdWx0IGNoYW5nZWQ6IHByb3BhZ2F0ZSBTVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB0aGF0IHdlcmUgUE9TU0lCTFlfU1RBTEUgZnJvbSB0aGUgbGFzdCBzdGVwLlxuICogICAgZ28gdG8gc3RlcCAyLiBlaXRoZXIgd2F5XG4gKlxuICogSWYgYXQgYW55IHBvaW50IGl0J3Mgb3V0c2lkZSBiYXRjaCBhbmQgaXQgaXNuJ3Qgb2JzZXJ2ZWQ6IHJlc2V0IGV2ZXJ5dGhpbmcgYW5kIGdvIHRvIDEuXG4gKi9cbnZhciBDb21wdXRlZFZhbHVlID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY29tcHV0ZWQgdmFsdWUgYmFzZWQgb24gYSBmdW5jdGlvbiBleHByZXNzaW9uLlxuICAgICAqXG4gICAgICogVGhlIGBuYW1lYCBwcm9wZXJ0eSBpcyBmb3IgZGVidWcgcHVycG9zZXMgb25seS5cbiAgICAgKlxuICAgICAqIFRoZSBgZXF1YWxzYCBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGNvbXBhcmVyIGZ1bmN0aW9uIHRvIHVzZSB0byBkZXRlcm1pbmUgaWYgYSBuZXdseSBwcm9kdWNlZFxuICAgICAqIHZhbHVlIGRpZmZlcnMgZnJvbSB0aGUgcHJldmlvdXMgdmFsdWUuIFR3byBjb21wYXJlcnMgYXJlIHByb3ZpZGVkIGluIHRoZSBsaWJyYXJ5OyBgZGVmYXVsdENvbXBhcmVyYFxuICAgICAqIGNvbXBhcmVzIGJhc2VkIG9uIGlkZW50aXR5IGNvbXBhcmlzb24gKD09PSksIGFuZCBgc3RydWN0dWFsQ29tcGFyZXJgIGRlZXBseSBjb21wYXJlcyB0aGUgc3RydWN0dXJlLlxuICAgICAqIFN0cnVjdHVyYWwgY29tcGFyaXNvbiBjYW4gYmUgY29udmVuaWVudCBpZiB5b3UgYWx3YXlzIHByb2R1Y2UgYW4gbmV3IGFnZ3JlZ2F0ZWQgb2JqZWN0IGFuZFxuICAgICAqIGRvbid0IHdhbnQgdG8gbm90aWZ5IG9ic2VydmVycyBpZiBpdCBpcyBzdHJ1Y3R1cmFsbHkgdGhlIHNhbWUuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgZm9yIHdvcmtpbmcgd2l0aCB2ZWN0b3JzLCBtb3VzZSBjb29yZGluYXRlcyBldGMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29tcHV0ZWRWYWx1ZShkZXJpdmF0aW9uLCBzY29wZSwgZXF1YWxzLCBuYW1lLCBzZXR0ZXIpIHtcbiAgICAgICAgdGhpcy5kZXJpdmF0aW9uID0gZGVyaXZhdGlvbjtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmVxdWFscyA9IGVxdWFscztcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xuICAgICAgICB0aGlzLm9ic2VydmluZyA9IFtdOyAvLyBub2RlcyB3ZSBhcmUgbG9va2luZyBhdC4gT3VyIHZhbHVlIGRlcGVuZHMgb24gdGhlc2Ugbm9kZXNcbiAgICAgICAgdGhpcy5uZXdPYnNlcnZpbmcgPSBudWxsOyAvLyBkdXJpbmcgdHJhY2tpbmcgaXQncyBhbiBhcnJheSB3aXRoIG5ldyBvYnNlcnZlZCBvYnNlcnZlcnNcbiAgICAgICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzSW5kZXhlcyA9IHt9O1xuICAgICAgICB0aGlzLmRpZmZWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMucnVuSWQgPSAwO1xuICAgICAgICB0aGlzLmxhc3RBY2Nlc3NlZEJ5ID0gMDtcbiAgICAgICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgICAgICB0aGlzLnVuYm91bmREZXBzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLl9fbWFwaWQgPSBcIiNcIiArIGdldE5leHRJZCgpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3IENhdWdodEV4Y2VwdGlvbihudWxsKTtcbiAgICAgICAgdGhpcy5pc0NvbXB1dGluZyA9IGZhbHNlOyAvLyB0byBjaGVjayBmb3IgY3ljbGVzXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUcmFjaW5nID0gVHJhY2VNb2RlLk5PTkU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgXCJDb21wdXRlZFZhbHVlQFwiICsgZ2V0TmV4dElkKCk7XG4gICAgICAgIGlmIChzZXR0ZXIpXG4gICAgICAgICAgICB0aGlzLnNldHRlciA9IGNyZWF0ZUFjdGlvbihuYW1lICsgXCItc2V0dGVyXCIsIHNldHRlcik7XG4gICAgfVxuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9uQmVjb21lU3RhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb3BhZ2F0ZU1heWJlQ2hhbmdlZCh0aGlzKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoaXMgY29tcHV0ZWQgdmFsdWUuXG4gICAgICogV2lsbCBldmFsdWF0ZSBpdHMgY29tcHV0YXRpb24gZmlyc3QgaWYgbmVlZGVkLlxuICAgICAqL1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW52YXJpYW50KCF0aGlzLmlzQ29tcHV0aW5nLCBcIkN5Y2xlIGRldGVjdGVkIGluIGNvbXB1dGF0aW9uIFwiICsgdGhpcy5uYW1lLCB0aGlzLmRlcml2YXRpb24pO1xuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBtaW5vciBvcHRpbWl6YXRpb24gd2hpY2ggY291bGQgYmUgb21pdHRlZCB0byBzaW1wbGlmeSB0aGUgY29kZVxuICAgICAgICAgICAgLy8gVGhlIGNvbXB1dGVkVmFsdWUgaXMgYWNjZXNzZWQgb3V0c2lkZSBvZiBhbnkgbW9ieCBzdHVmZi4gQmF0Y2ggb2JzZXJ2aW5nIHNob3VsZCBiZSBlbm91Z2ggYW5kIGRvbid0IG5lZWRcbiAgICAgICAgICAgIC8vIHRyYWNraW5nIGFzIGl0IHdpbGwgbmV2ZXIgYmUgY2FsbGVkIGFnYWluIGluc2lkZSB0aGlzIGJhdGNoLlxuICAgICAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYW1lICsgXCInIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQgYW5kIGRvaW5nIGEgZnVsbCByZWNvbXB1dGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNvbXB1dGVWYWx1ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVwb3J0T2JzZXJ2ZWQodGhpcyk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmFja0FuZENvbXB1dGUoKSlcbiAgICAgICAgICAgICAgICAgICAgcHJvcGFnYXRlQ2hhbmdlQ29uZmlybWVkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzdWx0KSlcbiAgICAgICAgICAgIHRocm93IHJlc3VsdC5jYXVzZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXMgPSB0aGlzLmNvbXB1dGVWYWx1ZShmYWxzZSk7XG4gICAgICAgIGlmIChpc0NhdWdodEV4Y2VwdGlvbihyZXMpKVxuICAgICAgICAgICAgdGhyb3cgcmVzLmNhdXNlO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRlcikge1xuICAgICAgICAgICAgaW52YXJpYW50KCF0aGlzLmlzUnVubmluZ1NldHRlciwgXCJUaGUgc2V0dGVyIG9mIGNvbXB1dGVkIHZhbHVlICdcIiArIHRoaXNcbiAgICAgICAgICAgICAgICAubmFtZSArIFwiJyBpcyB0cnlpbmcgdG8gdXBkYXRlIGl0c2VsZi4gRGlkIHlvdSBpbnRlbmQgdG8gdXBkYXRlIGFuIF9vYnNlcnZhYmxlXyB2YWx1ZSwgaW5zdGVhZCBvZiB0aGUgY29tcHV0ZWQgcHJvcGVydHk/XCIpO1xuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRlci5jYWxsKHRoaXMuc2NvcGUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgaW52YXJpYW50KGZhbHNlLCBcIltDb21wdXRlZFZhbHVlICdcIiArIHRoaXNcbiAgICAgICAgICAgICAgICAubmFtZSArIFwiJ10gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGFzc2lnbiBhIG5ldyB2YWx1ZSB0byBhIGNvbXB1dGVkIHZhbHVlLlwiKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnRyYWNrQW5kQ29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBzcHlSZXBvcnQoe1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5zY29wZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbXB1dGVcIixcbiAgICAgICAgICAgICAgICBmbjogdGhpcy5kZXJpdmF0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB2YXIgd2FzU3VzcGVuZGVkID0gXG4gICAgICAgIC8qIHNlZSAjMTIwOCAqLyB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORztcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gKHRoaXMudmFsdWUgPSB0aGlzLmNvbXB1dGVWYWx1ZSh0cnVlKSk7XG4gICAgICAgIHJldHVybiAod2FzU3VzcGVuZGVkIHx8XG4gICAgICAgICAgICBpc0NhdWdodEV4Y2VwdGlvbihvbGRWYWx1ZSkgfHxcbiAgICAgICAgICAgIGlzQ2F1Z2h0RXhjZXB0aW9uKG5ld1ZhbHVlKSB8fFxuICAgICAgICAgICAgIXRoaXMuZXF1YWxzKG9sZFZhbHVlLCBuZXdWYWx1ZSkpO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuY29tcHV0ZVZhbHVlID0gZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSB0cnVlO1xuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoKys7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgcmVzID0gdHJhY2tEZXJpdmVkRnVuY3Rpb24odGhpcywgdGhpcy5kZXJpdmF0aW9uLCB0aGlzLnNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzID0gdGhpcy5kZXJpdmF0aW9uLmNhbGwodGhpcy5zY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IG5ldyBDYXVnaHRFeGNlcHRpb24oZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aC0tO1xuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG4gICAgICAgIHZhciBwcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBhdXRvcnVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzLmdldCgpO1xuICAgICAgICAgICAgaWYgKCFmaXJzdFRpbWUgfHwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogX3RoaXMsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHByZXZWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHByZXZWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiW1wiICsgdGhpcy5kZXJpdmF0aW9uLnRvU3RyaW5nKCkgKyBcIl1cIjtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0b1ByaW1pdGl2ZSh0aGlzLmdldCgpKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLndoeVJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzVHJhY2tpbmcgPSBCb29sZWFuKGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbik7XG4gICAgICAgIHZhciBvYnNlcnZpbmcgPSB1bmlxdWUodGhpcy5pc0NvbXB1dGluZyA/IHRoaXMubmV3T2JzZXJ2aW5nIDogdGhpcy5vYnNlcnZpbmcpLm1hcChmdW5jdGlvbiAoZGVwKSB7IHJldHVybiBkZXAubmFtZTsgfSk7XG4gICAgICAgIHZhciBvYnNlcnZlcnMgPSB1bmlxdWUoZ2V0T2JzZXJ2ZXJzKHRoaXMpLm1hcChmdW5jdGlvbiAoZGVwKSB7IHJldHVybiBkZXAubmFtZTsgfSkpO1xuICAgICAgICByZXR1cm4gKFwiXFxuV2h5UnVuPyBjb21wdXRhdGlvbiAnXCIgKyB0aGlzLm5hbWUgKyBcIic6XFxuICogUnVubmluZyBiZWNhdXNlOiBcIiArIChpc1RyYWNraW5nXG4gICAgICAgICAgICA/IFwiW2FjdGl2ZV0gdGhlIHZhbHVlIG9mIHRoaXMgY29tcHV0YXRpb24gaXMgbmVlZGVkIGJ5IGEgcmVhY3Rpb25cIlxuICAgICAgICAgICAgOiB0aGlzLmlzQ29tcHV0aW5nXG4gICAgICAgICAgICAgICAgPyBcIltnZXRdIFRoZSB2YWx1ZSBvZiB0aGlzIGNvbXB1dGVkIHdhcyByZXF1ZXN0ZWQgb3V0c2lkZSBhIHJlYWN0aW9uXCJcbiAgICAgICAgICAgICAgICA6IFwiW2lkbGVdIG5vdCBydW5uaW5nIGF0IHRoZSBtb21lbnRcIikgKyBcIlxcblwiICtcbiAgICAgICAgICAgICh0aGlzLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lOR1xuICAgICAgICAgICAgICAgID8gZ2V0TWVzc2FnZShcIm0wMzJcIilcbiAgICAgICAgICAgICAgICA6IFwiICogVGhpcyBjb21wdXRhdGlvbiB3aWxsIHJlLXJ1biBpZiBhbnkgb2YgdGhlIGZvbGxvd2luZyBvYnNlcnZhYmxlcyBjaGFuZ2VzOlxcbiAgICBcIiArIGpvaW5TdHJpbmdzKG9ic2VydmluZykgKyBcIlxcbiAgICBcIiArICh0aGlzLmlzQ29tcHV0aW5nICYmIGlzVHJhY2tpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBcIiAoLi4uIG9yIGFueSBvYnNlcnZhYmxlIGFjY2Vzc2VkIGR1cmluZyB0aGUgcmVtYWluZGVyIG9mIHRoZSBjdXJyZW50IHJ1bilcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyBnZXRNZXNzYWdlKFwibTAzOFwiKSArIFwiXFxuXFxuICAqIElmIHRoZSBvdXRjb21lIG9mIHRoaXMgY29tcHV0YXRpb24gY2hhbmdlcywgdGhlIGZvbGxvd2luZyBvYnNlcnZlcnMgd2lsbCBiZSByZS1ydW46XFxuICAgIFwiICsgam9pblN0cmluZ3Mob2JzZXJ2ZXJzKSArIFwiXFxuXCIpKTtcbiAgICB9O1xuICAgIHJldHVybiBDb21wdXRlZFZhbHVlO1xufSgpKTtcbkNvbXB1dGVkVmFsdWUucHJvdG90eXBlW3ByaW1pdGl2ZVN5bWJvbCgpXSA9IENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnZhbHVlT2Y7XG52YXIgaXNDb21wdXRlZFZhbHVlID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIkNvbXB1dGVkVmFsdWVcIiwgQ29tcHV0ZWRWYWx1ZSk7XG5cbnZhciBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIG5hbWUpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnRlcmNlcHRvcnMgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlcyB0aGlzIG9iamVjdC4gVHJpZ2dlcnMgZm9yIHRoZSBldmVudHMgJ2FkZCcsICd1cGRhdGUnIGFuZCAnZGVsZXRlJy5cbiAgICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXG4gICAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICBpbnZhcmlhbnQoZmlyZUltbWVkaWF0ZWx5ICE9PSB0cnVlLCBcImBvYnNlcnZlYCBkb2Vzbid0IHN1cHBvcnQgdGhlIGZpcmUgaW1tZWRpYXRlbHkgcHJvcGVydHkgZm9yIG9ic2VydmFibGUgb2JqZWN0cy5cIik7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uO1xufSgpKTtcbmZ1bmN0aW9uIGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG5hbWUpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCkgJiYgdGFyZ2V0Lmhhc093blByb3BlcnR5KFwiJG1vYnhcIikpXG4gICAgICAgIHJldHVybiB0YXJnZXQuJG1vYng7XG4gICAgaW52YXJpYW50KE9iamVjdC5pc0V4dGVuc2libGUodGFyZ2V0KSwgZ2V0TWVzc2FnZShcIm0wMzVcIikpO1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh0YXJnZXQpKVxuICAgICAgICBuYW1lID0gKHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lIHx8IFwiT2JzZXJ2YWJsZU9iamVjdFwiKSArIFwiQFwiICsgZ2V0TmV4dElkKCk7XG4gICAgaWYgKCFuYW1lKVxuICAgICAgICBuYW1lID0gXCJPYnNlcnZhYmxlT2JqZWN0QFwiICsgZ2V0TmV4dElkKCk7XG4gICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGFyZ2V0LCBuYW1lKTtcbiAgICBhZGRIaWRkZW5GaW5hbFByb3AodGFyZ2V0LCBcIiRtb2J4XCIsIGFkbSk7XG4gICAgcmV0dXJuIGFkbTtcbn1cbmZ1bmN0aW9uIGRlZmluZU9ic2VydmFibGVQcm9wZXJ0eUZyb21EZXNjcmlwdG9yKGFkbSwgcHJvcE5hbWUsIGRlc2NyaXB0b3IsIGRlZmF1bHRFbmhhbmNlcikge1xuICAgIGlmIChhZG0udmFsdWVzW3Byb3BOYW1lXSAmJiAhaXNDb21wdXRlZFZhbHVlKGFkbS52YWx1ZXNbcHJvcE5hbWVdKSkge1xuICAgICAgICAvLyBhbHJlYWR5IG9ic2VydmFibGUgcHJvcGVydHlcbiAgICAgICAgaW52YXJpYW50KFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCBcIlRoZSBwcm9wZXJ0eSBcIiArIHByb3BOYW1lICsgXCIgaW4gXCIgKyBhZG0ubmFtZSArIFwiIGlzIGFscmVhZHkgb2JzZXJ2YWJsZSwgY2Fubm90IHJlZGVmaW5lIGl0IGFzIGNvbXB1dGVkIHByb3BlcnR5XCIpO1xuICAgICAgICBhZG0udGFyZ2V0W3Byb3BOYW1lXSA9IGRlc2NyaXB0b3IudmFsdWU7IC8vIHRoZSBwcm9wZXJ0eSBzZXR0ZXIgd2lsbCBtYWtlICd2YWx1ZScgcmVhY3RpdmUgaWYgbmVlZGVkLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5vdCB5ZXQgb2JzZXJ2YWJsZSBwcm9wZXJ0eVxuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikge1xuICAgICAgICAvLyBub3QgYSBjb21wdXRlZCB2YWx1ZVxuICAgICAgICBpZiAoaXNNb2RpZmllckRlc2NyaXB0b3IoZGVzY3JpcHRvci52YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIHggOiByZWYoc29tZVZhbHVlKVxuICAgICAgICAgICAgdmFyIG1vZGlmaWVyRGVzY3JpcHRvciA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgICAgICBkZWZpbmVPYnNlcnZhYmxlUHJvcGVydHkoYWRtLCBwcm9wTmFtZSwgbW9kaWZpZXJEZXNjcmlwdG9yLmluaXRpYWxWYWx1ZSwgbW9kaWZpZXJEZXNjcmlwdG9yLmVuaGFuY2VyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FjdGlvbihkZXNjcmlwdG9yLnZhbHVlKSAmJiBkZXNjcmlwdG9yLnZhbHVlLmF1dG9CaW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkZWZpbmVCb3VuZEFjdGlvbihhZG0udGFyZ2V0LCBwcm9wTmFtZSwgZGVzY3JpcHRvci52YWx1ZS5vcmlnaW5hbEZuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0NvbXB1dGVkVmFsdWUoZGVzY3JpcHRvci52YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIHg6IGNvbXB1dGVkKHNvbWVFeHByKVxuICAgICAgICAgICAgZGVmaW5lQ29tcHV0ZWRQcm9wZXJ0eUZyb21Db21wdXRlZFZhbHVlKGFkbSwgcHJvcE5hbWUsIGRlc2NyaXB0b3IudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8geDogc29tZVZhbHVlXG4gICAgICAgICAgICBkZWZpbmVPYnNlcnZhYmxlUHJvcGVydHkoYWRtLCBwcm9wTmFtZSwgZGVzY3JpcHRvci52YWx1ZSwgZGVmYXVsdEVuaGFuY2VyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZ2V0IHgoKSB7IHJldHVybiAzIH0gc2V0IHgodikgeyB9XG4gICAgICAgIGRlZmluZUNvbXB1dGVkUHJvcGVydHkoYWRtLCBwcm9wTmFtZSwgZGVzY3JpcHRvci5nZXQsIGRlc2NyaXB0b3Iuc2V0LCBjb21wYXJlci5kZWZhdWx0LCB0cnVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWZpbmVPYnNlcnZhYmxlUHJvcGVydHkoYWRtLCBwcm9wTmFtZSwgbmV3VmFsdWUsIGVuaGFuY2VyKSB7XG4gICAgYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUoYWRtLnRhcmdldCwgcHJvcE5hbWUpO1xuICAgIGlmIChoYXNJbnRlcmNlcHRvcnMoYWRtKSkge1xuICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKGFkbSwge1xuICAgICAgICAgICAgb2JqZWN0OiBhZG0udGFyZ2V0LFxuICAgICAgICAgICAgbmFtZTogcHJvcE5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgfVxuICAgIHZhciBvYnNlcnZhYmxlID0gKGFkbS52YWx1ZXNbcHJvcE5hbWVdID0gbmV3IE9ic2VydmFibGVWYWx1ZShuZXdWYWx1ZSwgZW5oYW5jZXIsIGFkbS5uYW1lICsgXCIuXCIgKyBwcm9wTmFtZSwgZmFsc2UpKTtcbiAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUudmFsdWU7IC8vIG9ic2VydmFibGVWYWx1ZSBtaWdodCBoYXZlIGNoYW5nZWQgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYWRtLnRhcmdldCwgcHJvcE5hbWUsIGdlbmVyYXRlT2JzZXJ2YWJsZVByb3BDb25maWcocHJvcE5hbWUpKTtcbiAgICBub3RpZnlQcm9wZXJ0eUFkZGl0aW9uKGFkbSwgYWRtLnRhcmdldCwgcHJvcE5hbWUsIG5ld1ZhbHVlKTtcbn1cbmZ1bmN0aW9uIGRlZmluZUNvbXB1dGVkUHJvcGVydHkoYWRtLCBwcm9wTmFtZSwgZ2V0dGVyLCBzZXR0ZXIsIGVxdWFscywgYXNJbnN0YW5jZVByb3BlcnR5KSB7XG4gICAgaWYgKGFzSW5zdGFuY2VQcm9wZXJ0eSlcbiAgICAgICAgYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUoYWRtLnRhcmdldCwgcHJvcE5hbWUpO1xuICAgIGFkbS52YWx1ZXNbcHJvcE5hbWVdID0gbmV3IENvbXB1dGVkVmFsdWUoZ2V0dGVyLCBhZG0udGFyZ2V0LCBlcXVhbHMsIGFkbS5uYW1lICsgXCIuXCIgKyBwcm9wTmFtZSwgc2V0dGVyKTtcbiAgICBpZiAoYXNJbnN0YW5jZVByb3BlcnR5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhZG0udGFyZ2V0LCBwcm9wTmFtZSwgZ2VuZXJhdGVDb21wdXRlZFByb3BDb25maWcocHJvcE5hbWUpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZWZpbmVDb21wdXRlZFByb3BlcnR5RnJvbUNvbXB1dGVkVmFsdWUoYWRtLCBwcm9wTmFtZSwgY29tcHV0ZWRWYWx1ZSkge1xuICAgIHZhciBuYW1lID0gYWRtLm5hbWUgKyBcIi5cIiArIHByb3BOYW1lO1xuICAgIGNvbXB1dGVkVmFsdWUubmFtZSA9IG5hbWU7XG4gICAgaWYgKCFjb21wdXRlZFZhbHVlLnNjb3BlKVxuICAgICAgICBjb21wdXRlZFZhbHVlLnNjb3BlID0gYWRtLnRhcmdldDtcbiAgICBhZG0udmFsdWVzW3Byb3BOYW1lXSA9IGNvbXB1dGVkVmFsdWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFkbS50YXJnZXQsIHByb3BOYW1lLCBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkpO1xufVxudmFyIG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3MgPSB7fTtcbnZhciBjb21wdXRlZFByb3BlcnR5Q29uZmlncyA9IHt9O1xuZnVuY3Rpb24gZ2VuZXJhdGVPYnNlcnZhYmxlUHJvcENvbmZpZyhwcm9wTmFtZSkge1xuICAgIHJldHVybiAob2JzZXJ2YWJsZVByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gfHxcbiAgICAgICAgKG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdID0ge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRtb2J4LnZhbHVlc1twcm9wTmFtZV0uZ2V0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHNldFByb3BlcnR5VmFsdWUodGhpcywgcHJvcE5hbWUsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkge1xuICAgIHJldHVybiAoY29tcHV0ZWRQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdIHx8XG4gICAgICAgIChjb21wdXRlZFByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRtb2J4LnZhbHVlc1twcm9wTmFtZV0uZ2V0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRtb2J4LnZhbHVlc1twcm9wTmFtZV0uc2V0KHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG59XG5mdW5jdGlvbiBzZXRQcm9wZXJ0eVZhbHVlKGluc3RhbmNlLCBuYW1lLCBuZXdWYWx1ZSkge1xuICAgIHZhciBhZG0gPSBpbnN0YW5jZS4kbW9ieDtcbiAgICB2YXIgb2JzZXJ2YWJsZSA9IGFkbS52YWx1ZXNbbmFtZV07XG4gICAgLy8gaW50ZXJjZXB0XG4gICAgaWYgKGhhc0ludGVyY2VwdG9ycyhhZG0pKSB7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UoYWRtLCB7XG4gICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgb2JqZWN0OiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICB9XG4gICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgLy8gbm90aWZ5IHNweSAmIG9ic2VydmVyc1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gVU5DSEFOR0VEKSB7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnMoYWRtKTtcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgICAgICBvYnNlcnZhYmxlLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyhhZG0sIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBub3RpZnlQcm9wZXJ0eUFkZGl0aW9uKGFkbSwgb2JqZWN0LCBuYW1lLCBuZXdWYWx1ZSkge1xuICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnMoYWRtKTtcbiAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgPyB7XG4gICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxuICAgICAgICAgICAgb2JqZWN0OiBvYmplY3QsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgOiBudWxsO1xuICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgIHNweVJlcG9ydFN0YXJ0KGNoYW5nZSk7XG4gICAgaWYgKG5vdGlmeSlcbiAgICAgICAgbm90aWZ5TGlzdGVuZXJzKGFkbSwgY2hhbmdlKTtcbiAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbn1cbnZhciBpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb25cIiwgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKTtcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykge1xuICAgIGlmIChpc09iamVjdCh0aGluZykpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBydW5MYXp5SW5pdGlhbGl6ZXJzKHRoaW5nKTtcbiAgICAgICAgcmV0dXJuIGlzT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKHRoaW5nLiRtb2J4KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgcmVhY3RpdmUuXG4gKiBAcGFyYW0gdmFsdWUgb2JqZWN0LCBmdW5jdGlvbiBvciBhcnJheVxuICogQHBhcmFtIHByb3BlcnR5IGlmIHByb3BlcnR5IGlzIHNwZWNpZmllZCwgY2hlY2tzIHdoZXRoZXIgdmFsdWUucHJvcGVydHkgaXMgcmVhY3RpdmUuXG4gKi9cbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVBcnJheSh2YWx1ZSkgfHwgaXNPYnNlcnZhYmxlTWFwKHZhbHVlKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibTAxOVwiKSk7XG4gICAgICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBvID0gdmFsdWUuJG1vYng7XG4gICAgICAgICAgICByZXR1cm4gby52YWx1ZXMgJiYgISFvLnZhbHVlc1twcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBGb3IgZmlyc3QgY2hlY2ssIHNlZSAjNzAxXG4gICAgcmV0dXJuIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpIHx8XG4gICAgICAgICEhdmFsdWUuJG1vYnggfHxcbiAgICAgICAgaXNBdG9tKHZhbHVlKSB8fFxuICAgICAgICBpc1JlYWN0aW9uKHZhbHVlKSB8fFxuICAgICAgICBpc0NvbXB1dGVkVmFsdWUodmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoZW5oYW5jZXIpIHtcbiAgICBpbnZhcmlhbnQoISFlbmhhbmNlciwgXCI6KFwiKTtcbiAgICByZXR1cm4gY3JlYXRlQ2xhc3NQcm9wZXJ0eURlY29yYXRvcihmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBiYXNlVmFsdWUsIF8sIGJhc2VEZXNjcmlwdG9yKSB7XG4gICAgICAgIGFzc2VydFByb3BlcnR5Q29uZmlndXJhYmxlKHRhcmdldCwgbmFtZSk7XG4gICAgICAgIGludmFyaWFudCghYmFzZURlc2NyaXB0b3IgfHwgIWJhc2VEZXNjcmlwdG9yLmdldCwgZ2V0TWVzc2FnZShcIm0wMjJcIikpO1xuICAgICAgICB2YXIgYWRtID0gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgdW5kZWZpbmVkKTtcbiAgICAgICAgZGVmaW5lT2JzZXJ2YWJsZVByb3BlcnR5KGFkbSwgbmFtZSwgYmFzZVZhbHVlLCBlbmhhbmNlcik7XG4gICAgfSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLiRtb2J4LnZhbHVlc1tuYW1lXTtcbiAgICAgICAgaWYgKG9ic2VydmFibGUgPT09IHVuZGVmaW5lZCAvLyBTZWUgIzUwNVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5nZXQoKTtcbiAgICB9LCBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc2V0UHJvcGVydHlWYWx1ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSwgdHJ1ZSwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBleHRlbmRPYnNlcnZhYmxlKHRhcmdldCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcHJvcGVydGllc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIGV4dGVuZE9ic2VydmFibGVIZWxwZXIodGFyZ2V0LCBkZWVwRW5oYW5jZXIsIHByb3BlcnRpZXMpO1xufVxuZnVuY3Rpb24gZXh0ZW5kU2hhbGxvd09ic2VydmFibGUodGFyZ2V0KSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwcm9wZXJ0aWVzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kT2JzZXJ2YWJsZUhlbHBlcih0YXJnZXQsIHJlZmVyZW5jZUVuaGFuY2VyLCBwcm9wZXJ0aWVzKTtcbn1cbmZ1bmN0aW9uIGV4dGVuZE9ic2VydmFibGVIZWxwZXIodGFyZ2V0LCBkZWZhdWx0RW5oYW5jZXIsIHByb3BlcnRpZXMpIHtcbiAgICBpbnZhcmlhbnQoYXJndW1lbnRzLmxlbmd0aCA+PSAyLCBnZXRNZXNzYWdlKFwibTAxNFwiKSk7XG4gICAgaW52YXJpYW50KHR5cGVvZiB0YXJnZXQgPT09IFwib2JqZWN0XCIsIGdldE1lc3NhZ2UoXCJtMDE1XCIpKTtcbiAgICBpbnZhcmlhbnQoIWlzT2JzZXJ2YWJsZU1hcCh0YXJnZXQpLCBnZXRNZXNzYWdlKFwibTAxNlwiKSk7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wU2V0KSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgcHJvcFNldCA9PT0gXCJvYmplY3RcIiwgZ2V0TWVzc2FnZShcIm0wMTdcIikpO1xuICAgICAgICBpbnZhcmlhbnQoIWlzT2JzZXJ2YWJsZShwcm9wU2V0KSwgZ2V0TWVzc2FnZShcIm0wMThcIikpO1xuICAgIH0pO1xuICAgIHZhciBhZG0gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0KTtcbiAgICB2YXIgZGVmaW5lZFByb3BzID0ge307XG4gICAgLy8gTm90ZSBjb3VsZCBiZSBvcHRpbWlzZWQgaWYgcHJvcGVydGllcy5sZW5ndGggPT09IDFcbiAgICBmb3IgKHZhciBpID0gcHJvcGVydGllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgcHJvcFNldCA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wU2V0KVxuICAgICAgICAgICAgaWYgKGRlZmluZWRQcm9wc1trZXldICE9PSB0cnVlICYmIGhhc093blByb3BlcnR5KHByb3BTZXQsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVkUHJvcHNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gcHJvcFNldCAmJiAhaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZSh0YXJnZXQsIGtleSkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBzZWUgIzExMSwgc2tpcCBub24tY29uZmlndXJhYmxlIG9yIG5vbi13cml0YWJsZSBwcm9wcyBmb3IgYG9ic2VydmFibGUob2JqZWN0KWAuXG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BTZXQsIGtleSk7XG4gICAgICAgICAgICAgICAgZGVmaW5lT2JzZXJ2YWJsZVByb3BlcnR5RnJvbURlc2NyaXB0b3IoYWRtLCBrZXksIGRlc2NyaXB0b3IsIGRlZmF1bHRFbmhhbmNlcik7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBkZWVwRGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoZGVlcEVuaGFuY2VyKTtcbnZhciBzaGFsbG93RGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoc2hhbGxvd0VuaGFuY2VyKTtcbnZhciByZWZEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihyZWZlcmVuY2VFbmhhbmNlcik7XG52YXIgZGVlcFN0cnVjdERlY29yYXRvciA9IGNyZWF0ZURlY29yYXRvckZvckVuaGFuY2VyKGRlZXBTdHJ1Y3RFbmhhbmNlcik7XG52YXIgcmVmU3RydWN0RGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIocmVmU3RydWN0RW5oYW5jZXIpO1xuLyoqXG4gKiBUdXJucyBhbiBvYmplY3QsIGFycmF5IG9yIGZ1bmN0aW9uIGludG8gYSByZWFjdGl2ZSBzdHJ1Y3R1cmUuXG4gKiBAcGFyYW0gdiB0aGUgdmFsdWUgd2hpY2ggc2hvdWxkIGJlY29tZSBvYnNlcnZhYmxlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlKHYpIHtcbiAgICBpZiAodiA9PT0gdm9pZCAwKSB7IHYgPSB1bmRlZmluZWQ7IH1cbiAgICAvLyBAb2JzZXJ2YWJsZSBzb21lUHJvcDtcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGRlZXBEZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBpbnZhcmlhbnQoYXJndW1lbnRzLmxlbmd0aCA8PSAxLCBnZXRNZXNzYWdlKFwibTAyMVwiKSk7XG4gICAgaW52YXJpYW50KCFpc01vZGlmaWVyRGVzY3JpcHRvcih2KSwgZ2V0TWVzc2FnZShcIm0wMjBcIikpO1xuICAgIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICAgIGlmIChpc09ic2VydmFibGUodikpXG4gICAgICAgIHJldHVybiB2O1xuICAgIC8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgYW5kIG11dGF0ZWQ/XG4gICAgdmFyIHJlcyA9IGRlZXBFbmhhbmNlcih2LCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgLy8gdGhpcyB2YWx1ZSBjb3VsZCBiZSBjb252ZXJ0ZWQgdG8gYSBuZXcgb2JzZXJ2YWJsZSBkYXRhIHN0cnVjdHVyZSwgcmV0dXJuIGl0XG4gICAgaWYgKHJlcyAhPT0gdilcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAvLyBvdGhlcndpc2UsIGp1c3QgYm94IGl0XG4gICAgcmV0dXJuIG9ic2VydmFibGUuYm94KHYpO1xufVxudmFyIG9ic2VydmFibGVGYWN0b3JpZXMgPSB7XG4gICAgYm94OiBmdW5jdGlvbiAodmFsdWUsIG5hbWUpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJib3hcIik7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBkZWVwRW5oYW5jZXIsIG5hbWUpO1xuICAgIH0sXG4gICAgc2hhbGxvd0JveDogZnVuY3Rpb24gKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwic2hhbGxvd0JveFwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlVmFsdWUodmFsdWUsIHJlZmVyZW5jZUVuaGFuY2VyLCBuYW1lKTtcbiAgICB9LFxuICAgIGFycmF5OiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgbmFtZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcImFycmF5XCIpO1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCBkZWVwRW5oYW5jZXIsIG5hbWUpO1xuICAgIH0sXG4gICAgc2hhbGxvd0FycmF5OiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgbmFtZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcInNoYWxsb3dBcnJheVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgcmVmZXJlbmNlRW5oYW5jZXIsIG5hbWUpO1xuICAgIH0sXG4gICAgbWFwOiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgbmFtZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcIm1hcFwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlTWFwKGluaXRpYWxWYWx1ZXMsIGRlZXBFbmhhbmNlciwgbmFtZSk7XG4gICAgfSxcbiAgICBzaGFsbG93TWFwOiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgbmFtZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcInNoYWxsb3dNYXBcIik7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZU1hcChpbml0aWFsVmFsdWVzLCByZWZlcmVuY2VFbmhhbmNlciwgbmFtZSk7XG4gICAgfSxcbiAgICBvYmplY3Q6IGZ1bmN0aW9uIChwcm9wcywgbmFtZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcIm9iamVjdFwiKTtcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgICAvLyBjb252ZXJ0IHRvIG9ic2VydmFibGUgb2JqZWN0XG4gICAgICAgIGFzT2JzZXJ2YWJsZU9iamVjdChyZXMsIG5hbWUpO1xuICAgICAgICAvLyBhZGQgcHJvcGVydGllc1xuICAgICAgICBleHRlbmRPYnNlcnZhYmxlKHJlcywgcHJvcHMpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0sXG4gICAgc2hhbGxvd09iamVjdDogZnVuY3Rpb24gKHByb3BzLCBuYW1lKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwic2hhbGxvd09iamVjdFwiKTtcbiAgICAgICAgdmFyIHJlcyA9IHt9O1xuICAgICAgICBhc09ic2VydmFibGVPYmplY3QocmVzLCBuYW1lKTtcbiAgICAgICAgZXh0ZW5kU2hhbGxvd09ic2VydmFibGUocmVzLCBwcm9wcyk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSxcbiAgICByZWY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAvLyBhbHRob3VnaCByZWYgY3JlYXRlcyBhY3R1YWxseSBhIG1vZGlmaWVyIGRlc2NyaXB0b3IsIHRoZSB0eXBlIG9mIHRoZSByZXN1bHRpZyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBvZiB0aGUgb2JqZWN0IGlzIGBUYCBpbiB0aGUgZW5kLCB3aGVuIHRoZSBkZXNjcmlwdG9ycyBhcmUgaW50ZXJwcmV0ZWRcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVNb2RpZmllckRlc2NyaXB0b3IocmVmZXJlbmNlRW5oYW5jZXIsIGFyZ3VtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVmRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNoYWxsb3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAvLyBhbHRob3VnaCByZWYgY3JlYXRlcyBhY3R1YWxseSBhIG1vZGlmaWVyIGRlc2NyaXB0b3IsIHRoZSB0eXBlIG9mIHRoZSByZXN1bHRpZyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBvZiB0aGUgb2JqZWN0IGlzIGBUYCBpbiB0aGUgZW5kLCB3aGVuIHRoZSBkZXNjcmlwdG9ycyBhcmUgaW50ZXJwcmV0ZWRcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVNb2RpZmllckRlc2NyaXB0b3Ioc2hhbGxvd0VuaGFuY2VyLCBhcmd1bWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNoYWxsb3dEZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVlcDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIC8vIGFsdGhvdWdoIHJlZiBjcmVhdGVzIGFjdHVhbGx5IGEgbW9kaWZpZXIgZGVzY3JpcHRvciwgdGhlIHR5cGUgb2YgdGhlIHJlc3VsdGlnIHByb3BlcnRpZXNcbiAgICAgICAgICAgIC8vIG9mIHRoZSBvYmplY3QgaXMgYFRgIGluIHRoZSBlbmQsIHdoZW4gdGhlIGRlc2NyaXB0b3JzIGFyZSBpbnRlcnByZXRlZFxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1vZGlmaWVyRGVzY3JpcHRvcihkZWVwRW5oYW5jZXIsIGFyZ3VtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVlcERlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdHJ1Y3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAvLyBhbHRob3VnaCByZWYgY3JlYXRlcyBhY3R1YWxseSBhIG1vZGlmaWVyIGRlc2NyaXB0b3IsIHRoZSB0eXBlIG9mIHRoZSByZXN1bHRpZyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBvZiB0aGUgb2JqZWN0IGlzIGBUYCBpbiB0aGUgZW5kLCB3aGVuIHRoZSBkZXNjcmlwdG9ycyBhcmUgaW50ZXJwcmV0ZWRcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVNb2RpZmllckRlc2NyaXB0b3IoZGVlcFN0cnVjdEVuaGFuY2VyLCBhcmd1bWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGRlZXBTdHJ1Y3REZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG52YXIgb2JzZXJ2YWJsZSA9IGNyZWF0ZU9ic2VydmFibGU7XG4vLyB3ZWlyZCB0cmljayB0byBrZWVwIG91ciB0eXBpbmdzIG5pY2VseSB3aXRoIG91ciBmdW5jcywgYW5kIHN0aWxsIGV4dGVuZCB0aGUgb2JzZXJ2YWJsZSBmdW5jdGlvblxuT2JqZWN0LmtleXMob2JzZXJ2YWJsZUZhY3RvcmllcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gKG9ic2VydmFibGVbbmFtZV0gPSBvYnNlcnZhYmxlRmFjdG9yaWVzW25hbWVdKTsgfSk7XG5vYnNlcnZhYmxlLmRlZXAuc3RydWN0ID0gb2JzZXJ2YWJsZS5zdHJ1Y3Q7XG5vYnNlcnZhYmxlLnJlZi5zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVNb2RpZmllckRlc2NyaXB0b3IocmVmU3RydWN0RW5oYW5jZXIsIGFyZ3VtZW50c1swXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVmU3RydWN0RGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxufTtcbmZ1bmN0aW9uIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKG1ldGhvZE5hbWUpIHtcbiAgICBmYWlsKFwiRXhwZWN0ZWQgb25lIG9yIHR3byBhcmd1bWVudHMgdG8gb2JzZXJ2YWJsZS5cIiArIG1ldGhvZE5hbWUgKyBcIi4gRGlkIHlvdSBhY2NpZGVudGFsbHkgdHJ5IHRvIHVzZSBvYnNlcnZhYmxlLlwiICsgbWV0aG9kTmFtZSArIFwiIGFzIGRlY29yYXRvcj9cIik7XG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZXJEZXNjcmlwdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gXCJvYmplY3RcIiAmJiB0aGluZyAhPT0gbnVsbCAmJiB0aGluZy5pc01vYnhNb2RpZmllckRlc2NyaXB0b3IgPT09IHRydWU7XG59XG5mdW5jdGlvbiBjcmVhdGVNb2RpZmllckRlc2NyaXB0b3IoZW5oYW5jZXIsIGluaXRpYWxWYWx1ZSkge1xuICAgIGludmFyaWFudCghaXNNb2RpZmllckRlc2NyaXB0b3IoaW5pdGlhbFZhbHVlKSwgXCJNb2RpZmllcnMgY2Fubm90IGJlIG5lc3RlZFwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc01vYnhNb2RpZmllckRlc2NyaXB0b3I6IHRydWUsXG4gICAgICAgIGluaXRpYWxWYWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICBlbmhhbmNlcjogZW5oYW5jZXJcbiAgICB9O1xufVxuZnVuY3Rpb24gZGVlcEVuaGFuY2VyKHYsIF8sIG5hbWUpIHtcbiAgICBpZiAoaXNNb2RpZmllckRlc2NyaXB0b3IodikpXG4gICAgICAgIGZhaWwoXCJZb3UgdHJpZWQgdG8gYXNzaWduIGEgbW9kaWZpZXIgd3JhcHBlZCB2YWx1ZSB0byBhIGNvbGxlY3Rpb24sIHBsZWFzZSBkZWZpbmUgbW9kaWZpZXJzIHdoZW4gY3JlYXRpbmcgdGhlIGNvbGxlY3Rpb24sIG5vdCB3aGVuIG1vZGlmeWluZyBpdFwiKTtcbiAgICAvLyBpdCBpcyBhbiBvYnNlcnZhYmxlIGFscmVhZHksIGRvbmVcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHYpKVxuICAgICAgICByZXR1cm4gdjtcbiAgICAvLyBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29udmVydGVkIGFuZCBtdXRhdGVkP1xuICAgIGlmIChBcnJheS5pc0FycmF5KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5hcnJheSh2LCBuYW1lKTtcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIG5hbWUpO1xuICAgIGlmIChpc0VTNk1hcCh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUubWFwKHYsIG5hbWUpO1xuICAgIHJldHVybiB2O1xufVxuZnVuY3Rpb24gc2hhbGxvd0VuaGFuY2VyKHYsIF8sIG5hbWUpIHtcbiAgICBpZiAoaXNNb2RpZmllckRlc2NyaXB0b3IodikpXG4gICAgICAgIGZhaWwoXCJZb3UgdHJpZWQgdG8gYXNzaWduIGEgbW9kaWZpZXIgd3JhcHBlZCB2YWx1ZSB0byBhIGNvbGxlY3Rpb24sIHBsZWFzZSBkZWZpbmUgbW9kaWZpZXJzIHdoZW4gY3JlYXRpbmcgdGhlIGNvbGxlY3Rpb24sIG5vdCB3aGVuIG1vZGlmeWluZyBpdFwiKTtcbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpXG4gICAgICAgIHJldHVybiB2O1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodikgfHwgaXNPYnNlcnZhYmxlQXJyYXkodikgfHwgaXNPYnNlcnZhYmxlTWFwKHYpKVxuICAgICAgICByZXR1cm4gdjtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc2hhbGxvd0FycmF5KHYsIG5hbWUpO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHYpKVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZS5zaGFsbG93T2JqZWN0KHYsIG5hbWUpO1xuICAgIGlmIChpc0VTNk1hcCh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc2hhbGxvd01hcCh2LCBuYW1lKTtcbiAgICByZXR1cm4gZmFpbChcIlRoZSBzaGFsbG93IG1vZGlmaWVyIC8gZGVjb3JhdG9yIGNhbiBvbmx5IHVzZWQgaW4gY29tYmluYXRpb24gd2l0aCBhcnJheXMsIG9iamVjdHMgYW5kIG1hcHNcIik7XG59XG5mdW5jdGlvbiByZWZlcmVuY2VFbmhhbmNlcihuZXdWYWx1ZSkge1xuICAgIC8vIG5ldmVyIHR1cm4gaW50byBhbiBvYnNlcnZhYmxlXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuZnVuY3Rpb24gZGVlcFN0cnVjdEVuaGFuY2VyKHYsIG9sZFZhbHVlLCBuYW1lKSB7XG4gICAgLy8gZG9uJ3QgY29uZnVzZSBzdHJ1Y3R1cmFsbHkgY29tcGFyZSBlbmhhbmNlciB3aXRoIHJlZiBlbmhhbmNlciEgVGhlIGxhdHRlciBpcyBwcm9iYWJseVxuICAgIC8vIG1vcmUgc3VpdGVkIGZvciBpbW11dGFibGUgb2JqZWN0c1xuICAgIGlmIChkZWVwRXF1YWwodiwgb2xkVmFsdWUpKVxuICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgLy8gaXQgaXMgYW4gb2JzZXJ2YWJsZSBhbHJlYWR5LCBkb25lXG4gICAgaWYgKGlzT2JzZXJ2YWJsZSh2KSlcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgLy8gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCBhbmQgbXV0YXRlZD9cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSlcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlQXJyYXkodiwgZGVlcFN0cnVjdEVuaGFuY2VyLCBuYW1lKTtcbiAgICBpZiAoaXNFUzZNYXAodikpXG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZU1hcCh2LCBkZWVwU3RydWN0RW5oYW5jZXIsIG5hbWUpO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KHYpKSB7XG4gICAgICAgIHZhciByZXMgPSB7fTtcbiAgICAgICAgYXNPYnNlcnZhYmxlT2JqZWN0KHJlcywgbmFtZSk7XG4gICAgICAgIGV4dGVuZE9ic2VydmFibGVIZWxwZXIocmVzLCBkZWVwU3RydWN0RW5oYW5jZXIsIFt2XSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIHJldHVybiB2O1xufVxuZnVuY3Rpb24gcmVmU3RydWN0RW5oYW5jZXIodiwgb2xkVmFsdWUsIG5hbWUpIHtcbiAgICBpZiAoZGVlcEVxdWFsKHYsIG9sZFZhbHVlKSlcbiAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgIHJldHVybiB2O1xufVxuXG4vKipcbiAqIER1cmluZyBhIHRyYW5zYWN0aW9uIG5vIHZpZXdzIGFyZSB1cGRhdGVkIHVudGlsIHRoZSBlbmQgb2YgdGhlIHRyYW5zYWN0aW9uLlxuICogVGhlIHRyYW5zYWN0aW9uIHdpbGwgYmUgcnVuIHN5bmNocm9ub3VzbHkgbm9uZXRoZWxlc3MuXG4gKlxuICogQHBhcmFtIGFjdGlvbiBhIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyBzb21lIHJlYWN0aXZlIHN0YXRlXG4gKiBAcmV0dXJucyBhbnkgdmFsdWUgdGhhdCB3YXMgcmV0dXJuZWQgYnkgdGhlICdhY3Rpb24nIHBhcmFtZXRlci5cbiAqL1xuZnVuY3Rpb24gdHJhbnNhY3Rpb24oYWN0aW9uLCB0aGlzQXJnKSB7XG4gICAgaWYgKHRoaXNBcmcgPT09IHZvaWQgMCkgeyB0aGlzQXJnID0gdW5kZWZpbmVkOyB9XG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uYXBwbHkodGhpc0FyZyk7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICBlbmRCYXRjaCgpO1xuICAgIH1cbn1cblxudmFyIE9ic2VydmFibGVNYXBNYXJrZXIgPSB7fTtcbnZhciBPYnNlcnZhYmxlTWFwID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlTWFwKGluaXRpYWxEYXRhLCBlbmhhbmNlciwgbmFtZSkge1xuICAgICAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkgeyBlbmhhbmNlciA9IGRlZXBFbmhhbmNlcjsgfVxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk9ic2VydmFibGVNYXBAXCIgKyBnZXROZXh0SWQoKTsgfVxuICAgICAgICB0aGlzLmVuaGFuY2VyID0gZW5oYW5jZXI7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuJG1vYnggPSBPYnNlcnZhYmxlTWFwTWFya2VyO1xuICAgICAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5faGFzTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gaGFzTWFwLCBub3QgaGFzaE1hcCA+LSkuXG4gICAgICAgIHRoaXMuX2tleXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHVuZGVmaW5lZCwgcmVmZXJlbmNlRW5oYW5jZXIsIHRoaXMubmFtZSArIFwiLmtleXMoKVwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5pbnRlcmNlcHRvcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZUxpc3RlbmVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVoYW5jZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubWVyZ2UoaW5pdGlhbERhdGEpO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5faGFzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2RhdGFba2V5XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRLZXkoa2V5KSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAga2V5ID0gXCJcIiArIGtleTtcbiAgICAgICAgaWYgKHRoaXMuX2hhc01hcFtrZXldKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhc01hcFtrZXldLmdldCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlSGFzTWFwRW50cnkoa2V5LCBmYWxzZSkuZ2V0KCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmFzc2VydFZhbGlkS2V5KGtleSk7XG4gICAgICAgIGtleSA9IFwiXCIgKyBrZXk7XG4gICAgICAgIHZhciBoYXNLZXkgPSB0aGlzLl9oYXMoa2V5KTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogaGFzS2V5ID8gXCJ1cGRhdGVcIiA6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB2YWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzS2V5KSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVWYWx1ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFZhbHVlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFzc2VydFZhbGlkS2V5KGtleSk7XG4gICAgICAgIGtleSA9IFwiXCIgKyBrZXk7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2hhcyhrZXkpKSB7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdGhpcy5fZGF0YVtrZXldLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSlcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9rZXlzLnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgICAgIF90aGlzLl91cGRhdGVIYXNNYXBFbnRyeShrZXksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSQkMSA9IF90aGlzLl9kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZSQkMS5zZXROZXdWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9kYXRhW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5KVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuX3VwZGF0ZUhhc01hcEVudHJ5ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgLy8gb3B0aW1pemF0aW9uOyBkb24ndCBmaWxsIHRoZSBoYXNNYXAgaWYgd2UgYXJlIG5vdCBvYnNlcnZpbmcsIG9yIHJlbW92ZSBlbnRyeSBpZiB0aGVyZSBhcmUgbm8gb2JzZXJ2ZXJzIGFueW1vcmVcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5faGFzTWFwW2tleV07XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgZW50cnkuc2V0TmV3VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW50cnkgPSB0aGlzLl9oYXNNYXBba2V5XSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUodmFsdWUsIHJlZmVyZW5jZUVuaGFuY2VyLCB0aGlzLm5hbWUgKyBcIi5cIiArIGtleSArIFwiP1wiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuX3VwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKG5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlJCQxID0gdGhpcy5fZGF0YVtuYW1lXTtcbiAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlJCQxLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gVU5DSEFOR0VEKSB7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2JzZXJ2YWJsZSQkMS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICAgICAgICAgIG9ic2VydmFibGUkJDEuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl9hZGRWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSQkMSA9IChfdGhpcy5fZGF0YVtuYW1lXSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUobmV3VmFsdWUsIF90aGlzLmVuaGFuY2VyLCBfdGhpcy5uYW1lICsgXCIuXCIgKyBuYW1lLCBmYWxzZSkpO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlJCQxLnZhbHVlOyAvLyB2YWx1ZSBtaWdodCBoYXZlIGJlZW4gY2hhbmdlZFxuICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KG5hbWUsIHRydWUpO1xuICAgICAgICAgICAgX3RoaXMuX2tleXMucHVzaChuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkpXG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAga2V5ID0gXCJcIiArIGtleTtcbiAgICAgICAgaWYgKHRoaXMuaGFzKGtleSkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodGhpcy5fZGF0YVtrZXldLmdldCgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZXIodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcnJheUFzSXRlcmF0b3IodGhpcy5fa2V5cy5zbGljZSgpKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5QXNJdGVyYXRvcih0aGlzLl9rZXlzLm1hcCh0aGlzLmdldCwgdGhpcykpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGFycmF5QXNJdGVyYXRvcih0aGlzLl9rZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBba2V5LCBfdGhpcy5nZXQoa2V5KV07IH0pKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5rZXlzKCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIF90aGlzLmdldChrZXkpLCBrZXksIF90aGlzKTsgfSk7XG4gICAgfTtcbiAgICAvKiogTWVyZ2UgYW5vdGhlciBvYmplY3QgaW50byB0aGlzIG9iamVjdCwgcmV0dXJucyB0aGlzLiAqL1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAob3RoZXIpKSB7XG4gICAgICAgICAgICBvdGhlciA9IG90aGVyLnRvSlMoKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChvdGhlcikpXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob3RoZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gX3RoaXMuc2V0KGtleSwgb3RoZXJba2V5XSk7IH0pO1xuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpXG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXNFUzZNYXAob3RoZXIpKVxuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHsgcmV0dXJuIF90aGlzLnNldChrZXksIHZhbHVlKTsgfSk7XG4gICAgICAgICAgICBlbHNlIGlmIChvdGhlciAhPT0gbnVsbCAmJiBvdGhlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIGZhaWwoXCJDYW5ub3QgaW5pdGlhbGl6ZSBtYXAgZnJvbSBcIiArIG90aGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMua2V5cygpLmZvckVhY2goX3RoaXMuZGVsZXRlLCBfdGhpcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBncmFiIGFsbCB0aGUga2V5cyB0aGF0IGFyZSBwcmVzZW50IGluIHRoZSBuZXcgbWFwIGJ1dCBub3QgcHJlc2VudCBpbiB0aGUgY3VycmVudCBtYXBcbiAgICAgICAgICAgIC8vIGFuZCBkZWxldGUgdGhlbSBmcm9tIHRoZSBtYXAsIHRoZW4gbWVyZ2UgdGhlIG5ldyBtYXBcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBjYXVzZSByZWFjdGlvbnMgb25seSBvbiBjaGFuZ2VkIHZhbHVlc1xuICAgICAgICAgICAgdmFyIG5ld0tleXMgPSBnZXRNYXBMaWtlS2V5cyh2YWx1ZXMpO1xuICAgICAgICAgICAgdmFyIG9sZEtleXMgPSBfdGhpcy5rZXlzKCk7XG4gICAgICAgICAgICB2YXIgbWlzc2luZ0tleXMgPSBvbGRLZXlzLmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gbmV3S2V5cy5pbmRleE9mKGspID09PSAtMTsgfSk7XG4gICAgICAgICAgICBtaXNzaW5nS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IHJldHVybiBfdGhpcy5kZWxldGUoayk7IH0pO1xuICAgICAgICAgICAgX3RoaXMubWVyZ2UodmFsdWVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVNYXAucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNoYWxsb3cgbm9uIG9ic2VydmFibGUgb2JqZWN0IGNsb25lIG9mIHRoaXMgbWFwLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgdmFsdWVzIG1pZ2h0IHN0aWxsIGJlIG9ic2VydmFibGUuIEZvciBhIGRlZXAgY2xvbmUgdXNlIG1vYngudG9KUy5cbiAgICAgKi9cbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS50b0pTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmVzID0ge307XG4gICAgICAgIHRoaXMua2V5cygpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gKHJlc1trZXldID0gX3RoaXMuZ2V0KGtleSkpOyB9KTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlZCBieSBKU09OLnN0cmluZ2lmeVxuICAgICAgICByZXR1cm4gdGhpcy50b0pTKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5pc1ZhbGlkS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSBudWxsIHx8IGtleSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2Yga2V5ID09PSBcIm51bWJlclwiIHx8IHR5cGVvZiBrZXkgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmFzc2VydFZhbGlkS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEtleShrZXkpKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYngubWFwXSBJbnZhbGlkIGtleTogJ1wiICsga2V5ICsgXCInLCBvbmx5IHN0cmluZ3MsIG51bWJlcnMgYW5kIGJvb2xlYW5zIGFyZSBhY2NlcHRlZCBhcyBrZXkgaW4gb2JzZXJ2YWJsZSBtYXBzLlwiKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gKHRoaXMubmFtZSArXG4gICAgICAgICAgICBcIlt7IFwiICtcbiAgICAgICAgICAgIHRoaXMua2V5cygpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgKyBcIjogXCIgKyAoXCJcIiArIF90aGlzLmdldChrZXkpKTsgfSkuam9pbihcIiwgXCIpICtcbiAgICAgICAgICAgIFwiIH1dXCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZXMgdGhpcyBvYmplY3QuIFRyaWdnZXJzIGZvciB0aGUgZXZlbnRzICdhZGQnLCAndXBkYXRlJyBhbmQgJ2RlbGV0ZScuXG4gICAgICogU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3Qvb2JzZXJ2ZVxuICAgICAqIGZvciBjYWxsYmFjayBkZXRhaWxzXG4gICAgICovXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGludmFyaWFudChmaXJlSW1tZWRpYXRlbHkgIT09IHRydWUsIGdldE1lc3NhZ2UoXCJtMDMzXCIpKTtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZU1hcDtcbn0oKSk7XG5kZWNsYXJlSXRlcmF0b3IoT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG59KTtcbmZ1bmN0aW9uIG1hcChpbml0aWFsVmFsdWVzKSB7XG4gICAgZGVwcmVjYXRlZChcImBtb2J4Lm1hcGAgaXMgZGVwcmVjYXRlZCwgdXNlIGBuZXcgT2JzZXJ2YWJsZU1hcGAgb3IgYG1vYngub2JzZXJ2YWJsZS5tYXBgIGluc3RlYWRcIik7XG4gICAgcmV0dXJuIG9ic2VydmFibGUubWFwKGluaXRpYWxWYWx1ZXMpO1xufVxuLyogJ3ZhcicgZml4ZXMgc21hbGwtYnVpbGQgaXNzdWUgKi9cbnZhciBpc09ic2VydmFibGVNYXAgPSBjcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZU1hcFwiLCBPYnNlcnZhYmxlTWFwKTtcblxudmFyIEVNUFRZX0FSUkFZID0gW107XG5PYmplY3QuZnJlZXplKEVNUFRZX0FSUkFZKTtcbmZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IGdsb2JhbDtcbn1cbmZ1bmN0aW9uIGdldE5leHRJZCgpIHtcbiAgICByZXR1cm4gKytnbG9iYWxTdGF0ZS5tb2J4R3VpZDtcbn1cbmZ1bmN0aW9uIGZhaWwobWVzc2FnZSwgdGhpbmcpIHtcbiAgICBpbnZhcmlhbnQoZmFsc2UsIG1lc3NhZ2UsIHRoaW5nKTtcbiAgICB0aHJvdyBcIlhcIjsgLy8gdW5yZWFjaGFibGVcbn1cbmZ1bmN0aW9uIGludmFyaWFudChjaGVjaywgbWVzc2FnZSwgdGhpbmcpIHtcbiAgICBpZiAoIWNoZWNrKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gSW52YXJpYW50IGZhaWxlZDogXCIgKyBtZXNzYWdlICsgKHRoaW5nID8gXCIgaW4gJ1wiICsgdGhpbmcgKyBcIidcIiA6IFwiXCIpKTtcbn1cbi8qKlxuICogUHJpbnRzIGEgZGVwcmVjYXRpb24gbWVzc2FnZSwgYnV0IG9ubHkgb25lIHRpbWUuXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBkZXByZWNhdGVkIG1lc3NhZ2Ugd2FzIGFscmVhZHkgcHJpbnRlZCBiZWZvcmVcbiAqL1xudmFyIGRlcHJlY2F0ZWRNZXNzYWdlcyA9IFtdO1xuZnVuY3Rpb24gZGVwcmVjYXRlZChtc2cpIHtcbiAgICBpZiAoZGVwcmVjYXRlZE1lc3NhZ2VzLmluZGV4T2YobXNnKSAhPT0gLTEpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZXByZWNhdGVkTWVzc2FnZXMucHVzaChtc2cpO1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbbW9ieF0gRGVwcmVjYXRlZDogXCIgKyBtc2cpO1xuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBNYWtlcyBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uIGlzIGludm9rZWQgYXQgbW9zdCBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlKGZ1bmMpIHtcbiAgICB2YXIgaW52b2tlZCA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbnZva2VkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbnZva2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG5mdW5jdGlvbiB1bmlxdWUobGlzdCkge1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKHJlcy5pbmRleE9mKGl0ZW0pID09PSAtMSlcbiAgICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBqb2luU3RyaW5ncyh0aGluZ3MsIGxpbWl0LCBzZXBhcmF0b3IpIHtcbiAgICBpZiAobGltaXQgPT09IHZvaWQgMCkgeyBsaW1pdCA9IDEwMDsgfVxuICAgIGlmIChzZXBhcmF0b3IgPT09IHZvaWQgMCkgeyBzZXBhcmF0b3IgPSBcIiAtIFwiOyB9XG4gICAgaWYgKCF0aGluZ3MpXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIHZhciBzbGljZWQgPSB0aGluZ3Muc2xpY2UoMCwgbGltaXQpO1xuICAgIHJldHVybiBcIlwiICsgc2xpY2VkLmpvaW4oc2VwYXJhdG9yKSArICh0aGluZ3MubGVuZ3RoID4gbGltaXRcbiAgICAgICAgPyBcIiAoLi4uIGFuZCBcIiArICh0aGluZ3MubGVuZ3RoIC0gbGltaXQpICsgXCJtb3JlKVwiXG4gICAgICAgIDogXCJcIik7XG59XG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59XG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgcmV0dXJuIHByb3RvID09PSBPYmplY3QucHJvdG90eXBlIHx8IHByb3RvID09PSBudWxsO1xufVxuZnVuY3Rpb24gb2JqZWN0QXNzaWduKCkge1xuICAgIHZhciByZXMgPSBhcmd1bWVudHNbMF07XG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpXG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbnZhciBwcm90b3R5cGVIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmplY3QsIHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIHByb3RvdHlwZUhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wTmFtZSk7XG59XG5mdW5jdGlvbiBtYWtlTm9uRW51bWVyYWJsZShvYmplY3QsIHByb3BOYW1lcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFkZEhpZGRlblByb3Aob2JqZWN0LCBwcm9wTmFtZXNbaV0sIG9iamVjdFtwcm9wTmFtZXNbaV1dKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRIaWRkZW5Qcm9wKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkSGlkZGVuRmluYWxQcm9wKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzUHJvcGVydHlDb25maWd1cmFibGUob2JqZWN0LCBwcm9wKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcCk7XG4gICAgcmV0dXJuICFkZXNjcmlwdG9yIHx8IChkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAhPT0gZmFsc2UgJiYgZGVzY3JpcHRvci53cml0YWJsZSAhPT0gZmFsc2UpO1xufVxuZnVuY3Rpb24gYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUob2JqZWN0LCBwcm9wKSB7XG4gICAgaW52YXJpYW50KGlzUHJvcGVydHlDb25maWd1cmFibGUob2JqZWN0LCBwcm9wKSwgXCJDYW5ub3QgbWFrZSBwcm9wZXJ0eSAnXCIgKyBwcm9wICsgXCInIG9ic2VydmFibGUsIGl0IGlzIG5vdCBjb25maWd1cmFibGUgYW5kIHdyaXRhYmxlIGluIHRoZSB0YXJnZXQgb2JqZWN0XCIpO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShuYW1lLCBjbGF6eikge1xuICAgIHZhciBwcm9wTmFtZSA9IFwiaXNNb2JYXCIgKyBuYW1lO1xuICAgIGNsYXp6LnByb3RvdHlwZVtwcm9wTmFtZV0gPSB0cnVlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gaXNPYmplY3QoeCkgJiYgeFtwcm9wTmFtZV0gPT09IHRydWU7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFyZUJvdGhOYU4oYSwgYikge1xuICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgYiA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihhKSAmJiBpc05hTihiKTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBhcmd1bWVudCBpcyBhbiBhcnJheSwgZGlzcmVnYXJkaW5nIG9ic2VydmFiaWxpdHkuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSB8fCBpc09ic2VydmFibGVBcnJheSh4KTtcbn1cbmZ1bmN0aW9uIGlzRVM2TWFwKHRoaW5nKSB7XG4gICAgaWYgKGdldEdsb2JhbCgpLk1hcCAhPT0gdW5kZWZpbmVkICYmIHRoaW5nIGluc3RhbmNlb2YgZ2V0R2xvYmFsKCkuTWFwKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXRNYXBMaWtlS2V5cyhtYXAkJDEpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChtYXAkJDEpKVxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobWFwJCQxKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXAkJDEpKVxuICAgICAgICByZXR1cm4gbWFwJCQxLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfYVswXTtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH0pO1xuICAgIGlmIChpc0VTNk1hcChtYXAkJDEpKVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShtYXAkJDEua2V5cygpKTtcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG1hcCQkMSkpXG4gICAgICAgIHJldHVybiBtYXAkJDEua2V5cygpO1xuICAgIHJldHVybiBmYWlsKFwiQ2Fubm90IGdldCBrZXlzIGZyb20gXCIgKyBtYXAkJDEpO1xufVxuZnVuY3Rpb24gaXRlcmF0b3JUb0FycmF5KGl0KSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByID0gaXQubmV4dCgpO1xuICAgICAgICBpZiAoci5kb25lKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIHJlcy5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gcHJpbWl0aXZlU3ltYm9sKCkge1xuICAgIHJldHVybiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC50b1ByaW1pdGl2ZSkgfHwgXCJAQHRvUHJpbWl0aXZlXCI7XG59XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBcIlwiICsgdmFsdWUgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBUaGVzZSB2YWx1ZXMgd2lsbCBwZXJzaXN0IGlmIGdsb2JhbCBzdGF0ZSBpcyByZXNldFxuICovXG52YXIgcGVyc2lzdGVudEtleXMgPSBbXCJtb2J4R3VpZFwiLCBcInJlc2V0SWRcIiwgXCJzcHlMaXN0ZW5lcnNcIiwgXCJzdHJpY3RNb2RlXCIsIFwicnVuSWRcIl07XG52YXIgTW9iWEdsb2JhbHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1vYlhHbG9iYWxzKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTW9iWEdsb2JhbHMgdmVyc2lvbi5cbiAgICAgICAgICogTW9iWCBjb21wYXRpYmxpdHkgd2l0aCBvdGhlciB2ZXJzaW9ucyBsb2FkZWQgaW4gbWVtb3J5IGFzIGxvbmcgYXMgdGhpcyB2ZXJzaW9uIG1hdGNoZXMuXG4gICAgICAgICAqIEl0IGluZGljYXRlcyB0aGF0IHRoZSBnbG9iYWwgc3RhdGUgc3RpbGwgc3RvcmVzIHNpbWlsYXIgaW5mb3JtYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IDU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50bHkgcnVubmluZyBkZXJpdmF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYWNraW5nRGVyaXZhdGlvbiA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcmUgd2UgcnVubmluZyBhIGNvbXB1dGF0aW9uIGN1cnJlbnRseT8gKG5vdCBhIHJlYWN0aW9uKVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wdXRhdGlvbkRlcHRoID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVhY2ggdGltZSBhIGRlcml2YXRpb24gaXMgdHJhY2tlZCwgaXQgaXMgYXNzaWduZWQgYSB1bmlxdWUgcnVuLWlkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJ1bklkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICdndWlkJyBmb3IgZ2VuZXJhbCBwdXJwb3NlLiBXaWxsIGJlIHBlcnNpc3RlZCBhbW9uZ3N0IHJlc2V0cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW9ieEd1aWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJlIHdlIGluIGEgYmF0Y2ggYmxvY2s/IChhbmQgaG93IG1hbnkgb2YgdGhlbSlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5CYXRjaCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZhYmxlcyB0aGF0IGRvbid0IGhhdmUgb2JzZXJ2ZXJzIGFueW1vcmUsIGFuZCBhcmUgYWJvdXQgdG8gYmVcbiAgICAgICAgICogc3VzcGVuZGVkLCB1bmxlc3Mgc29tZWJvZHkgZWxzZSBhY2Nlc3NlcyBpdCBpbiB0aGUgc2FtZSBiYXRjaFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SU9ic2VydmFibGVbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGVuZGluZ1Vub2JzZXJ2YXRpb25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0IG9mIHNjaGVkdWxlZCwgbm90IHlldCBleGVjdXRlZCwgcmVhY3Rpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wZW5kaW5nUmVhY3Rpb25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcmUgd2UgY3VycmVudGx5IHByb2Nlc3NpbmcgcmVhY3Rpb25zP1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIGl0IGFsbG93ZWQgdG8gY2hhbmdlIG9ic2VydmFibGVzIGF0IHRoaXMgcG9pbnQ/XG4gICAgICAgICAqIEluIGdlbmVyYWwsIE1vYlggZG9lc24ndCBhbGxvdyB0aGF0IHdoZW4gcnVubmluZyBjb21wdXRhdGlvbnMgYW5kIFJlYWN0LnJlbmRlci5cbiAgICAgICAgICogVG8gZW5zdXJlIHRoYXQgdGhvc2UgZnVuY3Rpb25zIHN0YXkgcHVyZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWxsb3dTdGF0ZUNoYW5nZXMgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgc3RyaWN0IG1vZGUgaXMgZW5hYmxlZCwgc3RhdGUgY2hhbmdlcyBhcmUgYnkgZGVmYXVsdCBub3QgYWxsb3dlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdHJpY3RNb2RlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2VkIGJ5IGNyZWF0ZVRyYW5zZm9ybWVyIHRvIGRldGVjdCB0aGF0IHRoZSBnbG9iYWwgc3RhdGUgaGFzIGJlZW4gcmVzZXQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlc2V0SWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3B5IGNhbGxiYWNrc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zcHlMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdsb2JhbGx5IGF0dGFjaGVkIGVycm9yIGhhbmRsZXJzIHRoYXQgcmVhY3Qgc3BlY2lmaWNhbGx5IHRvIGVycm9ycyBpbiByZWFjdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzID0gW107XG4gICAgfVxuICAgIHJldHVybiBNb2JYR2xvYmFscztcbn0oKSk7XG52YXIgZ2xvYmFsU3RhdGUgPSBuZXcgTW9iWEdsb2JhbHMoKTtcbnZhciBzaGFyZUdsb2JhbFN0YXRlQ2FsbGVkID0gZmFsc2U7XG52YXIgcnVuSW5Jc29sYXRpb25DYWxsZWQgPSBmYWxzZTtcbnZhciB3YXJuZWRBYm91dE11bHRpcGxlSW5zdGFuY2VzID0gZmFsc2U7XG57XG4gICAgdmFyIGdsb2JhbF8xID0gZ2V0R2xvYmFsKCk7XG4gICAgaWYgKCFnbG9iYWxfMS5fX21vYnhJbnN0YW5jZUNvdW50KSB7XG4gICAgICAgIGdsb2JhbF8xLl9fbW9ieEluc3RhbmNlQ291bnQgPSAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2xvYmFsXzEuX19tb2J4SW5zdGFuY2VDb3VudCsrO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghc2hhcmVHbG9iYWxTdGF0ZUNhbGxlZCAmJiAhcnVuSW5Jc29sYXRpb25DYWxsZWQgJiYgIXdhcm5lZEFib3V0TXVsdGlwbGVJbnN0YW5jZXMpIHtcbiAgICAgICAgICAgICAgICB3YXJuZWRBYm91dE11bHRpcGxlSW5zdGFuY2VzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gV2FybmluZzogdGhlcmUgYXJlIG11bHRpcGxlIG1vYnggaW5zdGFuY2VzIGFjdGl2ZS4gVGhpcyBtaWdodCBsZWFkIHRvIHVuZXhwZWN0ZWQgcmVzdWx0cy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvMTA4MiBmb3IgZGV0YWlscy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzb2xhdGVHbG9iYWxTdGF0ZSgpIHtcbiAgICBydW5Jbklzb2xhdGlvbkNhbGxlZCA9IHRydWU7XG4gICAgZ2V0R2xvYmFsKCkuX19tb2J4SW5zdGFuY2VDb3VudC0tO1xufVxuZnVuY3Rpb24gc2hhcmVHbG9iYWxTdGF0ZSgpIHtcbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gNC4wOyBqdXN0IHVzZSBwZWVyIGRlcGVuZGVuY2llcyBpbnN0ZWFkLlxuICAgIGRlcHJlY2F0ZWQoXCJVc2luZyBgc2hhcmVHbG9iYWxTdGF0ZWAgaXMgbm90IHJlY29tbWVuZGVkLCB1c2UgcGVlciBkZXBlbmRlbmNpZXMgaW5zdGVhZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvMTA4MiBmb3IgZGV0YWlscy5cIik7XG4gICAgc2hhcmVHbG9iYWxTdGF0ZUNhbGxlZCA9IHRydWU7XG4gICAgdmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuICAgIHZhciBvd25TdGF0ZSA9IGdsb2JhbFN0YXRlO1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkIGNvbXBhdGliaWxpdHkgY2hlY2tcbiAgICAgKi9cbiAgICBpZiAoZ2xvYmFsLl9fbW9ic2VydmFibGVUcmFja2luZ1N0YWNrIHx8IGdsb2JhbC5fX21vYnNlcnZhYmxlVmlld1N0YWNrKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gQW4gaW5jb21wYXRpYmxlIHZlcnNpb24gb2YgbW9ic2VydmFibGUgaXMgYWxyZWFkeSBsb2FkZWQuXCIpO1xuICAgIGlmIChnbG9iYWwuX19tb2J4R2xvYmFsICYmIGdsb2JhbC5fX21vYnhHbG9iYWwudmVyc2lvbiAhPT0gb3duU3RhdGUudmVyc2lvbilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIEFuIGluY29tcGF0aWJsZSB2ZXJzaW9uIG9mIG1vYnggaXMgYWxyZWFkeSBsb2FkZWQuXCIpO1xuICAgIGlmIChnbG9iYWwuX19tb2J4R2xvYmFsKVxuICAgICAgICBnbG9iYWxTdGF0ZSA9IGdsb2JhbC5fX21vYnhHbG9iYWw7XG4gICAgZWxzZVxuICAgICAgICBnbG9iYWwuX19tb2J4R2xvYmFsID0gb3duU3RhdGU7XG59XG5mdW5jdGlvbiBnZXRHbG9iYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGU7XG59XG5cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seTsgdGhpcyB3aWxsIGJyZWFrIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBleGlzdGluZyBvYnNlcnZhYmxlcyxcbiAqIGJ1dCBjYW4gYmUgdXNlZCB0byBnZXQgYmFjayBhdCBhIHN0YWJsZSBzdGF0ZSBhZnRlciB0aHJvd2luZyBlcnJvcnNcbiAqL1xuZnVuY3Rpb24gcmVzZXRHbG9iYWxTdGF0ZSgpIHtcbiAgICBnbG9iYWxTdGF0ZS5yZXNldElkKys7XG4gICAgdmFyIGRlZmF1bHRHbG9iYWxzID0gbmV3IE1vYlhHbG9iYWxzKCk7XG4gICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRHbG9iYWxzKVxuICAgICAgICBpZiAocGVyc2lzdGVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSlcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlW2tleV0gPSBkZWZhdWx0R2xvYmFsc1trZXldO1xuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gIWdsb2JhbFN0YXRlLnN0cmljdE1vZGU7XG59XG5cbmZ1bmN0aW9uIGdldEF0b20odGhpbmcsIHByb3BlcnR5KSB7XG4gICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gXCJvYmplY3RcIiAmJiB0aGluZyAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQocHJvcGVydHkgPT09IHVuZGVmaW5lZCwgZ2V0TWVzc2FnZShcIm0wMzZcIikpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaW5nLiRtb2J4LmF0b207XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykpIHtcbiAgICAgICAgICAgIHZhciBhbnlUaGluZyA9IHRoaW5nO1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEF0b20oYW55VGhpbmcuX2tleXMpO1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBhbnlUaGluZy5fZGF0YVtwcm9wZXJ0eV0gfHwgYW55VGhpbmcuX2hhc01hcFtwcm9wZXJ0eV07XG4gICAgICAgICAgICBpbnZhcmlhbnQoISFvYnNlcnZhYmxlLCBcInRoZSBlbnRyeSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBkb2VzIG5vdCBleGlzdCBpbiB0aGUgb2JzZXJ2YWJsZSBtYXAgJ1wiICsgZ2V0RGVidWdOYW1lKHRoaW5nKSArIFwiJ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluaXRpYWxpemVycyBydW4gbGF6aWx5IHdoZW4gdHJhbnNwaWxpbmcgdG8gYmFiZWwsIHNvIG1ha2Ugc3VyZSB0aGV5IGFyZSBydW4uLi5cbiAgICAgICAgcnVuTGF6eUluaXRpYWxpemVycyh0aGluZyk7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAmJiAhdGhpbmcuJG1vYngpXG4gICAgICAgICAgICB0aGluZ1twcm9wZXJ0eV07IC8vIFNlZSAjMTA3MiAvLyBUT0RPOiByZW1vdmUgaW4gNC4wXG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKFwicGxlYXNlIHNwZWNpZnkgYSBwcm9wZXJ0eVwiKTtcbiAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gdGhpbmcuJG1vYngudmFsdWVzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGludmFyaWFudCghIW9ic2VydmFibGUsIFwibm8gb2JzZXJ2YWJsZSBwcm9wZXJ0eSAnXCIgKyBwcm9wZXJ0eSArIFwiJyBmb3VuZCBvbiB0aGUgb2JzZXJ2YWJsZSBvYmplY3QgJ1wiICsgZ2V0RGVidWdOYW1lKHRoaW5nKSArIFwiJ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0F0b20odGhpbmcpIHx8IGlzQ29tcHV0ZWRWYWx1ZSh0aGluZykgfHwgaXNSZWFjdGlvbih0aGluZykpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdGhpbmcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBpZiAoaXNSZWFjdGlvbih0aGluZy4kbW9ieCkpIHtcbiAgICAgICAgICAgIC8vIGRpc3Bvc2VyIGZ1bmN0aW9uXG4gICAgICAgICAgICByZXR1cm4gdGhpbmcuJG1vYng7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhaWwoXCJDYW5ub3Qgb2J0YWluIGF0b20gZnJvbSBcIiArIHRoaW5nKTtcbn1cbmZ1bmN0aW9uIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIGludmFyaWFudCh0aGluZywgXCJFeHBlY3Rpbmcgc29tZSBvYmplY3RcIik7XG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbihnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xuICAgIGlmIChpc0F0b20odGhpbmcpIHx8IGlzQ29tcHV0ZWRWYWx1ZSh0aGluZykgfHwgaXNSZWFjdGlvbih0aGluZykpXG4gICAgICAgIHJldHVybiB0aGluZztcbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSlcbiAgICAgICAgcmV0dXJuIHRoaW5nO1xuICAgIC8vIEluaXRpYWxpemVycyBydW4gbGF6aWx5IHdoZW4gdHJhbnNwaWxpbmcgdG8gYmFiZWwsIHNvIG1ha2Ugc3VyZSB0aGV5IGFyZSBydW4uLi5cbiAgICBydW5MYXp5SW5pdGlhbGl6ZXJzKHRoaW5nKTtcbiAgICBpZiAodGhpbmcuJG1vYngpXG4gICAgICAgIHJldHVybiB0aGluZy4kbW9ieDtcbiAgICBpbnZhcmlhbnQoZmFsc2UsIFwiQ2Fubm90IG9idGFpbiBhZG1pbmlzdHJhdGlvbiBmcm9tIFwiICsgdGhpbmcpO1xufVxuZnVuY3Rpb24gZ2V0RGVidWdOYW1lKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIHZhciBuYW1lZDtcbiAgICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZClcbiAgICAgICAgbmFtZWQgPSBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSk7XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSB8fCBpc09ic2VydmFibGVNYXAodGhpbmcpKVxuICAgICAgICBuYW1lZCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKTtcbiAgICBlbHNlXG4gICAgICAgIG5hbWVkID0gZ2V0QXRvbSh0aGluZyk7IC8vIHZhbGlkIGZvciBhcnJheXMgYXMgd2VsbFxuICAgIHJldHVybiBuYW1lZC5uYW1lO1xufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmN5VHJlZSh0aGluZywgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gbm9kZVRvRGVwZW5kZW5jeVRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbn1cbmZ1bmN0aW9uIG5vZGVUb0RlcGVuZGVuY3lUcmVlKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBub2RlLm5hbWVcbiAgICB9O1xuICAgIGlmIChub2RlLm9ic2VydmluZyAmJiBub2RlLm9ic2VydmluZy5sZW5ndGggPiAwKVxuICAgICAgICByZXN1bHQuZGVwZW5kZW5jaWVzID0gdW5pcXVlKG5vZGUub2JzZXJ2aW5nKS5tYXAobm9kZVRvRGVwZW5kZW5jeVRyZWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlclRyZWUodGhpbmcsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIG5vZGVUb09ic2VydmVyVHJlZShnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xufVxuZnVuY3Rpb24gbm9kZVRvT2JzZXJ2ZXJUcmVlKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBub2RlLm5hbWVcbiAgICB9O1xuICAgIGlmIChoYXNPYnNlcnZlcnMobm9kZSkpXG4gICAgICAgIHJlc3VsdC5vYnNlcnZlcnMgPSBnZXRPYnNlcnZlcnMobm9kZSkubWFwKG5vZGVUb09ic2VydmVyVHJlZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaGFzT2JzZXJ2ZXJzKG9ic2VydmFibGUpIHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5vYnNlcnZlcnMgJiYgb2JzZXJ2YWJsZS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVycyhvYnNlcnZhYmxlKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzO1xufVxuZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAgIC8vIGludmFyaWFudChub2RlLmRlcGVuZGVuY2llc1N0YXRlICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiwgY2FuIGFkZCBvbmx5IGRlcGVuZGVuY2llc1N0YXRlICE9PSAtMVwiKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgPT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGFkZCBhbHJlYWR5IGFkZGVkIG5vZGVcIik7XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIHZhciBsID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnMubGVuZ3RoO1xuICAgIGlmIChsKSB7XG4gICAgICAgIC8vIGJlY2F1c2Ugb2JqZWN0IGFzc2lnbm1lbnQgaXMgcmVsYXRpdmVseSBleHBlbnNpdmUsIGxldCdzIG5vdCBzdG9yZSBkYXRhIGFib3V0IGluZGV4IDAuXG4gICAgICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzSW5kZXhlc1tub2RlLl9fbWFwaWRdID0gbDtcbiAgICB9XG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnNbbF0gPSBub2RlO1xuICAgIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPiBub2RlLmRlcGVuZGVuY2llc1N0YXRlKVxuICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBub2RlLmRlcGVuZGVuY2llc1N0YXRlO1xuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgIT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIGRpZG4ndCBhZGQgbm9kZVwiKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZU9ic2VydmVyKG9ic2VydmFibGUsIG5vZGUpIHtcbiAgICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IsIHJlbW92ZSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgaW5zaWRlIGJhdGNoXCIpO1xuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlXCIpO1xuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIGRlbGV0aW5nIGxhc3Qgb2JzZXJ2ZXJcbiAgICAgICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gZGVsZXRpbmcgZnJvbSBfb2JzZXJ2ZXJzSW5kZXhlcyBpcyBzdHJhaWdodCBmb3J3YXJkLCB0byBkZWxldGUgZnJvbSBfb2JzZXJ2ZXJzLCBsZXQncyBzd2FwIGBub2RlYCB3aXRoIGxhc3QgZWxlbWVudFxuICAgICAgICB2YXIgbGlzdCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbWFwID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNJbmRleGVzO1xuICAgICAgICB2YXIgZmlsbGVyID0gbGlzdC5wb3AoKTsgLy8gZ2V0IGxhc3QgZWxlbWVudCwgd2hpY2ggc2hvdWxkIGZpbGwgdGhlIHBsYWNlIG9mIGBub2RlYCwgc28gdGhlIGFycmF5IGRvZXNuJ3QgaGF2ZSBob2xlc1xuICAgICAgICBpZiAoZmlsbGVyICE9PSBub2RlKSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2Ugbm9kZSB3YXMgdGhlIGxhc3QgZWxlbWVudCwgd2hpY2ggYWxyZWFkeSBnb3QgcmVtb3ZlZCBmcm9tIGFycmF5XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBtYXBbbm9kZS5fX21hcGlkXSB8fCAwOyAvLyBnZXR0aW5nIGluZGV4IG9mIGBub2RlYC4gdGhpcyBpcyB0aGUgb25seSBwbGFjZSB3ZSBhY3R1YWxseSB1c2UgbWFwLlxuICAgICAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gbWFwIHN0b3JlIGFsbCBpbmRleGVzIGJ1dCAwLCBzZWUgY29tbWVudCBpbiBgYWRkT2JzZXJ2ZXJgXG4gICAgICAgICAgICAgICAgbWFwW2ZpbGxlci5fX21hcGlkXSA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1hcFtmaWxsZXIuX19tYXBpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaXN0W2luZGV4XSA9IGZpbGxlcjtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbWFwW25vZGUuX19tYXBpZF07XG4gICAgfVxuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmluZGV4T2Yobm9kZSkgPT09IC0xLCBcIklOVEVSTkFMIEVSUk9SIHJlbW92ZSBhbHJlYWR5IHJlbW92ZWQgbm9kZTJcIik7XG59XG5mdW5jdGlvbiBxdWV1ZUZvclVub2JzZXJ2YXRpb24ob2JzZXJ2YWJsZSkge1xuICAgIGlmICghb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uKSB7XG4gICAgICAgIC8vIGludmFyaWFudChnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCwgXCJJTlRFUk5BTCBFUlJPUiwgcmVtb3ZlIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XG4gICAgICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMubGVuZ3RoID09PSAwLCBcIklOVEVSTkFMIEVSUk9SLCBzaG91bGQgb25seSBxdWV1ZSBmb3IgdW5vYnNlcnZhdGlvbiB1bm9ic2VydmVkIG9ic2VydmFibGVzXCIpO1xuICAgICAgICBvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSB0cnVlO1xuICAgICAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nVW5vYnNlcnZhdGlvbnMucHVzaChvYnNlcnZhYmxlKTtcbiAgICB9XG59XG4vKipcbiAqIEJhdGNoIHN0YXJ0cyBhIHRyYW5zYWN0aW9uLCBhdCBsZWFzdCBmb3IgcHVycG9zZXMgb2YgbWVtb2l6aW5nIENvbXB1dGVkVmFsdWVzIHdoZW4gbm90aGluZyBlbHNlIGRvZXMuXG4gKiBEdXJpbmcgYSBiYXRjaCBgb25CZWNvbWVVbm9ic2VydmVkYCB3aWxsIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UgcGVyIG9ic2VydmFibGUuXG4gKiBBdm9pZHMgdW5uZWNlc3NhcnkgcmVjYWxjdWxhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0QmF0Y2goKSB7XG4gICAgZ2xvYmFsU3RhdGUuaW5CYXRjaCsrO1xufVxuZnVuY3Rpb24gZW5kQmF0Y2goKSB7XG4gICAgaWYgKC0tZ2xvYmFsU3RhdGUuaW5CYXRjaCA9PT0gMCkge1xuICAgICAgICBydW5SZWFjdGlvbnMoKTtcbiAgICAgICAgLy8gdGhlIGJhdGNoIGlzIGFjdHVhbGx5IGFib3V0IHRvIGZpbmlzaCwgYWxsIHVub2JzZXJ2aW5nIHNob3VsZCBoYXBwZW4gaGVyZS5cbiAgICAgICAgdmFyIGxpc3QgPSBnbG9iYWxTdGF0ZS5wZW5kaW5nVW5vYnNlcnZhdGlvbnM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBsaXN0W2ldO1xuICAgICAgICAgICAgb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5vbkJlY29tZVVub2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgICAgICAvLyBOT1RFOiBvbkJlY29tZVVub2JzZXJ2ZWQgbWlnaHQgcHVzaCB0byBgcGVuZGluZ1Vub2JzZXJ2YXRpb25zYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucyA9IFtdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlcG9ydE9ic2VydmVkKG9ic2VydmFibGUpIHtcbiAgICB2YXIgZGVyaXZhdGlvbiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgICBpZiAoZGVyaXZhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2ltcGxlIG9wdGltaXphdGlvbiwgZ2l2ZSBlYWNoIGRlcml2YXRpb24gcnVuIGFuIHVuaXF1ZSBpZCAocnVuSWQpXG4gICAgICAgICAqIENoZWNrIGlmIGxhc3QgdGltZSB0aGlzIG9ic2VydmFibGUgd2FzIGFjY2Vzc2VkIHRoZSBzYW1lIHJ1bklkIGlzIHVzZWRcbiAgICAgICAgICogaWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIHJlbGF0aW9uIGlzIGFscmVhZHkga25vd25cbiAgICAgICAgICovXG4gICAgICAgIGlmIChkZXJpdmF0aW9uLnJ1bklkICE9PSBvYnNlcnZhYmxlLmxhc3RBY2Nlc3NlZEJ5KSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLmxhc3RBY2Nlc3NlZEJ5ID0gZGVyaXZhdGlvbi5ydW5JZDtcbiAgICAgICAgICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nW2Rlcml2YXRpb24udW5ib3VuZERlcHNDb3VudCsrXSA9IG9ic2VydmFibGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcbiAgICB9XG59XG4vKipcbiAqIE5PVEU6IGN1cnJlbnQgcHJvcGFnYXRpb24gbWVjaGFuaXNtIHdpbGwgaW4gY2FzZSBvZiBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGJlaGF2ZSB1bmV4cGVjdGVkbHlcbiAqIEl0IHdpbGwgcHJvcGFnYXRlIGNoYW5nZXMgdG8gb2JzZXJ2ZXJzIGZyb20gcHJldmlvdXMgcnVuXG4gKiBJdCdzIGhhcmQgb3IgbWF5YmUgaW1wb3NzaWJsZSAod2l0aCByZWFzb25hYmxlIHBlcmYpIHRvIGdldCBpdCByaWdodCB3aXRoIGN1cnJlbnQgYXBwcm9hY2hcbiAqIEhvcGVmdWxseSBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGFyZW4ndCBhIGZlYXR1cmUgcGVvcGxlIHNob3VsZCBkZXBlbmQgb25cbiAqIEFsc28gbW9zdCBiYXNpYyB1c2UgY2FzZXMgc2hvdWxkIGJlIG9rXG4gKi9cbi8vIENhbGxlZCBieSBBdG9tIHdoZW4gaXRzIHZhbHVlIGNoYW5nZXNcbmZ1bmN0aW9uIHByb3BhZ2F0ZUNoYW5nZWQob2JzZXJ2YWJsZSkge1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgc3RhcnRcIik7XG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgdmFyIG9ic2VydmVycyA9IG9ic2VydmFibGUub2JzZXJ2ZXJzO1xuICAgIHZhciBpID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBkID0gb2JzZXJ2ZXJzW2ldO1xuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgICAgICBpZiAoZC5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICAgICAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgfVxuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgZW5kXCIpO1xufVxuLy8gQ2FsbGVkIGJ5IENvbXB1dGVkVmFsdWUgd2hlbiBpdCByZWNhbGN1bGF0ZSBhbmQgaXRzIHZhbHVlIGNoYW5nZWRcbmZ1bmN0aW9uIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZChvYnNlcnZhYmxlKSB7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIHN0YXJ0XCIpO1xuICAgIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuU1RBTEUpXG4gICAgICAgIHJldHVybjtcbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xuICAgIHZhciBvYnNlcnZlcnMgPSBvYnNlcnZhYmxlLm9ic2VydmVycztcbiAgICB2YXIgaSA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgZCA9IG9ic2VydmVyc1tpXTtcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEUpXG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5TVEFMRTtcbiAgICAgICAgZWxzZSBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFIC8vIHRoaXMgaGFwcGVucyBkdXJpbmcgY29tcHV0aW5nIG9mIGBkYCwganVzdCBrZWVwIGxvd2VzdE9ic2VydmVyU3RhdGUgdXAgdG8gZGF0ZS5cbiAgICAgICAgKVxuICAgICAgICAgICAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgIH1cbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgZW5kXCIpO1xufVxuLy8gVXNlZCBieSBjb21wdXRlZCB3aGVuIGl0cyBkZXBlbmRlbmN5IGNoYW5nZWQsIGJ1dCB3ZSBkb24ndCB3YW4ndCB0byBpbW1lZGlhdGVseSByZWNvbXB1dGUuXG5mdW5jdGlvbiBwcm9wYWdhdGVNYXliZUNoYW5nZWQob2JzZXJ2YWJsZSkge1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIHN0YXJ0XCIpO1xuICAgIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgIT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU7XG4gICAgdmFyIG9ic2VydmVycyA9IG9ic2VydmFibGUub2JzZXJ2ZXJzO1xuICAgIHZhciBpID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBkID0gb2JzZXJ2ZXJzW2ldO1xuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgICAgICBkLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRTtcbiAgICAgICAgICAgIGlmIChkLmlzVHJhY2luZyAhPT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICAgICAgICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkLm9uQmVjb21lU3RhbGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJtYXliZSBlbmRcIik7XG59XG5mdW5jdGlvbiBsb2dUcmFjZUluZm8oZGVyaXZhdGlvbiwgb2JzZXJ2YWJsZSkge1xuICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJyBpcyBpbnZhbGlkYXRlZCBkdWUgdG8gYSBjaGFuZ2UgaW46ICdcIiArIG9ic2VydmFibGUubmFtZSArIFwiJ1wiKTtcbiAgICBpZiAoZGVyaXZhdGlvbi5pc1RyYWNpbmcgPT09IFRyYWNlTW9kZS5CUkVBSykge1xuICAgICAgICB2YXIgbGluZXMgPSBbXTtcbiAgICAgICAgcHJpbnREZXBUcmVlKGdldERlcGVuZGVuY3lUcmVlKGRlcml2YXRpb24pLCBsaW5lcywgMSk7XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBuZXcgRnVuY3Rpb24oXCJkZWJ1Z2dlcjtcXG4vKlxcblRyYWNpbmcgJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInXFxuXFxuWW91IGFyZSBlbnRlcmluZyB0aGlzIGJyZWFrIHBvaW50IGJlY2F1c2UgZGVyaXZhdGlvbiAnXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIicgaXMgYmVpbmcgdHJhY2VkIGFuZCAnXCIgKyBvYnNlcnZhYmxlLm5hbWUgKyBcIicgaXMgbm93IGZvcmNpbmcgaXQgdG8gdXBkYXRlLlxcbkp1c3QgZm9sbG93IHRoZSBzdGFja3RyYWNlIHlvdSBzaG91bGQgbm93IHNlZSBpbiB0aGUgZGV2dG9vbHMgdG8gc2VlIHByZWNpc2VseSB3aGF0IHBpZWNlIG9mIHlvdXIgY29kZSBpcyBjYXVzaW5nIHRoaXMgdXBkYXRlXFxuVGhlIHN0YWNrZnJhbWUgeW91IGFyZSBsb29raW5nIGZvciBpcyBhdCBsZWFzdCB+Ni04IHN0YWNrLWZyYW1lcyB1cC5cXG5cXG5cIiArIChkZXJpdmF0aW9uIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSA/IGRlcml2YXRpb24uZGVyaXZhdGlvbi50b1N0cmluZygpIDogXCJcIikgKyBcIlxcblxcblRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoaXMgZGVyaXZhdGlvbiBhcmU6XFxuXFxuXCIgKyBsaW5lcy5qb2luKFwiXFxuXCIpICsgXCJcXG4qL1xcbiAgICBcIikoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwcmludERlcFRyZWUodHJlZSwgbGluZXMsIGRlcHRoKSB7XG4gICAgaWYgKGxpbmVzLmxlbmd0aCA+PSAxMDAwKSB7XG4gICAgICAgIGxpbmVzLnB1c2goXCIoYW5kIG1hbnkgbW9yZSlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGluZXMucHVzaChcIlwiICsgbmV3IEFycmF5KGRlcHRoKS5qb2luKFwiXFx0XCIpICsgdHJlZS5uYW1lKTsgLy8gTVdFOiBub3QgdGhlIGZhc3Rlc3QsIGJ1dCB0aGUgZWFzaWVzdCB3YXkgOilcbiAgICBpZiAodHJlZS5kZXBlbmRlbmNpZXMpXG4gICAgICAgIHRyZWUuZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBwcmludERlcFRyZWUoY2hpbGQsIGxpbmVzLCBkZXB0aCArIDEpOyB9KTtcbn1cblxudmFyIElEZXJpdmF0aW9uU3RhdGU7XG4oZnVuY3Rpb24gKElEZXJpdmF0aW9uU3RhdGUpIHtcbiAgICAvLyBiZWZvcmUgYmVpbmcgcnVuIG9yIChvdXRzaWRlIGJhdGNoIGFuZCBub3QgYmVpbmcgb2JzZXJ2ZWQpXG4gICAgLy8gYXQgdGhpcyBwb2ludCBkZXJpdmF0aW9uIGlzIG5vdCBob2xkaW5nIGFueSBkYXRhIGFib3V0IGRlcGVuZGVuY3kgdHJlZVxuICAgIElEZXJpdmF0aW9uU3RhdGVbSURlcml2YXRpb25TdGF0ZVtcIk5PVF9UUkFDS0lOR1wiXSA9IC0xXSA9IFwiTk9UX1RSQUNLSU5HXCI7XG4gICAgLy8gbm8gc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWQgc2luY2UgbGFzdCBjb21wdXRhdGlvblxuICAgIC8vIHdvbid0IHJlY2FsY3VsYXRlIGRlcml2YXRpb25cbiAgICAvLyB0aGlzIGlzIHdoYXQgbWFrZXMgbW9ieCBmYXN0XG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiVVBfVE9fREFURVwiXSA9IDBdID0gXCJVUF9UT19EQVRFXCI7XG4gICAgLy8gc29tZSBkZWVwIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IGRvbid0IGtub3cgaWYgc2hhbGxvdyBkZXBlbmRlbmN5IGNoYW5nZWRcbiAgICAvLyB3aWxsIHJlcXVpcmUgdG8gY2hlY2sgZmlyc3QgaWYgVVBfVE9fREFURSBvciBQT1NTSUJMWV9TVEFMRVxuICAgIC8vIGN1cnJlbnRseSBvbmx5IENvbXB1dGVkVmFsdWUgd2lsbCBwcm9wYWdhdGUgUE9TU0lCTFlfU1RBTEVcbiAgICAvL1xuICAgIC8vIGhhdmluZyB0aGlzIHN0YXRlIGlzIHNlY29uZCBiaWcgb3B0aW1pemF0aW9uOlxuICAgIC8vIGRvbid0IGhhdmUgdG8gcmVjb21wdXRlIG9uIGV2ZXJ5IGRlcGVuZGVuY3kgY2hhbmdlLCBidXQgb25seSB3aGVuIGl0J3MgbmVlZGVkXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiUE9TU0lCTFlfU1RBTEVcIl0gPSAxXSA9IFwiUE9TU0lCTFlfU1RBTEVcIjtcbiAgICAvLyBBIHNoYWxsb3cgZGVwZW5kZW5jeSBoYXMgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uIGFuZCB0aGUgZGVyaXZhdGlvblxuICAgIC8vIHdpbGwgbmVlZCB0byByZWNvbXB1dGUgd2hlbiBpdCdzIG5lZWRlZCBuZXh0LlxuICAgIElEZXJpdmF0aW9uU3RhdGVbSURlcml2YXRpb25TdGF0ZVtcIlNUQUxFXCJdID0gMl0gPSBcIlNUQUxFXCI7XG59KShJRGVyaXZhdGlvblN0YXRlIHx8IChJRGVyaXZhdGlvblN0YXRlID0ge30pKTtcbnZhciBUcmFjZU1vZGU7XG4oZnVuY3Rpb24gKFRyYWNlTW9kZSkge1xuICAgIFRyYWNlTW9kZVtUcmFjZU1vZGVbXCJOT05FXCJdID0gMF0gPSBcIk5PTkVcIjtcbiAgICBUcmFjZU1vZGVbVHJhY2VNb2RlW1wiTE9HXCJdID0gMV0gPSBcIkxPR1wiO1xuICAgIFRyYWNlTW9kZVtUcmFjZU1vZGVbXCJCUkVBS1wiXSA9IDJdID0gXCJCUkVBS1wiO1xufSkoVHJhY2VNb2RlIHx8IChUcmFjZU1vZGUgPSB7fSkpO1xudmFyIENhdWdodEV4Y2VwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2F1Z2h0RXhjZXB0aW9uKGNhdXNlKSB7XG4gICAgICAgIHRoaXMuY2F1c2UgPSBjYXVzZTtcbiAgICAgICAgLy8gRW1wdHlcbiAgICB9XG4gICAgcmV0dXJuIENhdWdodEV4Y2VwdGlvbjtcbn0oKSk7XG5mdW5jdGlvbiBpc0NhdWdodEV4Y2VwdGlvbihlKSB7XG4gICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBDYXVnaHRFeGNlcHRpb247XG59XG4vKipcbiAqIEZpbmRzIG91dCB3aGV0aGVyIGFueSBkZXBlbmRlbmN5IG9mIHRoZSBkZXJpdmF0aW9uIGhhcyBhY3R1YWxseSBjaGFuZ2VkLlxuICogSWYgZGVwZW5kZW5jaWVzU3RhdGUgaXMgMSB0aGVuIGl0IHdpbGwgcmVjYWxjdWxhdGUgZGVwZW5kZW5jaWVzLFxuICogaWYgYW55IGRlcGVuZGVuY3kgY2hhbmdlZCBpdCB3aWxsIHByb3BhZ2F0ZSBpdCBieSBjaGFuZ2luZyBkZXBlbmRlbmNpZXNTdGF0ZSB0byAyLlxuICpcbiAqIEJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBkZXBlbmRlbmNpZXMgaW4gdGhlIHNhbWUgb3JkZXIgdGhhdCB0aGV5IHdlcmUgcmVwb3J0ZWQgYW5kXG4gKiBzdG9wcGluZyBvbiB0aGUgZmlyc3QgY2hhbmdlLCBhbGwgdGhlIHJlY2FsY3VsYXRpb25zIGFyZSBvbmx5IGNhbGxlZCBmb3IgQ29tcHV0ZWRWYWx1ZXNcbiAqIHRoYXQgd2lsbCBiZSB0cmFja2VkIGJ5IGRlcml2YXRpb24uIFRoYXQgaXMgYmVjYXVzZSB3ZSBhc3N1bWUgdGhhdCBpZiB0aGUgZmlyc3QgeFxuICogZGVwZW5kZW5jaWVzIG9mIHRoZSBkZXJpdmF0aW9uIGRvZXNuJ3QgY2hhbmdlIHRoZW4gdGhlIGRlcml2YXRpb24gc2hvdWxkIHJ1biB0aGUgc2FtZSB3YXlcbiAqIHVwIHVudGlsIGFjY2Vzc2luZyB4LXRoIGRlcGVuZGVuY3kuXG4gKi9cbmZ1bmN0aW9uIHNob3VsZENvbXB1dGUoZGVyaXZhdGlvbikge1xuICAgIHN3aXRjaCAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSkge1xuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORzpcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRToge1xuICAgICAgICAgICAgdmFyIHByZXZVbnRyYWNrZWQgPSB1bnRyYWNrZWRTdGFydCgpOyAvLyBubyBuZWVkIGZvciB0aG9zZSBjb21wdXRlZHMgdG8gYmUgcmVwb3J0ZWQsIHRoZXkgd2lsbCBiZSBwaWNrZWQgdXAgaW4gdHJhY2tEZXJpdmVkRnVuY3Rpb24uXG4gICAgICAgICAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmcsIGwgPSBvYnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gb2JzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXB1dGVkVmFsdWUob2JqKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgbm90IGludGVyZXN0ZWQgaW4gdGhlIHZhbHVlICpvciogZXhjZXB0aW9uIGF0IHRoaXMgbW9tZW50LCBidXQgaWYgdGhlcmUgaXMgb25lLCBub3RpZnkgYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlVudHJhY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBDb21wdXRlZFZhbHVlIGBvYmpgIGFjdHVhbGx5IGNoYW5nZWQgaXQgd2lsbCBiZSBjb21wdXRlZCBhbmQgcHJvcGFnYXRlZCB0byBpdHMgb2JzZXJ2ZXJzLlxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgYGRlcml2YXRpb25gIGlzIGFuIG9ic2VydmVyIG9mIGBvYmpgXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnRyYWNrZWRFbmQocHJldlVudHJhY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wKGRlcml2YXRpb24pO1xuICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNDb21wdXRpbmdEZXJpdmF0aW9uKCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gIT09IG51bGw7IC8vIGZpbHRlciBvdXQgYWN0aW9ucyBpbnNpZGUgY29tcHV0YXRpb25zXG59XG5mdW5jdGlvbiBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZChhdG9tKSB7XG4gICAgdmFyIGhhc09ic2VydmVycyQkMSA9IGF0b20ub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gICAgLy8gU2hvdWxkIG5ldmVyIGJlIHBvc3NpYmxlIHRvIGNoYW5nZSBhbiBvYnNlcnZlZCBvYnNlcnZhYmxlIGZyb20gaW5zaWRlIGNvbXB1dGVkLCBzZWUgIzc5OFxuICAgIGlmIChnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoID4gMCAmJiBoYXNPYnNlcnZlcnMkJDEpXG4gICAgICAgIGZhaWwoZ2V0TWVzc2FnZShcIm0wMzFcIikgKyBhdG9tLm5hbWUpO1xuICAgIC8vIFNob3VsZCBub3QgYmUgcG9zc2libGUgdG8gY2hhbmdlIG9ic2VydmVkIHN0YXRlIG91dHNpZGUgc3RyaWN0IG1vZGUsIGV4Y2VwdCBkdXJpbmcgaW5pdGlhbGl6YXRpb24sIHNlZSAjNTYzXG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyAmJiBoYXNPYnNlcnZlcnMkJDEpXG4gICAgICAgIGZhaWwoZ2V0TWVzc2FnZShnbG9iYWxTdGF0ZS5zdHJpY3RNb2RlID8gXCJtMDMwYVwiIDogXCJtMDMwYlwiKSArIGF0b20ubmFtZSk7XG59XG4vKipcbiAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBgZmAgYW5kIHRyYWNrcyB3aGljaCBvYnNlcnZhYmxlcyBhcmUgYmVpbmcgYWNjZXNzZWQuXG4gKiBUaGUgdHJhY2tpbmcgaW5mb3JtYXRpb24gaXMgc3RvcmVkIG9uIHRoZSBgZGVyaXZhdGlvbmAgb2JqZWN0IGFuZCB0aGUgZGVyaXZhdGlvbiBpcyByZWdpc3RlcmVkXG4gKiBhcyBvYnNlcnZlciBvZiBhbnkgb2YgdGhlIGFjY2Vzc2VkIG9ic2VydmFibGVzLlxuICovXG5mdW5jdGlvbiB0cmFja0Rlcml2ZWRGdW5jdGlvbihkZXJpdmF0aW9uLCBmLCBjb250ZXh0KSB7XG4gICAgLy8gcHJlIGFsbG9jYXRlIGFycmF5IGFsbG9jYXRpb24gKyByb29tIGZvciB2YXJpYXRpb24gaW4gZGVwc1xuICAgIC8vIGFycmF5IHdpbGwgYmUgdHJpbW1lZCBieSBiaW5kRGVwZW5kZW5jaWVzXG4gICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbik7XG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcgPSBuZXcgQXJyYXkoZGVyaXZhdGlvbi5vYnNlcnZpbmcubGVuZ3RoICsgMTAwKTtcbiAgICBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQgPSAwO1xuICAgIGRlcml2YXRpb24ucnVuSWQgPSArK2dsb2JhbFN0YXRlLnJ1bklkO1xuICAgIHZhciBwcmV2VHJhY2tpbmcgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gZGVyaXZhdGlvbjtcbiAgICB2YXIgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzdWx0ID0gbmV3IENhdWdodEV4Y2VwdGlvbihlKTtcbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xuICAgIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogZGlmZnMgbmV3T2JzZXJ2aW5nIHdpdGggb2JzZXJ2aW5nLlxuICogdXBkYXRlIG9ic2VydmluZyB0byBiZSBuZXdPYnNlcnZpbmcgd2l0aCB1bmlxdWUgb2JzZXJ2YWJsZXNcbiAqIG5vdGlmeSBvYnNlcnZlcnMgdGhhdCBiZWNvbWUgb2JzZXJ2ZWQvdW5vYnNlcnZlZFxuICovXG5mdW5jdGlvbiBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcsIFwiSU5URVJOQUwgRVJST1IgYmluZERlcGVuZGVuY2llcyBleHBlY3RzIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICAgIHZhciBwcmV2T2JzZXJ2aW5nID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgdmFyIG9ic2VydmluZyA9IChkZXJpdmF0aW9uLm9ic2VydmluZyA9IGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nKTtcbiAgICB2YXIgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgIC8vIEdvIHRocm91Z2ggYWxsIG5ldyBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAodGhpcyBsaXN0IGNhbiBjb250YWluIGR1cGxpY2F0ZXMpOlxuICAgIC8vICAgMDogZmlyc3Qgb2NjdXJyZW5jZSwgY2hhbmdlIHRvIDEgYW5kIGtlZXAgaXRcbiAgICAvLyAgIDE6IGV4dHJhIG9jY3VycmVuY2UsIGRyb3AgaXRcbiAgICB2YXIgaTAgPSAwLCBsID0gZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaV07XG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICBkZXAuZGlmZlZhbHVlID0gMTtcbiAgICAgICAgICAgIGlmIChpMCAhPT0gaSlcbiAgICAgICAgICAgICAgICBvYnNlcnZpbmdbaTBdID0gZGVwO1xuICAgICAgICAgICAgaTArKztcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGNhc3QgaXMgJ3NhZmUnIGhlcmUsIGJlY2F1c2UgaWYgZGVwIGlzIElPYnNlcnZhYmxlLCBgZGVwZW5kZW5jaWVzU3RhdGVgIHdpbGwgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBub3QgaGl0dGluZyB0aGUgY29uZGl0aW9uXG4gICAgICAgIGlmIChkZXAuZGVwZW5kZW5jaWVzU3RhdGUgPiBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUpIHtcbiAgICAgICAgICAgIGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSA9IGRlcC5kZXBlbmRlbmNpZXNTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYnNlcnZpbmcubGVuZ3RoID0gaTA7XG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcgPSBudWxsOyAvLyBuZXdPYnNlcnZpbmcgc2hvdWxkbid0IGJlIG5lZWRlZCBvdXRzaWRlIHRyYWNraW5nIChzdGF0ZW1lbnQgbW92ZWQgZG93biB0byB3b3JrIGFyb3VuZCBGRiBidWcsIHNlZSAjNjE0KVxuICAgIC8vIEdvIHRocm91Z2ggYWxsIG9sZCBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAoaXQgaXMgdW5pcXVlIGFmdGVyIGxhc3QgYmluZERlcGVuZGVuY2llcylcbiAgICAvLyAgIDA6IGl0J3Mgbm90IGluIG5ldyBvYnNlcnZhYmxlcywgdW5vYnNlcnZlIGl0XG4gICAgLy8gICAxOiBpdCBrZWVwcyBiZWluZyBvYnNlcnZlZCwgZG9uJ3Qgd2FudCB0byBub3RpZnkgaXQuIGNoYW5nZSB0byAwXG4gICAgbCA9IHByZXZPYnNlcnZpbmcubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgdmFyIGRlcCA9IHByZXZPYnNlcnZpbmdbbF07XG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVPYnNlcnZlcihkZXAsIGRlcml2YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGRlcC5kaWZmVmFsdWUgPSAwO1xuICAgIH1cbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKG5vdyBpdCBzaG91bGQgYmUgdW5pcXVlKVxuICAgIC8vICAgMDogaXQgd2FzIHNldCB0byAwIGluIGxhc3QgbG9vcC4gZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAvLyAgIDE6IGl0IHdhc24ndCBvYnNlcnZlZCwgbGV0J3Mgb2JzZXJ2ZSBpdC4gc2V0IGJhY2sgdG8gMFxuICAgIHdoaWxlIChpMC0tKSB7XG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaTBdO1xuICAgICAgICBpZiAoZGVwLmRpZmZWYWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDA7XG4gICAgICAgICAgICBhZGRPYnNlcnZlcihkZXAsIGRlcml2YXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxuICAgIC8vIHNvIHRoZXkgaGF2ZSBoYWQgbm8gY2hhbmNlIHRvIHByb3BhZ2F0ZSBzdGFsZW5lc3MgKCM5MTYpXG4gICAgaWYgKGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgPSBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGU7XG4gICAgICAgIGRlcml2YXRpb24ub25CZWNvbWVTdGFsZSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyT2JzZXJ2aW5nKGRlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IgY2xlYXJPYnNlcnZpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgZGVyaXZhdGlvbi5vYnNlcnZpbmcgPSBbXTtcbiAgICB2YXIgaSA9IG9icy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgcmVtb3ZlT2JzZXJ2ZXIob2JzW2ldLCBkZXJpdmF0aW9uKTtcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG59XG5mdW5jdGlvbiB1bnRyYWNrZWQoYWN0aW9uKSB7XG4gICAgdmFyIHByZXYgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHZhciByZXMgPSBhY3Rpb24oKTtcbiAgICB1bnRyYWNrZWRFbmQocHJldik7XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIHVudHJhY2tlZFN0YXJ0KCkge1xuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IG51bGw7XG4gICAgcmV0dXJuIHByZXY7XG59XG5mdW5jdGlvbiB1bnRyYWNrZWRFbmQocHJldikge1xuICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbiA9IHByZXY7XG59XG4vKipcbiAqIG5lZWRlZCB0byBrZWVwIGBsb3dlc3RPYnNlcnZlclN0YXRlYCBjb3JyZWN0LiB3aGVuIGNoYW5naW5nIGZyb20gKDIgb3IgMSkgdG8gMFxuICpcbiAqL1xuZnVuY3Rpb24gY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbikge1xuICAgIGlmIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpXG4gICAgICAgIHJldHVybjtcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZztcbiAgICB2YXIgaSA9IG9icy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgb2JzW2ldLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XG59XG5cbmZ1bmN0aW9uIGxvZyhtc2cpIHtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIHJldHVybiBtc2c7XG59XG5mdW5jdGlvbiB3aHlSdW4odGhpbmcsIHByb3ApIHtcbiAgICBkZXByZWNhdGVkKFwiYHdoeVJ1bmAgaXMgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBgdHJhY2VgXCIpO1xuICAgIHRoaW5nID0gZ2V0QXRvbUZyb21BcmdzKGFyZ3VtZW50cyk7XG4gICAgaWYgKCF0aGluZylcbiAgICAgICAgcmV0dXJuIGxvZyhnZXRNZXNzYWdlKFwibTAyNFwiKSk7XG4gICAgaWYgKGlzQ29tcHV0ZWRWYWx1ZSh0aGluZykgfHwgaXNSZWFjdGlvbih0aGluZykpXG4gICAgICAgIHJldHVybiBsb2codGhpbmcud2h5UnVuKCkpO1xuICAgIHJldHVybiBmYWlsKGdldE1lc3NhZ2UoXCJtMDI1XCIpKTtcbn1cbmZ1bmN0aW9uIHRyYWNlKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgZW50ZXJCcmVha1BvaW50ID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09IFwiYm9vbGVhblwiKVxuICAgICAgICBlbnRlckJyZWFrUG9pbnQgPSBhcmdzLnBvcCgpO1xuICAgIHZhciBkZXJpdmF0aW9uID0gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpO1xuICAgIGlmICghZGVyaXZhdGlvbikge1xuICAgICAgICByZXR1cm4gZmFpbChcIid0cmFjZShicmVhaz8pJyBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBhIHRyYWNrZWQgY29tcHV0ZWQgdmFsdWUgb3IgYSBSZWFjdGlvbi4gQ29uc2lkZXIgcGFzc2luZyBpbiB0aGUgY29tcHV0ZWQgdmFsdWUgb3IgcmVhY3Rpb24gZXhwbGljaXRseVwiKTtcbiAgICB9XG4gICAgaWYgKGRlcml2YXRpb24uaXNUcmFjaW5nID09PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlttb2J4LnRyYWNlXSAnXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIicgdHJhY2luZyBlbmFibGVkXCIpO1xuICAgIH1cbiAgICBkZXJpdmF0aW9uLmlzVHJhY2luZyA9IGVudGVyQnJlYWtQb2ludCA/IFRyYWNlTW9kZS5CUkVBSyA6IFRyYWNlTW9kZS5MT0c7XG59XG5mdW5jdGlvbiBnZXRBdG9tRnJvbUFyZ3MoYXJncykge1xuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIGdldEF0b20oYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIH1cbn1cblxudmFyIFJlYWN0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWFjdGlvbihuYW1lLCBvbkludmFsaWRhdGUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJSZWFjdGlvbkBcIiArIGdldE5leHRJZCgpOyB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMub25JbnZhbGlkYXRlID0gb25JbnZhbGlkYXRlO1xuICAgICAgICB0aGlzLm9ic2VydmluZyA9IFtdOyAvLyBub2RlcyB3ZSBhcmUgbG9va2luZyBhdC4gT3VyIHZhbHVlIGRlcGVuZHMgb24gdGhlc2Ugbm9kZXNcbiAgICAgICAgdGhpcy5uZXdPYnNlcnZpbmcgPSBbXTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HO1xuICAgICAgICB0aGlzLmRpZmZWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMucnVuSWQgPSAwO1xuICAgICAgICB0aGlzLnVuYm91bmREZXBzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLl9fbWFwaWQgPSBcIiNcIiArIGdldE5leHRJZCgpO1xuICAgICAgICB0aGlzLmlzRGlzcG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNUcmFja1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUcmFjaW5nID0gVHJhY2VNb2RlLk5PTkU7XG4gICAgfVxuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5vbkJlY29tZVN0YWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKCk7XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNTY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdSZWFjdGlvbnMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgIHJ1blJlYWN0aW9ucygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuaXNTY2hlZHVsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NjaGVkdWxlZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGludGVybmFsLCB1c2Ugc2NoZWR1bGUoKSBpZiB5b3UgaW50ZW5kIHRvIGtpY2sgb2ZmIGEgcmVhY3Rpb25cbiAgICAgKi9cbiAgICBSZWFjdGlvbi5wcm90b3R5cGUucnVuUmVhY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgICAgICB0aGlzLl9pc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkludmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNUcmFja1BlbmRpbmcgJiYgaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb25JbnZhbGlkYXRlIGRpZG4ndCB0cmlnZ2VyIHRyYWNrIHJpZ2h0IGF3YXkuLlxuICAgICAgICAgICAgICAgICAgICBzcHlSZXBvcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzY2hlZHVsZWQtcmVhY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUudHJhY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICB2YXIgbm90aWZ5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBzdGFydFRpbWU7XG4gICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVhY3Rpb25cIixcbiAgICAgICAgICAgICAgICBmbjogZm5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG4gICAgICAgIHZhciByZXN1bHQgPSB0cmFja0Rlcml2ZWRGdW5jdGlvbih0aGlzLCBmbiwgdW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIC8vIGRpc3Bvc2VkIGR1cmluZyBsYXN0IHJ1bi4gQ2xlYW4gdXAgZXZlcnl0aGluZyB0aGF0IHdhcyBib3VuZCBhZnRlciB0aGUgZGlzcG9zZSBjYWxsLlxuICAgICAgICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpXG4gICAgICAgICAgICB0aGlzLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbihyZXN1bHQuY2F1c2UpO1xuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICBzcHlSZXBvcnRFbmQoe1xuICAgICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCkgLSBzdGFydFRpbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmVycm9ySGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIoZXJyb3IsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJbbW9ieF0gRW5jb3VudGVyZWQgYW4gdW5jYXVnaHQgZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBieSBhIHJlYWN0aW9uIG9yIG9ic2VydmVyIGNvbXBvbmVudCwgaW46ICdcIiArIHRoaXM7XG4gICAgICAgIHZhciBtZXNzYWdlVG9Vc2VyID0gZ2V0TWVzc2FnZShcIm0wMzdcIik7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSB8fCBtZXNzYWdlVG9Vc2VyIC8qIGxhdHRlciB3aWxsIG5vdCBiZSB0cnVlLCBtYWtlIHN1cmUgdWdsaWZ5IGRvZXNuJ3QgcmVtb3ZlICovLCBlcnJvcik7XG4gICAgICAgIC8qKiBJZiBkZWJ1Z2dpbmcgYnJvdWdodCB5b3UgaGVyZSwgcGxlYXNlLCByZWFkIHRoZSBhYm92ZSBtZXNzYWdlIDotKS4gVG54ISAqL1xuICAgICAgICBpZiAoaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoZXJyb3IsIF90aGlzKTsgfSk7XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzUnVubmluZykge1xuICAgICAgICAgICAgICAgIC8vIGlmIGRpc3Bvc2VkIHdoaWxlIHJ1bm5pbmcsIGNsZWFuIHVwIGxhdGVyLiBNYXliZSBub3Qgb3B0aW1hbCwgYnV0IHJhcmUgY2FzZVxuICAgICAgICAgICAgICAgIHN0YXJ0QmF0Y2goKTtcbiAgICAgICAgICAgICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICAgICAgICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUuZ2V0RGlzcG9zZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5kaXNwb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHIuJG1vYnggPSB0aGlzO1xuICAgICAgICByLm9uRXJyb3IgPSByZWdpc3RlckVycm9ySGFuZGxlcjtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIlJlYWN0aW9uW1wiICsgdGhpcy5uYW1lICsgXCJdXCI7XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUud2h5UnVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2aW5nID0gdW5pcXVlKHRoaXMuX2lzUnVubmluZyA/IHRoaXMubmV3T2JzZXJ2aW5nIDogdGhpcy5vYnNlcnZpbmcpLm1hcChmdW5jdGlvbiAoZGVwKSB7IHJldHVybiBkZXAubmFtZTsgfSk7XG4gICAgICAgIHJldHVybiBcIlxcbldoeVJ1bj8gcmVhY3Rpb24gJ1wiICsgdGhpcy5uYW1lICsgXCInOlxcbiAqIFN0YXR1czogW1wiICsgKHRoaXMuaXNEaXNwb3NlZFxuICAgICAgICAgICAgPyBcInN0b3BwZWRcIlxuICAgICAgICAgICAgOiB0aGlzLl9pc1J1bm5pbmcgPyBcInJ1bm5pbmdcIiA6IHRoaXMuaXNTY2hlZHVsZWQoKSA/IFwic2NoZWR1bGVkXCIgOiBcImlkbGVcIikgKyBcIl1cXG4gKiBUaGlzIHJlYWN0aW9uIHdpbGwgcmUtcnVuIGlmIGFueSBvZiB0aGUgZm9sbG93aW5nIG9ic2VydmFibGVzIGNoYW5nZXM6XFxuICAgIFwiICsgam9pblN0cmluZ3Mob2JzZXJ2aW5nKSArIFwiXFxuICAgIFwiICsgKHRoaXMuX2lzUnVubmluZ1xuICAgICAgICAgICAgPyBcIiAoLi4uIG9yIGFueSBvYnNlcnZhYmxlIGFjY2Vzc2VkIGR1cmluZyB0aGUgcmVtYWluZGVyIG9mIHRoZSBjdXJyZW50IHJ1bilcIlxuICAgICAgICAgICAgOiBcIlwiKSArIFwiXFxuXFx0XCIgKyBnZXRNZXNzYWdlKFwibTAzOFwiKSArIFwiXFxuXCI7XG4gICAgfTtcbiAgICBSZWFjdGlvbi5wcm90b3R5cGUudHJhY2UgPSBmdW5jdGlvbiAoZW50ZXJCcmVha1BvaW50KSB7XG4gICAgICAgIGlmIChlbnRlckJyZWFrUG9pbnQgPT09IHZvaWQgMCkgeyBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTsgfVxuICAgICAgICB0cmFjZSh0aGlzLCBlbnRlckJyZWFrUG9pbnQpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0aW9uO1xufSgpKTtcbmZ1bmN0aW9uIHJlZ2lzdGVyRXJyb3JIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBpbnZhcmlhbnQodGhpcyAmJiB0aGlzLiRtb2J4ICYmIGlzUmVhY3Rpb24odGhpcy4kbW9ieCksIFwiSW52YWxpZCBgdGhpc2BcIik7XG4gICAgaW52YXJpYW50KCF0aGlzLiRtb2J4LmVycm9ySGFuZGxlciwgXCJPbmx5IG9uZSBvbkVycm9ySGFuZGxlciBjYW4gYmUgcmVnaXN0ZXJlZFwiKTtcbiAgICB0aGlzLiRtb2J4LmVycm9ySGFuZGxlciA9IGhhbmRsZXI7XG59XG5mdW5jdGlvbiBvblJlYWN0aW9uRXJyb3IoaGFuZGxlcikge1xuICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgICAgaWYgKGlkeCA+PSAwKVxuICAgICAgICAgICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuICAgIH07XG59XG4vKipcbiAqIE1hZ2ljIG51bWJlciBhbGVydCFcbiAqIERlZmluZXMgd2l0aGluIGhvdyBtYW55IHRpbWVzIGEgcmVhY3Rpb24gaXMgYWxsb3dlZCB0byByZS10cmlnZ2VyIGl0c2VsZlxuICogdW50aWwgaXQgaXMgYXNzdW1lZCB0aGF0IHRoaXMgaXMgZ29ubmEgYmUgYSBuZXZlciBlbmRpbmcgbG9vcC4uLlxuICovXG52YXIgTUFYX1JFQUNUSU9OX0lURVJBVElPTlMgPSAxMDA7XG52YXIgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9O1xuZnVuY3Rpb24gcnVuUmVhY3Rpb25zKCkge1xuICAgIC8vIFRyYW1wb2xpbmluZywgaWYgcnVuUmVhY3Rpb25zIGFyZSBhbHJlYWR5IHJ1bm5pbmcsIG5ldyByZWFjdGlvbnMgd2lsbCBiZSBwaWNrZWQgdXBcbiAgICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAgfHwgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zKVxuICAgICAgICByZXR1cm47XG4gICAgcmVhY3Rpb25TY2hlZHVsZXIocnVuUmVhY3Rpb25zSGVscGVyKTtcbn1cbmZ1bmN0aW9uIHJ1blJlYWN0aW9uc0hlbHBlcigpIHtcbiAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMgPSB0cnVlO1xuICAgIHZhciBhbGxSZWFjdGlvbnMgPSBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zO1xuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICAvLyBXaGlsZSBydW5uaW5nIHJlYWN0aW9ucywgbmV3IHJlYWN0aW9ucyBtaWdodCBiZSB0cmlnZ2VyZWQuXG4gICAgLy8gSGVuY2Ugd2Ugd29yayB3aXRoIHR3byB2YXJpYWJsZXMgYW5kIGNoZWNrIHdoZXRoZXJcbiAgICAvLyB3ZSBjb252ZXJnZSB0byBubyByZW1haW5pbmcgcmVhY3Rpb25zIGFmdGVyIGEgd2hpbGUuXG4gICAgd2hpbGUgKGFsbFJlYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICgrK2l0ZXJhdGlvbnMgPT09IE1BWF9SRUFDVElPTl9JVEVSQVRJT05TKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVhY3Rpb24gZG9lc24ndCBjb252ZXJnZSB0byBhIHN0YWJsZSBzdGF0ZSBhZnRlciBcIiArIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TICsgXCIgaXRlcmF0aW9ucy5cIiArXG4gICAgICAgICAgICAgICAgKFwiIFByb2JhYmx5IHRoZXJlIGlzIGEgY3ljbGUgaW4gdGhlIHJlYWN0aXZlIGZ1bmN0aW9uOiBcIiArIGFsbFJlYWN0aW9uc1swXSkpO1xuICAgICAgICAgICAgYWxsUmVhY3Rpb25zLnNwbGljZSgwKTsgLy8gY2xlYXIgcmVhY3Rpb25zXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbWFpbmluZ1JlYWN0aW9ucyA9IGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcmVtYWluaW5nUmVhY3Rpb25zLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgIHJlbWFpbmluZ1JlYWN0aW9uc1tpXS5ydW5SZWFjdGlvbigpO1xuICAgIH1cbiAgICBnbG9iYWxTdGF0ZS5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbn1cbnZhciBpc1JlYWN0aW9uID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIlJlYWN0aW9uXCIsIFJlYWN0aW9uKTtcbmZ1bmN0aW9uIHNldFJlYWN0aW9uU2NoZWR1bGVyKGZuKSB7XG4gICAgdmFyIGJhc2VTY2hlZHVsZXIgPSByZWFjdGlvblNjaGVkdWxlcjtcbiAgICByZWFjdGlvblNjaGVkdWxlciA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmbihmdW5jdGlvbiAoKSB7IHJldHVybiBiYXNlU2NoZWR1bGVyKGYpOyB9KTsgfTtcbn1cblxuZnVuY3Rpb24gYXNSZWZlcmVuY2UodmFsdWUpIHtcbiAgICBkZXByZWNhdGVkKFwiYXNSZWZlcmVuY2UgaXMgZGVwcmVjYXRlZCwgdXNlIG9ic2VydmFibGUucmVmIGluc3RlYWRcIik7XG4gICAgcmV0dXJuIG9ic2VydmFibGUucmVmKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGFzU3RydWN0dXJlKHZhbHVlKSB7XG4gICAgZGVwcmVjYXRlZChcImFzU3RydWN0dXJlIGlzIGRlcHJlY2F0ZWQuIFVzZSBvYnNlcnZhYmxlLnN0cnVjdCwgY29tcHV0ZWQuc3RydWN0IG9yIHJlYWN0aW9uIG9wdGlvbnMgaW5zdGVhZC5cIik7XG4gICAgcmV0dXJuIG9ic2VydmFibGUuc3RydWN0KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGFzRmxhdCh2YWx1ZSkge1xuICAgIGRlcHJlY2F0ZWQoXCJhc0ZsYXQgaXMgZGVwcmVjYXRlZCwgdXNlIG9ic2VydmFibGUuc2hhbGxvdyBpbnN0ZWFkXCIpO1xuICAgIHJldHVybiBvYnNlcnZhYmxlLnNoYWxsb3codmFsdWUpO1xufVxuZnVuY3Rpb24gYXNNYXAoZGF0YSkge1xuICAgIGRlcHJlY2F0ZWQoXCJhc01hcCBpcyBkZXByZWNhdGVkLCB1c2Ugb2JzZXJ2YWJsZS5tYXAgb3Igb2JzZXJ2YWJsZS5zaGFsbG93TWFwIGluc3RlYWRcIik7XG4gICAgcmV0dXJuIG9ic2VydmFibGUubWFwKGRhdGEgfHwge30pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlZERlY29yYXRvcihlcXVhbHMpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2xhc3NQcm9wZXJ0eURlY29yYXRvcihmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBfLCBfXywgb3JpZ2luYWxEZXNjcmlwdG9yKSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2Ygb3JpZ2luYWxEZXNjcmlwdG9yICE9PSBcInVuZGVmaW5lZFwiLCBnZXRNZXNzYWdlKFwibTAwOVwiKSk7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2Ygb3JpZ2luYWxEZXNjcmlwdG9yLmdldCA9PT0gXCJmdW5jdGlvblwiLCBnZXRNZXNzYWdlKFwibTAxMFwiKSk7XG4gICAgICAgIHZhciBhZG0gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBcIlwiKTtcbiAgICAgICAgZGVmaW5lQ29tcHV0ZWRQcm9wZXJ0eShhZG0sIG5hbWUsIG9yaWdpbmFsRGVzY3JpcHRvci5nZXQsIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQsIGVxdWFscywgZmFsc2UpO1xuICAgIH0sIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gdGhpcy4kbW9ieC52YWx1ZXNbbmFtZV07XG4gICAgICAgIGlmIChvYnNlcnZhYmxlID09PSB1bmRlZmluZWQgLy8gU2VlICM1MDVcbiAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuZ2V0KCk7XG4gICAgfSwgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJG1vYngudmFsdWVzW25hbWVdLnNldCh2YWx1ZSk7XG4gICAgfSwgZmFsc2UsIGZhbHNlKTtcbn1cbnZhciBjb21wdXRlZERlY29yYXRvciA9IGNyZWF0ZUNvbXB1dGVkRGVjb3JhdG9yKGNvbXBhcmVyLmRlZmF1bHQpO1xudmFyIGNvbXB1dGVkU3RydWN0RGVjb3JhdG9yID0gY3JlYXRlQ29tcHV0ZWREZWNvcmF0b3IoY29tcGFyZXIuc3RydWN0dXJhbCk7XG4vKipcbiAqIERlY29yYXRvciBmb3IgY2xhc3MgcHJvcGVydGllczogQGNvbXB1dGVkIGdldCB2YWx1ZSgpIHsgcmV0dXJuIGV4cHI7IH0uXG4gKiBGb3IgbGVnYWN5IHB1cnBvc2VzIGFsc28gaW52b2thYmxlIGFzIEVTNSBvYnNlcnZhYmxlIGNyZWF0ZWQ6IGBjb21wdXRlZCgoKSA9PiBleHByKWA7XG4gKi9cbnZhciBjb21wdXRlZCA9IGZ1bmN0aW9uIGNvbXB1dGVkKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBpZiAodHlwZW9mIGFyZzIgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVkRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGludmFyaWFudCh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiLCBnZXRNZXNzYWdlKFwibTAxMVwiKSk7XG4gICAgaW52YXJpYW50KGFyZ3VtZW50cy5sZW5ndGggPCAzLCBnZXRNZXNzYWdlKFwibTAxMlwiKSk7XG4gICAgdmFyIG9wdHMgPSB0eXBlb2YgYXJnMiA9PT0gXCJvYmplY3RcIiA/IGFyZzIgOiB7fTtcbiAgICBvcHRzLnNldHRlciA9IHR5cGVvZiBhcmcyID09PSBcImZ1bmN0aW9uXCIgPyBhcmcyIDogb3B0cy5zZXR0ZXI7XG4gICAgdmFyIGVxdWFscyA9IG9wdHMuZXF1YWxzXG4gICAgICAgID8gb3B0cy5lcXVhbHNcbiAgICAgICAgOiBvcHRzLmNvbXBhcmVTdHJ1Y3R1cmFsIHx8IG9wdHMuc3RydWN0ID8gY29tcGFyZXIuc3RydWN0dXJhbCA6IGNvbXBhcmVyLmRlZmF1bHQ7XG4gICAgcmV0dXJuIG5ldyBDb21wdXRlZFZhbHVlKGFyZzEsIG9wdHMuY29udGV4dCwgZXF1YWxzLCBvcHRzLm5hbWUgfHwgYXJnMS5uYW1lIHx8IFwiXCIsIG9wdHMuc2V0dGVyKTtcbn07XG5jb21wdXRlZC5zdHJ1Y3QgPSBjb21wdXRlZFN0cnVjdERlY29yYXRvcjtcbmNvbXB1dGVkLmVxdWFscyA9IGNyZWF0ZUNvbXB1dGVkRGVjb3JhdG9yO1xuXG5mdW5jdGlvbiBpc0NvbXB1dGVkKHZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgPT09IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXZhbHVlLiRtb2J4LnZhbHVlc1twcm9wZXJ0eV0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBhdG9tID0gZ2V0QXRvbSh2YWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICByZXR1cm4gaXNDb21wdXRlZFZhbHVlKGF0b20pO1xuICAgIH1cbiAgICByZXR1cm4gaXNDb21wdXRlZFZhbHVlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAodHlwZW9mIGNiT3JGaXJlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSk7XG59XG5mdW5jdGlvbiBvYnNlcnZlT2JzZXJ2YWJsZSh0aGluZywgbGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZykub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbn1cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkub2JzZXJ2ZShsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0KHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcik7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSh0aGluZywgcHJvcE9ySGFuZGxlcik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5pbnRlcmNlcHQoaGFuZGxlcik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KS5pbnRlcmNlcHQoaGFuZGxlcik7XG59XG5cbi8qKlxuICogZXhwciBjYW4gYmUgdXNlZCB0byBjcmVhdGUgdGVtcG9yYXJpbHkgdmlld3MgaW5zaWRlIHZpZXdzLlxuICogVGhpcyBjYW4gYmUgaW1wcm92ZWQgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSBpZiBhIHZhbHVlIGNoYW5nZXMgb2Z0ZW4sIGJ1dCB1c3VhbGx5IGRvZXNuJ3QgYWZmZWN0IHRoZSBvdXRjb21lIG9mIGFuIGV4cHJlc3Npb24uXG4gKlxuICogSW4gdGhlIGZvbGxvd2luZyBleGFtcGxlIHRoZSBleHByZXNzaW9uIHByZXZlbnRzIHRoYXQgYSBjb21wb25lbnQgaXMgcmVyZW5kZXIgX2VhY2ggdGltZV8gdGhlIHNlbGVjdGlvbiBjaGFuZ2VzO1xuICogaW5zdGVhZCBpdCB3aWxsIG9ubHkgcmVyZW5kZXJzIHdoZW4gdGhlIGN1cnJlbnQgdG9kbyBpcyAoZGUpc2VsZWN0ZWQuXG4gKlxuICogcmVhY3RpdmVDb21wb25lbnQoKHByb3BzKSA9PiB7XG4gKiAgICAgY29uc3QgdG9kbyA9IHByb3BzLnRvZG87XG4gKiAgICAgY29uc3QgaXNTZWxlY3RlZCA9IG1vYnguZXhwcigoKSA9PiBwcm9wcy52aWV3U3RhdGUuc2VsZWN0aW9uID09PSB0b2RvKTtcbiAqICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2lzU2VsZWN0ZWQgPyBcInRvZG8gdG9kby1zZWxlY3RlZFwiIDogXCJ0b2RvXCJ9Pnt0b2RvLnRpdGxlfTwvZGl2PlxuICogfSk7XG4gKlxuICovXG5mdW5jdGlvbiBleHByKGV4cHIsIHNjb3BlKSB7XG4gICAgaWYgKCFpc0NvbXB1dGluZ0Rlcml2YXRpb24oKSlcbiAgICAgICAgY29uc29sZS53YXJuKGdldE1lc3NhZ2UoXCJtMDEzXCIpKTtcbiAgICAvLyBvcHRpbWl6YXRpb246IHdvdWxkIGJlIG1vcmUgZWZmaWNpZW50IGlmIHRoZSBleHByIGl0c2VsZiB3b3VsZG4ndCBiZSBldmFsdWF0ZWQgZmlyc3Qgb24gdGhlIG5leHQgY2hhbmdlLCBidXQganVzdCBhICdjaGFuZ2VkJyBzaWduYWwgd291bGQgYmUgZmlyZWRcbiAgICByZXR1cm4gY29tcHV0ZWQoZXhwciwgeyBjb250ZXh0OiBzY29wZSB9KS5nZXQoKTtcbn1cblxuZnVuY3Rpb24gdG9KUyhzb3VyY2UsIGRldGVjdEN5Y2xlcywgX19hbHJlYWR5U2Vlbikge1xuICAgIGlmIChkZXRlY3RDeWNsZXMgPT09IHZvaWQgMCkgeyBkZXRlY3RDeWNsZXMgPSB0cnVlOyB9XG4gICAgaWYgKF9fYWxyZWFkeVNlZW4gPT09IHZvaWQgMCkgeyBfX2FscmVhZHlTZWVuID0gW107IH1cbiAgICAvLyBvcHRpbWl6YXRpb246IHVzaW5nIEVTNiBtYXAgd291bGQgYmUgbW9yZSBlZmZpY2llbnQhXG4gICAgLy8gb3B0aW1pemF0aW9uOiBsaWZ0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0b0pTLCB0aGlzIG1ha2VzIHJlY3Vyc2lvbiBleHBlbnNpdmVcbiAgICBmdW5jdGlvbiBjYWNoZSh2YWx1ZSkge1xuICAgICAgICBpZiAoZGV0ZWN0Q3ljbGVzKVxuICAgICAgICAgICAgX19hbHJlYWR5U2Vlbi5wdXNoKFtzb3VyY2UsIHZhbHVlXSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZShzb3VyY2UpKSB7XG4gICAgICAgIGlmIChkZXRlY3RDeWNsZXMgJiYgX19hbHJlYWR5U2VlbiA9PT0gbnVsbClcbiAgICAgICAgICAgIF9fYWxyZWFkeVNlZW4gPSBbXTtcbiAgICAgICAgaWYgKGRldGVjdEN5Y2xlcyAmJiBzb3VyY2UgIT09IG51bGwgJiYgdHlwZW9mIHNvdXJjZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBfX2FscmVhZHlTZWVuLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgICAgICBpZiAoX19hbHJlYWR5U2VlbltpXVswXSA9PT0gc291cmNlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hbHJlYWR5U2VlbltpXVsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkoc291cmNlKSkge1xuICAgICAgICAgICAgdmFyIHJlcyA9IGNhY2hlKFtdKTtcbiAgICAgICAgICAgIHZhciB0b0FkZCA9IHNvdXJjZS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0b0pTKHZhbHVlLCBkZXRlY3RDeWNsZXMsIF9fYWxyZWFkeVNlZW4pOyB9KTtcbiAgICAgICAgICAgIHJlcy5sZW5ndGggPSB0b0FkZC5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRvQWRkLmxlbmd0aDsgaSA8IGw7IGkrKylcbiAgICAgICAgICAgICAgICByZXNbaV0gPSB0b0FkZFtpXTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChzb3VyY2UpKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gY2FjaGUoe30pO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSlcbiAgICAgICAgICAgICAgICByZXNba2V5XSA9IHRvSlMoc291cmNlW2tleV0sIGRldGVjdEN5Y2xlcywgX19hbHJlYWR5U2Vlbik7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAoc291cmNlKSkge1xuICAgICAgICAgICAgdmFyIHJlc18xID0gY2FjaGUoe30pO1xuICAgICAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHsgcmV0dXJuIChyZXNfMVtrZXldID0gdG9KUyh2YWx1ZSwgZGV0ZWN0Q3ljbGVzLCBfX2FscmVhZHlTZWVuKSk7IH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc18xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVWYWx1ZShzb3VyY2UpKVxuICAgICAgICAgICAgcmV0dXJuIHRvSlMoc291cmNlLmdldCgpLCBkZXRlY3RDeWNsZXMsIF9fYWxyZWFkeVNlZW4pO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2Zvcm1lcih0cmFuc2Zvcm1lciwgb25DbGVhbnVwKSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiB0cmFuc2Zvcm1lciA9PT0gXCJmdW5jdGlvblwiICYmIHRyYW5zZm9ybWVyLmxlbmd0aCA8IDIsIFwiY3JlYXRlVHJhbnNmb3JtZXIgZXhwZWN0cyBhIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBvbmUgYXJndW1lbnRcIik7XG4gICAgLy8gTWVtb2l6ZXM6IG9iamVjdCBpZCAtPiByZWFjdGl2ZSB2aWV3IHRoYXQgYXBwbGllcyB0cmFuc2Zvcm1lciB0byB0aGUgb2JqZWN0XG4gICAgdmFyIG9iamVjdENhY2hlID0ge307XG4gICAgLy8gSWYgdGhlIHJlc2V0SWQgY2hhbmdlcywgd2Ugd2lsbCBjbGVhciB0aGUgb2JqZWN0IGNhY2hlLCBzZWUgIzE2M1xuICAgIC8vIFRoaXMgY29uc3RydWN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgbGVha2luZyByZWZzIHRvIHRoZSBvYmplY3RDYWNoZSBkaXJlY3RseVxuICAgIHZhciByZXNldElkID0gZ2xvYmFsU3RhdGUucmVzZXRJZDtcbiAgICAvLyBMb2NhbCB0cmFuc2Zvcm1lciBjbGFzcyBzcGVjaWZpY2FsbHkgZm9yIHRoaXMgdHJhbnNmb3JtZXJcbiAgICB2YXIgVHJhbnNmb3JtZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoVHJhbnNmb3JtZXIsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFRyYW5zZm9ybWVyKHNvdXJjZUlkZW50aWZpZXIsIHNvdXJjZU9iamVjdCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJhbnNmb3JtZXIoc291cmNlT2JqZWN0KTsgfSwgdW5kZWZpbmVkLCBjb21wYXJlci5kZWZhdWx0LCBcIlRyYW5zZm9ybWVyLVwiICsgdHJhbnNmb3JtZXIubmFtZSArIFwiLVwiICsgc291cmNlSWRlbnRpZmllciwgdW5kZWZpbmVkKSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMuc291cmNlSWRlbnRpZmllciA9IHNvdXJjZUlkZW50aWZpZXI7XG4gICAgICAgICAgICBfdGhpcy5zb3VyY2VPYmplY3QgPSBzb3VyY2VPYmplY3Q7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgVHJhbnNmb3JtZXIucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYXN0VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmplY3RDYWNoZVt0aGlzLnNvdXJjZUlkZW50aWZpZXJdO1xuICAgICAgICAgICAgaWYgKG9uQ2xlYW51cClcbiAgICAgICAgICAgICAgICBvbkNsZWFudXAobGFzdFZhbHVlLCB0aGlzLnNvdXJjZU9iamVjdCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBUcmFuc2Zvcm1lcjtcbiAgICB9KENvbXB1dGVkVmFsdWUpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBpZiAocmVzZXRJZCAhPT0gZ2xvYmFsU3RhdGUucmVzZXRJZCkge1xuICAgICAgICAgICAgb2JqZWN0Q2FjaGUgPSB7fTtcbiAgICAgICAgICAgIHJlc2V0SWQgPSBnbG9iYWxTdGF0ZS5yZXNldElkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZGVudGlmaWVyID0gZ2V0TWVtb2l6YXRpb25JZChvYmplY3QpO1xuICAgICAgICB2YXIgcmVhY3RpdmVUcmFuc2Zvcm1lciA9IG9iamVjdENhY2hlW2lkZW50aWZpZXJdO1xuICAgICAgICBpZiAocmVhY3RpdmVUcmFuc2Zvcm1lcilcbiAgICAgICAgICAgIHJldHVybiByZWFjdGl2ZVRyYW5zZm9ybWVyLmdldCgpO1xuICAgICAgICAvLyBOb3QgaW4gY2FjaGU7IGNyZWF0ZSBhIHJlYWN0aXZlIHZpZXdcbiAgICAgICAgcmVhY3RpdmVUcmFuc2Zvcm1lciA9IG9iamVjdENhY2hlW2lkZW50aWZpZXJdID0gbmV3IFRyYW5zZm9ybWVyKGlkZW50aWZpZXIsIG9iamVjdCk7XG4gICAgICAgIHJldHVybiByZWFjdGl2ZVRyYW5zZm9ybWVyLmdldCgpO1xuICAgIH07XG59XG5mdW5jdGlvbiBnZXRNZW1vaXphdGlvbklkKG9iamVjdCkge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBvYmplY3QgPT09IFwibnVtYmVyXCIpXG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqZWN0ICE9PSBcIm9iamVjdFwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gdHJhbnNmb3JtIGV4cGVjdGVkIHNvbWUga2luZCBvZiBvYmplY3Qgb3IgcHJpbWl0aXZlIHZhbHVlLCBnb3Q6IFwiICsgb2JqZWN0KTtcbiAgICB2YXIgdGlkID0gb2JqZWN0LiR0cmFuc2Zvcm1JZDtcbiAgICBpZiAodGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGlkID0gZ2V0TmV4dElkKCk7XG4gICAgICAgIGFkZEhpZGRlblByb3Aob2JqZWN0LCBcIiR0cmFuc2Zvcm1JZFwiLCB0aWQpO1xuICAgIH1cbiAgICByZXR1cm4gdGlkO1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRSZWFkcyh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcikge1xuICAgIHZhciB0YXJnZXQ7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVZhbHVlKHRoaW5nKSkge1xuICAgICAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wT3JIYW5kbGVyICE9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgcmV0dXJuIGZhaWwoXCJJbnRlcmNlcHRSZWFkcyBjYW4gb25seSBiZSB1c2VkIHdpdGggYSBzcGVjaWZpYyBwcm9wZXJ0eSwgbm90IHdpdGggYW4gb2JqZWN0IGluIGdlbmVyYWxcIik7XG4gICAgICAgIHRhcmdldCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wT3JIYW5kbGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWlsKFwiRXhwZWN0ZWQgb2JzZXJ2YWJsZSBtYXAsIG9iamVjdCBvciBhcnJheSBhcyBmaXJzdCBhcnJheVwiKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFpbChcIkFuIGludGVyY2VwdCByZWFkZXIgd2FzIGFscmVhZHkgZXN0YWJsaXNoZWRcIik7XG4gICAgdGFyZ2V0LmRlaGFuY2VyID0gdHlwZW9mIHByb3BPckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIiA/IHByb3BPckhhbmRsZXIgOiBoYW5kbGVyO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRhcmdldC5kZWhhbmNlciA9IHVuZGVmaW5lZDtcbiAgICB9O1xufVxuXG4vKipcbiAqIChjKSBNaWNoZWwgV2VzdHN0cmF0ZSAyMDE1IC0gMjAxNlxuICogTUlUIExpY2Vuc2VkXG4gKlxuICogV2VsY29tZSB0byB0aGUgbW9ieCBzb3VyY2VzISBUbyBnZXQgYW4gZ2xvYmFsIG92ZXJ2aWV3IG9mIGhvdyBNb2JYIGludGVybmFsbHkgd29ya3MsXG4gKiB0aGlzIGlzIGEgZ29vZCBwbGFjZSB0byBzdGFydDpcbiAqIGh0dHBzOi8vbWVkaXVtLmNvbS9AbXdlc3RzdHJhdGUvYmVjb21pbmctZnVsbHktcmVhY3RpdmUtYW4taW4tZGVwdGgtZXhwbGFuYXRpb24tb2YtbW9ic2VydmFibGUtNTU5OTUyNjJhMjU0Iy54dmJoNnFkNzRcbiAqXG4gKiBTb3VyY2UgZm9sZGVyczpcbiAqID09PT09PT09PT09PT09PVxuICpcbiAqIC0gYXBpLyAgICAgTW9zdCBvZiB0aGUgcHVibGljIHN0YXRpYyBtZXRob2RzIGV4cG9zZWQgYnkgdGhlIG1vZHVsZSBjYW4gYmUgZm91bmQgaGVyZS5cbiAqIC0gY29yZS8gICAgSW1wbGVtZW50YXRpb24gb2YgdGhlIE1vYlggYWxnb3JpdGhtOyBhdG9tcywgZGVyaXZhdGlvbnMsIHJlYWN0aW9ucywgZGVwZW5kZW5jeSB0cmVlcywgb3B0aW1pemF0aW9ucy4gQ29vbCBzdHVmZiBjYW4gYmUgZm91bmQgaGVyZS5cbiAqIC0gdHlwZXMvICAgQWxsIHRoZSBtYWdpYyB0aGF0IGlzIG5lZWQgdG8gaGF2ZSBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgdmFsdWVzIGlzIGluIHRoaXMgZm9sZGVyLiBJbmNsdWRpbmcgdGhlIG1vZGlmaWVycyBsaWtlIGBhc0ZsYXRgLlxuICogLSB1dGlscy8gICBVdGlsaXR5IHN0dWZmLlxuICpcbiAqL1xudmFyIGV4dHJhcyA9IHtcbiAgICBhbGxvd1N0YXRlQ2hhbmdlczogYWxsb3dTdGF0ZUNoYW5nZXMsXG4gICAgZGVlcEVxdWFsOiBkZWVwRXF1YWwsXG4gICAgZ2V0QXRvbTogZ2V0QXRvbSxcbiAgICBnZXREZWJ1Z05hbWU6IGdldERlYnVnTmFtZSxcbiAgICBnZXREZXBlbmRlbmN5VHJlZTogZ2V0RGVwZW5kZW5jeVRyZWUsXG4gICAgZ2V0QWRtaW5pc3RyYXRpb246IGdldEFkbWluaXN0cmF0aW9uLFxuICAgIGdldEdsb2JhbFN0YXRlOiBnZXRHbG9iYWxTdGF0ZSxcbiAgICBnZXRPYnNlcnZlclRyZWU6IGdldE9ic2VydmVyVHJlZSxcbiAgICBpbnRlcmNlcHRSZWFkczogaW50ZXJjZXB0UmVhZHMsXG4gICAgaXNDb21wdXRpbmdEZXJpdmF0aW9uOiBpc0NvbXB1dGluZ0Rlcml2YXRpb24sXG4gICAgaXNTcHlFbmFibGVkOiBpc1NweUVuYWJsZWQsXG4gICAgb25SZWFjdGlvbkVycm9yOiBvblJlYWN0aW9uRXJyb3IsXG4gICAgcmVzZXJ2ZUFycmF5QnVmZmVyOiByZXNlcnZlQXJyYXlCdWZmZXIsXG4gICAgcmVzZXRHbG9iYWxTdGF0ZTogcmVzZXRHbG9iYWxTdGF0ZSxcbiAgICBpc29sYXRlR2xvYmFsU3RhdGU6IGlzb2xhdGVHbG9iYWxTdGF0ZSxcbiAgICBzaGFyZUdsb2JhbFN0YXRlOiBzaGFyZUdsb2JhbFN0YXRlLFxuICAgIHNweVJlcG9ydDogc3B5UmVwb3J0LFxuICAgIHNweVJlcG9ydEVuZDogc3B5UmVwb3J0RW5kLFxuICAgIHNweVJlcG9ydFN0YXJ0OiBzcHlSZXBvcnRTdGFydCxcbiAgICBzZXRSZWFjdGlvblNjaGVkdWxlcjogc2V0UmVhY3Rpb25TY2hlZHVsZXJcbn07XG52YXIgZXZlcnl0aGluZyA9IHtcbiAgICBSZWFjdGlvbjogUmVhY3Rpb24sXG4gICAgdW50cmFja2VkOiB1bnRyYWNrZWQsXG4gICAgQXRvbTogQXRvbSxcbiAgICBCYXNlQXRvbTogQmFzZUF0b20sXG4gICAgdXNlU3RyaWN0OiB1c2VTdHJpY3QsXG4gICAgaXNTdHJpY3RNb2RlRW5hYmxlZDogaXNTdHJpY3RNb2RlRW5hYmxlZCxcbiAgICBzcHk6IHNweSxcbiAgICBjb21wYXJlcjogY29tcGFyZXIsXG4gICAgYXNSZWZlcmVuY2U6IGFzUmVmZXJlbmNlLFxuICAgIGFzRmxhdDogYXNGbGF0LFxuICAgIGFzU3RydWN0dXJlOiBhc1N0cnVjdHVyZSxcbiAgICBhc01hcDogYXNNYXAsXG4gICAgaXNNb2RpZmllckRlc2NyaXB0b3I6IGlzTW9kaWZpZXJEZXNjcmlwdG9yLFxuICAgIGlzT2JzZXJ2YWJsZU9iamVjdDogaXNPYnNlcnZhYmxlT2JqZWN0LFxuICAgIGlzQm94ZWRPYnNlcnZhYmxlOiBpc09ic2VydmFibGVWYWx1ZSxcbiAgICBpc09ic2VydmFibGVBcnJheTogaXNPYnNlcnZhYmxlQXJyYXksXG4gICAgT2JzZXJ2YWJsZU1hcDogT2JzZXJ2YWJsZU1hcCxcbiAgICBpc09ic2VydmFibGVNYXA6IGlzT2JzZXJ2YWJsZU1hcCxcbiAgICBtYXA6IG1hcCxcbiAgICB0cmFuc2FjdGlvbjogdHJhbnNhY3Rpb24sXG4gICAgb2JzZXJ2YWJsZTogb2JzZXJ2YWJsZSxcbiAgICBjb21wdXRlZDogY29tcHV0ZWQsXG4gICAgaXNPYnNlcnZhYmxlOiBpc09ic2VydmFibGUsXG4gICAgaXNDb21wdXRlZDogaXNDb21wdXRlZCxcbiAgICBleHRlbmRPYnNlcnZhYmxlOiBleHRlbmRPYnNlcnZhYmxlLFxuICAgIGV4dGVuZFNoYWxsb3dPYnNlcnZhYmxlOiBleHRlbmRTaGFsbG93T2JzZXJ2YWJsZSxcbiAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgIGludGVyY2VwdDogaW50ZXJjZXB0LFxuICAgIGF1dG9ydW46IGF1dG9ydW4sXG4gICAgYXV0b3J1bkFzeW5jOiBhdXRvcnVuQXN5bmMsXG4gICAgd2hlbjogd2hlbixcbiAgICByZWFjdGlvbjogcmVhY3Rpb24sXG4gICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgaXNBY3Rpb246IGlzQWN0aW9uLFxuICAgIHJ1bkluQWN0aW9uOiBydW5JbkFjdGlvbixcbiAgICBleHByOiBleHByLFxuICAgIHRvSlM6IHRvSlMsXG4gICAgY3JlYXRlVHJhbnNmb3JtZXI6IGNyZWF0ZVRyYW5zZm9ybWVyLFxuICAgIHdoeVJ1bjogd2h5UnVuLFxuICAgIGlzQXJyYXlMaWtlOiBpc0FycmF5TGlrZSxcbiAgICBleHRyYXM6IGV4dHJhc1xufTtcbnZhciB3YXJuZWRBYm91dERlZmF1bHRFeHBvcnQgPSBmYWxzZTtcbnZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHApIHtcbiAgICB2YXIgdmFsID0gZXZlcnl0aGluZ1twXTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlcnl0aGluZywgcCwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghd2FybmVkQWJvdXREZWZhdWx0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgd2FybmVkQWJvdXREZWZhdWx0RXhwb3J0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJVc2luZyBkZWZhdWx0IGV4cG9ydCAoYGltcG9ydCBtb2J4IGZyb20gJ21vYngnYCkgaXMgZGVwcmVjYXRlZCBcIiArXG4gICAgICAgICAgICAgICAgICAgIFwiYW5kIHdvbuKAmXQgd29yayBpbiBtb2J4QDQuMC4wXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIlVzZSBgaW1wb3J0ICogYXMgbW9ieCBmcm9tICdtb2J4J2AgaW5zdGVhZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5mb3IgKHZhciBwIGluIGV2ZXJ5dGhpbmcpIHtcbiAgICBfbG9vcF8xKHApO1xufVxuaWYgKHR5cGVvZiBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gXCJvYmplY3RcIikge1xuICAgIF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmluamVjdE1vYngoeyBzcHk6IHNweSwgZXh0cmFzOiBleHRyYXMgfSk7XG59XG5cbmV4cG9ydCB7IGV4dHJhcywgUmVhY3Rpb24sIHVudHJhY2tlZCwgSURlcml2YXRpb25TdGF0ZSwgQXRvbSwgQmFzZUF0b20sIHVzZVN0cmljdCwgaXNTdHJpY3RNb2RlRW5hYmxlZCwgc3B5LCBjb21wYXJlciwgYXNSZWZlcmVuY2UsIGFzRmxhdCwgYXNTdHJ1Y3R1cmUsIGFzTWFwLCBpc01vZGlmaWVyRGVzY3JpcHRvciwgaXNPYnNlcnZhYmxlT2JqZWN0LCBpc09ic2VydmFibGVWYWx1ZSBhcyBpc0JveGVkT2JzZXJ2YWJsZSwgaXNPYnNlcnZhYmxlQXJyYXksIE9ic2VydmFibGVNYXAsIGlzT2JzZXJ2YWJsZU1hcCwgbWFwLCB0cmFuc2FjdGlvbiwgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSwgaXNDb21wdXRlZCwgZXh0ZW5kT2JzZXJ2YWJsZSwgZXh0ZW5kU2hhbGxvd09ic2VydmFibGUsIG9ic2VydmUsIGludGVyY2VwdCwgYXV0b3J1biwgYXV0b3J1bkFzeW5jLCB3aGVuLCByZWFjdGlvbiwgYWN0aW9uLCBpc0FjdGlvbiwgcnVuSW5BY3Rpb24sIGV4cHIsIHRvSlMsIGNyZWF0ZVRyYW5zZm9ybWVyLCB3aHlSdW4sIHRyYWNlLCBpc0FycmF5TGlrZSB9O2V4cG9ydCBkZWZhdWx0IGV2ZXJ5dGhpbmc7XG4iLCJ2YXIgdjEgPSByZXF1aXJlKCcuL3YxJyk7XG52YXIgdjQgPSByZXF1aXJlKCcuL3Y0Jyk7XG5cbnZhciB1dWlkID0gdjQ7XG51dWlkLnYxID0gdjE7XG51dWlkLnY0ID0gdjQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsImltcG9ydCBmb3ggZnJvbSBcImZveFwiO1xuXG5leHBvcnQgY29uc3QgYW5pbWF0ZWQgPSAocHJvcHMsIGNoaWxkcmVuLCBfZmlkKSA9PiB7XG5cdHJldHVybiA8ZGl2IGRhdGEtZm94eS1iaSBjbGFzc05hbWU9XCJhbmltYXRlZCByb2xsSW5cIj57Y2hpbGRyZW59PC9kaXY+XG59IiwiaW1wb3J0IHsgYW5pbWF0ZWQgfSBmcm9tICcuL2FuaW1hdGVkJ1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICd1dGlsaXRpZXMvaXNTdHJpbmcnXG5cbmNvbnN0IF9leGlzdHMgPSAodGFnLCBjYikgPT4ge1xuXHRyZXR1cm4gaXNTdHJpbmcodGFnKSAmJiB0YWcgaW4gYnVpbHRJbnM7XG5cdC8vIHJldHVybiBpc1N0cmluZyh0YWcpICYmIHRhZyBpbiBidWlsdElucyAmJiBjYigpO1xufVxuXG5leHBvcnQgY29uc3QgYnVpbHRJbnMgPSB7XG5cdGFuaW1hdGVkLFxuXHRfZXhpc3RzXG59IiwiaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJlbGVtZW50L2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGFwcGx5UHJvcHMgfSBmcm9tIFwidXRpbGl0aWVzL2RvbS9hcHBseVByb3BzXCI7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZHJlbiB9IGZyb20gXCJ1dGlsaXRpZXMvZG9tL2FwcGVuZENoaWxkcmVuXCI7XG5pbXBvcnQgeyBjcmVhdGVDaGlsZHJlbiB9IGZyb20gXCJlbGVtZW50L2NyZWF0ZUNoaWxkcmVuXCI7XG5pbXBvcnQgeyBFTUFQIH0gZnJvbSBcInN0b3JlL0VNQVBcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xuXHRwcm9wcyA9IHByb3BzIHx8IHt9O1xuXHRjb25zdCBfZmlkID0gdXVpZCgpO1xuXG5cdGNvbnN0IF9lbGVtZW50ID0gY3JlYXRlRWxlbWVudCh0YWcsIHByb3BzLCBjaGlsZHJlbik7XG5cdGNvbnN0IF9jaGlsZHJlbiA9IGNyZWF0ZUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuXHRFTUFQLnNldChfZmlkLCB7IF9lbGVtZW50LCB0YWcsIHByb3BzLCBjaGlsZHJlbiB9KTtcblxuXHRhcHBlbmRDaGlsZHJlbihfZWxlbWVudCwgX2NoaWxkcmVuKTtcblx0YXBwbHlQcm9wcyhfZWxlbWVudCwgcHJvcHMsIF9maWQpO1xuXG5cdHJldHVybiBfZWxlbWVudDtcbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAndXRpbGl0aWVzL2lzU3RyaW5nJ1xuXG4vLyBOT1RFOiBNYWlubHkganVzdCBoYW5kbGVzIHRleHQgbm9kZXMuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2hpbGRyZW4gPSAoY2hpbGRyZW4pID0+IHtcbiAgY2hpbGRyZW4gPSBjaGlsZHJlbiB8fCBbXTtcblxuICByZXR1cm4gY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHJldHVybiBjcmVhdGVDaGlsZHJlbihjaGlsZCk7XG4gICAgcmV0dXJuIGlzU3RyaW5nKGNoaWxkKSA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSA6IGNoaWxkO1xuICB9KTtcbn07IiwiaW1wb3J0IHsgYnVpbHRJbnMgfSBmcm9tIFwiYnVpbHRJbi9idWlsdEluc1wiO1xuXG4vLyBOT1RFOiBOb3QgaW1wbGVtZW50ZWQgeWV0LlxuY2xhc3MgQ29tcG9uZW50IHt9XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgcHJvcHMsIGNoaWxkcmVuKSA9PiB7XG5cdHN3aXRjaCAodHlwZW9mIHRhZykge1xuXHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRyZXR1cm4gYnVpbHRJbnMuX2V4aXN0cyh0YWcpXG5cdFx0XHRcdD8gYnVpbHRJbnNbdGFnXShwcm9wcywgY2hpbGRyZW4pXG5cdFx0XHRcdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG5cdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0cmV0dXJuIHRhZyBpbnN0YW5jZW9mIENvbXBvbmVudFxuXHRcdFx0XHQ/IG5ldyB0YWcocHJvcHMsIGNoaWxkcmVuKVxuXHRcdFx0XHQ6IHRhZyhwcm9wcywgY2hpbGRyZW4pO1xuXHR9XG59OyIsImV4cG9ydCB7IGNyZWF0ZSB9IGZyb20gJy4vY3JlYXRlJ1xyXG5leHBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlciciLCJpbXBvcnQgeyByZW1vdmVDaGlsZHJlbiB9IGZyb20gJ3V0aWxpdGllcy9kb20vcmVtb3ZlQ2hpbGRyZW4nXG5cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAoZWxlbWVudCwgbm9kZSkgPT4ge1xuICByZW1vdmVDaGlsZHJlbihub2RlKSAmJiBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufSIsImV4cG9ydCBjb25zdCBFTUFQID0gbmV3IE1hcCgpOyIsImltcG9ydCB7IGNyZWF0ZSwgcmVuZGVyIH0gZnJvbSAnLi9jb3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGNyZWF0ZSxcclxuXHRyZW5kZXJcclxufSIsImxldCBpID0gMDtcblxuZXhwb3J0IGNvbnN0IGFwcGVuZENoaWxkcmVuID0gKGVsZW1lbnQsIGNoaWxkcmVuKSA9PiB7XG5cdC8vIE5PVEU6IGJ1aWx0SW5zIChiaSkgaGFuZGxlIHRoZWlyIG93biBjaGlsZHJlbi5cblx0aWYgKGVsZW1lbnRbJ2RhdGEtZm94eS1iaSddKSByZXR1cm47XG5cbiAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGlpKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSByZXR1cm4gYXBwZW5kQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGQpO1xuICAgIGNoaWxkICYmIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07IiwiZXhwb3J0IGNvbnN0IGFwcGx5SGFuZGxlciA9IChlbGVtZW50LCBuYW1lLCBoYW5kbGVyKSA9PiB7XHJcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIpO1xyXG5cdHJldHVybiBlbGVtZW50O1xyXG59IiwiaW1wb3J0IHsgYXBwbHlIYW5kbGVyIH0gZnJvbSAndXRpbGl0aWVzL2RvbS9hcHBseUhhbmRsZXInXG5pbXBvcnQgeyBpc0hhbmRsZXIgfSBmcm9tIFwidXRpbGl0aWVzL2lzSGFuZGxlclwiO1xuaW1wb3J0IHsgZW50cmllc09mIH0gZnJvbSBcInV0aWxpdGllcy9lbnRyaWVzT2ZcIjtcbmltcG9ydCB7IGZpbGVBcnJheSB9IGZyb20gJ3V0aWxpdGllcy9maWxlQXJyYXknXG5pbXBvcnQgeyBoYW5kbGVyTmFtZSB9IGZyb20gXCIuL2hhbmRsZXJOYW1lXCI7XG5cbmV4cG9ydCBjb25zdCBhcHBseVByb3BzID0gKGVsZW1lbnQsIHByb3BzLCBfZmlkKSA9PiB7XG5cdGVudHJpZXNPZihwcm9wcykuZm9yRWFjaCgoWyBuYW1lLCB2YWx1ZSBdKSA9PiB7XG5cdFx0aXNIYW5kbGVyKG5hbWUpXG5cdFx0XHQ/IGFwcGx5SGFuZGxlcihlbGVtZW50LCBoYW5kbGVyTmFtZShuYW1lKSwgdmFsdWUpXG5cdFx0XHQ6IGVsZW1lbnRbbmFtZV0gPSB2YWx1ZVxuXHR9KVxuXG5cdGVsZW1lbnQuX2ZpZCA9IF9maWQ7XG4gIHJldHVybiBlbGVtZW50O1xufTsiLCJleHBvcnQgY29uc3QgaGFuZGxlck5hbWUgPSAocHJvcE5hbWUpID0+IHtcclxuICByZXR1cm4gcHJvcE5hbWUudG9Mb3dlckNhc2UoKS5zdWJzdHJpbmcoMik7XHJcbn0iLCJpbXBvcnQgeyByZW1vdmVOb2RlIH0gZnJvbSAndXRpbGl0aWVzL2RvbS9yZW1vdmVOb2RlJ1xyXG5cclxuLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBmcm9tIGEgbm9kZS5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNoaWxkcmVuID0gbm9kZSA9PiB7XHJcbiAgQXJyYXkuZnJvbShub2RlLmNoaWxkTm9kZXMpLmZvckVhY2gocmVtb3ZlTm9kZSk7XHJcbiAgcmV0dXJuIG5vZGU7XHJcbn07IiwiLy8gVGVsbCBhIG5vZGUgdG8ga2lsbCBpdHNlbGYuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlID0gbm9kZSA9PiB7XHJcbiAgbm9kZS5yZW1vdmUoKTtcclxufTsiLCJleHBvcnQgY29uc3QgZW50cmllc09mID0gKHRhcmdldCkgPT4ge1xuXHRyZXR1cm4gT2JqZWN0LmVudHJpZXModGFyZ2V0KTtcbn0iLCJleHBvcnQgY29uc3QgZmlsZUFycmF5ID0gKGFycmF5LCBkZXRlcm1pbmF0b3IpID0+IHtcclxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKChmaW5hbCwgaXRlbSkgPT4ge1xyXG5cdFx0ZGV0ZXJtaW5hdG9yKGl0ZW0pXHJcblx0XHRcdD8gZmluYWxbMF0ucHVzaChpdGVtKVxyXG5cdFx0XHQ6IGZpbmFsWzFdLnB1c2goaXRlbSlcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGZpbmFsO1xyXG5cdH0sIFtbXSwgW11dKVxyXG59IiwiZXhwb3J0IGNvbnN0IGlzSGFuZGxlciA9IHByb3BOYW1lID0+IHByb3BOYW1lLnN0YXJ0c1dpdGgoXCJvblwiKTsiLCJleHBvcnQgY29uc3QgaXNTdHJpbmcgPSB0YXJnZXQgPT4ge1xyXG4gIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSBcInN0cmluZ1wiO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=