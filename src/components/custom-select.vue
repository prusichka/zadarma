<template>
	<div>
		<h3>Звонить</h3>
		<div>
			<div
				:class="{
					focused: isOpen,
				}"
				class="selected"
				@click="toggleSelect">
				<template v-if="localSelected.length">
					<p class="selected__number">
						{{ usersToShow }}
					</p>
				</template>
				<span
					v-else
					class="empty-numbers"
					>Выберите внутренние номера</span
				>
				<img
					src="@/assets/images/select-arrow.svg"
					alt="select arrow" />
			</div>
			<div
				v-if="isOpen"
				class="options">
				<div class="options__actions">
					<button
						@click="selectAll"
						class="btn btn-plain">
						Выбрать все
					</button>
					<button
						@click="unSelectAll"
						class="btn btn-plain">
						Очистить
					</button>
				</div>
				<div
					v-for="user in localUsers"
					:key="user.id"
					class="options__item">
					<label :for="`user-${user.id}`">
						<input
							v-model="user.checked"
							type="checkbox"
							:name="`user-${user.id}`"
							:id="`user-${user.id}`" />
						<h4>
							{{ user.name }} <span>({{ user.number }})</span>
						</h4>
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
	name: 'custom-select',
	data() {
		return {
			isOpen: false,
			localSelected: [],
			localUsers: [],
		}
	},
	computed: {
		...mapState({
			sideBarIsOpen: (s) => s.sideBar.isOpen,
			isEditScenarios: (s) => s.scenarios.isEdit,
			editScenario: (s) => s.scenarios.editScenario,
		}),
		...mapGetters({
			getUsers: 'users/getUsers',
			selectedUsers: 'users/getSelectedUsers',
		}),
		usersToShow() {
			return this.localSelected.map((el) => el.number).toString() || ''
		},
	},
	watch: {
		sideBarIsOpen() {
			if (this.sideBarIsOpen) {
				this.localUsers = this.setLocalUsers()
				if (this.isEditScenarios) {
					this.localSelected = JSON.parse(
						JSON.stringify(this.editScenario.items)
					)
					this.SET_SELECTED(this.localSelected)
				} else this.SET_SELECTED([])
			} else {
				this.localSelected = []
				this.localUsers = []
			}
		},
	},
	methods: {
		...mapMutations({
			SET_SELECTED: 'users/SET_SELECTED',
			selectAll: 'sideBar/selectAll',
			UN_SELECT_ALL: 'users/UN_SELECT_ALL',
		}),
		setLocalUsers() {
			let defaultUsers = JSON.parse(JSON.stringify(this.getUsers))
			if (this.isEditScenarios) {
				defaultUsers.forEach((element) => {
					this.editScenario.items.forEach((el) => {
						if (element.id === el.id) {
							element.checked = el.checked
						}
					})
				})
			}
			return defaultUsers
		},
		toggleSelect() {
			const hasSelected = this.localUsers.some((el) => el.checked)
			if (hasSelected) {
				this.localSelected = this.localUsers.filter((user) => user.checked)
			} else this.localSelected = []
			this.SET_SELECTED(this.localSelected)
			this.isOpen = !this.isOpen
		},
		selectAll() {
			this.localUsers = this.localUsers.map((el) => {
				el.checked = true
				return el
			})
		},
		unSelectAll() {
			this.localUsers = this.localUsers.map((el) => {
				el.checked = false
				return el
			})
		},
	},
}
</script>

<style lang="scss" scoped>
h3 {
	color: var(--gray-gray-900, #333);
	font-weight: 600;
	font-size: 14px;
	margin-bottom: 2px;
}

.focused {
	outline: 2px solid #fddd45;
}
.selected {
	border-radius: 4px;
	border: 1px solid var(--brown-brown-400, #dfd7ca);
	background: var(--gray-white, #fff);
	padding: 6px 36px 6px 10px;
	cursor: pointer;
	position: relative;
	min-height: 32px;
	height: auto;
	display: flex;
	align-items: center;
	&__number {
		color: var(--gray-gray-900, #333);
		font-size: 14px;
	}
	img {
		position: absolute;
		right: 10px;
		top: 12px;
	}
}

.empty-numbers {
	color: var(--brown-brown-700, #9f917a);
	font-size: 14px;
}

.options {
	position: absolute;
	border-radius: 4px;
	left: 24px;
	right: 24px;
	border: 1px solid var(--gray-gray-400, #dfdfdf);
	background: var(--gray-white, #fff);
	box-shadow: 0px 1px 5px 0px rgba(24, 19, 11, 0.18);
	padding: 7px 16px;
	margin-top: 2px;

	&__actions {
		display: flex;
		align-items: center;
		justify-content: space-between;

		button {
			padding-left: 0;
			padding-right: 0;
		}
	}
	&__item {
		padding: 8px 0;
		&:not(:last-child) {
			margin-bottom: 4px;
		}
		label {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			h4 {
				color: var(--gray-gray-900, #333);
				font-size: 14px;
				font-weight: 400;
				line-height: 140%;
				padding-left: 10px;
				span {
					color: var(--gray-gray-700, #808080);
					padding-left: 6px;
				}
			}
		}
	}
}
.last {
	&::after {
		content: ',';
	}
}
</style>
