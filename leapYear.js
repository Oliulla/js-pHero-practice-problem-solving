function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log("It's leap Year");
    } else {
        console.log("It's not a leap Year");
    }
}
leapYear(2008);
