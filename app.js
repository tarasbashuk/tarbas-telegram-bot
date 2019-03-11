const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const https = require('https');
http.createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
});
setInterval(function(){
    https.get('https://tarbas-t-bot.herokuapp.com/')
},300000);

// replace the value below with the Telegram token you receive from @BotFather
const token = '780452028:AAH1_qj6n9OA1bF-4KuieY0OwrtyLe8KsuM';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.
const deadline = 1552417200;


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    switch (msg.text) {
        case '/start':
            bot.sendMessage(chatId, `Вітаю, ${msg.from.first_name}! Перелік, команд: \/deadline`);
            break;
        case '/deadline':
                   console.log(msg);
            const needZero = num => num > 9 ? num : `0${num}`;
            const time = new Date(msg.date * 1000);
            let timeLeft = (deadline - msg.date);
            bot.sendMessage(chatId, `${msg.from.first_name}, у тебе залишилось  ${parseInt(timeLeft/3600)} : ${needZero(parseInt(timeLeft%3600/60))} : ${needZero(parseInt(timeLeft%60))}  до дедлайну`);
            break;
        default:
            bot.sendMessage(chatId, `Привіт, ${msg.from.first_name}! Отримав твоє повідомлення о ${new Date(msg.date * 1000).toLocaleTimeString()}`);
    }
});
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//      switch(msg.text) {
//          case '/start':
//          bot.sendMessage(chatId, `Вітаю, ${msg.from.first_name}! Перелік, команд: \/deadline`);
//          break;
//          case '/deadline':
//          console.log(msg);
//          const time = new Date(msg.date * 1000);
//          let timeLeft = (deadline - msg.date);
//          bot.sendMessage(chatId, `${msg.from.first_name}, у тебе залишилось  ${(timeLeft/3600).toFixed(0)} : ${needZero((timeLeft%3600/60).toFixed(0))} : ${needZero((timeLeft%60).toFixed(0))}  до дедлайну`);
//        break;
//        default: 
//        bot.sendMessage(chatId, `Привіт, ${msg.from.first_name}! Отримав твоє повідомлення о ${new Date(msg.date * 1000).toLocaleTimeString()}`)
//      }
//  });

//     if (msg.text === '/start') {
//         console.log(msg);
//         const time = new Date(msg.date * 1000);
//         let timeLeft = (deadline - msg.date);
//         bot.sendMessage(chatId, `${msg.from.first_name}, у тебе залишилось  ${(timeLeft/3600).toFixed(0)} : ${needZero((timeLeft%3600/60).toFixed(0))} : ${needZero((timeLeft%60).toFixed(0))}  до дедлайну
//       `)}
//     if (msg.text === '/deadline') {
//   console.log(msg);
//   const needZero = num => num > 9 ? num : `0${num}`;
//   // send a message to the chat acknowledging receipt of their message
//   const time = new Date(msg.date * 1000);
//   let timeLeft = (deadline - msg.date);
//   bot.sendMessage(chatId, `${msg.from.first_name}, у тебе залишилось  ${(timeLeft/3600).toFixed(0)} : ${needZero((timeLeft%3600/60).toFixed(0))} : ${needZero((timeLeft%60).toFixed(0))}  до дедлайну
// `)}
// else {bot.sendMessage(chatId, `Привіт, ${msg.from.first_name}! Отримав твоє повідомлення о ${new Date(msg.date * 1000).toLocaleTimeString()}
// `);}
// });