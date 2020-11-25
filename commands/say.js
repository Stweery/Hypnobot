const  Discord = require("discord.js");
module.exports = {
    name: 'say',
    description: 'Returns the message you typed.',
    execute(message, args){
        const say = args.join(" ");
        if(!say) {
        let nosay = new Discord.MessageEmbed()
        .setTitle("No input was given.")
        .setDescription("Please use the command correctly. `.say <message>`")
        .setTimestamp()
        .setColor("#FF0000");
        return message.channel.send(nosay);
        }
        message.delete();
        message.channel.send(say);
        }
    }