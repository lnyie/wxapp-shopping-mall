require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([3],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3d6f0f1b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(160);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(157)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3d6f0f1b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d6f0f1b", Component.options)
  } else {
    hotAPI.reload("data-v-3d6f0f1b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_detail__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vant_weapp_dist_toast_toast__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_index__ = __webpack_require__(45);



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
      goodsInfo: {},
      goodsPrice: '',
      title: '',
      pics: [],
      recommendedGoodsList: [],
      carList: {},
      showLogin: false,
      goodsId: ''
    };
  },

  methods: {
    getGoodsDetail: function getGoodsDetail(params) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, code, data, _data$basicInfo, minPrice, name;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_detail__["a" /* getGoodsDetail */])(params);

              case 2:
                res = _context.sent;
                code = res.code, data = res.data;

                if (code === 0) {
                  _this.goodsInfo = data;
                  _data$basicInfo = data.basicInfo, minPrice = _data$basicInfo.minPrice, name = _data$basicInfo.name;

                  _this.goodsPrice = minPrice;
                  _this.title = name;
                  _this.pics = data.pics;
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getRecommend: function getRecommend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res, code, data;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_home__["c" /* getRecommend */])();

              case 2:
                res = _context2.sent;
                code = res.code, data = res.data;

                if (code === 0) {
                  _this2.recommendedGoodsList = data;
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    addToShopcar: function addToShopcar() {
      if (this.carList[this.goodsInfo.basicInfo.id]) {
        this.carList[this.goodsInfo.basicInfo.id].carNum++;
      } else {
        this.carList[this.goodsInfo.basicInfo.id] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.goodsInfo.basicInfo, {
          carNum: 1,
          checkStatus: true
        });
      }
      wx.setStorageSync('carlist', this.carList);
      wx.showToast({
        title: '加入购物车成功',
        icon: 'success',
        duration: 1000
      });
    },
    toCarPage: function toCarPage() {
      this.$router.push({ path: '/pages/car/index', isTab: true });
    },
    hideLogin: function hideLogin() {
      this.showLogin = false;
    },
    goodsFavPut: function goodsFavPut() {
      var that = this;
      try {
        var token = wx.getStorageSync('token');
        if (!token) {
          this.showLogin = true;
        } else {
          this.loginSuccess(token);
        }
      } catch (e) {
        wx.removeStorage({
          key: 'token',
          success: function success() {
            that.showLogin = true;
          }
        });
      }
    },
    loginSuccess: function loginSuccess(token) {
      WXAPI.goodsFavPut(token, this.goodsId).then(function (res) {
        console.log(res);
        if (res.code === 0) {
          Object(__WEBPACK_IMPORTED_MODULE_5__vant_weapp_dist_toast_toast__["a" /* default */])({
            type: 'success',
            message: '收藏成功',
            duration: '1000'
          });
        }
      });
    },
    toBuy: function toBuy() {
      Object(__WEBPACK_IMPORTED_MODULE_5__vant_weapp_dist_toast_toast__["a" /* default */])({
        type: 'success',
        message: '购买',
        duration: '1000'
      });
    }
  },
  components: {
    Login: __WEBPACK_IMPORTED_MODULE_6__pages_login_index__["a" /* default */]
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: this.title,
      path: 'pages/detail/index?goodsId=' + this.goodsId
    };
  },
  onLoad: function onLoad() {
    WXAPI.init('lnyie');
    this.goodsId = this.$root.$mp.query.id;
    this.getGoodsDetail({ id: this.goodsId });
    this.getRecommend();
    this.carList = wx.getStorageSync('carlist') || {};
  }
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getGoodsDetail;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_wxRequest__ = __webpack_require__(65);


function getGoodsDetail(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_wxRequest__["a" /* default */])({
    url: '/shop/goods/detail',
    methdod: 'GET',
    data: data
  });
}

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('div', [_c('swiper', {
    staticClass: "swiperBox",
    attrs: {
      "indicator-dots": "",
      "autoplay": "",
      "circular": ""
    }
  }, _vm._l((_vm.goodsInfo.extJson), function(val, key) {
    return _c('block', {
      key: key
    }, [_c('swiper-item', {
      staticClass: "imgbox",
      attrs: {
        "mpcomid": '0_' + key
      }
    }, [_c('img', {
      attrs: {
        "src": val
      }
    })])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "goodsDetail"
  }, [_c('div', {
    staticClass: "price"
  }, [_vm._v("\n      ¥ " + _vm._s(_vm.goodsPrice) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "left"
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "right",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goodsFavPut
    }
  }, [_c('i', {
    staticClass: "iconfont icon-icon-"
  }), _vm._v("\n        收藏\n      ")], 1)]), _vm._v(" "), _c('div', {
    staticClass: "express"
  }, [_vm._v("\n      快递：免运费\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "comment floor"
  }, [_c('div', {
    staticClass: "floor-title"
  }, [_c('i', {
    staticClass: "title"
  }, [_vm._v("商品评价")])], 1), _vm._v(" "), _c('div', {
    staticClass: "noComment"
  }, [_c('i', {
    staticClass: "iconfont icon-pinglun"
  }), _vm._v(" "), _c('span', [_vm._v("暂无评论")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "goodsDetailImg floor"
  }, [_c('div', {
    staticClass: "floor-title"
  }, [_c('i', {
    staticClass: "title"
  }, [_vm._v("商品详情")])], 1), _vm._v(" "), _vm._l((_vm.pics), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picsBox"
    }, [_c('img', {
      attrs: {
        "src": item.pic
      }
    })])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "guessulike floor"
  }, [_c('div', {
    staticClass: "floor-title"
  }, [_c('i', {
    staticClass: "title"
  }, [_vm._v("猜你喜欢")])], 1), _vm._v(" "), _c('div', {
    staticClass: "recommended-goods-content"
  }, _vm._l((_vm.recommendedGoodsList), function(item, index) {
    return _c('a', {
      key: item.id,
      staticClass: "goodsbox clearfix",
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
  }))]), _vm._v(" "), _c('div', {
    staticClass: "myunderline"
  }, [_vm._v("\n    ===== 我是有底线的 =====\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "bottomArea"
  }, [_c('van-goods-action', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('button', {
    staticClass: "shareBtn",
    attrs: {
      "open-type": "share"
    }
  }, [_c('van-goods-action-icon', {
    attrs: {
      "icon": "chat-o",
      "text": "转发",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('van-goods-action-icon', {
    attrs: {
      "icon": "cart-o",
      "text": "购物车",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.toCarPage
    }
  }), _vm._v(" "), _c('van-goods-action-button', {
    attrs: {
      "text": "加入购物车",
      "type": "warning",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.addToShopcar
    }
  }), _vm._v(" "), _c('van-goods-action-button', {
    attrs: {
      "text": "立即购买",
      "eventid": '3',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.toBuy
    }
  })], 1)], 1), _vm._v(" "), (_vm.showLogin) ? _c('login', {
    attrs: {
      "eventid": '4',
      "mpcomid": '6'
    },
    on: {
      "hideLogin": _vm.hideLogin,
      "loginSuccess": _vm.loginSuccess
    }
  }) : _vm._e(), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '7'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d6f0f1b", esExports)
  }
}

/***/ })

},[213]);