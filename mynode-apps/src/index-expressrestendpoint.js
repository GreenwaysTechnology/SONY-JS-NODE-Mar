const express = require('express');
const todorouter = require('./routers/todorouter');
const booksrouter = require('./routers/booksrouter');

const port = 3001;

//create object : Application
//express is wrapper for http module
const app = express();

//bind routers with main app
app.use('/api/todos',todorouter);
app.use('/api/books',booksrouter);

app.listen(port, () => console.log('Express server is Ready!'));