<template>
	<div class="timeline">
		<p class="time">0 сек</p>
		<p class="time">120 сек</p>
	</div>
</template>

<script>
export default {
	name: 'timeline',
}
</script>

<style lang="scss" scoped>
.timeline {
	background: #fff7d1;
	padding: 10px 12px;
	border-bottom: 2px solid #dfd7ca;
	margin-top: 32px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.time {
		color: var(--gray-gray-700, #808080);
		font-size: 14px;
		font-weight: 500;
		line-height: 15px;
	}
}
</style>
