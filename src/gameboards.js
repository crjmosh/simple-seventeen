export default {
	squareFour: {
		title: 'Square Four',
		cols: 4,
		rows: 4,
		tileWidth: 1,
		tileHeight: 1,
		tiles: [
			{x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1},
			{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2},
			{x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3},
			{x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}
		]
	},
	squareFive: {
		title: 'Square Five',
		cols: 5,
		rows: 5,
		tileWidth: 1,
		tileHeight: 1,
		tiles: [
			{x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1},
			{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}, {x: 5, y: 2},
			{x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3},
			{x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4},
			{x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}
		]
	},
	squareSix: {
		title: 'Square Six',
		cols: 6,
		rows: 6,
		tileWidth: 1,
		tileHeight: 1,
		tiles: [
			{x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1}, {x: 6, y: 1},
			{x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2}, {x: 5, y: 2}, {x: 6, y: 2},
			{x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3}, {x: 6, y: 3},
			{x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4}, {x: 5, y: 4}, {x: 6, y: 4},
			{x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5}, {x: 6, y: 5},
			{x: 1, y: 6}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 6}, {x: 5, y: 6}, {x: 6, y: 6}
		]
	},
	staggeredSquareFour: {
		title: 'Staggered Square Four',
		cols: 18,
		rows: 18,
		tileWidth: 4,
		tileHeight: 4,
		tiles: [
			{x: 1, y: 2}, {x: 5, y: 2}, {x: 9, y: 2}, {x: 13, y: 2},
				{x: 3, y: 6}, {x: 7, y: 6}, {x: 11, y: 6}, {x: 15, y: 6},
			{x: 1, y: 10}, {x: 5, y: 10}, {x: 9, y: 10}, {x: 13, y: 10},
				{x: 3, y: 14}, {x: 7, y: 14}, {x: 11, y: 14}, {x: 15, y: 14}
		]
	},
	waffleFive: {
		title: 'Waffle Five',
		cols: 5,
		rows: 5,
		tileWidth: 1,
		tileHeight: 1,
		tiles: [
			{x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1},
			{x: 1, y: 2},				{x: 3, y: 2}, 				{x: 5, y: 2},
			{x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: 3},
			{x: 1, y: 4}, 				{x: 3, y: 4}, 				{x: 5, y: 4},
			{x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5},
		]
	},
	hourglass: {
		title: 'Hourglass',
		cols: 5,
		rows: 5,
		tileWidth: 1,
		tileHeight: 1,
		tiles: [
			{x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1},
						  {x: 2, y: 2}, {x: 3, y: 2}, {x: 4, y: 2},
										{x: 3, y: 3},
						  {x: 2, y: 4}, {x: 3, y: 4}, {x: 4, y: 4},
			{x: 1, y: 5}, {x: 2, y: 5}, {x: 3, y: 5}, {x: 4, y: 5}, {x: 5, y: 5},
		]
	},
	hexagon: {
		title: 'Hexagon',
		cols: 10,
		rows: 10,
		tileWidth: 2,
		tileHeight: 2,
		tiles: [
								{x: 4, y: 1}, {x: 6, y: 1},
			{x: 1, y: 3}, {x: 3, y: 3}, {x: 5, y: 3}, {x: 7, y: 3}, {x: 9, y: 3},
			{x: 1, y: 5}, {x: 3, y: 5}, {x: 5, y: 5}, {x: 7, y: 5}, {x: 9, y: 5},
			{x: 1, y: 7}, {x: 3, y: 7}, {x: 5, y: 7}, {x: 7, y: 7}, {x: 9, y: 7},
			{x: 1, y: 9}, {x: 3, y: 9}, {x: 5, y: 9}, {x: 7, y: 9}, {x: 9, y: 9}
		]
	}
}