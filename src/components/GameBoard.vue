<template>
	<div class="gameboard-wrapper">
		<div class="gameboard">
			<game-tile v-for="tile in tiles" :tile-data="tile"></game-tile>
		</div>
	</div>
</template>

<script>
import GameTile from './GameTile.vue'
import generateTileNumbers from './mixins/generateTileNumbers.js'

export default {
	name: 'GameBoard',
	props: {
		boardSettings: {
			type: Object,
			required: true
		},
		seventeens: {
			type: Number,
			required: true
		}
	},
	mixins: [generateTileNumbers],
	components: {
		GameTile
	},
	data: function() {
		return {
			tileValues: []
		}
	},
	computed: {
		widthFactor() {
			return 100 / this.boardSettings.cols;
		},
		heightFactor() {
			return 100 / this.boardSettings.rows;
		},
		tiles() {
			const tiles = [];
			for(let t = 0; t < this.boardSettings.tiles.length; t++) {
				const settingsTile = this.boardSettings.tiles[t];
				const tile = {
					styles: {
						left: (settingsTile.x - 1) * this.widthFactor + '%',
						top: (settingsTile.y - 1) * this.heightFactor + '%',
						width: this.widthFactor * this.boardSettings.tileWidth + '%',
						height: this.heightFactor * this.boardSettings.tileHeight + '%',
						fontSize: this.widthFactor * this.boardSettings.tileWidth / 20 + 1 + 'rem'
					},
					value: this.tileValues[t],
					active: false,
					dropCandidate: false,
					canAcceptDrop: false,
					canAcceptSplit: false,
					isSplit: false,
					isHovered: false
				};
				tiles.push(tile);
			}
			return tiles;
		},
		tileWidth() {
			return this.widthFactor * this.boardSettings.tileWidth
		},
		tileHeight() {
			return this.heightFactor * this.boardSettings.tileHeight
		},
	},
	mounted: function() {
		this.tileValues = this.$_generateTileNumbers(this.seventeens, this.boardSettings.tiles.length)
	}
}
</script>

<style>
.gameboard-wrapper {
	position: relative;
	margin: 0 auto;
	padding: 15px;
	width: 600px;
	max-width: 100%;
	user-select: none;
}
.gameboard {
	position: relative;
	padding-bottom: 100%;
	background: rgba(255,255,255,0.1);
	border: 5px solid rgba(255,255,255,0.05);
}
</style>