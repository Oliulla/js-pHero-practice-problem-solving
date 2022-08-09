// count numbers divisible by 3 form 1 - 20
function divisibleThree(){
    let count = 0;
    for (let x = 1; x<=20; x++) {
        if (x % 3 == 0) {
            count++;
        }
    }
    return count;
}
const getResult = divisibleThree();
console.log(getResult);