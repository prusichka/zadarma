<template>
	<div
		class="overlay"
		:class="{
			'show-overlay': isOpen,
		}">
		<div
			class="side-bar"
			:class="{
				open: isOpen,
			}">
			<div class="header">
				<div
					@click="closeSideBar"
					class="header__close">
					<img
						src="@/assets/images/close.svg"
						alt="close icon" />
				</div>
				<div class="header__body">
					<h2>{{ displayName }}</h2>
					<CustomSelect />
					<Timeline />
				</div>
			</div>
			<div class="body">
				<EmptyRanges v-if="!selectedUsers.length" />
				<template v-else>
					<RangeSlider
						v-for="user in selectedUsers"
						:key="user.id"
						:user="user"
						@set-range="setRange"
						@remove-selected="REMOVE_SELECTED(user.id)" />
				</template>
			</div>
			<div class="footer">
				<div class="footer__body">
					<button
						@click="submit"
						:disabled="disabledButton"
						class="btn uppercase"
						type="button">
						{{ submitButton }}
					</button>
					<button
						@click="CLOSE_AND_CLEAR"
						:disabled="disabledButton"
						class="btn btn-plain"
						type="button">
						Отменить
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import CustomSelect from '@/components/custom-select.vue'
import Timeline from '@/components/timeline.vue'
import EmptyRanges from '@/components/empty-ranges.vue'
import RangeSlider from '@/components/range-slider.vue'
import Toast from '@/components/toast.vue'
export default {
	name: 'side-bar',
	data() {
		return {
			selectedUsers: [],
		}
	},
	components: { CustomSelect, Timeline, EmptyRanges, RangeSlider, Toast },
	computed: {
		...mapState({
			isOpen: (s) => s.sideBar.isOpen,
			_selectedUsers: (s) => s.users.selected,
			_scenarios: (s) => s.scenarios.scenarios,
			editScenario: (s) => s.scenarios.editScenario,
			isEditScenario: (s) => s.scenarios.isEdit,
		}),
		...mapGetters({
			getSelectedUsers: 'users/getSelectedUsers',
		}),
		submitButton() {
			return this.isEditScenario ? 'Сохранить' : 'Создать'
		},
		displayName() {
			return this.isEditScenario ? 'Редактировать сценарий' : 'Создать сценарий'
		},
		disabledButton() {
			if (this.isEditScenario) {
				if (this.editScenario.items) {
					return (
						JSON.stringify(this.editScenario.items) ===
						JSON.stringify(this._selectedUsers)
					)
				}
			} else {
				return !this._selectedUsers.length
			}
		},
	},
	watch: {
		_selectedUsers: {
			handler() {
				this.selectedUsers = this.getSelectedUsers
			},
			deep: true,
			immediate: true,
		},
	},
	methods: {
		...mapMutations({
			OPEN_CONFIRM: 'confirm/OPEN_CONFIRM',
			CLOSE_SIDEBAR: 'sideBar/CLOSE_SIDEBAR',
			CLOSE_AND_CLEAR: 'sideBar/CLOSE_AND_CLEAR',
			UN_SELECT_ALL: 'users/UN_SELECT_ALL',
			SET_VALUES: 'users/SET_VALUES',
			SAVE_SCENARIO: 'scenarios/SAVE_SCENARIO',
			SUBMIT_EDIT_SCENARIO: 'scenarios/SUBMIT_EDIT_SCENARIO',
			REMOVE_SELECTED: 'users/REMOVE_SELECTED',
		}),
		closeSideBar() {
			if (this.disabledButton) {
				this.CLOSE_SIDEBAR()
			} else {
				this.OPEN_CONFIRM()
			}
		},
		setRange(data) {
			this.SET_VALUES(data)
		},
		submit() {
			this.isEditScenario ? this.saveChanges() : this.addNewScenario()
		},
		addNewScenario() {
			let data = {
				id: this._scenarios.length + 1,
				items: this.getSelectedUsers,
				title: `Сценарий ${this._scenarios.length + 1}`,
			}
			this.SAVE_SCENARIO(data)
		},
		saveChanges() {
			let data = JSON.parse(JSON.stringify(this.selectedUsers))
			this.SUBMIT_EDIT_SCENARIO(data)
		},
	},
}
</script>

<style lang="scss" scoped>
// Overlay
.overlay {
	position: fixed;
	transition: 0.3s;
	z-index: 10;
}
.show-overlay {
	inset: 0;
	background: rgba(0, 0, 0, 0.5);
}
// side-bar
.side-bar {
	position: fixed;
	top: 0;
	bottom: 0;
	overflow: hidden;
	right: -500px;
	z-index: 11;
	max-width: 500px;
	width: 100%;
	background: #fff;
	transition: 0.3s;
	.header {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 100;
		background: #fff;

		left: 0;
		&__close {
			position: absolute;
			top: 12px;
			right: 12px;
			cursor: pointer;
		}
		&__body {
			padding: 32px 24px 0;

			h2 {
				color: #3d0205;
				font-size: 20px;
				margin-bottom: 24px;
			}
		}
	}

	.body {
		margin: 193px 0 75px;
		padding: 20px 24px;
		height: calc(100% - 72px - 193px);
		overflow-y: auto;
	}

	.footer {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.16);
		z-index: 100;

		&__body {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding: 20px 24px;
			background: #fff;
		}

		button {
			&:first-child {
				font-weight: 500;
				margin-right: 10px;
			}
		}
	}
}
// side-bar if open
.open {
	right: 0;
}
</style>
