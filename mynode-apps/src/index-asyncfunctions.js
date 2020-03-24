//Async functions

async function getInfo() {
    return 'Info';    //Promise.resolve('Info'); //Promise Object
}
//calling async function
const { log } = console;
getInfo().then(log);

async function getError() {
    return Promise.reject('Something went Wrong!!!');
}
getError().catch(log)
//////////////////////////////////////////////////////////////////////////////////
const getUser = async () => {
    let fakeUser = {
        id: 1,
        name: 'admin'
    };
    if (fakeUser) {
        return fakeUser;
    } else {
        return Promise.reject({ code: 500, err: 'User not Found!!' });
    }
};
getUser()
    .then(log)
    .catch(log)
    .finally(() => log('getUser Async Operation has been done!!!'));
///////////////////////////////////////////////////////////////////////////////