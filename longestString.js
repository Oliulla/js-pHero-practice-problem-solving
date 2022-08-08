/**
 * Write a function named bestFriend().
 * It takes a parameter of an array. Array contains some friend names.
 * You have to return longest name from that array as my best friend
**/
const arr = ['sajid', 'mamun', 'kamal', 'jubayer bin rashed', 'chinku'];
function bestFriend(names) {
    let longestName = names[0];
    for (let x of names) {
        if (x.length > longestName.length) {
            longestName = x;
        }
    }
    return longestName;
}
console.log(bestFriend(arr));