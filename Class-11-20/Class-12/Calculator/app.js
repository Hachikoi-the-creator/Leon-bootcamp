// modes btns
const toBin = document.getElementById("to-bin");
const toDec = document.getElementById("to-dec");
const toHex = document.getElementById("to-hex");
const showMode = document.getElementById("mode");
// --- buttons
const additionOp = document.querySelector(".func-sum");
const subtractionOp = document.querySelector(".func-res");
const divisionOp = document.querySelector(".func-div");
const multiplicationOp = document.querySelector(".func-mult");
const clearOp = document.querySelector(".func-clear");
// -- inputs fields
const inputOne = document.getElementById("input1");
const inputTwo = document.getElementById("input2");
const resultShow = document.getElementById("result");
// -- humu humu
const operationMade = document.getElementById("operation");
let finalResult = 0;
const operationsObj = {
  sum: 0,
  rest: 1,
  multi: 2,
  div: 3,
};

// Change the text, of numeric system & update booleans
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

// Change symbol used, do operation & show result
clearOp.addEventListener("click", () => {
  operationMade.textContent = "💀";
  inputOne.value = "";
  inputTwo.value = "";
  resultShow.value = "";
  console.log("hamburger");
});

// --- Execute operations --- //
// bin->2
// dec -> 10
// hexa -> 16
additionOp.addEventListener("click", () => {
  // sum
  operationMade.textContent = "+ Addition +";

  const result = checkNumericSystem(inputOne.value, inputTwo.value);
  if (result === 2) {
    const [valOne, valTwo] = [parseInt(inputOne, 2), parseInt(inputTwo, 2)];
    finalResult = (valOne + valTwo).toString(2);
  } else if (result === 10) {
    const [valOne, valTwo] = [parseInt(inputOne), parseInt(inputTwo)];
    finalResult = valOne + valTwo;
  } else if (result === 16) {
    const [valOne, valTwo] = [parseInt(inputOne, 16), parseInt(inputTwo, 16)];
    finalResult = (valOne + valTwo).toString(16);
  } else {
    console.log("This is not supposed to be triggered, please HELP ME");
  }
  console.log(`${finalResult} ???`);
  resultShow.value = finalResult;
});

subtractionOp.addEventListener("click", () => {
  //rest
  operationMade.textContent = "- Substraction -";

  const result = checkNumericSystem(inputOne.value, inputTwo.value);
  if (result === 2) {
    const [valOne, valTwo] = [parseInt(inputOne, 2), parseInt(inputTwo, 2)];
    finalResult = (valOne + valTwo).toString(2);
  } else if (result === 10) {
    const [valOne, valTwo] = [parseInt(inputOne), parseInt(inputTwo)];
    finalResult = valOne + valTwo;
  } else if (result === 16) {
    const [valOne, valTwo] = [parseInt(inputOne, 16), parseInt(inputTwo, 16)];
    finalResult = (valOne + valTwo).toString(16);
  } else {
    console.log("This is not supposed to be triggered, please HELP ME");
  }
  console.log();
  resultShow.valuet = finalResult;
});

divisionOp.addEventListener("click", () => {
  //div
  operationMade.textContent = "/ Division /";

  const result = checkNumericSystem(inputOne.value, inputTwo.value);
  if (result === 2) {
    const [valOne, valTwo] = [parseInt(inputOne, 2), parseInt(inputTwo, 2)];
    finalResult = (valOne + valTwo).toString(2);
  } else if (result === 10) {
    const [valOne, valTwo] = [parseInt(inputOne), parseInt(inputTwo)];
    finalResult = valOne + valTwo;
  } else if (result === 16) {
    const [valOne, valTwo] = [parseInt(inputOne, 16), parseInt(inputTwo, 16)];
    finalResult = (valOne + valTwo).toString(16);
  } else {
    console.log("This is not supposed to be triggered, please HELP ME");
  }
  console.log();
  resultShow.value = finalResult;
});

multiplicationOp.addEventListener("click", () => {
  //multi
  operationMade.textContent = "* Multiplication *";

  const result = checkNumericSystem(inputOne.value, inputTwo.value);
  if (result === 2) {
    const [valOne, valTwo] = [parseInt(inputOne, 2), parseInt(inputTwo, 2)];
    finalResult = (valOne + valTwo).toString(2);
  } else if (result === 10) {
    const [valOne, valTwo] = [parseInt(inputOne), parseInt(inputTwo)];
    finalResult = valOne + valTwo;
  } else if (result === 16) {
    const [valOne, valTwo] = [parseInt(inputOne, 16), parseInt(inputTwo, 16)];
    finalResult = (valOne + valTwo).toString(16);
  } else {
    console.log("This is not supposed to be triggered, please HELP ME");
  }
  console.log();
  resultShow.valuet = finalResult;
});

const binaryRegex = /[0|1]/;
const decimalRegex = /\b/g;
const hexadecimalRegex = /([A-F]|[0-9])/g;

function checkNumericSystem(input1, input2) {
  const binConfirm = binaryRegex.test(input1) && binaryRegex.test(input2);
  const decConfirm = decimalRegex.test(input1) && decimalRegex.test(input2);
  const hexaConfirm =
    hexadecimalRegex.test(input1) && hexadecimalRegex.test(input2);

  if (decConfirm) {
    return 10;
  } else if (binConfirm) {
    return 2;
  } else if (hexaConfirm) {
    return 16;
  } else {
    console.log("WHYYYY?");
    return 96; //not nice
  }
}
// int -> bin
// 2.toString(2) -> 10

// bin -> int
// parseInt("10101", 2)
