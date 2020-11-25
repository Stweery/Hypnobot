module.exports = {
    name: 'ping',
    description: 'Returns the message you typed.',
    execute(message){
        message.channel.send("Ping...").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp;
            m.edit(`Pong! **${ping}ms**`);
        })
    },
}