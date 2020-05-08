require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([16],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86894d3a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(176);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-86894d3a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_86894d3a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addressManagement\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-86894d3a", Component.options)
  } else {
    hotAPI.reload("data-v-86894d3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      addressArr: []
    };
  },

  methods: {
    toAddPage: function toAddPage() {
      this.$router.push({ path: '/pages/addressManagement/add' });
    }
  },
  onLoad: function onLoad() {
    this.addressArr = wx.getStorageSync('addressArr') || [];
  }
});

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addressManagement"
  }, [_vm._l((_vm.addressArr), function(item, index) {
    return _c('van-panel', {
      key: index,
      staticClass: "addressBox",
      attrs: {
        "title": '收货人：' + item.nickName,
        "desc": '联系电话：' + item.phoneNum,
        "mpcomid": '0_' + index
      }
    }, [_c('view', {
      staticClass: "address"
    }, [_vm._v("收货地址：" + _vm._s(item.province + item.city + item.county + item.detailAddress))])])
  }), _vm._v(" "), _c('div', {
    staticClass: "bottomArea"
  }, [_c('van-button', {
    attrs: {
      "block": "",
      "type": "primary",
      "size": "small",
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.toAddPage
    }
  }, [_vm._v("新增地址")])], 1)], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-86894d3a", esExports)
  }
}

/***/ })

},[217]);