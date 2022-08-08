// calculate shoppingCart total price 
const shoppingCart = [
    {name: 'pant', price: 3000, quantity: 4},
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 2200, quantity: 3},
];
function cartTotalCost(products) {
    let totalCost = 0;
    for (let i = 0; i<products.length; i++) {
        const product = products[i];
        const quan = product.quantity;
        const price = product.price;
        const eachProductPrice = price * quan;
        totalCost += eachProductPrice;
    }
    return totalCost;
}
console.log(cartTotalCost(shoppingCart));