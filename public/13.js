(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Pages/Shared/Layout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    errors: Object
  },
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        role: 1
      }
    };
  },
  methods: {
    submit: function submit() {
      this.$inertia.post(this.$route('register'), this.form);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/FlashMessages */ "./resources/js/Pages/Shared/FlashMessages.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FlashMessages: _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("layout", [
    _c(
      "main",
      { staticClass: "sm:container sm:mx-auto sm:max-w-lg sm:mt-10" },
      [
        _c("div", { staticClass: "flex" }, [
          _c("div", { staticClass: "w-full" }, [
            _c(
              "section",
              {
                staticClass:
                  "flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm lg:shadow-lg"
              },
              [
                _c(
                  "header",
                  {
                    staticClass:
                      "font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md"
                  },
                  [_vm._v("\n\t\t\t\t\t\tREGISTER\n\t\t\t\t\t")]
                ),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "w-full px-6 space-y-6 sm:px-10 sm:space-y-8",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submit($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "flex flex-wrap mt-8" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2 sm:mb-4",
                          attrs: { for: "name" }
                        },
                        [_vm._v("\n\t\t\t\t\t\t\t\tName:\n\t\t\t\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-input w-full",
                        attrs: {
                          error: _vm.errors.name,
                          id: "name",
                          type: "text",
                          name: "name",
                          required: "",
                          autocomplete: "name",
                          autofocus: ""
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex flex-wrap" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2 sm:mb-4",
                          attrs: { for: "email" }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\tE-Mail Address:\n\t\t\t\t\t\t\t"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.email,
                            expression: "form.email"
                          }
                        ],
                        staticClass: "form-input w-full",
                        attrs: {
                          error: _vm.errors.email,
                          id: "email",
                          type: "email",
                          name: "email",
                          required: "",
                          autocomplete: "email"
                        },
                        domProps: { value: _vm.form.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex flex-wrap" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2 sm:mb-4",
                          attrs: { for: "password" }
                        },
                        [_vm._v("\n\t\t\t\t\t\t\t\tPassword:\n\t\t\t\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password,
                            expression: "form.password"
                          }
                        ],
                        staticClass: "form-input w-full",
                        attrs: {
                          error: _vm.errors.password,
                          id: "password",
                          type: "password",
                          name: "password",
                          required: "",
                          autocomplete: "new-password"
                        },
                        domProps: { value: _vm.form.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "password", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex flex-wrap" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2 sm:mb-4",
                          attrs: { for: "password-confirm" }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\tConfirm Password:\n\t\t\t\t\t\t\t"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.password_confirmation,
                            expression: "form.password_confirmation"
                          }
                        ],
                        staticClass: "form-input w-full",
                        attrs: {
                          error: _vm.errors.password_confirmation,
                          id: "password-confirm",
                          type: "password",
                          name: "password_confirmation",
                          required: "",
                          autocomplete: "new-password"
                        },
                        domProps: { value: _vm.form.password_confirmation },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "password_confirmation",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex flex-wrap" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "block text-gray-700 text-sm font-bold mb-2 sm:mb-4",
                          attrs: { for: "role" }
                        },
                        [_vm._v("\n\t\t\t\t\t\t\t\tRole:\n\t\t\t\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.role,
                              expression: "form.role"
                            }
                          ],
                          staticClass: "form-input w-full",
                          attrs: { id: "role", name: "role", required: "" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "role",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Admin")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Manager")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v("User")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex flex-wrap" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "w-full select-none font-bold whitespace-no-wrap p-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-blue-500 hover:bg-blue-700 sm:py-4",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("\n\t\t\t\t\t\t\t\tRegister\n\t\t\t\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "w-full text-xs text-center text-gray-700 my-6 sm:text-sm sm:my-8"
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\tAlready have an account?\n\t\t\t\t\t\t\t\t"
                          ),
                          _c(
                            "inertia-link",
                            {
                              staticClass:
                                "text-blue-500 hover:text-blue-700 no-underline hover:underline",
                              attrs: { href: _vm.$route("login") }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t\t\t"
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Layout.vue?vue&type=template&id=7a4e975b&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Layout.vue?vue&type=template&id=7a4e975b& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "bg-gray-100 h-screen antialiased leading-none font-sans" },
    [
      _c("header", { staticClass: "bg-blue-500 py-6" }, [
        _c(
          "div",
          {
            staticClass:
              "container mx-auto flex justify-between items-center px-6"
          },
          [
            _c(
              "div",
              [
                _c(
                  "inertia-link",
                  {
                    staticClass:
                      "text-lg font-semibold text-gray-100 no-underline",
                    attrs: { href: _vm.$route("welcome") }
                  },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t" + _vm._s(_vm.$page.app.name) + "\n\t\t\t\t"
                    )
                  ]
                ),
                _vm._v(" "),
                _vm.$page.isAuth
                  ? [
                      _c(
                        "inertia-link",
                        {
                          staticClass:
                            "text-white no-underline hover:underline ml-12",
                          attrs: { href: _vm.$route("users.index") }
                        },
                        [_vm._v("\n\t\t\t\t\t\tUsers\n\t\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _c(
                        "inertia-link",
                        {
                          staticClass:
                            "text-white no-underline hover:underline ml-6",
                          attrs: { href: _vm.$route("customers.index") }
                        },
                        [_vm._v("\n\t\t\t\t\t\tCustomers\n\t\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _c(
                        "inertia-link",
                        {
                          staticClass:
                            "text-white no-underline hover:underline ml-6",
                          attrs: { href: "#" }
                        },
                        [_vm._v("\n\t\t\t\t\t\tServices?\n\t\t\t\t\t")]
                      ),
                      _vm._v(" "),
                      _c(
                        "inertia-link",
                        {
                          staticClass:
                            "text-white no-underline hover:underline ml-6",
                          attrs: { href: _vm.$route("adminpanel.dashboard") }
                        },
                        [_vm._v("\n\t\t\t\t\t\tDashboard\n\t\t\t\t\t")]
                      )
                    ]
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "nav",
              { staticClass: "space-x-4 text-white text-sm sm:text-base" },
              [
                !_vm.$page.isAuth
                  ? [
                      _c(
                        "inertia-link",
                        {
                          staticClass: "no-underline hover:underline",
                          attrs: { href: _vm.$route("login") }
                        },
                        [_vm._v("Login")]
                      ),
                      _vm._v(" "),
                      _c(
                        "inertia-link",
                        {
                          staticClass: "no-underline hover:underline",
                          attrs: { href: _vm.$route("register") }
                        },
                        [_vm._v("Register")]
                      )
                    ]
                  : [
                      _c("span", [_vm._v(_vm._s(_vm.$page.auth.user.name))]),
                      _vm._v(" "),
                      _c(
                        "inertia-link",
                        {
                          staticClass: "no-underline hover:underline",
                          attrs: { href: _vm.$route("logout"), method: "POST" }
                        },
                        [_vm._v("Logout")]
                      )
                    ]
              ],
              2
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("flash-messages"),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e59c811e& */ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=e59c811e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_e59c811e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Shared/Layout.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Shared/Layout.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_7a4e975b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=7a4e975b& */ "./resources/js/Pages/Shared/Layout.vue?vue&type=template&id=7a4e975b&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_7a4e975b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_7a4e975b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/Layout.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/Layout.vue?vue&type=template&id=7a4e975b&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Layout.vue?vue&type=template&id=7a4e975b& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_7a4e975b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=7a4e975b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Layout.vue?vue&type=template&id=7a4e975b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_7a4e975b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_7a4e975b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);