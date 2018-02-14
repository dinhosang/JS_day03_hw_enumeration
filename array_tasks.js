const arrayTasks = {

	concat: function (arr1, arr2) {
    const resultArray = [];
    resultArray.push(arr1, arr2);
    return resultArray.reduce(function(finalArray, nextArray){
      return finalArray.concat(nextArray);
    });
	},

	insertAt: function (arr, itemToAdd, index) {
    const temparr1 = arr.slice(0, index);
    const temparr2 = arr.slice(index, arr.length);
    temparr2.unshift(itemToAdd);
    return this.concat(temparr1, temparr2);
	},

	square: function (arr) {
    return arr.map(function(element){
      return element ** 2;
    })
	},

	sum: function (arr) {
    return arr.reduce((runningTotal, nextNumber) => runningTotal + nextNumber)

    // return arr.reduce(function(runningTotal, nextNumber){
    //   return runningTotal + nextNumber;
    // })
	},

	removeAndClone: function (arr, valueToRemove) {
    let resultArray = [];
    resultArray = arr.filter(numberToCheck => numberToCheck !== valueToRemove)
    return resultArray;
	},

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
