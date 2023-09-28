export default {
	namespaced: true,
	state: {
		isShow: false,
		message: ''
	},
	mutations: {
		HIDE_TOAST(state) {
			state.isShow = false
		},
		SHOW_TOAST(state, message) {
			state.isShow = true
			state.message = message
		},
	},
}
