(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ({

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WrongTypeError = exports.InvalidArgumentError = exports.ArgumentNullError = exports.NotImplementedError = undefined;

var _notImplementedError = __webpack_require__(209);

var _notImplementedError2 = _interopRequireDefault(_notImplementedError);

var _argumentNullError = __webpack_require__(210);

var _argumentNullError2 = _interopRequireDefault(_argumentNullError);

var _invalidArgumentError = __webpack_require__(211);

var _invalidArgumentError2 = _interopRequireDefault(_invalidArgumentError);

var _wrongTypeError = __webpack_require__(212);

var _wrongTypeError2 = _interopRequireDefault(_wrongTypeError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    NotImplementedError: _notImplementedError2.default,
    ArgumentNullError: _argumentNullError2.default,
    InvalidArgumentError: _invalidArgumentError2.default,
    WrongTypeError: _wrongTypeError2.default
};
exports.NotImplementedError = _notImplementedError2.default;
exports.ArgumentNullError = _argumentNullError2.default;
exports.InvalidArgumentError = _invalidArgumentError2.default;
exports.WrongTypeError = _wrongTypeError2.default;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UdeskError = function (_Error) {
    _inherits(UdeskError, _Error);

    function UdeskError() {
        _classCallCheck(this, UdeskError);

        return _possibleConstructorReturn(this, (UdeskError.__proto__ || Object.getPrototypeOf(UdeskError)).apply(this, arguments));
    }

    return UdeskError;
}(Error);

exports.default = UdeskError;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    required: /\S+/,
    number: /^\d+$/,
    numberNullable: /^(\d+)?$/,
    floatNumber: /^\d+\.?\d*$/,
    floatNumberNullable: /^(\d+\.?\d*)?$/,
    mobile: /^1[0-9]{10}$/,
    date: /^\d{4}-\d{1,2}-\d{1,2}$/, //验证YYYY-MM-DD格式的日期
    mobileNullable: /^(1[0-9]{10})?$/,
    telephone: /^(0\d{2,3})(\d{7,8})|400\d{7}$/, //固话格式，－可加可不加
    mobileOrTelephone: /(^1[0-9]{10}$)|(^(0\d{2,3})(\d{7,8})|400\d{7}$)/,
    telephoneNullable: /^((0\d{2,3})(\d{7,8})|400\d{7})?$/,
    email: /^[\w][\w-]*(\.[\w-]+)*@([\w]([\w-]*[\w])?\.)+[\w]([\w]*[\w])?$/,
    emailNullable: /^(([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,4})+)?$/,
    currency: /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/,
    currencyNullable: /^(([1-9][\d]{0,7}|0)(\.[\d]{1,2})?)?$/,
    styleTag: /<style(([\s\S])*?)<\/style>/g,
    scriptTag: /<script(([\s\S])*?)<\/script>/g
};

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _error = __webpack_require__(165);

var _eventedClass = __webpack_require__(179);

var _eventedClass2 = _interopRequireDefault(_eventedClass);

var _loadVersionIntervalClass = __webpack_require__(213);

var _loadVersionIntervalClass2 = _interopRequireDefault(_loadVersionIntervalClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalInstances = new Map();

var EnableGlobalInstances = false;

var GetUserForSentry = null;
var getTagsContextForSentry = null;
var enableSentry = true;

var loadVersionIntervalInstance = new _loadVersionIntervalClass2.default();

var SDKBaseClass = function (_EventedClass) {
    _inherits(SDKBaseClass, _EventedClass);

    function SDKBaseClass(options) {
        _classCallCheck(this, SDKBaseClass);

        var _this = _possibleConstructorReturn(this, (SDKBaseClass.__proto__ || Object.getPrototypeOf(SDKBaseClass)).call(this));

        if (typeof _this.constructor.destroy !== "function") {
            throw new _error.NotImplementedError(_this.constructor.name + '.destroy');
        }

        if (_this.constructor.enableGlobalInstances) {
            if (!GlobalInstances.has(_this.constructor)) {
                GlobalInstances.set(_this.constructor, new Set());
            }
            var instanceStore = GlobalInstances.get(_this.constructor);
            instanceStore.add(_this);
        }

        _this.options = options;
        return _this;
    }

    _createClass(SDKBaseClass, [{
        key: 'destroy',
        value: function destroy() {
            if (this.constructor.enableGlobalInstances) {
                var instanceStore = GlobalInstances.get(this.constructor);
                if (instanceStore != null) {
                    instanceStore.delete(this);
                }
            }
        }
    }, {
        key: 'startListeningVersion',
        value: function startListeningVersion(_ref) {
            var versionPath = _ref.versionPath,
                callback = _ref.callback,
                versionCheckIntervalSeconds = _ref.versionCheckIntervalSeconds;

            loadVersionIntervalInstance.add({
                versionPath: versionPath,
                callback: callback,
                versionCheckIntervalSeconds: versionCheckIntervalSeconds,
                instance: this
            });
        }
    }, {
        key: 'stopListeningVersion',
        value: function stopListeningVersion(versionPath) {
            loadVersionIntervalInstance.remove(versionPath, this);
        }
    }], [{
        key: 'destroy',
        get: function get() {
            loadVersionIntervalInstance.clear();
            return function (concreteClass) {
                if (this.constructor.enableGlobalInstances) {
                    var instanceStore = GlobalInstances.get(concreteClass);
                    if (instanceStore != null) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = instanceStore[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var instance = _step.value;

                                instance.destroy();
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        instanceStore.clear();
                    }
                }
            };
        }
    }, {
        key: 'enableGlobalInstances',
        get: function get() {
            return EnableGlobalInstances;
        },
        set: function set(value) {
            EnableGlobalInstances = !!value;
        }
    }, {
        key: 'initGlobalNameSpace',
        get: function get() {
            return function (sdkClass, options) {
                if (sdkClass == null) {
                    throw new _error.ArgumentNullError('initGlobalNameSpace.sdkClass');
                }
                if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== "object") {
                    options = {
                        defaultNamespace: null
                    };
                }
                var globalNamespace = window.__SDK_GLOBAL_NAMESPACE__;

                if (typeof globalNamespace === "function") {
                    globalNamespace = globalNamespace();
                }
                if (globalNamespace == null) {
                    if (options.defaultNamespace) {
                        globalNamespace = options.defaultNamespace;
                    }
                }

                if (globalNamespace !== "") {
                    window[globalNamespace] = sdkClass;
                }

                if (typeof window.__SDK_LOADED_CALLBACK__ === "function") {
                    window.__SDK_LOADED_CALLBACK__(sdkClass);
                }
            };
        }
    }, {
        key: 'enableSentry',
        set: function set(value) {
            enableSentry = value;
        },
        get: function get() {
            return enableSentry;
        }
    }, {
        key: 'getUserForSentry',
        set: function set(value) {
            GetUserForSentry = value;
        },
        get: function get() {
            return GetUserForSentry;
        }
    }, {
        key: 'getTagsContextForSentry',
        set: function set(value) {
            getTagsContextForSentry = value;
        },
        get: function get() {
            return getTagsContextForSentry;
        }
    }]);

    return SDKBaseClass;
}(_eventedClass2.default);

exports.default = SDKBaseClass;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventedClass = function () {
    function EventedClass() {
        _classCallCheck(this, EventedClass);

        // super();
        this._eventMappings = {};
    }

    _createClass(EventedClass, [{
        key: "on",
        value: function on(eventName, eventSource, handler) {
            if (typeof eventName !== "string") {
                throw new Error("'eventName' must be string and cannot be null.");
            }
            if (handler == null && typeof eventSource === "function") {
                handler = eventSource;
                eventSource = null;
            }
            if (eventSource == null) {
                eventSource = "";
            }
            if (typeof eventSource !== "string") {
                throw new Error("'eventSource' must be string.");
            }
            if (typeof handler !== "function") {
                throw new Error("'handler' must be function.");
            }
            var eventNameResult = parseEventName(eventName);

            if (this._eventMappings[eventNameResult.eventName] == null) {
                this._eventMappings[eventNameResult.eventName] = {};
            }

            var eventNamespaces = this._eventMappings[eventNameResult.eventName];
            if (eventNamespaces[eventNameResult.namespace] == null) {
                eventNamespaces[eventNameResult.namespace] = {};
            }

            var eventSources = eventNamespaces[eventNameResult.namespace];
            if (eventSources[eventSource] == null) {
                eventSources[eventSource] = [];
            }

            var eventHandlers = eventSources[eventSource];
            eventHandlers.push(handler);
        }
    }, {
        key: "off",
        value: function off(eventName, eventSource, handler) {
            if (typeof eventName !== "string") {
                throw new Error("'eventName' must be string and cannot be null.");
            }
            if (handler == null && typeof eventSource === "function") {
                handler = eventSource;
                eventSource = null;
            }
            if (eventSource == null) {
                eventSource = "";
            }
            if (typeof eventSource !== "string") {
                throw new Error("'eventSource' must be string.");
            }
            if (handler != null && typeof handler !== "function") {
                throw new Error("'handler' must be function.");
            }

            var eventNameResult = parseEventName(eventName);
            if (this._eventMappings[eventNameResult.eventName]) {
                var namespaces = [];
                if (eventNameResult.namespace) {
                    namespaces.push(eventNameResult.namespace);
                } else {
                    namespaces = Object.keys(this._eventMappings[eventNameResult.eventName]);
                }

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = namespaces[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var namespace = _step.value;

                        var eventHandlers = this._eventMappings[eventNameResult.eventName][namespace][eventSource];
                        if (handler != null) {
                            var matchIndex = eventHandlers.indexOf(handler);
                            if (matchIndex !== -1) {
                                eventHandlers.splice(matchIndex, 1);
                            }
                        } else {
                            delete this._eventMappings[eventNameResult.eventName][namespace];
                            if (Object.keys(this._eventMappings[eventNameResult.eventName]).length === 0) {
                                delete this._eventMappings[eventNameResult.eventName];
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    }, {
        key: "trigger",
        value: function trigger(eventName, eventSource, args) {
            if (typeof eventName !== "string") {
                throw new Error("'eventName' must be string and cannot be null.");
            }
            if (args == null && Array.isArray(eventSource)) {
                args = eventSource;
                eventSource = null;
            }
            if (eventSource == null) {
                eventSource = "";
            }
            if (typeof eventSource !== "string") {
                throw new Error("'eventSource' must be string.");
            }

            if (args == null) {
                args = [];
            }
            if (!Array.isArray(args)) {
                //throw new Error(`'args' must be Array.`);
                args = [args];
            }

            var eventNameResult = parseEventName(eventName);
            if (this._eventMappings[eventNameResult.eventName]) {
                var namespaces = Object.keys(this._eventMappings[eventNameResult.eventName]);
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = namespaces[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var namespace = _step2.value;

                        var eventHandlers = [];
                        if (eventSource.length > 0) {
                            eventHandlers = this._eventMappings[eventNameResult.eventName][namespace][eventSource] || [];
                            eventHandlers = eventHandlers.concat(this._eventMappings[eventNameResult.eventName][namespace][""] || []);
                        } else {
                            var eventSources = this._eventMappings[eventNameResult.eventName][namespace];
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = Object.keys(eventSources)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var _eventHandlers;

                                    var key = _step3.value;

                                    (_eventHandlers = eventHandlers).push.apply(_eventHandlers, _toConsumableArray(eventSources[key]));
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }
                        }
                        var _iteratorNormalCompletion4 = true;
                        var _didIteratorError4 = false;
                        var _iteratorError4 = undefined;

                        try {
                            for (var _iterator4 = eventHandlers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                var handler = _step4.value;

                                handler.apply(null, args);
                            }
                        } catch (err) {
                            _didIteratorError4 = true;
                            _iteratorError4 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }
                            } finally {
                                if (_didIteratorError4) {
                                    throw _iteratorError4;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    }, {
        key: "getMergedPrototype",
        value: function getMergedPrototype() {
            var methodDescriptors = Object.getOwnPropertyDescriptors(this.constructor.prototype);
            Object.keys(methodDescriptors).forEach(function (key) {
                methodDescriptors[key].enumerable = true;
            });
            return Object.assign({}, this, Object.create({}, methodDescriptors));
        }
    }]);

    return EventedClass;
}();

exports.default = EventedClass;


function parseEventName(eventName) {
    var result = {
        eventName: eventName,
        namespace: ""
    };
    var namespaceIndex = eventName.indexOf(".");
    if (namespaceIndex !== -1) {
        result.eventName = eventName.substr(0, namespaceIndex);
        result.namespace = eventName.substr(namespaceIndex + 1);
    }
    return result;
}

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(182);

var _utils2 = _interopRequireDefault(_utils);

var _config = __webpack_require__(192);

var _config2 = _interopRequireDefault(_config);

var _enums = __webpack_require__(195);

var _enums2 = _interopRequireDefault(_enums);

var _logger = __webpack_require__(199);

var _logger2 = _interopRequireDefault(_logger);

var _data = __webpack_require__(196);

var _data2 = _interopRequireDefault(_data);

var _browser = __webpack_require__(200);

var _browser2 = _interopRequireDefault(_browser);

var _ajax = __webpack_require__(203);

var _ajax2 = _interopRequireDefault(_ajax);

var _ui = __webpack_require__(204);

var _ui2 = _interopRequireDefault(_ui);

var _app = __webpack_require__(207);

var _app2 = _interopRequireDefault(_app);

var _error = __webpack_require__(165);

var _error2 = _interopRequireDefault(_error);

var _vendor = __webpack_require__(215);

var _vendor2 = _interopRequireDefault(_vendor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var udesk = {
    init: init,
    utils: _utils2.default,
    config: _config2.default,
    enums: _enums2.default,
    logger: _logger2.default,
    data: _data2.default,
    ui: _ui2.default,
    browser: _browser2.default,
    ajax: _ajax2.default,
    app: _app2.default,
    error: _error2.default,
    vendor: _vendor2.default
};
// #if process.env.DEBUG === 'true'
// window.UdeskUdesk = udesk;
// #endif

function init() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$enableEnumNameCa = _ref.enableEnumNameCache,
        enableEnumNameCache = _ref$enableEnumNameCa === undefined ? true : _ref$enableEnumNameCa;

    udesk.enums._rebuild({ enableNameCache: enableEnumNameCache });
}

exports.default = udesk;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _string = __webpack_require__(183);

var _string2 = _interopRequireDefault(_string);

var _math = __webpack_require__(186);

var _math2 = _interopRequireDefault(_math);

var _object = __webpack_require__(187);

var _object2 = _interopRequireDefault(_object);

var _validators = __webpack_require__(188);

var _validators2 = _interopRequireDefault(_validators);

var _transformers = __webpack_require__(189);

var _transformers2 = _interopRequireDefault(_transformers);

var _web = __webpack_require__(190);

var _web2 = _interopRequireDefault(_web);

var _date = __webpack_require__(191);

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    string: _string2.default,
    math: _math2.default,
    object: _object2.default,
    validators: _validators2.default,
    transformers: _transformers2.default,
    web: _web2.default,
    date: _date2.default
};

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uuid = exports.random = exports.base64Decode = exports.base64Encode = exports.localeCompare = exports.capitalize = exports.transformers = exports.format = undefined;

var _refNpmModules = __webpack_require__(185);

var _stringFormat = __webpack_require__(184);

var _stringFormat2 = _interopRequireDefault(_stringFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var STRING_CAPITALIZE_REGEXP = /(^|\/)([a-z])/g;
var KEY_GENS = {
    UpperChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    LowerChars: "abcdefghijklmnopqrstuvwxyz",
    Numbers: "1234567890",
    DefaultSpecials: "~!@#$%^&*()-_+={}[]\\|<,>.?/\"';:`"
};
var KeygenStore = new Map();

exports.default = {
    format: _stringFormat2.default.format,
    transformers: _stringFormat2.default.transformers,
    capitalize: capitalize,
    localeCompare: localeCompare,
    base64Encode: base64Encode,
    base64Decode: base64Decode,
    random: random,
    uuid: uuid
};
var format = exports.format = _stringFormat2.default.format;
var transformers = exports.transformers = _stringFormat2.default.transformers;

exports.capitalize = capitalize;
exports.localeCompare = localeCompare;
exports.base64Encode = base64Encode;
exports.base64Decode = base64Decode;
exports.random = random;
exports.uuid = uuid;


function capitalize(str) {
    str = normalizeString(str);
    if (str == null) {
        return str;
    }
    // Stolen from ember.js.
    return str.replace(STRING_CAPITALIZE_REGEXP, function (match, separator, chr) {
        return match.toUpperCase();
    });
}

function normalizeString(str) {
    if (str == null) {
        return str;
    } else {
        if (typeof str !== "string") {
            str = str.toString();
        }
        return str;
    }
}

function localeCompare(a, b) {
    if (a != null && b == null) {
        return 1;
    } else if (a == null && b != null) {
        return -1;
    } else {
        if (typeof a !== "string") {
            a = a.toString();
        }
        if (typeof b !== "string") {
            b = b.toString();
        }
        return a.localeCompare(b);
    }
}

function base64Encode(s) {
    var rv;
    rv = encodeURIComponent(s);
    rv = unescape(rv);
    rv = window.btoa(rv);
    return rv;
}

function base64Decode(s) {
    var rv;
    rv = decodeURIComponent(s);
    rv = unescape(rv);
    rv = window.atob(rv);
    return rv;
}

function random() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        chars: true,
        lowerCase: true,
        numbers: true
    },
        _ref$chars = _ref.chars,
        chars = _ref$chars === undefined ? false : _ref$chars,
        _ref$upperCase = _ref.upperCase,
        upperCase = _ref$upperCase === undefined ? false : _ref$upperCase,
        _ref$lowerCase = _ref.lowerCase,
        lowerCase = _ref$lowerCase === undefined ? false : _ref$lowerCase,
        _ref$numbers = _ref.numbers,
        numbers = _ref$numbers === undefined ? false : _ref$numbers,
        _ref$specials = _ref.specials,
        specials = _ref$specials === undefined ? false : _ref$specials,
        _ref$excludeSpecials = _ref.excludeSpecials,
        excludeSpecials = _ref$excludeSpecials === undefined ? [] : _ref$excludeSpecials;

    var keys = [];
    var isDynamicSpecials = false;
    if (chars) {
        if (upperCase) {
            keys.push("UpperChars");
        }
        if (lowerCase || !upperCase && !lowerCase) {
            keys.push("LowerChars");
        }
    }
    if (numbers) {
        keys.push("Numbers");
    }
    if (specials) {
        if (specials === true) {
            keys.push("DefaultSpecials");
        } else if (specials === false || specials == null) {
            //nothing
        } else if (Array.isArray(specials)) {
            isDynamicSpecials = true;
        } else if (typeof specials === "string") {
            isDynamicSpecials = true;
            specials = specials.split("");
        } else if (Array.isArray(excludeSpecials) || typeof excludeSpecials === "string") {
            isDynamicSpecials = true;
            specials = KEY_GENS.DefaultSpecials.split("").filter(function (c) {
                return !excludeSpecials.includes(c);
            });
        }
    }

    var keyString = keys.join(",");
    var candidates = KeygenStore.get(keyString);
    if (candidates == null) {
        candidates = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _candidates;

                var key = _step.value;

                (_candidates = candidates).push.apply(_candidates, _toConsumableArray(KEY_GENS[key].split("")));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        KeygenStore.set(keyString, candidates);
    }

    if (isDynamicSpecials) {
        var _candidates2;

        (_candidates2 = candidates).push.apply(_candidates2, _toConsumableArray(specials));
    }

    if (candidates.length === 0 || typeof length !== "number" || length <= 0) {
        return "";
    }
    var results = [];
    for (var i = 0; i < length; i++) {
        var charIndex = Math.floor(Math.random() * (candidates.length + 1));
        results.push(candidates[charIndex]);
    }
    return results.join("");
}

function uuid() {
    // return uuid_v1();
    return (0, _refNpmModules.uuid_v4)();
}

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _refNpmModules = __webpack_require__(185);

var transformers = {
    escape: function escape(s) {
        return s.replace(/[&<>"'`]/g, function (c) {
            return '&#' + c.charCodeAt(0) + ';';
        });
    },
    upper: function upper(s) {
        return s.toUpperCase();
    },
    lower: function lower(s) {
        return s.toLowerCase();
    }
}; /* jshint unused:false */

/*DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (c) 2012..2015 David Chambers <dc@davidchambers.me>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.*/

exports.default = {
    format: _refNpmModules.format.create(transformers),
    transformers: transformers
};

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable */
/* jshint ignore:start */
(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(exports, /******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 245);
  /******/
}(
/************************************************************************/
/******/{

  /***/217:
  /***/function _(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    var isMergeableObject = function isMergeableObject(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };

    function isNonNullObject(value) {
      return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
    }

    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);

      return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
    }

    // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
    var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }

    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }

    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }

    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function (element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }

    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      Object.keys(source).forEach(function (key) {
        if (!options.isMergeableObject(source[key]) || !target[key]) {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        } else {
          destination[key] = deepmerge(target[key], source[key], options);
        }
      });
      return destination;
    }

    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;

      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }

    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
      }

      return array.reduce(function (prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };

    var deepmerge_1 = deepmerge;

    /* harmony default export */__webpack_exports__["default"] = deepmerge_1;

    /***/
  },

  /***/218:
  /***/function _(module, exports) {

    module.exports = function deepFreeze(o) {
      Object.freeze(o);

      Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop) && o[prop] !== null && (_typeof(o[prop]) === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
          deepFreeze(o[prop]);
        }
      });

      return o;
    };

    /***/
  },

  /***/219:
  /***/function _(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
      'use strict';

      /*istanbul ignore next:cant test*/

      if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
        module.exports = factory();
      } else {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      }
    })(this, function () {
      'use strict';

      var toStr = Object.prototype.toString;
      function hasOwnProperty(obj, prop) {
        if (obj == null) {
          return false;
        }
        //to handle objects with null prototypes (too edge case?)
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isEmpty(value) {
        if (!value) {
          return true;
        }
        if (isArray(value) && value.length === 0) {
          return true;
        } else if (typeof value !== 'string') {
          for (var i in value) {
            if (hasOwnProperty(value, i)) {
              return false;
            }
          }
          return true;
        }
        return false;
      }

      function toString(type) {
        return toStr.call(type);
      }

      function isObject(obj) {
        return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && toString(obj) === "[object Object]";
      }

      var isArray = Array.isArray || function (obj) {
        /*istanbul ignore next:cant test*/
        return toStr.call(obj) === '[object Array]';
      };

      function isBoolean(obj) {
        return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
      }

      function getKey(key) {
        var intKey = parseInt(key);
        if (intKey.toString() === key) {
          return intKey;
        }
        return key;
      }

      function factory(options) {
        options = options || {};

        var objectPath = function objectPath(obj) {
          return Object.keys(objectPath).reduce(function (proxy, prop) {
            if (prop === 'create') {
              return proxy;
            }

            /*istanbul ignore else*/
            if (typeof objectPath[prop] === 'function') {
              proxy[prop] = objectPath[prop].bind(objectPath, obj);
            }

            return proxy;
          }, {});
        };

        function hasShallowProperty(obj, prop) {
          return options.includeInheritedProps || typeof prop === 'number' && Array.isArray(obj) || hasOwnProperty(obj, prop);
        }

        function getShallowProperty(obj, prop) {
          if (hasShallowProperty(obj, prop)) {
            return obj[prop];
          }
        }

        function set(obj, path, value, doNotReplace) {
          if (typeof path === 'number') {
            path = [path];
          }
          if (!path || path.length === 0) {
            return obj;
          }
          if (typeof path === 'string') {
            return set(obj, path.split('.').map(getKey), value, doNotReplace);
          }
          var currentPath = path[0];
          var currentValue = getShallowProperty(obj, currentPath);
          if (path.length === 1) {
            if (currentValue === void 0 || !doNotReplace) {
              obj[currentPath] = value;
            }
            return currentValue;
          }

          if (currentValue === void 0) {
            //check if we assume an array
            if (typeof path[1] === 'number') {
              obj[currentPath] = [];
            } else {
              obj[currentPath] = {};
            }
          }

          return set(obj[currentPath], path.slice(1), value, doNotReplace);
        }

        objectPath.has = function (obj, path) {
          if (typeof path === 'number') {
            path = [path];
          } else if (typeof path === 'string') {
            path = path.split('.');
          }

          if (!path || path.length === 0) {
            return !!obj;
          }

          for (var i = 0; i < path.length; i++) {
            var j = getKey(path[i]);

            if (typeof j === 'number' && isArray(obj) && j < obj.length || (options.includeInheritedProps ? j in Object(obj) : hasOwnProperty(obj, j))) {
              obj = obj[j];
            } else {
              return false;
            }
          }

          return true;
        };

        objectPath.ensureExists = function (obj, path, value) {
          return set(obj, path, value, true);
        };

        objectPath.set = function (obj, path, value, doNotReplace) {
          return set(obj, path, value, doNotReplace);
        };

        objectPath.insert = function (obj, path, value, at) {
          var arr = objectPath.get(obj, path);
          at = ~~at;
          if (!isArray(arr)) {
            arr = [];
            objectPath.set(obj, path, arr);
          }
          arr.splice(at, 0, value);
        };

        objectPath.empty = function (obj, path) {
          if (isEmpty(path)) {
            return void 0;
          }
          if (obj == null) {
            return void 0;
          }

          var value, i;
          if (!(value = objectPath.get(obj, path))) {
            return void 0;
          }

          if (typeof value === 'string') {
            return objectPath.set(obj, path, '');
          } else if (isBoolean(value)) {
            return objectPath.set(obj, path, false);
          } else if (typeof value === 'number') {
            return objectPath.set(obj, path, 0);
          } else if (isArray(value)) {
            value.length = 0;
          } else if (isObject(value)) {
            for (i in value) {
              if (hasShallowProperty(value, i)) {
                delete value[i];
              }
            }
          } else {
            return objectPath.set(obj, path, null);
          }
        };

        objectPath.push = function (obj, path /*, values */) {
          var arr = objectPath.get(obj, path);
          if (!isArray(arr)) {
            arr = [];
            objectPath.set(obj, path, arr);
          }

          arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
        };

        objectPath.coalesce = function (obj, paths, defaultValue) {
          var value;

          for (var i = 0, len = paths.length; i < len; i++) {
            if ((value = objectPath.get(obj, paths[i])) !== void 0) {
              return value;
            }
          }

          return defaultValue;
        };

        objectPath.get = function (obj, path, defaultValue) {
          if (typeof path === 'number') {
            path = [path];
          }
          if (!path || path.length === 0) {
            return obj;
          }
          if (obj == null) {
            return defaultValue;
          }
          if (typeof path === 'string') {
            return objectPath.get(obj, path.split('.'), defaultValue);
          }

          var currentPath = getKey(path[0]);
          var nextObj = getShallowProperty(obj, currentPath);
          if (nextObj === void 0) {
            return defaultValue;
          }

          if (path.length === 1) {
            return nextObj;
          }

          return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
        };

        objectPath.del = function del(obj, path) {
          if (typeof path === 'number') {
            path = [path];
          }

          if (obj == null) {
            return obj;
          }

          if (isEmpty(path)) {
            return obj;
          }
          if (typeof path === 'string') {
            return objectPath.del(obj, path.split('.'));
          }

          var currentPath = getKey(path[0]);
          if (!hasShallowProperty(obj, currentPath)) {
            return obj;
          }

          if (path.length === 1) {
            if (isArray(obj)) {
              obj.splice(currentPath, 1);
            } else {
              delete obj[currentPath];
            }
          } else {
            return objectPath.del(obj[currentPath], path.slice(1));
          }

          return obj;
        };

        return objectPath;
      }

      var mod = factory();
      mod.create = factory;
      mod.withInheritedProps = factory({ includeInheritedProps: true });
      return mod;
    });

    /***/
  },

  /***/220:
  /***/function _(module, exports) {

    var clone = function () {
      'use strict';

      function _instanceof(obj, type) {
        return type != null && obj instanceof type;
      }

      var nativeMap;
      try {
        nativeMap = Map;
      } catch (_) {
        // maybe a reference error because no `Map`. Give it a dummy value that no
        // value will ever be an instanceof.
        nativeMap = function nativeMap() {};
      }

      var nativeSet;
      try {
        nativeSet = Set;
      } catch (_) {
        nativeSet = function nativeSet() {};
      }

      var nativePromise;
      try {
        nativePromise = Promise;
      } catch (_) {
        nativePromise = function nativePromise() {};
      }

      /**
       * Clones (copies) an Object using deep copying.
       *
       * This function supports circular references by default, but if you are certain
       * there are no circular references in your object, you can save some CPU time
       * by calling clone(obj, false).
       *
       * Caution: if `circular` is false and `parent` contains circular references,
       * your program may enter an infinite loop and crash.
       *
       * @param `parent` - the object to be cloned
       * @param `circular` - set to true if the object to be cloned may contain
       *    circular references. (optional - true by default)
       * @param `depth` - set to a number if the object is only to be cloned to
       *    a particular depth. (optional - defaults to Infinity)
       * @param `prototype` - sets the prototype to be used when cloning an object.
       *    (optional - defaults to parent prototype).
       * @param `includeNonEnumerable` - set to true if the non-enumerable properties
       *    should be cloned as well. Non-enumerable properties on the prototype
       *    chain will be ignored. (optional - false by default)
      */
      function clone(parent, circular, depth, prototype, includeNonEnumerable) {
        if ((typeof circular === 'undefined' ? 'undefined' : _typeof(circular)) === 'object') {
          depth = circular.depth;
          prototype = circular.prototype;
          includeNonEnumerable = circular.includeNonEnumerable;
          circular = circular.circular;
        }
        // maintain two arrays for circular references, where corresponding parents
        // and children have the same index
        var allParents = [];
        var allChildren = [];

        var useBuffer = typeof Buffer != 'undefined';

        if (typeof circular == 'undefined') circular = true;

        if (typeof depth == 'undefined') depth = Infinity;

        // recurse this function so we don't reset allParents and allChildren
        function _clone(parent, depth) {
          // cloning null always returns null
          if (parent === null) return null;

          if (depth === 0) return parent;

          var child;
          var proto;
          if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
            return parent;
          }

          if (_instanceof(parent, nativeMap)) {
            child = new nativeMap();
          } else if (_instanceof(parent, nativeSet)) {
            child = new nativeSet();
          } else if (_instanceof(parent, nativePromise)) {
            child = new nativePromise(function (resolve, reject) {
              parent.then(function (value) {
                resolve(_clone(value, depth - 1));
              }, function (err) {
                reject(_clone(err, depth - 1));
              });
            });
          } else if (clone.__isArray(parent)) {
            child = [];
          } else if (clone.__isRegExp(parent)) {
            child = new RegExp(parent.source, __getRegExpFlags(parent));
            if (parent.lastIndex) child.lastIndex = parent.lastIndex;
          } else if (clone.__isDate(parent)) {
            child = new Date(parent.getTime());
          } else if (useBuffer && Buffer.isBuffer(parent)) {
            child = new Buffer(parent.length);
            parent.copy(child);
            return child;
          } else if (_instanceof(parent, Error)) {
            child = Object.create(parent);
          } else {
            if (typeof prototype == 'undefined') {
              proto = Object.getPrototypeOf(parent);
              child = Object.create(proto);
            } else {
              child = Object.create(prototype);
              proto = prototype;
            }
          }

          if (circular) {
            var index = allParents.indexOf(parent);

            if (index != -1) {
              return allChildren[index];
            }
            allParents.push(parent);
            allChildren.push(child);
          }

          if (_instanceof(parent, nativeMap)) {
            parent.forEach(function (value, key) {
              var keyChild = _clone(key, depth - 1);
              var valueChild = _clone(value, depth - 1);
              child.set(keyChild, valueChild);
            });
          }
          if (_instanceof(parent, nativeSet)) {
            parent.forEach(function (value) {
              var entryChild = _clone(value, depth - 1);
              child.add(entryChild);
            });
          }

          for (var i in parent) {
            var attrs;
            if (proto) {
              attrs = Object.getOwnPropertyDescriptor(proto, i);
            }

            if (attrs && attrs.set == null) {
              continue;
            }
            child[i] = _clone(parent[i], depth - 1);
          }

          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(parent);
            for (var i = 0; i < symbols.length; i++) {
              // Don't need to worry about cloning a symbol because it is a primitive,
              // like a number or string.
              var symbol = symbols[i];
              var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
              if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
                continue;
              }
              child[symbol] = _clone(parent[symbol], depth - 1);
              if (!descriptor.enumerable) {
                Object.defineProperty(child, symbol, {
                  enumerable: false
                });
              }
            }
          }

          if (includeNonEnumerable) {
            var allPropertyNames = Object.getOwnPropertyNames(parent);
            for (var i = 0; i < allPropertyNames.length; i++) {
              var propertyName = allPropertyNames[i];
              var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
              if (descriptor && descriptor.enumerable) {
                continue;
              }
              child[propertyName] = _clone(parent[propertyName], depth - 1);
              Object.defineProperty(child, propertyName, {
                enumerable: false
              });
            }
          }

          return child;
        }

        return _clone(parent, depth);
      }

      /**
       * Simple flat clone using prototype, accepts only objects, usefull for property
       * override on FLAT configuration object (no nested props).
       *
       * USE WITH CAUTION! This may not behave as you wish if you do not know how this
       * works.
       */
      clone.clonePrototype = function clonePrototype(parent) {
        if (parent === null) return null;

        var c = function c() {};
        c.prototype = parent;
        return new c();
      };

      // private utility functions

      function __objToStr(o) {
        return Object.prototype.toString.call(o);
      }
      clone.__objToStr = __objToStr;

      function __isDate(o) {
        return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Date]';
      }
      clone.__isDate = __isDate;

      function __isArray(o) {
        return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Array]';
      }
      clone.__isArray = __isArray;

      function __isRegExp(o) {
        return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object RegExp]';
      }
      clone.__isRegExp = __isRegExp;

      function __getRegExpFlags(re) {
        var flags = '';
        if (re.global) flags += 'g';
        if (re.ignoreCase) flags += 'i';
        if (re.multiline) flags += 'm';
        return flags;
      }
      clone.__getRegExpFlags = __getRegExpFlags;

      return clone;
    }();

    if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
      module.exports = clone;
    }

    /***/
  },

  /***/225:
  /***/function _(module, exports) {

    !function (t, e) {
      "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? (module.exports = e(), module.exports.default = module.exports) : t.timeago = e();
    }("undefined" != typeof window ? window : this, function () {
      function t(t) {
        return t instanceof Date ? t : isNaN(t) ? /^\d+$/.test(t) ? new Date(e(t)) : (t = (t || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(t)) : new Date(e(t));
      }function e(t) {
        return parseInt(t);
      }function n(t, n, r) {
        n = l[n] ? n : l[r] ? r : "en";for (var o = 0, i = t < 0 ? 1 : 0, a = t = Math.abs(t); t >= p[o] && o < h; o++) {
          t /= p[o];
        }return t = e(t), o *= 2, t > (0 === o ? 9 : 1) && (o += 1), l[n](t, o, a)[i].replace("%s", t);
      }function r(e, n) {
        return ((n = n ? t(n) : new Date()) - t(e)) / 1e3;
      }function o(t) {
        for (var e = 1, n = 0, r = Math.abs(t); t >= p[n] && n < h; n++) {
          t /= p[n], e *= p[n];
        }return r %= e, r = r ? e - r : e, Math.ceil(r);
      }function i(t) {
        return a(t, "data-timeago") || a(t, "datetime");
      }function a(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t.attr ? t.attr(e) : void 0;
      }function u(t, e) {
        return t.setAttribute ? t.setAttribute(m, e) : t.attr ? t.attr(m, e) : void 0;
      }function c(t, e) {
        this.nowDate = t, this.defaultLocale = e || "en";
      }function d(t, e) {
        return new c(t, e);
      }var f = "second_minute_hour_day_week_month_year".split("_"),
          s = "秒_分钟_小时_天_周_月_年".split("_"),
          l = { en: function en(t, e) {
          if (0 === e) return ["just now", "right now"];var n = f[parseInt(e / 2)];return t > 1 && (n += "s"), [t + " " + n + " ago", "in " + t + " " + n];
        }, zh_CN: function zh_CN(t, e) {
          if (0 === e) return ["刚刚", "片刻后"];var n = s[parseInt(e / 2)];return [t + n + "前", t + n + "后"];
        } },
          p = [60, 60, 24, 7, 365 / 7 / 12, 12],
          h = 6,
          m = "data-tid",
          w = {};return c.prototype.doRender = function (t, e, i) {
        var a,
            c = r(e, this.nowDate),
            d = this;t.innerHTML = n(c, i, this.defaultLocale), w[a = setTimeout(function () {
          d.doRender(t, e, i), delete w[a];
        }, Math.min(1e3 * o(c), 2147483647))] = 0, u(t, a);
      }, c.prototype.format = function (t, e) {
        return n(r(t, this.nowDate), e, this.defaultLocale);
      }, c.prototype.render = function (t, e) {
        void 0 === t.length && (t = [t]);for (var n = 0, r = t.length; n < r; n++) {
          this.doRender(t[n], i(t[n]), e);
        }
      }, c.prototype.setLocale = function (t) {
        this.defaultLocale = t;
      }, d.register = function (t, e) {
        l[t] = e;
      }, d.cancel = function (t) {
        var e;if (t) (e = a(t, m)) && (clearTimeout(e), delete w[e]);else {
          for (e in w) {
            clearTimeout(e);
          }w = {};
        }
      }, d;
    });

    /***/
  },

  /***/226:
  /***/function _(module, exports) {

    module.exports = function (number, index) {
      return [['刚刚', '片刻后'], ['%s秒前', '%s秒后'], ['1分钟前', '1分钟后'], ['%s分钟前', '%s分钟后'], ['1小时前', '1小时后'], ['%s小时前', '%s小时后'], ['1天前', '1天后'], ['%s天前', '%s天后'], ['1周前', '1周后'], ['%s周前', '%s周后'], ['1月前', '1月后'], ['%s月前', '%s月后'], ['1年前', '1年后'], ['%s年前', '%s年后']][index];
    };

    /***/
  },

  /***/227:
  /***/function _(module, exports) {

    module.exports = function (number, index) {
      return [['剛剛', '片刻後'], ['%s秒前', '%s秒後'], ['1分鐘前', '1分鐘後'], ['%s分鐘前', '%s分鐘後'], ['1小時前', '1小時後'], ['%s小時前', '%s小時後'], ['1天前', '1天後'], ['%s天前', '%s天後'], ['1周前', '1周後'], ['%s周前', '%s周後'], ['1月前', '1月後'], ['%s月前', '%s月後'], ['1年前', '1年後'], ['%s年前', '%s年後']][index];
    };

    /***/
  },

  /***/228:
  /***/function _(module, exports) {

    module.exports = function (number, index) {
      return [['just now', 'right now'], ['%s seconds ago', 'in %s seconds'], ['1 minute ago', 'in 1 minute'], ['%s minutes ago', 'in %s minutes'], ['1 hour ago', 'in 1 hour'], ['%s hours ago', 'in %s hours'], ['1 day ago', 'in 1 day'], ['%s days ago', 'in %s days'], ['1 week ago', 'in 1 week'], ['%s weeks ago', 'in %s weeks'], ['1 month ago', 'in 1 month'], ['%s months ago', 'in %s months'], ['1 year ago', 'in 1 year'], ['%s years ago', 'in %s years']][index];
    };

    /***/
  },

  /***/229:
  /***/function _(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_RESULT__;(function (main) {
      'use strict';

      /**
       * Parse or format dates
       * @class fecha
       */

      var fecha = {};
      var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
      var twoDigits = /\d\d?/;
      var threeDigits = /\d{3}/;
      var fourDigits = /\d{4}/;
      var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
      var literal = /\[([^]*?)\]/gm;
      var noop = function noop() {};

      function shorten(arr, sLen) {
        var newArr = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          newArr.push(arr[i].substr(0, sLen));
        }
        return newArr;
      }

      function monthUpdate(arrName) {
        return function (d, v, i18n) {
          var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
          if (~index) {
            d.month = index;
          }
        };
      }

      function pad(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) {
          val = '0' + val;
        }
        return val;
      }

      var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var monthNamesShort = shorten(monthNames, 3);
      var dayNamesShort = shorten(dayNames, 3);
      fecha.i18n = {
        dayNamesShort: dayNamesShort,
        dayNames: dayNames,
        monthNamesShort: monthNamesShort,
        monthNames: monthNames,
        amPm: ['am', 'pm'],
        DoFn: function DoFn(D) {
          return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
        }
      };

      var formatFlags = {
        D: function D(dateObj) {
          return dateObj.getDate();
        },
        DD: function DD(dateObj) {
          return pad(dateObj.getDate());
        },
        Do: function Do(dateObj, i18n) {
          return i18n.DoFn(dateObj.getDate());
        },
        d: function d(dateObj) {
          return dateObj.getDay();
        },
        dd: function dd(dateObj) {
          return pad(dateObj.getDay());
        },
        ddd: function ddd(dateObj, i18n) {
          return i18n.dayNamesShort[dateObj.getDay()];
        },
        dddd: function dddd(dateObj, i18n) {
          return i18n.dayNames[dateObj.getDay()];
        },
        M: function M(dateObj) {
          return dateObj.getMonth() + 1;
        },
        MM: function MM(dateObj) {
          return pad(dateObj.getMonth() + 1);
        },
        MMM: function MMM(dateObj, i18n) {
          return i18n.monthNamesShort[dateObj.getMonth()];
        },
        MMMM: function MMMM(dateObj, i18n) {
          return i18n.monthNames[dateObj.getMonth()];
        },
        YY: function YY(dateObj) {
          return String(dateObj.getFullYear()).substr(2);
        },
        YYYY: function YYYY(dateObj) {
          return pad(dateObj.getFullYear(), 4);
        },
        h: function h(dateObj) {
          return dateObj.getHours() % 12 || 12;
        },
        hh: function hh(dateObj) {
          return pad(dateObj.getHours() % 12 || 12);
        },
        H: function H(dateObj) {
          return dateObj.getHours();
        },
        HH: function HH(dateObj) {
          return pad(dateObj.getHours());
        },
        m: function m(dateObj) {
          return dateObj.getMinutes();
        },
        mm: function mm(dateObj) {
          return pad(dateObj.getMinutes());
        },
        s: function s(dateObj) {
          return dateObj.getSeconds();
        },
        ss: function ss(dateObj) {
          return pad(dateObj.getSeconds());
        },
        S: function S(dateObj) {
          return Math.round(dateObj.getMilliseconds() / 100);
        },
        SS: function SS(dateObj) {
          return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
        },
        SSS: function SSS(dateObj) {
          return pad(dateObj.getMilliseconds(), 3);
        },
        a: function a(dateObj, i18n) {
          return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
        },
        A: function A(dateObj, i18n) {
          return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
        },
        ZZ: function ZZ(dateObj) {
          var o = dateObj.getTimezoneOffset();
          return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
        }
      };

      var parseFlags = {
        D: [twoDigits, function (d, v) {
          d.day = v;
        }],
        Do: [new RegExp(twoDigits.source + word.source), function (d, v) {
          d.day = parseInt(v, 10);
        }],
        M: [twoDigits, function (d, v) {
          d.month = v - 1;
        }],
        YY: [twoDigits, function (d, v) {
          var da = new Date(),
              cent = +('' + da.getFullYear()).substr(0, 2);
          d.year = '' + (v > 68 ? cent - 1 : cent) + v;
        }],
        h: [twoDigits, function (d, v) {
          d.hour = v;
        }],
        m: [twoDigits, function (d, v) {
          d.minute = v;
        }],
        s: [twoDigits, function (d, v) {
          d.second = v;
        }],
        YYYY: [fourDigits, function (d, v) {
          d.year = v;
        }],
        S: [/\d/, function (d, v) {
          d.millisecond = v * 100;
        }],
        SS: [/\d{2}/, function (d, v) {
          d.millisecond = v * 10;
        }],
        SSS: [threeDigits, function (d, v) {
          d.millisecond = v;
        }],
        d: [twoDigits, noop],
        ddd: [word, noop],
        MMM: [word, monthUpdate('monthNamesShort')],
        MMMM: [word, monthUpdate('monthNames')],
        a: [word, function (d, v, i18n) {
          var val = v.toLowerCase();
          if (val === i18n.amPm[0]) {
            d.isPm = false;
          } else if (val === i18n.amPm[1]) {
            d.isPm = true;
          }
        }],
        ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (d, v) {
          if (v === 'Z') v = '+00:00';
          var parts = (v + '').match(/([\+\-]|\d\d)/gi),
              minutes;

          if (parts) {
            minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
            d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
          }
        }]
      };
      parseFlags.dd = parseFlags.d;
      parseFlags.dddd = parseFlags.ddd;
      parseFlags.DD = parseFlags.D;
      parseFlags.mm = parseFlags.m;
      parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
      parseFlags.MM = parseFlags.M;
      parseFlags.ss = parseFlags.s;
      parseFlags.A = parseFlags.a;

      // Some common format strings
      fecha.masks = {
        default: 'ddd MMM DD YYYY HH:mm:ss',
        shortDate: 'M/D/YY',
        mediumDate: 'MMM D, YYYY',
        longDate: 'MMMM D, YYYY',
        fullDate: 'dddd, MMMM D, YYYY',
        shortTime: 'HH:mm',
        mediumTime: 'HH:mm:ss',
        longTime: 'HH:mm:ss.SSS'
      };

      /***
       * Format a date
       * @method format
       * @param {Date|number} dateObj
       * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
       */
      fecha.format = function (dateObj, mask, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n;

        if (typeof dateObj === 'number') {
          dateObj = new Date(dateObj);
        }

        if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
          throw new Error('Invalid Date in fecha.format');
        }

        mask = fecha.masks[mask] || mask || fecha.masks['default'];

        var literals = [];

        // Make literals inactive by replacing them with ??
        mask = mask.replace(literal, function ($0, $1) {
          literals.push($1);
          return '??';
        });
        // Apply formatting rules
        mask = mask.replace(token, function ($0) {
          return $0 in formatFlags ? formatFlags[$0](dateObj, i18n) : $0.slice(1, $0.length - 1);
        });
        // Inline literal values back into the formatted value
        return mask.replace(/\?\?/g, function () {
          return literals.shift();
        });
      };

      /**
       * Parse a date string into an object, changes - into /
       * @method parse
       * @param {string} dateStr Date string
       * @param {string} format Date parse format
       * @returns {Date|boolean}
       */
      fecha.parse = function (dateStr, format, i18nSettings) {
        var i18n = i18nSettings || fecha.i18n;

        if (typeof format !== 'string') {
          throw new Error('Invalid format in fecha.parse');
        }

        format = fecha.masks[format] || format;

        // Avoid regular expression denial of service, fail early for really long strings
        // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
        if (dateStr.length > 1000) {
          return false;
        }

        var isValid = true;
        var dateInfo = {};
        format.replace(token, function ($0) {
          if (parseFlags[$0]) {
            var info = parseFlags[$0];
            var index = dateStr.search(info[0]);
            if (!~index) {
              isValid = false;
            } else {
              dateStr.replace(info[0], function (result) {
                info[1](dateInfo, result, i18n);
                dateStr = dateStr.substr(index + result.length);
                return result;
              });
            }
          }

          return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
        });

        if (!isValid) {
          return false;
        }

        var today = new Date();
        if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
          dateInfo.hour = +dateInfo.hour + 12;
        } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
          dateInfo.hour = 0;
        }

        var date;
        if (dateInfo.timezoneOffset != null) {
          dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
          date = new Date(Date.UTC(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
        } else {
          date = new Date(dateInfo.year || today.getFullYear(), dateInfo.month || 0, dateInfo.day || 1, dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0);
        }
        return date;
      };

      /* istanbul ignore next */
      if (typeof module !== 'undefined' && module.exports) {
        module.exports = fecha;
      } else {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return fecha;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      }
    })(this);

    /***/
  },

  /***/235:
  /***/function _(module, exports) {

    // Unique ID creation requires a high quality random # generator.  In the
    // browser this is a little complicated due to unknown quality of Math.random()
    // and inconsistent support for the `crypto` API.  We do the best we can via
    // feature-detection

    // getRandomValues needs to be invoked in a context where "this" is a Crypto
    // implementation. Also, find the complete implementation of crypto on IE11.
    var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

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

    /***/
  },

  /***/236:
  /***/function _(module, exports) {

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
      // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
      return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
    }

    module.exports = bytesToUuid;

    /***/
  },

  /***/237:
  /***/function _(module, exports, __webpack_require__) {

    var rng = __webpack_require__(235);
    var bytesToUuid = __webpack_require__(236);

    function v4(options, buf, offset) {
      var i = buf && offset || 0;

      if (typeof options == 'string') {
        buf = options === 'binary' ? new Array(16) : null;
        options = null;
      }
      options = options || {};

      var rnds = options.random || (options.rng || rng)();

      // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
      rnds[6] = rnds[6] & 0x0f | 0x40;
      rnds[8] = rnds[8] & 0x3f | 0x80;

      // Copy bytes to buffer, if provided
      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }

      return buf || bytesToUuid(rnds);
    }

    module.exports = v4;

    /***/
  },

  /***/242:
  /***/function _(module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
                                                                                                     * isMobile.js v0.4.1
                                                                                                     *
                                                                                                     * A simple library to detect Apple phones and tablets,
                                                                                                     * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
                                                                                                     * and any kind of seven inch device, via user agent sniffing.
                                                                                                     *
                                                                                                     * @author: Kai Mallea (kmallea@gmail.com)
                                                                                                     *
                                                                                                     * @license: http://creativecommons.org/publicdomain/zero/1.0/
                                                                                                     */
    (function (global) {

      var apple_phone = /iPhone/i,
          apple_ipod = /iPod/i,
          apple_tablet = /iPad/i,
          android_phone = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
          // Match 'Android' AND 'Mobile'
      android_tablet = /Android/i,
          amazon_phone = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
          amazon_tablet = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
          windows_phone = /Windows Phone/i,
          windows_tablet = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
          // Match 'Windows' AND 'ARM'
      other_blackberry = /BlackBerry/i,
          other_blackberry_10 = /BB10/i,
          other_opera = /Opera Mini/i,
          other_chrome = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
          other_firefox = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
          // Match 'Firefox' AND 'Mobile'
      seven_inch = new RegExp('(?:' + // Non-capturing group

      'Nexus 7' + // Nexus 7

      '|' + // OR

      'BNTV250' + // B&N Nook Tablet 7 inch

      '|' + // OR

      'Kindle Fire' + // Kindle Fire

      '|' + // OR

      'Silk' + // Kindle Fire, Silk Accelerated

      '|' + // OR

      'GT-P1000' + // Galaxy Tab 7 inch

      ')', // End non-capturing group

      'i'); // Case-insensitive matching

      var match = function match(regex, userAgent) {
        return regex.test(userAgent);
      };

      var IsMobileClass = function IsMobileClass(userAgent) {
        var ua = userAgent || navigator.userAgent;

        // Facebook mobile app's integrated browser adds a bunch of strings that
        // match everything. Strip it out if it exists.
        var tmp = ua.split('[FBAN');
        if (typeof tmp[1] !== 'undefined') {
          ua = tmp[0];
        }

        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
        // iPhone" string. Same probable happens on other tablet platforms.
        // This will confuse detection so strip it out if it exists.
        tmp = ua.split('Twitter');
        if (typeof tmp[1] !== 'undefined') {
          ua = tmp[0];
        }

        this.apple = {
          phone: match(apple_phone, ua),
          ipod: match(apple_ipod, ua),
          tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
          device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
        };
        this.amazon = {
          phone: match(amazon_phone, ua),
          tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
          device: match(amazon_phone, ua) || match(amazon_tablet, ua)
        };
        this.android = {
          phone: match(amazon_phone, ua) || match(android_phone, ua),
          tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
          device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
        };
        this.windows = {
          phone: match(windows_phone, ua),
          tablet: match(windows_tablet, ua),
          device: match(windows_phone, ua) || match(windows_tablet, ua)
        };
        this.other = {
          blackberry: match(other_blackberry, ua),
          blackberry10: match(other_blackberry_10, ua),
          opera: match(other_opera, ua),
          firefox: match(other_firefox, ua),
          chrome: match(other_chrome, ua),
          device: match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
        };
        this.seven_inch = match(seven_inch, ua);
        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;

        // excludes 'other' devices and ipods, targeting touchscreen phones
        this.phone = this.apple.phone || this.android.phone || this.windows.phone;

        // excludes 7 inch devices, classifying as phone or tablet is left to the user
        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;

        if (typeof window === 'undefined') {
          return this;
        }
      };

      var instantiate = function instantiate() {
        var IM = new IsMobileClass();
        IM.Class = IsMobileClass;
        return IM;
      };

      if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
        //node
        module.exports = IsMobileClass;
      } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
        //browserify
        module.exports = instantiate();
      } else {
        //AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = global.isMobile = instantiate(), __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      }
    })(this);

    /***/
  },

  /***/245:
  /***/function _(module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _stringFormat = __webpack_require__(68);

    Object.defineProperty(exports, 'format', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_stringFormat).default;
      }
    });

    var _objectPath = __webpack_require__(219);

    Object.defineProperty(exports, 'objectPath', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_objectPath).default;
      }
    });

    var _deepmerge = __webpack_require__(217);

    Object.defineProperty(exports, 'deepMerge', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_deepmerge).default;
      }
    });

    var _clone = __webpack_require__(220);

    Object.defineProperty(exports, 'clone', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_clone).default;
      }
    });

    var _deepFreeze = __webpack_require__(218);

    Object.defineProperty(exports, 'deepFreeze', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_deepFreeze).default;
      }
    });

    var _timeago = __webpack_require__(225);

    Object.defineProperty(exports, 'timeago', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_timeago).default;
      }
    });

    var _zh_CN = __webpack_require__(226);

    Object.defineProperty(exports, 'timeagoLocale_ZH_CN', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_zh_CN).default;
      }
    });

    var _zh_TW = __webpack_require__(227);

    Object.defineProperty(exports, 'timeagoLocale_ZH_TW', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_zh_TW).default;
      }
    });

    var _en = __webpack_require__(228);

    Object.defineProperty(exports, 'timeagoLocale_EN', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_en).default;
      }
    });

    var _fecha = __webpack_require__(229);

    Object.defineProperty(exports, 'fecha', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_fecha).default;
      }
    });

    var _v = __webpack_require__(237);

    Object.defineProperty(exports, 'uuid_v4', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_v).default;
      }
    });

    var _ismobilejs = __webpack_require__(242);

    Object.defineProperty(exports, 'IsMobile', {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_ismobilejs).default;
      }
    });

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    /***/
  },

  /***/68:
  /***/function _(module, exports, __webpack_require__) {

    void function (global) {

      'use strict';

      //  ValueError :: String -> Error

      function ValueError(message) {
        var err = new Error(message);
        err.name = 'ValueError';
        return err;
      }

      //  defaultTo :: a,a? -> a
      function defaultTo(x, y) {
        return y == null ? x : y;
      }

      //  create :: Object -> String,*... -> String
      function create(transformers) {
        return function (template) {
          var args = Array.prototype.slice.call(arguments, 1);
          var idx = 0;
          var state = 'UNDEFINED';

          return template.replace(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g, function (match, literal, _key, xf) {
            if (literal != null) {
              return literal;
            }
            var key = _key;
            if (key.length > 0) {
              if (state === 'IMPLICIT') {
                throw ValueError('cannot switch from ' + 'implicit to explicit numbering');
              }
              state = 'EXPLICIT';
            } else {
              if (state === 'EXPLICIT') {
                throw ValueError('cannot switch from ' + 'explicit to implicit numbering');
              }
              state = 'IMPLICIT';
              key = String(idx);
              idx += 1;
            }
            var value = defaultTo('', lookup(args, key.split('.')));

            if (xf == null) {
              return value;
            } else if (Object.prototype.hasOwnProperty.call(transformers, xf)) {
              return transformers[xf](value);
            } else {
              throw ValueError('no transformer named "' + xf + '"');
            }
          });
        };
      }

      function lookup(_obj, _path) {
        var obj = _obj;
        var path = _path;
        if (!/^\d+$/.test(path[0])) {
          path = ['0'].concat(path);
        }
        for (var idx = 0; idx < path.length; idx += 1) {
          var key = path[idx];
          obj = typeof obj[key] === 'function' ? obj[key]() : obj[key];
        }
        return obj;
      }

      //  format :: String,*... -> String
      var format = create({});

      //  format.create :: Object -> String,*... -> String
      format.create = create;

      //  format.extend :: Object,Object -> ()
      format.extend = function (prototype, transformers) {
        var $format = create(transformers);
        prototype.format = function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(this);
          return $format.apply(global, args);
        };
      };

      /* istanbul ignore else */
      module.exports = format;
    }.call(this, this);

    /***/
  }

  /******/ }));
/* jshint ignore:end */

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    ceilTopMagnitude: ceilTopMagnitude
};


function ceilTopMagnitude(num) {
    //将数值取整处理，避免小数问题
    var number = Math.trunc(num);

    if (number == null || isNaN(number)) {
        return 0;
    }
    if (typeof number !== "number") {
        number = Number(number);
        if (isNaN(number)) {
            return 0;
        }
    }

    if (number === 0) {
        return 0;
    }

    var isNegative = number < 0;
    number = Math.abs(number);

    var newNumber = 0;
    if (number < 10) {
        newNumber = 10;
    } else {
        var tempNum = number;
        while (tempNum % 10 === 0) {
            tempNum = tempNum / 10;
        }
        if (tempNum > 10) {
            var numString = number.toString();
            newNumber = (parseInt(numString[0]) + 1) * Math.pow(10, numString.length - 1);
        } else {
            newNumber = number;
        }
    }

    if (isNegative) {
        newNumber = newNumber * -1;
    }
    return newNumber;
}

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deepFreeze = exports.clone = exports.deepCopy = exports.del = exports.empty = exports.set = exports.get = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _refNpmModules = __webpack_require__(185);

//Other useful libraries: node-deep-equal(npm: deep-diff), deep-object-diff, deep-equal, fast-deep-equal, fast-equals

exports.default = {
    get: get,
    set: set,
    empty: empty,
    del: del,
    deepCopy: deepCopy,
    clone: clone,
    deepFreeze: deepFreeze
};
exports.get = get;
exports.set = set;
exports.empty = empty;
exports.del = del;
exports.deepCopy = deepCopy;
exports.clone = clone;
exports.deepFreeze = deepFreeze;


function get(obj, fieldName) {
    return _refNpmModules.objectPath.get(obj, fieldName);
}

function set(obj, fieldName, value) {
    return _refNpmModules.objectPath.set(obj, fieldName, value);
}

function empty(obj, fieldName) {
    return _refNpmModules.objectPath.empty(obj, fieldName);
}

function del(obj, fieldName) {
    return _refNpmModules.objectPath.del(obj, fieldName);
}

/*
    Bug found!
    deepmerge.all([{ a: 1 }, { a: 2 }], { isMergeableObject: (val) => { return val !== 1; } });
    // expected: { a: 1 }
// actual: { a: {} }
*/
// Other options: merge-options, node-deep-extend, clone.
function deepCopy(obj1, obj2, options) {
    var objs = Array.from(arguments);
    var possibleOptions = arguments[arguments.length - 1];
    if ((typeof possibleOptions === "undefined" ? "undefined" : _typeof(possibleOptions)) === "object" && (possibleOptions.hasOwnProperty("arrayMerge") || possibleOptions.hasOwnProperty("isMergeableObject"))) {
        objs.pop();
    } else {
        possibleOptions = undefined;
    }
    objs = objs.filter(function (obj) {
        return obj != null;
    });
    return _refNpmModules.deepMerge.all(objs, possibleOptions);
}

function clone(obj, circular, depth, prototype, includeNonEnumerable) {
    return _refNpmModules.clone.apply(null, arguments);
}

function deepFreeze(obj) {
    return (0, _refNpmModules.deepFreeze)(obj);
}

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regex = __webpack_require__(177);

var _regex2 = _interopRequireDefault(_regex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    required: required,
    number: number,
    numberNullable: numberNullable,
    mobile: mobile,
    mobileNullable: mobileNullable,
    telephone: telephone,
    telephoneNullable: telephoneNullable,
    email: email,
    emailNullable: emailNullable,
    currency: currency,
    currencyNullable: currencyNullable
};


function required(str) {
    return _regex2.default.required.test(str);
}

function number(str) {
    return _regex2.default.number.test(str);
}

function numberNullable(str) {
    return _regex2.default.numberNullable.test(str);
}

function mobile(str) {
    return _regex2.default.mobile.test(str);
}

function mobileNullable(str) {
    return _regex2.default.mobileNullable.test(str);
}

function telephone(str) {
    return _regex2.default.telephone.test(str);
}

function telephoneNullable(str) {
    return _regex2.default.telephoneNullable.test(str);
}

function email(str) {
    return _regex2.default.email.test(str);
}

function emailNullable(str) {
    return _regex2.default.emailNullable.test(str);
}

function currency(str) {
    return _regex2.default.currency.test(str);
}

function currencyNullable(str) {
    return _regex2.default.currencyNullable.test(str);
}

/*function isBlank(obj) {
    return obj === null || obj === undefined || typeof obj === 'string' && obj.match(/\S/) === null;
}*/

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _string = __webpack_require__(183);

exports.default = {
    trim: trim,
    upper: upper,
    lower: lower,
    capitalize: capitalize
};


function trim(str) {
    str = normalize(str);
    if (str == null) {
        return str;
    }
    return str.trim();
}

function upper(str) {
    str = normalize(str);
    if (str == null) {
        return str;
    }
    return str.toUpperCase();
}

function lower(str) {
    str = normalize(str);
    if (str == null) {
        return str;
    }
    return str.toLowerCase();
}

function capitalize(str) {
    str = normalize(str);
    if (str == null) {
        return str;
    }
    return (0, _string.capitalize)(str);
}

function normalize(str) {
    if (str == null) {
        return str;
    } else {
        if (typeof str !== "string") {
            str = str.toString();
        }
        return str;
    }
}

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var IMAGE_FILE_EXTENSIONS = ["BMP", "JPG", "JPEG", "PNG", "GIF"];

exports.default = {
    isHtml: isHtml,
    // safeHtml,
    getCurrentUrl: getCurrentUrl,
    htmlEncode: htmlEncode,
    htmlDecode: htmlDecode,
    isImageFileType: isImageFileType,
    getFileExtension: getFileExtension,
    openWindow: openWindow
};


function isHtml(text) {
    return (/<[^>]+>/g.test(text)
    );
}

//Moved to a seperate plugin
// function safeHtml(text) {
//     var div = document.createElement('div');
//     div.innerHTML = text;
//     return (div.innerHTML || '').replace(/class\s*=\s*['"]([\w\s-])+['"]/ig, '');
// }

function getCurrentUrl() {
    var rootUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    var url = window.location.pathname + window.location.search + window.location.hash;
    if (rootUrl && url.startsWith(rootUrl)) {
        url = url.replace(rootUrl, "");
    }
    return url;
}

function htmlEncode(str) {
    var s = "";
    if (str.length === 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/'/g, "&#39;");
    s = s.replace(/"/g, "&quot;");
    return s;
}

function htmlDecode(str) {
    var s = "";
    if (str.length === 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "'");
    s = s.replace(/&quot;/g, "\"");
    return s;
}

function isImageFileType(fileName) {
    var extension = getFileExtension(fileName);
    var upperExtension = extension.toUpperCase();
    return IMAGE_FILE_EXTENSIONS.includes(upperExtension);
}

function getFileExtension(fileName) {
    if (fileName == null) {
        return false;
    }
    if (typeof fileName !== "string") {
        fileName = fileName.toString();
    }
    var extension = "";
    var lastDotPosition = fileName.lastIndexOf(".");
    if (lastDotPosition !== -1) {
        var questionPosition = fileName.indexOf("?");
        if (questionPosition !== -1) {
            fileName = fileName.substr(0, questionPosition);
        }
        lastDotPosition = fileName.lastIndexOf(".");
        if (lastDotPosition !== -1) {
            extension = fileName.substr(lastDotPosition + 1);
        } else {
            extension = "";
        }
    } else {
        extension = fileName;
    }
    return extension;
}

/*
*提供一个弹开新窗口的方法
*options { newWindow }
* newWindow: 适配在ajax内部调用时还是被拦截的问题，需要先在发送ajax之前window.open("about:blank")并把newWindow的值传给openWindow方法
*/

function openWindow(url, options) {
    if (url == null || url === "") {
        return;
    }
    if (options == null) {
        options = {};
    }
    var newWindow = options.newWindow != null ? options.newWindow : window.open("about:blank");
    newWindow.location.href = url;
}

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _refNpmModules = __webpack_require__(185);

var _locales = __webpack_require__(230);

var _locales2 = _interopRequireDefault(_locales);

var _config = __webpack_require__(192);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_refNpmModules.timeago.register("EN", _refNpmModules.timeagoLocale_EN);
_refNpmModules.timeago.register("EN-US", _refNpmModules.timeagoLocale_EN);
_refNpmModules.timeago.register("ZH", _refNpmModules.timeagoLocale_ZH_CN);
_refNpmModules.timeago.register("ZH-CN", _refNpmModules.timeagoLocale_ZH_CN);
_refNpmModules.timeago.register("ZH-TW", _refNpmModules.timeagoLocale_ZH_TW);
_refNpmModules.timeago.register("ZH-HK", _refNpmModules.timeagoLocale_ZH_TW);

exports.default = {
    format: format,
    parse: parse,
    formatDuration: formatDuration,
    timeago: timeago
};


function format(date, format) {
    if (format == null && typeof date === "string") {
        format = date;
        date = new Date();
    }
    return _refNpmModules.fecha.format(date, format);
}

function parse(dateString, format) {
    if (format == null) {
        format = _config2.default.date.momentDateFormat;
    }
    return _refNpmModules.fecha.parse(dateString, format);
}

function formatDuration(durationSeconds) {
    var hours = Math.floor(durationSeconds / (60 * 60));
    hours = hours.toString().padLeft(2, 0);
    var second = durationSeconds % (60 * 60);
    var minutes = Math.floor(second / 60);
    minutes = minutes.toString().padLeft(2, 0);
    second = second % 60;
    return hours + ':' + minutes + ':' + second;
}

function timeago(date) {
    var languageCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    if (!languageCode) {
        languageCode = _locales2.default.currentLanguage;
    }
    if (typeof languageCode !== "string") {
        languageCode = languageCode.toString();
    }
    languageCode = languageCode.toUpperCase();
    return (0, _refNpmModules.timeago)().format(date, languageCode);
}

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _date = __webpack_require__(193);

var _date2 = _interopRequireDefault(_date);

var _regex = __webpack_require__(177);

var _regex2 = _interopRequireDefault(_regex);

var _paging = __webpack_require__(194);

var _paging2 = _interopRequireDefault(_paging);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    date: _date2.default,
    regex: _regex2.default,
    paging: _paging2.default
};

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // dateFormat: "yyyy-mm-dd",
    momentDateFormat: "YYYY-MM-DD",
    momentDateSlashFormat: "YYYY/MM/DD",
    momentDateSlashHourMinuteTimeFormat: "YYYY/MM/DD HH:mm",

    datePickerFormat: "yyyy-mm-dd",
    // timeFormat: "hh:mm:ss",
    momentTimeFormat: "HH:mm:ss",
    momentTimeNoSecondFormat: "HH:mm",
    momentDateTimeFormat: "YYYY-MM-DD HH:mm:ss",
    momentDateTimeNoSecondFormat: "YYYY-MM-DD HH:mm",
    momentDateWeekDayFormat: "dddd"
};

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    defaultPageNumber: 1,
    defaultPageSize: 20
};

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PRIVATE_OPTIONS_SYMBOL = Symbol("_options");
var PRIVATE_NAME_SYMBOL = Symbol("_name");
var PRIVATE_RESET_SYMBOL = Symbol("_reset");
var PRIVATE_NAME_FUNC_SYMBOL = Symbol("_nameGetter");

var EnumItemClass = exports.EnumItemClass = function () {
    function EnumItemClass(originItem) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$enableNameCache = _ref.enableNameCache,
            enableNameCache = _ref$enableNameCache === undefined ? true : _ref$enableNameCache;

        _classCallCheck(this, EnumItemClass);

        this[PRIVATE_OPTIONS_SYMBOL] = arguments[1] || {
            enableNameCache: true
        };
        Object.assign(this, originItem);
        if (this.id == null && this.value != null) {
            this.id = this.value;
        }
        if (this.name == null && this.text != null) {
            this.name = this.text;
        }
        if (typeof this.name === "function") {
            this[PRIVATE_NAME_FUNC_SYMBOL] = this.name;
            var bakNameGetter = this.name;
            Object.defineProperty(this, "name", {
                get: function get() {
                    if (this[PRIVATE_OPTIONS_SYMBOL].enableNameCache) {
                        if (this[PRIVATE_NAME_SYMBOL] == null) {
                            this[PRIVATE_NAME_SYMBOL] = bakNameGetter();
                        }
                        return this[PRIVATE_NAME_SYMBOL] || "";
                    } else {
                        return bakNameGetter();
                    }
                },

                enumerable: true,
                configurable: false
            });
        }
    }

    _createClass(EnumItemClass, [{
        key: PRIVATE_RESET_SYMBOL,
        value: function value() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$enableNameCache = _ref2.enableNameCache,
                enableNameCache = _ref2$enableNameCache === undefined ? true : _ref2$enableNameCache;

            this[PRIVATE_OPTIONS_SYMBOL] = arguments[0] || {
                enableNameCache: true
            };
            delete this[PRIVATE_NAME_SYMBOL];
        }
    }, {
        key: "toString",
        value: function toString() {
            if (this.id != null) {
                return this.id.toString();
            } else {
                return this.id;
            }
        }
    }, {
        key: "valueOf",
        value: function valueOf() {
            return this.id;
        }
    }]);

    return EnumItemClass;
}();

var EnumClass = exports.EnumClass = function () {
    function EnumClass(itemsArray) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$enableNameCache = _ref3.enableNameCache,
            enableNameCache = _ref3$enableNameCache === undefined ? true : _ref3$enableNameCache;

        _classCallCheck(this, EnumClass);

        Object.setPrototypeOf(Object.getPrototypeOf(this), Object.getPrototypeOf([]));
        if (!(itemsArray instanceof Array) && (typeof itemsArray === "undefined" ? "undefined" : _typeof(itemsArray)) === "object") {
            var newArray = [];
            for (var key in itemsArray) {
                if (itemsArray.hasOwnProperty(key)) {
                    var clonedObj = Object.assign({}, itemsArray[key]);
                    clonedObj.key = key;
                    newArray.push(clonedObj);
                }
            }
            itemsArray = newArray;
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = itemsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var originItem = _step.value;

                var enumItem = new EnumItemClass(originItem, arguments[0]);
                this.push(enumItem);
                var _key = enumItem.key;
                if (typeof _key === "number") {
                    _key = "key_" + _key;
                }
                this[_key] = enumItem;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    _createClass(EnumClass, [{
        key: PRIVATE_RESET_SYMBOL,
        value: function value() {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref4$enableNameCache = _ref4.enableNameCache,
                enableNameCache = _ref4$enableNameCache === undefined ? true : _ref4$enableNameCache;

            if (this.length > 0) {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var enumItem = _step2.value;

                        if (enumItem instanceof EnumItemClass) {
                            enumItem[PRIVATE_RESET_SYMBOL](arguments[0]);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }
    }, {
        key: "get",
        value: function get(id) {
            // eslint-disable-next-line
            var enumItem = this.find(function (item) {
                return item.id == id;
            }); // jshint ignore:line
            if (enumItem == null) {
                // eslint-disable-next-line
                enumItem = this.find(function (item) {
                    return item.key == id;
                }); // jshint ignore:line
            }
            return enumItem;
        }
    }, {
        key: "getName",
        value: function getName(ids) {
            var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ", ";
            var idPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "id";

            if (ids === null || ids === undefined) {
                return "";
            }

            if (!(ids instanceof Array) && !Array.isArray(ids)) {
                ids = [ids];
            }
            var texts = [];
            for (var i = 0; i < ids.length; i++) {
                var id = ids[i];
                var matched = false;
                for (var k = 0; k < this.length; k++) {
                    var item = this[k];
                    /* jshint eqeqeq:false */
                    // eslint-disable-next-line
                    if (item.id == id) {
                        matched = true;
                        texts.push(item.name);
                    } else {
                        // eslint-disable-next-line
                        if (item.id == id[idPath]) {
                            matched = true;
                            texts.push(item.name);
                            // eslint-disable-next-line
                        } else if (item.id == id[idPath]) {
                            matched = true;
                            texts.push(item.name);
                        }
                    }
                }
                if (!matched) {
                    texts.push(id);
                }
            }

            return texts.join(separator);
        }
    }, {
        key: "getFirstId",
        value: function getFirstId() {
            if (this.length > 0) {
                return this[0].id;
            } else {
                return null;
            }
        }
    }]);

    return EnumClass;
}();

function rebuild() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$enableNameCache = _ref5.enableNameCache,
        enableNameCache = _ref5$enableNameCache === undefined ? true : _ref5$enableNameCache;

    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            var enumType = this[key];
            if (enumType instanceof EnumClass) {
                enumType[PRIVATE_RESET_SYMBOL](arguments[0]);
            } else if ((typeof enumType === "undefined" ? "undefined" : _typeof(enumType)) === "object" || Array.isArray(enumType)) {
                this[key] = new EnumClass(enumType, arguments[0]);
            }
        }
    }
}

var enums = Object.assign({
    _rebuild: rebuild,
    EnumClass: EnumClass,
    EnumItemClass: EnumItemClass
});

enums._rebuild();

exports.default = enums;
exports.rebuild = rebuild;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cache = __webpack_require__(197);

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    cache: _cache2.default
};

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(198);

var _config2 = _interopRequireDefault(_config);

var _logger = __webpack_require__(199);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    lazyLoad: lazyLoad
};


function lazyLoad(cacheKey, getPromise) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (cacheKey && getPromise) {
        options = Object.assign({}, _config2.default, options);
        createPromise(this, cacheKey, getPromise, options);
    }
}

function createPromise(owner, cacheKey, getPromise, options) {
    Object.defineProperty(owner, cacheKey, {
        get: function get() {
            var backingField = "__backingField_" + cacheKey;
            if (owner[backingField] === undefined) {
                //todo: 在Ember不使用专有的Promise是否会报错？
                var promise = new Promise(function (resolve, reject) {
                    getPromise().then(function (resp, textStatus, jqXHR) {
                        var expire = function expire() {
                            if (owner._timerToken) {
                                window.clearTimeout(owner._timerToken);
                                owner._timerToken = undefined;
                            }

                            // Clear the data by setting to another promise object.
                            createPromise(owner, cacheKey, getPromise, options);
                        };
                        var reload = function reload() {
                            this.expire();
                            // 触发一下getter
                            // eslint-disable-next-line
                            owner[cacheKey];
                        };

                        var parseData = options.parseData || defaultParseData;
                        var data = parseData(resp);
                        if (data != null) {
                            // Expose the `expire` method so we should manually expire it when the data was changed outside.
                            data.expire = expire;
                            data.reload = reload;
                        }

                        // Set the real cache data back permanently.
                        delete owner[backingField];
                        Object.defineProperty(owner, cacheKey, {
                            value: data,
                            enumerable: true,
                            configurable: true,
                            writable: false
                        });
                        if (typeof owner.notifyPropertyChange === "function") {
                            owner.notifyPropertyChange(cacheKey);
                        }
                        resolve(data);

                        // Schedule a timer to automatically clear the cache from memory.
                        if (options.timeout > 0) {
                            owner._timerToken = setTimeout(expire, options.timeout);
                        }
                    }, function (reason) {
                        delete owner[backingField];
                        _logger2.default.error(reason);
                        reject.apply(this, arguments);
                    });
                });

                // Create a dummy `expire` method in case someone calls this method before the data was loaded.
                promise.expire = function () {};
                promise.reload = function () {};
                owner[backingField] = promise;
            }
            return owner[backingField];
        },
        enumerable: true,
        configurable: true
    });
}

function defaultParseData(resp) {
    if (resp) {
        return resp.data;
    } else {
        return null;
    }
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var defaultConfig = {
    timeout: 1000 * 60 * 10 //10 min
};
exports.default = defaultConfig;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = {
    log: log,
    info: info,
    warn: warn,
    error: error
};


function log(message) {
    // eslint-disable-next-line
    console.log(message);
    callProviders(this, message, "log");
}

function info(message) {
    // eslint-disable-next-line
    console.info(message);
    callProviders(this, message, "info");
}

function warn(message) {
    // eslint-disable-next-line
    console.warn(message);
    callProviders(this, message, "warn");
}

function error(message) {
    // eslint-disable-next-line
    console.error(message);
    callProviders(this, message, "error");
}

function callProviders(owner, message, level) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.entries(owner.providers)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var logger = _ref2[1];

            if (typeof logger[level] === "function") {
                try {
                    logger[level](message);
                } catch (err) {
                    // 容错性处理，如果有的话，则执行，如果没有此方法，也不报错
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _notifications = __webpack_require__(201);

var _notifications2 = _interopRequireDefault(_notifications);

var _webStorage = __webpack_require__(202);

var _webStorage2 = _interopRequireDefault(_webStorage);

var _mobile = __webpack_require__(243);

var _mobile2 = _interopRequireDefault(_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    notifications: _notifications2.default,
    storage: _webStorage2.default,
    mobile: _mobile2.default,
    get isMobile() {
        return _mobile2.default.isMobile;
    }
};

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var notification = {
    init: init,
    send: send
};

Object.defineProperty(notification, "isGranted", {
    get: function get() {
        return window.Notification && Notification.permission === "granted";
    },
    enumerable: true,
    configurable: false
});

Object.defineProperty(notification, "isDefault", {
    get: function get() {
        return window.Notification && Notification.permission === "default";
    },
    enumerable: true,
    configurable: false
});

Object.defineProperty(notification, "isDenied", {
    get: function get() {
        return window.Notification && Notification.permission === "denied";
    },
    enumerable: true,
    configurable: false
});

exports.default = notification;


function init(onDenied, onGranted) {
    _checkNotificationPermission(function () {
        if (typeof onGranted === "function") {
            onGranted();
        }
    }, function () {
        if (typeof onDenied === "function") {
            onDenied();
        } else {
            //alert("");
        }
    });
}

function send(title, options) {
    return _checkNotificationPermission(function () {
        options = Object.assign({
            //通知的具体内容
            body: null,
            //显示的位置
            dir: "rtl",
            //语言
            lang: "en-ZH",
            //显示的icon
            //icon: null,
            //显示图片
            //image: null,
            //通知是否应该保持活跃，知道用户点击或者否否定它，而不是自动关闭
            requireInteraction: false,
            //新的通知是否取代旧的通知
            renotify: false,
            //指定时间创建适用的通知
            timestamp: null
        }, options);
        return new Notification(title, options);
    }, function () {
        return null;
    });
}

function _checkNotificationPermission(onGranted, onDenied) {
    if (!("Notification" in window)) {
        // eslint-disable-next-line
        console.info("This browser does not support desktop notification");
        return onDenied();
    } else if (notification.isGranted) {
        return onGranted();
    } else if (notification.isDenied || notification.isDefault) {
        var result = null;
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                result = onGranted();
            } else {
                result = onDenied();
            }
        });
        return result;
    } else {
        return onDenied();
    }
}

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INNER_STORAGE_KEY = Symbol('$private$_innerStorage');
var POSTFIX_REG_EXP = /^([^$]+?)\$(\d+?)\$(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(\.\d+?)?Z$/;
var DEFAULT_PRIORITY = 0;
var MAX_PRIORITY = 5;

var WebStorageClass = exports.WebStorageClass = function () {
    function WebStorageClass(storageName) {
        _classCallCheck(this, WebStorageClass);

        if (storageAvailable(storageName)) {
            this[INNER_STORAGE_KEY] = window[storageName];
        } else {
            this[INNER_STORAGE_KEY] = null;
        }
    }

    _createClass(WebStorageClass, [{
        key: "key",
        value: function key(index) {
            if (this[INNER_STORAGE_KEY]) {
                return this[INNER_STORAGE_KEY].key(index);
            } else {
                return null;
            }
        }
    }, {
        key: "getItem",
        value: function getItem(key) {
            if (this[INNER_STORAGE_KEY]) {
                var fullKey = findMatchedKey(this[INNER_STORAGE_KEY], key);
                if (fullKey) {
                    return this[INNER_STORAGE_KEY].getItem(fullKey.storageKey);
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    }, {
        key: "setItem",
        value: function setItem(key, value, priority) {
            if (this[INNER_STORAGE_KEY]) {
                try {
                    var fullKey = findMatchedKey(this[INNER_STORAGE_KEY], key);
                    var storageKey = null;
                    if (fullKey != null) {
                        storageKey = fullKey.storageKey;
                    } else {
                        storageKey = generateStorageKey(key, priority);
                    }
                    this[INNER_STORAGE_KEY].setItem(storageKey, value);
                    return true;
                } catch (err) {
                    if (isQuotaExceededError(err, this[INNER_STORAGE_KEY])) {
                        if (removeOldestItem(this[INNER_STORAGE_KEY])) {
                            return this.setItem(key, value, priority);
                        } else {
                            throw err;
                        }
                    } else {
                        throw err;
                    }
                }
            }
            return false;
        }
    }, {
        key: "removeItem",
        value: function removeItem(key) {
            if (this[INNER_STORAGE_KEY]) {
                var fullKey = findMatchedKey(this[INNER_STORAGE_KEY], key);
                if (fullKey) {
                    return this[INNER_STORAGE_KEY].removeItem(fullKey.storageKey);
                }
            }
        }
    }, {
        key: "clear",
        value: function clear() {
            if (this[INNER_STORAGE_KEY]) {
                this[INNER_STORAGE_KEY].clear();
            }
        }
    }, {
        key: "available",
        get: function get() {
            return this[INNER_STORAGE_KEY] != null;
        }
    }, {
        key: "length",
        get: function get() {
            if (this[INNER_STORAGE_KEY]) {
                return this[INNER_STORAGE_KEY].length;
            } else {
                return 0;
            }
        }
    }]);

    return WebStorageClass;
}();

exports.default = {
    localStorage: new WebStorageClass("localStorage"),
    sessionStorage: new WebStorageClass("sessionStorage")
};


function storageAvailable(storageName) {
    try {
        var storage = window[storageName];
        var testKey = '__storage_test__';
        storage.setItem(testKey, testKey);
        storage.removeItem(testKey);
        return true;
    } catch (err) {
        return isQuotaExceededError(err, window[storageName]);
    }
}

function isQuotaExceededError(error, webStorage) {
    return error instanceof DOMException && (
    // everything except Firefox
    error.code === 22 ||
    // Firefox
    error.code === 1014 ||
    // test name field too, because code might not be present
    // everything except Firefox
    error.name === 'QuotaExceededError' ||
    // Firefox
    error.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
    // acknowledge QuotaExceededError only if there's something already stored
    webStorage && webStorage.length > 0;
}

function findMatchedKey(webStorage, key) {
    if (webStorage.hasOwnProperty(key)) {
        return {
            key: key,
            storageKey: key,
            priority: null,
            timestamp: null,
            milliseconds: null
        };
    } else {
        for (var i = 0; i < webStorage.length; i++) {
            var storageKey = webStorage.key(i);
            if (storageKey.substr(0, key.length) === key) {
                var fullKey = parseFullKey(storageKey);
                if (fullKey) {
                    return fullKey;
                }
            }
        }
        return null;
    }
}

function parseFullKey(storageKey) {
    var postfixMatch = storageKey.match(POSTFIX_REG_EXP);
    if (postfixMatch != null) {
        var priority = Number.parseInt(postfixMatch[2]);
        var createTimeMilliseconds = Number.parseInt(postfixMatch[4]);
        return {
            key: postfixMatch[1],
            storageKey: storageKey,
            priority: Number.isNaN(priority) ? DEFAULT_PRIORITY : priority,
            timestamp: postfixMatch[3],
            milliseconds: Number.isNaN(createTimeMilliseconds) ? 0 : createTimeMilliseconds
        };
    }
    return null;
}

function generateStorageKey(key, priority) {
    priority = Number.parseInt(priority);
    if (Number.isNaN(priority) || priority < DEFAULT_PRIORITY) {
        priority = DEFAULT_PRIORITY;
    } else if (priority > MAX_PRIORITY) {
        priority = MAX_PRIORITY;
    }
    return key + "$" + priority + "$" + new Date().toISOString();
}

function removeOldestItem(webStorage) {
    var smallest = null;
    for (var i = 0; i < webStorage.length; i++) {
        var storageKey = webStorage.key(i);
        var fullKey = parseFullKey(storageKey);
        if (fullKey) {
            if (smallest != null) {
                if (fullKey.priority < smallest.priority || fullKey.timestamp < smallest.timestamp || fullKey.milliseconds < smallest.milliseconds) {
                    smallest = fullKey;
                    continue;
                }
            } else {
                smallest = fullKey;
            }
        }
    }

    if (smallest != null) {
        webStorage.removeItem(smallest.storageKey);
        return true;
    } else {
        var firstKey = webStorage.key(0);
        if (firstKey != null) {
            webStorage.removeItem(firstKey);
            return true;
        }
    }

    return false;
}

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Object.assign(ajax, {
    get: get,
    post: post,
    put: put,
    del: del,
    create: post,
    update: put
});


function ajax(url, data) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

    var supportCORSNatively = window.jQuery.support.cors || !window.jQuery.ajaxTransport || !window.XDomainRequest;
    if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
        options = url;
    } else {
        options = Object.assign({
            url: url,
            data: type.toUpperCase() === "GET" ? data : JSON.stringify(data),
            type: type,
            dataType: 'json',
            contentType: !supportCORSNatively && type.toUpperCase() === "POST" ? "text/plain" : 'application/json'
        }, options);
    }
    return window.jQuery.ajax(options);
}

function get(url, data, options) {
    return ajax(url, data, 'GET', options);
}

function post(url, data, options) {
    return ajax(url, data, 'POST', options);
}

function put(url, data, options) {
    return ajax(url, data, 'PUT', options);
}

function del(url, data, options) {
    return ajax(url, data, 'DELETE', options);
}

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _widgets = __webpack_require__(205);

var _widgets2 = _interopRequireDefault(_widgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    widgets: _widgets2.default
};

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _xss = __webpack_require__(206);

var _xss2 = _interopRequireDefault(_xss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    xss: _xss2.default
};

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
    The default configurations are applied in `xss` component.
*/

exports.default = {
    whiteLists: {
        getDefaultWhiteList: getDefaultWhiteList,
        default: getDefaultWhiteList(),
        email: getEmailWhiteList(),
        doc: getDocWhiteList(),
        udeskRobot: getUdeskRobotWhiteList()
    }
};
exports.getDefaultWhiteList = getDefaultWhiteList;


function getDefaultWhiteList() {
    // Added `class`. Should not consider `class` is unsafe any more, 
    // because the dangerous `express` css rule is deprecated and not supported
    // since IE8. And we don't need to support IEs lower than IE10, so we think
    // `class` is safe now. 
    return {
        a: ['target', 'href', 'title', 'style', 'class'],
        abbr: ['title', 'style', 'class'],
        address: ['style', 'class'],
        area: ['shape', 'coords', 'href', 'alt', 'style', 'class'],
        article: ['style', 'class'],
        aside: ['style', 'class'],
        audio: ['autoplay', 'controls', 'loop', 'preload', 'src', 'style', 'class'],
        b: ['style', 'class'],
        bdi: ['dir', 'style', 'class'],
        bdo: ['dir', 'style', 'class'],
        big: ['style', 'class'],
        blockquote: ['cite', 'style', 'class'],
        br: ['style', 'class'],
        caption: ['style', 'class'],
        center: ['style', 'class'],
        cite: ['style', 'class'],
        code: ['style', 'class'],
        col: ['align', 'valign', 'span', 'width', 'style', 'class'],
        colgroup: ['align', 'valign', 'span', 'width', 'style', 'class'],
        dd: ['style', 'class'],
        del: ['datetime', 'style', 'class'],
        details: ['open', 'style', 'class'],
        div: ['style', 'class'],
        dl: ['style', 'class'],
        dt: ['style', 'class'],
        em: ['style', 'class'],
        font: ['color', 'size', 'face', 'style', 'class'],
        footer: ['style', 'class'],
        h1: ['style', 'class'],
        h2: ['style', 'class'],
        h3: ['style', 'class'],
        h4: ['style', 'class'],
        h5: ['style', 'class'],
        h6: ['style', 'class'],
        header: ['style', 'class'],
        hr: ['style', 'class'],
        i: ['style', 'class'],
        img: ['src', 'alt', 'title', 'width', 'height', 'style', 'class'],
        ins: ['datetime', 'style', 'class'],
        li: ['style', 'class'],
        mark: ['style', 'class'],
        nav: ['style', 'class'],
        ol: ['style', 'class'],
        p: ['style', 'class'],
        pre: ['style', 'class'],
        s: ['style', 'class'],
        section: ['style', 'class'],
        small: ['style', 'class'],
        span: ['style', 'class'],
        sub: ['style', 'class'],
        sup: ['style', 'class'],
        strong: ['style', 'class'],
        table: ['width', 'border', 'align', 'valign', 'style', 'class'],
        tbody: ['align', 'valign', 'style', 'class'],
        td: ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class'],
        tfoot: ['align', 'valign', 'style', 'class'],
        th: ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class'],
        thead: ['align', 'valign', 'style', 'class'],
        tr: ['rowspan', 'align', 'valign', 'style', 'class'],
        tt: ['style', 'class'],
        u: ['style', 'class'],
        ul: ['style', 'class'],
        video: ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'style', 'class']
    };
}

function getEmailWhiteList() {
    var defaultWhiteList = getDefaultWhiteList();
    return Object.assign(defaultWhiteList, {
        html: [],
        head: [],
        body: ['style'],
        style: [],
        base: [],
        "o:p": [],
        meta: [],
        sign: [],
        includetail: []

    });
}

function getDocWhiteList() {
    var defaultWhiteList = getDefaultWhiteList();
    return Object.assign(defaultWhiteList, {
        "o:p": []
    });
}

function getUdeskRobotWhiteList() {
    var defaultWhiteList = getDefaultWhiteList();
    return Object.assign(defaultWhiteList, {
        b: ['class', 'style', 'data-type', 'data-id', 'data-robotid', 'data-udesk-go-chat'],
        span: ['class', 'style', 'data-type', 'data-id', 'data-robotid', 'data-udesk-go-chat'],
        strike: []
    });
}

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(208);

var _index2 = _interopRequireDefault(_index);

var _eventedClass = __webpack_require__(179);

var _eventedClass2 = _interopRequireDefault(_eventedClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    sdk: _index2.default,
    EventedClass: _eventedClass2.default
};

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DomSdkBaseClass = exports.SDKBaseClass = undefined;

var _sdkBaseClass = __webpack_require__(178);

var _sdkBaseClass2 = _interopRequireDefault(_sdkBaseClass);

var _domSdkBaseClass = __webpack_require__(214);

var _domSdkBaseClass2 = _interopRequireDefault(_domSdkBaseClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	SDKBaseClass: _sdkBaseClass2.default,
	DomSdkBaseClass: _domSdkBaseClass2.default
};
exports.SDKBaseClass = _sdkBaseClass2.default;
exports.DomSdkBaseClass = _domSdkBaseClass2.default;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _udeskError = __webpack_require__(166);

var _udeskError2 = _interopRequireDefault(_udeskError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotImplementedError = function (_UdeskError) {
    _inherits(NotImplementedError, _UdeskError);

    function NotImplementedError(methodName, options) {
        _classCallCheck(this, NotImplementedError);

        var _ref = options || {},
            message = _ref.message,
            fileName = _ref.fileName,
            lineNumber = _ref.lineNumber;

        var innerMessage = message;
        if (!innerMessage) {
            if (methodName) {
                innerMessage = "`" + methodName + "` is not implemented yet";
            } else {
                innerMessage = "The method is not implemented yet";
            }
        }
        return _possibleConstructorReturn(this, (NotImplementedError.__proto__ || Object.getPrototypeOf(NotImplementedError)).call(this, innerMessage, fileName, lineNumber));
    }

    return NotImplementedError;
}(_udeskError2.default);

exports.default = NotImplementedError;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _udeskError = __webpack_require__(166);

var _udeskError2 = _interopRequireDefault(_udeskError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArgumentNullError = function (_UdeskError) {
    _inherits(ArgumentNullError, _UdeskError);

    function ArgumentNullError(argName, options) {
        _classCallCheck(this, ArgumentNullError);

        var _ref = options || {},
            message = _ref.message,
            fileName = _ref.fileName,
            lineNumber = _ref.lineNumber;

        var innerMessage = message;
        if (!innerMessage) {
            if (argName) {
                innerMessage = "The argument `" + argName + "` can not be null";
            } else {
                innerMessage = "The argument can not be null";
            }
        }
        return _possibleConstructorReturn(this, (ArgumentNullError.__proto__ || Object.getPrototypeOf(ArgumentNullError)).call(this, innerMessage, fileName, lineNumber));
    }

    return ArgumentNullError;
}(_udeskError2.default);

exports.default = ArgumentNullError;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _udeskError = __webpack_require__(166);

var _udeskError2 = _interopRequireDefault(_udeskError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentError = function (_UdeskError) {
    _inherits(InvalidArgumentError, _UdeskError);

    function InvalidArgumentError(argName, options) {
        _classCallCheck(this, InvalidArgumentError);

        var _ref = options || {},
            message = _ref.message,
            fileName = _ref.fileName,
            lineNumber = _ref.lineNumber;

        var innerMessage = message;
        if (!innerMessage) {
            if (argName) {
                innerMessage = "The argument `" + argName + "` is not valid";
            } else {
                innerMessage = "The argument is not valid";
            }
        }
        return _possibleConstructorReturn(this, (InvalidArgumentError.__proto__ || Object.getPrototypeOf(InvalidArgumentError)).call(this, innerMessage, fileName, lineNumber));
    }

    return InvalidArgumentError;
}(_udeskError2.default);

exports.default = InvalidArgumentError;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _udeskError = __webpack_require__(166);

var _udeskError2 = _interopRequireDefault(_udeskError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrongTypeError = function (_UdeskError) {
    _inherits(WrongTypeError, _UdeskError);

    function WrongTypeError(argName, correctTypeName, options) {
        _classCallCheck(this, WrongTypeError);

        var _ref = options || {},
            message = _ref.message,
            fileName = _ref.fileName,
            lineNumber = _ref.lineNumber;

        var innerMessage = message;
        if (!innerMessage) {
            if (argName && correctTypeName) {
                innerMessage = "The argument `" + argName + "` must be an instance of `" + correctTypeName + "`";
            } else if (argName) {
                innerMessage = "The argument `" + argName + "` is wrong type";
            } else if (correctTypeName) {
                innerMessage = "The argument must be an instance of `" + correctTypeName + "`";
            } else {
                innerMessage = "The argument is wrong type";
            }
        }
        return _possibleConstructorReturn(this, (WrongTypeError.__proto__ || Object.getPrototypeOf(WrongTypeError)).call(this, innerMessage, fileName, lineNumber));
    }

    return WrongTypeError;
}(_udeskError2.default);

exports.default = WrongTypeError;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _error = __webpack_require__(165);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_VERSION_CHECK_INTERVAL_SECONDS = 60;

var LoadVersionIntervalClass = function () {
    function LoadVersionIntervalClass() {
        _classCallCheck(this, LoadVersionIntervalClass);

        this._pool = new Map();
    }

    _createClass(LoadVersionIntervalClass, [{
        key: "add",
        value: function add(_ref) {
            var versionPath = _ref.versionPath,
                callback = _ref.callback,
                versionCheckIntervalSeconds = _ref.versionCheckIntervalSeconds,
                instance = _ref.instance;

            if (versionPath == null || versionPath === "") {
                throw new _error.ArgumentNullError("versionPath");
            }
            if (typeof versionPath !== "string") {
                throw new _error.InvalidArgumentError("versionPath");
            }
            if (callback == null || callback === "") {
                throw new _error.ArgumentNullError("callback");
            }
            if (typeof callback !== "function") {
                throw new _error.InvalidArgumentError("callback");
            }

            if (instance == null || instance === "") {
                throw new _error.ArgumentNullError("instance");
            }
            if ((typeof instance === "undefined" ? "undefined" : _typeof(instance)) !== "object") {
                throw new _error.InvalidArgumentError("instance");
            }
            if (versionCheckIntervalSeconds != null && typeof versionCheckIntervalSeconds !== "number") {
                throw new _error.InvalidArgumentError("versionCheckIntervalSeconds");
            }

            if (this._pool.has(versionPath)) {
                var callbackPollInstance = {
                    versionCheckIntervalSeconds: versionCheckIntervalSeconds || DEFAULT_VERSION_CHECK_INTERVAL_SECONDS,
                    instance: instance,
                    callback: callback
                };
                var targetVersionInterval = this._pool.get(versionPath);
                targetVersionInterval.callbackPool.push(callbackPollInstance);
                if (versionCheckIntervalSeconds > targetVersionInterval.currentVersionCheckIntervalSeconds) {
                    targetVersionInterval.intervalId.clear();
                    targetVersionInterval.intervalId = getTimeoutInstance({
                        versionPath: versionPath,
                        getCallbackPool: function getCallbackPool() {
                            return targetVersionInterval.callbackPool;
                        },
                        versionCheckIntervalSeconds: versionCheckIntervalSeconds
                    });
                }
                this._pool.set(versionPath, targetVersionInterval);
            } else {
                this._pool.set(versionPath, buildNewVersionInterval.apply(undefined, arguments));
            }
        }
    }, {
        key: "remove",
        value: function remove(versionPath, instance) {
            if (versionPath == null || versionPath === "") {
                throw new _error.ArgumentNullError("versionPath");
            }
            if (typeof versionPath !== "string") {
                throw new _error.InvalidArgumentError("versionPath");
            }
            if (instance == null || instance === "") {
                throw new _error.ArgumentNullError("instance");
            }
            if ((typeof instance === "undefined" ? "undefined" : _typeof(instance)) !== "object") {
                throw new _error.InvalidArgumentError("instance");
            }
            if (this._pool.has(versionPath)) {
                var targetVersionInterval = this._pool.get(versionPath);
                targetVersionInterval.callbackPool = targetVersionInterval.callbackPool.filter(function (item) {
                    return item.instance !== instance;
                });
                if (targetVersionInterval.callbackPool.length === 0) {
                    targetVersionInterval.intervalId.clear();
                    this._pool.delete(versionPath);
                } else {
                    var minVersionCheckIntervalSeconds = null;
                    targetVersionInterval.callbackPool.forEach(function (item) {
                        if (minVersionCheckIntervalSeconds == null) {
                            minVersionCheckIntervalSeconds = item.versionCheckIntervalSeconds;
                        } else {
                            if (minVersionCheckIntervalSeconds > item.versionCheckIntervalSeconds) {
                                minVersionCheckIntervalSeconds = item.versionCheckIntervalSeconds;
                            }
                        }
                    });
                    if (minVersionCheckIntervalSeconds !== targetVersionInterval.currentVersionCheckIntervalSeconds) {
                        targetVersionInterval.currentVersionCheckIntervalSeconds = minVersionCheckIntervalSeconds;
                        targetVersionInterval.intervalId.clear();
                        targetVersionInterval.intervalId = getTimeoutInstance({
                            versionPath: versionPath,
                            getCallbackPool: function getCallbackPool() {
                                return targetVersionInterval.callbackPool;
                            },
                            versionCheckIntervalSeconds: minVersionCheckIntervalSeconds
                        });
                    }
                    this._pool.set(versionPath, targetVersionInterval);
                }
            }
        }
    }, {
        key: "clear",
        value: function clear() {
            this._pool.forEach(function (item) {
                clearTimeout(item.intervalId);
            });
            this._pool.clear();
        }
    }]);

    return LoadVersionIntervalClass;
}();

exports.default = LoadVersionIntervalClass;

var TimeoutInstanceClass = function () {
    function TimeoutInstanceClass() {
        _classCallCheck(this, TimeoutInstanceClass);

        this.timeoutInstance = null;
    }

    _createClass(TimeoutInstanceClass, [{
        key: "setInterval",
        value: function setInterval(callback, versionCheckIntervalSeconds) {
            if (typeof callback !== "function") {
                throw new _error.InvalidArgumentError("callback");
            }
            if (versionCheckIntervalSeconds == null || typeof versionCheckIntervalSeconds !== "number" || versionCheckIntervalSeconds <= 0) {
                throw new _error.InvalidArgumentError("versionCheckIntervalSeconds");
            }
            var context = this;
            this.timeoutInstance = setTimeout(function () {
                callback();
                context.setInterval(callback, versionCheckIntervalSeconds);
            }, versionCheckIntervalSeconds * 1000);
        }
    }, {
        key: "clear",
        value: function clear() {
            clearTimeout(this.timeoutInstance);
        }
    }]);

    return TimeoutInstanceClass;
}();

function buildNewVersionInterval(options) {
    if (options == null) {
        options = {};
    }
    var versionCheckIntervalSeconds = options.versionCheckIntervalSeconds || DEFAULT_VERSION_CHECK_INTERVAL_SECONDS;
    var newVersionInterval = {
        currentVersionCheckIntervalSeconds: versionCheckIntervalSeconds,
        callbackPool: [{
            versionCheckIntervalSeconds: versionCheckIntervalSeconds,
            instance: options.instance,
            callback: options.callback
        }]
    };
    newVersionInterval.intervalId = getTimeoutInstance({
        versionPath: options.versionPath,
        getCallbackPool: function getCallbackPool() {
            return newVersionInterval.callbackPool;
        },
        versionCheckIntervalSeconds: versionCheckIntervalSeconds
    });
    return newVersionInterval;
}

function getTimeoutInstance(_ref2) {
    var versionPath = _ref2.versionPath,
        getCallbackPool = _ref2.getCallbackPool,
        versionCheckIntervalSeconds = _ref2.versionCheckIntervalSeconds;

    var timeoutInstance = new TimeoutInstanceClass();
    timeoutInstance.setInterval(function () {
        window.$.get(versionPath + "?v=" + new Date().getTime()).then(function (resp) {
            var ver = typeof resp === "string" ? resp : null;
            if (!ver || ver.indexOf("<") > -1) {
                ver = new Date().getTime();
            }
            var callbackPool = getCallbackPool();
            for (var i = 0; i < callbackPool.length; i++) {
                callbackPool[i].callback(ver);
            }
        }, function (reason) {
            var callbackPool = getCallbackPool();
            for (var i = 0; i < callbackPool.length; i++) {
                callbackPool[i].callback(null);
            }
        });
    }, versionCheckIntervalSeconds);
    return timeoutInstance;
}

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdkBaseClass = __webpack_require__(178);

var _sdkBaseClass2 = _interopRequireDefault(_sdkBaseClass);

var _error = __webpack_require__(165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnableDomSdkGlobalInstances = false;

var DomSdkBaseClass = function (_SDKBaseClass) {
    _inherits(DomSdkBaseClass, _SDKBaseClass);

    function DomSdkBaseClass() {
        _classCallCheck(this, DomSdkBaseClass);

        return _possibleConstructorReturn(this, (DomSdkBaseClass.__proto__ || Object.getPrototypeOf(DomSdkBaseClass)).apply(this, arguments));
    }

    _createClass(DomSdkBaseClass, [{
        key: 'renderTo',
        value: function renderTo(containerDomElement) {
            throw new _error.NotImplementedError(this.constructor.name + '.renderTo');
        }
    }], [{
        key: 'enableGlobalInstances',
        get: function get() {
            return EnableDomSdkGlobalInstances;
        },
        set: function set(value) {
            EnableDomSdkGlobalInstances = !!value;
        }
    }]);

    return DomSdkBaseClass;
}(_sdkBaseClass2.default);

exports.default = DomSdkBaseClass;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _oss = __webpack_require__(216);

var _oss2 = _interopRequireDefault(_oss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    oss: _oss2.default
};

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    upload: upload
};

// {   
//     token 信息
//     ossHost: host,
//     ossDir: dir,
//     ossAccessId: accessId,
//     ossPolicy: policy,
//     ossSignature: signature,
//     
//     上传文件基本信息 {object}
//     file: attachments,
//     
//     设置上传文件路径  function|string 若为function则需要传入所需参数calculateObjectNameData  
//     calculateObjectNameData 为任意类型
//     calculateObjectName: fun,
//     calculateObjectNameData:;
//     
//     进度、成功、失败回调函数
//     progressCallback: progressCallback.bind(that),
//     successCallback: uploadFileSuccess.bind(that),
//     errorCallback: uploadFileError.bind(that),
// }

function upload(options) {

    var file = options.file;
    if (file == null) {
        return;
    }
    if (file instanceof Array) {
        file = file[0];
    }

    var formData = new FormData();
    var url = options.ossHost;

    var fileData = {};
    var fileName = file.name;
    var calculateObjectName = options.calculateObjectName;
    if (typeof calculateObjectName === "function") {
        fileName = calculateObjectName(options.calculateObjectNameData);
    } else {
        if (typeof calculateObjectName === "string") {
            fileName = calculateObjectName;
        } else {
            throw new Error("`uploadImage` method must return a function or string.");
        }
    }
    fileData.name = file.name;
    fileData.filename = fileName;
    fileData.size = file.size;
    var key = fileName;
    fileData.key = key;
    fileData.createTime = file.createTime;
    formData.append("key", key);
    formData.append("Filename", fileName);
    formData.append("policy", options.ossPolicy);
    formData.append("OSSAccessKeyId", options.ossAccessId);
    formData.append("success_action_status", "200");
    formData.append("signature", options.ossSignature);
    formData.append("file", file);
    var timeStamp = void 0;
    var lastTimeStamp = void 0;

    var xhr = window.jQuery.ajax({
        data: formData,
        type: "POST",
        url: url,
        cache: false,
        contentType: false,
        processData: false,
        xhr: xhrOnProgress(function (e) {
            var duration = void 0;
            if (!lastTimeStamp) {
                lastTimeStamp = e.timeStamp;
            }

            timeStamp = e.timeStamp;
            if (timeStamp) {
                duration = timeStamp - lastTimeStamp;
                var totalTime = duration / (e.loaded / e.total);
                fileData.remainingTime = totalTime - duration;
            }

            var percent = (e.loaded / e.total * 100).toFixed(2); //计算百分比

            fileData.percent = percent;
            fileData.loaded = e.loaded;
            var schedule = percent + "%";
            if (typeof options.progressCallback === "function") {
                options.progressCallback(file, schedule);
            }
        }),
        success: function success(resp) {
            if (typeof options.successCallback === "function") {
                options.successCallback(file, fileData);
            }
        },
        error: function error(reason) {
            if (typeof options.errorCallback === "function") {
                options.errorCallback(file, reason, fileData);
            }
        }
    });

    fileData.xhr = xhr;
    return {
        abort: function abort() {
            fileData.xhr.abort();
        }
    };
}

//监听
function xhrOnProgress(fun) {
    xhrOnProgress.onprogress = fun; //绑定监听
    //使用闭包实现监听绑
    return function () {
        //通过$.ajaxSettings.xhr();获得XMLHttpRequest对象
        var xhr = window.jQuery.ajaxSettings.xhr();
        //判断监听函数是否为函数
        if (typeof xhrOnProgress.onprogress !== 'function') {
            return xhr;
        }
        //如果有监听函数并且xhr对象支持绑定时就把监听函数绑定上去
        if (xhrOnProgress.onprogress && xhr.upload) {
            xhr.upload.onprogress = xhrOnProgress.onprogress;
        }
        return xhr;
    };
}

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _localesManager = __webpack_require__(231);

var _localesManager2 = _interopRequireDefault(_localesManager);

var _zhCn = __webpack_require__(232);

var _zhCn2 = _interopRequireDefault(_zhCn);

var _enUs = __webpack_require__(260);

var _enUs2 = _interopRequireDefault(_enUs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_LANGUAGE_CODE = "ZH-CN";
var localesStore = {
    "ZH-CN": _zhCn2.default,
    "EN-US": _enUs2.default
};

exports.default = new _localesManager2.default(localesStore, DEFAULT_LANGUAGE_CODE);

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(165);

var _object = __webpack_require__(187);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CURRENT_SYMBOL = Symbol("_current");
var CURRENT_LANGUAGE_SYMBOL = Symbol("_currentLanguage");
var LOCALES_MAP_SYMBOL = Symbol("_localesMap");

var LocalesManagerClass = function () {
    function LocalesManagerClass(localesMap, defaultLanguage) {
        _classCallCheck(this, LocalesManagerClass);

        //验证数据结构：参数是个对象，每一个value必须也是objecgt
        if (localesMap == null) {
            throw new _index.ArgumentNullError(this.constructor.name + '.localesMap');
        }
        if ((typeof localesMap === 'undefined' ? 'undefined' : _typeof(localesMap)) !== "object") {
            throw new _index.InvalidArgumentError(this.constructor.name + '.localesMap');
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.entries(localesMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref = _step.value;

                var _ref2 = _slicedToArray(_ref, 2);

                var localeName = _ref2[0];
                var locales = _ref2[1];

                if (locales == null) {
                    throw new _index.ArgumentNullError('UdeskLocales["' + localeName + '"]');
                }
                if ((typeof locales === 'undefined' ? 'undefined' : _typeof(locales)) !== "object") {
                    throw new _index.InvalidArgumentError('UdeskLocales["' + localeName + '"]');
                }
            }

            //验证每一个value，递归地把整个对象平铺展开为数组
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var localeKeysMap = {};
        for (var _localeName in localesMap) {
            if (localesMap.hasOwnProperty(_localeName)) {
                if (!localeKeysMap.hasOwnProperty(_localeName)) {
                    localeKeysMap[_localeName] = getKeysRecursively(localesMap[_localeName]);
                }
            }
        }

        // 验证所有语言的数组必须：长度相同; 对数组进行排序，排序后的所有数组每一个索引位置值均相同；
        var lastLocaleKeysLength = null;
        for (var _localeName2 in localeKeysMap) {
            if (localeKeysMap.hasOwnProperty(_localeName2)) {
                if (lastLocaleKeysLength == null) {
                    lastLocaleKeysLength = localeKeysMap[_localeName2].length;
                } else {
                    if (localeKeysMap[_localeName2].length !== lastLocaleKeysLength) {
                        throw new _index.InvalidArgumentError('UdeskLocales["' + _localeName2 + '"]', {
                            message: 'The length of locale keys in UdeskLocales["' + _localeName2 + '"] is different from others. Please check and make sure the keys of all languages are exactly the same.'
                        });
                    }
                }
                localeKeysMap[_localeName2] = localeKeysMap[_localeName2].sort();
            }
        }

        var localesRepeatMapKeys = Object.keys(localeKeysMap);
        var firstLocaleKeys = localeKeysMap[localesRepeatMapKeys[0]];
        for (var _localeName3 in localeKeysMap) {
            if (localeKeysMap.hasOwnProperty(_localeName3)) {
                if (_localeName3 !== localesRepeatMapKeys[0]) {
                    var localeKeys = localeKeysMap[_localeName3];
                    for (var index = 0; index < firstLocaleKeys.length; index++) {
                        if (firstLocaleKeys[index] !== localeKeys[index]) {
                            throw new Error('The locale key `' + localeKeys[index] + '` in UdeskLocales["' + _localeName3 + '"] doesn\'t match with UdeskLocales["' + localesRepeatMapKeys[0] + '"]. Please double checked if the locale key is wrong added (or misspelled) in ' + _localeName3 + ' or is missing in ' + localesRepeatMapKeys[0] + '.');
                        }
                    }
                }
            }
        }

        this[LOCALES_MAP_SYMBOL] = localesMap;
        this[CURRENT_LANGUAGE_SYMBOL] = defaultLanguage;
        if (defaultLanguage !== null) {
            if (localesMap.hasOwnProperty(defaultLanguage)) {
                this[CURRENT_SYMBOL] = localesMap[defaultLanguage];
            }
        }
    }

    _createClass(LocalesManagerClass, [{
        key: 'get',
        value: function get(key, languageCode) {
            if (key == null || key === "") {
                throw new _index.InvalidArgumentError('' + key);
            }
            var locales = this.getLocales(languageCode);
            if (locales) {
                return (0, _object.get)(locales, key) || "";
            }
            return "";
        }
    }, {
        key: 'getLocales',
        value: function getLocales(languageCode) {
            languageCode = normalizeLanguage(languageCode);
            if (this[LOCALES_MAP_SYMBOL].hasOwnProperty(languageCode)) {
                return this[LOCALES_MAP_SYMBOL][languageCode];
            } else {
                return null;
            }
        }
    }, {
        key: 'setLanguage',
        value: function setLanguage(languageCode) {
            languageCode = normalizeLanguage(languageCode);
            if (this[LOCALES_MAP_SYMBOL].hasOwnProperty(languageCode)) {
                this[CURRENT_SYMBOL] = this[LOCALES_MAP_SYMBOL][languageCode];
                this[CURRENT_LANGUAGE_SYMBOL] = languageCode;
            }
        }

        /**
         * Translate the content of all `key` fields and saved the translated text to `outputField`.
         * @author LiFengbao <shijistar@hotmail.com>
         * @example <caption>Here's an example of how to translate field of multiple objects.</caption>
         *   let sourceObjs = [{
         *     name: "userName",
         *   }, {
         *     name: "mobile",
         *   }];
         *   
         *   let dictionary = {
         *     userName: "姓名",
         *     mobile: "手机"
         *   };
         *   
         *   translate(sourceObjs, "name", "displayText", dictionary);
         *   
         *   // sourceObjs:
         *   // [{
         *   //    name: "userName",
         *   //    displayText: "姓名"
         *   //  }, {
         *   //    name: "mobile",
         *   //    displayText: "手机"
         *   // }]
         * @param  {Array|Object} sourceObj - The source array or object (all child fields as array items) to translate.
         * @param  {String} sourceField - The field name to read content of translation sources, for instance `name` in above example.
         * @param  {String} outputField - The field name to save translation result, for instance `displayText` in above example.
         * @param  {Object} langDictionary - The dictionary that used to look up translation entries.
         * @returns {Array|Object} Returns the exactly same object of `sourceObj`.
         */

    }, {
        key: 'translate',
        value: function translate(sourceObj, sourceField, outputField, langDictionary) {
            var objs = [];
            if (sourceObj instanceof Array) {
                objs = sourceObj;
            } else if ((typeof sourceObj === 'undefined' ? 'undefined' : _typeof(sourceObj)) === "object") {
                var isAllChildObjects = false;
                var childObjs = [];
                for (var key in sourceObj) {
                    if (sourceObj.hasOwnProperty(key)) {
                        var childObj = sourceObj[key];
                        if ((typeof childObj === 'undefined' ? 'undefined' : _typeof(childObj)) === "object") {
                            childObjs.push(childObj);
                        } else {
                            isAllChildObjects = false;
                            break;
                        }
                    }
                }
                if (isAllChildObjects) {
                    objs = childObjs;
                } else {
                    objs = [sourceObj];
                }
            } else {
                objs = [sourceObj];
            }
            for (var i = 0; i < objs.length; i++) {
                var obj = objs[i];
                translateSingle(obj, sourceField, outputField, langDictionary);
            }
            return sourceObj;
        }
    }, {
        key: 'current',
        get: function get() {
            return this[CURRENT_SYMBOL];
        }
    }, {
        key: 'currentLanguage',
        get: function get() {
            return this[CURRENT_LANGUAGE_SYMBOL];
        }
    }]);

    return LocalesManagerClass;
}();

exports.default = LocalesManagerClass;


function normalizeLanguage(language) {
    if (language == null) {
        return "";
    }
    if (typeof language !== "string") {
        language = language.toString();
    }
    return language.toUpperCase();
}

function getKeysRecursively(localObject) {
    var objectKeyArray = [];

    var _loop = function _loop(key) {
        if (localObject.hasOwnProperty(key)) {
            if (_typeof(localObject[key]) === "object") {
                var childObjectKeyArray = getKeysRecursively(localObject[key]);
                if (childObjectKeyArray.length > 0) {
                    childObjectKeyArray.forEach(function (childObjectKey) {
                        objectKeyArray.push(key + '.' + childObjectKey);
                    });
                }
            } else {
                objectKeyArray.push(key);
            }
        }
    };

    for (var key in localObject) {
        _loop(key);
    }
    return objectKeyArray;
}

function translateSingle(obj, sourceField, outputField, langDictionary) {
    var resourceKey = obj[sourceField];
    if (!obj[outputField]) {
        var translation = (0, _object.get)(langDictionary, resourceKey);
        if (translation) {
            obj[outputField] = translation;
        }
    }
}

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {};

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _callNativeApp = __webpack_require__(244);

var _callNativeApp2 = _interopRequireDefault(_callNativeApp);

var _refNpmModules = __webpack_require__(185);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_LAUNCH_APP_OPTIONS = {
    scheme: '', // 应该必填，考虑低版本IOS和安卓
    androidScheme: null, // 安卓用Scheme，以防万一安卓与IOS定义的不一致的时候可用，:D
    iosScheme: null, // IOS 用scheme
    timeout: 1600, // 超时时间
    success: function success() {},
    error: function error() {}
};

exports.default = {
    get isMobile() {
        return _refNpmModules.IsMobile.any || this.isIos || this.isAndroid || detectMobile();
    },
    get isIos() {
        return _refNpmModules.IsMobile.apple.device || /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(getUA());
    },
    get isAndroid() {
        return _refNpmModules.IsMobile.android.device || /\badr\b/i.test(getUA());
    },
    launchApp: launchApp
};


function getUA() {
    return window.navigator.userAgent || window.navigator.vendor || window.opera;
}

// 提供的正则表达式已经太过时了，不支持ipad等
function detectMobile() {
    // http://detectmobilebrowser.com/mobile
    var isMobile = false;
    (function (a, b) {
        // eslint-disable-next-line
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) isMobile = true;
    })(navigator.userAgent || navigator.vendor || window.opera, 'http://detectmobilebrowser.com/mobile');
    return isMobile;
}

// function detectIosBrowser() {
//     let isIos = false;
//     (function(a, b) {
//         a = a.toLowerCase();
//         // eslint-disable-next-line
//         if (!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
//             isIos = true;
//     })(navigator.userAgent || navigator.vendor);
//     return isIos;
// }

// function detectAndroidBrowser() {
//     let isAndroid = false;
//     (function(a, b) {
//         // eslint-disable-next-line
//         a = a.toLowerCase();
//         if (a.indexOf('android') > -1 || a.indexOf('adr') > -1)
//             isAndroid = true;
//     })(navigator.userAgent || navigator.vendor);
//     return isAndroid;
// }

function launchApp(options) {
    if (options == null || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== "object") {
        options = DEFAULT_LAUNCH_APP_OPTIONS;
    } else {
        options = Object.assign({}, DEFAULT_LAUNCH_APP_OPTIONS, options);
    }
    return new _callNativeApp2.default(Object.assign({}, options, {
        autoCall: true
    }));
}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * author: ztktct
 * github: https://github.com/ztktct/callApp
 * editor: udesk
 * editContent: some eslint error
 */

// 检测浏览器
var UA = navigator.userAgent;
var IOS_UA_ARR = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
var ANDROID_UA_ARR = navigator.userAgent.match(/Android (\d+)\.(\d+)?/i);
var browser = {
    isAndroid: !!UA.match(/android/ig),
    isAndroidGte6: ANDROID_UA_ARR && parseInt(ANDROID_UA_ARR[1], 10) > 5 ? true : false, // 安卓版本大于等于6
    isIos: !!UA.match(/iphone|ipod/ig),
    isIosGte9: IOS_UA_ARR && parseInt(IOS_UA_ARR[1], 10) > 8 ? true : false, // IOS版本是否大于等于9
    isWeixin: !!UA.match(/MicroMessenger/ig),
    isChrome: !!UA.match(/chrome\/(\d+\.\d+)/ig)
};

// 基础配置
var BASE_CONFIG = {
    scheme: '', // 应该必填，考虑低版本IOS和安卓
    androidScheme: null, // 安卓用Scheme，以防万一安卓与IOS定义的不一致的时候可用，:D
    iosScheme: null, // IOS 用scheme
    params: null, // 参数，url里的查询字符串
    applink: null, //安卓
    universalLink: null, // IOS
    // androidIntent: null, // Android Intent 方式唤起，尽量不用，该方式能用，scheme方式都能用
    timeout: 1600, // 超时时间
    autoCall: false, // 是否自动唤起
    success: function success() {},
    error: function error() {}
};

var CallApp = function () {
    function CallApp() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, CallApp);

        // 考虑改用深拷贝？
        this._config = Object.assign(BASE_CONFIG, config);

        // scheme
        // let scheme = '';
        if (typeof config === 'string') {
            this._url = config;
        } else if (config.androidScheme && browser.isAndroid) {
            this._url = config.androidScheme;
        } else if (config.iosScheme && browser.isIos) {
            this._url = config.iosScheme;
        } else {
            this._url = config.scheme;
        }

        // 如果采用deep link
        // 安卓针对6.0+
        // IOS针对9.0+
        if (browser.isAndroid && browser.isAndroidGte6 && this._config.applink) {
            this._url = this._config.applink;
        } else if (browser.isIos && browser.isIosGte9 && this._config.universalLink) {
            this._url = this._config.universalLink;
        }
        // 如果有查询参数
        if (this._config.params) {
            this._url += '?' + this._buildQueryString(this._config.params);
        }

        // 如果需要自动唤起
        if (this._config.autoCall) {
            this.call();
        }
    }

    /**检测是否唤起成功
     * 基于时间差来判断是否唤起成功，不太准确
     * 假定超时时间设为1600ms，判断基准为800ms
     * 如果没有唤起成功，停留在当前页，则当计数完毕后，时间差应该不会超过太多
     * 相反，如果唤起成功，则浏览器进入后台工作，setInterval会被延迟执行，时间差会被拉大,
     * 一些国产浏览器或者safari会在唤起的时候弹窗，导致此方法无效，考虑以下解决方案：
     * 1、对于Android国产浏览器，如果因为弹窗超时，则判定为失败，自动跳转下载页，但是由于弹窗还存在，如果用户点击唤起，依然可以唤起APP
     * 2、对于IOS,IOS7、8依旧采用scheme,IOS9+可以考虑使用universalLink！！
     */


    _createClass(CallApp, [{
        key: '_checkApp',
        value: function _checkApp(cb) {
            var timeout = this._config.timeout;
            var totalCount = Math.ceil(timeout / 20);
            var acceptTime = timeout + 800;

            var _callTime = +new Date(); // 开始调用时间
            var _count = 0,
                // 计数，20ms记一次
            timer = null; //定时器
            timer = setInterval(function () {
                _count++;
                var elsTime = +new Date() - _callTime;
                if (_count >= totalCount || elsTime > acceptTime) {
                    clearInterval(timer);
                    if (elsTime > acceptTime || document.hidden || document.webkitHidden) {
                        cb && cb(true);
                    } else {
                        cb && cb(false);
                    }
                }
            }, 20);
        }

        // 唤起app

    }, {
        key: 'call',
        value: function call(cb) {
            var successfn = this._config.success;
            var errorfn = this._config.error;
            // 检测唤起状态
            this._checkApp(function (flag) {
                cb && cb(flag);
                if (flag) {
                    successfn && successfn();
                } else {
                    errorfn && errorfn();
                }
            });

            // 根据不同的浏览器来使用不同的唤起方式
            if (browser.isAndroid) {
                if (browser.isChrome) {
                    this._callAlink();
                    return;
                }
                this._callIframe();
                return;
            } else if (browser.isIos) {
                this._callAlink();
            }
        }

        // a.href方式

    }, {
        key: '_callAlink',
        value: function _callAlink() {
            var alink = document.createElement('a');
            alink.href = this._url;
            alink.click();
        }

        // iframe.src 方式

    }, {
        key: '_callIframe',
        value: function _callIframe() {
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = this._url;
            document.body.appendChild(iframe);
        }

        // location 方式

    }, {
        key: '_callLocation',
        value: function _callLocation() {
            window.location.href = this._url;
        }

        // Android intent方式，仅限Android，暂时未启用
        // 一般可以用Android intent 方式唤起的都可以用scheme方式唤起

    }, {
        key: '_callIntent',
        value: function _callIntent() {
            var androidIndent = this._config.androidIntent;
            var indentURL = 'intent://\n        ' + androidIndent.host + '\n        ' + androidIndent.path + '\n        #Intent;\n            scheme=' + androidIndent.scheme + ';\n            package=' + androidIndent.package + ';\n            ' + (androidIndent.action && 'action=' + androidIndent.action + ';') + '\n            ' + (androidIndent.category && 'category=' + androidIndent.category + ';') + '\n            ' + (androidIndent.component && 'component=' + androidIndent.component + ';') + '\n            ' + (androidIndent.browser_fallback_url && 'S.browser_fallback_url=' + androidIndent.browser_fallback_url + ';') + '\n        end';
            window.location.href = indentURL;
        }

        // 构建查询字符串

    }, {
        key: '_buildQueryString',
        value: function _buildQueryString() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var keys = Object.keys(obj);
            var queryArr = keys.map(function (k) {
                var v = obj[k];
                if (!Array.isArray(v) && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object') {
                    v = JSON.stringify(v);
                }
                return k + '=' + v;
            });
            return queryArr.join('&');
        }
    }]);

    return CallApp;
}();

exports.default = CallApp;

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(181);


/***/ })

/******/ });
});
//# sourceMappingURL=udesk.js.map