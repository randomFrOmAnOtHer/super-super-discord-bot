const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "!"
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage('Pong');
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'invite')) {
		message.channel.sendMessage('https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=454681676929564672');
	}
});

client.login(settings.token);
