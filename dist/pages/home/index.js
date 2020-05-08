require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([10],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('van-search', {
    attrs: {
      "input-align": "center",
      "placeholder": "请输入搜索关键词",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.toSearchPage
    }
  }), _vm._v(" "), _c('div', [_c('swiper', {
    staticClass: "swiperBox",
    attrs: {
      "indicator-dots": "",
      "autoplay": "",
      "circular": ""
    }
  }, _vm._l((_vm.swiperImgList), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      staticClass: "imgbox",
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_c('a', {
      attrs: {
        "href": ""
      }
    }, [_c('img', {
      attrs: {
        "src": item.picUrl
      }
    })])])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "nav-floor"
  }, [_c('ul', _vm._l((_vm.navImgList), function(item, index) {
    return _c('li', {
      key: item.id,
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.toNavPage(item.name)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.icon
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.name))])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "fashion-girl-floor floor"
  }, [_c('div', {
    staticClass: "floor-title"
  }, [_c('i', {
    staticClass: "title"
  }, [_vm._v("时尚女装")])], 1), _vm._v(" "), _vm._l((_vm.fashionGirlList), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "fashion-girl-content",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.toSearchListPage({
            categoryId: item.id,
            categoryName: item.name,
            searchVal: item.name
          })
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.icon
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))])], 1)
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "recommended-goods-floor floor"
  }, [_c('div', {
    staticClass: "floor-title"
  }, [_c('i', {
    staticClass: "title"
  }, [_vm._v("推荐商品")])], 1), _vm._v(" "), _c('div', {
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
  }))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-182781e9", esExports)
  }
}

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_182781e9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(106);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(88)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-182781e9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_182781e9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-182781e9", Component.options)
  } else {
    hotAPI.reload("data-v-182781e9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 89:
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


var WXAPI = __webpack_require__(13);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  data: function data() {
    return {
      swiperImgList: [],
      navImgList: [],
      fashionGirlList: [],
      recommendedGoodsList: []
    };
  },

  methods: {
    getNavItem: function getNavItem() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, code, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_home__["b" /* getNavItem */])();

              case 2:
                res = _context.sent;
                code = res.code, data = res.data;

                if (code === 0) {
                  _this.navImgList = data;
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getFashionGirl: function getFashionGirl() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res, code, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_home__["a" /* getFashionGirl */])();

              case 2:
                res = _context2.sent;
                code = res.code, data = res.data;

                if (code === 0) {
                  _this2.fashionGirlList = data;
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    getRecommend: function getRecommend() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res, code, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_home__["c" /* getRecommend */])();

              case 2:
                res = _context3.sent;
                code = res.code, data = res.data;

                if (code === 0) {
                  _this3.recommendedGoodsList = data;
                }

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    toSearchPage: function toSearchPage() {
      this.$router.push({ path: '/pages/search/index' });
    },
    toSearchListPage: function toSearchListPage(params) {
      this.$router.push({ path: '/pages/searchList/index', query: params });
    },
    toNavPage: function toNavPage(navName) {
      this.$router.push({ path: '/pages/newcomerZone/index', query: { navName: navName } });
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '清凉夏日商城',
      path: 'pages/home/index'
    };
  },
  onLoad: function onLoad() {
    var _this4 = this;

    WXAPI.init('lnyie');
    this.getNavItem();
    this.getFashionGirl();
    this.getRecommend();
    // 获取轮播图
    WXAPI.banners().then(function (res) {
      if (res.code == 0) {
        _this4.swiperImgList = res.data;
      }
    });
  }
});

/***/ })

},[206]);