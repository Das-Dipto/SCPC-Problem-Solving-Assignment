// TasK-1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 


// function stringReverse(word) {
//     let reverse = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//       reverse += word[i];
//     }
//     return reverse;
//   }
  
//   console.log(stringReverse("Hello World"));
//   console.log(stringReverse("Dipto Das"));
//   console.log(stringReverse("I love Javascript"));



// Task-2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// function sumOfPositiveNumbers(arrayOfNums) {
//     let sum = 0;
//     for (let num of arrayOfNums) {
//       if (num > 0) {
//         sum += num;
//       }
//     }
//     return sum;
//   }
  
//   console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7]));
//   console.log(sumOfPositiveNumbers([2, -5, 40, -3, -7]));
//   console.log(sumOfPositiveNumbers([2, 15, -10, -3, 5]));



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function mostFrequentNumber(nums) {
    let counts = {};
    let maxCount = 0;
    let mostFrequentNum;
  
    for (let num of nums) {
      counts[num] = (counts[num] || 0) + 1;
      if (counts[num] > maxCount) {
        maxCount = counts[num];
        mostFrequentNum = num;
      }
    }
  
    return mostFrequentNum;
  }
  
  console.log(mostFrequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5]));
  console.log(mostFrequentNumber([4, 4, 4, 4, 3, 3, 3, 2, 2]));
  console.log(mostFrequentNumber([6, 5, 8, 7, 2, 2, 3, 3, 1]));