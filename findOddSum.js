// write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as parameter and will return odds sum
function findOddSum(n) {
    let oddSum = 0; 
    for (let i = 0; i < n.length; i++) {
        let numbers = n[i];
        !(numbers % 2) ? false: oddSum += numbers;
    }
    return oddSum;
}
let nums = [5, 7, 8, 10, 45, 30];
let getResult = findOddSum(nums);
console.log(getResult);