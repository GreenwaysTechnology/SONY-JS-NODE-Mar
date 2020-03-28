//creating routers
const express = require('express');
const TODOS = require('../mock-data/Todos');


const todoRouter = express.Router()

todoRouter.get("/list", (req, res) => {
    res.json(TODOS);
});
todoRouter.post("/", (req, res) => {
    res.json({ message: 'POST' });
});
todoRouter.put("/", (req, res) => {
    res.json({ message: 'update' });
});
todoRouter.delete("/", (req, res) => {
    res.json({ message: 'delete' });
});

module.exports = todoRouter;