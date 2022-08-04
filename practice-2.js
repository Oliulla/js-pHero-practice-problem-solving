// write a function called make_avg() which will take an array of integers and the size of that array and return the 
// average of those values

function makeAvg(a, b) {
    let total = 0;
    let avg;
    for (let i = 0; i < b; i++) {
        total = total + a[i];
    }
    return avg = total / b;
}
let arrNum = [10, 20, 30];
let arrNumLen = arrNum.length;
let result = makeAvg(arrNum, arrNumLen);
console.log(result);