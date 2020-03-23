
//timer versions

//setTimeout(function () { console.log('im delay') }, 1000);

// let handler = function () {
//     console.log('Hello i delayed');
// };
// setTimeout(handler, 1000);

//arrow version
//setTimeout(() => console.log('Hello iam delayed'), 1000);
setTimeout(name => console.log(`${name} am delayed`), 1000, 'Subramanian');

//////////////////////////////////////////////////////////////////////////////

const sayGreet = callback => {
    let name = 'subramanian'
    //setTimeout(callback, 3000, name);
    setTimeout(() => {
        callback(name)
    }, 1000);
};
sayGreet(name => {
    console.log(`${name} am delayed function!`)
});
////////////////////////////////////////////////////////////////////////////////////
//timer with biz logic : i want to create simple async application with timer

const getUser = (success, failure) => {
    let user = {
        id: 1,
        name: 'admin'
    }
    let error = {
        message: 'User not found',
        code: 500
    }
    //biz logic
    if (user) {
        setTimeout(success, 1500, user);
    } else {
        setTimeout(failure, 1500, error) //error handling
    }
}
getUser(user => console.log(user), err => console.log(err));

//////////////////////////////////////////////////////////////////////////////////

//what if two settimeout having same timeout :
//output is based registeration who has registered first
setTimeout(name => console.log(`${name} am delayed`), 500, 'Subramanian');
setTimeout(name => console.log(`${name} am delayed`), 500, 'Ram');
//////////////////////////////////////////////////////////////////////////////
//can we have 0 ms as timeout , what will happen
   //0ms is not timer, at least one time it should be processed by event loop.
setTimeout(name => console.log(`${name} am delayed`), 0, 'Geetha');



