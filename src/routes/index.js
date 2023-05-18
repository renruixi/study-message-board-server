const router = require('koa-router')()
const schedule = require('node-schedule');

router.get('/', async (ctx, next) => {
  schedule.scheduleJob(`10 * * * * *`, function(){
    console.log('定时任务执行')
  });
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
