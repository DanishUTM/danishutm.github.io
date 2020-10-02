
<script>
	import { Doughnut } from 'vue-chartjs'

	export default {
		extends: Doughnut,
		data: () => ({
			chartdata: {
			labels: ['January', 'February', 'March'],		
			datasets: [{				
					data: [10, 20, 30],
					backgroundColor: ['#e74c3c', '#3498db', '#2ecc71'],
				}]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
			}
		}),
		mounted () {
			this.renderChart(this.chartdata, this.options)
		}
	}
</script>