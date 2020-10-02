<template>
	<layout>
		<dashboard-header></dashboard-header>
		<main>
			<div class="flex flex-wrap mx-auto mt-6">
				<div class="w-full px-4 md:px-6">
					<h1 class="font-semibold text-3xl">Dashboard</h1>
				</div>
			</div>

			<div class="flex flex-wrap align-items-stretch mx-auto md:px-4 mt-6">
				<div class="w-full md:w-2/5 md:px-2 mb-6">
					<section class="flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg">
						<header class="font-semibold bg-blue-500 text-white py-4 px-6">
							Line Chart
						</header>
						<div class="w-full p-6">
							<div class="container">
								<line-chart :chart-data="datacollection"></line-chart>
								<!-- <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-6 border-b-4 border-blue-700 hover:border-blue-500 rounded float-right" @click="fillData()">Randomize</button> -->
							</div>
						</div>
					</section>
				</div>

				<div class="w-full md:w-3/5 md:px-2 mb-6">
					<section class="flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg">
						<header class="font-semibold bg-blue-500 text-white py-4 px-6">
							Bar Chart
						</header>
						<div class="w-full p-6">
							<div class="container">
								<bar-chart></bar-chart>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div class="flex flex-wrap mx-auto md:px-4">
				<div class="w-full md:w-1/3 md:px-2 mb-6">
					<section class="flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg">
						<header class="font-semibold bg-blue-500 text-white py-4 px-6">
							Radar Chart
						</header>
						<div class="w-full p-6">
							<div class="container">
								<radar-chart></radar-chart>
							</div>
						</div>
					</section>
				</div>

				<div class="w-full md:w-1/3 md:px-2 mb-6">
					<section class="flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg">
						<header class="font-semibold bg-blue-500 text-white py-4 px-6">
							Pie Chart
						</header>
						<div class="w-full p-6">
							<div class="container">
								<pie-chart></pie-chart>
							</div>
						</div>
					</section>
				</div>

				<div class="w-full md:w-1/3 md:px-2 mb-6">
					<section class="flex flex-col break-words bg-white sm:border-1 sm:shadow-sm lg:shadow-lg">
						<header class="font-semibold bg-blue-500 text-white py-4 px-6">
							Donut Chart
						</header>
						<div class="w-full p-6">
							<div class="container">
								<doughnut-chart></doughnut-chart>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div class="flex flex-wrap mx-auto mb-3">
				<div class="w-full px-4 md:px-6">
					<p class="text-xl pb-3 flex items-center">Latest Reports</p>
				</div>
			</div>

			<div class="flex flex-wrap mx-auto mb-6">
				<div class="w-full md:px-6">
                    <div class="bg-white overflow-auto">
                        <table class="min-w-full bg-white">
                            <thead class="bg-blue-500 text-white">
                                <tr>
                                    <th class="w-1/3 text-left py-4 px-4 font-semibold text-sm">First Name</th>
                                    <th class="w-1/3 text-left py-4 px-4 font-semibold text-sm">Last Name</th>
                                    <th class="text-left py-4 px-4 font-semibold text-sm">Phone</th>
                                    <th class="text-left py-4 px-4 font-semibold text-sm">Email</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-700">
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Lian</td>
                                    <td class="w-1/3 text-left py-3 px-4">Smith</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Emma</td>
                                    <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Oliver</td>
                                    <td class="w-1/3 text-left py-3 px-4">Williams</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Isabella</td>
                                    <td class="w-1/3 text-left py-3 px-4">Brown</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Lian</td>
                                    <td class="w-1/3 text-left py-3 px-4">Smith</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Emma</td>
                                    <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr>
                                    <td class="w-1/3 text-left py-3 px-4">Oliver</td>
                                    <td class="w-1/3 text-left py-3 px-4">Williams</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                                <tr class="bg-gray-200">
                                    <td class="w-1/3 text-left py-3 px-4">Isabella</td>
                                    <td class="w-1/3 text-left py-3 px-4">Brown</td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                    <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
			</div>
		</main>
	</layout>
</template>

<script>
	import Layout from '../Shared/DashboardLayout'
	import DashboardHeader from '../Shared/DashboardHeader'
	import LineChart from '../Shared/Charts/LineChart'
	import BarChart from '../Shared/Charts/BarChart'
	import RadarChart from '../Shared/Charts/RadarChart'
	import PieChart from '../Shared/Charts/PieChart'
	import DoughnutChart from '../Shared/Charts/DoughnutChart'

    export default {	
		components: {
			Layout,
			DashboardHeader,
			LineChart,
			BarChart,
			RadarChart,
			PieChart,
			DoughnutChart,
		},
		data () {
			return {
				datacollection: null
			}
		},
		mounted () {
			this.fillData()
		},
		methods: {
			fillData () {
				this.datacollection = {
					labels: [this.getRandomInt(), this.getRandomInt()],
					datasets: [{
						label: 'Data One',
						backgroundColor: '#e74c3c',
						data: [this.getRandomInt(), this.getRandomInt()]
					},{
						label: 'Data Two',
						backgroundColor: '#3498db',
						data: [this.getRandomInt(), this.getRandomInt()]
					}]
				}
			},
			getRandomInt () {
				return Math.floor(Math.random() * (50 - 5 + 1)) + 5
			}
		}
	}
</script>

<style>
canvas{
	margin: 0 auto;
}
</style>