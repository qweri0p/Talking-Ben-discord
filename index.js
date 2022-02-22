const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once('ready', () => {
    client.user.setPresence({ activities: [{ name: 'Yes?' }], status: 'online' });
    console.log("yes?");
});
client.on('messageCreate',message => {
    if (message.author.bot) return;
    if (message.content.startsWith('ben')) {
        let randomWord = Math.floor(Math.random() * 7);
        switch (randomWord) {
            case 0:
                message.channel.send("Yes?");
                break;
            case 1:
                message.channel.send("No");
                break;
            case 2:
                message.channel.send("Ahaha");
                break;
            case 3:
                message.channel.send("I don't know");
                break;
            case 4:
                message.channel.send("What?");
                break;
            case 5:
                message.channel.send("Definitely");
                break;
            case 6:
                message.channel.send("Nope");
                break;
        }
    }
});

client.login(token);