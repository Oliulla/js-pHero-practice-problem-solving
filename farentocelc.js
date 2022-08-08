// Write a function that recieved farenhite temperature and will give celcius value
function farenToCelc(f) {
    let celcius = ((5 * f) - 160) / 9;
    return celcius;
}
console.log(farenToCelc(96.8));