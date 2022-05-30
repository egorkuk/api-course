const axios = require('axios')
const { InlineKeyboard } = require('../buttons')

module.exports.TextHandler = (bot) => {
  bot.on('text', (ctx) => {

    const { message, session } = ctx

    if (session.category === 'getDataByUsers') {
      axios.get('https://reqres.in/api/users?page=2').then(async (response) => {

        const usersArray = response.data

        const user = usersArray.data.filter((item) => item.last_name.startsWith(message.text))

        if (user.length > 0) {
          await ctx.replyWithPhoto(user[0].avatar)
          await ctx.replyWithHTML(`<b>First name:</b> ${user[0].first_name}\n<b>Last name:</b> ${user[0].last_name}\n<b>Email:</b> ${user[0].email}`)
        }


      })
    }

    if (session.category === 'postData') {

      const arrayData = message.text.split(' ')
      axios.post('https://reqres.in/api/users', {
        "name": arrayData[0],
        "lastname": arrayData[1],
        "email": arrayData[2]
      }).then(async (response) => {
        await ctx.reply(`Вы создали юзера.\nИмя: ${response.data.name}\nФамилия: ${response.data.lastname}\nEmail: ${response.data.email}`)

      })
    }



  })

}