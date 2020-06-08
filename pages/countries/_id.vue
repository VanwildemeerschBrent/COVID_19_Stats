<template>
  <div
    class="w-screen h-screen p-6 overflow-hidden country-detail bg-backgroundColor text-textColor"
  >
    <div class="ml-10 cursor-pointer text-textColor" @click="$router.push('/countries')">
      <c-arrow-left />
    </div>
    <div class="w-8/12 mb-4 ml-auto mr-auto text-6xl text-center text-textColor" v-if="countryData">
      <span>{{country.name}}</span>
      <span class="countryFlag">
        <img
          class="inline country__flag"
          :src="'https://www.countryflags.io/'+this.iso2Code+'/flat/64.png'"
        />
      </span>
    </div>
    <!-- <p>No data available for {{country.name}}</p> -->
    <div class="mt-4 country-detail__today">
      <div class="inline-block w-full">
        <div class="relative float-left w-1/3">
          <p class="text-3xl text-center">New cases</p>
          <p class="text-6xl text-center" v-if="countryData">{{getConfirmedCasesToday}}</p>
        </div>
        <div class="relative float-left w-1/3">&nbsp;</div>
        <div class="relative float-left w-1/3">
          <p class="text-3xl text-center">New deaths</p>
          <p class="text-6xl text-center" v-if="countryData">{{getDeathsToday}}</p>
        </div>
      </div>
    </div>

    <div class="inline-block w-full country-detail__total">
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Total confirmed cases</p>
        <p class="text-6xl text-center" v-if="countryData">{{getConfirmedCases}}</p>
      </div>
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Total recovered</p>
        <p class="text-6xl text-center" v-if="countryData">{{getRecoveredCases}}</p>
      </div>
      <div class="relative float-left w-1/3">
        <p class="text-3xl text-center">Total Deaths</p>
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
				countryData: null,
				isDataAvailable: null,
				lastAvailableDate: null
			}
		},

		mounted() {
			this.iso2Code = this.$route.params.id

			this.$store.dispatch('countries/getAllCountries').then(() => {
				this.country = this.$store.getters['countries/getCountry'](this.iso2Code)
			})

			this.$store
				.dispatch('global/getCountryStatistics', this.iso2Code)
				.then(response => {
					this.countryData = response.data
				})
		},

		computed: {
			getConfirmedCases() {
				if (this.countryData.data.hasOwnProperty('timelineitems')) {
					return this.countryData.data.timelineitems[0][
						this.lastAvailableDate
							? this.lastAvailableDate
							: this.getLatestAvailableDate()
					].total_cases
				} else {
					return 'No data available'
				}
			},
			getRecoveredCases() {
				if (this.countryData.data.hasOwnProperty('timelineitems')) {
					return this.countryData.data.timelineitems[0][
						this.lastAvailableDate
							? this.lastAvailableDate
							: this.getLatestAvailableDate()
					].total_recoveries
				} else {
					return 'No data available'
				}
			},

			getDeaths() {
				if (this.countryData.data.hasOwnProperty('timelineitems')) {
					return this.countryData.data.timelineitems[0][
						this.lastAvailableDate
							? this.lastAvailableDate
							: this.getLatestAvailableDate()
					].total_deaths
				} else {
					return 'No data available'
				}
			},

			getConfirmedCasesToday() {
				if (this.countryData.data.hasOwnProperty('timelineitems')) {
					return this.countryData.data.timelineitems[0][
						this.lastAvailableDate
							? this.lastAvailableDate
							: this.getLatestAvailableDate()
					].new_daily_cases
				} else {
					return 'No data available'
				}
			},
			getDeathsToday() {
				if (this.countryData.data.hasOwnProperty('timelineitems')) {
					return this.countryData.data.timelineitems[0][
						this.lastAvailableDate
							? this.lastAvailableDate
							: this.getLatestAvailableDate()
					].new_daily_deaths
				} else {
					return 'No data available'
				}
			}
		},

		methods: {
			getLatestAvailableDate() {
				this.lastAvailableDate = Object.keys(
					this.countryData.data.timelineitems[0]
				)[Object.keys(this.countryData.data.timelineitems[0]).length - 2]

				return this.lastAvailableDate
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>