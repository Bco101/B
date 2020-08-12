const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
      let user = message.author;
	  
	  let money = db.fetch(`infoUser.${user.id}.money`)
      let bank = db.fetch(`infoUser.${user.id}.bank`)
	  
	  if (args[0] == 'all') {
		
		let nomoneyinbank = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่มีเงินให้ถอน")
		
		if(bank === 0) return message.channel.send(nomoneyinbank)
		
		db.subtract(`infoUser.${user.id}.bank`, money)
        db.add(`infoUser.${user.id}.money`, money)
			
		let withdrawallmoney = new Discord.MessageEmbed()
		.setColor(0xffb73b)
        .setDescription("ถอนเงินทั้งหมดเรียบร้อยแล้ว");
        message.channel.send(withdrawallmoney)
		
		} else {
			
		let moneydabank = parseInt(args[0])
			
		let noamount = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("กรุณาระบุจำนวนเงิน");
		
		if (!moneydabank) {
			return message.channel.send(noamount);
		}
		
		let negativemoney = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่สามารถถอนเงินติดลบได้");
		
		if (message.content.includes('-')) { 
		    return message.channel.send(negativemoney)
		}
		
		let donthavethatmuch = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่มีเงินจำนวนที่ว่า");
		
		if (bank < moneydabank) {
			return message.channel.send(donthavethatmuch)
		}
	    
		let moneywithdrawed = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription(`คุณได้ถอนเงินจำนวน ${moneydabank} จากธนาคารแล้ว`);
		
		db.subtract(`infoUser.${user.id}.bank`, moneydabank)
		db.add(`infoUser.${user.id}.money`, moneydabank)
		message.channel.send(moneywithdrawed)
		}
		
}