// Count the number of vowels in a string
function countVowels(str, vowels) {
    const getStrArr = str.split('');
    let vowel = [];
    let Count = 0;
    for (let x of vowels) {
        for (let i = 0; i<getStrArr.length; i++) {
            if (getStrArr[i] === x) {
                vowel.push(getStrArr[i]);
                Count++;
            }
        }
    }
    return {vowel, Count};
}
const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
const string = "I love myself";
console.log(countVowels(string, vowels));