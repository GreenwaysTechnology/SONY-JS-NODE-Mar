
//functions declaration

function sayHello() {
    console.log('Hello!')
}
//function calling/ invocation
sayHello();
////////////////////////////////////////////////////////////////////////
//Args and Parameters

//a and b are args
//default values : default args
function add(a = 1, b = 1) {
    let result = a + b;
    console.log(`Add Result is ${result}`);
}
//10,10 are parameters
add(10, 10);
//parameters are hardcoded
add(1, 1);
//parameters are passed through variables
let x = 90;
let y = 90;
add(x, y);

//if no parameters are passed
add(); //undefined,undefined

add(12); //value,undefined
/////////////////////////////////////////////////////////////////////////////////

//i want to design function which should take no of parameters,but i dont know 
//in advance
//es 6 : var args : using rest operator
function logger(context, ...args) {
    //in es5 , argugments
    //console.log(arguments)
    console.log(context, args);
}
logger('Application', 'info', 'This is good message');
logger('Device', 'error', 'Something went wrong', 501);
////////////////////////////////////////////////////////////////////////////////
//return statement
function getStockValue() {
    return 100;
}
console.log(getStockValue());
function getQty() {
    let qty = 100;
    return qty;
}
console.log(getQty());
function getInfo(info) {
    return info;
}
console.log(getInfo('this is javascript!'));

function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return true;
    }
    return; //undefined : falsy value
}
login('admin', 'admin') ? console.log('Login success!') : console.log('Login failed!');
login('foo', 'foo') ? console.log('Login success!') : console.log('Login failed!');


