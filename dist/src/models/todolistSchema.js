"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todolist = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema_1 = require("./todoSchema");
const todoListSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    todos: [todoSchema_1.todoSchema],
}, { collection: 'Todolists' });
exports.Todolist = mongoose_1.default.model('Todolist', todoListSchema);
