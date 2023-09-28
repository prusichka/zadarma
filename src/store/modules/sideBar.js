import store from '..'
export default {
	namespaced: true,
	state: {
		isOpen: false,
		scenarios: [],
	},
	mutations: {
		OPEN_SIDEBAR(state) {
			state.isOpen = true
		},
		CLOSE_SIDEBAR(state) {
			state.isOpen = false
		},
		CLOSE_AND_CLEAR(state) {
			this.commit('sideBar/CLOSE_SIDEBAR')
			this.commit('users/UN_SELECT_ALL')
		},
	},
}
