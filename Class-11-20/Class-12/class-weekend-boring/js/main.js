const placeToSee = document.getElementById("place-to-see");
const day = document.querySelector("#day");
document.querySelector("#check").addEventListener("click", check);
/*IF the number is 1-7, print monay to sunday
Otherwise round division and ask if the guess was correct */
function returnDayName(dayNum) {
  switch (day.value) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
      console.log("Something went wrong, help");
  }
}

function check() {
  if (day.value > 0 && day.value < 8) {
    let dayName = returnDayName(day.value);
    placeToSee.textContent = dayName;
  } else {
    dayName = returnDayName(Math.round(day.value));
    placeToSee.textContent = `Is ${dayName} correct?`;
  }
  console.log(day.value);
  console.log(dayName);
}
