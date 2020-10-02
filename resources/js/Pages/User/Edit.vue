<template>
	<layout>
		<main class="sm:container sm:mx-auto sm:mt-10">
			<div class="w-full sm:px-6">

				<div v-if="$page.sessionStatus" class="text-sm border border-t-8 rounded text-green-700 border-green-600 bg-green-100 px-3 py-4 mb-4" role="alert">
					{{ $page.sessionStatus }}
				</div>
				
				<section class="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm lg:shadow-lg">
					<header class="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
						Edit User
					</header>
					
					<div class="w-full p-6">
						<div class="container">
							<div>
								<form @submit.prevent="submit" class="w-full px-6 space-y-6 sm:px-10 sm:space-y-8">
									<input v-model="form.id" type="hidden" name="id">

									<div class="flex flex-wrap">
										<label for="name" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
											Name:
										</label>

										<input v-model="form.name" :error="errors.name" id="name" type="text" class="form-input w-full" name="name" required autofocus/>
									</div>
									
									<div class="flex flex-wrap">
										<label for="email" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
											E-Mail Address:
										</label>

										<input v-model="form.email" :error="errors.email" id="email" type="email" class="form-input w-full" name="email" required autocomplete="email" autofocus/>
									</div>
									
									<div class="flex flex-wrap">
										<label for="password" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
											Password:
										</label>

										<input v-model="form.password" :error="errors.password" id="password" type="password"
											class="form-input w-full" name="password"
											required/>
									</div>
									
									<div v-if="$page.auth.user.role == 1" id="role" class="flex flex-wrap">
										<label for="role" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
											Role:
										</label>
										
										<select v-model="form.role" :error="errors.role" class="form-input w-full" name="role" required>
											<option value="1">Admin</option>
											<option value="2">Manager</option>
											<option value="3">User</option>
										</select>
									</div>

									<div class="flex flex-wrap">
										<button type="submit"
										class="w-full select-none font-bold whitespace-no-wrap p-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-blue-500 hover:bg-blue-700 sm:py-4">
											SUBMIT
										</button>
									</div>
									
								</form>
							</div>
						</div>
					</div>
				</section>
				
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
			user: Object,
		},
		data() {
			return {
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
				form: {
					id: this.user.id,
					name: this.user.name,
					email: this.user.email,
					password: null,
					role: this.user.role,
				},
			}
		},
		methods: {
			submit() {
				this.$inertia.put(this.$route('users.update', this.user.id), this.form)
			},
		},
    }
</script>
