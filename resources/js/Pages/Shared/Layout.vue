<template>
	<div class="bg-gray-100 h-screen antialiased leading-none font-sans">
		<header class="bg-blue-500 py-6">
			<div class="container mx-auto flex justify-between items-center px-6">
				<div>
					<inertia-link :href="$route('welcome')" class="text-lg font-semibold text-gray-100 no-underline">
						{{ $page.app.name }}
					</inertia-link>
					<template v-if="$page.isAuth">
						<inertia-link :href="$route('users.index')" class="text-white no-underline hover:underline ml-12">
							Users
						</inertia-link>
						<inertia-link :href="$route('customers.index')" class="text-white no-underline hover:underline ml-6">
							Customers
						</inertia-link>
						<inertia-link href="#" class="text-white no-underline hover:underline ml-6">
							Services?
						</inertia-link>
						<inertia-link :href="$route('adminpanel.dashboard')" class="text-white no-underline hover:underline ml-6">
							Dashboard
						</inertia-link>
					</template>
				</div>
				<nav class="space-x-4 text-white text-sm sm:text-base">
					<template v-if="!$page.isAuth">
						<inertia-link class="no-underline hover:underline" :href="$route('login')">Login</inertia-link>
						<inertia-link class="no-underline hover:underline" :href="$route('register')">Register</inertia-link>
					</template>
					<template v-else>
						<span>{{ $page.auth.user.name }}</span>
						<inertia-link class="no-underline hover:underline" :href="$route('logout')" method="POST">Logout</inertia-link>
					</template>
				</nav>
			</div>
		</header>
		<flash-messages />
		<slot/>
	</div>
</template>

<script>
	import FlashMessages from '../Shared/FlashMessages'

    export default {
		components: {
			FlashMessages,
		},
        data() {
			return {
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
			}
		},
    }
</script>
