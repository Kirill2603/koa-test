"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = exports.todoSchema = void 0;
const mongoose_1 = require("mongoose");
const priority = ['none', 'low', 'middle', 'high'];
exports.todoSchema = new mongoose_1.Schema({
    todolist_id: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Todolists" },
    title: { type: String, required: true },
    description: { type: String, required: false, default: '' },
    isDone: { type: Boolean, required: false, default: false },
    priority: {
        type: String,
        enum: priority,
        required: false,
        default: 'none'
    },
}, { collection: 'Todos' });
exports.Todo = (0, mongoose_1.model)('Todo', exports.todoSchema);
