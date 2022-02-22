const resetBtn = document.getElementById("reset-btn");
const plusTree = document.getElementById("plus-3");
const plusNine = document.getElementById("plus-9");
const lessTwo = document.getElementById("less-2");

const placeResult = document.getElementById("place-result");
let counter = 0;

// n -> 0
resetBtn.addEventListener("click", () => {
  counter = 0;
  placeResult.textContent = counter;
});
// n + 3
plusTree.addEventListener("click", () => {
  counter += 3;
  placeResult.textContent = counter;
});
// n + 9
plusNine.addEventListener("click", () => {
  counter += 9;
  placeResult.textContent = counter;
});
// n - 2
lessTwo.addEventListener("click", () => {
  counter -= 2;
  placeResult.textContent = counter;
});
