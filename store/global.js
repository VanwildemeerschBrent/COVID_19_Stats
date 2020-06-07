import Axios from 'axios'

const baseURL = 'https://api.thevirustracker.com/free-api?'

export const state = () => ({
  globalStats: null,
  countryStats: []
})

export const mutations = {
  SET_GLOBALSTATS(state, payload) {
    state.globalStats = payload
  },

  SET_COUNTRY_STATS(state, payload) {
    state.countryStats.push(payload)
  }
}
export const getters = {
  getGlobalStats(state) {
    return state.globalStats
  },

  getDataForCountry: state => isoCode => {
    return state.countryStats.find(x => x.iso === isoCode)
  }
}

export const actions = {
  getGlobalStatistics: ({ commit, state }) => {
    if (state.globalStats) return state.globalStats
    // If state.countries === 0 -> fetch countries;
    return Axios.get(`${baseURL}global=stats`)
      .then(({ data }) => {
        commit('SET_GLOBALSTATS', data)
        return data
      })
      .catch(err =>
        console.error('Something went wrong fetching the global stats', err)
      )
  },
  getCountryStatistics: ({ commit, state }, isoCode) => {
    if (state.countryStats.find(x => x.iso === isoCode)) return this

    return Axios.get(`${baseURL}countryTimeline=${isoCode}`).then(data => {
      commit('SET_COUNTRY_STATS', { iso: isoCode, data: data })
      return { iso: isoCode, data: data }
    })
  }
}
