import store from '..'
export default {
	namespaced: true,
	state: {
		isOpen: false,
	},
	mutations: {
		CLOSE_CONFIRM(state) {
			state.isOpen = false
		},
		CLOSE_CONFIRM_WITHOUT_SAVE(state) {
			state.isOpen = false
			store.commit('sideBar/CLOSE_AND_CLEAR')
		},
		OPEN_CONFIRM(state) {
			state.isOpen = true
		},
	},
}
