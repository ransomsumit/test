const TeleBot = require("telebot");
var token = process.env.TOKEN;

var bot = new TeleBot({
    token: token,
    polling: true 
});


bot.on(['/hello', '/start'], async (msg) => {
    if(msg.text.toLowerCase() == '/hello' || msg.text.toLowerCase() == '/hello@any_animebot' || msg.text.toLowerCase() == '/start' || msg.text.toLowerCase() == '/start@any_animebot')
    {
        let text = `Howdy, ${ msg.from.first_name }. Thank you for using Animebot. Use the '/help' command to get to know about this bot better.\n\nJoin our updates and discussion Group for quick updates and fixes - @Any_Animebot_Group \n\nIf you liked this bot you can buy me a <a href="https://www.buymeacoffee.com/ransomsumit">COFFEE</a>\n\n<b>Bot Admins: @Ransom_s, @ryugaraj, @Ola_in_uber</b>`;
        return bot.sendMessage(msg.chat.id, text, {parseMode : "HTML", replyToMessage: msg.message_id, webPreview: false });
    }
});

console.log('Listening...');