const mongoose = require("mongoose");

const priority = ['none', 'low', 'middle', 'high']
const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    isDone: {type: Boolean, required: false},
    priority: {
        type: String,
        enum: priority,
        required: false,
    },
})

const todo = mongoose.model('todo', todoSchema)

const todoListSchema = new mongoose.Schema({
    title: {type: String},
    todos: [todoSchema],
});

const todoList = mongoose.model('todolist', todoListSchema)

module.exports = todoList
