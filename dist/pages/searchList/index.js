require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([5],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_62358770_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(155);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(153)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62358770"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_62358770_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\searchList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62358770", Component.options)
  } else {
    hotAPI.reload("data-v-62358770", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      GoodsByCategoryList: [],
      noSortGoodsList: [],
      categoryId: '',
      searchValue: '',
      navList: ['综合', '销量', '价格'],
      selectedIndex: 0
    };
  },

  methods: {
    getGoodsBy: function getGoodsBy(params) {
      var _this = this;

      WXAPI.goods(params).then(function (res) {
        var code = res.code,
            data = res.data;

        if (code === 0) {
          _this.GoodsByCategoryList = data;
          _this.noSortGoodsList = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(data));
        } else if (code === 700) {
          _this.GoodsByCategoryList = [];
          _this.noSortGoodsList = [];
        }
      });
    },
    toSearch: function toSearch(e) {
      this.searchValue = e.mp.detail;
      this.getGoodsBy({ k: this.searchValue });
    },
    changeIndex: function changeIndex(index) {
      this.selectedIndex = index;
      if (index === 0) {
        this.GoodsByCategoryList = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.noSortGoodsList));
      }
      if (index === 1) {
        this.GoodsByCategoryList.sort(function (a, b) {
          return a.numberSells - b.numberSells; // 升序
        });
      }
      if (index === 2) {
        this.GoodsByCategoryList.sort(function (a, b) {
          return a.minPrice - b.minPrice; // 升序
        });
      }
    }
  },
  onLoad: function onLoad() {
    WXAPI.init('lnyie');
    var _$root$$mp$query = this.$root.$mp.query,
        categoryId = _$root$$mp$query.categoryId,
        categoryName = _$root$$mp$query.categoryName,
        searchVal = _$root$$mp$query.searchVal;

    if (categoryId && categoryName) {
      this.categoryId = categoryId;
      this.searchValue = categoryName;
      this.getGoodsBy({ categoryId: this.categoryId });
    } else {
      this.searchValue = searchVal;
      this.getGoodsBy({ k: this.searchValue });
    }
  }
});

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('van-search', {
    attrs: {
      "input-align": "center",
      "placeholder": "请输入搜索关键词",
      "value": _vm.searchValue,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "search": _vm.toSearch
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "nav"
  }, _vm._l((_vm.navList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      class: {
        active: _vm.selectedIndex === index
      },
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeIndex(index)
        }
      }
    }, [_vm._v("\n      " + _vm._s(item) + "\n    ")])
  })), _vm._v(" "), _vm._l((_vm.GoodsByCategoryList), function(item, index) {
    return _c('a', {
      key: item.id,
      attrs: {
        "href": '/pages/detail/index?id=' + item.id
      }
    }, [_c('van-card', {
      attrs: {
        "price": item.minPrice,
        "title": item.name,
        "thumb": item.pic,
        "lazy-load": "",
        "mpcomid": '1_' + index
      }
    }, [_c('div', {
      staticClass: "saleCount",
      slot: "num"
    }, [_vm._v("\n        销量：" + _vm._s(item.numberSells) + "\n      ")])])], 1)
  }), _vm._v(" "), (_vm.GoodsByCategoryList.length === 0) ? _c('div', {
    staticClass: "noData"
  }, [_vm._v("\n    暂无数据\n  ")]) : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-62358770", esExports)
  }
}

/***/ })

},[212]);