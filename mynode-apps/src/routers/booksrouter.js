//creating routers
const express = require('express');
const TODOS = require('../mock-data/Todos');


const booksRouter = express.Router()

//books
booksRouter.get("/list", (req, res) => {
    res.json({ message: 'books  - GET' });
});
booksRouter.post("/", (req, res) => {
    res.json({ message: 'books -POST' });
});
booksRouter.put("/", (req, res) => {
    res.json({ message: 'books-update' });
});
booksRouter.delete("/", (req, res) => {
    res.json({ message: 'books-delete' });
});
module.exports = booksRouter;