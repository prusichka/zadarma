<template>
	<div
		v-if="isOpen"
		class="modal">
		<div
			@click="CLOSE_CONFIRM"
			class="modal__close">
			<img
				src="@/assets/images/close.svg"
				alt="close icon" />
		</div>
		<h3>Остались несохраненные изменения</h3>
		<p>Вы уверены, что хотите выйти, сбросив все изменения?</p>
		<div class="modal__actions">
			<button
				@click="CLOSE_CONFIRM_WITHOUT_SAVE"
				class="btn btn-red">
				Выйти без сохранения
			</button>
			<button
				@click="CLOSE_CONFIRM"
				class="btn btn-plain">
				Отменить
			</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'confirm-modal',
	computed: {
		...mapState({
			isOpen: (s) => s.confirm.isOpen,
		}),
	},
	methods: {
		...mapMutations({
			CLOSE_CONFIRM: 'confirm/CLOSE_CONFIRM',
			CLOSE_CONFIRM_WITHOUT_SAVE: 'confirm/CLOSE_CONFIRM_WITHOUT_SAVE',
		}),
	},
}
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 100;
	transform: translate(-50%, -50%);
	background: #fff;
	box-shadow: (0px 2px 40px rgba(0, 0, 0, 0.25));
	padding: 36px;
	width: 100%;
	max-width: 550px;
	&__close {
		position: absolute;
		top: 12px;
		right: 12px;
		cursor: pointer;
	}

	h3 {
		color: #3d0205;
		font-size: 20px;
		line-height: 26.4px;
		margin-bottom: 16px;
	}
	p {
		color: #424242;
		font-size: 14px;
		line-height: 20px;
		margin-bottom: 24px;
	}
	&__actions {
		display: flex;
		align-items: center;
	}
}
</style>
