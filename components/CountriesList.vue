<template>
  <div class="countries-list w-full overflow-x-hidden overflow-y-hidden">
    <div class="countries-list-search w-full h-12 bg-transparent flex items-center">
      <label class="block text-gray-700 text-sm font-bold mb-2 mr-3" for="username">Search country</label>
      <input
        class="shadow appearance-none border rounded w-8/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Country name or country code"
        v-model="searchInput"
      />
    </div>
    <div
      v-for="(country,index) in filteredCountries"
      :key="index"
      @click="$router.push('/countries/'+country.ISO2)"
      class="countries-list__country w-1/8 float-left relative flex flex-row items-center cursor-pointer"
    >
      <img
        class="country__flag w-1/3 relative float-left"
        :src="'https://www.countryflags.io/'+country.ISO2+'/flat/64.png'"
      />
      <p class="w-2/3 relative float-right text-center text-white">{{country.Country}}</p>
    </div>/
  </div>
</template>

<script>
	export default {
		name: 'countries-list',

		data() {
			return {
				countries: null,
				filteredCountries: null,
				searchInput: null
			}
		},
		created() {
			let countries = JSON.parse(
				JSON.stringify(this.$store.getters['countries/getCountries'])
			)
			this.countries = this.sortCountries(countries)
			this.filteredCountries = this.countries
		},

		watch: {
			searchInput() {
				let searchInputLC = this.searchInput.toLowerCase()
				this.filteredCountries = this.countries.filter(
					x =>
						x.Country.toLowerCase().includes(searchInputLC) ||
						x.ISO2.toLowerCase().includes(searchInputLC)
				)
			}
		},

		methods: {
			sortCountries(arr) {
				return arr.sort((a, b) => {
					if (a.Country.toLowerCase() > b.Country.toLowerCase()) return 1
					if (b.Country.toLowerCase() > a.Country.toLowerCase()) return -1
					return 0
				})
			},

			getCountryFlag(countryCode) {
				return findFlagUrlByIso2Code(countryCode)
			}
		}
	}
</script>

<style lang="scss"  scoped>
	.countries-list__country {
		min-height: 5vh;
		opacity: 0.7;
	}

	.countries-list__country:hover {
		opacity: 1;
	}
</style>