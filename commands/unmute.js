const Discord = require('discord.js');
module.exports = {
    name: "unmute",
    description: "Unmutes someone",
    execute(message, args){
        let noperm = new Discord.MessageEmbed()
        .setTitle("Insufficient permissions.")
        .setDescription(`${message.author} You do not have permission to perfom this command.`)
        .setColor("#FF0000")
        .setTimestamp();

        let nomention = new Discord.MessageEmbed()
        .setTitle("You didn't mention anyone.")
        .setDescription("Make sure to mention someone.")
        .setColor("#FF0000")
        .setTimestamp();

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(noperm);
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.channel.send(nomention);
        let muterole = message.guild.roles.cache.find(role => role.name === "Muted");
        let notmute = new Discord.MessageEmbed()
        .setTitle("Not muted.")
        .setDescription(`${member.user} is not muted`)
        .setColor("#800000")
        .setTimestamp();

        if(!member.roles.cache.has(muterole.id)) return message.reply(notmute);
 
        let unmute = new Discord.MessageEmbed()
        .setTitle("Unmuted.")
        .setDescription(`${member.user} has been unmuted.`)
        .setColor("#800000")
        .setTimestamp();
 

        member.roles.remove(muterole.id);
        message.channel.send(unmute);
 
    }

}