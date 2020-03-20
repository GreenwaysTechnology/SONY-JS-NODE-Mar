/**
 * 
once if you assign function to a variable, that variable is used to point that function
and that variable can be used to invoke that function.
**/

//way -1
function sayHello(name) {
    console.log('hello', name)
    return `Hello ${name}`;
}
let hello = sayHello;
//invoke that function
let result = hello('Subramanian');
console.log(result);
//////////////////////////////////////////////////////////////////////////////////

//anonmous function : function without name
let hai = function (name='defaultName') {
   //console.log(`Hai ${name}`)
   return `Hai ${name}`;
};
console.log(hai('subramanian'));
///////////////////////////////////////////////////////////////////////////////////
