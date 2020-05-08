require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([4],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_067bdbb2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(151);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-067bdbb2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_067bdbb2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-067bdbb2", Component.options)
  } else {
    hotAPI.reload("data-v-067bdbb2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_set__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray__);



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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  data: function data() {
    return {
      queryList: [],
      queryVal: '',
      hotSearch: ['牛仔裤', '连衣裙', '女装']
    };
  },
  onLoad: function onLoad() {
    var res = wx.getStorageSync('query');
    this.queryList = res ? JSON.parse(res) : [];
  },

  methods: {
    toSearchListPage: function toSearchListPage(e) {
      this.queryVal = e.mp.detail;
      if (this.queryVal) {
        this.queryList.unshift(this.queryVal);
        this.queryList = [].concat(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_set___default.a(this.queryList)));
        wx.setStorageSync('query', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.queryList));
      }
      this.$router.push({ path: '/pages/searchList/index', query: { searchVal: this.queryVal } });
    },
    clickSearch: function clickSearch(item) {
      this.queryVal = item;
      this.queryList.unshift(this.queryVal);
      this.queryList = [].concat(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_toConsumableArray___default()(new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_set___default.a(this.queryList)));
      wx.setStorageSync('query', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.queryList));
      this.$router.push({ path: '/pages/searchList/index', query: { searchVal: this.queryVal } });
    },
    clearHis: function clearHis() {
      this.queryList = [];
      wx.clearStorageSync();
    }
  }
});

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('van-search', {
    attrs: {
      "input-align": "center",
      "placeholder": "请输入搜索关键词",
      "value": _vm.queryVal,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "search": _vm.toSearchListPage
    }
  }), _vm._v(" "), (_vm.queryList.length !== 0) ? _c('div', {
    staticClass: "his"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("历史搜索")]), _vm._v(" "), _c('icon', {
    attrs: {
      "type": "clear",
      "size": "14",
      "eventid": '1'
    },
    on: {
      "click": _vm.clearHis
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.queryList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.clickSearch(item)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item) + "\n      ")])
  }))]) : _vm._e(), _vm._v(" "), (_vm.queryList.length === 0) ? _c('div', {
    staticClass: "hot"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.hotSearch), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.clickSearch(item)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item) + "\n      ")])
  }))]) : _vm._e()], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('span', [_vm._v("搜索推荐")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-067bdbb2", esExports)
  }
}

/***/ })

},[211]);