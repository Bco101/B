const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
	if (message.author.id !== client.config.ownerid) {
	return message.channel.send("เฉพาะเจ้าของบอทเท่านั้นที่ใช้คำสั่งนี้ได้")
	}
	
    let user = message.mentions.members.first();
	
	let addamount = parseInt(args[1])
	
	if (!user) {
	let nousermention = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription("กรุณาระบุคนที่ต้องการเพิ่ม\n\nตัวอย่าง .add @ผู้ใช้ จำนวนเงิน");
    return message.channel.send(nousermention)
	}
	
	if (!addamount) {
	let noamount = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription("กรุณาระบุจำนวนเงิน\n\nตัวอย่าง .add @ผู้ใช้ จำนวนเงิน");
    return message.channel.send(noamount)
	}
	
    db.add(`money_${user.id}`, args[1])
    let bal = await db.fetch(`money_${user.id}`)
	  
	let SendMoney = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription(`เพิ่มเงินจำนวน ${args[1]} เรียบร้อยแล้ว\n\nจำนวนเงินใหม่ : ${bal}`);
    message.channel.send(SendMoney)
	  
}