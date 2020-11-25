const Discord = require('discord.js');
module.exports = {
    name: "kick",
    description: "Kicks someone",
    execute(message, args){

        let noperm = new Discord.MessageEmbed()
        .setTitle("Insufficient permissions.")
        .setDescription(`${message.author} You do not have permission to perfom this command.`)
        .setColor("#FF0000")
        .setTimestamp();

        let kickmember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noperm)
        let nouser = new Discord.MessageEmbed()
        .setTitle("No mentioned user.")
        .setDescription("You need to mention someone.")
        .setColor("#FF0000")
        .setTimestamp()
        
        if(!kickmember) return message.reply(nouser);

        let nokick = new Discord.MessageEmbed()
        .setTitle("Can't kick this member.")
        .setDescription(`${kickmember} can't be kicked.`)
        .setColor("#FF0000")
        .setThumbnail(message.author.displayAvatarURL({size: 1024, dynamic: true}))
        .setTimestamp();

        if(kickmember.hasPermission("KICK_MEMBERS")) return message.channel.send(nokick);

        let why = args.slice(1).join(" ") || "`No reason was given.`"
        let kickembed = new Discord.MessageEmbed()
        .setTitle(`Kick Report:`)
        .setDescription(`${kickmember} has been kicked.`)
        .addField(`__Reason:__`, `${why}`)
        .setColor("#8B0000")
        .setTimestamp();

        message.delete();
        kickmember.kick();

        message.channel.send(kickembed);
    }
}