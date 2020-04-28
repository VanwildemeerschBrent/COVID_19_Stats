<template>
  <div class="w-screen h-screen overflow-hidden country-overview bg-backgroundColor">
    <c-countries-list v-if="isAppVisible" />
  </div>
</template>

<script>
	import CountriesList from '@/components/countries/CountriesList'
	export default {
		name: 'country-overview',

		components: {
			'c-countries-list': CountriesList
		},

		data() {
			return {
				isAppVisible: false
			}
		},
		mounted() {
			this.$store.dispatch('countries/getAllCountries').then(response => {
				this.isAppVisible = true
			})
		}
	}
</script>

<style lang="scss" scoped>
</style>