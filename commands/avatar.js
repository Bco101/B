const Discord = require("discord.js");
const cooldown = new Set();

exports.run = async (client, message, args) => {
  if (cooldown.has(message.author.id)) {
            message.channel.send("<@" + message.author.id + ">" + " กรุณารอ 1 นาทีก่อนพิมพ์คำสั่งใหม่อีกรอบ");
  } else {
  const user = message.mentions.users.first() || message.author;
  const avatarEmbed = new Discord.MessageEmbed()
        .setColor(0xffb73b)
        .setAuthor("รูปโปรไฟล์ " + user.username)
        .setImage(user.avatarURL({dynamic : true}) + "?size=512");
  message.channel.send(avatarEmbed);
  cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 60000);
    }
}