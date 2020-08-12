const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
      let user = message.author;
	  
	  let money = await db.fetch(`infoUser_${user.id}.money`)
      let bank = await db.fetch(`infoUser_${user.id}.bank`)
	  
	  if (args[0] == 'all') {
		
		let embedbank = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่มีเงินให้ฝาก")
		
		if(money === 0) return message.channel.send(embedbank)
			
		db.add(`infoUser_${user.id}.bank`, money)
		db.subtract(`infoUser_${user.id}.money`, money)
		let depositallmoney = new Discord.MessageEmbed()
		.setColor(0xffb73b)
        .setDescription("ฝากเงินทั้งหมดเรียบร้อยแล้ว");
        message.channel.send(depositallmoney)
		
		} else {
			
		let moneypocket = parseInt(args[0])
			
		let noamount = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("กรุณาระบุจำนวนเงิน");
		
		if (!moneypocket) {
			return message.channel.send(noamount);
		}
		
		let negativemoney = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่สามารถฝากเงินติดลบได้");
		
		if (message.content.includes('-')) { 
		    return message.channel.send(negativemoney)
		}
		
		let donthavethatmuch = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("คุณไม่มีเงินจำนวนที่ว่า");
		
		if (money < moneypocket) {
			return message.channel.send(donthavethatmuch)
		}
	    
		let moneydeposited = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription(`คุณได้ฝากเงินจำนวน ${moneypocket} เข้าธนาคารแล้ว`);
		
		db.add(`infoUser_${user.id}.bank`, moneypocket)
		db.subtract(`infoUser_${user.id}.money`, moneypocket)
		message.channel.send(moneydeposited)
		}
		
}