// sorting a number array
const rollNumber = [3, 4, 2, 5, 6, 1, 8, 9, 7];

let sortRoll = rollNumber.sort(function(a, b) {
    return a - b;
});
console.log(sortRoll);