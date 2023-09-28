<template>
	<div id="app">
		<router-view />
		<SideBar />
		<ConfirmModal />
		<Toast />
	</div>
</template>

<script>
import SideBar from './components/side-bar.vue'
import ConfirmModal from './components/confirm-modal.vue'
import Toast from './components/toast.vue'
export default {
	components: {
		SideBar,
		ConfirmModal,
		Toast,
	},
}
</script>

<style lang="scss"></style>
