<template>
	<div class="card">
		<div class="card__img">
			<img
				src="../assets/images/logo.webp"
				alt="logo"
				width="244"
				height="44" />
		</div>
		<div class="card__scenario">
			<h2
				v-if="!getScenarios.length"
				class="card__scenario_empty">
				Сценариев еще нет
			</h2>
			<ScenariosList v-else />
		</div>
		<div class="card__actions">
			<button
				class="btn"
				type="button"
				@click="openSideBar">
				Создать сценарий
			</button>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import ScenariosList from './scenarios-list.vue'
export default {
	name: 'main-card',
	components: {
		ScenariosList,
	},
	computed: {
		...mapGetters({
			getScenarios: 'scenarios/getScenarios',
		}),
	},
	methods: {
		...mapMutations({
			OPEN_SIDEBAR: 'sideBar/OPEN_SIDEBAR',
			SET_EDIT_STATUS: 'scenarios/SET_EDIT_STATUS',
		}),
		openSideBar() {
			this.SET_EDIT_STATUS(false)
			this.OPEN_SIDEBAR()
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	border-radius: 8px;
	padding: 48px;
	background: #fff;
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08),
		0px 1px 2px 0px rgba(0, 0, 0, 0.05);
	width: min(100% - 10px, 400px);
	margin: 130px auto 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	&__img {
		width: 122px;
		height: 32px;

		img {
			display: block;
			height: 100%;
			-o-object-fit: contain;
			object-fit: contain;
			width: 100%;
		}
	}
	&__scenario {
		margin: 32px 0;
		width: 100%;
		&_empty {
			color: #666;
			text-align: center;
			font-size: 14px;
			line-height: 140%;
		}
	}
	&__actions {
		width: 100%;

		button {
			width: 100%;
		}
	}
}
</style>
. .
