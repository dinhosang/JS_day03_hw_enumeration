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

	findIndexesOf: function (arr, itemToFind) {
    let resultArray = [];
    arr.filter(function(element, index){
      element === itemToFind ? resultArray.push(index) : null;
    });
    return resultArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
    let resultArray = [];
    resultArray = arr.filter(numberToCheck => numberToCheck % 2 === 0)
    resultArray = this.square(resultArray);
    return this.sum(resultArray);
	},

	// ----------- EXTENSION ------------

	findDuplicates: function (arr) {
    let startArray = arr.sort();
    let middleArray = [];
    let finalArray = [];

    startArray.reduce(function(firstOfPair, secondOfPair){
      firstOfPair === secondOfPair ? middleArray.push(firstOfPair) : null;
      return secondOfPair;
    })

    middleArray.forEach(function(number){
      finalArray.includes(number) ? null : finalArray.push(number);
    });
    return finalArray;
	}

}

module.exports = arrayTasks
