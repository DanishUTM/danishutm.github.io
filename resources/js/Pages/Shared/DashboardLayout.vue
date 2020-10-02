<template>
    <div id="main" class=" overflow-x-auto" :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
        <slot />
        <sidebar-menu 
            :menu="menu" 
            :width="width" 
            :widthCollapsed="widthCollapsed" 
            :theme="theme"
            :collapsed="collapsed"
            @toggle-collapse="onToggleCollapse"
            @item-click="onItemClick"/>
        <div
            v-if="isOnMobile && !collapsed"
            class="sidebar-overlay"
            @click="collapsed = true"/>
    </div>
</template>

<script>
import FlashMessages from '../Shared/FlashMessages'

export default {
  components: {
    FlashMessages,
  },
  props: {
      width: {
          type: String,
          default: '250px'
      },
      widthCollapsed: {
          type: String,
          default: '50px'
      },
      theme: {
          type: String,
          default: ''
      },
  },
  data() {
    return {
      menu: [
        {
            header: true,
            title: 'Captive Portal',
            hiddenOnCollapse: true,  
            // component: componentName
        },
        {
            to: this.$route('adminpanel.dashboard'),
            title: 'Dashboard',
            icon: 'fas fa-chart-line',
            /*
            disabled: true
            badge: {
                text: 'new',
                // class:''
            }
            */
        },
        {
            to: this.$route('adminpanel.nas'),
            title: 'Nas',
            icon: 'fas fa-archive',
        },
        {
            title: 'Manager',
            icon: 'fas fa-user-shield',
            child: [
                {
                    to: this.$route('adminpanel.manager'),
                    title: 'Sub Link 1',
                },
                {
                    to: this.$route('adminpanel.manager'),
                    title: 'Sub Link 2',
                },
                {
                    to: this.$route('adminpanel.manager'),
                    title: 'Sub Link 3',
                }
            ]
        },
        {
            title: 'Service',
            icon: 'fas fa-wifi',
            child: [
                {
                    to: this.$route('adminpanel.service'),
                    title: 'Sub Link 1',
                },
                {
                    to: this.$route('adminpanel.service'),
                    title: 'Sub Link 2',
                },
                {
                    to: this.$route('adminpanel.service'),
                    title: 'Sub Link 3',
                }
            ]
        },
        {
            title: 'User',
            icon: 'fas fa-user',
            child: [
                {
                    to: this.$route('adminpanel.user'),
                    title: 'Sub Link 1',
                },
                {
                    to: this.$route('adminpanel.user'),
                    title: 'Sub Link 2',
                },
                {
                    to: this.$route('adminpanel.user'),
                    title: 'Sub Link 3',
                }
            ]
        },
        {
            to: this.$route('adminpanel.finance'),
            title: 'Finance',
            icon: 'fas fa-money-check-alt',
        },
        {
            to: this.$route('adminpanel.settings'),
            title: 'Settings',
            icon: 'fas fa-sliders-h',
        }
      ],
      collapsed: false,
      isOnMobile: false,
    }
  },
  created () {
    this.onResize()
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    url() {
      return location.pathname.substr(1)
    },
    onToggleCollapse (collapsed) {
      this.collapsed = collapsed
    },
    onItemClick (event, item, node) {    
      if(item.to !== undefined){
        this.$inertia.visit(item.to)
      }
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  },
}
</script>

<style>
body {
  background-color: #edf2f7;
}
#main {
  padding-left: 250px;
  transition: 0.3s ease;
}
#main.collapsed {
  padding-left: 50px;
}
#main.onmobile {
  padding-left: 50px;
}

.v-sidebar-menu .vsm--toggle-btn {
    background-color: rgba(28, 100, 242) !important;
}

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
    background-color: rgba(28, 100, 242) !important; 
}

.v-sidebar-menu {
    background-color: rgba(63, 131, 248) !important;
}

.v-sidebar-menu .vsm--dropdown .vsm--list {
    background-color: rgba(118, 169, 250) !important; 
}

.v-sidebar-menu .vsm--header {
    color: white;
    font-size: 20px;
    font-weight: 600;
    padding: 10px;
    white-space: nowrap;
    text-transform: uppercase;
}

.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}

.dropdown-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 9999;
}
</style>