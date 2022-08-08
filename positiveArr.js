/**
    An array have many numbers and you hove to check each numbers
    If numbers are being positive you will put them an array else you stop the loop
    And before stopped your loop print those positive number that you got; And return those as an array;
**/

const arr = [34, 55, 26, 8, -6, 33, 467, 84];
function positiveArr(nums) {
    let posArrNums = []; 
    for (let i = 0; i<nums.length; i++) {
        const num = nums[i];
        if (num >= 0) {
            posArrNums.push(num);
        } else {
            break;
        }
    }
    return posArrNums;
}
const getPosiArr = positiveArr(arr);
console.log(getPosiArr);