const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot ' + client.user.tag + ' Kullanıcı Adıyla Giriş Yaptı!');
});

client.login('ODEyMzkzNjg2NTE1NDQ5ODg2.YDAGlA.LAbv-yqrIagR8mMyKGB5DNX9w50')
