var generateTileNumbers = {
	methods: {
		$_generateTileNumbers(total17s, tileCount) {
			// reduce total17s to half or less of tileCount, if necessary, to ensure board is possible to clear
			if(total17s > tileCount / 2) total17s = Math.floor(tileCount / 2);
			// split tiles into one group per 17
			var tileGroups = getTileGroups(total17s, tileCount);
			// get starting numbers for each tile group
			var startingNumbers = getTileNumbers(tileGroups);
			// shuffle starting numbers
			shuffleArray(startingNumbers);
			return startingNumbers;
		}
	}
}

function generateStartingNumbers(total17s, tileCount) {
	return numbers;
}

function getRandomIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}

function getTileGroups(total17s, tileCount) {
	var groups = [];
	var base = Math.floor(tileCount / total17s);
	for(var s = 0; s < total17s - 1; s++) {
		groups.push(base);
	}
	var remaining = tileCount - (base * (groups.length));
	distributeRemainingGroups();
	groups.push(remaining);
	function distributeRemainingGroups() {
		while(remaining - base > 1) {
			var randomIndex = getRandomIndex(groups);
			groups[randomIndex] += 1;
			remaining--;
		}
	}
	return groups;
}

function getTileNumbers(groups) {
	var numbers = [];
	for(var g = 0; g < groups.length; g++) {
		var group = groups[g];
		var groupNums = [];
		var base = Math.floor(17 / group);
		var maxDiff = Math.ceil(base / 2);
		for(var n = 0; n < group; n++) {
			groupNums.push(base);
		}
		var remaining = 17 - (base * (groupNums.length));
		for(var gn = 0; gn < groupNums.length; gn++) {
			var change = Math.floor(Math.random() * (maxDiff + 1));
			if(groupNums[gn] - change > 0) {
				groupNums[gn] -= change;
				remaining += change;
			}
		};
		distributeRemainingNumbers();
		numbers = numbers.concat(groupNums);
	}
	function distributeRemainingNumbers() {
		while(remaining > 0) {
			var randomIndex = getRandomIndex(groupNums);
			groupNums[randomIndex] += 1;
			remaining--;
		}
	}
	return numbers;
}

function shuffleArray(arr) {
	var m = arr.length, t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = arr[m];
		arr[m] = arr[i];
		arr[i] = t;
	}
}

export default generateTileNumbers