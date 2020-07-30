//server: 704802979055927357
// - tests id:738107556227973230

const BOT_TOKEN = 'XXX';

const Discord = require('discord.js');
const { CronJob } = require('cron'); //https://www.npmjs.com/package/cron

const Server = require('./Server.js');

const cron = require('cron').CronJob;
const client = new Discord.Client();

client.on('ready', () => {
  let server = new Server('738107556227973230', client);

  const myCron = new CronJob('* * * * *', () => {
    const timeNow = new Date();
    server.printToChannel(
      'Hello world' + timeNow.getHours() + ':' + timeNow.getMinutes()
    );
  });

  myCron.start();

  //server.printToChannel('Hello world');
});

client.login(BOT_TOKEN);
