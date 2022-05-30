const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

//Подключаем модули NodeJS
const { Telegraf } = require('telegraf')
const LocalSession = require('telegraf-session-local')
const Server = require('./src/server/server')

//Подключаем модули которые управляют командами, колбэками и текстом
const { CommandHandler } = require('./src/handlers/commandHandler')
const { CallbackHandler } = require('./src/handlers/callbackHandler')
const { TextHandler } = require('./src/handlers/textHandler')

//Для получения bot токена идете в @botfather, вводите там команду /newbot и далее по инструкции. Полученный токен вставляете 👇
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use((new LocalSession({ database: 'db.json' })).middleware())
//Запускаем сервер
Server.configure(bot)

CommandHandler(bot)
CallbackHandler(bot)
TextHandler(bot)