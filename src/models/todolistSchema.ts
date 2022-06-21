import mongoose, { Schema } from 'mongoose'
import { todoSchema } from './todoSchema'

export const todoListSchema = new mongoose.Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User'},
  title: { type: String, required: true },
    todos: [{type: Schema.Types.ObjectId, ref: "Todo"}]
}, { collection: 'Todolists' })

export const Todolist = mongoose.model('Todolist', todoListSchema)







