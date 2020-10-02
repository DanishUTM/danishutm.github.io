<template>
	<layout>
		<dashboard-header></dashboard-header>
		<main>
			<div class="flex flex-wrap mx-auto mt-6">
				<div class="w-full px-4 md:px-6">
					<h1 class="font-semibold text-3xl">Manager</h1>
				</div>
			</div>
		</main>
	</layout>
</template>

<script>
	import Layout from '../Shared/DashboardLayout'
	import DashboardHeader from '../Shared/DashboardHeader'

    export default {	
		components: {
			 Layout,
			 DashboardHeader,
		},
	}
</script>