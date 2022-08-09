// Crate a multiplication table with recursive function
function multiplicationTable(n) {
    let total = 1;
    let empArr = []
    for (let i = 1; i <= 10; i++) {
        total = `${n} * ${i} = ${i * n}`;
        empArr.push(total)
    }
    return empArr;
}
let getResult = multiplicationTable(20);
console.log(getResult);