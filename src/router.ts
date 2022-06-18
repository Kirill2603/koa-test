import Router from '@koa/router'

const router = new Router()
const User = require('./models/userSchema')

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello!'
})

router.get('/users', async (ctx, next) => {
  ctx.body = await User.find({})
})

router.post('/users', async (ctx, next) => {
  try {
    ctx.body = await User.create(ctx.request.body)
  } catch (e: any) {
    ctx.body = e.message
    ctx.status = 500
  }

})

export default router
