<template>
  <div>
    <div class="py-1 px-8" :class="isUrl('dashboard') ? 'shadow-xl bg-blue-600' : 'hover:bg-blue-600'">
      <inertia-link class="flex items-center group py-3" :href="$route('dashboard.dashboard')">
        <div class="text-white font-semibold"><font-awesome-icon :icon="['fas', 'chart-line']" class="mr-3"/>Dashboard</div>
      </inertia-link>
    </div>
    <div class="py-1 px-8" :class="isUrl('nas') ? 'shadow-xl bg-blue-600' : 'hover:bg-blue-600'">
      <inertia-link class="flex items-center group py-3" :href="$route('dashboard.nas')">
        <div class="text-white font-semibold"><font-awesome-icon :icon="['fas', 'archive']" class="mr-3"/>Nas</div>
      </inertia-link>
    </div>
    <div class="py-1 px-8" :class="isUrl('manager') ? 'shadow-xl bg-blue-600' : 'hover:bg-blue-600'">
      <inertia-link class="flex items-center group py-3" :href="$route('dashboard.manager')">
        <div class="text-white font-semibold"><font-awesome-icon :icon="['fas', 'user-shield']" class="mr-3"/>Manager</div>
      </inertia-link>
    </div>
    <div class="py-1 px-8" :class="isUrl('service') ? 'shadow-xl bg-blue-600' : 'hover:bg-blue-600'">
      <inertia-link class="flex items-center group py-3" :href="$route('dashboard.service')">
        <div class="text-white font-semibold"><font-awesome-icon :icon="['fas', 'wifi']" class="mr-3"/>Service</div>
      </inertia-link>
    </div>
    <div class="py-1 px-8" :class="isUrl('user') ? 'shadow-xl bg-blue-600' : 'hover:bg-blue-600'">
      <inertia-link class="flex items-center group py-3" :href="$route('dashboard.user')">
        <div class="text-white font-semibold"><font-awesome-icon :icon="['fas', 'user']" class="mr-3"/>User</div>
      </inertia-link>
    </div>
    <div class="py-1 px-8" :class="isUrl('finance') ? 'shadow-xl bg-blue-600' : 'hover:bg-blue-600'">
      <inertia-link class="flex items-center group py-3" :href="$route('dashboard.finance')">
        <div class="text-white font-semibold"><font-awesome-icon :icon="['fas', 'money-check-alt']" class="mr-3"/>Finance</div>
      </inertia-link>
    </div>
    <div class="py-1 px-8" :class="isUrl('settings') ? 'shadow-xl bg-blue-600' : 'hover:bg-blue-600'">
      <inertia-link class="flex items-center group py-3" :href="$route('dashboard.settings')">
        <div class="text-white font-semibold"><font-awesome-icon :icon="['fas', 'sliders-h']" class="mr-3"/>Settings</div>
      </inertia-link>
    </div>
    <div class="absolute inset-x-0 bottom-0 py-3 px-8 shadow-xl bg-blue-600" style="width: inherit">
        <div class="text-white float-right">
          <inertia-link :href="$route('dashboard.settings')">
            <font-awesome-icon :icon="['fas', 'cog']" size="lg"/>
          </inertia-link>
          <inertia-link :href="$route('welcome')">
            <font-awesome-icon :icon="['fas', 'power-off']" size="lg" class="ml-3"/>
          </inertia-link>
        </div>
    </div>
  </div>
</template>

<script>
import Icon from '../Shared/Icon'

export default {
  components: {
    Icon,
  },
  props: {
    url: String,
  },
  methods: {
    isUrl(...urls) {
      if (urls[0] === '') {
        return this.url === ''
      }

      return urls.filter(url => this.url.startsWith(url)).length
    },
  },
}
</script>
