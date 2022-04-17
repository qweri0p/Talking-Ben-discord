const Discord = require('discord.js');
const config = require('./config.json');
const say = require('./say.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

const responses = [
	'Yes',
	'No',
	'True',
	'False',
	'Hit',
	'Miss',
	'Definitely',
	'Definitely not',
	'Absolutely',
	'Absolutely not',
	'Yep',
	'Nope',
	'Positive',
	'Negative',
];
const originalResponses = [
	'Yes',
	'No',
	'Ohoho',
	'Eugh',
];

client.once('ready', () => {
	client.user.setPresence({ activities: [{ name: 'Yes?' }], status: 'online' });
	console.log('yes?');
});
client.on('messageCreate', message => {
	if (message.author.bot) return;
	const yes = message.content.toLowerCase();
	if (yes == 'ben') {
		message.channel.send({
			files: ['./ben.png'],
			content: 'Ben',
		}); return;
	}
	if (yes.startsWith('ben say ') || yes.startsWith('ben zeg ')) {
		say.command(message);
		return;
	}
	if (yes.startsWith('ben')) {
		if (yes == 'ben github' || yes == 'ben code') {
			message.channel.send('https://github.com/qweri0p/talking-ben-discord');
			return;
		}
		const randomWord = Math.floor(Math.random() * responses.length);
		message.channel.send(originalResponses[randomWord]);
		return;
	}
	if (yes.startsWith('sugoma')) {
		const sugomaEmbed = new Discord.MessageEmbed()
			.setTitle('sougon deez nuts')
			.setDescription('sus')
			.setColor('#ffffff')
			.setURL('https://sugoma.xyz/')
			.setImage('https://sugoma.xyz/content/sumoga.jpg')
			.setFooter({ text: 'sussiest dog alive' });
		message.channel.send({ embeds:[sugomaEmbed] });
	}
	if (yes.startsWith('updateben')) {
		if (message.author.id == '354943770464354306') {
			process.exit(0);
		}
		else {
			message.channel.send('No!');
		}
	}
});

client.login(config.token);
