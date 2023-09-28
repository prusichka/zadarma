export default {
	namespaced: true,
	state: {
		scenarios: [],
		isEdit: false,
		editScenario: {},
	},
	getters: {
		getScenarios(state) {
			return state.scenarios
		},
	},
	mutations: {
		SAVE_SCENARIO(state, scenario) {
			state.scenarios.push(scenario)
			this.commit('sideBar/CLOSE_AND_CLEAR')
			this.commit('toast/SHOW_TOAST', 'Сценарий добавлен')
		},
		DELETE_SCENARIO(state, _id) {
			state.scenarios = state.scenarios.filter((el) => el.id !== _id)
		},
		EDIT_SCENARIO(state, _id) {
			const scenario = state.scenarios.find((el) => el.id === _id)
			state.editScenario = JSON.parse(JSON.stringify(scenario))
		},
		SET_EDIT_STATUS(state, status) {
			state.isEdit = status
		},
		SUBMIT_EDIT_SCENARIO(state, scenario) {
			state.scenarios.forEach((el) => {
				if (el.id === state.editScenario.id) {
					el.items = scenario
				}
			})
			this.commit('sideBar/CLOSE_SIDEBAR')
			this.commit('toast/SHOW_TOAST', 'Сценарий отредактирован')
		},
	},
}
