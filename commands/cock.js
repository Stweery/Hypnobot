module.exports = {
    name: "cock",
    description: "no desc. needed.",
    execute(message, args){
        let lower = args[0];
        let bigger = String(lower).toLowerCase();
        if(!bigger)
        message.channel.send("8=====D");
        if(bigger === "big")
        message.channel.send("8===================D");
        if(bigger === "bigger")
        message.channel.send("8============================================D");
        if(bigger === "biggest")
        message.channel.send("8===========================================================================================D")
    }
}