// write a function that can print any random number between two given numbers (including them)

function getRandomNum(min, max) {
    let random = Math.floor(Math.random() * (max - min  + 1)) + min;
    return random;
}
let getRandom = getRandomNum(3, 6);
console.log(getRandom);