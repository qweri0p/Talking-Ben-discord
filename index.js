const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once('ready', () => {
    client.user.setPresence({ activities: [{ name: 'Yes?' }], status: 'online' });
    console.log("yes?");
});
client.on('messageCreate',message => {
    if (message.author.bot) return;
    let yes = message.content.toLowerCase()
    if (yes.startsWith('ben')) {
        let randomWord = Math.floor(Math.random() * 7);
        switch (randomWord) {
            case 0:
                message.channel.send("Yes");
                break;
            case 1:
                message.channel.send("No");
                break;
            case 2:
                message.channel.send("Absolutely");
                break;
            case 3:
                message.channel.send("I think");
                break;
            case 4:
                message.channel.send("Most likely");
                break;
            case 5:
                message.channel.send("Definitely");
                break;
            case 6:
                message.channel.send("Nope");
                break;
            case 7:
                message.channel.send("Definitely not");
                break;
            case 8:
                message.channel.send("Absolutely not");
                break;          
        }
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
            message.channel.send('Only qweriop#0416 can update this bot.');
        }
    }
});

client.login(token);