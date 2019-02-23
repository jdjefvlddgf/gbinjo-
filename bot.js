const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548858805069545504")
setInterval(function() {
channel.send(`by [مجهول/nasto] GG`);
}, 30)
})

client.login(process.env.BOT_TOKEN);