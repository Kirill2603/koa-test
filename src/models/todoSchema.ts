import  { Schema, ObjectId, model} from 'mongoose'

const priority = ['none', 'low', 'middle', 'high']



export const todoSchema = new Schema({
  todolist_id: {type: Schema.Types.ObjectId, required: true, ref: "Todolists"},
  title: {type: String, required: true},
  description: {type: String, required: false, default: ''},
  isDone: {type: Boolean, required: false, default: false},
  priority: {
    type: String,
    enum: priority,
    required: false,
    default: 'none'
  },
}, {collection: 'todos'})

export const Todo = model('Todo', todoSchema)
