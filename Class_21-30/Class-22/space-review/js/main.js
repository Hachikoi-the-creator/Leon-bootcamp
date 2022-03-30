//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const nums = [1, 4, 6, 7];
console.log(nums.reduce((a, b) => a + b));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squareIt = (arr) => arr.map(item => item ** 2);

//Create a function that takes string
//Print the reverse of that string to the console
const reversedStr = (str = "") => str.split("").reverse().join("");

//Create a function that takes in a string
//Alert if the string is a palindrome or not - guess that's it www
const checkPali = (str = "") => str.split("").reverse().join("") === str;
