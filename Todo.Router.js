const express = require('express')
const { createTodo } = require('./Todo.Controller')
const todoRouter = express.Router()

todoRouter.route('/')
            .post(createTodo)


module.exports = todoRouter