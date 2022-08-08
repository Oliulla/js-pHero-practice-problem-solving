// calculate shoppingCart total price 
const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3000},
];
function cartTotal(products) {
    let total = 0;
    for (let x of products) {
        const price = x.price;
        total += price;
    }
    return total;
}
console.log(cartTotal(shoppingCart));