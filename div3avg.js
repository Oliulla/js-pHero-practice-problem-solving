// calculate the average of all the numbers that is divisible by 3 from 1 - n
function div3avg(n) {
    let total = 0, count = 0;
    for(let i = 1; i<=n; i++) {
        if (i % 3 === 0) {
            total += i;
            count++
        }
    }
    const avg =  total / count;
    return avg;
}
const average = div3avg(10);
console.log(average);