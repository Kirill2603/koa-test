const Koa = require("koa");
const KoaBody = require("koa-body")
const router = require('./router.js')

const PORT = 3000;
const app = new Koa();

app.use(KoaBody());
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(PORT, () => console.log(`App listen http://localhost:${PORT}`));
