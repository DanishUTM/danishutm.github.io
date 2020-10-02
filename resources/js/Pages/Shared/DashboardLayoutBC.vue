<template>
  <div>
    <div class="flex flex-col">
      <div class="h-screen flex flex-col">
        <div class="md:flex flex-shrink-0">
          <div class="md:flex-shrink-0 md:w-56 px-6 py-4 text-white font-semibold bg-blue-500 text-xl">
            Captive Portal
            <div class="sm:hidden text-white float-right">
              <font-awesome-icon :icon="['fas', 'user-plus']"/>
              <button type="button" class="text-sm px-3 bg-green-400 text-white p-1 rounded-full  leading-none items-center">101</button>
              <font-awesome-icon :icon="['fas', 'key']" class="ml-3"/>
              <button type="button" class="text-sm px-3 bg-green-400 text-white p-1 rounded-full  leading-none items-center">57</button>
              <font-awesome-icon :icon="['fas', 'bars']" class="ml-3"/>
            </div>
          </div>
          <div class="hidden sm:block bg-white border-b w-full p-4 md:py-0 px-6 text-sm md:text-md h-16">
            <div class="mt-5 mr-3 inline-block text-gray-500">
              <font-awesome-icon :icon="['fas', 'user-plus']" size="lg"/>
              <button type="button" class="px-4 bg-green-400 text-white p-2 rounded-full  leading-none items-center">101</button>
            </div>
            <div class="mt-5 inline-block text-gray-500">
              <font-awesome-icon :icon="['fas', 'key']" size="lg"/>
              <button type="button" class="px-4 bg-green-400 text-white p-2 rounded-full  leading-none items-center">57</button>
            </div>
            <div class="mt-5 inline-block float-right">{{ $page.auth.user.name }}<font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-4 text-gray-500"/></div>
          </div>
        </div>
        <div class="flex flex-grow overflow-hidden">
          <main-menu :url="url()" class="flex-shrink-0 w-56 hidden md:block overflow-y-auto text-white bg-blue-500"/>
          <div class="flex-1 overflow-y-auto" style="background-color: #edf2f7;" scroll-region>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlashMessages from '../Shared/FlashMessages'
import MainMenu from '../Shared/MainMenuBC'

export default {
  components: {
    FlashMessages,
    MainMenu,
  },
  methods: {
    url() {
      return location.pathname.substr(1)
    },
  },
}
</script>
