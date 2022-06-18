const Router = require("@koa/router");
const router = new Router();
const User = require('./models/user')


router.get("/", async (ctx, next) => {
    ctx.body = "Hello!"
})

router.get("/users", async (ctx, next) => {
    ctx.body = await User.find({})
});

router.post('/user', async (ctx, next) => {
    try {
        ctx.body = await User.create(ctx.request.body)
    } catch (e) {
        console.error(e)
    }

})

// router.get("/posts", async (ctx, next) => {
//     ctx.body = [
//         { id: 1, userId: 1, title: "Hello Motherfucker!" },
//         { id: 2, userId: 2, title: "Hi!" },
//     ];
// });
//
// router.post("/todolist", async (ctx, next) => {
//     try {
//         ctx.body = await todoList.create({
//             title: 'first todo',
//             description: 'Hello!',
//             isDone: false,
//             priority: 'none'
//         })
//     } catch (e) {
//         console.log(e)
//     }
// });

module.exports = router
