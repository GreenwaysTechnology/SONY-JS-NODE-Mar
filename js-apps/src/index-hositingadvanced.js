//hositing eg

console.log(i);
var i = 10;
console.log(i);
//Parsed code
/**
 * var i;
 * console.log(i);
   i= 10;
   console.log(i);
 */

//console.log(x);
let x = 10;
console.log(x);

/**Parsed code
console.log(x);
let x =10;
console.log(x);
*/

//myfun()//
var myfun= function(){
    console.log('Hoisting');
};
myfun()

//parsed code
 
/**
 * var myfun;
 * myfun()
 myfun= function(){
    console.log('Hoisting');
};
myfun()**/

sayHello();
function sayHello(){
    console.log('Hello')
}
sayHello();

/**
 * function sayHello(){
    console.log('Hello')
}
 * sayHello();
   sayHello();
 */





