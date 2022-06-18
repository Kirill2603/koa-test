import mongoose from 'mongoose'
import { todoSchema } from './todoSchema'


const todoListSchema = new mongoose.Schema({
    title: {type: String, required: true},
    todos: [todoSchema],
}, {collection: 'Todolists'});

export const Todolist = mongoose.model('Todolist', todoListSchema)







