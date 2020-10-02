<template>
	<layout>
		<main class="sm:container sm:mx-auto sm:mt-10">
			<div class="w-full sm:px-6">

				<div v-if="$page.sessionStatus" class="text-sm border border-t-8 rounded text-green-700 border-green-600 bg-green-100 px-3 py-4 mb-4" role="alert">
					{{ $page.sessionStatus }}
				</div>
				
				<section class="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm lg:shadow-lg">
					<header class="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
						View Customer
					</header>
					
					<div class="w-full p-6">
						<div class="container">
							<div>
								<table class="border-collapse table-fixed w-full whitespace-no-wrap bg-white table-striped relative mt-6">
									<tbody>
											<tr class="text-left">
												<td class="w-1/5 bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">Name</td>
												<td class="w-4/5 border-dashed border-t border-gray-200">
													<span class="text-gray-700 px-6 py-4 flex items-center">{{customer.name}}</span>
												</td>
											</tr>
											<tr>
												<td class="w-1/5 bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">Phone No.</td>
												<td class="w-4/5 border-dashed border-t border-gray-200">
													<span class="text-gray-700 px-6 py-4 flex items-center">{{customer.phone_num}}</span>
												</td>
											</tr>
											<tr>
												<td class="w-1/5 bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">Email</td>
												<td class="w-4/5 border-dashed border-t border-gray-200">
													<span class="text-gray-700 px-6 py-4 flex items-center">{{customer.email}}</span>
												</td>
											</tr>
											<tr>
												<td class="w-1/5 bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">Address</td>
												<td class="w-4/5 border-dashed border-t border-gray-200">
													<span class="text-gray-700 px-6 py-4 flex items-center">{{customer.address}}</span>
												</td>
											</tr>
									</tbody>
								</table>
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
			customer: Object,
		},
        data() {
			return {
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
			}
		},
    }
</script>
