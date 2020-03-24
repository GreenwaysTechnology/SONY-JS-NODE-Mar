
//nested callback.
//resolve = successhandler
//reject  =ErrorHandler
const getUser = (resolve, reject) => {
    //biz logic
    let fakeUser = {
        id: 1,
        name: 'admin'
    };

    if (fakeUser) {
        console.log('Get User is called!');
        setTimeout(resolve, 1000, fakeUser);

    } else {
        setTimeout(reject, 1000, { id: 500, err: 'User not found!' });
    }
};

//login
const login = (user, resolve, reject) => {
    //biz logic 
    if (user.name === 'admin') {
        console.log('Login is called!');
        setTimeout(resolve, 1000, { user, status: 'login Success' });
    } else {
        setTimeout(reject, 1000, { id: 500, err: 'Login failed' });

    }
}

const showControlPanel = (user, resolve, reject) => {
    //biz logic 
    if (user.name === 'admin') {
        console.log('control panel is called is called!');
        setTimeout(resolve, 1000, `You have landed Control Panel`);
    } else {
        setTimeout(reject, 1000, 'You have landed Guest Page');

    }
}

getUser(user => {
    //output of get User will be input to the login.
    login(user, response => {
        console.log(response.status)
        showControlPanel(response.user, msg => {
            console.log(msg)
        }, guestMessage => {
            console.log(guestMessage)
        });
    }, err => {
        console.log(err);
    });
}, err => {
    console.log(err);
})