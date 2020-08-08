(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["debugManifests"] = factory();
	else
		root["debugManifests"] = factory();
})(window, function() {
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
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = new RegExp('manifests\\.js', 'i');
/******/ 	  var publicPath;
/******/
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManifests", function() { return getManifests; });
var MANIFESTS_ARRAY = [
  {
    "id": "f97266fb-ccb7-430e-9384-4124d05295d3",
    "alias": "Decorators",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "decorators",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/decorators/"
      ],
      "scriptResources": {
        "decorators": {
          "type": "path",
          "path": "dist/decorators.js"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
    "alias": "SPLodashSubset",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-lodash-subset",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-lodash-subset/"
      ],
      "scriptResources": {
        "sp-lodash-subset": {
          "type": "path",
          "path": "dist/sp-lodash-subset.js"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",
    "alias": "SPLodashSubset",
    "componentType": "Library",
    "version": "1.1.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-lodash-subset",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/sp-client-custom-fields/node_modules/@microsoft/sp-lodash-subset/"
      ],
      "scriptResources": {
        "sp-lodash-subset": {
          "type": "path",
          "path": "dist/sp-lodash-subset.js"
        }
      }
    }
  },
  {
    "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
    "alias": "SPCoreLibrary",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-core-library",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-core-library/"
      ],
      "scriptResources": {
        "sp-core-library": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-core-library_en-us.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.10.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b",
    "alias": "SPCoreLibrary",
    "componentType": "Library",
    "version": "1.1.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-core-library",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/sp-client-custom-fields/node_modules/@microsoft/sp-core-library/"
      ],
      "scriptResources": {
        "sp-core-library": {
          "type": "path",
          "path": "dist/sp-core-library.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        }
      }
    }
  },
  {
    "manifestVersion": 2,
    "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8",
    "alias": "SPDiagnostics",
    "componentType": "Library",
    "version": "1.10.0",
    "loaderConfig": {
      "entryModuleId": "sp-diagnostics",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-diagnostics/"
      ],
      "scriptResources": {
        "sp-diagnostics": {
          "type": "path",
          "path": "dist/sp-diagnostics.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.10.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        }
      }
    },
    "isInternal": true
  },
  {
    "manifestVersion": 2,
    "id": "e40f8203-b39d-425a-a957-714852e33b79",
    "alias": "SPDynamicData",
    "componentType": "Library",
    "version": "1.10.0",
    "loaderConfig": {
      "entryModuleId": "sp-dynamic-data",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-dynamic-data/"
      ],
      "scriptResources": {
        "sp-dynamic-data": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-dynamic-data_en-us.js"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.10.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "1e384972-6346-49b4-93c7-b2e6763938e6",
    "alias": "sp-polyfills",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-polyfills",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-polyfills/"
      ],
      "scriptResources": {
        "sp-polyfills": {
          "type": "path",
          "path": "dist/sp-polyfills.js"
        }
      }
    }
  },
  {
    "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6",
    "alias": "SPHttp",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "preloadComponents": [],
    "loaderConfig": {
      "entryModuleId": "sp-http",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-http/"
      ],
      "scriptResources": {
        "sp-http": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-http_en-us.js"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "02a01e42-69ab-403d-8a16-acd128661f8e",
    "alias": "OfficeUIFabricReact",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "office-ui-fabric-react-bundle",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/office-ui-fabric-react-bundle/"
      ],
      "scriptResources": {
        "office-ui-fabric-react-bundle": {
          "type": "path",
          "path": "dist/office-ui-fabric-react-bundle.js"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "version": "0.1.0",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8",
    "alias": "SPPageContext",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-page-context",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-page-context/"
      ],
      "scriptResources": {
        "sp-page-context": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-page-context_en-us.js"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "version": "1.10.0",
          "id": "e40f8203-b39d-425a-a957-714852e33b79"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f",
    "alias": "SPLoader",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-loader",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-loader/"
      ],
      "scriptResources": {
        "sp-loader": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-loader_en-us.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "version": "0.8.16",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "version": "1.10.0",
          "id": "e40f8203-b39d-425a-a957-714852e33b79"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.10.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "version": "1.10.0",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6",
    "alias": "SPComponentBase",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-component-base",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-component-base/"
      ],
      "scriptResources": {
        "sp-component-base": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-component-base_en-us.js"
        },
        "@microsoft/sp-dynamic-data": {
          "type": "component",
          "version": "1.10.0",
          "id": "e40f8203-b39d-425a-a957-714852e33b79"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.10.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "version": "1.10.0",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b",
    "alias": "SPExtensionBase",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-extension-base",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-extension-base/"
      ],
      "scriptResources": {
        "sp-extension-base": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-extension-base_en-us.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "version": "0.8.16",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "version": "1.10.0",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "manifestVersion": 2,
    "id": "4958ea79-6ff3-4480-8291-0932dd010869",
    "alias": "SPSearchExtensibility",
    "componentType": "Library",
    "version": "1.10.0",
    "loaderConfig": {
      "entryModuleId": "sp-search-extensibility",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-search-extensibility/"
      ],
      "scriptResources": {
        "sp-search-extensibility": {
          "type": "path",
          "path": "dist/sp-search-extensibility.js"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-extension-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb",
    "alias": "SPApplicationBase",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "preloadComponents": [
      "c0c518b8-701b-4f6f-956d-5782772bb731",
      "4958ea79-6ff3-4480-8291-0932dd010869"
    ],
    "loaderConfig": {
      "entryModuleId": "sp-application-base",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-application-base/"
      ],
      "scriptResources": {
        "sp-application-base": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-application-base_en-us.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "version": "0.8.16",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a"
        },
        "@ms/sp-load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@ms/sp-suite-nav": {
          "type": "component",
          "version": "0.1.0",
          "id": "f8a8ad94-4cf3-4a19-a76b-1cec9da00219"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "version": "1.10.0",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.10.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "version": "1.10.0",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8"
        },
        "@microsoft/sp-extension-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "0773bd53-a69e-4293-87e6-ba80ea4d614b"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "version": "0.1.0",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        },
        "@ms/odsp-utilities-bundle": {
          "type": "component",
          "version": "5.1.55",
          "id": "cc2cc925-b5be-41bb-880a-f0f8030c6aff"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "f9e737b7-f0df-4597-ba8c-3060f82380db",
    "alias": "SPPropertyPane",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-property-pane",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-property-pane/"
      ],
      "scriptResources": {
        "sp-property-pane": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-property-pane_en-us.js"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "version": "1.10.0",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.10.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@ms/uifabric-styling-bundle": {
          "type": "component",
          "version": "0.1.0",
          "id": "17ce0976-e69a-4355-be84-89b69a74717d"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "974a7777-0990-4136-8fa6-95d80114c2e0",
    "alias": "SPWebPartBase",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "preloadComponents": [
      "f9e737b7-f0df-4597-ba8c-3060f82380db"
    ],
    "loaderConfig": {
      "entryModuleId": "sp-webpart-base",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-webpart-base/"
      ],
      "scriptResources": {
        "sp-webpart-base": {
          "type": "localizedPath",
          "defaultPath": "dist/sp-webpart-base_en-us.js"
        },
        "@ms/sp-telemetry": {
          "type": "component",
          "version": "0.8.16",
          "id": "8217e442-8ed3-41fd-957d-b112e841286a"
        },
        "@ms/sp-load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-component-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "467dc675-7cc5-4709-8aac-78e3b71bd2f6"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "version": "1.10.0",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.10.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-page-context": {
          "type": "component",
          "version": "1.10.0",
          "id": "1c4541f7-5c31-41aa-9fa8-fbc9dc14c0a8"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "c0c518b8-701b-4f6f-956d-5782772bb731",
    "alias": "SPDialog",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-dialog",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-dialog/"
      ],
      "scriptResources": {
        "sp-dialog": {
          "type": "path",
          "path": "dist/sp-dialog.js"
        },
        "@microsoft/sp-application-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb"
        },
        "@microsoft/office-ui-fabric-react-bundle": {
          "type": "component",
          "version": "1.10.0",
          "id": "02a01e42-69ab-403d-8a16-acd128661f8e"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.10.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        },
        "@microsoft/sp-diagnostics": {
          "type": "component",
          "version": "1.10.0",
          "id": "78359e4b-07c2-43c6-8d0b-d060b4d577e8"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "29bd516f-4ece-40b7-8028-597cbc65a223",
    "alias": "SpOfficeUIFabricCore",
    "componentType": "Library",
    "version": "1.10.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "office-ui-fabric-core",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-office-ui-fabric-core/"
      ],
      "scriptResources": {
        "office-ui-fabric-core": {
          "type": "path",
          "path": "dist/office-ui-fabric-core.js"
        },
        "@microsoft/load-themed-styles": {
          "type": "component",
          "version": "0.1.2",
          "id": "229b8d08-79f3-438b-8c21-4613fc877abd"
        }
      }
    },
    "isInternal": true
  },
  {
    "id": "af59c2b3-2da7-41fd-8b72-3939817960af",
    "alias": "SPClientBase",
    "componentType": "Library",
    "version": "1.0.0",
    "manifestVersion": 2,
    "loaderConfig": {
      "entryModuleId": "sp-client-base",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/@microsoft/sp-client-base/"
      ],
      "scriptResources": {
        "sp-client-base": {
          "type": "path",
          "path": "dist/sp-client-base.js"
        }
      }
    }
  },
  {
    "id": "d688e552-a2fb-4904-af1c-c28aa1ee79d3",
    "alias": "TestWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "preconfiguredEntries": [
      {
        "groupId": "d688e552-a2fb-4904-af1c-c28aa1ee79d3",
        "group": {
          "default": "Under Development"
        },
        "title": {
          "default": "Test"
        },
        "description": {
          "default": "Test description"
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "description": "CustomFieldsWebPart",
          "date": "",
          "date2": ""
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "sp-client-custom-fields.bundle",
      "internalModuleBaseUrls": [
        "https://localhost:4321/node_modules/sp-client-custom-fields/"
      ],
      "scriptResources": {
        "sp-client-custom-fields.bundle": {
          "type": "path",
          "path": "dist/sp-client-custom-fields.bundle.js"
        },
        "sp-client-custom-fields/strings": {
          "defaultPath": "lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "testStrings": {
          "defaultPath": "lib/webparts/test/loc/en-us.js",
          "type": "localizedPath",
          "paths": {}
        },
        "react": {
          "type": "component",
          "version": "15.4.2",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "15.4.2",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.1.1",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.1.1",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/sp-loader": {
          "type": "component",
          "version": "1.1.1",
          "id": "1c6c9123-7aac-41f3-a376-3caea41ed83f"
        }
      }
    }
  },
  {
    "id": "00906c57-b0af-431d-903e-67c1f1c1f2b4",
    "alias": "ExplorarAreasWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "supportsFullBleed": true,
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Explorar por áreas"
        },
        "description": {
          "default": "Explorar por áreas Inicio - Intranet de Medicamentos - Colsubisidio"
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Explorar por",
          "subtitle": "Áreas",
          "items": [
            {
              "title": "<strong>Canal</strong> Institucional",
              "icon": "bottle",
              "color": "#25B0DC",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-institucional"
            },
            {
              "title": "<strong>Canal</strong> Comercial",
              "icon": "cart",
              "color": "#A6CA00",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial"
            },
            {
              "title": "<strong>Experiencia</strong> De Usuario",
              "icon": "message",
              "color": "#368090",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/experiencia__de_usuario"
            },
            {
              "title": "<strong>Aseguramiento</strong> De Calidad",
              "icon": "payroll",
              "color": "#2B62B0",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/aseguramiento_de_calidad"
            },
            {
              "title": "<strong>Gestión</strong> Humana",
              "icon": "human",
              "color": "#D51A67",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/gestion_humana"
            },
            {
              "title": "<strong>Claudia</strong> Te Cuenta",
              "icon": "nurse",
              "color": "#F9D700",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/claudia_te_cuenta"
            },
            {
              "title": "<strong>Servicios</strong> Gama",
              "icon": "services",
              "color": "#071D66",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos"
            },
            {
              "title": "<strong>Comunidad</strong> Medicamentos",
              "icon": "group",
              "color": "#8D0077",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos"
            }
          ]
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "explorar-areas-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "explorar-areas-web-part": {
          "type": "path",
          "path": "dist/explorar-areas-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        }
      }
    }
  },
  {
    "id": "02ae9793-4c82-47d6-ae17-c3357f5f9a16",
    "alias": "NoticiasWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Noticias"
        },
        "description": {
          "default": "Módulo Noticias."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Institucional",
          "subtitle": "Noticias"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "noticias-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "noticias-web-part": {
          "type": "path",
          "path": "dist/noticias-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "0363062e-08fd-4d04-8f98-ae3a34122f2f",
    "alias": "NodosDomicilioWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Nodos Domicilio"
        },
        "description": {
          "default": "Nodos de domicilio Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Nodos de",
          "subtitle": "Domicilio"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "nodos-domicilio-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "nodos-domicilio-web-part": {
          "type": "path",
          "path": "dist/nodos-domicilio-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "1c0dadd5-c24f-4b77-881f-621e0efb4709",
    "alias": "HeaderFooterApplicationCustomizer",
    "componentType": "Extension",
    "extensionType": "ApplicationCustomizer",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "loaderConfig": {
      "entryModuleId": "header-footer-application-customizer",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "header-footer-application-customizer": {
          "type": "path",
          "path": "dist/header-footer-application-customizer.js"
        },
        "@microsoft/sp-application-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "4df9bb86-ab0a-4aab-ab5f-48bf167048fb"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    }
  },
  {
    "id": "27d86fae-a757-4de8-bac9-78bda1df9301",
    "alias": "FormsSectionWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "forms_section"
        },
        "description": {
          "default": "forms_section description"
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "description": "forms_section"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "forms-section-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "forms-section-web-part": {
          "type": "path",
          "path": "dist/forms-section-web-part.js"
        },
        "FormsSectionWebPartStrings": {
          "defaultPath": "lib/webparts/formsSection/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        }
      }
    }
  },
  {
    "id": "2b433662-0355-437f-9cc5-afd2ec803ccb",
    "alias": "FooterWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Footer"
        },
        "description": {
          "default": "Colsubsidio Standar Footer"
        },
        "officeFabricIconFontName": "Page",
        "properties": {}
      }
    ],
    "loaderConfig": {
      "entryModuleId": "footer-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "footer-web-part": {
          "type": "path",
          "path": "dist/footer-web-part.js"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        }
      }
    }
  },
  {
    "id": "2b619d80-3d0f-4a5e-83d3-1820ebe07edf",
    "alias": "CumpleanosWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Cumpleaños"
        },
        "description": {
          "default": "Próximos cumpleaños intranet de medicamentos Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Próximos",
          "subtitle": "Cumpleaños",
          "image": "http://aremlab.com/media/colsubsidio/gestion/banner_birthday.png"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "cumpleanos-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "cumpleanos-web-part": {
          "type": "path",
          "path": "dist/cumpleanos-web-part.js"
        },
        "ControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-controls-react/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    }
  },
  {
    "id": "3450c0c5-bd6d-4006-8470-2bc818d6a2b8",
    "alias": "NoticiasDestacadoWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Noticia Destacada"
        },
        "description": {
          "default": "Módulo de noticia destacada."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Información",
          "subtitle": "Destacada"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "noticias-destacado-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "noticias-destacado-web-part": {
          "type": "path",
          "path": "dist/noticias-destacado-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "36c0c420-df7b-40e0-849c-dcc961b24a87",
    "alias": "SearchWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "search"
        },
        "description": {
          "default": "search description"
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "description": "search"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "search-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "search-web-part": {
          "type": "path",
          "path": "dist/search-web-part.js"
        },
        "SearchWebPartStrings": {
          "defaultPath": "lib/webparts/search/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        }
      }
    }
  },
  {
    "id": "3ede988e-002a-454e-a36b-e7f262e9b3b8",
    "alias": "DetalleIndicadorExperienciaUsuarioWebPar",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Detalle Indicador Experiencia Usuario"
        },
        "description": {
          "default": "Detalle Indicador Experiencia de Usuario Intranet Medicamentos Colsubsidio"
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "SERVICIO",
          "subtitle": "AL CLIENTE",
          "breadcrumb": {
            "title": "Experiencia de usuario",
            "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/experiencia__de_usuario"
          },
          "indicadores": [
            {
              "titulo": "Tiempo de atención",
              "icono": "Time",
              "color": "#8FC05D",
              "valor": "70.6%",
              "image": null
            },
            {
              "titulo": "Calidad en la atención",
              "icono": "Heart",
              "color": "#D51A67",
              "valor": "87.42%",
              "image": null
            },
            {
              "titulo": "Infraestructura",
              "icono": "Shop",
              "color": "#25B0DC",
              "valor": "70.63%",
              "image": null
            },
            {
              "titulo": "Faltantes",
              "icono": "Stats",
              "color": "#EFD53D",
              "valor": "81.43%%",
              "image": null
            },
            {
              "titulo": "Variedad",
              "icono": "Pills",
              "color": "#071D66",
              "valor": "82.61%",
              "image": null
            }
          ],
          "type": "main"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "detalle-indicador-experiencia-usuario-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "detalle-indicador-experiencia-usuario-web-part": {
          "type": "path",
          "path": "dist/detalle-indicador-experiencia-usuario-web-part.js"
        },
        "ControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-controls-react/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    }
  },
  {
    "id": "4044f114-9e53-411e-addc-0cb62f455bbf",
    "alias": "IndicadoresWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Indicadores"
        },
        "description": {
          "default": "Indicadores Generales de Área"
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Indicadores",
          "subtitle": "Institucional"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "indicadores-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "indicadores-web-part": {
          "type": "path",
          "path": "dist/indicadores-web-part.js"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "48ace97a-f52f-4292-90c9-99319f84f25c",
    "alias": "ConveniosWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Convenios - Procedimientos"
        },
        "description": {
          "default": "Tarjetas de convenios o procedimientos, vincula páginas con logo y título clasificados por una Etiqueta."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Nuestros",
          "subtitle": "Convenios",
          "headerClassname": "title__default",
          "boxImage": true,
          "boxsBySlide": 4
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "convenios-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "convenios-web-part": {
          "type": "path",
          "path": "dist/convenios-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "4c89ba9a-c368-482e-a06c-69bcd5972e30",
    "alias": "IndicadoresExperienciaUsuarioWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Indicadores Experiencia Usuario"
        },
        "description": {
          "default": "Indicadores Experiencia de Usuario Intranet de medicamentos Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Indicadores",
          "subtitle": "Experiencia de Usuario",
          "indicadores": [
            {
              "titulo": "Servicio al cliente",
              "valor": "82%",
              "color": "#25B0DC",
              "opcionA": {
                "titulo": "Encuesta <strong>Institucional</strong>",
                "valor": "81"
              },
              "opcionB": {
                "titulo": "Encuesta <strong>Comercial</strong>",
                "valor": "83"
              },
              "enlace": ""
            },
            {
              "titulo": "Comprador incógnito",
              "valor": "69%",
              "color": "#8FC05D",
              "opcionA": {
                "titulo": "Resultados <strong>Institucional</strong>",
                "valor": "73.5%"
              },
              "opcionB": {
                "titulo": "Resultados <strong>Comercial</strong>",
                "valor": "63.5%"
              },
              "enlace": ""
            },
            {
              "titulo": "PQRS - Tasa",
              "valor": "0.73",
              "color": "#D51A67",
              "opcionA": {
                "titulo": "Resultados <strong>Institucional</strong>",
                "valor": "0.13"
              },
              "opcionB": {
                "titulo": "Resultados <strong>Comercial</strong>",
                "valor": "1.42"
              },
              "enlace": ""
            }
          ]
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "indicadores-experiencia-usuario-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "indicadores-experiencia-usuario-web-part": {
          "type": "path",
          "path": "dist/indicadores-experiencia-usuario-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        }
      }
    }
  },
  {
    "id": "4de75f9f-0de6-4d12-b98f-dda57d01edd9",
    "alias": "NuestraCulturaWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Nuestra Cultura"
        },
        "description": {
          "default": "Nuestra cultura intranet de medicamentos Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {}
      }
    ],
    "loaderConfig": {
      "entryModuleId": "nuestra-cultura-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "nuestra-cultura-web-part": {
          "type": "path",
          "path": "dist/nuestra-cultura-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "4e6be27e-8df8-4e0e-8dcf-ccee792cb6ce",
    "alias": "EnlacesWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Enlaces"
        },
        "description": {
          "default": "Enlaces intranet de medicamentos Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Enlaces",
          "enlaces": [
            {
              "title": "Successfactors",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/gestion_humana"
            },
            {
              "title": "Aula Virtual",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/gestion_humana"
            },
            {
              "title": "Successfactors",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/gestion_humana"
            },
            {
              "title": "Aula Virtual",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/gestion_humana"
            },
            {
              "title": "Successfactors",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/gestion_humana"
            }
          ]
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "enlaces-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "enlaces-web-part": {
          "type": "path",
          "path": "dist/enlaces-web-part.js"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        }
      }
    }
  },
  {
    "id": "667d17ee-559c-4333-8c3b-9a1b858ae0e7",
    "alias": "ConvocatoriasWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Convocatorias"
        },
        "description": {
          "default": "Convocatorias internas intranet de medicamentos Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Convocatorias",
          "subtitle": "Internas"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "convocatorias-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "convocatorias-web-part": {
          "type": "path",
          "path": "dist/convocatorias-web-part.js"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "6af7f7b4-625e-4b58-bc21-4d9238a987a6",
    "alias": "CadenaValorWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Cadena de Valor"
        },
        "description": {
          "default": "Cadena de valor intranet de medicamentos Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Cadena de",
          "subtitle": "Valor"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "cadena-valor-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "cadena-valor-web-part": {
          "type": "path",
          "path": "dist/cadena-valor-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "829431f8-a6ff-4be4-9c54-72bcbc158670",
    "alias": "QuinqueniosWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Quinquenios"
        },
        "description": {
          "default": "Quinquenios intranet de medicamentos Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Quinquenios",
          "subtitle": "",
          "text1": "<h2>Estamos agradecidos por habernos acompañado todos estos años.</h2>",
          "text2": "<p>Queremos dar un reconocimiento, prem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero ut magna venenatis eleifend. Duis lorem ex, finibus ut commodo sit amet, condimentum id purus. Curabitur eleifend rhoncus orci, tristique maximus neque rutrum semper. Duis rhoncus luctus placerat. Vivamus et faucibus ipsum. Etiam</p>",
          "sign": {
            "image": "http://aremlab.com/media/colsubsidio/gestion/quinquenios/sign.png",
            "text": "<p>GERENTE DE RECURSOS HUMANOS</p><p><strong>CAROLINA PONCE</strong></p>"
          }
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "quinquenios-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "quinquenios-web-part": {
          "type": "path",
          "path": "dist/quinquenios-web-part.js"
        },
        "ControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-controls-react/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    }
  },
  {
    "id": "8dabbfd8-5f2f-4dff-8604-dc07a7320e6a",
    "alias": "DisciplinaOrganizacionalWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Disciplina Organizacional"
        },
        "description": {
          "default": "Disciplina organizacional intranet de medicamentos Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Disciplina",
          "subtitle": "Organizacional"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "disciplina-organizacional-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "disciplina-organizacional-web-part": {
          "type": "path",
          "path": "dist/disciplina-organizacional-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "b2012275-124c-48e1-8908-8802803b8c93",
    "alias": "MediosPagoWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Medios Pago"
        },
        "description": {
          "default": "Medios de pago Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Medios de",
          "subtitle": "Pago",
          "paymentMethods": [
            {
              "title": "<p>Tarjeta <strong>Multiservicios</strong></p>",
              "subtitle": null,
              "image": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/mediospago/colsubsidio.png",
              "applyAttention": false,
              "link": "http://www.google.com"
            },
            {
              "title": "<p>Sodexo</p>",
              "subtitle": null,
              "image": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/mediospago/sodexo.png",
              "applyAttention": true,
              "link": "http://www.google.com"
            },
            {
              "title": "<p>Tarjeta <strong>Alkosto</strong></p>",
              "subtitle": null,
              "image": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/mediospago/alkosto.png",
              "applyAttention": true,
              "link": "http://www.google.com"
            },
            {
              "title": "<p>Corresponsal <strong>Bancario</strong></p>",
              "subtitle": "<p>Banco de <strong>Bogotá</strong></p><p>Banco <strong>AV VILLAS</strong></p>",
              "image": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial/SiteAssets/mediospago/tarjeta-cards.png",
              "applyAttention": true,
              "link": "http://www.google.com"
            }
          ],
          "footerText": "<p><strong>No aplica</strong> para Droguerias Dependientes</p>"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "medios-pago-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "medios-pago-web-part": {
          "type": "path",
          "path": "dist/medios-pago-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        }
      }
    }
  },
  {
    "id": "e0130429-8ebf-4bd4-9dc6-f646eafbadc1",
    "alias": "DocumentosConvenioWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Documentos Convenio"
        },
        "description": {
          "default": "Módulo de documentos catalogados por Convenio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {}
      }
    ],
    "loaderConfig": {
      "entryModuleId": "documentos-convenio-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "documentos-convenio-web-part": {
          "type": "path",
          "path": "dist/documentos-convenio-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "e0325fbc-da80-4555-bc90-bf9296ffcbb1",
    "alias": "HeaderWelcomeWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Header"
        },
        "description": {
          "default": "Header para saludo con nombre de usuario actual, o interna de páginas. Intranet de Medicamentos Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Canal Institucional",
          "type": "saludo",
          "hideTitle": false,
          "titleColor": "#fff",
          "items": [
            {
              "title": "Canal Institucional",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-institucional"
            },
            {
              "title": "Canal Comercial",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/canal-comercial"
            },
            {
              "title": "Experiencia de Usuario",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/experiencia__de_usuario"
            },
            {
              "title": "Aseguramiento de Calidad",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/aseguramiento_de_calidad"
            },
            {
              "title": "Gestión Humana",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/gestion_humana"
            },
            {
              "title": "Claudia te cuenta",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos/claudia_te_cuenta"
            },
            {
              "title": "Servicios Gama",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos"
            },
            {
              "title": "Comunidad Medicamentos",
              "link": "https://colsubsidio365.sharepoint.com/sites/IntranetdeMedicamentos"
            }
          ]
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "header-welcome-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "header-welcome-web-part": {
          "type": "path",
          "path": "dist/header-welcome-web-part.js"
        },
        "ControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-controls-react/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    }
  },
  {
    "id": "e526c988-a3bf-45a7-a858-d1e96d67f3f3",
    "alias": "OrganigramaWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Organigrama"
        },
        "description": {
          "default": "Información de Organización Administrativa"
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Institucional",
          "subtitle": "Organigrama"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "organigrama-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "organigrama-web-part": {
          "type": "path",
          "path": "dist/organigrama-web-part.js"
        },
        "PropertyControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-property-controls/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        }
      }
    }
  },
  {
    "id": "f8251007-389b-4781-a477-1bd86658b3ef",
    "alias": "CanalesDomicilioWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Canales Domicilio"
        },
        "description": {
          "default": "Canales de domicilio Colsubsidio."
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "title": "Canales de",
          "subtitle": "Domicilios",
          "phone": "(+57) 700 6060 - (301) 322 4543",
          "whatsapp": "(312) 700 1212 - (311) 700 1313",
          "website": "www.colsubsidio.com"
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "canales-domicilio-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "canales-domicilio-web-part": {
          "type": "path",
          "path": "dist/canales-domicilio-web-part.js"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        }
      }
    }
  },
  {
    "id": "f8293fe8-a0c1-4310-b564-b64254d42df9",
    "alias": "BannerPrincipalWebPart",
    "componentType": "WebPart",
    "version": "0.0.1",
    "manifestVersion": 2,
    "requiresCustomScript": false,
    "supportsFullBleed": true,
    "supportedHosts": [
      "SharePointWebPart"
    ],
    "preconfiguredEntries": [
      {
        "groupId": "5c03119e-3074-46fd-976b-c60198311f70",
        "group": {
          "default": "Other"
        },
        "title": {
          "default": "Banner Principal"
        },
        "description": {
          "default": "Banner Principal"
        },
        "officeFabricIconFontName": "Page",
        "properties": {
          "list": null,
          "slides": 3
        }
      }
    ],
    "loaderConfig": {
      "entryModuleId": "banner-principal-web-part",
      "internalModuleBaseUrls": [
        "https://localhost:4321/"
      ],
      "scriptResources": {
        "banner-principal-web-part": {
          "type": "path",
          "path": "dist/banner-principal-web-part.js"
        },
        "ControlStrings": {
          "defaultPath": "node_modules/@pnp/spfx-controls-react/lib/loc/en-us.js",
          "type": "localizedPath"
        },
        "@microsoft/sp-property-pane": {
          "type": "component",
          "version": "1.10.0",
          "id": "f9e737b7-f0df-4597-ba8c-3060f82380db"
        },
        "@microsoft/sp-lodash-subset": {
          "type": "component",
          "version": "1.1.0",
          "id": "73e1dc6c-8441-42cc-ad47-4bd3659f8a3a"
        },
        "@microsoft/sp-core-library": {
          "type": "component",
          "version": "1.1.0",
          "id": "7263c7d0-1d6a-45ec-8d85-d4d1d234171b"
        },
        "@microsoft/sp-webpart-base": {
          "type": "component",
          "version": "1.10.0",
          "id": "974a7777-0990-4136-8fa6-95d80114c2e0"
        },
        "react": {
          "type": "component",
          "version": "16.8.5",
          "id": "0d910c1c-13b9-4e1c-9aa4-b008c5e42d7d",
          "failoverPath": "node_modules/react/dist/react.js"
        },
        "react-dom": {
          "type": "component",
          "version": "16.8.5",
          "id": "aa0a46ec-1505-43cd-a44a-93f3a5aa460a",
          "failoverPath": "node_modules/react-dom/dist/react-dom.js"
        },
        "@microsoft/sp-http": {
          "type": "component",
          "version": "1.10.0",
          "id": "c07208f0-ea3b-4c1a-9965-ac1b825211a6"
        },
        "@microsoft/decorators": {
          "type": "component",
          "version": "1.10.0",
          "id": "f97266fb-ccb7-430e-9384-4124d05295d3"
        }
      }
    }
  }
];
/**
 * Get the manifest array.
 */
function getManifests() {
    // Clone manifestsArray
    var manifests = JSON.parse(JSON.stringify(MANIFESTS_ARRAY));
    var manifestsFileUrl = __webpack_require__.p;
    if (manifestsFileUrl && manifestsFileUrl !== '') {
        manifests.forEach(function (manifest) {
            if (!manifest.loaderConfig.internalModuleBaseUrls || manifest.loaderConfig.internalModuleBaseUrls.length === 0) {
                manifest.loaderConfig.internalModuleBaseUrls = [manifestsFileUrl];
            }
        });
    }
    else {
        console.error("Unable to determine " + "manifests.js" + " file URL. Using default base URL. " +
            'This is expected if you are running "gulp serve."');
    }
    return manifests;
}
//# sourceMappingURL=manifestsFile.js.map

/***/ })
/******/ ]);
});