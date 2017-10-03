// { "framework": "Vue" }

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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = fetchBundleUrl;
/* unused harmony export openUrl */
/* harmony export (immutable) */ __webpack_exports__["f"] = request;
/* unused harmony export fetchCorpId */
/* harmony export (immutable) */ __webpack_exports__["g"] = authCode;
/* harmony export (immutable) */ __webpack_exports__["c"] = setRight;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeRightEvent;
/* harmony export (immutable) */ __webpack_exports__["b"] = setLeft;
/* unused harmony export removeLeftEvent */
/* harmony export (immutable) */ __webpack_exports__["a"] = toast;
/* harmony export (immutable) */ __webpack_exports__["h"] = confirm;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_dingtalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_weex_dingtalk_journey__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_weex_dingtalk_journey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_weex_dingtalk_journey__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var requireModule = __WEBPACK_IMPORTED_MODULE_1_weex_dingtalk_journey___default.a.requireModule,
    querystring = __WEBPACK_IMPORTED_MODULE_1_weex_dingtalk_journey___default.a.querystring,
    url = __WEBPACK_IMPORTED_MODULE_1_weex_dingtalk_journey___default.a.url,
    env = __WEBPACK_IMPORTED_MODULE_1_weex_dingtalk_journey___default.a.env;

var modal = requireModule('modal');
var stream = requireModule('stream');

function fetchBundleUrl() {
  return env.bundleUrl;
}

function openUrl(url) {
  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis.biz.util.openLink({
      url: url
    });
  });
}

function request(config, cb, progressCb) {
  var method = config.method,
      uri = config.uri,
      body = config.body,
      type = config.type,
      headers = config.headers;

  if (!uri || typeof uri !== 'string') {
    return;
  }
  var requestConf = {
    method: method,
    type: type || 'json',
    headers: headers
  };
  if (method === 'GET') {
    var cur = false;
    var len = uri.length - 1;
    var middle = uri.lastIndexOf('?');
    if (middle > -1 && middle === len) {
      uri = uri.substring(0, middle);
    }
    if (middle === -1) {
      uri = uri + '?';
    }
    if ((typeof body === 'undefined' ? 'undefined' : _typeof(body)) === 'object' && body !== null) {
      uri = uri + querystring.stringify(body);
    }
    if (typeof body === 'string') {
      uri = uri + body;
    }
    requestConf.url = uri;
  } else {
    requestConf.url = uri;
    requestConf.body = body;
  }
  stream.fetch(requestConf, function (res) {
    var u = false;
    var data = {};
    if (res.ok) {
      u = true;
    }
    if (typeof cb === 'function') {
      cb(u ? null : {}, res);
    }
  }, progressCb);
}

function fetchCorpId() {
  var originalUrl = env.originalUrl;

  return url.parse(originalUrl, 'corpId');
}

function authCode() {
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
      __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis.runtime.permission.requestAuthCode({
        corpId: fetchCorpId(),
        onSuccess: function onSuccess(result) {
          resolve(result);
        },
        onFail: function onFail(err) {
          reject(err);
        }
      });
    });
  });
}

function setRight(config, cb) {
  var control = config.control;

  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis.biz.navigation.setRight(config);
    if (control) {
      __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.on('navRightButton', cb);
    }
  });
}

function removeRightEvent(cb) {
  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.off('navRightButton', cb);
  });
}

function setLeft(config, cb) {
  var control = config.control;

  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis.biz.navigation.setLeft(config);
    if (control) {
      __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.on('backbutton', cb);
    }
  });
}

function removeLeftEvent(cb) {
  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.off('backbutton', cb);
  });
}

function toast(msg) {
  modal.toast({
    message: msg,
    duration: 2
  });
}

function confirm(msg, cb) {
  modal.confirm({
    message: msg
  }, function (result) {
    if (typeof cb === 'function') {
      cb(result);
    }
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {function initEnv(){var e={};return"undefined"!=typeof weex?(e.platform=weex.config.env.platform,"Web"!==e.platform&&(e.appName=weex.config.env.appName)):"function"==typeof callNative?(e.platform=navigator.platform,e.appName=navigator.appName):e.platform="Web","Web"===e.platform?e.isDingtalk=/DingTalk/.test(navigator.userAgent):e.isDingtalk="DingTalk"===e.appName,e}function initRequireModule(){var e=function(e){var n="@weex-module/"+e;return __weex_require__(n)};return"undefined"!=typeof weex&&(e=weex.requireModule),e}function polyfills(){return{env:initEnv(),requireModule:initRequireModule()}}function android_exec(e,n){var i=n.body,t=n.onSuccess,r=n.onFail,o=n.context;e&&"function"==typeof e?e(i,function(e){if(void 0!==e&&e.__status__){var n=e.__status__,i=e.__message__;"1"===n?t&&t.call(o,i):"2"===n&&r&&r.call(o,i)}else r&&r.call("-1","")}):r&&r.call("-1","")}function ios_exec(e,n){var i=n.body,t=n.onSuccess,r=n.onFail,o=n.context;e&&"function"==typeof e?e(i,function(e){void 0!==e?"0"===e.errorCode?t&&t.call(o,e.result):r&&r.call(o,e.result):r&&r.call("-1","")}):r&&r.call("-1","")}function ios_exec$1(e){var n=window._WebViewJavascriptBridge;if(!n)throw"runtime and bridge are not ready";var i=e.body,t=e.onSuccess,r=e.onFail,o=e.context;n.callHandler("exec",i,function(e){void 0!==e&&("0"===e.errorCode?"function"==typeof t&&t.call(o,e.result):"function"==typeof r&&r.call(o,e.result)),"function"==typeof r&&r.call("-1","")})}function android_exec$1(e){var n=e.body,i=e.onSuccess,t=e.onFail,r=e.context,o=n.plugin,a=n.action,u=n.args;(0,window.WebViewJavascriptBridgeAndroid)(o,a,u,i,t,r)}function runAndroid(){window.WebViewJavascriptBridgeAndroid=window.nuva.require()}function web_exec(e){if(isIOS)window._WebViewJavascriptBridge?ios_exec$1(e):document.addEventListener("_WebViewJavascriptBridgeReady",function(){ios_exec$1(e)},!1);else if(isAndroid){var n=window;n.nuva&&(void 0===n.nuva.isReady||n.nuva.isReady)?(bridgeReady||runAndroid(),android_exec$1(e)):document.addEventListener("runtimeready",function(){bridgeReady||runAndroid(),android_exec$1(e)},!1)}}function exec(e){var n=nativeExec||function(){};"iOS"===platform$2?ios_exec(n,e):"android"===platform$2?android_exec(n,e):web_exec(e)}function build(e){var n=e.factory;return e.__ship_exports__={},delete e.factory,n(__ship_require__,e.__ship_exports__,e),e.__ship_exports__}function __ship_require__(e){if(!__ship_modules__[e])throw"__ship_module__ "+e+" not found";if(e in inProgressModules){throw"Cycle in require graph: "+(requireStack.slice(inProgressModules[e]).join("->")+"->"+e)}if(__ship_modules__[e].factory)try{return inProgressModules[e]=requireStack.length,requireStack.push(e),build(__ship_modules__[e])}finally{delete inProgressModules[e],requireStack.pop()}return __ship_modules__[e].__ship_exports__}function __ship_define__(e,n){if(__ship_modules__[e])throw"module "+e+" already defined";__ship_modules__[e]={id:e,factory:n}}function toArray(e,n){for(var i=n||0,t=e.length-i,r=new Array(t);t--;)r[t]=e[t+i];return r}function parseModules(e){for(var n in e){var i=e[n];!function(e,n){__ship_define__(e,function(i,t,r){var o={};o._name=e;for(var a in n){var u=n[a];o[u]=function(n){return function(i){i||(i={});var t=i.onSuccess,r=i.onFail;return delete i.onSuccess,delete i.onFail,delete i.onCancel,exec({body:{plugin:e,action:n,args:i},onSuccess:t,onFail:r})}}(u)}r.__ship_exports__=o})}(n,i)}}function rtFunc(e){return function(n){exec({body:{plugin:"runtime",action:e,args:{}},onSuccess:function(e){"function"==typeof n&&n(e)},onFail:function(){},context:null})}}function initDingtalkRequire(e){rtFunc("getModules")(e)}function checkConfigVars(e){var n=Object.keys(e);checks.map(function(e){0===n.filter(function(n){return e===n}).length&&logger.warn("configure : "+e+"is empty")})}function parseJsApis(e){var n={};for(var i in e)for(var t=i.split("."),r=null,o=0,a=t.length;;)if(r){if(a-1===o){r[t[o]]=ship.require(i);break}r[t[o]]?o++:(r[t[o]]={},r=r[t[o]],o++)}else{if(1===a){var u=!1,s=n[t[o]],l=ship.require(i);for(var c in s)if(s.hasOwnProperty(c)){u=!0;break}if(u)for(var f in l)l.hasOwnProperty(f)&&(s[f]=l[f]);else n[t[o]]=ship.require(i);break}if(n[t[o]]){r=n[t[o]],o++;continue}n[t[o]]={},r=n[t[o]],o++}return n}function permissionJsApis(e,n,i){if(!n)return void ship.ready(function(){e(null)});ship.ready(function(){var t=ship.require(runtimePermission),r=n||{},o=i||null;r.onSuccess=function(n){e(null,n)},r.onFail=function(n){"function"==typeof o?o(n):e(n,null)},t.requestJsApis(r)})}function performQueue(){dingtalkQueue&&dingtalkQueue.length>0&&(dingtalkQueue.forEach(function(e){e()}),dingtalkQueue.length=0)}function initDingtalkSDK(){var e={isSync:!1,apis:{},config:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(function(e){if(!e)return void logger.warn("config is undefined,you must configure Dingtalk parameters");"production"!==process.env.NODE_ENV&&checkConfigVars(e),dingtalkJsApisConfig=e}),init:function(){dingtalkQueue=[],ship.init(),ship.ready(function(){e.isSync=!0,e.apis=parseJsApis(ship.getModules?ship.getModules:{}),performQueue()})},ready:function(n){if(!n||"function"!=typeof n)return void logger.warn("callback is undefined");if(e.isSync)permissionJsApis(n,dingtalkJsApisConfig,dingtalkErrorCb);else{dingtalkQueue&&dingtalkQueue.push(function(e){return function(){permissionJsApis(e,dingtalkJsApisConfig,dingtalkErrorCb)}}(n))}},error:function(e){"function"==typeof e&&(dingtalkErrorCb=e)}};return e}function installNativeEvent(e){e.on=function(e,n,i){document.addEventListener(e,n,i)},e.off=function(e,n,i){document.removeEventListener(e,n,i)}}function initWebDingtalkSDK(){var e=initDingtalkSDK();return installNativeEvent(e),e}function installNativeEvent$2(e){e.on=ship.on,e.off=ship.off}function initWeexDingtalkSDK(){var e=initDingtalkSDK();return installNativeEvent$2(e),e}var weexInstanceVar=void 0;weexInstanceVar||(weexInstanceVar=polyfills());var weexInstanceVar$1=weexInstanceVar,platform$3=weexInstanceVar$1.env.platform,isAndroid=null,isIOS=null,bridgeReady=!1;if("Web"===platform$3){var UA=window.navigator.userAgent.toLowerCase();isAndroid=UA&&UA.indexOf("android")>-1,isIOS=UA&&/iphone|ipad|ipod|ios/.test(UA)}var platform$2=weexInstanceVar$1.env.platform,nativeExec=null;"Web"!==platform$2&&(nativeExec=weexInstanceVar$1.requireModule("nuvajs-exec").exec);var __ship_modules__={},requireStack=[],inProgressModules={},cat={},EventEmitter={on:function(e,n){var i=cat[e];i?i.push(n):cat[e]=[],i||cat[e].push(n)},off:function(e,n){var i=cat[e];if(!i)return!1;if(!e&&!n)return cat={},!0;if(e&&!n)return cat[e]=null,!0;for(var t=void 0,r=i.length;r--;)if((t=i[r])===n||t.fun===n){i.splice(r,1);break}return!0},once:function(e,n){function i(){EventEmitter.off(e,i),n.apply(this,arguments)}i.fun=n,EventEmitter.on(e,i)},emit:function(e){if("string"==typeof e){var n=cat[e],i=toArray(arguments,1);if(n)for(var t=0,r=n.length;t<r;t++){var o=n[t];o.apply(this,i)}}}},platform$1=weexInstanceVar$1.env.platform,globalEvent={};"Web"!==platform$1&&(globalEvent=weexInstanceVar$1.requireModule("globalEvent"));var ship={getModules:null,isReady:!1,define:__ship_define__,require:function(e){return e?__ship_require__(e):exec},runtime:{info:rtFunc("info"),_interceptBackButton:rtFunc("interceptBackButton"),_interceptNavTitle:rtFunc("interceptNavTitle"),_recoverNavTitle:rtFunc("recoverNavTitle"),_getModules:rtFunc("getModules")},init:function(){initDingtalkRequire(function(e){e&&(parseModules(e),ship.isReady=!0,ship.getModules=e,EventEmitter.emit("__ship_ready__"))})},ready:function(e){ship.isReady?"function"==typeof e&&e():"function"==typeof e&&EventEmitter.once("__ship_ready__",function(){e()})},on:function(e,n){globalEvent.addEventListener(e,function(e){var i={preventDefault:function(){console.warn("当前环境不支持 preventDefault")},detail:e};n.call(this,i)})},off:globalEvent.removeEventListener,EventEmitter:EventEmitter},logger={warn:function(e,n){if(console.warn("[DINGTALK JS SDK Warning]:",e),n)throw n;var i=new Error("WARNING STACK TRACE");console.warn(i.stack)},info:function(e){console.info("[DINGTALK JS SDK INFO]:",e)},error:function(e){console.error("[DINGTALK JS SDK ERROR]:",e)}},checks=["agentId","corpId","timeStamp","nonceStr","signature","jsApiList"],runtimePermission="runtime.permission",dingtalkJsApisConfig=null,dingtalkQueue=null,dingtalkErrorCb=null,dingtalkInit=!0,platform=weexInstanceVar$1.env.platform,isDingtalk=weexInstanceVar$1.env.isDingtalk,dingtalkSDK={};if(isDingtalk||logger.warn("can only open the page be Dingtalk Container"),dingtalkInit){switch(dingtalkInit=!1,platform){case"Web":dingtalkSDK=initWebDingtalkSDK();break;default:dingtalkSDK=initWeexDingtalkSDK()}dingtalkSDK.init()}var dingtalkSDK$1=dingtalkSDK;module.exports=dingtalkSDK$1;
//# sourceMappingURL=weex-dingtalk-min.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Router;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_weex_dingtalk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_weex_dingtalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_weex_dingtalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_weex_dingtalk_journey__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_weex_dingtalk_journey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_weex_dingtalk_journey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_request_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_home_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_index_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__pages_list_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_index_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__pages_add_index_vue__);









var routes = [{
  path: '/',
  name: 'home',
  component: __WEBPACK_IMPORTED_MODULE_5__pages_home_index_vue___default.a
}, {
  path: '/list',
  name: 'list',
  component: __WEBPACK_IMPORTED_MODULE_6__pages_list_index_vue___default.a
}, {
  path: '/add',
  name: 'add',
  component: __WEBPACK_IMPORTED_MODULE_7__pages_add_index_vue___default.a
}];

__WEBPACK_IMPORTED_MODULE_1_weex_dingtalk___default.a.error(function (err) {
  console.log(JSON.stringify(err));
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_util_js__["a" /* toast */])('Error : ' + JSON.stringify(err));
});

var env = __WEBPACK_IMPORTED_MODULE_2_weex_dingtalk_journey___default.a.env;


function Router(Vue) {
  Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]);
  var router = new __WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]({
    routes: routes
  });
  var left = {
    show: true,
    control: true,
    text: '返回'
  };
  var backHandler = function backHandler(e) {
    if (env.isWeb) {
      e.preventDefault();
    }

    router.go(-1);
  };
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_util_js__["b" /* setLeft */])(left, backHandler);
  // jsApiOAuth().then(function(){
  //   console.log('签名完成');
  // }).catch(function(err){
  //   console.log(JSON.stringify(err))
  // });
  return {
    router: router
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(23)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(29)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xiangwenwen/github_opensource/weex-dingtalk-todo/todo-client/src/container/App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-67a7a785"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPHOST; });
var APPHOST = 'http://30.27.108.21:3000';

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export jsApiOAuth */
/* harmony export (immutable) */ __webpack_exports__["a"] = getUserId;
/* harmony export (immutable) */ __webpack_exports__["b"] = getUserInfo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_dingtalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env_js__ = __webpack_require__(5);




function jsApiOAuth() {
  var Config = {
    method: 'GET',
    uri: __WEBPACK_IMPORTED_MODULE_2__env_js__["a" /* APPHOST */] + '/api/jsapi-oauth',
    body: {
      href: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_js__["e" /* fetchBundleUrl */])()
    }
  };
  var jsApiList = [];
  return new Promise(function (resolve, reject) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_js__["f" /* request */])(Config, function (error, res) {
      if (!error) {
        var data = res.data;
        if (data.errcode === 0) {
          var oauth = {
            agentId: data.agentId || '',
            corpId: data.corpId || '',
            timeStamp: data.timeStamp || '',
            nonceStr: data.nonceStr || '',
            signature: data.signature || '',
            jsApiList: jsApiList || []
          };
          __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.config(oauth);
          resolve();
        }
      } else {
        reject(res);
      }
    });
  });
}

function getUserId() {
  var Config = {
    method: 'GET',
    uri: __WEBPACK_IMPORTED_MODULE_2__env_js__["a" /* APPHOST */] + '/api/get-user-info'
  };
  return new Promise(function (resolve, reject) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_js__["g" /* authCode */])().then(function (result) {
      var code = result.code;
      Config.body = {};
      Config.body.code = code;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_js__["f" /* request */])(Config, function (error, res) {
        if (!error && res.ok) {
          var data = res.data;
          if (data.errcode === 0) {
            resolve(data);
          } else {
            reject(data);
          }
        }
      });
    }).catch(function (err) {
      reject(err);
    });
  });
}

function getUserInfo(userId) {
  var Config = {
    method: 'GET',
    uri: __WEBPACK_IMPORTED_MODULE_2__env_js__["a" /* APPHOST */] + '/api/get',
    body: {
      userid: userId
    }
  };
  return new Promise(function (resolve, reject) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_js__["f" /* request */])(Config, function (error, res) {
      if (!error && res.ok) {
        var data = res.data;
        if (data.errcode === 0) {
          // 再处理
          resolve(data);
        } else {
          reject(data);
        }
      }
    });
  });
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container_App_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__container_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container_router_js__ = __webpack_require__(3);



var _Router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__container_router_js__["a" /* default */])(Vue),
    router = _Router.router;

new Vue(Vue.util.extend({
  el: '#root',
  router: router
}, __WEBPACK_IMPORTED_MODULE_0__container_App_vue___default.a));

router.push('/');

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.5.3
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path) {
  var regex = index(path);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.5.3';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function parse(qs, sep, eq) {
  var obj = Object.create(null);
  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }
  sep = sep || '&';
  eq = eq || '=';
  var params = qs.split(sep);
  var i = 0;
  var l = params.length;
  for (; i < l; i++) {
    var items = params[i].split(eq);
    var queryKey = items[0].trim();
    var queryVal = '';
    if (items.length >= 3) {
      (function () {
        items.splice(0, 1);
        var lastIndex = items.length - 1;
        items.forEach(function (v, i) {
          v = v.trim();
          if (i === lastIndex) {
            queryVal += v;
          } else {
            queryVal += v + eq;
          }
        });
      })();
    } else {
      queryVal = items[1].trim();
    }
    var cur = obj[queryKey];
    if (cur) {
      if (Array.isArray(cur)) {
        cur.push(queryVal);
      } else {
        var temp = cur;
        obj[queryKey] = new Array();
        obj[queryKey].push(temp);
        obj[queryKey].push(queryVal);
      }
    } else {
      obj[queryKey] = queryVal;
    }
  }
  return obj;
}

function stringify(obj, sep, eq) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    var keys = Object.keys(obj);
    var len = keys.length;
    var flast = len - 1;
    var fields = '';
    var i = 0;
    for (; i < len; i++) {
      var k = keys[i];
      var v = obj[k];
      var ks = k + eq;
      if (Array.isArray(v)) {
        var vlen = v.length;
        var vlast = vlen - 1;
        var j = 0;
        for (; j < vlen; ++j) {
          fields += ks + v[j];
          if (j < vlast) {
            fields += sep;
          }
        }
        if (vlen && i < flast) {
          fields += sep;
        }
      } else {
        fields += ks + v;
        if (i < flast) {
          fields += sep;
        }
      }
    }
    return fields;
  }
  return '';
}

var querystring = {
  stringify: stringify,
  parse: parse
};

function format(url, query) {
  var search = querystring.stringify(query);
  return url + '?' + search;
}

function parse$1(url, parseQueryString) {
  var location = {
    hash: null,
    search: null
  };
  if (!url) {
    return {};
  }
  var searchIndex = url.indexOf('?');
  if (searchIndex === -1) {
    return {};
  }
  var hashIndex = url.indexOf('#');
  if (hashIndex > -1) {
    location.hash = url.slice(hashIndex);
    location.search = url.slice(searchIndex, hashIndex);
  } else {
    location.search = url.slice(searchIndex);
  }
  var searchString = location.search.slice(1);
  var query = querystring.parse(searchString);
  if (typeof parseQueryString === 'string' && parseQueryString.length > 0) {
    return query[parseQueryString];
  } else {
    return query;
  }
}

var url = {
  format: format,
  parse: parse$1
};

function whatEnv() {
  /*
    env Object ======= !!!!
     platform,
    bundleFrameworkType,
    dingtalk {
     bundleUrl,
     originalUrl
    }
    appName
    */
  var weexEnv = {};
  if (typeof weex !== 'undefined') {
    var config = weex.config;
    var _env = config.env;
    weexEnv.platform = _env.platform;
    weexEnv.bundleFrameworkType = 'Vue';
    if (weexEnv.platform !== 'Web') {
      weexEnv.dingtalk = {
        bundleUrl: config.bundleUrl,
        originalUrl: config.originalUrl
      };
      weexEnv.appName = _env.appName;
    } else {
      // Vue Web
      var href = location.href;
      var tpl = url.parse(href, 'dd_wx_tpl');
      weexEnv.dingtalk = {
        bundleUrl: tpl ? tpl : url.parse(href, '_wx_tpl'),
        originalUrl: href
      };
    }
  } else {
    // Rax Weex
    if (typeof callNative === 'function') {
      weexEnv.platform = navigator.platform;
      weexEnv.appName = navigator.appName;
    } else {
      // Rax Web
      weexEnv.platform = 'Web';
      var _href = location.href;
      var _tpl = url.parse(_href, 'dd_wx_tpl');
      weexEnv.dingtalk = {
        bundleUrl: _tpl ? _tpl : url.parse(_href, '_wx_tpl'),
        originalUrl: _href
      };
    }
    weexEnv.bundleFrameworkType = 'Rax';
  }
  return weexEnv;
}

var env = whatEnv();
var isWeb = env.platform === 'Web';
var isWeexiOS = env.platform === 'iOS';
var isWeexAndroid = env.platform === 'android';
var isWeex = isWeexiOS || isWeexAndroid;
var dingtalk = env.dingtalk;
var bundleFrameworkType = env.bundleFrameworkType;
var bundleUrl = dingtalk.bundleUrl;
var originalUrl = dingtalk.originalUrl;


var UA = void 0;
if (isWeb) {
  UA = window.navigator.userAgent.toLowerCase();
}

var isDingtalk = dingtalkContainer();

function dingtalkContainer() {
  if (isWeex) {
    if (env.appName === 'DingTalk' || env.appName === 'com.alibaba.android.rimet') {
      return true;
    }
    return false;
  } else {
    return UA && UA.indexOf('dingtalk') > -1;
  }
}

function webAndroid() {
  if (isWeb) {
    return UA && UA.indexOf('android') > -1;
  }
  return null;
}

function webiOS() {
  if (isWeb) {
    return UA && /iphone|ipad|ipod|ios/.test(UA);
  }
  return null;
}

var isWebiOS = webiOS();
var isWebAndroid = webAndroid();

var env$1 = {
  isDingtalk: isDingtalk,
  isWeb: isWeb,
  isWebiOS: isWebiOS,
  isWebAndroid: isWebAndroid,
  isWeex: isWeex,
  isWeexiOS: isWeexiOS,
  isWeexAndroid: isWeexAndroid,
  bundleFrameworkType: bundleFrameworkType,
  bundleUrl: bundleUrl,
  originalUrl: originalUrl
};

function compareVersion(oldVersion, newVersion, containEqual) {
  if (typeof oldVersion !== 'string' || typeof newVersion !== 'string') {
    return false;
  }
  //分割字符串为['1', '0', '1']格式
  var oldArray = oldVersion.split('.');
  var newArray = newVersion.split('.');
  var o = void 0;
  var n = void 0;
  do {
    o = oldArray.shift();
    n = newArray.shift();
  } while (o === n && newArray.length > 0);
  if (containEqual) {
    return (n | 0) >= (o | 0);
  } else {
    return (n | 0) > (o | 0);
  }
}

var bundleFrameworkType$1 = env$1.bundleFrameworkType;


function requireModule(name) {
  if (bundleFrameworkType$1 === 'Vue') {
    return weex.requireModule(name);
  } else {
    var moduleName = '@weex-module/' + name;
    return __weex_require__(moduleName);
  }
}

var bundleFrameworkType$2 = env$1.bundleFrameworkType;
var isWeex$1 = env$1.isWeex;


function Document() {
  if (isWeex$1 && bundleFrameworkType$2 === 'Vue') {
    return weex.document;
  } else {
    return document;
  }
}

var doc = Document();

var timer = requireModule('timer');
var isWeex$2 = env$1.isWeex;


function setTimeout(handler, time) {
  if (isWeex$2) {
    timer.setTimeout(handler, time);
    return doc.taskCenter.callbackManager.lastCallbackId.toString();
  } else {
    return window.setTimeout(handler, time);
  }
}

function clearTimeout(n) {
  if (isWeex$2) {
    timer.clearTimeout(n);
  } else {
    window.clearTimeout(n);
  }
}

function setInterval(handler, time) {
  if (isWeex$2) {
    timer.setInterval(handler, time);
    return doc.taskCenter.callbackManager.lastCallbackId.toString();
  } else {
    return window.setInterval(handler, time);
  }
}

function clearInterva(n) {
  if (isWeex$2) {
    timer.clearInterva(n);
  } else {
    window.clearInterva(n);
  }
}

var timer$1 = {
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterva: clearInterva
};

var index = {
  querystring: querystring,
  url: url,
  env: env$1,
  compareVersion: compareVersion,
  requireModule: requireModule,
  document: doc,
  timer: timer$1
};

module.exports = index;
//# sourceMappingURL=journey.js.map


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(31)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xiangwenwen/github_opensource/weex-dingtalk-todo/todo-client/src/pages/add/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7c2563eb"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(32)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xiangwenwen/github_opensource/weex-dingtalk-todo/todo-client/src/pages/home/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-bbb1b4aa"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(28)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xiangwenwen/github_opensource/weex-dingtalk-todo/todo-client/src/pages/list/component/todo-cells.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-293637b4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(27)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xiangwenwen/github_opensource/weex-dingtalk-todo/todo-client/src/pages/list/component/todo-user.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0f3ed938"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(24)
)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(30)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/xiangwenwen/github_opensource/weex-dingtalk-todo/todo-client/src/pages/list/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7a1c7eaa"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'root'
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_storage_js__ = __webpack_require__(33);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'add',
  data: function data() {
    return {
      taskText: '',
      userId: ''
    };
  },
  created: function created() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["c" /* setRight */])({
      show: false
    });
  },
  mounted: function mounted() {
    this.userId = this.$route.params.userId;
  },

  methods: {
    inputTask: function inputTask(e) {
      this.taskText = e.value;
    },
    goBack: function goBack() {
      this.$router.go(-1);
    },
    enterTask: function enterTask() {
      console.log(this.userId);
      if (this.taskText.length === 0) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["a" /* toast */])('enter text is empty');
        return;
      } else if (!this.userId) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["a" /* toast */])('Not Login');
      } else {
        var vm = this;
        var meta = {
          date: new Date().getTime(),
          text: this.taskText,
          check: 0
        };
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_storage_js__["a" /* getItem */])(this.userId, function (e, res) {
          var cells = void 0;
          console.log(e);
          if (e === 1) {
            cells = [];
          }
          if (!e) {
            cells = res;
          }
          cells.push(meta);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_storage_js__["b" /* setItem */])(vm.userId, cells);
          vm.goBack();
        });
      }
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(0);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'home',
  data: function data() {
    return {
      link: 'Going DingTalk To do Application'
    };
  },
  created: function created() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["c" /* setRight */])({
      show: false
    });
  },
  mounted: function mounted() {},

  methods: {
    getClick: function getClick() {
      this.$router.push('list');
    }
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_storage_js__ = __webpack_require__(33);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'todo-cells',
  props: {
    todoList: Array,
    userId: String
  },
  data: function data() {
    return {};
  },

  methods: {
    completeTask: function completeTask(item) {
      item.check = item.check === 0 ? 1 : 0;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_storage_js__["b" /* setItem */])(this.userId, this.todoList);
    },
    removeTask: function removeTask(index) {
      var _this = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["h" /* confirm */])('really delete ?', function (result) {
        if (result === 'OK') {
          _this.todoList.splice(index, 1);
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_storage_js__["b" /* setItem */])(_this.userId, _this.todoList);
        }
      });
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'todo-user',
  props: {
    userInfo: Object
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},

  methods: {
    goAdd: function goAdd() {
      //openUrl('https://github.com/icepy?dd_wx_tpl=http://30.27.108.21:8089/weex-dingtalk-dev.js');
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_request_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_storage_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_todo_cells_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_todo_cells_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__component_todo_cells_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_todo_user_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_todo_user_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__component_todo_user_vue__);
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'todoapp',
  components: {
    TodoCells: __WEBPACK_IMPORTED_MODULE_3__component_todo_cells_vue___default.a,
    TodoUser: __WEBPACK_IMPORTED_MODULE_4__component_todo_user_vue___default.a
  },
  data: function data() {
    return {
      userId: '',
      todoList: [],
      userInfo: {
        avatar: '',
        name: '',
        mobile: ''
      }
    };
  },
  created: function created() {
    var _this = this;

    var right = {
      show: true,
      text: 'add',
      control: true
    };
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["c" /* setRight */])(right, this.gotoAddPage);
    this.$watch('userId', function () {
      _this.fetchUserInfo();
      _this.fetchTodoList();
    });
  },
  mounted: function mounted() {
    this.fetchUserId();
  },

  methods: {
    gotoAddPage: function gotoAddPage(e) {
      this.$router.push({ name: 'add', params: { userId: this.userId } });
    },
    fetchUserId: function fetchUserId() {
      var _this2 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_request_js__["a" /* getUserId */])().then(function (res) {
        _this2.userId = res.userid;
      }).catch(function (err) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["a" /* toast */])('fetch user id error : ' + JSON.stringify(err));
      });
    },
    fetchUserInfo: function fetchUserInfo() {
      var _this3 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_request_js__["b" /* getUserInfo */])(this.userId).then(function (res) {
        var avatar = res.avatar,
            name = res.name,
            mobile = res.mobile;

        _this3.userInfo = {
          avatar: avatar,
          name: name,
          mobile: mobile
        };
      }).catch(function (err) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["a" /* toast */])('fetch user info error : ' + JSON.stringify(err));
      });
    },
    fetchTodoList: function fetchTodoList() {
      var _this4 = this;

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_storage_js__["a" /* getItem */])(this.userId, function (err, res) {
        if (err || err === 1) {
          return;
        }
        _this4.todoList = res;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lib_util_js__["d" /* removeRightEvent */])(this.gotoAddPage);
  }
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "app-users": {
    "width": 750,
    "height": 136,
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "marginBottom": 32
  },
  "app-users-image-box": {
    "width": 148,
    "height": 136,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "app-users-image": {
    "width": 100,
    "height": 100,
    "backgroundColor": "#f8f8f8"
  },
  "app-users-name-box": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "app-users-name": {
    "fontSize": 34,
    "color": "#323334"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "todo-num": {
    "color": "#FF0000"
  },
  "no-more": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "no-more-text": {
    "fontSize": 28
  },
  "no-more-image": {
    "width": 32,
    "height": 32,
    "marginRight": 10
  },
  "app-todo-list": {
    "width": 750,
    "height": 800
  },
  "app-todo-item": {
    "width": 750,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "todo-item": {
    "width": 600,
    "backgroundColor": "#ffffff",
    "paddingTop": 20,
    "paddingLeft": 10,
    "paddingRight": 10,
    "paddingBottom": 20,
    "marginBottom": 10,
    "flexDirection": "row"
  },
  "todo-remove-box": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "todo-remove-image": {
    "width": 32,
    "height": 32
  },
  "todo-no-check": {
    "borderBottomColor": "#999999",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 5
  },
  "todo-check": {
    "borderBottomColor": "#42b983",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 5
  },
  "todo-text": {
    "width": 550
  },
  "todo-text-check": {
    "textDecoration": "line-through"
  },
  "todo-text-no-check": {
    "textDecoration": "none"
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "app-container": {
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {
  "app-wrapper": {
    "width": 750,
    "backgroundColor": "#f8f8f8"
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "app-todo-add": {
    "width": 750,
    "flexDirection": "column",
    "alignItems": "center",
    "backgroundColor": "#f8f8f8"
  },
  "app-todo-texttarea": {
    "marginTop": 55
  },
  "app-todo-input": {
    "width": 550,
    "height": 80,
    "borderBottomColor": "#ffffff",
    "borderBottomStyle": "solid",
    "borderBottomWidth": 1,
    "borderTopColor": "#ffffff",
    "borderTopStyle": "solid",
    "borderTopWidth": 1,
    "borderLeftColor": "#ffffff",
    "borderLeftStyle": "solid",
    "borderLeftWidth": 1,
    "borderRightColor": "#ffffff",
    "borderRightStyle": "solid",
    "borderRightWidth": 1,
    "fontSize": 28,
    "paddingLeft": 5,
    "paddingTop": 20,
    "backgroundColor": "#ffffff"
  },
  "app-todo-add-operation": {
    "width": 550,
    "height": 80,
    "marginTop": 35,
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "app-todo-confirm": {
    "width": 270,
    "height": 80,
    "backgroundColor": "#42b983",
    "marginRight": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "app-todo-cancel": {
    "width": 270,
    "height": 80,
    "backgroundColor": "#e06c75",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "operation-text": {
    "fontSize": 30,
    "color": "#ffffff"
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "width": 750,
    "height": 1100,
    "backgroundColor": "#f8f8f8"
  },
  "title": {
    "fontSize": 60,
    "color": "#505050",
    "textAlign": "center"
  },
  "subtitle": {
    "display": "block",
    "fontSize": 30,
    "color": "#AAAAAA",
    "textAlign": "center",
    "marginTop": 20
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-users"]
  }, [_c('div', {
    staticClass: ["app-users-image-box"],
    on: {
      "click": _vm.goAdd
    }
  }, [_c('image', {
    staticClass: ["app-users-image"],
    attrs: {
      "src": _vm.userInfo.avatar
    }
  })]), _c('div', {
    staticClass: ["app-users-name-box"]
  }, [_c('text', {
    staticClass: ["app-users-name"]
  }, [_vm._v(_vm._s(_vm.userInfo.name))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.todoList.length === 0) ? _c('div', {
    staticClass: ["no-more"]
  }, [_c('image', {
    staticClass: ["no-more-image"],
    attrs: {
      "src": "https://gw.alicdn.com/tfs/TB1SprZRXXXXXbnapXXXXXXXXXX-32-32.png"
    }
  }), _c('text', {
    staticClass: ["no-more-text"]
  }, [_vm._v("暂无数据")])]) : _c('list', {
    staticClass: ["app-todo-list"]
  }, _vm._l((_vm.todoList), function(item, index) {
    return _c('cell', {
      staticClass: ["app-todo-item"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      class: ['todo-item', item.check ? 'todo-check' : 'todo-no-check']
    }, [_c('div', {
      staticClass: ["todo-text"],
      on: {
        "click": function($event) {
          _vm.completeTask(item)
        }
      }
    }, [_c('text', {
      class: [item.check ? 'todo-text-check' : 'todo-text-no-check']
    }, [_vm._v(_vm._s(item.text))])]), _c('div', {
      staticClass: ["todo-remove-box"],
      on: {
        "click": function($event) {
          _vm.removeTask(index)
        }
      }
    }, [_c('image', {
      staticClass: ["todo-remove-image"],
      attrs: {
        "src": "https://gw.alicdn.com/tfs/TB1D.3fRXXXXXbMXpXXXXXXXXXX-32-32.png"
      }
    })])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-container"]
  }, [_c('router-view', {
    staticStyle: {
      flex: "1"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-wrapper"]
  }, [_c('todo-user', {
    attrs: {
      "userInfo": _vm.userInfo
    }
  }), _c('todo-cells', {
    attrs: {
      "todoList": _vm.todoList,
      "userId": _vm.userId
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-todo-add"]
  }, [_c('div', {
    staticClass: ["app-todo-texttarea"]
  }, [_c('textarea', {
    staticClass: ["app-todo-input"],
    attrs: {
      "placeholder": "enter your task text !!!",
      "autofocus": "true",
      "rows": "1"
    },
    on: {
      "input": _vm.inputTask
    }
  })], 1), _c('div', {
    staticClass: ["app-todo-add-operation"]
  }, [_c('div', {
    staticClass: ["app-todo-confirm"],
    on: {
      "click": _vm.enterTask
    }
  }, [_c('text', {
    staticClass: ["operation-text"]
  }, [_vm._v("confirm")])]), _c('div', {
    staticClass: ["app-todo-cancel"],
    on: {
      "click": _vm.goBack
    }
  }, [_c('text', {
    staticClass: ["operation-text"]
  }, [_vm._v("cancel")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("Hello icepy")]), _c('text', {
    staticClass: ["subtitle"],
    on: {
      "click": _vm.getClick
    }
  }, [_vm._v(_vm._s(_vm.link))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getItem;
/* unused harmony export clearItems */
/* unused harmony export removeItem */
/* harmony export (immutable) */ __webpack_exports__["b"] = setItem;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_dingtalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_js__ = __webpack_require__(0);



function getItem(name, cb) {
  var date = new Date();
  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis.util.domainStorage.getItem({
      name: name,
      onSuccess: function onSuccess(res) {
        var value = res.value;
        if (!value) {
          if (typeof cb === 'function') {
            cb(1, value);
          }
          return;
        }
        if (typeof cb === 'function') {
          try {
            var item = JSON.parse(value);
            cb(null, item);
          } catch (e) {
            cb(e, res);
          }
        }
      }
    });
  });
}

function clearItems() {
  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis.util.domainStorage.clearItems({});
  });
}

function removeItem(name) {
  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis.util.domainStorage.removeItem({
      name: name
    });
  });
}

function setItem(name, val) {
  __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.ready(function () {
    __WEBPACK_IMPORTED_MODULE_0_weex_dingtalk___default.a.apis.util.domainStorage.setItem({
      name: name,
      value: JSON.stringify(val)
    });
  });
}

/***/ })
/******/ ]);