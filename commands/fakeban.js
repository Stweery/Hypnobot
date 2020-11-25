const Discord = require('discord.js');
module.exports = {
    name: "fban",
    decription: "Fake a ban",
    execute(message, args){
        message.delete();
        var user = message.mentions.users.first() || message.author;
        var reason = args.slice(1).join(" ") || "`No reason was given.`";
        message.delete();
        let nouser = new Discord.MessageEmbed()
            .setTitle("Ban Report:")
            .setDescription(`${user} has been banned.`)
            .addField("__Reason:__", `${reason}`)
            .setColor("#8B0000")
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL({size: 1024, dynamic: true}));
            message.channel.send(nouser);
        }
    }

