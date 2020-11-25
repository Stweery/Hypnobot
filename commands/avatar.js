const Discord = require("discord.js");

module.exports = {
    name:"avatar",
    description:"Gets user's avatar",
    execute(message) {
        var user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({size: 1024, dynamic: true})
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(0x333333)
            .setAuthor(`${user.username} Avatar:`)
            .setImage(avatar);
        message.channel.send(avatarEmbed);
    }
}
