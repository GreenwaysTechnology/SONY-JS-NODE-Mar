const { findAll } = require('./services/TodoService');


async function fetchAllTodos() {
    //sync api
    //findAll().forEach(console.log)

    //async api call : callback pattern
    //   findAll(todos=>{
    //       console.log(todos)
    //   });
    //async api with promise
    //findAll().then(console.log);
    //async api with await 
    const todos = await findAll();
    console.log(todos);
}

fetchAllTodos();