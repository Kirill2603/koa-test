import Router from '@koa/router'
import { User } from './models/userSchema'
import { Todo } from './models/todoSchema'
import { Todolist } from './models/todolistSchema'

const router = new Router()

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

router.get('/todos', async (ctx, next) => {
  try {
    ctx.body = Todo.find({})
  }
  catch (e: any) {
    ctx.body = e.message
    ctx.status = 500
  }
})

router.post('/todos', async (ctx, next) => {
  try {
    ctx.body = await Todo.create(ctx.request.body)
  } catch (e: any) {
    ctx.body = e.message
    ctx.status = 500
  }
})

router.get('/todolists', async (ctx, next) => {
  try {
    ctx.body = await Todolist.find({})
  } catch (e: any) {
    ctx.body = e.message
    ctx.status = 500
  }
})

router.post('/todolists', async (ctx, next) => {
  try {
    ctx.body = await Todolist.create(ctx.request.body)
  } catch (e: any) {
    ctx.body = e.message
    ctx.status = 500
  }
})

export default router
