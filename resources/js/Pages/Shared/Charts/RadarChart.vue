
<script>
	import { Radar } from 'vue-chartjs'

	export default {
		extends: Radar,
		data: () => ({
			chartdata: {
			labels: ['January', 'February', 'March'],
			datasets: [{
					label: 'Data One',
					backgroundColor: '#e74c3c',
					data: [40, 35, 25]
				},{
					label: 'Data Two',
					backgroundColor: '#3498db',
					data: [60, 10, 45]
				}]
			},
			options: {
				scale: {
					angleLines: {
						display: false
					}
				}
			}
		}),
		mounted () {
			this.renderChart(this.chartdata, this.options)
		}
	}
</script>