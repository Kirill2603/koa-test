const Router = require("@koa/router");
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

module.exports = router
