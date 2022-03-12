//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function jojo(num1, num2, num3, num4) {
  let resty = num1 * num2;
  if (resty > 100) {
    resty += num3 + num4;
  } else if (resty < 100) {
    resty -= Math.abs(num3 - num4);
  } else {
    resty = (resty * num3) / num4;
  }
  console.log(resty);
}
