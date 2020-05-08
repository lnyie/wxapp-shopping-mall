require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([7],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1c134a1a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1c134a1a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1c134a1a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c134a1a", Component.options)
  } else {
    hotAPI.reload("data-v-1c134a1a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      activeIdx: 0,
      orderList: [],
      goodsMap: {},
      token: '',
      status: ''
    };
  },
  onLoad: function onLoad() {
    WXAPI.init('lnyie');
  },
  onShow: function onShow() {
    this.activeIdx = parseInt(this.$root.$mp.query.activeIdx);
    if (this.activeIdx) {
      this.activeIdxMappingStatus(this.activeIdx);
    } else {
      this.activeIdx = 0;
      this.status = '';
    }
    this.token = wx.getStorageSync('token') || null;
    if (this.token) {
      this.getOrderList(this.status);
    }
  },

  methods: {
    getOrderList: function getOrderList(status) {
      var _this = this;

      WXAPI.orderList({
        token: this.token,
        status: status
      }).then(function (res) {
        console.log(res);
        var code = res.code,
            data = res.data;

        if (code === 0) {
          _this.orderList = data.orderList;
          _this.goodsMap = data.goodsMap;
        } else {
          _this.orderList = [];
          console.log(_this.orderList);
          _this.goodsMap = {};
        }
      });
    },
    activeIdxChange: function activeIdxChange(e) {
      this.activeIdx = e.mp.detail.name;
      this.activeIdxMappingStatus(this.activeIdx);
      this.getOrderList(this.status);
    },
    activeIdxMappingStatus: function activeIdxMappingStatus(activeIdx) {
      var mapping = {
        0: '',
        1: 0,
        2: 1,
        3: -1
      };
      this.status = mapping[activeIdx];
    }
  }
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "order"
  }, [_c('div', {
    staticClass: "topTab"
  }, [_c('van-tabs', {
    staticClass: "mytab",
    attrs: {
      "active": _vm.activeIdx,
      "color": "#25d2fe",
      "eventid": '0',
      "mpcomid": '4'
    },
    on: {
      "change": _vm.activeIdxChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "全部",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "待付款",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "已付款",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('van-tab', {
    attrs: {
      "title": "退款/退货",
      "mpcomid": '3'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "orderList"
  }, _vm._l((_vm.orderList), function(order, index) {
    return _c('div', {
      key: index,
      staticClass: "singleOrder"
    }, [_vm._l((_vm.goodsMap[order.id]), function(goods, goodsIdx) {
      return _c('van-card', {
        key: goodsIdx,
        attrs: {
          "num": goods.number,
          "price": goods.amountSingle,
          "title": goods.goodsName,
          "thumb": goods.pic,
          "mpcomid": '5_' + index + '-' + goodsIdx
        }
      })
    }), _vm._v(" "), _c('div', {
      staticClass: "totalPrice"
    }, [_vm._v("\n        共" + _vm._s(order.goodsNumber) + "件商品 总计：¥" + _vm._s(order.amount) + " (含运费0.00)\n      ")]), _vm._v(" "), _c('div', {
      staticClass: "orderInfo"
    }, [_c('div', {
      staticClass: "orderNum"
    }, [_vm._v("\n          订单号：" + _vm._s(order.orderNumber) + "\n        ")]), _vm._v(" "), _c('van-button', {
      attrs: {
        "color": "#25d2fe",
        "plain": "",
        "size": "mini",
        "eventid": '1_' + index,
        "mpcomid": '6_' + index
      },
      on: {
        "click": _vm.toPay
      }
    }, [_vm._v("支付")])], 1)], 2)
  })), _vm._v(" "), (_vm.orderList.length === 0) ? _c('div', {
    staticClass: "noOrder"
  }, [_vm._v("\n    暂无订单信息\n  ")]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c134a1a", esExports)
  }
}

/***/ })

},[214]);