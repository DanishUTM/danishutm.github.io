(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/StudyVue.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/StudyVue.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    //User created Vue Components
    'todo-item': {
      template: '\
					<li>\
					{{ title }}\
					<button class="button bg-white" v-on:click="$emit(\'remove\')">Remove</button>\
					</li>\
				',
      props: ['title']
    },
    'button-counter': {
      data: function data() {
        return {
          count: 0
        };
      },
      template: '<button class="button bg-white" v-on:click="count++">You clicked me {{ count }} times.</button>'
    },
    'blog-post': {
      props: ['post'],
      template: "\n\t\t\t\t\t<div class=\"blog-post\">\n\t\t\t\t\t<h3>{{ post.title }}</h3>\n\t\t\t\t\t<div v-html=\"post.content\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t"
    }
  },
  data: function data() {
    return {
      message: 'Danish Rasali',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      newTodoText: '',
      todos: [{
        id: 1,
        title: 'Do the dishes'
      }, {
        id: 2,
        title: 'Take out the trash'
      }, {
        id: 3,
        title: 'Mow the lawn'
      }],
      nextTodoId: 4,
      name: "Danish",
      address: "Rumag",
      checked: false,
      picked: null,
      selected: null,
      multiSelect: [],
      options: [{
        text: 'One',
        value: 'A'
      }, {
        text: 'Two',
        value: 'B'
      }, {
        text: 'Three',
        value: 'C'
      }],
      option: {
        text: null,
        value: null
      },
      multiSelect2: [],
      posts: [{
        id: 1,
        title: 'My First Post',
        content: 'Ahoy! \'Tis be me first post, arr arr arr!'
      }, {
        id: 2,
        title: 'My Second Post Mateys!',
        content: 'Another post by meself on tis blessed o\' days, more will come, arr arr arr!'
      }, {
        id: 3,
        title: 'My Last Post :(',
        content: '\'tis me last post, I lost all th\' doubloons'
      }],
      post: {
        id: null,
        title: null,
        content: null
      }
    };
  },
  computed: {
    reversedMessageComputed: function reversedMessageComputed() {
      return this.message.split('').reverse().join('');
    },
    nowComputed: function nowComputed() {
      return Date.now();
    }
  },
  methods: {
    reverseMessageMethod: function reverseMessageMethod() {
      return this.message.split('').reverse().join('');
    },
    nowMethod: function nowMethod() {
      return Date.now();
    },
    addNewTodo: function addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/StudyVue.vue?vue&type=template&id=32b68326&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/StudyVue.vue?vue&type=template&id=32b68326& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c("main", { staticClass: "bg-blue-400", attrs: { id: "main" } }, [
    _c("div", { attrs: { id: "computedvsmethod-example" } }, [
      _c("p", { attrs: { id: "example" } }, [
        _vm._v('Original message: "' + _vm._s(_vm.message) + '"')
      ]),
      _vm._v(" "),
      _c("p", { attrs: { id: "elpmaxeC" } }, [
        _vm._v(
          'Computed reversed message: "' +
            _vm._s(_vm.reversedMessageComputed) +
            '"'
        )
      ]),
      _vm._v(" "),
      _c("p", { attrs: { id: "elpmaxeM" } }, [
        _vm._v(
          'Methodical reversed message: "' +
            _vm._s(_vm.reverseMessageMethod()) +
            '"'
        )
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", { attrs: { id: "nowC" } }, [
        _vm._v('Computed now: "' + _vm._s(_vm.nowComputed) + '"')
      ]),
      _vm._v(" "),
      _c("p", { attrs: { id: "nowM" } }, [
        _vm._v('Methodical now: "' + _vm._s(_vm.nowMethod()) + '"')
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { attrs: { id: "todo-list-example" } }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addNewTodo($event)
            }
          }
        },
        [
          _c("label", { attrs: { for: "new-todo" } }, [_vm._v("Add a todo")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newTodoText,
                expression: "newTodoText"
              }
            ],
            attrs: { id: "new-todo", placeholder: "E.g. Feed the cat" },
            domProps: { value: _vm.newTodoText },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.newTodoText = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("button", { staticClass: "button bg-white" }, [_vm._v("Add")])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        _vm._l(_vm.todos, function(todo, index) {
          return _c("todo-item", {
            key: todo.id,
            tag: "li",
            attrs: { title: todo.title },
            on: {
              remove: function($event) {
                return _vm.todos.splice(index, 1)
              }
            }
          })
        }),
        1
      )
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { attrs: { id: "forminput" } }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
            }
          }
        },
        [
          _c("p", [_vm._v("This your name: " + _vm._s(_vm.name))]),
          _vm._v(" "),
          _c("p", [_vm._v("This your address: " + _vm._s(_vm.address))]),
          _vm._v(" "),
          _c("label", { attrs: { for: "name" } }, [_vm._v("Name:")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name"
              }
            ],
            attrs: { id: "name" },
            domProps: { value: _vm.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("label", { attrs: { for: "address" } }, [_vm._v("Address:")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.lazy",
                value: _vm.address,
                expression: "address",
                modifiers: { lazy: true }
              }
            ],
            attrs: { id: "address" },
            domProps: { value: _vm.address },
            on: {
              change: function($event) {
                _vm.address = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.checked,
                expression: "checked"
              }
            ],
            attrs: { type: "checkbox", id: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.checked)
                ? _vm._i(_vm.checked, null) > -1
                : _vm.checked
            },
            on: {
              change: function($event) {
                var $$a = _vm.checked,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.checked = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.checked = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.checked = $$c
                }
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "checkbox" } }, [
            _vm._v(_vm._s(_vm.checked))
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.picked,
                expression: "picked"
              }
            ],
            attrs: { type: "radio", id: "one", value: "One" },
            domProps: { checked: _vm._q(_vm.picked, "One") },
            on: {
              change: function($event) {
                _vm.picked = "One"
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "one" } }, [_vm._v("One")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.picked,
                expression: "picked"
              }
            ],
            attrs: { type: "radio", id: "two", value: "Two" },
            domProps: { checked: _vm._q(_vm.picked, "Two") },
            on: {
              change: function($event) {
                _vm.picked = "Two"
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "two" } }, [_vm._v("Two")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("span", [_vm._v("Picked: " + _vm._s(_vm.picked))]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selected,
                  expression: "selected"
                }
              ],
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
                  _vm.selected = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { disabled: "", value: "" } }, [
                _vm._v("Please select one")
              ]),
              _vm._v(" "),
              _c("option", [_vm._v("A")]),
              _vm._v(" "),
              _c("option", [_vm._v("B")]),
              _vm._v(" "),
              _c("option", [_vm._v("C")])
            ]
          ),
          _vm._v(" "),
          _c("span", [_vm._v("Selected: " + _vm._s(_vm.selected))]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.multiSelect,
                  expression: "multiSelect"
                }
              ],
              attrs: { multiple: "" },
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
                  _vm.multiSelect = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", [_vm._v("A")]),
              _vm._v(" "),
              _c("option", [_vm._v("B")]),
              _vm._v(" "),
              _c("option", [_vm._v("C")])
            ]
          ),
          _vm._v(" "),
          _c("span", [_vm._v("Selected: " + _vm._s(_vm.multiSelect))]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.multiSelect2,
                  expression: "multiSelect2"
                }
              ],
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
                  _vm.multiSelect2 = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            _vm._l(_vm.options, function(option, index) {
              return _c(
                "option",
                { key: index, domProps: { value: option.value } },
                [_vm._v("\n\t\t\t\t" + _vm._s(option.text) + "\n\t\t\t")]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("span", [_vm._v("Selected: " + _vm._s(_vm.multiSelect2))]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("button", { staticClass: "button bg-white" }, [_vm._v("Add")])
        ]
      )
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "vuecomponents" } },
      [
        _c("button-counter"),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm._l(_vm.posts, function(post) {
          return _c("blog-post", { key: post.id, attrs: { post: post } })
        })
      ],
      2
    )
  ])
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

/***/ "./resources/js/Pages/StudyVue.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/StudyVue.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StudyVue_vue_vue_type_template_id_32b68326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudyVue.vue?vue&type=template&id=32b68326& */ "./resources/js/Pages/StudyVue.vue?vue&type=template&id=32b68326&");
/* harmony import */ var _StudyVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudyVue.vue?vue&type=script&lang=js& */ "./resources/js/Pages/StudyVue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StudyVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StudyVue_vue_vue_type_template_id_32b68326___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StudyVue_vue_vue_type_template_id_32b68326___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/StudyVue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/StudyVue.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/StudyVue.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./StudyVue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/StudyVue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/StudyVue.vue?vue&type=template&id=32b68326&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/StudyVue.vue?vue&type=template&id=32b68326& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyVue_vue_vue_type_template_id_32b68326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./StudyVue.vue?vue&type=template&id=32b68326& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/StudyVue.vue?vue&type=template&id=32b68326&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyVue_vue_vue_type_template_id_32b68326___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudyVue_vue_vue_type_template_id_32b68326___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);