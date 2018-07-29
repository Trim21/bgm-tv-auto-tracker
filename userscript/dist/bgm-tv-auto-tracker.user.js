// ==UserScript==
// @name        Bgm.tv auto tracker
// @namespace   https://trim21.me/
// @version     0.5.9
// @author      Trim21 <trim21me@gmail.com>
// @source      https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker
// @license     MIT
// @match       https://www.bilibili.com/bangumi/play/*
// @match       http*://www.iqiyi.com/*
// @match       https://bangumi-auto-tracker.trim21.cn/oauth_callback*
// @match       https://bangumi-auto-tracker.trim21.cn/userscript/options*
// @require     https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @require     https://cdn.bootcss.com/axios/0.18.0/axios.js
// @require     https://cdn.bootcss.com/vue/2.5.16/vue.min.js
// @require     https://cdn.bootcss.com/axios/0.18.0/axios.min.js
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_openInTab
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @connect     localhost
// @connect     api.bgm.tv
// @connect     bangumi-auto-tracker.trim21.cn
// @run-at      document-end
// ==/UserScript==

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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = $;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(17);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(19)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8);
var isBuffer = __webpack_require__(9);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// 'use strict'

const utils = __webpack_require__(4)
const settle = __webpack_require__(10)

const buildURL = __webpack_require__(12)
const parseHeaders = __webpack_require__(13)
const createError = __webpack_require__(6)
// var cookies = require('axios/lib/helpers/cookies')
var btoa = (typeof window !== 'undefined' && window.btoa) || __webpack_require__(14)

/**
 *
 * @param {Object} config
 * @return {Promise<any>}
 */

module.exports = function xhrAdapter (config) {
  return new Promise((resolve, reject) => {
    var requestData = config.data
    var requestHeaders = config.headers

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type'] // Let the browser set it
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || ''
      var password = config.auth.password || ''
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password)
    }


    // Handle low level network errors
    const onerror = function handleError () {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config))
    }

    // Handle timeout
    const ontimeout = function handleTimeout () {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'))
    }

    // Remove Content-Type if data is undefined
    utils.forEach(requestHeaders, function setRequestHeader (val, key) {
      if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
        // Remove Content-Type if data is undefined
        delete requestHeaders[key]
      }
    })

    // Add withCredentials to request if needed
    // if (config.withCredentials) {
    //   request.withCredentials = true
    // }

    if (requestData === undefined) {
      requestData = null
    }

    // Send the request
    // Listen for ready state
    let onload = function handleLoad (resp) {
      // Prepare the response
      var responseHeaders = 'responseHeaders' in resp ? parseHeaders(resp.responseHeaders) : null
      var responseData = !config.responseType || config.responseType === 'text' ? resp.responseText : resp.response
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: resp.status === 1223 ? 204 : resp.status,
        statusText: resp.status === 1223 ? 'No Content' : resp.statusText,
        headers: responseHeaders,
        config: config,
        request: null
      }
      settle(resolve, reject, response)
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled (cancel) {

        reject(cancel)
        // Clean up request
      })
    }

    GM_xmlhttpRequest({
      method: config.method.toUpperCase(),
      url: buildURL(config.url, config.params, config.paramsSerializer),
      headers: requestHeaders,
      data: requestData,
      timeout: config.timeout,
      ontimeout,
      onload,
      onerror,
    })
  })
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(11);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(6);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n#bgm_tv_tracker.disable .bgm_tv_tracker_info {\n  display: none;\n}\n#bgm_tv_tracker.iqiyi {\n  margin-left: 15px;\n  padding-left: 16px;\n  position: relative;\n  font-size: 15px;\n  float: left;\n  cursor: pointer;\n  display: inline;\n  user-select: none;\n}\n#bgm_tv_tracker.iqiyi .bgm_tv_tracker_info {\n  opacity: 1;\n  pointer-events: auto;\n  top: 100%;\n}\n.iqiyi .bgm_tv_tracker_btn.bgm_tv_tracker {\n  float: left;\n  cursor: pointer;\n  font-size: 14px;\n  height: 28px;\n  line-height: 18px;\n  text-align: center;\n  width: 80px !important;\n  transition: all .1s ease-in;\n}\n.iqiyi .bgm_tv_tracker_info {\n  padding: 8px;\n  margin-top: 5px;\n  background: #fff;\n  border: 1px solid #e5e9ef;\n  cursor: default;\n  height: auto;\n  left: -1px;\n  line-height: normal;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  text-align: left;\n  top: 70px;\n  white-space: normal;\n  width: 300px;\n  z-index: 1000;\n}\n.iqiyi .bgm_tv_tracker_info * {\n  max-width: 100%;\n}\n.iqiyi .bgm_tv_tracker_info button {\n  padding: 4px 6px;\n  line-height: 14px;\n  display: inline-block;\n  margin: 4px;\n}\n#bgm_tv_tracker.bilibili {\n  display: inline-block;\n  position: relative;\n  float: left;\n  margin-right: 20px;\n  user-select: none;\n}\n#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2 {\n  width: 380px;\n}\n@media screen and (max-width: 1400px) {\n.arc-toolbar .block {\n    padding: 0 12px;\n    margin-left: -12px;\n}\n.video-toolbar-module .btn-item {\n    padding: 0 0 0 60px !important;\n    margin-left: -12px;\n}\n#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2 {\n    width: 200px !important;\n}\n}\n.bilibili .bgm_tv_tracker_radius {\n  border-radius: 4px;\n  border: 1px solid #e5e9ef;\n}\n.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker:hover {\n  color: #00A1D6;\n  border: 1px solid #00A1D6;\n}\n.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker {\n  color: #6d757a;\n  float: left;\n  cursor: pointer;\n  font-size: 14px;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  width: 90px !important;\n  transition: all .1s ease-in;\n}\n.bilibili .bgm_tv_tracker_info {\n  padding: 8px;\n  margin-top: 5px;\n  background: #fff;\n  border-radius: 0 0 4px 4px;\n  border: 1px solid #e5e9ef;\n  box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;\n  cursor: default;\n  height: auto;\n  left: -1px;\n  line-height: normal;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  text-align: left;\n  top: 70px;\n  white-space: normal;\n  width: 300px;\n  z-index: 1000;\n}\n.bilibili .bgm_tv_tracker_info * {\n  max-width: 100%;\n}\n.bilibili .bgm_tv_tracker_info {\n  opacity: 1;\n  pointer-events: auto;\n  top: 100%;\n}\n.bilibili .bgm_tv_tracker_info button {\n  padding: 4px 6px;\n  line-height: 14px;\n  display: inline-block;\n  margin: 4px;\n  border: 2px solid white;\n}\n.bilibili .bgm_tv_tracker_info button:active {\n  background: white;\n}\n.bilibili .bgm_tv_tracker_info button:hover {\n  border: 2px solid #99bdf7;\n}\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(20);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(2);
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(1);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "$"
var external_$_ = __webpack_require__(0);
var external_$_default = /*#__PURE__*/__webpack_require__.n(external_$_);

// CONCATENATED MODULE: ./src/js/vars.js
/* eslint-disable no-undef, camelcase */
let gmUnsafeWindow = unsafeWindow
let gmSetValue = GM_setValue
let gmGetValue = GM_getValue
let gmOpenInTab = GM_openInTab
/* eslint-enable no-undef, camelcase */

/**
 * @namespace
 * @property {object} URLS
 * @property {string} apiServerURL access token
 * @property {string} callBackUrl
 * @property {number} apiBgmUrl
 * @property {number} authURL
 */
const URLS = {
  apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
  callBackUrl: 'https://bangumi-auto-tracker.trim21.cn/oauth_callback',
  apiBgmUrl: 'https://api.bgm.tv',
  authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri' +
    '=https://bangumi-auto-tracker.trim21.cn/oauth_callback',
}

if (window.TM_ENV === 'dev') {
  Object.assign(URLS, {
    apiServerURL: 'http://localhost:6001',
    callBackUrl: 'http://localhost:6001/oauth_callback',
    apiBgmUrl: 'https://api.bgm.tv',
    authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2955b3b3050e7bf2&response_type=code&redirect_uri' +
      '=http://localhost:6001/oauth_callback',
  })
}
const WEBSITE = {
  bilibili: 'bilibili',
  iqiyi: 'iqiyi',
}



// EXTERNAL MODULE: ./node_modules/axios-userscript-adapter/index.js
var axios_userscript_adapter = __webpack_require__(5);
var axios_userscript_adapter_default = /*#__PURE__*/__webpack_require__.n(axios_userscript_adapter);

// CONCATENATED MODULE: ./src/js/utils.js




external_axios_default.a.defaults.adapter = axios_userscript_adapter_default.a

class utils_BgmApi {
  constructor ({ accessToken, serverRoot = 'https://api.bgm.tv' }) {
    this.access_token = accessToken
    this.http = external_axios_default.a.create({
      baseURL: serverRoot,
      headers: { Authorization: 'Bearer ' + this.access_token },
      adapter: axios_userscript_adapter_default.a
    })
  }

  setSubjectProgress (subjectID, ep) {
    return new Promise((resolve, reject) => {
      this.http.post(`/subject/${subjectID}/update/watched_eps`,
        `watched_eps=${ep}`,
        { headers: { 'content-type': 'application/x-www-form-urlencoded', } })
        .then(
          response => {
            if (response.data.code >= 300) {
              reject({ status: response.data.code, response })
            } else {
              resolve(response)
            }
          },
          error => reject(error)
        )
    })
  }

  setEpisodeWatched (ep) {
    return this.http.post(`/ep/${ep}/status/watched`)
  }

  getEps (subjectID) {
    let ins = this
    return new Promise(
      (resolve, reject) => {
        let noData = false
        let eps = gmGetValue(`eps_${subjectID}`, false)
        // no data
        if (!eps) noData = true
        if (eps) {
          eps = JSON.parse(eps)
          // out of time
          if (Number(new Date().getTime() / 1000) - eps.time > 60 * 60 * 2) {
            noData = true
          }
        }

        if (!noData) {
          resolve(eps)
        } else {
          ins.getSubjectEps(subjectID).then(
            (response) => {
              gmSetValue(`eps_${subjectID}`, JSON.stringify({
                eps: response.data.eps,
                time: Number(new Date().getTime() / 1000)
              }))
              resolve(response.data)
            },
            (error) => {
              reject(error)
            }
          )
        }
      }
    )
  }

  getSubjectEps (subjectID) {
    let ins = this
    console.log('fetch api result')
    return new Promise((resolve, reject) => {
      ins.http.get(`/subject/${subjectID}/ep`).then(
        response => {
          console.log(response)
          if (response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => {
          console.log(error)
          reject(error)
        }
      )
    })
  }

  getSubject (subjectID) {
    return new Promise((resolve, reject) => {
      this.http.get(`/subject/${subjectID}`).then(
        response => {
          if (response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => reject(error)
      )
    })
  }

  setSubjectCollectionStatus ({ subjectID, status }) {
    return new Promise((resolve, reject) => {
      this.http.post(`/collection/${subjectID}/update`, `status=${status}`,
        { headers: { 'content-type': 'application/x-www-form-urlencoded' } }).then(
        response => {
          if (response.data.code >= 300) {
            reject({ response })
          } else {
            resolve(response)
          }
        },
        error => reject(error)
      )
    })
  }
}

let apiServer = external_axios_default.a.create({
  baseURL: URLS.apiServerURL,
  headers: { 'bgm.tv': "0.5.9" },
})

function parseEpisode (title) {
  let re = /第(\d+)集/g
  let result = re.exec(title)
  console.log(result)

  if (result) {
    return parseInt(result[1], 10)
  } else {
    return 0
  }
}

/**
 * A number, or a string containing a number.
 * @typedef {object} Auth
 * @property {string} access_token access token
 * @property {number} expires_in expires duration
 * @property {string} token_type
 * @property {null}   scope
 * @property {number} user_id
 * @property {string} refresh_token
 * @property {number} auth_time
 */

/**
 *
 * @param {Auth} auth
 */
function saveAuth (auth) {
  auth.auth_time = parseInt(new Date().getTime() / 1000, 10)
  gmSetValue('auth', JSON.stringify(auth))
}

/**
 * @param {Auth} auth
 * @return {boolean}
 */
function ifAuthExpires (auth) {
  /* auth_time 2d  expires in 9d */
  /*            2d + 7d - 1d < 6d => false */
  /*            2d + 7d - 1d < 8d => true */
  return (auth.auth_time + auth.expires_in - 2 * 24 * 60 * 60) < Math.round(new Date().getTime() / 1000)
}

// * @returns {(Auth|false)}
/**
 *
 * @return {Promise.< Auth|false >}
 */
function getAuth () {
  /**
   * @type {Auth}
   */
  let auth = gmGetValue('auth', false)
  if (auth) {
    auth = JSON.parse(auth)
    if (ifAuthExpires(auth)) {
      // if (true) {
      console.log('refresh token')
      return apiServer.post('/api/v0.1/refresh_token', auth)
        .then(response => {
          if (response.data.hasOwnProperty('error')) {
            // alert('续期token失败,请手动重新授权')
            console.log(response.data)
          }
          saveAuth(response.data)
          return response.data
        })
    }
  }
  return Promise.resolve(auth)
  // return auth
}



// EXTERNAL MODULE: ./node_modules/path-browserify/index.js
var path_browserify = __webpack_require__(7);
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);

// CONCATENATED MODULE: ./src/js/website.js





class website_bilibili {
  /**
   * Init Website Data.
   *
   * @method
   * @returns {Promise}
   */
  static init () {
    const status = gmUnsafeWindow.__INITIAL_STATE__
    const episode = status.epInfo.index
    const bangumiID = status.mediaInfo.season_id
    let title = status.mediaInfo.title

    return new Promise((resolve, reject) => {
      apiServer.get('/api/v0.2/querySubjectID', {
        params: { bangumiID, website: 'bilibili' }
      }).then(
        response => resolve({
          subjectID: response.data.subject_id,
          episode,
          title,
          bangumiID
        }),
        error => reject({
          episode,
          title,
          bangumiID,
          error
        })
      )
    })
  }

  static detectEpisodeChange (cb, notfound) {
    let cls = this
    const status = gmUnsafeWindow.__INITIAL_STATE__
    let bangumiID = status.mediaInfo.season_id
    let INNER_EPISODE = gmUnsafeWindow.__INITIAL_STATE__.epInfo.index

    function onEpisodeChange ({ season = false, episode = false }) {
      if (season) {
        cls.init().then(
          data => {
            cb(data)
          },
          notfound
        )
      }
      if (episode) {
        cb({
          episode: gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
        })
      }
    }

    const detectHrefChange = function () {
      console.log('check href', bangumiID, INNER_EPISODE)
      if (bangumiID !== gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.season_id) {
        onEpisodeChange({
          season: true
        })
      } else if (INNER_EPISODE !== gmUnsafeWindow.__INITIAL_STATE__.epInfo.index) {
        onEpisodeChange({
          episode: true
        })
      }

      INNER_EPISODE = gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
      bangumiID = gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.season_id
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 5000)
  }
}

class website_iQiyi {
  static init () {
    // console.log(bangumiName)
    let collectionLinkEl = external_$_default()('#datainfo-navlist > a:nth-child(3)')
    let bangumiName = collectionLinkEl.html()
    let title = gmUnsafeWindow.document.title
    let collectionLink = collectionLinkEl.attr('href')
    let filename = path_browserify_default.a.basename(collectionLink)
    let bangumiID = filename.split('.').slice(0, -1).join('.')
    let episode = parseEpisode(title)

    return new Promise((resolve, reject) => {
      apiServer.get('/api/v0.2/querySubjectID', {
        params: { bangumiID, website: 'iqiyi' }
      }).then(
        response => {
          console.log(response)
          let subjectID = response.data.subject_id
          resolve({ subjectID, episode, title, bangumiName, bangumiID })
        },
        () => reject({
          episode,
          title,
          bangumiID,
          bangumiName
        })
      )
    })
  }

  static detectEpisodeChange (cb, notfound) {
    function onEpisodeChange () {
      console.log('href change')
      let title = gmUnsafeWindow.document.title
      let episode = parseEpisode(title)
      if (episode) {
        cb({ episode })
      } else {
        notfound()
      }
    }

    gmUnsafeWindow.addEventListener('hashchange', function () {
      setTimeout(onEpisodeChange, 500)
    }, false)
  }
}



// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=template&id=3e1157a3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"disable",class:{iqiyi:this.website==='iqiyi', bilibili:this.website==='bilibili'},attrs:{"id":"bgm_tv_tracker"}},[_c('div',{staticClass:"bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius",on:{"click":_vm.trigger}},[_vm._v("bgm.tv"+_vm._s(_vm.score))]),_vm._v(" "),_c('div',{staticClass:"bgm_tv_tracker_info"},[(!_vm.subjectID)?_c('div',{staticClass:"not_found"},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tmpSubjectID),expression:"tmpSubjectID"}],staticClass:"subject",attrs:{"type":"text"},domProps:{"value":(_vm.tmpSubjectID)},on:{"input":function($event){if($event.target.composing){ return; }_vm.tmpSubjectID=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"notfound",on:{"click":function($event){_vm.userSubmitSubjectID()}}},[_vm._v("submit subject id")])])]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',[_c('p',[_vm._v("你正在看:\n        "),_c('span',{attrs:{"id":"bgm_tv_tracker_title"}},[_vm._v(_vm._s(_vm.bangumiName))])]),_vm._v(" "),_c('p',[_vm._v("第 "),_c('span',{attrs:{"id":"bgm_tv_tracker_episode"}},[_vm._v(_vm._s(_vm.episode))]),_vm._v("集")]),_vm._v(" "),_c('p',[_vm._v("Bangumi ID: "+_vm._s(_vm.bangumiID))])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{attrs:{"id":"bgm_tv_tracker_link"}},[_c('a',{attrs:{"href":("https://bgm.tv/subject/" + _vm.subjectID),"target":"_blank","rel":"noopener noreferrer"}},[_vm._v("subject/"+_vm._s(_vm.subjectID))])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('button',{staticClass:"bgm_tv_tracker_radius",attrs:{"id":"bgm_tv_tracker_mark_watch"},on:{"click":_vm.watchEps}},[_vm._v("标记本集为看过")]),_vm._v(" "),_c('button',{staticClass:"bgm_tv_tracker_radius",attrs:{"id":"bgm_tv_tracker_mark_watched"},on:{"click":_vm.setWatchProgress}},[_vm._v("看到本集")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{attrs:{"href":"https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker/issues","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("报告问题")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{attrs:{"id":"bgm_tv_tracker_notification"}},_vm._l((_vm.messages),function(message,index){return _c('div',{key:index},[_c('hr'),_vm._v(" "),_c('div',[_c('p',[_vm._v("\n          "+_vm._s(message.time.getHours())+":"+_vm._s(message.time.getMinutes())+":"+_vm._s(message.time.getSeconds())+"\n        ")]),_vm._v(" "),_c('pre',[_c('code',[_vm._v(_vm._s(message.text))])])])])}))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/js/App.vue?vue&type=template&id=3e1157a3&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=script&lang=js&
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





/**
 * @type {Object}
 */
let collection = gmGetValue('collection', false)

if (!collection) {
  collection = {}
} else {
  collection = JSON.parse(collection)
}

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  data () {
    let website = ''
    if (gmUnsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
      website = WEBSITE.bilibili
    }
    else if (gmUnsafeWindow.location.hostname === 'www.iqiyi.com') {
      website = WEBSITE.iqiyi
    }
    return {
      tmpSubjectID: null,
      messages: [],
      bangumiID: null,
      bangumiName: null,
      episode: null,
      title: null,
      subjectID: null,
      score: '',
      website
    }
  },
  watch: {
    subjectID (val) {
      let vm = this
      if (val)
        this.$bgmApi.getSubject(val).then(response => {
          vm.score = ' ' + response.data.rating.score
          vm.bangumiName = response.data.name_cn || response.data.name
        })
    }
  },
  methods: {
    userSubmitSubjectID () {
      this.subjectID = this.tmpSubjectID
      let subjectID = this.tmpSubjectID
      if (subjectID) {
        apiServer.get('/api/v0.1/missingBilibili',
          { params: { bangumi_id: bangumiID, subject_id: subjectID } })
      }
    },

    /**
     * Append a message to banner
     * @param {string} message.
     */
    notify (message) {
      let now = new Date()
      this.messages.unshift({
        time: now,
        text: message,
      })
      console.log(this.messages)
    },

    collectSubject (subjectID) {
      let vm = this
      if (!collection[subjectID]) {
        this.$bgmApi.setSubjectCollectionStatus({ subjectID, status: 'do' }).then(
          response => {
            if (response.data.code === 401) {
              vm.notify(JSON.stringify(response))
              vm.notify(response.data.error)
            } else {
              vm.notify('add this bangumi to your collection')
              collection[subjectID] = true
              gmSetValue('collection', JSON.stringify(collection))
            }
          },
          error => vm.notify(error.response.data.error_description)
        )
      }
    },

    trigger () {
      external_$_default()('.bgm_tv_tracker_info').toggle('fast')
    },
    watchEps () {
      let vm = this
      this.collectSubject(this.subjectID)
      vm.$bgmApi.getEps(this.subjectID).then(
        data => {
          let ep = data.eps.filter(function (val) {
            return val.sort === parseInt(vm.episode)
          })
          console.log(ep)
          if (ep.length) {
            ep = ep[0].id
            vm.$bgmApi.setEpisodeWatched(ep)
            vm.notify('mark your status successfully')
          } else {
            ep = data.eps[parseInt(vm.episode) - 1].id
            vm.$bgmApi.setEpisodeWatched(ep)
            vm.notify('mark your status successfully')
            // vm.notify('can\'t find episode')
          }
          return ep
        },
        error => {
          vm.notify('233')
          vm.notify(JSON.stringify(error))
        })
      // .catch(reason => vm.notify(JSON.stringify(reason)))
    },
    setWatchProgress () {
      let ep = this.episode
      this.collectSubject(this.subjectID)
      this.$bgmApi.setSubjectProgress(this.subjectID, ep).then(
        () => this.notify('mark status successful'),
        error => {
          if (error.response.data.code === 400) {
            this.notify('error: ' + error.response.data.error + ',' + '应该是因为你在bgm上的状态已经是看到本集')
          } else {
            this.notify('error: ' + JSON.stringify(error.response))
          }
        }
      )
    }
  },
  created () {
    // episode-item
    this.$website.init().then(data => {
      console.log(data)
      let { subjectID, episode, title, bangumiID } = data
      this.subjectID = subjectID
      this.episode = episode
      this.title = title
      this.bangumiID = bangumiID
    }, error => {
      console.log(error)
      if (error.error.response.status === 404) {
        this.notify('番剧没找到 手动输入吧')
      }
      let { episode, title, bangumiID, } = error
      this.episode = episode
      this.title = title
      this.bangumiID = bangumiID
    })

    let vm = this
    this.$website.detectEpisodeChange(data => {
        if (data.subjectID)
          vm.subjectID = data.subjectID
        if (data.episode)
          vm.episode = data.episode
        if (data.bangumiID)
          vm.bangumiID = data.bangumiID
      },
      error => {
        console.log(error)
        vm.episode = error.episode
        if (error.bangumiID !== vm.bangumiID) {
          if (!error.subjectID) {
            this.subjectID = undefined
          }
          vm.bangumiID = error.bangumiID
        }
      })

    this.$bgmApi.http.interceptors.request.use(function (config) {
      //在发送请求之前做某事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('config: ' + JSON.stringify(config, null, 2))
      }
      return config
    }, function (error) {
      //请求错误时做些事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('response: ' + JSON.stringify(response, null, 2))
      }
      return Promise.reject(error)
    })

    this.$bgmApi.http.interceptors.response.use(function (response) {
      //对响应数据做些事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('response: ' + JSON.stringify(response, null, 2))
      }
      return response
    }, function (error) {
      //请求错误时做些事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('error: ' + JSON.stringify(error, null, 2))
      }
      return Promise.reject(error)
    })
  }
});


// CONCATENATED MODULE: ./src/js/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var js_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/js/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/js/App.vue






/* normalize component */

var component = normalizeComponent(
  js_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./src/js/index.js









if (gmUnsafeWindow.location.href.startsWith(URLS.callBackUrl)) {
  if (gmUnsafeWindow.data) {
    saveAuth(gmUnsafeWindow.data)
    // gmSetValue('auth', JSON.stringify(gmUnsafeWindow.data))
    let child = gmUnsafeWindow.document.createElement('h1')
    child.innerText = '成功授权 请关闭网页 授权后不要忘记刷新已经打开的视频网页'
    gmUnsafeWindow.document.body.appendChild(child)
  }
}
let js_website
// inject bilibili
if (gmUnsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
  js_website = 'bilibili'
  external_$_default()('#bangumi_detail > div > div.info-right > div.info-title.clearfix > div.func-module.clearfix')
    .prepend(`<div id='bgm_tv_app'></div>`)
}

// inject iqiyi
if (gmUnsafeWindow.location.hostname === 'www.iqiyi.com') {
  if (gmUnsafeWindow.Q.PageInfo.playPageInfo.categoryName === '动漫') {
    js_website = 'iqiyi'
    external_$_default()('#jujiPlayWrap > div:nth-child(2) > div > div > div.funcRight.funcRight1014')
      .prepend(`<div id='bgm_tv_app'></div>`)
  }
}

if (external_$_default()('#bgm_tv_app')) {
  getAuth().then(
    auth => {
      if (auth) {
        /* eslint-disable unused-def */
        /**
         * @type {BgmApi}
         */
        external_Vue_default.a.prototype.$bgmApi = new utils_BgmApi({ accessToken: auth.access_token })
        external_Vue_default.a.prototype.$http = external_axios_default.a
        /* eslint-enable unused-def */
        if (js_website) {
          if (js_website === 'bilibili') external_Vue_default.a.prototype.$website = website_bilibili
          if (js_website === 'iqiyi') external_Vue_default.a.prototype.$website = website_iQiyi
          gmUnsafeWindow.vm = new external_Vue_default.a({
            el: '#bgm_tv_app',
            render: h => h(App),
          })
        }
      } else {
        gmOpenInTab(URLS.authURL, { active: true })
      }
    })
}


/***/ })
/******/ ]);