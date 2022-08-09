// calculate electrecity bill
// first 100 ---> 5tk per unit
// second 100 ---> 6tk per unit
// for more than 200 units 7tk for every unit more than 200 units
function electrecityBill(units) {
    if (units <= 100) {
        const firstHunPrice = units * 5;
        return firstHunPrice;
    } else if (units <= 200) {
        const secondHunPrice = (100 * 5) + (units - 100) * 6;
        return secondHunPrice;
    } else {
        const restBillPrice = (100 * 5) + (100 * 6) + ((units - 200) * 7);
        return restBillPrice;
    }
}
console.log(electrecityBill(100));