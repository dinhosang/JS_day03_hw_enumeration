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

  // // original version of extension
  // // below it is a cleaned up version that is is more readable
  // // and requires fewer variables and functions being created
	// findDuplicates: function (arr) {
  //   let startArray = arr.sort();
  //   let middleArray = [];
  //   let finalArray = [];
  //
  //   startArray.reduce(function(firstOfPair, secondOfPair){
  //     firstOfPair === secondOfPair ? middleArray.push(firstOfPair) : null;
  //     return secondOfPair;
  //   })
  //
  //   middleArray.forEach(function(number){
  //     finalArray.includes(number) ? null : finalArray.push(number);
  //   });
  //   return finalArray;
	// },


	findDuplicates: function (arr) {
    let startArray = arr.sort();
    let finalArray = [];

    startArray.reduce(function(firstOfPair, secondOfPair){
			let queryOne = firstOfPair === secondOfPair;
			let queryTwo = !finalArray.includes(firstOfPair);

			// ( ) below used for clarity, not needed to succeed
      // see commented code below for another (more correct?)
      // way to write this. Manny and I had that thought
      // at the beginning but we also thought this ternary
      // looked prettier :D
      (queryOne && queryTwo) ? finalArray.push(firstOfPair) : null;

			// // above 'ternary' could (should?) be written as:
			// if(queryOne && queryTwo){
			// 	finalArray.push(firstOfPair)
			// }

      return secondOfPair;
    })

    return finalArray;
	}


}

module.exports = arrayTasks
