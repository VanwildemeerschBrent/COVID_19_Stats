import Axios from 'axios'

const baseURL = 'https://api.covid19api.com/'

export const state = () => ({
  countries: [],
  countryData: []
})

export const mutations = {
  SET_COUNTRIES(state, payload) {
    state.countries = payload
  },
  SET_COUNTRYDATA(state, payload) {}
}
export const getters = {
  getCountries(state) {
    return state.countries
  },

  getCountry(state, ISO2) {
    return state.countries.find(x => x.ISO2 == ISO2)
  }
}
export const actions = {
  getAllCountries: ({ commit }) => {
    return Axios.get(`${baseURL}/countries`)
      .then(({ data }) => {
        commit('SET_COUNTRIES', data)
      })
      .catch(err =>
        console.error('Something went wrong fetching the countries', err)
      )
  },
  getCountryDataSinceDayOne: ({ commit }, countryCode) => {
    // return Axios.get(`${baseURL}dayone/country/${countryCode}"`).then({ data }=>{

    // }
  }
}
