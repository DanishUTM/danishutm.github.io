(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      //fullname: this.$page.auth.user.name,
      fullname: "John Doe",
      dropdownCollapsed: false
    };
  },
  computed: {
    nameAcronym: function nameAcronym() {
      return this.fullname.split(" ")[0].split("")[0] + this.fullname.split(" ")[1].split("")[0];
    }
  },
  methods: {
    toggleDropdown: function toggleDropdown() {
      this.dropdownCollapsed = !this.dropdownCollapsed;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=template&id=3bb21c40&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=template&id=3bb21c40& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "bg-white border-b w-full p-4 px-4 md:px-6 text-md h-16" },
    [
      _c(
        "div",
        { staticClass: "mr-1 inline-block text-gray-500" },
        [
          _c("font-awesome-icon", {
            attrs: { icon: ["fas", "user-plus"], size: "md" }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "px-3 bg-green-400 text-white p-1 rounded-full  leading-none items-center",
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
        { staticClass: "inline-block text-gray-500" },
        [
          _c("font-awesome-icon", {
            attrs: { icon: ["fas", "key"], size: "md" }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "px-3 bg-green-400 text-white p-1 rounded-full  leading-none items-center",
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
        {
          staticClass: "inline-block float-right cursor-pointer",
          on: {
            click: function($event) {
              return _vm.toggleDropdown()
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "inline-flex text-sm text-white bg-blue-500 rounded-full h-10 w-10 items-center justify-center shadow-lg",
              attrs: { title: _vm.fullname }
            },
            [_vm._v(_vm._s(_vm.nameAcronym))]
          ),
          _vm._v(" "),
          _c("font-awesome-icon", {
            staticClass: "ml-1 text-gray-500",
            attrs: { icon: ["fas", "chevron-down"], size: "sm" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm.dropdownCollapsed
        ? _c("div", {
            staticClass: "dropdown-overlay",
            on: {
              click: function($event) {
                _vm.dropdownCollapsed = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.dropdownCollapsed
        ? _c(
            "div",
            {
              staticClass: "absolute top-12 right-3 md:right-5",
              staticStyle: { "z-index": "99999" }
            },
            [
              _c(
                "div",
                { staticClass: "mt-2 py-2 shadow-xl bg-white rounded text-sm" },
                [
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block px-6 py-2 hover:bg-blue-600 hover:text-white",
                      attrs: { href: _vm.$route("welcome") }
                    },
                    [_vm._v("Landing Page")]
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block px-6 py-2 hover:bg-blue-600 hover:text-white",
                      attrs: { href: _vm.$route("adminpanel.dashboard") }
                    },
                    [_vm._v("Dashboard")]
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block px-6 py-2 hover:bg-blue-600 hover:text-white",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Link 1")]
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block px-6 py-2 hover:bg-blue-600 hover:text-white",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Link 2")]
                  ),
                  _vm._v(" "),
                  _c(
                    "inertia-link",
                    {
                      staticClass:
                        "block px-6 py-2 hover:bg-blue-600 hover:text-white",
                      attrs: { href: "#" }
                    },
                    [_vm._v("Link 3")]
                  )
                ],
                1
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardHeader.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardHeader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardHeader_vue_vue_type_template_id_3bb21c40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardHeader.vue?vue&type=template&id=3bb21c40& */ "./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=template&id=3bb21c40&");
/* harmony import */ var _DashboardHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardHeader.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardHeader_vue_vue_type_template_id_3bb21c40___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardHeader_vue_vue_type_template_id_3bb21c40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/DashboardHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=template&id=3bb21c40&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=template&id=3bb21c40& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardHeader_vue_vue_type_template_id_3bb21c40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardHeader.vue?vue&type=template&id=3bb21c40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardHeader.vue?vue&type=template&id=3bb21c40&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardHeader_vue_vue_type_template_id_3bb21c40___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardHeader_vue_vue_type_template_id_3bb21c40___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);