// when click on any mode, show the active mode on top, also keep a bool variable
const toBin = document.querySelector("#to-bin");
const toDec = document.querySelector("#to-dec");
const toHex = document.querySelector("#to-hex");
const showMode = document.querySelector("#result");
// ---
let onBinary = false;
let onDecimal = true;
let onHexadecimal = false;

toBin.addEventListener("click", () => {
  onBinary = true;
  onDecimal = false;
  onHexadecimal = false;
  showMode.textContent = "Binary";
});

toDec.addEventListener("click", () => {
  onBinary = false;
  onDecimal = true;
  onHexadecimal = false;
  showMode.textContent = "Decimal";
});

toHex.addEventListener("click", () => {
  onBinary = false;
  onDecimal = false;
  onHexadecimal = true;
  showMode.textContent = "Hexadecimal";
});
