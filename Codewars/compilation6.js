// 1 - returns if the number is squared (get by natural numbers multiplied by themselfs)
var isSquare = function (n) {
    return Math.sqrt(n) % 1 == 0;
};

// 2 - easy dubs
function find_average(array = []) {
    if (array.length == [].length) return 0;

    return array.reduce((a, b) => a + b) / array.length;
}

// 3 - given 2 word space separeted, return the initials of the person
function abbrevName(name = "") {
    return name.split(' ').map(word => word[0].toUpperCase()).join('.');
}
