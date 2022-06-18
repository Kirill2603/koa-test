const Koa = require("koa");
const KoaBody = require("koa-body")
const router = require('./router.js')
const mongoose = require("mongoose");

const MONGO_URL = 'mongodb+srv://kirill:kirill@cluster0.c5o7vvn.mongodb.net/?retryWrites=true&w=majority'

const PORT = 3000;
const app = new Koa();

app.use(KoaBody());
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(PORT, async () =>  {
    try {
        await mongoose.connect(MONGO_URL)
    } catch (e) {
        console.error(e)
    }
});