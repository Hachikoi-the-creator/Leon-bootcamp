// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the consolelet
let favDrink = "wo'ah";
console.log(favDrink.trim());
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiWords = "apple chesse cake sweety Aryashi";
console.log(multiWords.match("apple"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rockThingy = () => {
  const options = ["rock", "paper", "scissors"];
  let index = Math.round(Math.random() * (3 - 1)) + 1;
  return options[index];
};

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const doIWin = (youOoption = "") => {
  const oponent = rockThingy();
  const yours = youOoption.toLowerCase();
  // win cases
  if ((yours == 'rock' && oponent == 'scissors') || (yours == 'paper' && oponent == 'rock') || (yours == 'scissors' && oponent == 'paper')) {
    console.log("You win");
  }
  // lose cases
  else if ((yours == 'rock' && oponent == 'paper') || (yours == 'paper' && oponent == 'scissors') || (yours == 'scissors' && oponent == 'rock')) {
    console.log("You LOSE");
  }
  // tie
  else { console.log("-TIE-"); }
};

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const gameEmulator = (arrChoice = []) => {
  arrChoice.forEach((item) => doIWin(item));
};

gameEmulator(["rock", "paper", "scissors"]);