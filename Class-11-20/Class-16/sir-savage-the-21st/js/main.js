//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
const placeHoldinger = document.getElementById("savage-says");

for (let index = 0; index < 21; index++) {
  if (placeHoldinger) {
    placeHoldinger.textContent += "21 ";
  } else {
    placeHoldinger.textContent = "21 ";
  }
}
