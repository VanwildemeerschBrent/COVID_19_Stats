import Axios from 'axios'

const baseURL = 'https://api.thevirustracker.com/free-api?'

export const state = () => ({
  globalStats: null
})

export const mutations = {
  SET_GLOBALSTATS(state, payload) {
    state.globalStats = payload
  }
}
export const getters = {
  getGlobalStats(state) {
    return state.globalStats
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
  }
}
