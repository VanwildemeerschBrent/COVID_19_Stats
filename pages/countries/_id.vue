<template>
  <div
    class="w-screen h-screen p-6 overflow-hidden country-detail stats-today bg-backgroundColor text-textColor"
  >
    <div class="ml-10 cursor-pointer text-textColor" @click="$router.push('/countries')">
      <c-arrow-left />
    </div>
    <div class="w-8/12 mb-4 ml-auto mr-auto text-6xl text-center text-textColor" v-if="country">
      <span>{{country.Country}}</span>
      <span class="float-left countryFlag">
        <img
          class="float-left w-12 country__flag"
          :src="'https://www.countryflags.io/'+country.ISO2+'/flat/64.png'"
        />
      </span>
    </div>

    <div class="country-detail__today">
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Confirmed cases</p>
        <p class="text-6xl text-center" v-if="countryData">{{getActiveConfirmedCases}}</p>
      </div>
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Recovered</p>
        <p class="text-6xl text-center" v-if="countryData">{{getRecoveredCases}}</p>
      </div>
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Deaths</p>
        <p class="text-6xl text-center" v-if="countryData">{{getDeaths}}</p>
      </div>
    </div>
  </div>
</template>

<script>
	import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
	export default {
		name: 'country-detail',

		components: {
			'c-arrow-left': ArrowLeftIcon
		},

		data() {
			return {
				iso2Code: null,
				country: null,
				countryData: null
			}
		},

		mounted() {
			this.iso2Code = this.$route.params.id

			if (this.$store.getters['countries/getCountries'].length == 0) {
				this.$store.dispatch('countries/getAllCountries').then(() => {
					this.country = this.$store.getters['countries/getCountry'](
						this.iso2Code
					)
					this.$store
						.dispatch('countries/getCountryDataSinceDayOne', this.country.Country)
						.then(data => (this.countryData = data))
				})
			} else {
				this.country = this.$store.getters['countries/getCountry'](this.iso2Code)
				this.$store
					.dispatch('countries/getCountryDataSinceDayOne', this.country.Country)
					.then(data => (this.countryData = data))
			}
		},

		computed: {
			getActiveConfirmedCases() {
				let today = JSON.parse(JSON.stringify(this.countryData)).pop()
				if (!today) return 'Not available'
				return today['Confirmed']
			},
			getRecoveredCases() {
				let today = JSON.parse(JSON.stringify(this.countryData)).pop()
				if (!today) return 'Not available'
				return today['Recovered']
			},
			getDeaths() {
				let today = JSON.parse(JSON.stringify(this.countryData)).pop()
				if (!today) return 'Not available'
				return today['Deaths']
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>