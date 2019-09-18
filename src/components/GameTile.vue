<template>
	<div class="gametile-wrapper" :style="tileData.styles">
		<div class="gametile" :class="tileClasses">
			<div class="gametile-text">{{ value }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GameTile',
		props: {
			tileData: {
				type: Object,
				required: true
			}
		},
		data: function() {
			return {
				
			}
		},
		computed: {
			value: function() {
				return this.tileData.value || 0;
			},
			tileClasses: function() {
				return {
					active: false,
					empty: this.value <= 0
				}
			}
		}
	}
</script>

<style>
	.gametile-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 25%;
		height: 25%;
	}
	.gametile-wrapper:before {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(0,0,0,0.15);
		border-radius: 10px;
		width: 90%;
		height: 90%;
	}
	.gametile {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: #0a0;
		border-radius: 10px;
		width: 90%;
		height: 90%;
	}
	.gametile-text {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: #f0f0f0;
		font-weight: bold;
		line-height: 1;
	}
	.gametile.active {
		opacity: 0.4;
	}
	.gametile.empty {
		opacity: 0;
	}
</style>