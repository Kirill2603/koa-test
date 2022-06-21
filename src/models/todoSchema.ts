import  { Schema, model} from 'mongoose'

const priority = ['none', 'low', 'middle', 'high']



export const todoSchema = new Schema({
  todolist_id: {type: Schema.Types.ObjectId, required: true, ref: "Todolist"},
  title: {type: String, required: true},
  description: {type: String, required: false, default: ''},
  isDone: {type: Boolean, required: false, default: false},
  priority: {
    type: String,
    enum: { values: priority, message: `'{VALUE}' is not supported, please enter one of these: 'none', 'low', 'middle', 'high'` },
    required: false,
    default: 'none',
  },
}, {collection: 'Todos'})

export const Todo = model('Todo', todoSchema)
