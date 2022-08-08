// Find cheapest price phone from this array
const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'blue'},
    {name: 'Walton', camera: 12, storage: '32gb', price: 20000, color: 'silver'},
    {name: 'iphone', camera: 24, storage: '32gb', price: 86000, color: 'black'},
    {name: 'Huawei', camera: 12, storage: '64gb', price: 22000, color: 'navy-blue'},
    {name: 'Xaomi', camera: 12, storage: '32gb', price: 25000, color: 'blue'},
    {name: 'Oppo', camera: 12, storage: '32gb', price: 26000, color: 'white'}
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let x of phones) {
        if (x.price < cheapest.price) {
            cheapest = x;
        }
    }
    return cheapest;
}
console.log(cheapestPhone(phones));