//Create a mouse object that has four properties and three methods
const Mouse = {
  color: "red",
  size: "bigg",
  Function1: function () { console.log("BRO I have no ideas"); },
  Function2: function () { console.log("Yeah it's kinda late, wanna play genshin"); }
};

// easier way, no sintatic sugar (class key word)
function MouseBlueprint(color, size, func1, func2) {
  this.color = color;
  this.size = size;
  this.func1 = func1;
  this.func2 = func2;

  function funnyMan(props) {
    console.log(`my color is ${this.color} and the param is ${props}`);
  }

  function imInLove(props) {
    console.log(`I will make a callback uwu`);
    funnyMan();
  }
}