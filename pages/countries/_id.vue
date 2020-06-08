<template>
  <div
    class="w-screen h-screen p-6 overflow-hidden country-detail bg-backgroundColor text-textColor"
  >
    <div class="ml-10 cursor-pointer text-textColor" @click="$router.push('/countries')">
      <c-arrow-left />
    </div>
    <div class="w-8/12 mb-4 ml-auto mr-auto text-6xl text-center text-textColor" v-if="countryData">
      <span>{{country.name}}</span>
      <span class="float-left countryFlag">
        <img
          class="float-left w-12 country__flag"
          :src="'https://www.countryflags.io/'+this.iso2Code+'/flat/64.png'"
        />
      </span>
    </div>

    <div class="country-detail__today">
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Confirmed cases</p>
        <p class="text-6xl text-center" v-if="countryData">{{getConfirmedCases}}</p>
      </div>
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Recovered</p>
        <p class="text-6xl text-center" v-if="countryData">{{}}</p>
      </div>
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Deaths</p>
        <p class="text-6xl text-center" v-if="countryData">{{}}</p>
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

			this.$store.dispatch('countries/getAllCountries').then(() => {
				this.country = this.$store.getters['countries/getCountry'](this.iso2Code)
				console.log(this.country)
			})
			this.$store
				.dispatch('global/getCountryStatistics', this.iso2Code)
				.then(response => {
					this.countryData = response.data
				})
		},

		computed: {
			getConfirmedCases() {
				if (this.countryData.data.hasOwnProperty('timelineItems')) {
					let count

					return Object.keys(this.countryData.data.timelineitems[0]).forEach(
						key => {
							console.log()
						}
					)
				} else {
					;('No data available')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>