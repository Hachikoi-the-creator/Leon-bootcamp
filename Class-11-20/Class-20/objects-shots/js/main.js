//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const input = document.querySelector('input');
const btn = document.querySelector('button');
const placeInstructions = document.querySelector('.place-instructions');
const placeImg = document.querySelector('img');
const placeName = document.querySelector('h2');

btn.addEventListener('click', () => {
  const cocType = input.value.toLowerCase();
  placeName.textContent = `${cocType.charAt(0).toUpperCase()}${cocType.slice(1)}`;
  getImg(cocType);
  getInstructions(cocType);
});


const getImg = (cocType) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocType}`)
    .then(res => res.json())
    .then(data => {
      const strChain = data.drinks[0].strDrinkThumb;
      placeImg.src = strChain;
      // console.log(strChain);
    })
    .catch(error => {
      console.log(error);
    });
};


const getInstructions = (cocType) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocType}`)
    .then(res => res.json())
    .then(data => {
      const cocId = data.drinks[0].idDrink;
      const strChain = data.drinks[0].strInstructions;
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocId}`);
      placeInstructions.textContent = strChain;
      // console.log(strChain);
    })
    .catch(error => {
      console.log(error);
    });
};