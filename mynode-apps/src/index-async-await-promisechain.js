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

const { log } = console;
async function startApp() {
    try {
        const user = await getUser();
        await login(user);
        const ctlPanel = await showControlPanel(user);
        log(`${user.name} ${ctlPanel}`);
    }
    catch (err) {
        log(err)
    } finally {
        log('done!')
    }
}
startApp();
