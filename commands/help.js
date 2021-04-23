const Discord = require('discord.js');
module.exports = {
    name: "help",
    description: "Shows each command",
    execute(message, args) {
        let choice = args[0];
        let lower = String(choice).toLowerCase();
        let file = ["./alice.png"]
        if(!choice) { 
        let mainembed = new Discord.MessageEmbed()
        .setTitle('Command Categories')
        .attachFiles(file)
        .setColor("#00ffa2")
        .setThumbnail("attachment://alice.png")
        .addFields(
            {name: '1. Fun commands.', value: "Type `.help fun` to show the Fun category.", inline: true},
            {name: "2. Moderation commands.", value: "Type `.help mod` to show the Mod. Category.", inline: true},
            {name: "3. Util.", value: "Type `.help util` to show the Util category.", inline: false},
        )
        .setFooter("Developed by Steer#6969, thank you to Astro#6666 for the sick profile pic <3.");
        message.channel.send(mainembed);
        }
        if(lower === "fun") {
            let funembed = new Discord.MessageEmbed()
            .setTitle("Fun commands:")
            .addFields(
                {name: "8ball", value: "A small command that answers your questions.\n__Usage:__ `.8ball <question>`.", inline: true},
                {name: "Dad Joke", value: "Sends a random dad joke.\n__Usage:__ `.dadjoke`.", inline: true},
                {name: "Say", value: "You basically send a message as the bot.\n__Usage:__ `.say <args>.`", inline: true},
                {name: "Fake Ban", value: "You fake-ban someone.\n__Usage:__ `.fban <mentioned_member> *<reason>`"},
                {name: "Cock", value: "You just send a cock.\n__Usage:__ `.cock *big *bigger *biggest`"},
                {name: "More to come very soon..!", value: ".. lies... it might take a while, lmao", inline: false},
            )
            .attachFiles(file)
            .setThumbnail("attachment://alice.png")
            .setColor("#00ddff")
            .setFooter("* Optional.")
            message.channel.send(funembed);
        }
        if(lower === "mod"){
            let modembed = new Discord.MessageEmbed()
            .setTitle("Moderation commands:")
            .addFields(
                {name: "Mute", value: "Mutes a member.\n__Usage:__ `.mute <member> *time`"},
                {name: "Unmute", value: "Unmutes a member.\n__Usage:__ `.unmute <mentioned_user>`"},
                {name: "kick", value: "Kicks a member.\n__Usage:__ `.kick <mentioned_member> *<reason>`"},
                {name: "Ban", value: "Bans a member.\n__Usage:__ `.ban <mentioned_member> *<reason>`"},
                {name: "Purge", value: "Deletes messages in bulk.\n__Usage:__ `.purge <amount>`"},
                {name: "Slowmode", value: "Sets a slowmode on a channel.\n__Usage:__ `.slowmode <time-in-seconds>`"},
            )
            .attachFiles(file)
            .setColor("#800000")
            .setThumbnail("attachment://alice.png")
            .setFooter("* Optional.")
            message.channel.send(modembed);
        }
        if(lower === "util"){
            let Util = new Discord.MessageEmbed()
            .setTitle("Utilities:")
            .addFields(
                {name: "Avatar", value: "Sends you the avatar of a member or yourself.\n__Usage:__ `.avatar *<mentioned_member>`"},
                {name: "Ping", value: "Displays your ping.\n__Usage:__ `.ping`"},
                {name: "Average", value: "Calculates the Average of 2 or more numbers\n__Usage:__`.average <num1> <num> *<num3>..`"},
            )
            .attachFiles(file)
            .setColor("#ffa600")
            .setThumbnail("attachment://alice.png")
            .setFooter("* Optional.")
            message.channel.send(Util);
        }
    }
}
