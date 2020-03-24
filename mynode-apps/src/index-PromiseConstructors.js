//promise constructors:
/**
 * 
 * Use case cases /When to use Promise:
 * 
 * 1.if your application is already in callback based
 * or
 * 2.if you want to convert any callback based programming
 *  into promise Powered
 * 
 * Solution is Promise Constructors
 * 
 */

//Callback based programmning: timer

//I have tick function which returns async result to the caller

/**function tick(success, failure) {

    let isEnabled = true;
    if (isEnabled) {
        setTimeout(success, 1000, 'Server is Started');
    } else {
        setTimeout(failure, 1000, 'Server is Failed')
    }
}


//caller
function startServer() {
    tick(status => {
        console.log(status);
    }, err => {
        console.log(err);
    });
}
startServer();
**/
//Promise Version
function tick() {
    let isEnabled = true;
    //wrap the code into Promise
    return new Promise((resolve, reject) => {
        if (isEnabled) {
            setTimeout(resolve, 1000, 'Server is Started');
        } else {
            setTimeout(reject, 1000, 'Server is Failed')
        }
    });
}

//caller
function startServer() {
    tick()
        .then(console.log)
        .catch(console.log)
        .finally(() => console.log('Async Opertion is done!'))
}
startServer();