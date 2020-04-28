<template>
  <div class="w-screen h-screen p-6 overflow-hidden country-detail stats-today bg-backgroundColor">
    <p class="w-full text-6xl text-center text-textColor" v-if="country">{{country.Country}}</p>
  </div>
</template>

<script>
	export default {
		name: 'country-detail',

		data() {
			return {
				iso2Code: null,
				country: null,
				countryData: null
			}
		},

		mounted() {
			this.iso2Code = this.$route.params.id
			this.country = this.$store.getters['countries/getCountry'](this.iso2Code)

			if (this.country) {
				this.$store
					.dispatch('countries/getCountryDataSinceDayOne', this.country.Country)
					.then(data => (this.countryData = data))
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>