function welcome() {
    console.log('welcome')
    //nested function
    function sayHello(name) {
        console.log('Hello!!!!', name);
    }
    //sayHello();
    return sayHello;
}
let hello = welcome();
hello('Subramanian');
//////////////////////////////////////////////////////////////////////////
function counter() {
    return function () {
        return 10;
    }
}
let inc = counter()
console.log(inc());

//short cut
console.log(counter()());
///////////////////////////////////////////////////////////////////////////////////
//Deep nesting: function inside funciton inside function
//CURRRY Function
function prepareCake(iceCream) {
    return function (sugar) {
        return function (milk) {
            return function (color) {
                return `${iceCream} ${sugar} ${milk} ${color} `
            }
        }
    }
}
let cake = prepareCake('cream')('sugar')('milk')('color')
console.log(`Cake : ${cake}`);