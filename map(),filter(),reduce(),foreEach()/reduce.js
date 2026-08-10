/***  reduce() method combine all element of an array and gives only a single value  ***/


//maximum element from an array
let marks = [45, 78, 34, 66,99];

let highestMark = marks.reduce( (accumulator, currentvalue) => {
    return currentvalue > accumulator ? currentvalue : accumulator;
},marks[0]);

console.log(highestMark);//99





//total price of shopping cart

let cart = [
    {name:"laptop", price:3500, qunatity:1},
    {name:"mobile", price:1500, qunatity:3},
    {name:"television", price:3500, qunatity:2}
];

let totalPrice = cart.reduce((finalPrice, product) => {
    return finalPrice + (product.price * product.qunatity);
},0);

console.log(totalPrice)//15000