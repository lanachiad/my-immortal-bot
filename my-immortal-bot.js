const Telebot = require('telebot');
const bot = new Telebot('694479182:AAFPAghxpDff4JlH6nzsR37JLY5mghdofXU');


bot.on('text', msg => {
  let id = msg.from.id;
  let text = msg.text;
  return bot.sendMessage(id, `You said: ${ text }`);
});

bot.connect();