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

// function mostFrequentNumber(nums) {
//     let counts = {};
//     let maxCount = 0;
//     let mostFrequentNum;
  
//     for (let num of nums) {
//       counts[num] = (counts[num] || 0) + 1;
//       if (counts[num] > maxCount) {
//         maxCount = counts[num];
//         mostFrequentNum = num;
//       }
//     }
  
//     return mostFrequentNum;
//   }
  
//   console.log(mostFrequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5]));
//   console.log(mostFrequentNumber([4, 4, 4, 4, 3, 3, 3, 2, 2]));
//   console.log(mostFrequentNumber([6, 5, 8, 7, 2, 2, 3, 3, 1]));



// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

// function findTwoNumbersWithSum(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left < right) {
//       const sum = arr[left] + arr[right];
  
//       if (sum === target) {
//         return [left, right];
//       } else if (sum < target) {
//         left++;
//       } else {
//         right--;
//       }
//     }
  
//     // If no such pair is found, return an empty array
//     return [];
//   }
  
//   console.log(findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 9));
//   console.log(findTwoNumbersWithSum([1, 8, 6, 8, 11, 15], 9));
//   console.log(findTwoNumbersWithSum([1, 10, 4, 8, 11, 15], 9));



// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

// function calculator(num1, operator, num2) {
//     switch (operator) {
//       case "+":
//         return num1 + num2;
//       case "-":
//         return num1 - num2;
//       case "*":
//         return num1 * num2;
//       case "/":
//         return num1 / num2;
//       default:
//         return "Invalid operator";
//     }
//   }
  
//   console.log(calculator(10, "+", 5));
//   console.log(calculator(10, "*", 2));
//   console.log(calculator(10, "/", 2));



//   Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

// function generateRandomPassword(length) {
//     const charset =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * charset.length);
//       password += charset[randomIndex];
//     }
//     return password;
//   }
  
//   console.log(generateRandomPassword(12));
//   console.log(generateRandomPassword(10));
//   console.log(generateRandomPassword(8));




// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
    const romanNumeralMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      const current = romanNumeralMap[roman[i]];
      const next = romanNumeralMap[roman[i + 1]];
  
      if (next && current < next) {
        result += next - current;
        i++;
      } else {
        result += current;
      }
    }
  
    return result;
  }
  
  console.log(romanToInt("IX"));
  console.log(romanToInt("XXI"));
  console.log(romanToInt("XIV"));