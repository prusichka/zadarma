<template>
	<div class="list">
		<div
			v-for="scenario in scenarios"
			:key="scenario.id"
			class="list__item">
			<div class="list__item__col">
				<span>{{ scenario.id }}</span>
				<h2>{{ scenario.title }}</h2>
			</div>
			<div class="list__item__col">
				<svg
					@click="editScenario(scenario.id)"
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none">
					<path
						d="M15.9503 10.5494L19.451 14.05L11.8495 21.6514L8.72847 21.9959C8.31065 22.0421 7.95764 21.6888 8.00413 21.271L8.3514 18.1478L15.9503 10.5494ZM21.6161 10.0282L19.9724 8.38453C19.4597 7.87182 18.6282 7.87182 18.1155 8.38453L16.5691 9.93084L20.0698 13.4314L21.6161 11.8851C22.1288 11.3722 22.1288 10.5409 21.6161 10.0282Z" />
				</svg>
				<svg
					@click="DELETE_SCENARIO(scenario.id)"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						id="trash"
						d="M2 3.29688V2.53125C2 2.16758 2.29258 1.875 2.65625 1.875H5.71875L5.97578 1.36367C6.08516 1.13945 6.31211 1 6.56094 1H9.68633C9.93516 1 10.1621 1.13945 10.2742 1.36367L10.5312 1.875H13.5938C13.9574 1.875 14.25 2.16758 14.25 2.53125V3.29688C14.25 3.47734 14.1023 3.625 13.9219 3.625H2.32812C2.14766 3.625 2 3.47734 2 3.29688ZM13.375 4.82812V13.6875C13.375 14.4121 12.7871 15 12.0625 15H4.1875C3.46289 15 2.875 14.4121 2.875 13.6875V4.82812C2.875 4.64766 3.02266 4.5 3.20312 4.5H13.0469C13.2273 4.5 13.375 4.64766 13.375 4.82812ZM5.9375 6.6875C5.9375 6.44688 5.74062 6.25 5.5 6.25C5.25938 6.25 5.0625 6.44688 5.0625 6.6875V12.8125C5.0625 13.0531 5.25938 13.25 5.5 13.25C5.74062 13.25 5.9375 13.0531 5.9375 12.8125V6.6875ZM8.5625 6.6875C8.5625 6.44688 8.36562 6.25 8.125 6.25C7.88438 6.25 7.6875 6.44688 7.6875 6.6875V12.8125C7.6875 13.0531 7.88438 13.25 8.125 13.25C8.36562 13.25 8.5625 13.0531 8.5625 12.8125V6.6875ZM11.1875 6.6875C11.1875 6.44688 10.9906 6.25 10.75 6.25C10.5094 6.25 10.3125 6.44688 10.3125 6.6875V12.8125C10.3125 13.0531 10.5094 13.25 10.75 13.25C10.9906 13.25 11.1875 13.0531 11.1875 12.8125V6.6875Z" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
	name: 'scenarios-list',
	computed: {
		...mapGetters({
			scenarios: 'scenarios/getScenarios',
		}),
	},
	methods: {
		...mapMutations({
			DELETE_SCENARIO: 'scenarios/DELETE_SCENARIO',
			EDIT_SCENARIO: 'scenarios/EDIT_SCENARIO',
			SET_EDIT_STATUS: 'scenarios/SET_EDIT_STATUS',
			OPEN_SIDEBAR: 'sideBar/OPEN_SIDEBAR',
		}),
		editScenario(id) {
			this.SET_EDIT_STATUS(true)
			this.EDIT_SCENARIO(id)
			this.OPEN_SIDEBAR()
		},
	},
}
</script>

<style lang="scss" scoped>
.list {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&__item {
		padding: 14px 20px;
		width: 100%;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
		background: #fff7d1;
		&:not(:last-child) {
			margin-bottom: 12px;
		}

		span {
			border-radius: 32px;
			border: 1.2px solid #3e3f3a;
			background: #ffe87c;
			width: 20px;
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		h2 {
			color: #666;
			font-size: 16px;
			font-weight: 500;
			line-height: 19.8px;
			padding-left: 12px;
		}

		svg {
			cursor: pointer;
			fill: #a1a1a1;

			&:first-child {
				&:hover {
					fill: #088c08;
				}
			}

			&:last-child {
				margin-left: 8px;
				&:hover {
					fill: #c71b2a;
				}
			}
		}

		&__col {
			display: flex;
			align-items: center;
		}
	}
}
</style>
