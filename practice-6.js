// write a function that receive uppercase or reguler text and will give that text lowercase
function nameLowerCase(name) {
    let lowerCase = name;
    let newName = lowerCase.toLowerCase();
    return newName;
}
let yourName = "abdur rahman";
let upperName = yourName.toUpperCase();
let lowerName = nameLowerCase(upperName);
console.log(lowerName);
