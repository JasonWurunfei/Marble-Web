import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogin: false,
    user: null,
  },
  mutations: {
    changeLoginState(state, isLogin) {
      state.isLogin = isLogin
    },
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    async login({commit}, {username, axios}) {
      try {
        const res = await axios.get("api/user/login?username=" + username)
        commit('setUser', res.data)
        commit('changeLoginState', true)
      } catch(err) {
        if (err.response.status === 401)
          alert(`登录用户"${username}"不存在`)
      }
    },
    logout({commit}) {
      commit('changeLoginState', false)
      commit('setUser', null)
    },
  },
  modules: {
  }
})
