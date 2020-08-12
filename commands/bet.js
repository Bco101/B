const Discord = require('discord.js');
const cooldown = new Set();

exports.run = async (client, message, args) => {
	
	if (cooldown.has(message.author.id)) {
            message.channel.send("<@" + message.author.id + ">" + " กรุณารอ 1 นาทีก่อนพิมพ์คำสั่งใหม่อีกรอบ");
    } else {
	
	let usermention = message.mentions.members.first();
	let betembed;
	
	if (!usermention) return message.channel.send("ระบุคนที่ต้องการพนันด้วย");
	
	betembed = new Discord.MessageEmbed()
	.setTitle(message.author.username + " พนันกับ " + usermention.user.username)
	.setColor(0xffb73b)
	.setImage("https://i.imgur.com/uZLVIkR.gif")
	message.channel.send(betembed)
	
	setTimeout(function(){
		
	if (usermention) {
		if (Math.random() < 0.5) {
			betembed = new Discord.MessageEmbed()
			.setTitle(message.author.username + " พนันกับ " + usermention.user.username)
			.setColor(0xffb73b)
			.setImage("https://media1.tenor.com/images/cdafdf332e1b686e21f13e36bf7356de/tenor.gif")
			.setDescription(message.author.username + " ไม่ชนะพนัน !");
		} else {
			betembed = new Discord.MessageEmbed()
			.setTitle(message.author.username + " พนันกับ " + usermention.user.username)
			.setColor(0xffb73b)
			.setImage("https://i.imgur.com/eoNuAqC.gif")
			.setDescription(message.author.username + " ชนะพนัน !");
		}
		
	    message.channel.send(betembed)
	    .catch(error => message.channel.send("เกิดข้อผิดพลาด"));
	    }
		
	}, 10000);
	
	cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 60000);
    }
	
}