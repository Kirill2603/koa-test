"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_body_1 = __importDefault(require("koa-body"));
const router_1 = __importDefault(require("./router"));
const mongoose = require('mongoose');
const MONGO_URL = 'mongodb+srv://kirill:kirill@cluster0.c5o7vvn.mongodb.net/todolistDB?retryWrites=true&w=majority';
const PORT = 3000;
const app = new koa_1.default();
app.use((0, koa_body_1.default)());
app.use(router_1.default.routes());
app.use(router_1.default.allowedMethods());
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(MONGO_URL);
    }
    catch (e) {
        console.error(e);
    }
}));
