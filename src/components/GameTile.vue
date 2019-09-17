<template>
	<div class="gametile-wrapper" :style="styles">
		<div class="gametile">
			<div class="gametile-text">17</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GameTile',
		props: {
			tileConfig: {
				type: Object,
				required: true
			},
			value: {
				type: Number
			}
		},
		data: function() {
			return {
				
			}
		},
		computed: {
			styles() {
				return {
					width: this.tileConfig.width + '%',
					height: this.tileConfig.height + '%',
					left: this.tileConfig.left + '%',
					top: this.tileConfig.top + '%'
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
		font-size: 2.2rem;
		font-weight: bold;
		color: #f0f0f0;
	}
</style>