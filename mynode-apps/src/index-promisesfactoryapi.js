//Promise Object creations

//Using factory methods

//Only Success

function getInfo() {
    return Promise.resolve('Info'); //Promise Object
}
// console.log('start');
// let pro = getInfo();
// //Get Async Result
// pro.then(res => console.log(res));
// console.log('end');

//short cut to get Promise : Builder Pattern/CommandChain Pattern.

// getInfo()
//     .then(res => console.log(res));

getInfo()
    .then(console.log);
////////////////////////////////////////////////////////////////////////////////////
//Only error

function getError() {
    return Promise.reject('Something went Wrong!!!');
}
getError().catch(console.log)
///////////////////////////////////////////////////////////////////////////////////
//Promise.resolve and reject 

const getUser = () => {
    let fakeUser = {
        id: 1,
        name: 'admin'
    };
    if (fakeUser) {
        return Promise.resolve(fakeUser);
    } else {
        return Promise.reject({ code: 500, err: 'User not Found!!' });
    }
};
getUser()
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log('getUser Async Operation has been done!!!'));

