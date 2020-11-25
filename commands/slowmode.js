const Discord = require ('discord.js');
const ms = require("ms");
module.exports = {
    name: "slowmode",
    description: "Adds slowmode",
    execute(message, args){
        let avatar = message.author.displayAvatarURL({size: 1024, dynamic: true});
        let duration = args[0];
        if(!message.member.hasPermission("MANAGE_CHANNELS")){
            let noperm = new Discord.MessageEmbed()
            .setTitle("Insufficient permissions.")
            .setDescription(`${message.author} You do not have permission to perfom this command.`)
            .setColor("#FF0000")
            .setThumbnail(avatar)
            .setTimestamp();
            return message.channel.send(noperm)
        }
        if(!duration){
            let nodur = new Discord.MessageEmbed()
            .setTitle("No time was given")
            .setDescription("Please specify a number.")
            .setColor("#FF0000")
            .setThumbnail(avatar)
            .setTimestamp();
            return message.channel.send(nodur);
        }
        message.channel.setRateLimitPerUser(duration);
        let slowmode = new Discord.MessageEmbed()
        .setTitle("Slowmode set.")
        .setDescription(`\`${duration}\` seconds slowmode has been set to ${message.channel}`)
        .setColor("#800000")
        .setTimestamp();
        message.channel.send(slowmode);
    }
}