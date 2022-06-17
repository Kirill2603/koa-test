const Koa = require("koa");
const Router = require("@koa/router");

const PORT = 3000;
const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = "Hello!"
})

router.get("/users", async (ctx, next) => {
  ctx.body = [
    { id: 1, name: "Kirill", isAdmin: true },
    { id: 1, name: "Kate", isAdmin: true },
  ];
});

router.get("/posts", async (ctx, next) => {
  ctx.body = [
    { id: 1, userId: 1, title: "Hello Motherfucker!" },
    { id: 2, userId: 2, title: "Hi!" },
  ];
});


app.use(router.routes());

app.listen(PORT, () => console.log(`App listen http://localhost:${PORT}`));
