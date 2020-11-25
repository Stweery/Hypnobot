const Discord = require("discord.js");
const math = require("mathjs");
module.exports = {
    name: "purge",
    description: "Bulk deletes messages",
    execute(message, args){
        let noperm = new Discord.MessageEmbed()
        .setTitle("Insufficient permissions.")
        .setDescription(`${message.author} You do not have permission to perfom this command.`)
        .setColor("#FF0000")
        .setTimestamp();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noperm);
        let avatar = message.author.displayAvatarURL({size: 1024, dynamic: true});
        let number = args[0];
        if(!number){
        let nonumer = new Discord.MessageEmbed()
        .setTitle("Could not see the number.")
        .setDescription(`${message.author} Please enter a number between \`1\` and \`100\``)
        .setColor("#FF0000")
        .setThumbnail(avatar)
        .setTimestamp();
        return message.channel.send(nonumer)
        }
        if(isNaN(number)){
        let nan = new Discord.MessageEmbed()
        .setTitle("Invalid Input.")
        .setDescription(`${message.author} \`${number}\` is not a number. Please enter a number between \`1\` and \`100\``)
        .setColor("#FF0000")
        .setThumbnail(avatar)
        .setTimestamp();
        return message.channel.send(nan);
        }
        let deleted = new Discord.MessageEmbed()
        .setTitle("Messages deleted.")
        .setDescription(`\`${number}\` messages have been deleted.`)
        .setColor("#8B0000")
        .setTimestamp();
        if(number <1 || number > 100){
        let invnum = new Discord.MessageEmbed()
        .setTitle("Input doesn't match with the limits.")
        .setDescription(`I can't delete \`${number}\` messages. Please enter a number between \`1\` and \`100\``)
        .setColor("#FF0000")
        .setThumbnail(avatar)
        .setTimestamp();
        return message.channel.send(invnum);
        }
        let newnumber = math.add(number, 1)
        message.channel.bulkDelete(newnumber);
        message.channel.send(deleted);
    }
}