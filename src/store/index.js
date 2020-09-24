import Vue from 'vue'
import Vuex from 'vuex'
import Merchandise from './merchandise/index.js'//导入营销模块
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  
	  Adminid:sessionStorage.getItem('token'),//判断是否登录
	  
	  
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	  Merchandise
  }
})
