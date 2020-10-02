import { InertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartLine, faUser, faUserShield, faWifi, faMoneyCheckAlt, faSlidersH, faArchive, faUserPlus, faKey, faChevronDown, faPowerOff, faCog, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSidebarMenu from 'vue-sidebar-menu'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Vue from 'vue'

library.add(faChartLine, faUser, faUserShield, faWifi, faMoneyCheckAlt, faSlidersH, faArchive, faUserPlus, faKey, faChevronDown, faPowerOff, faCog, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)
window.Swal = require('sweetalert2')
window.Chart = require('chart.js')

Vue.prototype.$route = (...args) => route(...args).url()
Vue.use(InertiaApp)
Vue.use(VueSidebarMenu)

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 0,

  // The color of the progress bar.
  color: '#29d',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: false,
})

const app = document.getElementById('app')

new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)