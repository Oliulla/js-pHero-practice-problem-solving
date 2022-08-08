/**
count simple interest
simple interest has 
P =	initial principal balance
r =	annual interest rate
t =	time (in years)
formula, SI = (p * r * t) / 100

I have to count interest amount of a specific time
**/
function simpleInterest(p, r, t) {
    return (p * r * t) / 100;
}

let principalBalance = 100000;
let rate = 5;
let time = 5;
let getInterest = simpleInterest(principalBalance, rate, time);
console.log(getInterest);