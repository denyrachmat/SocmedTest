import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  datcustomer : []
}

const mutations = {
	SAVE_CUST(state,data){
		let custsavedlist = JSON.stringify(data)

		localStorage.setItem('custsavedlist',custsavedlist)
	}
}

const getters = {
  Getdoc: state => state.datcustomer,
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  getters
})