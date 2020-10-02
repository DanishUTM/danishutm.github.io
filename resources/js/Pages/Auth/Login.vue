<template>
	<layout>
		<main class="sm:container sm:mx-auto sm:max-w-lg sm:mt-10">
			<div class="flex">
				<div class="w-full">
					<section class="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm lg:shadow-lg">

						<header class="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
							LOGIN
						</header>

						<form @submit.prevent="submit" class="w-full px-6 space-y-6 sm:px-10 sm:space-y-8">
							<div class="flex flex-wrap mt-8">
								<label for="email" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
									E-Mail Address:
								</label>

								<input v-model="form.email" :error="errors.email" id="email" type="email" class="form-input w-full" name="email" required autocomplete="email" autofocus/>
							</div>

							<div class="flex flex-wrap">
								<label for="password" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
									Password:
								</label>

								<input v-model="form.password" :error="errors.password" id="password" type="password" class="form-input w-full" name="password" required>
							</div>

							<div class="flex items-center">
								<label class="inline-flex items-center text-sm text-gray-700" for="remember">
									<input v-model="form.remeber" type="checkbox" name="remember" id="remember" class="form-checkbox">
									<span class="ml-2">Remember Me</span>
								</label>
							</div>

							<div class="flex flex-wrap">
								<button type="submit"
								class="w-full select-none font-bold whitespace-no-wrap p-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-blue-500 hover:bg-blue-700 sm:py-4">
									LOGIN
								</button>

								<p v-if="$page.route.hasRegister" class="w-full text-xs text-center text-gray-700 my-6 sm:text-sm sm:my-8">
									Don't have an account?
									<inertia-link class="text-blue-500 hover:text-blue-700 no-underline hover:underline" :href="$route('register')">
										Register
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
					email: null,
					password: null,
					remember: null,
				},
			}
		},
		methods: {
			submit() {
				this.$inertia.post(this.$route('login'), this.form)
			},
		},
    }
</script>
