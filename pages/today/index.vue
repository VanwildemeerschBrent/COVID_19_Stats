<template>
  <div class="w-screen h-screen p-6 overflow-hidden stats-today bg-backgroundColor text-textColor">
    <p class="text-6xl text-center">Today {{new Date().toLocaleDateString('en-us')}}</p>
    <div class="mt-12 align-middle country-detail__today">
      <div class="relative float-left w-1/2">
        <p class="text-3xl text-center">New cases Today</p>
        <p class="text-6xl text-center" v-if="globalStats">{{globalStats.total_new_cases_today}}</p>
      </div>

      <div class="relative float-left w-1/2">
        <p class="text-3xl text-center">Deaths Today</p>
        <p class="text-6xl text-center" v-if="globalStats">{{globalStats.total_new_deaths_today}}</p>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'stats-today',

		data() {
			return {
				globalStats: null
			}
		},

		mounted() {
			this.getGlobalStatsToday()
		},

		methods: {
			getGlobalStatsToday() {
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
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>