import Axios from 'axios'

const baseURL = 'https://api.covid19api.com/'

export const state = () => ({
  countries: [],
  countryData: {}
})

export const mutations = {
  SET_COUNTRIES(state, payload) {
    state.countries = payload
  },
  SET_COUNTRYDATA(state, payload) {
    //add country to keyvalue pair
    state.countryData[payload.country] = payload.data
  }
}
export const getters = {
  getCountries(state) {
    return state.countries
  },

  getCountry: state => alpha2Code => {
    return state.countries.find(x => x.alpha2Code == alpha2Code)
  }
}
export const actions = {
  getAllCountries: ({ commit, state }) => {
    if (state.countries.length !== 0) return state.countries
    // If state.countries === 0 -> fetch countries;
    return Axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(({ data }) => {
        commit('SET_COUNTRIES', data)
        return data
      })
      .catch(err =>
        console.error('Something went wrong fetching the countries', err)
      )
  },

  getCountryDataSinceDayOne: ({ commit, state }, countryName) => {
    if (state.countries.length === 0) this.getAllCountries()
    if (state.countryData.hasOwnProperty(countryName)) return state[countryName]

    // Data is not available for this country -> fetch from api
    return Axios.get(`${baseURL}/dayone/country/${countryName}`)
      .then(({ data }) => {
        commit('SET_COUNTRYDATA', { country: countryName, data: data })
        return data
      })
      .catch(err =>
        console.error('Something went wrong fetching the countries', err)
      )
  }
}
