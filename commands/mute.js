const Discord = require("discord.js");
const ms = require('ms');
module.exports = {
    name: "mute",
    description: "Mutes someone for an amount of time.",
    async execute(message, args){

        let noperm = new Discord.MessageEmbed()
        .setTitle("Insufficient permissions.")
        .setDescription(`${message.author} You do not have permission to perfom this command.`)
        .setColor("#FF0000")
        .setTimestamp();
 
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noperm);
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        let nomention = new Discord.MessageEmbed()
        .setTitle("No member provided.")
        .setDescription(`${message.author} Please mention a member.`)
        .setColor("#FF0000")
        .setTimestamp();

        let cannotmute = new Discord.MessageEmbed()
        .setTitle("Member can't be muted.")
        .setDescription(`${message.author} This member can't be muted.`)
        .setColor("#FF0000")
        .setTimestamp();

        if(!member) return message.channel.send(nomention);
        if(member.hasPermission("KICK_MEMBERS")) return message.reply(cannotmute);
        let muterole = message.guild.roles.cache.find(role => role.name === "Muted");

        if(!muterole){
            muterole = await message.guild.roles.create({
                data: {
                 name: 'Muted',
                 color: '#514f48',
                 permissions: [],
                },
               });
        }

        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muterole, {
                SEND_MESSAGES: false,
                SPEAK: false,
                ADD_REACTIONS: false,
            })
           });

        let time = args[1];

        if(!time) {

            let mutent = new Discord.MessageEmbed()
            .setTitle("Muted.")
            .setDescription(`${member.user} has been muted.`)
            .setColor("#800000")
            .setTimestamp();

            member.roles.add(muterole.id);
            message.channel.send(mutent);

            return;

        }

        let mutetime = new Discord.MessageEmbed()
        .setTitle("Muted.")
        .setDescription(`${member.user} has been muted for \`${ms(ms(time))}\`.`)
        .setColor("#800000")
        .setTimestamp();

        member.roles.add(muterole.id);
 
        message.channel.send(mutetime);
        setTimeout(function(){

            member.roles.remove(muterole.id)

            let unmute = new Discord.MessageEmbed()
            .setTitle("Unmuted.")
            .setDescription(`${member.user} has been auto-unmuted.\nMember was muted for: \`${ms(ms(time))}\`.`)
            .setColor("#800000")
            .setTimestamp();

            message.channel.send(unmute)
 
        }, ms(time));
 
    }
}