function dup(arr) {
    let dupArr = []
    for(let i = 0; i<arr.length; i++) {
        let elm = arr[i];
        let fidIndex = arr.indexOf(elm);
        if (fidIndex != i) {
            dupArr.unshift(arr[fidIndex]);
        }
    }
    return dupArr;
}
const arr = [13, 24, 22, 15, 22, 31, 16, 24, 46, 37, 24, 86, 90, 46, 13];
const getDup = dup(arr);
console.log(getDup);