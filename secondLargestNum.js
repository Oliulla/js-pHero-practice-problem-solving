const arr = [64, 37, 28, 80, 10, 84];
function secondLargest(n) {
    let firstL = n[0];
    let secondL = 0;
    for (let i = 0; i<n.length; i++) {
        let elm = n[i];
        if (elm > firstL) {
            secondL = firstL;
            firstL = elm;
        } 

    }
    return {secondL, firstL};
}
console.log(secondLargest(arr));