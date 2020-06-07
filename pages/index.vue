<template>
  <div class="w-screen h-screen p-6 overflow-hidden stats-global bg-background text-textColor">
    <p class="text-6xl text-center">Global stats</p>

    <div class="mt-12 align-middle country-detail__today">
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
  </div>
</template>

<script>
	export default {
		name: 'Home',

		data() {
			return {
				globalStats: null
			}
		},

		mounted() {
			this.getGlobalStats()
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
			}
		}
	}
</script>

<style>
</style>
