const insiderA = (a1, b1) => a1 + b1;
const insiderB = (a2, b2) => a2 + b2;

const insiderC = (a3, b3) => a3 + b3;

console.log(insiderC(insiderA(1, 3), insiderB(3, 5)));
