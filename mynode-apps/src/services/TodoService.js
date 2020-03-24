const TODOS = require('../mock-data/Todos');

class TodoService {
    constructor() {
        console.log('Todo Service is being initalized!!!');
    }
    //sync api
    // findAll(){
    //     return TODOS
    // }
    //async api ; callback pattern
    // findAll(callback) {
    //     setTimeout(callback, 1000, TODOS);
    // }
    //async api : promise Pattern

    findAll() {
        return new Promise((resolove, reject) => {
            setTimeout(resolove, 1000, TODOS);
        });
    }

}

module.exports = new TodoService();