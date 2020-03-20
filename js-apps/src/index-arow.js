//es 5 function declaration
let hai = function () {
    console.log('Hai');
};
hai();
//arrow functions

let hi = () => {
    console.log('Hai');
};
hi();
//arrow function flavours

//1.if function has only one line of body; remove {}
hi = () => console.log('Hai');
hi();
/////////////////////////////////////////////////////////////////////////////////
//2.args and parameters: multi parameters with default value
let add = (a = 0, b = 0) => {
    let r = a + b;
    console.log(`The result is ${r}`);
};
add(1, 1);
/////////////////////////////////////////////////////////////////////////////////
//3.Single parameter, no default value : drop ()
let setName = name => console.log(`Name ${name}`);
setName('Subramamanian')
////////////////////////////////////////////////////////////////////////////////
//4.No Parameter drop () / _
let greet = _ => console.log('Greetings!');
greet();
///////////////////////////////////////////////////////////////////////////////
//5.Return value
let substract = (a = 0, b = 0) => {
    return a - b;
};
console.log(substract(2, 1));
//6.only return : you can drop {} and return statement
substract = (a = 0, b = 0) => a - b;
console.log(substract(2, 1));
//////////////////////////////////////////////////////////////////////////////////
//7.single parameter ,no default value , return the same.
let stock = value => value;
console.log(stock(2000));
//////////////////////////////////////////////////////////////////////////////////
//how to pass function as parameter in arrow version.
// function startServer(connect) {
//     connect('HTTP');
// }
let startServer = connect => connect('HTTP');
// startServer(function () {
//     console.log(`Server Started!`);
// });
startServer(name => console.log(` ${name} Server Started!`));
//////////////////////////////////////////////////////////////////////////

// function startClient(connect) {
//     connect('Mobile');
// }
let startClient = connect => connect('Mobile');

let handler = name => console.log(`${name} Client is ready!`);
startClient(handler);
///////////////////////////////////////////////////////////////////////////////
//return arrow 
// function counter() {
//     return function () {
//         return 10;
//     }
// }
// const counter = () => {
//     return () => 10;
// }
const counter = () => () => 10;
let inc = counter()
console.log(inc());
console.log(counter()());
/////////////////////////////////////////////////////////////////////////////////

// function prepareCake(iceCream) {
//     return function (sugar) {
//         return function (milk) {
//             return function (color) {
//                 return `${iceCream} ${sugar} ${milk} ${color} `
//             }
//         }
//     }
// }
const prepareCake = iceCream => sugar => milk => color => `${iceCream} ${sugar} ${milk} ${color} `
let cake = prepareCake('cream')('sugar')('milk')('color')
console.log(`Cake : ${cake}`);
