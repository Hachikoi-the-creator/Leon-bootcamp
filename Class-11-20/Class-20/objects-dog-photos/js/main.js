//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => {
    console.log(res);
    document.querySelector('img').src = res.message;
  }).catch(error => {
    console.log(error);
  });