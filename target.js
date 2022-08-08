// find 3 numbers from this array that's equal to target
const target = 20;
const arr = [6, 7, 3, 9, 8, 2]
function targetNum(arr) {
    let len = arr.length;
    for (let i=0; i<len; i++) {
        for (let j=0; j<len; j++) {
            for (let k=0; k<len; k++) {
                if(i != j && i != k && j != k){
                    if (arr[i] + arr[j] + arr[k] === target) {
                        return [arr[i], arr[j], arr[k]]
                    } 
                }
            }
        }
    }
}
const get3Nums = targetNum(arr);
console.log(get3Nums);