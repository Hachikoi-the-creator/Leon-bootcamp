const dayName = document.getElementById("week-day");
const checkBtn = document.getElementById("check-btn");
const showResponse = document.getElementById("place-to-see");

checkBtn.addEventListener("click", todayTodo);

function todayTodo() {
  const capitalizedDay =
    dayName.value[0].toUpperCase() + dayName.value.slice(1);

  switch (dayName.value) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      showResponse.textContent = `Today is ${capitalizedDay} and you have to work! t.t`;
      break;
    case "saturday":
    case "sunday":
      showResponse.textContent = `Ayoo Today is ${capitalizedDay} let's play games!`;
      break;
    default:
      console.log("Somehow something went wrong, send help");
      break;
  }
}
