//Create a stopwatch object that has four properties and three methods
const myStopwatch = {
  minutes: 0,
  seconds: 0,
  miliSeconds: 0,
  color: "Blacl",
  addTime: function (min, sec, milisec) {
    this.minutes += min;
    this.seconds += sec;
    this.miliSeconds += milisec;
  },
  reset: () => {
    this.minutes = 0;
    this.seconds = 0;
    this.miliSeconds = 0;
  },
  showTime: function () {
    console.log(`min: ${this.minutes}:${this.seconds}:${this.miliSeconds}`);
  },
};

myStopwatch.addTime(1, 35, 40);
console.log(myStopwatch.minutes);
myStopwatch.showTime();