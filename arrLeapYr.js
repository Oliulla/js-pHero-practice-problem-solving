// write a function findLeapYear() that will take the array [2023, 3034, 2025, 2028, 2030] as Parameter and check
// if each year is a leap year. if a year is a leap year insert that year in a new array, return the new array and print result
function findLeapYear(year) {
    let leapYears = [];
    for (let x in year) {
        let allYears = year[x];
        if ((allYears % 4 === 0) && (allYears % 100 !== 0) || (allYears % 400 === 0)) {
            leapYears.push(allYears);
        }
    }
    return leapYears;
}
const years = [2023, 3024, 2025, 2028, 2030];
let getYear = findLeapYear(years);
console.log(getYear);