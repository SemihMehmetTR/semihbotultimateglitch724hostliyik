const Discord = require("discord.js");
var Jimp = require('jimp');

exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
   
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));

Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://cdn.discordapp.com/attachments/482935671720509443/505091483108376597/boo.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 1, 0).write(`./img/snip/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./img/snip/${client.user.id}-${user.id}.png`));
        }, 1000);
    });

});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tablet',
    description: 'tbc',
    usage: 'tbc'
  };
