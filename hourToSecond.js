// Write a function that recieved a parameter of hour value and it will convert to seconds
function hourToSec(hours){
    let seconds = hours * 3600;
    return seconds;
}
let getSecs = hourToSec(1);
console.log(getSecs);