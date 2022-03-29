//1- Changes: list-style-image -> listStyleImage, from 
function changeCase(stry) {
  const zebra = stry.split('-')
    .map((item, i) => i == 0 ? item : capitalize(item));

  function capitalize(st) {
    return st.charAt(0).toUpperCase() + st.slice(1);;
  }
  return zebra.join('');
}



// 2 - filters items in array, > a && < b
function filterThis(arr, bigThan, smolThan) {
  return [arr, arr.filter(item => item > bigThan && item < smolThan)];
}



// 3 - sort numbers in a descending order
function sortDescending(arr = []) {
  return arr.sort((a, b) => b - a);
}



// 4 - sort words by len TODO: Fix the pass by reference here
const sortByLength = (ary) => {
  return ary.sort((a, b) => a.length - b.length);;
};



// 5x - create an extendable calculator
class ProCalculator {
  constructor(str = "") {
    this.num1 = +str.split(' ')[0];
    this.operator = str.split(' ')[1];
    this.num2 = +str.split(' ')[2];
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  }

  get showResult() {
    if (typeof this.methods[this.operator] != "function" || isNaN(this.num1) || isNaN(this.num2)) {
      return `Error operation not supported either ${this.operator} is not available or ${this.num1} or ${this.num2} are not valid inputs`;
    }

    return this.methods[this.operator](this.num1, this.num2);
  }

  addMethod(key, func) {
    this.methods[key] = func;
  }
}



// 6 - Return an array of the names given a list of objects
// const john = { name: "John", age: 25 };

const returnNames = (arr) => {
  return arr.map(item => item.name);
};



// 7 - Return an object of the full names (name + surname) & id's given a list of objects
// let john = { name: "John", surname: "Smith", id: 1 };

const FullNames = (arr) => {
  return arr.map(item => ({ fullName: `${item.name} ${item.surname}`, id: item.id }));
};



// 8 - Sort user by age
// let pete = { name: "Pete", age: 30 };

const sortUsers = (arr = []) => {
  // the optional func, is just for the sorting criteria!
  return arr.sort((prev, curr) => prev.age - curr.age);
};



// 9 - print random stuff
// get random numbers and keep pop the items that are in that index until the array is empty
function randomArr(arr) {
  const newArr = [];
  while (arr.length) {
    let randy = Math.floor(Math.random() * arr.length - 1);
    newArr.push(arr.pop(randy));
  }
  return newArr;
}



// 10x - Get average age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];
function ageAverage(arr = []) {
  // ???? why not prev.age tho?
  const cast = arr.reduce((prev, item) => prev + item.age, 0);
  return cast / arr.length;
}



