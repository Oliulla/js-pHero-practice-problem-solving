/**
 * write a function name paperRequirments().
 * It takes 3 parameters
 * First parameter is how much copy of first book I want print
 * second parameter is how much copy of second book I want to print
 * Third parameter is how much copy of third book I want to print
 * 
 * First book needy pages --> 100
 * Second book needy pages --> 200
 * Third book needy pages --> 300
 * 
 * Now I have to calculate how much paper needs for all 3 types of book
**/

function paperRequirments(firstbook, secondbook, thirdbook) {
    const firstBookPages = 100;
    const secondBookPages = 200;
    const thirdBookPages = 300;

    const needFirstBookPages = firstBookPages * firstbook;
    const needSecondBookPages = secondBookPages * secondbook;
    const needThirdBookPages = thirdBookPages * thirdbook;
    return (needFirstBookPages + needSecondBookPages + needThirdBookPages); 
}
console.log(paperRequirments(1, 1, 1));