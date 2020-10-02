<template>
	<layout>
		<main class="sm:container sm:mx-auto sm:mt-10">
			<div class="w-full sm:px-6">
				<div v-if="$page.sessionStatus" class="text-sm border border-t-8 rounded text-green-700 border-green-600 bg-green-100 px-3 py-4 mb-4" role="alert">
					{{ $page.sessionStatus }}
				</div>
				<section class="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm lg:shadow-lg">
					<header class="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
						Edit Service
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
			service: Object,
		},
        data() {
			return {
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
				form: {
					id: this.service.id,
					name: this.service.name,
				},
			}
		},
		methods: {
			submit() {
				this.$inertia.put(this.$route('services.update', this.service.id), this.form)
			},
		},
    }
</script>
