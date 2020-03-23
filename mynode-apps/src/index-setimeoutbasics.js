

//async api : timers: setTimeout 

//Flow
/**
 * setTimeout(cb,1000)
 *  |
 *  ---->stack----->V8 takes decision that whether settimemout is sync or async
 *   |
 *   Async
 *    ---------->libuv
 *                  |
 *                  -----POST-----to----------OS
 *      Program control is returned to main Process
 *  node starts executing next line of code and so on...
 *    while node is running
 *             ---emits a signal of completion-----<----------<-------------os
 *    now libuv event loop starts processing signal(event)
 *          --->attach signal with callback function which is present in Event
 *                Queue
 *     then loop verfies whether stack is empty
 *           |
 *           Yes
 *             -->callback function is pushed, result is returned to main program
 * 
 */

function sayHello() {
    console.log('hello!');
}
console.log('start')
setTimeout(function () {
    console.log('I am delayed function!')
}, 1000);
sayHello();
