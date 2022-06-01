exports = typeof window === "undefined" ? global : window;

exports.loops = {
  /**
   * Get the sum of two arrays…actually the sum of all their elements.
   * P.S. Each array includes only integer numbers. Output is a number too.
   *
   * @param {Array} arr1
   * @param {Array} arr2
   *
   * @outcome 627
   */
  sum: (arr1, arr2) => {
    let sum1 = 0;
    for (let i = 0; i < arr1.length; i++) {
      sum1 += arr1[i];
    }
    let sum2 = 0;
    for (let i = 0; i < arr2.length; i++) {
      sum2 += arr2[i];
    }
    return sum1 + sum2;
  },

  /**
   * Using a loop to print all even numbers up to and including n. Don’t include 0.
   *
   * @param {Number} amount how many times to loop
   *
   * @outcome 2 4 6 8 10 12 14 16 18 20 22
   */
  printEven: (amount) => {
    for(i = 1; i <= amount; i++)
		{
			if(i % 2 == 0)
			{
				System.out.print(i +"\t"); 
			}
		}	
  },

  /**
   * Using a loop to output the elements in reverse order
   *
   * @param {Array} array Array to reverse
   *
   * @outcome [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
   */
  reverse: (array) => {
    var newArr = [];
    for (var i = 0, j = array.length - 1; i < array.length; i++, j--) {      
        newArr[i] = array[j];
    }   
    return newArr;
  },

  /**
   * Given two arrays of integers. Add up each element in the same position and
   * create a new array containing the sum of each pair.
   * Assume both arrays are of the same length.
   *
   * @param {Array} arr1 Array with string and numbers
   * @param {Array} arr2 Array with string and numbers
   *
   * @outcome [10, 10, 10, 10]
   */
  sumPair: (arr1, arr2) => {
    var sum = 0;
    for (var i = 0; i < arr1; i++)
        sum += arr2[i];
    return sum;
  },

  /**
   * Given a number n Calculate the factorial of the number
   * 4 * 3 * 2 * 1 = 24
   *
   * @param {Number} n
   *
   * @outcome 24
   */
  factorial: (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      for (let i = n - 1; i >= 1; i--) {
        n *= i;
      }
      return n;
    }
  },

  /**
   * Finds the summation of every number from 1 to num.
   * The number will always be a positive integer greater than 0.
   *
   * @param {Number} number
   */
  summation: (number) => {
    let result = 0;
    for(let i = 1; i <= number; i++) {
      result = result + i;
    }
    return result
  
  },
};
