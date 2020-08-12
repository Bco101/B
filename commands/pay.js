const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
	let user = message.mentions.members.first()
	
	let money = parseInt(args[1])
	
	let member = await db.fetch(`infoUser.${user.id}.money`)
	
	let nomention = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription("กรุณาระบุคนที่ต้องการโอนให้")
	
	if (!user) return message.channel.send(nomention)
		
	let yourself = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription("ไม่สามารถโอนเงินให้ตัวเองได้")
	
	if (user.id === message.author.id) return message.channel.send(yourself)
	
    let noamount = new Discord.MessageEmbed()
	.setColor(0xffb73b)
	.setDescription("กรุณาระบุจำนวนเงินที่ต้องการโอน")
	
	if (!money) return message.channel.send(noamount)
		
    let negativemoney = new Discord.MessageEmbed()
	.setColor(0xffb73b)
	.setDescription("โอนเงินติดลบไม่ได้")
	
	if (message.content.includes('-')) return message.channel.send(negativemoney)
		
    let nothavemoney = new Discord.MessageEmbed()
	.setColor(0xffb73b)
	.setDescription("ไม่มีจำนวนเงินที่ว่าให้โอน")
	
	if (member < money) return message.channel.send(nothavemoney)
		
    let transfer = new Discord.MessageEmbed()
	.setColor(0xffb73b)
	.setDescription(`💵 ทำการโอนเงินให้ ${user.user.username} จำนวน ${money}`)
	
	db.add(`infoUser.${user.id}.money`, money)
    db.subtract(`infoUser_${message.author.id}.money`, money)
	message.channel.send(transfer)
		
}