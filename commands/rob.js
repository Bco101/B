const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
	
let user = message.mentions.members.first()
let author = await db.fetch(`infoUser.${user.id}.cooldown.rob`)
let author2 = await db.fetch(`infoUser.${user.id}.money`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription(`คุณเพิ่งปล้นไป\n\nกรุณาลองอีกรอบใน ${time.minutes} นาที ${time.seconds} วิ`);
    message.channel.send(timeEmbed)
  } else {
	  
let pleasemention = new Discord.MessageEmbed()
  .setColor(0xffb73b)
  .setDescription(`กรุณาระบุคนที่ต้องการปล้น`);

if (!user) {
    return message.channel.send(pleasemention)
}
	  
let targetuser = await db.fetch(`infoUser.${user.id}.money`)

let robyourself = new Discord.MessageEmbed()
  .setColor(0xffb73b)
  .setDescription(`คุณปล้นตัวเองไม่ได้`);

if (user.id === message.author.id) {
    return message.channel.send(robyourself)
}

let moneyEmbed = new Discord.MessageEmbed()
  .setColor(0xffb73b)
  .setDescription(`คุณต้องใช้ 100 บาท เพื่อซื้ออุปกรณ์ปล้น`);

if (author2 < 100) {
    return message.channel.send(moneyEmbed)
}

let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor(0xffb73b)
  .setDescription(`${user.user.username} ไม่มีอะไรให้ปล้น`);
  
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2)
}

let random = Math.floor(Math.random() * 100) + 1;

let embed = new Discord.MessageEmbed()
.setDescription(`คุณได้ปล้น ${user} พร้อมเงินจำนวน ${random}`)
.setColor(0xffb73b)
message.channel.send(embed)

db.subtract(`infoUser.${user.id}.money`, random)
db.add(`infoUser_${message.author.id}.money`, random)
db.set(`infoUser_${message.author.id}.cooldown.rob`, Date.now())
  
};
	
}