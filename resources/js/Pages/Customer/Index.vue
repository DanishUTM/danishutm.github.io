<template>
	<layout>
		<main class="sm:container sm:mx-auto sm:mt-10">
			<div class="w-full sm:px-6">

				<div v-if="$page.sessionStatus" class="text-sm border border-t-8 rounded text-green-700 border-green-600 bg-green-100 px-3 py-4 mb-4" role="alert">
					{{ $page.sessionStatus }}
				</div>
				
				<section class="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm lg:shadow-lg">

					<header class="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
						Customers
					</header>
					
					<div class="w-full p-6">
						<div class="container">
							<div>
								<inertia-link class="bg-green-400 hover:bg-green-300 text-white font-bold my-3 py-2 px-4 border-b-4 border-green-600 hover:border-green-400 rounded" :href="$route('customers.create')">Add Customer</inertia-link>
								<table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative mt-6">
									<thead>
										<tr class="text-left">
											<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">Name</th>
											<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">Phone No.</th>
											<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">Email</th>
											<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">Address</th>
											<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">Actions</th>
										</tr>
									</thead>
									<tbody>
											<tr v-bind:key="customer.id" v-for="customer in customers.data">
												<td class="border-dashed border-t border-gray-200">
													<span class="text-gray-700 px-6 py-4 flex items-center">{{customer.name}}</span>
												</td>
												<td class="border-dashed border-t border-gray-200">
													<span class="text-gray-700 px-6 py-4 flex items-center">{{customer.phone_num}}</span>
												</td>
												<td class="border-dashed border-t border-gray-200">
													<span class="text-gray-700 px-6 py-4 flex items-center">{{customer.email}}</span>
												</td>
												<td class="border-dashed border-t border-gray-200">
													<span class="text-gray-700 px-6 py-4 flex items-center">{{customer.address}}</span>
												</td>
												<td class="border-dashed border-t border-gray-200">
													<inertia-link class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" :href="$route('customers.show' , customer.id)">View</inertia-link>
													<inertia-link class="bg-yellow-300 hover:bg-yellow-200 text-white font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-300 rounded" :href="$route('customers.edit' , customer.id)">Update</inertia-link>				
													<inertia-link class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" :href="$route('customers.destroy' , customer.id)" v-on:click.prevent="deleteCustomer(customer.id)">Delete</inertia-link>
												</td>
											</tr>
									</tbody>
								</table>
							</div>
							<pagination :links="customers.links" />
						</div>
					</div>
				</section>
			</div>
		</main>
	</layout>
</template>

<script>
	import Layout from '../Shared/Layout'
	import Pagination from '../Shared/Pagination'

    export default {
		components: {
		  Layout,
		  Pagination,
		},
		props: {
			customers: Object,
		},
        data() {
			return {
				csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
			}
		},
		methods: {
			deleteCustomer: function (customerId) {
				Swal.fire({
					icon: 'warning',
					title: 'Delete Customer',
					text: 'Are you sure you would like to delete this customer? (ID: ' + customerId + ')',
					showCloseButton: true,
					showCancelButton: true,
				}).then((result) => {
					if (result.isConfirmed) {
						this.$inertia.delete(this.$route('customers.destroy', customerId))
					}
				})
			}
		}
    }
</script>
