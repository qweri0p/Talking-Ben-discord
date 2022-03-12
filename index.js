const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const responses = [
	"Yes",
	"No",
	"True",
	"False",
	"Hit",
	"Miss",
	"Definitely",
	"Definitely not",
	"Absolutely",
	"Absolutely not",
	"Yep",
	"Nope"
]

client.once('ready', () => {
    client.user.setPresence({ activities: [{ name: 'Yes?' }], status: 'online' });
    console.log("yes?");
});
client.on('messageCreate',message => {
    if (message.author.bot) return;
    let yes = message.content.toLowerCase()
    if (yes == 'ben') {message.channel.send({
        files: ['./ben.png'],
        content: 'Ben'
    }); return;}
    if (yes.startsWith('ben')) {
      if (yes == 'ben github' || yes == 'ben code') {message.channel.send('https://github.com/qweri0p/talking-ben-discord'); return;}
        let randomWord = Math.floor(Math.random() * responses.length);
	message.channel.send(responses[randomWord]);
	return;
    }
    if (yes.startsWith('sugoma')) {
        const sugomaEmbed = new Discord.MessageEmbed()
            .setTitle("sougon deez nuts")
            .setDescription("sus")
            .setColor("#ffffff")
            .setURL('https://sugoma.xyz/')
            .setImage('https://sugoma.xyz/content/sumoga.jpg')
            .setFooter("sussiest plant alive")
        message.channel.send({ embeds:[sugomaEmbed]
    });
    }
    if (message.content.startsWith('updateben')) {
        if (message.author.id == '354943770464354306') {
            process.exit(0);
        } else {
            message.channel.send('No!');
        }
    }
});

client.login(token);
