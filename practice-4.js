// Write a function called oddEven() which takes an integer value and tells wheter this value is even or odd.
// You need to do it in 4 ways
// --> Has return + has parameter
// --> no return + has parameter

function oddEven(num) {
    if (num === 0) {
        return `${num} is neither Even nor Odd`;
    } else if (num % 2 === 0) {
        return `${num} is Even number`;
    } else {
        return `${num} is Odd number`;
    }
}
let checkEvenOdd = oddEven(10);
console.log(checkEvenOdd);


// no return + has parameter
function oddEvenAn(num) {
    if (num === 0) {
        console.log(`${num} is neither Even nor Odd`);
    } else if (num % 2 === 0) {
        console.log(`${num} is Even number`);
    } else {
        console.log(`${num} is Odd number`);
    }
}
oddEvenAn(100);

