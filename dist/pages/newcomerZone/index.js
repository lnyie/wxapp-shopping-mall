require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([8],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6353ed64_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(168);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(166)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6353ed64"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6353ed64_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\newcomerZone\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6353ed64", Component.options)
  } else {
    hotAPI.reload("data-v-6353ed64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 166:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_home__ = __webpack_require__(44);


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
      recommendedGoodsList: [],
      navName: ''
    };
  },
  onLoad: function onLoad() {
    this.getRecommend();
  },
  onShow: function onShow() {
    this.navName = this.$root.$mp.query.navName;
    var that = this;
    wx.setNavigationBarTitle({
      title: that.navName
    });
  },

  methods: {
    getRecommend: function getRecommend() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, code, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_home__["c" /* getRecommend */])();

              case 2:
                res = _context.sent;
                code = res.code, data = res.data;

                if (code === 0) {
                  _this.recommendedGoodsList = data;
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "newcomerZone"
  }, [_c('div', {
    staticClass: "topImg"
  }, [(_vm.navName === '新人专区') ? _c('img', {
    attrs: {
      "src": "../../../static/img/newcomerZone.png"
    }
  }) : (_vm.navName === '夏日新品') ? _c('img', {
    attrs: {
      "src": "../../../static/img/xiarixinpin.png"
    }
  }) : (_vm.navName === '特价专区') ? _c('img', {
    attrs: {
      "src": "../../../static/img/tejiazhuanqu.jpg"
    }
  }) : (_vm.navName === '会员专区') ? _c('img', {
    attrs: {
      "src": "../../../static/img/huiyuanzhuanqu.jpg"
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "recommended-goods-content"
  }, _vm._l((_vm.recommendedGoodsList), function(item, index) {
    return _c('a', {
      key: item.id,
      staticClass: "goodsbox",
      attrs: {
        "href": '/pages/detail/index?id=' + item.id
      }
    }, [_c('image', {
      staticClass: "goodsImg",
      attrs: {
        "lazy-load": "",
        "src": item.pic
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "goodsinfo"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('i', {
      staticClass: "dis_price"
    }, [_vm._v("¥" + _vm._s(item.minPrice))]), _vm._v(" "), _c('i', {
      staticClass: "old_price"
    }, [_vm._v("¥" + _vm._s(item.originalPrice))]), _vm._v(" "), _c('i', {
      staticClass: "salecount"
    }, [_vm._v("销量" + _vm._s(item.numberSells) + "件")])], 1)])
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6353ed64", esExports)
  }
}

/***/ })

},[215]);