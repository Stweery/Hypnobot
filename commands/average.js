const math = require("mathjs");
const Discord = require("discord.js");
module.exports = {
    name: "average",
    description: "Calculates average of a number",
    execute(message, args) {
        var nums = args.join(" ");
        if(!nums){
            let nonums = new Discord.MessageEmbed()
            .setTitle("No input was given.")
            .setDescription("Please type 1 or more numbers.")
            .setColor("#FF0000")
            .setTimestamp();
            return message.channel.send(nonums);
        }
        let array = nums.split(" ");
        var average = math.mean(array);
        message.channel.send(average);
    }
}