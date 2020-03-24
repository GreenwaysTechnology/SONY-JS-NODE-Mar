//async ---await
//await is going to eleminate then calls.
//await will return result of async operation or may return another promise in nested
//await keyword tells "sync style of async operation"

//Returns Promise
function getInfo() {
    return Promise.resolve('Info');
}
function getError() {
    return Promise.reject('Something went Wrong!!!');
}

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
const { log } = console;
async function getInfoResult() {
    // getInfo().then(result=>console.log())
    const result = await getInfo();
    log(result);
}
getInfoResult()

async function getErrorResult() {
    try {
        const result = await getError();
        log(result);
    } catch (err) {
        log(err);
    }
}
getErrorResult()

async function getUserResult() {
    try {
        const user = await getUser();
        log(user);
    } catch (err) {
        log(err);
    } finally {
        console.log('done!')
    }
}
getUserResult();