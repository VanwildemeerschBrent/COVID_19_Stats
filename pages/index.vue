<template>
  <div class="w-screen h-screen p-6 overflow-hidden stats-global bg-background text-textColor">
    <p class="text-6xl text-center">Global stats</p>

    <div class="inline-block w-full mt-12 align-middle global-stats">
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Confirmed cases</p>
        <p class="text-6xl text-center" v-if="globalStats">{{globalStats.total_cases}}</p>
      </div>
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Recovered</p>
        <p class="text-6xl text-center" v-if="globalStats">{{globalStats.total_recovered}}</p>
      </div>
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Deaths</p>
        <p class="text-6xl text-center" v-if="globalStats">{{globalStats.total_deaths}}</p>
      </div>
    </div>
    <div class="mt-12 align-middle global-stats-chart">
      <p class="text-4xl text-center">Confirmed cases chart</p>
      <canvas id="confirmedCasesChart" width="800px" class="mt-3 ml-auto mr-auto" height="400"></canvas>
    </div>
  </div>
</template>

<script>
	import Chart from 'chart.js'
	export default {
		name: 'Home',

		data() {
			return {
				globalStats: null
			}
		},

		mounted() {
			this.getGlobalStats()
			this.getGlobalTimelineData()
		},

		methods: {
			getGlobalStats() {
				this.$store
					.dispatch('global/getGlobalStatistics')
					.then(response => {
						this.globalStats = response.results[0]
					})
					.catch(error =>
						console.error(
							'Something went wrong fetching the latest results',
							error
						)
					)
			},

			getGlobalTimelineData() {
				this.$store.dispatch('global/getGlobalTimelineData').then(response => {
					debugger
				})
			},

			initCharts() {
				this.initConfirmedCasesChart()
			},

			initConfirmedCasesChart() {
				let ctx = document.querySelector('.confirmedCasesChart')
				console.log(ctx)
			}
		}
	}
</script>

<style>
</style>
