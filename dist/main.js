require("./main.css");
var $iSPua$webvitals = require("web-vitals");
var $iSPua$react = require("react");
var $iSPua$apolloclient = require("@apollo/client");
var $iSPua$apolloboost = require("apollo-boost");
var $iSPua$reactjsxdevruntime = require("react/jsx-dev-runtime");
var $iSPua$reactdomclient = require("react-dom/client");
require("react-dom");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire2bed"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire2bed"] = parcelRequire;
}
parcelRequire.register("8xvMY", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = void 0;
function $637a1065effacdbb$var$_typeof(obj1) {
    return $637a1065effacdbb$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $637a1065effacdbb$var$_typeof(obj1);
}
function $637a1065effacdbb$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($637a1065effacdbb$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $637a1065effacdbb$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $637a1065effacdbb$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $637a1065effacdbb$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}

var $637a1065effacdbb$var$reportWebVitals = function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) Promise.resolve().then(function() {
        return $iSPua$webvitals;
    }).then(function(res) {
        return $637a1065effacdbb$var$_interopRequireWildcard(res);
    }).then(function(_ref) {
        var getCLS = _ref.getCLS, getFID = _ref.getFID, getFCP = _ref.getFCP, getLCP = _ref.getLCP, getTTFB = _ref.getTTFB;
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
    });
};
var $637a1065effacdbb$var$_default = $637a1065effacdbb$var$reportWebVitals;
module.exports.default = $637a1065effacdbb$var$_default;

});

parcelRequire.register("eCxdn", function(module, exports) {
"use strict";
function $aa4e610ec6415b92$var$_typeof(obj1) {
    return $aa4e610ec6415b92$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $aa4e610ec6415b92$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.default = $aa4e610ec6415b92$var$HomePage;

var $aa4e610ec6415b92$var$_react = $aa4e610ec6415b92$var$_interopRequireDefault($iSPua$react);

var $aa4e610ec6415b92$var$_apolloBoost = $aa4e610ec6415b92$var$_interopRequireWildcard($iSPua$apolloboost);

var $aa4e610ec6415b92$var$_templateObject;
function $aa4e610ec6415b92$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($aa4e610ec6415b92$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $aa4e610ec6415b92$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $aa4e610ec6415b92$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = $aa4e610ec6415b92$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $aa4e610ec6415b92$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $aa4e610ec6415b92$var$_taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function $aa4e610ec6415b92$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $aa4e610ec6415b92$var$_asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $aa4e610ec6415b92$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $aa4e610ec6415b92$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var $aa4e610ec6415b92$var$gqlUrl = "https://countries.trevorblades.com/graphql";
var $aa4e610ec6415b92$var$client = new $aa4e610ec6415b92$var$_apolloBoost.default({
    uri: $aa4e610ec6415b92$var$gqlUrl,
    cache: new $aa4e610ec6415b92$var$_apolloBoost.InMemoryCache()
});
function $aa4e610ec6415b92$var$HomePage() {
    return $aa4e610ec6415b92$var$_HomePage.apply(this, arguments);
}
function $aa4e610ec6415b92$var$_HomePage() {
    $aa4e610ec6415b92$var$_HomePage = $aa4e610ec6415b92$var$_asyncToGenerator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    _context.next = 2;
                    return $aa4e610ec6415b92$var$client.query({
                        query: (0, $aa4e610ec6415b92$var$_apolloBoost.gql)($aa4e610ec6415b92$var$_templateObject || ($aa4e610ec6415b92$var$_templateObject = $aa4e610ec6415b92$var$_taggedTemplateLiteral([
                            "\n      {\n        country(code: \"AR\") {\n          name\n          native\n          capital\n          currency\n          languages {\n            name\n          }\n        }\n      }\n    "
                        ])))
                    });
                case 2:
                    json = _context.sent;
                case 3:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    }));
    return $aa4e610ec6415b92$var$_HomePage.apply(this, arguments);
}

});


"use strict";

var $86c917f8703be41e$var$_react = $86c917f8703be41e$var$_interopRequireDefault($iSPua$react);

var $86c917f8703be41e$var$_client = $86c917f8703be41e$var$_interopRequireDefault($iSPua$reactdomclient);


var $86c917f8703be41e$var$_reportWebVitals = $86c917f8703be41e$var$_interopRequireDefault((parcelRequire("8xvMY")));

var $b0fd596400ba40fe$exports = {};
"use strict";
Object.defineProperty($b0fd596400ba40fe$exports, "__esModule", {
    value: true
});
$b0fd596400ba40fe$exports.client = void 0;

var $b0fd596400ba40fe$var$_apolloBoost = $b0fd596400ba40fe$var$_interopRequireDefault($iSPua$apolloboost);
function $b0fd596400ba40fe$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var $b0fd596400ba40fe$var$_process$env = {}, $b0fd596400ba40fe$var$_process$env$REACT_AP = $b0fd596400ba40fe$var$_process$env.REACT_APP_API_KEY, $b0fd596400ba40fe$var$REACT_APP_API_KEY = $b0fd596400ba40fe$var$_process$env$REACT_AP === void 0 ? "https://countries.trevorblades.com/graphql" : $b0fd596400ba40fe$var$_process$env$REACT_AP, $b0fd596400ba40fe$var$_process$env$REACT_AP2 = $b0fd596400ba40fe$var$_process$env.REACT_APP_ENDPOINT, $b0fd596400ba40fe$var$REACT_APP_ENDPOINT = $b0fd596400ba40fe$var$_process$env$REACT_AP2 === void 0 ? "https://countries.trevorblades.com/graphql" : $b0fd596400ba40fe$var$_process$env$REACT_AP2;
var $b0fd596400ba40fe$var$client = new $b0fd596400ba40fe$var$_apolloBoost.default({
    headers: {
        Authorization: "Apikey ".concat($b0fd596400ba40fe$var$REACT_APP_API_KEY)
    },
    uri: $b0fd596400ba40fe$var$REACT_APP_ENDPOINT
});
$b0fd596400ba40fe$exports.client = $b0fd596400ba40fe$var$client;



var $86c917f8703be41e$var$_HomePage = $86c917f8703be41e$var$_interopRequireDefault((parcelRequire("eCxdn")));

function $86c917f8703be41e$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var $86c917f8703be41e$var$root = $86c917f8703be41e$var$_client.default.createRoot(document.getElementById("root"));
$86c917f8703be41e$var$root.render(/*#__PURE__*/ $iSPua$reactjsxdevruntime.jsxDEV($86c917f8703be41e$var$_react.default.StrictMode, {
    children: /*#__PURE__*/ $iSPua$reactjsxdevruntime.jsxDEV($iSPua$apolloclient.ApolloProvider, {
        client: $b0fd596400ba40fe$exports.client,
        children: /*#__PURE__*/ $iSPua$reactjsxdevruntime.jsxDEV($86c917f8703be41e$var$_HomePage.default, {}, void 0, false, {
            fileName: "src/index.js",
            lineNumber: 25,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/index.js",
        lineNumber: 24,
        columnNumber: 5
    }, undefined)
}, void 0, false, {
    fileName: "src/index.js",
    lineNumber: 23,
    columnNumber: 13
}, undefined), document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, $86c917f8703be41e$var$_reportWebVitals.default)();


//# sourceMappingURL=main.js.map
