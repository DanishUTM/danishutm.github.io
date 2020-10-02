<template>
	<layout>
		<main class="sm:container sm:mx-auto sm:max-w-lg sm:mt-10">
			<div class="flex">
				<div class="w-full">
					<section class="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm lg:shadow-lg">

						<header class="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
							REGISTER
						</header>

						<form @submit.prevent="submit" class="w-full px-6 space-y-6 sm:px-10 sm:space-y-8">
							<div class="flex flex-wrap mt-8">
								<label for="name" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
									Name:
								</label>

								<input v-model="form.name" :error="errors.name" id="name" type="text" class="form-input w-full"
									name="name" required autocomplete="name" autofocus>
							</div>

							<div class="flex flex-wrap">
								<label for="email" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
									E-Mail Address:
								</label>

								<input v-model="form.email" :error="errors.email" id="email" type="email"
									class="form-input w-full" name="email"
									required autocomplete="email">
							</div>

							<div class="flex flex-wrap">
								<label for="password" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
									Password:
								</label>

								<input v-model="form.password" :error="errors.password" id="password" type="password"
									class="form-input w-full" name="password"
									required autocomplete="new-password">
							</div>

							<div class="flex flex-wrap">
								<label for="password-confirm" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
									Confirm Password:
								</label>

								<input v-model="form.password_confirmation" :error="errors.password_confirmation" id="password-confirm" type="password" class="form-input w-full"
									name="password_confirmation" required autocomplete="new-password">
							</div>
							
							<div class="flex flex-wrap">
								<label for="role" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
									Role:
								</label>
								
								<select v-model="form.role" id="role" class="form-input w-full" name="role" required>
									<option value="1">Admin</option>
									<option value="2">Manager</option>
									<option value="3">User</option>
								</select>
							</div>

							<div class="flex flex-wrap">
								<button type="submit"
									class="w-full select-none font-bold whitespace-no-wrap p-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-blue-500 hover:bg-blue-700 sm:py-4">
									Register
								</button>

								<p class="w-full text-xs text-center text-gray-700 my-6 sm:text-sm sm:my-8">
									Already have an account?
									<inertia-link class="text-blue-500 hover:text-blue-700 no-underline hover:underline" :href="$route('login')">
										Login
									</inertia-link>
								</p>
							</div>
						</form>
					</section>
				</div>
			</div>
		</main>	
	</layout>
</template>

<script>
	import Layout from '../Shared/Layout'

    export default {
		components: {
		  Layout,
		},
		props: {
		  errors: Object,
		},
        data() {
			return {
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
				form: {
					name: null,
					email: null,
					password: null,
					password_confirmation: null,
					role: 1,
				},
			}
		},
		methods: {
			submit() {
				this.$inertia.post(this.$route('register'), this.form)
			},
		},
    }
</script>
