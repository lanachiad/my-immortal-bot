require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;

const http = require('http');
const date = new Date();
setInterval(function() {
  http.get('http://my-immortal-telegram-bot.herokuapp.com');
  console.log('im refreshing, prepz: ' + date);
}, 60000); // every 1 minute

const bot = new TelegramBot(token, { polling: true });

bot.on('message', msg => {
  if (msg.text.toLowerCase().indexOf('/myimmortal') === 0) {
    const chatId = msg.chat.id;
    const miChapters = require('./chapters.js');
    const randNum = Math.floor(Math.random() * 36) + 1;
    const response = miChapters.chapters[randNum];

    bot.sendMessage(chatId, response);
  }
});
