//NaN use case 1; if you do numerical compuation against undefined

let price = 100; //number
let qty; // undefined
let totalPrice = price * qty; // number * undefined
console.log(`total price ${totalPrice}`);

//Type conversion : implicit
let x = "10";//type is string but value is number
let y = 10;
let totalValue = x * y; // x value is converted into number first and then computation starts
console.log(`Total Value ${totalValue}`)

//Type convserion : explicity Using parse Utilty
let a = "10";
let b = 90;
let totalA = parseFloat(a) + b;
console.log(`Parse Functions ${totalA}`);

//Use case 2:NaN during type conversion
let stockValue = "$10"; 
//let totalStock = stockValue * 10; // stockvalue is converted from string to number but special character will cause nan
let totalStock = parseInt(stockValue) * 10;
console.log(`Type conversion Error ${totalStock}`);

