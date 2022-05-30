const axios = require('axios')
//Подключаем клавиатуру (кнопки)
const { InlineKeyboard } = require('../buttons')

module.exports.CallbackHandler = (bot) => {
  bot.on('callback_query', async (ctx) => {
    const { callbackQuery } = ctx

    //Проверяем пришедшие данные. Если они соответствуют запросу RSS то предлагаем выбрать источник
    if (callbackQuery.data === 'getDataByUsers') {
      await ctx.reply('Отправь фамилию юзера')
      ctx.session.category = 'getDataByUsers'
    }

    if (callbackQuery.data === 'postData') {
      await ctx.reply('Отправь данные о юзере через пробел\nПример: Bill Clinton billclinton@gmail.com')
      ctx.session.category = 'postData'
    }

  })
}