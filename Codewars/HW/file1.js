function camelize(stry) {
  res = "";
  stry = stry.split("-");// str -> list
  stry = stry.filter((e) => e.length > 1);//only keep those larger than 0

  stry[1] = stry[1].charAt(0).toUpperCase() + stry[1].slice(1); // capitalize in JS...
  try {
    stry[2] = stry[2].charAt(0).toUpperCase() + stry[2].slice(1);
  } catch (error) {
    // pass
  }
  let a = stry.join("");
  return a;
}

function camelize2(str) {
  return str
    .split('-') // 'my-long-word' => ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] => ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // ['my', 'Long', 'Word'] => 'myLongWord'
}



