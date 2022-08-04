// Make a fibonacci series

function fibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]; 
    }
    return fibo;
}
let result = fibonacci(10);
console.log(result);