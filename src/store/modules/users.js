export default {
	namespaced: true,
	state: {
		users: [
			{
				name: 'Сергей',
				number: 100,
				id: 1,
				checked: false,
				min: '40.00',
				max: '80.00',
			},
			{
				name: 'Сергей',
				number: 101,
				id: 2,
				checked: false,
				min: '40.00',
				max: '80.00',
			},
			{
				name: 'Сергей',
				number: 102,
				id: 3,
				checked: false,
				min: '40.00',
				max: '80.00',
			},
			{
				name: 'Сергей',
				number: 103,
				id: 4,
				checked: false,
				min: '40.00',
				max: '80.00',
			},
			{
				name: 'Сергей',
				number: 104,
				id: 5,
				checked: false,
				min: '40.00',
				max: '80.00',
			},
			{
				name: 'Сергей',
				number: 105,
				id: 6,
				checked: false,
				min: '40.00',
				max: '80.00',
			},
			{
				name: 'Сергей',
				number: 106,
				id: 7,
				checked: false,
				min: '40.00',
				max: '80.00',
			},
			{
				name: 'Сергей',
				number: 107,
				id: 8,
				checked: false,
				min: '40.00',
				max: '80.00',
			},
			{
				name: 'Сергей',
				number: 108,
				id: 9,
				checked: false,
				min: '40.00',
				max: '80.00',
			},
		],
		selected: [],
	},
	getters: {
		getUsers(state) {
			return state.users
		},
		getSelectedUsers(state) {
			return state.selected
		},
	},
	mutations: {
		SET_SELECTED(state, selected) {
			state.selected = selected
		},
		REMOVE_SELECTED(state, _id) {
			state.selected = state.selected.filter((el) => el.id !== _id)
		},
		UN_SELECT_ALL(state) {
			state.selected = []
		},
		SET_VALUES(state, data) {
			state.selected = state.selected.map((el) => {
				if (el.id === data.id) {
					el.min = data.min
					el.max = data.max
				}
				return el
			})
		},
	},
}
