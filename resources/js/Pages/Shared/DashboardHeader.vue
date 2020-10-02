<template>
	<div class="bg-white border-b w-full p-4 px-4 md:px-6 text-md h-16">
		<div class="mr-1 inline-block text-gray-500">
			<font-awesome-icon :icon="['fas', 'user-plus']" size="md"/>
			<button type="button" class="px-3 bg-green-400 text-white p-1 rounded-full  leading-none items-center">101</button>
		</div>
		<div class="inline-block text-gray-500">
			<font-awesome-icon :icon="['fas', 'key']" size="md"/>
			<button type="button" class="px-3 bg-green-400 text-white p-1 rounded-full  leading-none items-center">57</button>
		</div>
		<div class="inline-block float-right cursor-pointer" @click="toggleDropdown()">
			<div class="inline-flex text-sm text-white bg-blue-500 rounded-full h-10 w-10 items-center justify-center shadow-lg" v-bind:title="fullname">{{ nameAcronym }}</div>
			<font-awesome-icon :icon="['fas', 'chevron-down']" size="sm" class="ml-1 text-gray-500"/>
		</div>
		<div
            v-if="dropdownCollapsed"
            class="dropdown-overlay"
            @click="dropdownCollapsed = false"/>
		<div 
			v-if="dropdownCollapsed"
			class="absolute top-12 right-3 md:right-5"
			style="z-index: 99999;">
			<div class="mt-2 py-2 shadow-xl bg-white rounded text-sm">
				<!-- <inertia-link :href="$route('welcome')" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Landing Page</inertia-link>
				<inertia-link :href="$route('users.index')" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Users</inertia-link>
				<inertia-link :href="$route('customers.index')" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Customers</inertia-link>
				<inertia-link href="#" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Services?</inertia-link>
				<inertia-link :href="$route('adminpanel.dashboard')" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Dashboard</inertia-link>
				<inertia-link :href="$route('logout')" class="block px-6 py-2 hover:bg-blue-600 hover:text-white" method="POST">Logout</inertia-link> -->
				<inertia-link :href="$route('welcome')" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Landing Page</inertia-link>
				<inertia-link :href="$route('adminpanel.dashboard')" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Dashboard</inertia-link>
				<inertia-link href="#" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Link 1</inertia-link>
				<inertia-link href="#" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Link 2</inertia-link>
				<inertia-link href="#" class="block px-6 py-2 hover:bg-blue-600 hover:text-white">Link 3</inertia-link>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
		data() {
			return {
				//fullname: this.$page.auth.user.name,
				fullname: "John Doe",
				dropdownCollapsed: false
			}
		},
		computed: {
			nameAcronym: function () {
				return this.fullname.split(" ")[0].split("")[0] + this.fullname.split(" ")[1].split("")[0]
			},
		},
		methods: {
			toggleDropdown: function () {
				this.dropdownCollapsed = !this.dropdownCollapsed
			}
		}
	}
</script>