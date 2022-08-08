// suppose you have an array with 8 elements and will have to find smallest number from an array
const arr = [64, 37, 28, 80, 10, 84];
function smallestNum(n) {
    let minNum = n[0];
    for (let i = 0; i < n.length; i++) {
        const elm = n[i];
        if (elm < minNum) {
            minNum = elm;
        }
    }
    return minNum;
}
console.log(smallestNum(arr));