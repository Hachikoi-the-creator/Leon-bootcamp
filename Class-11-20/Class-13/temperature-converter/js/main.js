/*
- get the temperature to change
- get the formula and apply it to the gotten temp
- write in the document the new conversion 
*/
const fTemp = document.getElementById("f-temp");
const changeBtn = document.getElementById("change-btn");
const showRes = document.getElementById("show-result");

changeBtn.addEventListener("click", () => {
  let res = fTemp.value;
  // weird formula, that's why I hate chemistry
  res = ((res - 32) * 5) / 9;
  showRes.textContent = res;
});
