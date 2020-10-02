(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/FlashMessages */ "./resources/js/Pages/Shared/FlashMessages.vue");
/* harmony import */ var _Shared_MainMenuBC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/MainMenuBC */ "./resources/js/Pages/Shared/MainMenuBC.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FlashMessages: _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_0__["default"],
    MainMenu: _Shared_MainMenuBC__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    url: function url() {
      return location.pathname.substr(1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=template&id=0c4aae7e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=template&id=0c4aae7e& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "flex flex-col" }, [
      _c("div", { staticClass: "h-screen flex flex-col" }, [
        _c("div", { staticClass: "md:flex flex-shrink-0" }, [
          _c(
            "div",
            {
              staticClass:
                "md:flex-shrink-0 md:w-56 px-6 py-4 text-white font-semibold bg-blue-500 text-xl"
            },
            [
              _vm._v("\n          Captive Portal\n          "),
              _c(
                "div",
                { staticClass: "sm:hidden text-white float-right" },
                [
                  _c("font-awesome-icon", {
                    attrs: { icon: ["fas", "user-plus"] }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "text-sm px-3 bg-green-400 text-white p-1 rounded-full  leading-none items-center",
                      attrs: { type: "button" }
                    },
                    [_vm._v("101")]
                  ),
                  _vm._v(" "),
                  _c("font-awesome-icon", {
                    staticClass: "ml-3",
                    attrs: { icon: ["fas", "key"] }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "text-sm px-3 bg-green-400 text-white p-1 rounded-full  leading-none items-center",
                      attrs: { type: "button" }
                    },
                    [_vm._v("57")]
                  ),
                  _vm._v(" "),
                  _c("font-awesome-icon", {
                    staticClass: "ml-3",
                    attrs: { icon: ["fas", "bars"] }
                  })
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "hidden sm:block bg-white border-b w-full p-4 md:py-0 px-6 text-sm md:text-md h-16"
            },
            [
              _c(
                "div",
                { staticClass: "mt-5 mr-3 inline-block text-gray-500" },
                [
                  _c("font-awesome-icon", {
                    attrs: { icon: ["fas", "user-plus"], size: "lg" }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "px-4 bg-green-400 text-white p-2 rounded-full  leading-none items-center",
                      attrs: { type: "button" }
                    },
                    [_vm._v("101")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-5 inline-block text-gray-500" },
                [
                  _c("font-awesome-icon", {
                    attrs: { icon: ["fas", "key"], size: "lg" }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "px-4 bg-green-400 text-white p-2 rounded-full  leading-none items-center",
                      attrs: { type: "button" }
                    },
                    [_vm._v("57")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-5 inline-block float-right" },
                [
                  _vm._v(_vm._s(_vm.$page.auth.user.name)),
                  _c("font-awesome-icon", {
                    staticClass: "ml-4 text-gray-500",
                    attrs: { icon: ["fas", "chevron-down"] }
                  })
                ],
                1
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex flex-grow overflow-hidden" },
          [
            _c("main-menu", {
              staticClass:
                "flex-shrink-0 w-56 hidden md:block overflow-y-auto text-white bg-blue-500",
              attrs: { url: _vm.url() }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "flex-1 overflow-y-auto",
                staticStyle: { "background-color": "#edf2f7" },
                attrs: { "scroll-region": "" }
              },
              [_vm._t("default")],
              2
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardLayoutBC.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardLayoutBC.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardLayoutBC_vue_vue_type_template_id_0c4aae7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardLayoutBC.vue?vue&type=template&id=0c4aae7e& */ "./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=template&id=0c4aae7e&");
/* harmony import */ var _DashboardLayoutBC_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardLayoutBC.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardLayoutBC_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardLayoutBC_vue_vue_type_template_id_0c4aae7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardLayoutBC_vue_vue_type_template_id_0c4aae7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/DashboardLayoutBC.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayoutBC_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayoutBC.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayoutBC_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=template&id=0c4aae7e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=template&id=0c4aae7e& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayoutBC_vue_vue_type_template_id_0c4aae7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayoutBC.vue?vue&type=template&id=0c4aae7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayoutBC.vue?vue&type=template&id=0c4aae7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayoutBC_vue_vue_type_template_id_0c4aae7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayoutBC_vue_vue_type_template_id_0c4aae7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);