//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too (OOF)

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

function clickHandle() {
  let inputy = parseInt(document.querySelector("input").value);
  const showy = document.querySelector("p");

  if (inputy > 30) {
    showy.innerHTML = "You have nothing too look forward to do you?";
  } else {
    showy.textContent = "Enjoy life while you can";
  }
}
