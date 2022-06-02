const ignoreClickOnMeElement = document.getElementById("my-id");

document.addEventListener("click", (event) => {
  detectClickOutside(event, ignoreClickOnMeElement);
});

function detectClickOutside(event, item) {
  const myElement = item.contains(event.target);
  if (!myElement) {
    console.log("working :D");
  }
} 