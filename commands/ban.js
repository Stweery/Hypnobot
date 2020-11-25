const Discord = require('discord.js');
module.exports = {
    name: "ban",
    description: "Bans someone",
    execute(message, args){

        let noperm = new Discord.MessageEmbed()
        .setTitle("Insufficient permissions.")
        .setDescription(`${message.author} You do not have permission to perfom this command.`)
        .setColor("#FF0000")
        .setTimestamp();

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(noperm)
        let avatar = message.author.displayAvatarURL({size: 1024, dynamic: true});
        let banmember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        let nouser = new Discord.MessageEmbed()
        .setTitle("No mentioned user.")
        .setDescription("You need to mention someone.")
        .setColor("#FF0000")
        .setTimestamp()
        .setThumbnail(avatar);

        if(!banmember) return message.channel.send(nouser);

        let noban = new Discord.MessageEmbed()
        .setTitle("Cannot ban this member.")
        .setDescription(`${banmember} cannot be banned.`)
        .setColor("#FF0000")
        .setThumbnail(avatar)
        .setTimestamp();

        if(banmember.hasPermission("BAN_MEMBERS")) return message.channel.send(noban);
        
        let reason = args.slice(1).join(" ") || "`No reason was given.`";
        let banembed = new Discord.MessageEmbed()
        .setTitle(`Ban Report:`)
        .setDescription(`${banmember} has been banned.`)
        .addField("__Reason:__", `${reason}`)
        .setColor("#8B0000")
        .setTimestamp()
        message.delete();
        banmember.ban();

        message.channel.send(banembed);
    }
}