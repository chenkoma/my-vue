import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 数据 相当于data
  state: {
    token: '',
    userInfo: JSON.parse(sessionStorage.getItem('userInfo'))
  },
  // 里面定义方法,操作state方法
  mutations: {
    // set
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem('token', token)
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    REMOVE_INFO: (state) => {
      state.token = ''
      state.userinfo = {}
      localStorage.setItem('token', '')
      sessionStorage.setItem('userInfo', JSON.stringify(''))
    }
  },
  getters: {
    // get
    getUser: state => {
      return state.userInfo
    }
  },
  actions: {},
  modules: {}
})
