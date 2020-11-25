const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    description: "Tells your fortune",
    execute(message, args) {
        var fortunes = [
            "Yes",
            "No",
            "Maybe",
            "Don't know, try again",
            "You already know the answer to this",
            "No 100%",
            "Yes 100%",
            "Lmao, you thought"
        ];
        const question = args.join(" ");
        message.delete();
        let avatar = message.author.displayAvatarURL({size: 1024, dynamic: true});
        if(!question){
            let noq = new Discord.MessageEmbed()
            .setTitle("You didn't provide a question.")
            .setDescription("Ask something by typing `.8ball <question>`.")
            .setThumbnail(avatar)
            .setTimestamp();
          return message.channel.send(noq);
        }
        const embed = new Discord.MessageEmbed()
        .setTitle(`${question}`)
        .setDescription(`${fortunes[Math.floor(Math.random() * fortunes.length)]}`)
        .setThumbnail(avatar)
        .setTimestamp();
        if (args[0]) message.channel.send(message.author, embed)
        }
        
    }