<template>
	<transition name="slide">
		<div
			v-if="show"
			class="toast">
			<div class="toast__col">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.74999 10.3787L13.6893 2.43934L15.8107 4.56066L5.74999 14.6213L0.939331 9.81066L3.06065 7.68934L5.74999 10.3787Z"
						fill="#388E3C" />
				</svg>
				<p>{{ message }}</p>
			</div>
			<svg
				id="close_toast"
				@click="HIDE_TOAST"
				xmlns="http://www.w3.org/2000/svg"
				width="11"
				height="21"
				viewBox="0 0 11 21"
				fill="none">
				<g opacity="0.5">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M3.5 10.5L0 14L2 16L5.5 12.5L9 16L11 14L7.5 10.5L11 7L9 5L5.5 8.5L2 5L0 7L3.5 10.5Z"
						fill="#0A760A" />
				</g>
			</svg>
		</div>
	</transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'toast',
	computed: {
		...mapState({
			show: (s) => s.toast.isShow,
			message: (s) => s.toast.message,
		}),
	},
	methods: {
		...mapMutations({
			HIDE_TOAST: 'toast/HIDE_TOAST',
		}),
	},
	watch: {
		show() {
			if (this.show) {
				setTimeout(() => {
					this.HIDE_TOAST()
				}, 3000)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.toast {
	position: absolute;
	top: 30px;
	right: 30px;
	border-radius: 4px;
	border: 1px solid var(--semantic-success-400, #badbcc);
	background: var(--semantic-success-200, #d9ede4);
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
	padding: 18px 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 300px;

	&__col {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		p {
			color: var(--semantic-success-800, #0a760a);
			font-size: 14px;
			font-weight: 400;
			line-height: 140%;
			padding-left: 10px;
		}
	}

	#close_toast {
		cursor: pointer;
	}
}

.slide-enter-active {
	transition: all 0.3s ease;
}
.slide-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-to {
	transform: translateX(300px);
	opacity: 0;
}
</style>
