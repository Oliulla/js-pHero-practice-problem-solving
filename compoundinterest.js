// Count compound interest
/**

P = initial principal balance
r = interest rate
n =	number of times interest applied per time period
t =	number of time periods elapsed

formula ==>CI = p(1 + r/100n)**nt
**/
function compoundInterest(p, r, n, t) {
    let CI = p * (1 + (r / (100 * n))) ** (n * t);
    return CI;
}
let principalBalance = 100000;
let rate = 5;
let nTimePeriod = 11;
let time = 5;
let getInterest = compoundInterest(principalBalance, rate, nTimePeriod, time);
console.log(getInterest);
