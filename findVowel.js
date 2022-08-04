// Find vowels from a sentence
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function coutVowels(sentence) {

    let count = 0;
    const letters = Array.from(sentence);
    console.log(letters);

    letters.forEach(function(value, index, array) {
        if (vowels.includes(value)) {
            count++;
        }
    });
    
    return count;
}
console.log(coutVowels("I love myself"));