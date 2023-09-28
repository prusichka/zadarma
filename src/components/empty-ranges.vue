<template>
	<div class="empty">
		<img
			src="@/assets/images/chose-icon.svg"
			alt="chose icon" />
		<p>Внутренних номеров не добавлено</p>
		<button class="btn btn-plain btn-link">Выбрать</button>
	</div>
</template>

<script>
export default {
	name: 'empty-ranges',
}
</script>

<style lang="scss" scoped>
.empty {
	padding: 28px 110px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		margin-bottom: 8px;
	}

	p {
		color: var(--gray-gray-800, #666);
		text-align: center;
		font-size: 14px;
		line-height: 140%;
		margin-bottom: 8px;
	}
}
</style>
