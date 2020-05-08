require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([6],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_74a93e8a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(127);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74a93e8a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_74a93e8a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\personal\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74a93e8a", Component.options)
  } else {
    hotAPI.reload("data-v-74a93e8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_index__ = __webpack_require__(45);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
WXAPI.init('lnyie');

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  data: function data() {
    return {
      userInfo: {},
      showLogin: false,
      hasUserInfo: false
    };
  },
  onShow: function onShow() {
    var that = this;
    try {
      var token = wx.getStorageSync('token');
      var userInfo = wx.getStorageSync('userInfo');
      if (token && userInfo) {
        // Do something with return value
        this.userInfo = JSON.parse(userInfo);
        this.hasUserInfo = true;
      } else {
        this.hasUserInfo = false;
        // no token, get token
        wx.removeStorageSync('userInfo');
        wx.removeStorage({
          key: 'token',
          success: function success() {
            that.showLogin = true;
          }
        });
      }
    } catch (e) {
      wx.removeStorageSync('userInfo');
      wx.removeStorage({
        key: 'token',
        success: function success() {
          that.showLogin = true;
        }
      });
      // Do something when catch error
    }
  },

  methods: {
    hideLogin: function hideLogin() {
      this.showLogin = false;
    },
    doLogin: function doLogin() {
      this.showLogin = true;
    },
    loginSuccess: function loginSuccess() {
      if (getCurrentPages().length != 0) {
        //刷新当前页面的数据
        getCurrentPages()[getCurrentPages().length - 1].onShow();
      }
    },
    toOrderPage: function toOrderPage(activeIdx) {
      var token = wx.getStorageSync('token');
      if (!token) {
        this.doLogin();
        return;
      }
      this.$router.push({ path: '/pages/order/index', query: { activeIdx: activeIdx } });
    },
    toFavGoodsPage: function toFavGoodsPage(favName) {
      var token = wx.getStorageSync('token');
      if (!token) {
        this.doLogin();
        return;
      }
      this.$router.push({ path: '/pages/favGoods/index', query: { favName: favName } });
    },
    toAddressManagementPage: function toAddressManagementPage() {
      this.$router.push({ path: '/pages/addressManagement/index' });
    },
    callMe: function callMe() {
      wx.makePhoneCall({
        phoneNumber: '15523322110'
      });
    },
    toFeedBack: function toFeedBack() {
      this.$router.push({ path: '/pages/feedback/index' });
    },
    toAboutUSPage: function toAboutUSPage() {
      this.$router.push({ path: '/pages/aboutus/index' });
    }
  },
  components: {
    Login: __WEBPACK_IMPORTED_MODULE_0__pages_login_index__["a" /* default */]
  }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "personal"
  }, [_c('div', {
    staticClass: "avatar"
  }, [(_vm.hasUserInfo) ? _c('div', {
    staticClass: "avatarArea"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatarUrl
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.userInfo.nickName))])], 1) : _c('div', {
    staticClass: "avatarArea",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.doLogin
    }
  }, [_c('img', {
    attrs: {
      "src": "https://dcdn.it120.cc/2020/04/27/a10886d6-d6d0-439b-83c8-fcb879af11ca.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("请登录")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content-area"
  }, [_c('div', {
    staticClass: "fav-floor"
  }, [_c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.toFavGoodsPage('收藏的店铺')
      }
    }
  }, [_c('p', [_vm._v("0")]), _vm._v(" "), _c('p', [_vm._v("收藏的店铺")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.toFavGoodsPage('收藏的商品')
      }
    }
  }, [_c('p', [_vm._v("0")]), _vm._v(" "), _c('p', [_vm._v("收藏的商品")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.toFavGoodsPage('关注的商品')
      }
    }
  }, [_c('p', [_vm._v("0")]), _vm._v(" "), _c('p', [_vm._v("关注的商品")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.toFavGoodsPage('我的足迹')
      }
    }
  }, [_c('p', [_vm._v("0")]), _vm._v(" "), _c('p', [_vm._v("我的足迹")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "my-orders"
  }, [_c('div', {
    staticClass: "my-orders__title"
  }, [_vm._v("\n        我的订单\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "my-orders__action"
  }, [_c('div', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.toOrderPage(1)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-daifukuan"
  }), _vm._v(" "), _c('p', [_vm._v("待付款")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.toOrderPage(2)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-daishouhuo"
  }), _vm._v(" "), _c('p', [_vm._v("待收货")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.toOrderPage(3)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-refund"
  }), _vm._v(" "), _c('p', [_vm._v("退款/退货")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.toOrderPage(0)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-dingdan"
  }), _vm._v(" "), _c('p', [_vm._v("全部订单")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "address",
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.toAddressManagementPage
    }
  }, [_c('span', [_vm._v("收货地址管理")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-iconfontjiantou6"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "after-sale-service"
  }, [_c('div', {
    staticClass: "contact",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.callMe
    }
  }, [_c('span', [_vm._v("联系客服")]), _vm._v(" "), _c('i', [_vm._v("15523322110")])], 1), _vm._v(" "), _c('div', {
    staticClass: "feedback",
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.toFeedBack
    }
  }, [_c('span', [_vm._v("意见反馈")])]), _vm._v(" "), _c('div', {
    staticClass: "aboutus",
    attrs: {
      "eventid": '12'
    },
    on: {
      "click": _vm.toAboutUSPage
    }
  }, [_c('span', [_vm._v("关于我们")])])])]), _vm._v(" "), (_vm.showLogin) ? _c('login', {
    attrs: {
      "eventid": '13',
      "mpcomid": '0'
    },
    on: {
      "hideLogin": _vm.hideLogin,
      "loginSuccess": _vm.loginSuccess
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-74a93e8a", esExports)
  }
}

/***/ })

},[210]);