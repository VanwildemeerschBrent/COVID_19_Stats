<template>
  <div class="w-full countries-list">
    <div class="w-full h-auto pt-4 pb-4 text-center bg-transparent countries-list-search">
      <input
        class="w-8/12 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none bg-backgroundColor border-textColor focus:outline-none"
        id="username"
        type="text"
        placeholder="Country name or country code"
        v-model="searchInput"
      />
    </div>
    <div class="w-full h-full overflow-x-hidden overflow-y-scroll">
      <div
        v-for="(country,index) in filteredCountries"
        :key="index"
        @click="$router.push('/countries/'+country.ISO2)"
        class="relative flex flex-row items-center float-left cursor-pointer countries-list__country w-1/8"
      >
        <img
          class="relative float-left w-1/3 country__flag"
          :src="'https://www.countryflags.io/'+country.ISO2+'/flat/64.png'"
        />
        <p class="relative float-right w-2/3 text-center text-white">{{country.Country}}</p>
      </div>
    </div>
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