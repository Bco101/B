const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
if (!message.member.hasPermission(['ADMINISTRATOR'])) {
	return message.channel.send("คุณไม่มีอำนาจในการจัดการยืนยันตัวตนในดิสนี้");
}

if (!args[0]) {
	return message.channel.send("กรุณาระบุ `on` หรือ `off`");
}

let verify_status = (args[0])

if (args[0] == 'on') {
	await db.set(`guildinfo.${message.guild.id}.verify.status`, 'เปิด')
	let verify_status_db = await db.fetch(`guildinfo.${message.guild.id}.verify.status`)
	let verifyembed = new Discord.MessageEmbed()
	.setColor(0xffb73b)
    .setDescription(`สถานะเปิดใช้งานยืนยันตัว\n\nสถานะ : ${verify_status_db}`);
	return message.channel.send(verifyembed)
    }
	
if (args[0] == 'off') {
	await db.set(`guildinfo.${message.guild.id}.verify.status`, 'ปิด')
	let verify_status_db = await db.fetch(`guildinfo.${message.guild.id}.verify.status`)
	let verifyembed = new Discord.MessageEmbed()
	.setColor(0xffb73b)
    .setDescription(`สถานะเปิดใช้งานยืนยันตัว\n\nสถานะ : ${verify_status_db}`);
	return message.channel.send(verifyembed)
    }

}