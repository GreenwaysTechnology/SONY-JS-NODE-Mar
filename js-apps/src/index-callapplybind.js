//call,apply,bind :  these api will plugin the funtions 
//on to the objects dynamically with help of this keyword.
'use strict';

function getCordinate(...name) {
    console.log(` ${name} ${this.x} y ${this.y}`)
}

const map = {
    x: 1000,
    y: 3888
}
window.x = 90;
window.y = 899;

// .call(target,parameter1,parameter2...)
getCordinate.call(map, 'GooogleMap', 'goolge');
getCordinate.call(window, 'Window', 'chrome');
/////////////////////////////////////////////////////////////////////////////
//apply

function getStocks(...stocks) {
    console.log(`${this.name}`)
    console.log(stocks);
}
const stock = {
    name: 'Sony'
};
//apply
getStocks.apply(stock, [10, 20, 30, 40, 45])
//call vs apply : call takes separate parameters, where as apply takes array as parameter
////////////////////////////////////////////////////////////////////////////////
//bind vs call and apply : bind never executes function immediatly rather which returns
//copy of the function of the function only : lazy invocation
//call and apply invocation is eager invocation.


function increment() {
    return this.count++;
}
const CounterApp = {
    count: 0
}
const inc = increment.bind(CounterApp)

for (let i = 0; i < 10; i++) {
    console.log('counter', inc())
}