const Telegraf = require('telegraf')
const { Markup } = Telegraf

module.exports.InlineKeyboard = {
  buttons_start: () => {
    return Markup.inlineKeyboard([
      [Markup.button.callback('Получить данные о юзере', 'getDataByUsers')],
      [Markup.button.callback('Отправить данные', 'postData')],
    ])
  }
}