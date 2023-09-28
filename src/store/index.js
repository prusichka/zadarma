import Vue from 'vue'
import Vuex from 'vuex'
import sideBar from '@/store/modules/sideBar'
import confirm from '@/store/modules/confirm'
import toast from '@/store/modules/toast'
import users from '@/store/modules/users'
import scenarios from '@/store/modules/scenarios'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		sideBar,
		confirm,
		toast,
		users,
		scenarios,
	},
})
