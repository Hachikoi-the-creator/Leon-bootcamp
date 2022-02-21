const purpleItem = document.getElementById('purple');
const greenItem = document.getElementById('green');
const blueItem = document.getElementById('blue');
const redItem = document.getElementById('red');

const bodyStyles = document.querySelector("body").style;

purpleItem.addEventListener("click", () => {
  bodyStyles.backgroundColor = 'rgb(244, 137, 248)';
  bodyStyles.color = "whitesmoke";
});

greenItem.addEventListener("click", () => {
  bodyStyles.backgroundColor = 'rgb(160, 255, 190)';
  bodyStyles.color = "whitesmoke";
});

blueItem.addEventListener("click", () => {
  bodyStyles.backgroundColor = 'rgb(138, 255, 255)';
  bodyStyles.color = "whitesmoke";
});

redItem.addEventListener("click", () => {
  bodyStyles.backgroundColor = 'rgb(255, 147, 147)';
  bodyStyles.color = "whitesmoke";
});
