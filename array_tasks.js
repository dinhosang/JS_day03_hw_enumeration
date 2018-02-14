const arrayTasks = {

	concat: function (arr1, arr2) {
		// // 1st Style
		// const resultArray = [];
    // resultArray.push(arr1, arr2);
    // return resultArray.reduce(function(finalArray, nextArray){
    //   return finalArray.concat(nextArray);
    // });


		// // 2nd Style
		// return arr1.concat(arr2);

    // 3rd Style - not using built-in concat
		const finalArray = []
		arr1.forEach(element => finalArray.push(element))
		arr2.forEach(element => finalArray.push(element))
		return finalArray;
	},

	insertAt: function (arr, itemToAdd, index) {
    const temparr1 = arr.slice(0, index);
    const temparr2 = arr.slice(index, arr.length);
    temparr2.unshift(itemToAdd);
    return this.concat(temparr1, temparr2);
	},

	square: function (arr) {
    // // 1st Style - old school
    // return arr.map(function(element){
    //   return element ** 2;
    // })

    // 2nd Style - ES6
		return arr.map(element => element ** 2)
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

    // // 1st Style
		// // I think Manny and I took the request to not use for loops
    // // and to try to use the more specialised enumerators a little too far.
    // // forEach is a valid option and makes more sense for some of these!
		// arr.filter(function(element, index){
    //   element === itemToFind ? resultArray.push(index) : null;
    //
		// 	// // above 'ternary' could (should?) be written as seen below.
		// 	// // Manny and I had that thought at the beginning,
		// 	// // but we also thought this ternary looked prettier :D
    //
		// 	// if(element === itemToFind){
		// 	// 	resultArray.push(index)
		// 	// }
    // });


		// 2nd Style
		// IF doesn't work in line below, also looks like it turned into a functional variable :o
    // stops being so if I wrap the right side of = in brackets
		let operation = (element, index) => element === itemToFind ? resultArray.push(index) : null;
		arr.forEach(operation)


		// // below returns null
		// console.log(operation());
    // // below returns function
		// console.log(operation);

		// below required for both styles
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
	// //
  // // idea for logic in below methods came from Manny thinking about
	// // the bubble sort he studied as part of CS/CV week. Pretty cool idea!
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

      (queryOne && queryTwo) ? finalArray.push(firstOfPair) : null;

			// if(queryOne && queryTwo){
			// 	finalArray.push(firstOfPair)
			// }

      return secondOfPair;
    })

    return finalArray;
	}


}

module.exports = arrayTasks
