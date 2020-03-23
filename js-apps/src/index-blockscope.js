//block scope:

//with hoisting :
// function validate(name) {
//     if (name) {
//         //block
//         var message = 'Hello'
//     }
//     console.log(message);
//    // console.log(foo); //not defined

// }
// //avoiding hositing : using ieff functions
// function validate(name) {
//     if (name) {
//         //block
//         (function(){
//             var message = 'Hello'
//         })
//     }
//     console.log(message);
//    // console.log(foo); //not defined

// }
//avoiding hoisting using let/const keyword
function validate(name) {
    if (name) {
        let message = 'Hello';
    }
    console.log(message);
}

validate();


