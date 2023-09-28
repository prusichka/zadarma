<template>
	<div class="slider">
		<h3>
			{{ localUser.name }} ({{ localUser.number }}): {{ localUser.min }} -
			{{ localUser.max }}
		</h3>
		<div class="slider__content">
			<veeno
				:id="`slider-${localUser.id}`"
				connect
				class="range"
				behaviour="tap-drag"
				:handles="handles"
				:range="{ min: 0, max: 120 }"
				@change="sliderEnd">
			</veeno>
			<svg
				@click="removeSelected(localUser.id)"
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
</template>

<script>
import veeno from 'veeno'
import 'nouislider/distribute/nouislider.min.css'
export default {
	name: 'range-slider',
	components: { veeno },
	props: {
		user: {
			type: Object,
			required: true,
			default: () => {},
		},
	},
	computed: {
		localUser() {
			return this.user
		},
		handles() {
			return [this.localUser.min, this.localUser.max]
		},
	},
	methods: {
		sliderEnd(e) {
			const min = e.values[0]
			const max = e.values[1]
			this.$emit('set-range', { min, max, id: this.localUser.id })
		},
		removeSelected(id) {
			this.$emit('remove-selected', id)
		},
	},
}
</script>

<style lang="scss" scoped>
.slider {
	padding: 32px 0;
	&:not(:last-child) {
		border-bottom: 1px solid #eee;
	}
	h3 {
		margin-bottom: 10px;
	}
	&__content {
		display: flex;
		align-items: center;

		.range {
			width: 100%;
		}
		svg {
			margin-left: 10px;
			cursor: pointer;
			fill: #a1a1a1;

			&:hover {
				fill: #c71b2a;
			}
		}
	}
}
::v-deep .noUi-horizontal {
	height: 6px;
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2) inset;
	background: #e6e6e6;
	cursor: auto !important;
}

::v-deep .noUi-connects {
	height: 30px;
	top: -13px;
}

::v-deep .noUi-connect {
	background: linear-gradient(180deg, #fff 0%, #eee 100%);
	border: 1px solid #dfdfdf;
	box-shadow: (0px 1px 2px rgba(0, 0, 0, 0.18));
	border-radius: 4px;
}

::v-deep .noUi-draggable {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
}

::v-deep .noUi-handle-lower {
	right: 7px !important;
	&::after {
		display: none;
	}
	&::before {
		content: url('../assets/images/slider-arrow-left.svg');
		height: 10px;
		width: 10px;
		cursor: pointer;
		top: 4px;
		background: transparent;
	}
}
::v-deep .noUi-handle-upper {
	right: 26px !important;
	&::after {
		display: none;
	}
	&::before {
		content: url('../assets/images/slider-arrow-right.svg');
		height: 10px;
		width: 10px;
		cursor: pointer;
		top: 4px;
		background: transparent;
	}
}
::v-deep .noUi-state-drag * {
	cursor: auto !important;
}
::v-deep .noUi-handle {
	border: none;
	border-radius: 0;
	background: transparent;
	cursor: default;
	box-shadow: none;
}

::v-deep .noUi-horizontal .noUi-handle {
	top: -8px;
	width: auto;
	height: auto;
}
</style>
