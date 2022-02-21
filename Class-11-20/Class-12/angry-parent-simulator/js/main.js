// const fName = document.querySelector("#firstName").value;
// const fMidName = document.querySelector("#firstMiddle").value;
// const lMidName = document.querySelector("#lastMiddle").value;
// const lName = document.querySelector("#lastName").value;

// document.querySelector("#yell").addEventListener("click", run);

// function run() {
//   document.querySelector("#placeToYell").innerText =
//     fName + " " + fMidName + " " + " " + lMidName + " " + lName;

//Add what you should be doing - conditionals go here

// document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

// const synth = ;
document.querySelector("#yell").addEventListener("click", run);

function run() {
  const fName = document.querySelector("#firstName").value;
  const fMidName = document.querySelector("#firstMiddle").value;
  const lMidName = document.querySelector("#lastMiddle").value;
  const lName = document.querySelector("#lastName").value;

  const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`;

  document.querySelector("#placeToYell").textContent = yellText;

  let yellThis = new SpeechSynthesisUtterance(yellText, "EN"); //Create an speakeable object
  console.log(yellThis);
  window.speechSynthesis.speak(yellThis); //Speak an speakable object
}
