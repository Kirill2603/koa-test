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
const router_1 = __importDefault(require("@koa/router"));
const router = new router_1.default();
const User = require('./models/userSchema');
router.get('/', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = 'Hello!';
}));
router.get('/users', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.body = yield User.find({});
}));
router.post('/users', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ctx.body = yield User.create(ctx.request.body);
    }
    catch (e) {
        ctx.body = e.message;
        ctx.status = 500;
    }
}));
exports.default = router;