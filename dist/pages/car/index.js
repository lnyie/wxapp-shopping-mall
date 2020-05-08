require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([15],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_411c6b60_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-411c6b60"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_411c6b60_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\car\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-411c6b60", Component.options)
  } else {
    hotAPI.reload("data-v-411c6b60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vant_weapp_dist_toast_toast__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_index__ = __webpack_require__(45);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      showLogin: false,
      carList: {},
      address: {},
      token: ''
    };
  },

  computed: {
    detailAddress: function detailAddress() {
      if (this.address.userName) {
        return this.address.provinceName + this.address.cityName + this.address.countyName + this.address.detailInfo;
      } else {
        return '';
      }
    },
    // 商品的总价
    totalPrice: function totalPrice() {
      var _this = this;

      // 总价格
      var price = 0;
      __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.carList).forEach(function (item) {
        if (_this.carList[item].checkStatus === true) {
          price += _this.carList[item].minPrice * _this.carList[item].carNum * 100;
        }
      });
      return price;
    },
    totalCount: function totalCount() {
      var _this2 = this;

      var count = 0;
      __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.carList).forEach(function (item) {
        if (_this2.carList[item].checkStatus === true) {
          count += _this2.carList[item].carNum;
        }
      });
      return count;
    },

    // 是否全选
    isAll: function isAll() {
      var _this3 = this;

      var isAll = true;
      __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.carList).forEach(function (item) {
        if (_this3.carList[item].checkStatus === false) {
          isAll = false;
        }
      });
      return isAll;
    },
    carListKey: function carListKey() {
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.carList);
    }
  },
  onLoad: function onLoad() {
    WXAPI.init('lnyie');
    this.carList = wx.getStorageSync('carlist') || {};
    this.address = wx.getStorageSync('address') || {};
  },
  onShow: function onShow() {
    this.carList = wx.getStorageSync('carlist') || {};
    this.token = wx.getStorageSync('token') || null;
  },

  methods: {
    hideLogin: function hideLogin() {
      this.showLogin = false;
    },
    checkAllChange: function checkAllChange(event) {
      var _this4 = this;

      var isAll = event.mp.detail;

      __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.carList).forEach(function (item) {
        _this4.carList[item].checkStatus = isAll;
      });
      wx.setStorageSync('carlist', this.carList);
      this.showOnce();
    },
    singleCheckChange: function singleCheckChange(val) {
      val.checkStatus = !val.checkStatus;
      wx.setStorageSync('carlist', this.carList);
      this.showOnce();
    },
    getAddress: function getAddress() {
      var _this5 = this;

      wx.chooseAddress({
        success: function success(res) {
          _this5.address = res;
          wx.setStorageSync('address', res);
        }
      });
    },
    showOnce: function showOnce() {
      if (getCurrentPages().length != 0) {
        getCurrentPages()[getCurrentPages().length - 1].onShow();
      }
    },
    countChange: function countChange() {
      wx.setStorageSync('carlist', this.carList);
    },
    plusOne: function plusOne(val) {
      val.carNum++;
      wx.setStorageSync('carlist', this.carList);
      this.showOnce();
    },
    subOne: function subOne(val) {
      var _this6 = this;

      val.carNum--;
      if (val.carNum <= 0) {
        wx.showModal({
          title: '提示',
          content: '确定删除当前商品？',
          success: function success(res) {
            if (res.confirm) {
              delete _this6.carList[val.id];
              _this6.carList = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _this6.carList);
            } else if (res.cancel) {
              val.carNum = 1;
            }
            wx.setStorageSync('carlist', _this6.carList);
            _this6.showOnce();
          }
        });
      } else {
        wx.setStorageSync('carlist', this.carList);
        this.showOnce();
      }
    },

    // 结算
    settleAccounts: function settleAccounts() {
      var that = this;
      try {
        var token = wx.getStorageSync('token');
        if (!token) {
          this.showLogin = true;
        } else {
          this.loginSuccess();
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
    loginSuccess: function loginSuccess() {
      var _this7 = this;

      this.showOnce();
      if (this.token) {
        if (this.totalCount <= 0) {
          Object(__WEBPACK_IMPORTED_MODULE_3__vant_weapp_dist_toast_toast__["a" /* default */])({
            type: 'fail',
            message: '商品数量为0',
            duration: '1000'
          });
          return;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.address).length === 0) {
          Object(__WEBPACK_IMPORTED_MODULE_3__vant_weapp_dist_toast_toast__["a" /* default */])({
            type: 'fail',
            message: '请选择收货地址',
            duration: '1000'
          });
          return;
        }
        var goodsJsonStr = [];
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.carList).forEach(function (item) {
          if (_this7.carList[item].checkStatus === true) {
            goodsJsonStr.push({
              goodsId: _this7.carList[item].id,
              number: _this7.carList[item].carNum,
              goodsPrice: _this7.carList[item].minPrice
            });
          }
        });
        WXAPI.orderCreate({
          token: this.token,
          goodsJsonStr: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(goodsJsonStr),
          address: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.address)
        }).then(function (res) {
          if (res.code === 0) {
            // 删除购物车中已提交的商品
            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(_this7.carList).forEach(function (item) {
              if (_this7.carList[item].checkStatus === true) {
                delete _this7.carList[item];
              }
            });
            wx.setStorageSync('carlist', _this7.carList);
            // this.showOnce()
            // 跳转到订单详情
            _this7.$router.push({ path: '/pages/order/index' });
          }
        });
      }
    }
  },
  components: {
    Login: __WEBPACK_IMPORTED_MODULE_4__pages_login_index__["a" /* default */]
  }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shopcar"
  }, [_c('div', {
    staticClass: "address"
  }, [(!_vm.address.userName) ? _c('div', {
    staticClass: "no-add",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.getAddress
    }
  }, [_c('span', [_vm._v("没有地址")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-iconfontjiantou6"
  })], 1) : _c('div', {
    staticClass: "has-add",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.getAddress
    }
  }, [_c('div', {
    staticClass: "msg"
  }, [_c('span', [_vm._v("收货人： " + _vm._s(_vm.address.userName))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.address.telNumber))]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-iconfontjiantou6"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "addmsg"
  }, [_vm._v("\n        " + _vm._s(_vm.detailAddress) + "\n      ")])]), _vm._v(" "), _c('img', {
    attrs: {
      "src": "../../../static/img/tiaowen.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "goodsList"
  }, _vm._l((_vm.carList), function(val, key) {
    return _c('div', {
      key: key,
      staticClass: "item"
    }, [_c('van-checkbox', {
      staticClass: "singleCheck",
      attrs: {
        "value": val.checkStatus,
        "eventid": '2_' + key,
        "mpcomid": '0_' + key
      },
      on: {
        "change": function($event) {
          _vm.singleCheckChange(val)
        }
      }
    }), _vm._v(" "), _c('van-card', {
      attrs: {
        "price": val.minPrice,
        "title": val.name,
        "thumb": val.pic,
        "mpcomid": '1_' + key
      }
    }, [_c('view', {
      staticClass: "numStepper",
      slot: "num"
    }, [_c('div', {
      staticClass: "count"
    }, [_c('span', {
      attrs: {
        "eventid": '3_' + key
      },
      on: {
        "click": function($event) {
          _vm.subOne(val)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (val.carNum),
        expression: "val.carNum"
      }],
      attrs: {
        "type": "text",
        "eventid": '4_' + key
      },
      domProps: {
        "value": (val.carNum)
      },
      on: {
        "change": _vm.countChange,
        "input": function($event) {
          if ($event.target.composing) { return; }
          val.carNum = $event.target.value
        }
      }
    }), _vm._v(" "), _c('span', {
      attrs: {
        "eventid": '5_' + key
      },
      on: {
        "click": function($event) {
          _vm.plusOne(val)
        }
      }
    }, [_vm._v("+")])])])])], 1)
  })), _vm._v(" "), (_vm.carListKey.length === 0) ? _c('div', {
    staticClass: "nogoodsList"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/kong.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("空空如也")])], 1) : _vm._e(), _vm._v(" "), _c('van-submit-bar', {
    staticClass: "submitBar",
    attrs: {
      "price": _vm.totalPrice,
      "button-text": "结算",
      "eventid": '7',
      "mpcomid": '3'
    },
    on: {
      "submit": _vm.settleAccounts
    }
  }, [_c('van-checkbox', {
    attrs: {
      "value": _vm.isAll,
      "eventid": '6',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.checkAllChange
    }
  })], 1), _vm._v(" "), (_vm.showLogin) ? _c('login', {
    attrs: {
      "eventid": '8',
      "mpcomid": '4'
    },
    on: {
      "hideLogin": _vm.hideLogin,
      "loginSuccess": _vm.loginSuccess
    }
  }) : _vm._e(), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '5'
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
     require("vue-hot-reload-api").rerender("data-v-411c6b60", esExports)
  }
}

/***/ })

},[209]);