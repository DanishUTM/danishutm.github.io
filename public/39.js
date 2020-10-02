(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/MainMenu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/MainMenu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Icon */ "./resources/js/Pages/Shared/Icon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Icon: _Shared_Icon__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    url: String
  },
  methods: {
    isUrl: function isUrl() {
      var _this = this;

      for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
        urls[_key] = arguments[_key];
      }

      if (urls[0] === '') {
        return this.url === '';
      }

      return urls.filter(function (url) {
        return _this.url.startsWith(url);
      }).length;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/MainMenu.vue?vue&type=template&id=6837eda9&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/MainMenu.vue?vue&type=template&id=6837eda9& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "py-1 px-8",
        class: _vm.isUrl("dashboard")
          ? "shadow-xl bg-blue-600"
          : "hover:bg-blue-600"
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3",
            attrs: { href: _vm.$route("dashboard.dashboard") }
          },
          [
            _c(
              "div",
              { staticClass: "text-white font-semibold" },
              [
                _c("font-awesome-icon", {
                  staticClass: "mr-3",
                  attrs: { icon: ["fas", "chart-line"] }
                }),
                _vm._v("Dashboard")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "py-1 px-8",
        class: _vm.isUrl("nas") ? "shadow-xl bg-blue-600" : "hover:bg-blue-600"
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3",
            attrs: { href: _vm.$route("dashboard.nas") }
          },
          [
            _c(
              "div",
              { staticClass: "text-white font-semibold" },
              [
                _c("font-awesome-icon", {
                  staticClass: "mr-3",
                  attrs: { icon: ["fas", "archive"] }
                }),
                _vm._v("Nas")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "py-1 px-8",
        class: _vm.isUrl("manager")
          ? "shadow-xl bg-blue-600"
          : "hover:bg-blue-600"
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3",
            attrs: { href: _vm.$route("dashboard.manager") }
          },
          [
            _c(
              "div",
              { staticClass: "text-white font-semibold" },
              [
                _c("font-awesome-icon", {
                  staticClass: "mr-3",
                  attrs: { icon: ["fas", "user-shield"] }
                }),
                _vm._v("Manager")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "py-1 px-8",
        class: _vm.isUrl("service")
          ? "shadow-xl bg-blue-600"
          : "hover:bg-blue-600"
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3",
            attrs: { href: _vm.$route("dashboard.service") }
          },
          [
            _c(
              "div",
              { staticClass: "text-white font-semibold" },
              [
                _c("font-awesome-icon", {
                  staticClass: "mr-3",
                  attrs: { icon: ["fas", "wifi"] }
                }),
                _vm._v("Service")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "py-1 px-8",
        class: _vm.isUrl("user") ? "shadow-xl bg-blue-600" : "hover:bg-blue-600"
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3",
            attrs: { href: _vm.$route("dashboard.user") }
          },
          [
            _c(
              "div",
              { staticClass: "text-white font-semibold" },
              [
                _c("font-awesome-icon", {
                  staticClass: "mr-3",
                  attrs: { icon: ["fas", "user"] }
                }),
                _vm._v("User")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "py-1 px-8",
        class: _vm.isUrl("finance")
          ? "shadow-xl bg-blue-600"
          : "hover:bg-blue-600"
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3",
            attrs: { href: _vm.$route("dashboard.finance") }
          },
          [
            _c(
              "div",
              { staticClass: "text-white font-semibold" },
              [
                _c("font-awesome-icon", {
                  staticClass: "mr-3",
                  attrs: { icon: ["fas", "money-check-alt"] }
                }),
                _vm._v("Finance")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "py-1 px-8",
        class: _vm.isUrl("settings")
          ? "shadow-xl bg-blue-600"
          : "hover:bg-blue-600"
      },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3",
            attrs: { href: _vm.$route("dashboard.settings") }
          },
          [
            _c(
              "div",
              { staticClass: "text-white font-semibold" },
              [
                _c("font-awesome-icon", {
                  staticClass: "mr-3",
                  attrs: { icon: ["fas", "sliders-h"] }
                }),
                _vm._v("Settings")
              ],
              1
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "absolute inset-x-0 bottom-0 py-3 px-8 shadow-xl bg-blue-600",
        staticStyle: { width: "inherit" }
      },
      [
        _c(
          "div",
          { staticClass: "text-white float-right" },
          [
            _c(
              "inertia-link",
              { attrs: { href: _vm.$route("dashboard.settings") } },
              [
                _c("font-awesome-icon", {
                  attrs: { icon: ["fas", "cog"], size: "lg" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "inertia-link",
              { attrs: { href: _vm.$route("welcome") } },
              [
                _c("font-awesome-icon", {
                  staticClass: "ml-3",
                  attrs: { icon: ["fas", "power-off"], size: "lg" }
                })
              ],
              1
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Shared/MainMenu.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Shared/MainMenu.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainMenu_vue_vue_type_template_id_6837eda9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=template&id=6837eda9& */ "./resources/js/Pages/Shared/MainMenu.vue?vue&type=template&id=6837eda9&");
/* harmony import */ var _MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/MainMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainMenu_vue_vue_type_template_id_6837eda9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainMenu_vue_vue_type_template_id_6837eda9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/MainMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/MainMenu.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Shared/MainMenu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/MainMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/MainMenu.vue?vue&type=template&id=6837eda9&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Shared/MainMenu.vue?vue&type=template&id=6837eda9& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_6837eda9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MainMenu.vue?vue&type=template&id=6837eda9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/MainMenu.vue?vue&type=template&id=6837eda9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_6837eda9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_6837eda9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);