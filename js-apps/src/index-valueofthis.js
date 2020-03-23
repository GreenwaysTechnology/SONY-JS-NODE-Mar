'use strict'

function sayHello(){
    return this; //owner 
}
console.log(sayHello());
//Tell who is the owner of sayHello.
//Use case 1 : i am going to tell window is owner
console.log(sayHello.call(window));
//sayHello can be part of any other object

const greeter= {
   message:'Hello'
};
console.log(sayHello.call(greeter));


