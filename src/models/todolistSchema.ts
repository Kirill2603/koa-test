import mongoose, { Schema } from 'mongoose'
import { todoSchema } from './todoSchema'


const todoListSchema = new mongoose.Schema({
    title: {type: String, required: true},
    user_id: {type: Schema.Types.ObjectId, required: true, ref: "Users"},
    todos: [todoSchema],
}, {collection: 'Todolists'});

export const Todolist = mongoose.model('Todolist', todoListSchema)







