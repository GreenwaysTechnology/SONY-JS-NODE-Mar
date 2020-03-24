//Promise Chaining :The output of one Promise is Input to another Promise:


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
const login = user => {
    if (user.name === 'admin') {
        return Promise.resolve(user);
    } else {
        return Promise.reject({ code: 500, err: 'Login failed!' });
    }
};

const showControlPanel = user => {
    if (user.name === 'admin') {
        return Promise.resolve(`You have landed Control Panel`);

    } else {
        return Promise.reject('You have landed Guest Page');
    }
}

function startApp() {
    // getUser()
    //     .then(user => {
    //         console.log('Get User method is called')
    //         return login(user);
    //     })
    //     .then(console.log)
    //     .catch(console.log)
    //     .finally(() => {
    //         console.log('Async Operation is Completed!!!');
    //     });
    // getUser()
    //     .then(user => login(user))
    //     .then(console.log)
    //     .catch(console.log)
    //     .finally(() => {
    //         console.log('Async Operation is Completed!!!');
    //     });

    const { log } = console;
    getUser()
        .then(login)
        .then(showControlPanel)
        .then(log)
        .catch(log)
        .finally(() => {
            log('Async Operation is Completed!!!');
        });
}
startApp();
