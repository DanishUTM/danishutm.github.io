(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_DashboardLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/DashboardLayout */ "./resources/js/Pages/Shared/DashboardLayout.vue");
/* harmony import */ var _Shared_DashboardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/DashboardHeader */ "./resources/js/Pages/Shared/DashboardHeader.vue");
/* harmony import */ var _Shared_Charts_LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/Charts/LineChart */ "./resources/js/Pages/Shared/Charts/LineChart.vue");
/* harmony import */ var _Shared_Charts_BarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Charts/BarChart */ "./resources/js/Pages/Shared/Charts/BarChart.vue");
/* harmony import */ var _Shared_Charts_RadarChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Charts/RadarChart */ "./resources/js/Pages/Shared/Charts/RadarChart.vue");
/* harmony import */ var _Shared_Charts_PieChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/Charts/PieChart */ "./resources/js/Pages/Shared/Charts/PieChart.vue");
/* harmony import */ var _Shared_Charts_DoughnutChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/Charts/DoughnutChart */ "./resources/js/Pages/Shared/Charts/DoughnutChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Layout: _Shared_DashboardLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardHeader: _Shared_DashboardHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    LineChart: _Shared_Charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    BarChart: _Shared_Charts_BarChart__WEBPACK_IMPORTED_MODULE_3__["default"],
    RadarChart: _Shared_Charts_RadarChart__WEBPACK_IMPORTED_MODULE_4__["default"],
    PieChart: _Shared_Charts_PieChart__WEBPACK_IMPORTED_MODULE_5__["default"],
    DoughnutChart: _Shared_Charts_DoughnutChart__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      datacollection: null
    };
  },
  mounted: function mounted() {
    this.fillData();
  },
  methods: {
    fillData: function fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [{
          label: 'Data One',
          backgroundColor: '#e74c3c',
          data: [this.getRandomInt(), this.getRandomInt()]
        }, {
          label: 'Data Two',
          backgroundColor: '#3498db',
          data: [this.getRandomInt(), this.getRandomInt()]
        }]
      };
    },
    getRandomInt: function getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/BarChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Charts/BarChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  data: function data() {
    return {
      chartdata: {
        labels: ['January', 'February', 'March'],
        datasets: [{
          label: 'Data One',
          backgroundColor: '#e74c3c',
          data: [40, 35, 25]
        }, {
          label: 'Data Two',
          backgroundColor: '#3498db',
          data: [60, 10, 45]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.chartdata, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/DoughnutChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Charts/DoughnutChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Doughnut"],
  data: function data() {
    return {
      chartdata: {
        labels: ['January', 'February', 'March'],
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: ['#e74c3c', '#3498db', '#2ecc71']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.chartdata, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/LineChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Charts/LineChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//

var reactiveProp = vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
  mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted: function mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/PieChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Charts/PieChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  data: function data() {
    return {
      chartdata: {
        labels: ['January', 'February', 'March'],
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: ['#e74c3c', '#3498db', '#2ecc71']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.chartdata, this.options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/RadarChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/Charts/RadarChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Radar"],
  data: function data() {
    return {
      chartdata: {
        labels: ['January', 'February', 'March'],
        datasets: [{
          label: 'Data One',
          backgroundColor: '#e74c3c',
          data: [40, 35, 25]
        }, {
          label: 'Data Two',
          backgroundColor: '#3498db',
          data: [60, 10, 45]
        }]
      },
      options: {
        scale: {
          angleLines: {
            display: false
          }
        }
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.chartdata, this.options);
  }
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FlashMessages: _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    width: {
      type: String,
      "default": '250px'
    },
    widthCollapsed: {
      type: String,
      "default": '50px'
    },
    theme: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      menu: [{
        header: true,
        title: 'Captive Portal',
        hiddenOnCollapse: true // component: componentName

      }, {
        to: this.$route('adminpanel.dashboard'),
        title: 'Dashboard',
        icon: 'fas fa-chart-line'
        /*
        disabled: true
        badge: {
            text: 'new',
            // class:''
        }
        */

      }, {
        to: this.$route('adminpanel.nas'),
        title: 'Nas',
        icon: 'fas fa-archive'
      }, {
        title: 'Manager',
        icon: 'fas fa-user-shield',
        child: [{
          to: this.$route('adminpanel.manager'),
          title: 'Sub Link 1'
        }, {
          to: this.$route('adminpanel.manager'),
          title: 'Sub Link 2'
        }, {
          to: this.$route('adminpanel.manager'),
          title: 'Sub Link 3'
        }]
      }, {
        title: 'Service',
        icon: 'fas fa-wifi',
        child: [{
          to: this.$route('adminpanel.service'),
          title: 'Sub Link 1'
        }, {
          to: this.$route('adminpanel.service'),
          title: 'Sub Link 2'
        }, {
          to: this.$route('adminpanel.service'),
          title: 'Sub Link 3'
        }]
      }, {
        title: 'User',
        icon: 'fas fa-user',
        child: [{
          to: this.$route('adminpanel.user'),
          title: 'Sub Link 1'
        }, {
          to: this.$route('adminpanel.user'),
          title: 'Sub Link 2'
        }, {
          to: this.$route('adminpanel.user'),
          title: 'Sub Link 3'
        }]
      }, {
        to: this.$route('adminpanel.finance'),
        title: 'Finance',
        icon: 'fas fa-money-check-alt'
      }, {
        to: this.$route('adminpanel.settings'),
        title: 'Settings',
        icon: 'fas fa-sliders-h'
      }],
      collapsed: false,
      isOnMobile: false
    };
  },
  created: function created() {
    this.onResize();
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    url: function url() {
      return location.pathname.substr(1);
    },
    onToggleCollapse: function onToggleCollapse(collapsed) {
      this.collapsed = collapsed;
    },
    onItemClick: function onItemClick(event, item, node) {
      if (item.to !== undefined) {
        this.$inertia.visit(item.to);
      }
    },
    onResize: function onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "canvas{\n  margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: #edf2f7;\n}\n#main {\n  padding-left: 250px;\n  transition: 0.3s ease;\n}\n#main.collapsed {\n  padding-left: 50px;\n}\n#main.onmobile {\n  padding-left: 50px;\n}\n.v-sidebar-menu .vsm--toggle-btn {\n  background-color: rgba(28, 100, 242) !important;\n}\n.v-sidebar-menu .vsm--link_level-1 .vsm--icon {\n  background-color: rgba(28, 100, 242) !important;\n}\n.v-sidebar-menu {\n  background-color: rgba(63, 131, 248) !important;\n}\n.v-sidebar-menu .vsm--dropdown .vsm--list {\n  background-color: rgba(118, 169, 250) !important;\n}\n.v-sidebar-menu .vsm--header {\n  color: white;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 10px;\n  white-space: nowrap;\n  text-transform: uppercase;\n}\n.sidebar-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.5;\n  z-index: 900;\n}\n.dropdown-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.5;\n  z-index: 9999;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-chartjs/es/BaseCharts.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-chartjs/es/BaseCharts.js ***!
  \***************************************************/
/*! exports provided: generateChart, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return generateChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return HorizontalBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return Doughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return PolarArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return Radar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return Bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return Scatter; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

function generateChart(chartId, chartType) {
  return {
    render: function render(createElement) {
      return createElement('div', {
        style: this.styles,
        class: this.cssClasses
      }, [createElement('canvas', {
        attrs: {
          id: this.chartId,
          width: this.width,
          height: this.height
        },
        ref: 'canvas'
      })]);
    },
    props: {
      chartId: {
        default: chartId,
        type: String
      },
      width: {
        default: 400,
        type: Number
      },
      height: {
        default: 400,
        type: Number
      },
      cssClasses: {
        type: String,
        default: ''
      },
      styles: {
        type: Object
      },
      plugins: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        _chart: null,
        _plugins: this.plugins
      };
    },
    methods: {
      addPlugin: function addPlugin(plugin) {
        this.$data._plugins.push(plugin);
      },
      generateLegend: function generateLegend() {
        if (this.$data._chart) {
          return this.$data._chart.generateLegend();
        }
      },
      renderChart: function renderChart(data, options) {
        if (this.$data._chart) this.$data._chart.destroy();
        if (!this.$refs.canvas) throw new Error('Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components');
        this.$data._chart = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.$refs.canvas.getContext('2d'), {
          type: chartType,
          data: data,
          options: options,
          plugins: this.$data._plugins
        });
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
    }
  };
}
var Bar = generateChart('bar-chart', 'bar');
var HorizontalBar = generateChart('horizontalbar-chart', 'horizontalBar');
var Doughnut = generateChart('doughnut-chart', 'doughnut');
var Line = generateChart('line-chart', 'line');
var Pie = generateChart('pie-chart', 'pie');
var PolarArea = generateChart('polar-chart', 'polarArea');
var Radar = generateChart('radar-chart', 'radar');
var Bubble = generateChart('bubble-chart', 'bubble');
var Scatter = generateChart('scatter-chart', 'scatter');
/* harmony default export */ __webpack_exports__["default"] = ({
  Bar: Bar,
  HorizontalBar: HorizontalBar,
  Doughnut: Doughnut,
  Line: Line,
  Pie: Pie,
  PolarArea: PolarArea,
  Radar: Radar,
  Bubble: Bubble,
  Scatter: Scatter
});

/***/ }),

/***/ "./node_modules/vue-chartjs/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-chartjs/es/index.js ***!
  \**********************************************/
/*! exports provided: default, VueCharts, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, mixins, generateChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueCharts", function() { return VueCharts; });
/* harmony import */ var _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/index.js */ "./node_modules/vue-chartjs/es/mixins/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BaseCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseCharts */ "./node_modules/vue-chartjs/es/BaseCharts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"]; });



var VueCharts = {
  Bar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"],
  HorizontalBar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"],
  Doughnut: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"],
  Line: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"],
  Pie: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"],
  PolarArea: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"],
  Radar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"],
  Bubble: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"],
  Scatter: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"],
  mixins: _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  generateChart: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"],
  render: function render() {
    return console.error('[vue-chartjs]: This is not a vue component. It is the whole object containing all vue components. Please import the named export or access the components over the dot notation. For more info visit https://vue-chartjs.org/#/home?id=quick-start');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VueCharts);


/***/ }),

/***/ "./node_modules/vue-chartjs/es/mixins/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-chartjs/es/mixins/index.js ***!
  \*****************************************************/
/*! exports provided: reactiveData, reactiveProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveData", function() { return reactiveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveProp", function() { return reactiveProp; });
function dataHandler(newData, oldData) {
  if (oldData) {
    var chart = this.$data._chart;
    var newDatasetLabels = newData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldDatasetLabels = oldData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldLabels = JSON.stringify(oldDatasetLabels);
    var newLabels = JSON.stringify(newDatasetLabels);

    if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
      newData.datasets.forEach(function (dataset, i) {
        var oldDatasetKeys = Object.keys(oldData.datasets[i]);
        var newDatasetKeys = Object.keys(dataset);
        var deletionKeys = oldDatasetKeys.filter(function (key) {
          return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
        });
        deletionKeys.forEach(function (deletionKey) {
          delete chart.data.datasets[i][deletionKey];
        });

        for (var attribute in dataset) {
          if (dataset.hasOwnProperty(attribute)) {
            chart.data.datasets[i][attribute] = dataset[attribute];
          }
        }
      });

      if (newData.hasOwnProperty('labels')) {
        chart.data.labels = newData.labels;
        this.$emit('labels:update');
      }

      if (newData.hasOwnProperty('xLabels')) {
        chart.data.xLabels = newData.xLabels;
        this.$emit('xlabels:update');
      }

      if (newData.hasOwnProperty('yLabels')) {
        chart.data.yLabels = newData.yLabels;
        this.$emit('ylabels:update');
      }

      chart.update();
      this.$emit('chart:update');
    } else {
      if (chart) {
        chart.destroy();
        this.$emit('chart:destroy');
      }

      this.renderChart(this.chartData, this.options);
      this.$emit('chart:render');
    }
  } else {
    if (this.$data._chart) {
      this.$data._chart.destroy();

      this.$emit('chart:destroy');
    }

    this.renderChart(this.chartData, this.options);
    this.$emit('chart:render');
  }
}

var reactiveData = {
  data: function data() {
    return {
      chartData: null
    };
  },
  watch: {
    'chartData': dataHandler
  }
};
var reactiveProp = {
  props: {
    chartData: {
      type: Object,
      required: true,
      default: function _default() {}
    }
  },
  watch: {
    'chartData': dataHandler
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reactiveData: reactiveData,
  reactiveProp: reactiveProp
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=template&id=f46ab3c0&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=template&id=f46ab3c0& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "layout",
    [
      _c("dashboard-header"),
      _vm._v(" "),
      _c("main", [
        _c("div", { staticClass: "flex flex-wrap mx-auto mt-6" }, [
          _c("div", { staticClass: "w-full px-4 md:px-6" }, [
            _c("h1", { staticClass: "font-semibold text-3xl" }, [
              _vm._v("Dashboard")
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex flex-wrap align-items-stretch mx-auto md:px-4 mt-6"
          },
          [
            _c("div", { staticClass: "w-full md:w-2/5 md:px-2 mb-6" }, [
              _c(
                "section",
                {
                  staticClass:
                    "flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg"
                },
                [
                  _c(
                    "header",
                    {
                      staticClass:
                        "font-semibold bg-blue-500 text-white py-4 px-6"
                    },
                    [_vm._v("\n\t\t\t\t\t\t\tLine Chart\n\t\t\t\t\t\t")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full p-6" }, [
                    _c(
                      "div",
                      { staticClass: "container" },
                      [
                        _c("line-chart", {
                          attrs: { "chart-data": _vm.datacollection }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-full md:w-3/5 md:px-2 mb-6" }, [
              _c(
                "section",
                {
                  staticClass:
                    "flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg"
                },
                [
                  _c(
                    "header",
                    {
                      staticClass:
                        "font-semibold bg-blue-500 text-white py-4 px-6"
                    },
                    [_vm._v("\n\t\t\t\t\t\t\tBar Chart\n\t\t\t\t\t\t")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full p-6" }, [
                    _c(
                      "div",
                      { staticClass: "container" },
                      [_c("bar-chart")],
                      1
                    )
                  ])
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-wrap mx-auto md:px-4" }, [
          _c("div", { staticClass: "w-full md:w-1/3 md:px-2 mb-6" }, [
            _c(
              "section",
              {
                staticClass:
                  "flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg"
              },
              [
                _c(
                  "header",
                  {
                    staticClass:
                      "font-semibold bg-blue-500 text-white py-4 px-6"
                  },
                  [_vm._v("\n\t\t\t\t\t\t\tRadar Chart\n\t\t\t\t\t\t")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full p-6" }, [
                  _c(
                    "div",
                    { staticClass: "container" },
                    [_c("radar-chart")],
                    1
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-full md:w-1/3 md:px-2 mb-6" }, [
            _c(
              "section",
              {
                staticClass:
                  "flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg"
              },
              [
                _c(
                  "header",
                  {
                    staticClass:
                      "font-semibold bg-blue-500 text-white py-4 px-6"
                  },
                  [_vm._v("\n\t\t\t\t\t\t\tPie Chart\n\t\t\t\t\t\t")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full p-6" }, [
                  _c("div", { staticClass: "container" }, [_c("pie-chart")], 1)
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-full md:w-1/3 md:px-2 mb-6" }, [
            _c(
              "section",
              {
                staticClass:
                  "flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg"
              },
              [
                _c(
                  "header",
                  {
                    staticClass:
                      "font-semibold bg-blue-500 text-white py-4 px-6"
                  },
                  [_vm._v("\n\t\t\t\t\t\t\tDonut Chart\n\t\t\t\t\t\t")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-full p-6" }, [
                  _c(
                    "div",
                    { staticClass: "container" },
                    [_c("doughnut-chart")],
                    1
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-wrap mx-auto mb-3" }, [
          _c("div", { staticClass: "w-full px-4 md:px-6" }, [
            _c("p", { staticClass: "text-xl pb-3 flex items-center" }, [
              _vm._v("Latest Reports")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-wrap mx-auto mb-6" }, [
          _c("div", { staticClass: "w-full md:px-6" }, [
            _c("div", { staticClass: "bg-white overflow-auto" }, [
              _c("table", { staticClass: "min-w-full bg-white" }, [
                _c("thead", { staticClass: "bg-blue-500 text-white" }, [
                  _c("tr", [
                    _c(
                      "th",
                      {
                        staticClass:
                          "w-1/3 text-left py-4 px-4 font-semibold text-sm"
                      },
                      [_vm._v("First Name")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass:
                          "w-1/3 text-left py-4 px-4 font-semibold text-sm"
                      },
                      [_vm._v("Last Name")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-left py-4 px-4 font-semibold text-sm"
                      },
                      [_vm._v("Phone")]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        staticClass: "text-left py-4 px-4 font-semibold text-sm"
                      },
                      [_vm._v("Email")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tbody", { staticClass: "text-gray-700" }, [
                  _c("tr", [
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Lian")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Smith")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "tel:622322662" }
                        },
                        [_vm._v("622322662")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "mailto:jonsmith@mail.com" }
                        },
                        [_vm._v("jonsmith@mail.com")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "bg-gray-200" }, [
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Emma")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Johnson")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "tel:622322662" }
                        },
                        [_vm._v("622322662")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "mailto:jonsmith@mail.com" }
                        },
                        [_vm._v("jonsmith@mail.com")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Oliver")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Williams")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "tel:622322662" }
                        },
                        [_vm._v("622322662")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "mailto:jonsmith@mail.com" }
                        },
                        [_vm._v("jonsmith@mail.com")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "bg-gray-200" }, [
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Isabella")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Brown")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "tel:622322662" }
                        },
                        [_vm._v("622322662")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "mailto:jonsmith@mail.com" }
                        },
                        [_vm._v("jonsmith@mail.com")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Lian")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Smith")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "tel:622322662" }
                        },
                        [_vm._v("622322662")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "mailto:jonsmith@mail.com" }
                        },
                        [_vm._v("jonsmith@mail.com")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "bg-gray-200" }, [
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Emma")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Johnson")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "tel:622322662" }
                        },
                        [_vm._v("622322662")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "mailto:jonsmith@mail.com" }
                        },
                        [_vm._v("jonsmith@mail.com")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Oliver")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Williams")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "tel:622322662" }
                        },
                        [_vm._v("622322662")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "mailto:jonsmith@mail.com" }
                        },
                        [_vm._v("jonsmith@mail.com")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", { staticClass: "bg-gray-200" }, [
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Isabella")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "w-1/3 text-left py-3 px-4" }, [
                      _vm._v("Brown")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "tel:622322662" }
                        },
                        [_vm._v("622322662")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-left py-3 px-4" }, [
                      _c(
                        "a",
                        {
                          staticClass: "hover:text-blue-500",
                          attrs: { href: "mailto:jonsmith@mail.com" }
                        },
                        [_vm._v("jonsmith@mail.com")]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=template&id=feb51806&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=template&id=feb51806& ***!
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
    {
      staticClass: " overflow-x-auto",
      class: [{ collapsed: _vm.collapsed }, { onmobile: _vm.isOnMobile }],
      attrs: { id: "main" }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("sidebar-menu", {
        attrs: {
          menu: _vm.menu,
          width: _vm.width,
          widthCollapsed: _vm.widthCollapsed,
          theme: _vm.theme,
          collapsed: _vm.collapsed
        },
        on: {
          "toggle-collapse": _vm.onToggleCollapse,
          "item-click": _vm.onItemClick
        }
      }),
      _vm._v(" "),
      _vm.isOnMobile && !_vm.collapsed
        ? _c("div", {
            staticClass: "sidebar-overlay",
            on: {
              click: function($event) {
                _vm.collapsed = true
              }
            }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Dashboard/Dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Dashboard.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_f46ab3c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=f46ab3c0& */ "./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=template&id=f46ab3c0&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_f46ab3c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_f46ab3c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=template&id=f46ab3c0&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=template&id=f46ab3c0& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_f46ab3c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=f46ab3c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Dashboard.vue?vue&type=template&id=f46ab3c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_f46ab3c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_f46ab3c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/BarChart.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/BarChart.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BarChart.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/Charts/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/Charts/BarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/BarChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/BarChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/BarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/DoughnutChart.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/DoughnutChart.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoughnutChart.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/Charts/DoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/Charts/DoughnutChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/DoughnutChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/DoughnutChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DoughnutChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/DoughnutChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/LineChart.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/LineChart.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/Charts/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/Charts/LineChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/LineChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/LineChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LineChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/LineChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/PieChart.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/PieChart.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PieChart.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/Charts/PieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/Charts/PieChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/PieChart.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/PieChart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PieChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/PieChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PieChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/RadarChart.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/RadarChart.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadarChart.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/Charts/RadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _RadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/Charts/RadarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/Charts/RadarChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Charts/RadarChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RadarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/Charts/RadarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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



/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardLayout.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardLayout.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardLayout_vue_vue_type_template_id_feb51806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=template&id=feb51806& */ "./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=template&id=feb51806&");
/* harmony import */ var _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DashboardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=style&index=0&lang=css& */ "./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardLayout_vue_vue_type_template_id_feb51806___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardLayout_vue_vue_type_template_id_feb51806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Shared/DashboardLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=template&id=feb51806&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=template&id=feb51806& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_feb51806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=template&id=feb51806& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Shared/DashboardLayout.vue?vue&type=template&id=feb51806&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_feb51806___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_feb51806___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);