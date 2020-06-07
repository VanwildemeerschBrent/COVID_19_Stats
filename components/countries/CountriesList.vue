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
    <transition-group
      name="flip-list"
      tag="div"
      class="inline-block w-full h-full overflow-x-hidden overflow-y-scroll"
    >
      <div
        v-for="country in filteredCountries"
        :key="country.alpha2Code"
        @click="$router.push('/countries/'+country.alpha2Code)"
        class="relative flex flex-row items-center float-left cursor-pointer countries-list__country w-1/8"
      >
        <img
          class="relative float-left w-1/3 country__flag"
          :src="'https://www.countryflags.io/'+country.alpha2Code+'/flat/64.png'"
        />
        <p class="relative float-right w-2/3 text-center text-white">{{country.name}}</p>
      </div>
    </transition-group>
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

		mounted() {
			this.getCountries()
		},

		watch: {
			searchInput() {
				let searchInputLC = this.searchInput.toLowerCase()
				this.filteredCountries = this.countries.filter(
					x =>
						x.name.toLowerCase().includes(searchInputLC) ||
						x.alpha2Code.toLowerCase().includes(searchInputLC)
				)
			}
		},

		methods: {
			getCountries() {
				this.$store
					.dispatch('countries/getAllCountries')
					.then(response => {
						this.countries = response
						this.filteredCountries = this.countries
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

<style lang="scss"  scoped>
	.countries-list__country {
		min-height: 5vh;
		opacity: 0.7;
	}

	.countries-list__country:hover {
		opacity: 1;
	}

	.flip-list-move {
		transition: transform 0.6s;
	}
</style>