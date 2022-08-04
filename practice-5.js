// write a function that given 13 multiplier table
function multiplier(n) {
    let mulArr = [];
    for (let i = 1; i <= 10; i++) {
        let nums = n * i;
        mulArr.push(nums);
    }
    return mulArr;
}
let multiTable = multiplier(7);
console.log(multiTable);