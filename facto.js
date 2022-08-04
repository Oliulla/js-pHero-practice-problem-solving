// find factorial with recursive way
/** function factorialize(n) {
    if (n == 0 || n == 1){
        return 1;
    } else if (n < 0) {
        return "Factorial cant't be negative!";
    }
     else {
        return (n * (factorialize(n - 1)));
    }
}
let result = factorialize(3);
console.log(result);
**/


// calculate factorial with for loop
/** function factorialize(n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return "Negative number has no factorial value!";
    }
    
    for (let i = n-1; i >= 1; i--){
        n = n * i;
    }
    return n;
}
let result = factorialize(10);
console.log(result);
**/


// Calculate factorial with while loop
function factorialize(num) {
    let result = num;

    if (num === 0 || num === 1) {
        return 1;
    } else if (num < 0) {
        return "You cant count factorial of negative number!";
    }

    while (num > 1) {
        num--
        result *= num;        
    }
    return result;
}
let result = (factorialize(0));
console.log(result);
