// 1 - Good 6kyu! Given an string whit words, whit numbers in between return an string of the words arranged using the numbers inside them
function nut(str = '') {
    const resArr = Array(str.split(' ').length);
    const baseArr = str.split(' ');

    for (let i = 0; i < resArr.length; i++) {// for every word in the array
        const currentWord = baseArr[i];

        for (let w = 0; w < currentWord.length; w++) {// for every letter in the word
            const currentLetter = currentWord[w];

            if (+currentLetter * 0 === 0) {//is a number
                resArr[+currentLetter - 1] = currentWord;
            }
        }
    }
    return resArr.join(' ');
}
// better solution using sort 💀
function orderPro(words) {
    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}


// 2 - check if have enough gas to reach the next gas statino
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft;
};


// 3 - special check depending on lke in a post
function likes(names = []) {
    let extra = 0;
    if (names.length > 3) extra = names.length - 2;

    switch (names.length) {
        case 0: return "no one likes this";
        case 1: return `${names[0]} likes this`;
        case 2: return `${names[0]} and ${names[1]} like this`;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        // more than 3 likes
        default: return `${names[0]}, ${names[1]} and ${extra} others like this`;
    }
}


// 4 - return the extension of a file, take into account css.module.css-like files
function returnExtension(str = "") {
    const reversedStr = str.split('').reverse().join('');
    const lastDotIndex = reversedStr.indexOf('.');
    return str.slice(-lastDotIndex);
}


// 5 -  //replace every T whit U
function DNAtoRNA(dna) {
    return [...dna].map(e => e === 'T' ? 'U' : e).join('');
}
// solution w/simple regex
function DNAtoRNA2(dna) {
    return dna.replace(/T/g, 'U');
}


// 6 - depending on the operation string, do that operaion (- + / *)
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '-':
            return value1 - value2;
        case '+':
            return value1 + value2;
        case '/':
            return value1 / value2;
        case '*':
            return value1 * value2;
        default:
            return -1;//error code
    }
}

// 7x - tribonacchi, sum up the last 3 values to get the new value of the array
// will never know why didn't fucking worked :c
function tribonacci(signature = [], resLen = 0) {
    if (resLen === 0) return [];
    if (resLen === 1) return [signature[1]];

    for (let index = 0; index < resLen - 3; index++) {
        const last3 = signature.slice(-3);
        signature.push(last3.reduce().reduce((a, b) => a + b));
    }
    console.log(signature);
}
// Good valid response
function tribonacci(signature, n) {
    for (var i = 0; i < n - 3; i++) { // iterate n times
        signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push 
    }
    return signature.slice(0, n); //return trib - length of n
}


// 8 - return the string w/len 4 
const friend = (friends = []) => friends.filter((e) => e.length === 4);


// 9 - return only the int type values
function filter_list(l) {
    return l.filter(e => typeof e === Number);
}

// 10x - return the amount of times the int given need to multiply all it's members in order to get a single unit value
function persistence(num) {
    num = num.toString();
    var times = 0;

    while (num.length > 1) {
        times++;
        num = [...num].map(e => +e).reduce((a, b) => a * b).toString();
    }

    return times;
}
