/**
 * write a function named onlyPositive().
 * It takes an array as parameter
 * Array has both positive and negative numbers
 * Now I have to create a new array of postive numbers from that mixing array
**/
const arr = [45, 87, 96, 11, 63, -56, 71, 28];
function onlyPositive(nums) {
    let positiveArr = [];
    for (let x of nums) {
        if (x >= 0) {
            positiveArr.push(x);
        }
        else {
            break;
        }
    }
    return positiveArr;
}
const getNewPosArr = onlyPositive(arr);
console.log(getNewPosArr)