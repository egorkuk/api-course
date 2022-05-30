const { InlineKeyboard } = require('../buttons')

module.exports.CommandHandler = (bot) => {
  bot.start(async (ctx) => {
    await ctx.replyWithHTML('Привет, я научу тебя работать с Rest API', InlineKeyboard.buttons_start())
  })

}
