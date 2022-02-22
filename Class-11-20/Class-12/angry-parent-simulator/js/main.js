const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const btn = document.getElementById("yell");
const screemPlace = document.getElementById("place-to-yell");

btn.addEventListener("click", () => {
  if (firstName.value && lastName.value) {
    screemPlace.textContent = `What tf are you doing ${firstName.value} ${lastName.value}!?`;
  } else {
    screemPlace.textContent = `...`;
  }
});

// const synth = ;
// document.querySelector("#yell").addEventListener("click", run);

// function run() {
//   const fName = document.querySelector("#firstName").value;
//   const fMidName = document.querySelector("#firstMiddle").value;
//   const lMidName = document.querySelector("#lastMiddle").value;
//   const lName = document.querySelector("#lastName").value;

//   const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`;

//   document.querySelector("#placeToYell").textContent = yellText;

//   let yellThis = new SpeechSynthesisUtterance(yellText, "EN"); //Create an speakeable object

//   console.log(yellThis);
//   window.speechSynthesis.speak(yellThis); //Speak an speakable object
// }
