<template>
	<layout>
		<main class="sm:container sm:mx-auto sm:mt-10">
			<div class="w-full sm:px-6">

				<div v-if="$page.sessionStatus" class="text-sm border border-t-8 rounded text-green-700 border-green-600 bg-green-100 px-3 py-4 mb-4" role="alert">
					{{ $page.sessionStatus }}
				</div>
				
				<section class="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm lg:shadow-lg">
					<header class="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
						Edit Customer
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
										<label for="phone_num" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
											Phone Number:
										</label>

										<input v-model="form.phone_num" :error="errors.phone_num" id="phone_num" type="text" class="form-input w-full" name="phone_num" required autofocus/>
									</div>
									
									<div class="flex flex-wrap">
										<label for="email" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
											E-Mail Address:
										</label>

										<input v-model="form.email" :error="errors.email" id="email" type="email" class="form-input w-full" name="email" required autocomplete="email" autofocus/>
									</div>
									
									<div class="flex flex-wrap">
										<label for="address" class="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
											Address:
										</label>

										<input v-model="form.address" :error="errors.address" id="address" type="text" class="form-input w-full" name="address" required autofocus/>
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
			customer: Object,
		},
        data() {
			return {
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
				form: {
					id: this.customer.id,
					name: this.customer.name,
					phone_num: this.customer.phone_num,
					email: this.customer.email,
					address: this.customer.address,
				},
			}
		},
		methods: {
			submit() {
				this.$inertia.put(this.$route('customers.update', this.customer.id), this.form)
			},
		},
    }
</script>
