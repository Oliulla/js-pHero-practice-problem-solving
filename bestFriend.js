// Let declar a function that will take an array as parameter
// array has name of your friends
// and you have to print your longest frined name as best friend
const arr = ['Rupok', 'Sohail', 'Samsuddin', 'Abdullah', 'Barkatullah'];
function bestFriend(names) {
    let longestName = names[0]; 
    for (let x of names) {
        if (x.length > longestName.length) {
            longestName = x;
        }
    }
    return longestName;
}
const getBestFriend = bestFriend(arr);
console.log(getBestFriend);