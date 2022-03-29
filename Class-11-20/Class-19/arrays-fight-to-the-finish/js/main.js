//Create an array of movie titles. Loop through the array add each element to the h2.
const subTitle = document.querySelector("h2");
const mahMovies = ["Jhon wick 1", "Jhon wick 2", "Jhon wick 3"];
subTitle.textContent = mahMovies.join(' - ');

//Create an array of numbers. Loop through the array add three to each number and replace the old number.
const coolNumbers = [1, 7, 8, 4, 6];
const aye = coolNumbers.map(prev => prev + 3);
console.log(aye);


//Find the average of all the numbers from question two
const res = aye.reduce((prev, x) => prev + x, 0);
console.log(res);
