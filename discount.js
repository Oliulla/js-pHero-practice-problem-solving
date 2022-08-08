/**
    1. first 100 tickets ---> 100tk
    2. 100-200 tickets ----> 90tk
    3. 200+ --->70tk
*/
function ticketCount(q) {
    const fistHun = 100;
    const secondHun = 90;
    const restOf = 70;
    if (q <= 100) {
        const totalCost = q * fistHun;
        return totalCost;
    } else if (q <= 200) {
        const firstHunCost = 100 * fistHun;
        const restOfTics = q - 100;
        const restPrice = restOfTics * secondHun;
        const totalCost = firstHunCost + restPrice;
        return totalCost;
    } else {
        const firstHunCost = 100 * fistHun;
        const restSecondHun = 200 - 100;
        const restSecondHunPrice = restSecondHun * secondHun;
        const restOfTics = q - 200;
        const restPrice = restOfTics * restOf;
        const totalCost = firstHunCost + restSecondHunPrice + restPrice;
        return totalCost;
    }

}
const getTotal = ticketCount(120);
console.log(getTotal);