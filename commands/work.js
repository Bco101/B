const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
	
	let user = message.author;
    let author = await db.fetch(`infoUser_${user.id}.cooldown.work`)
	
	let timeout = 60000;
	
	if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
		
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .setDescription(`คุณเพิ่งทำงานไป\n\nลองใหม่อีกครั้งใน ${time.minutes} นาที ${time.seconds} วิ`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['นักเขียนโปรแกรม','ก่อสร้าง','พ่อครัว','ขับรถเมล','ทหาร','ช่างซ่อม']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .setDescription(`คุณได้ทำงานเป็น ${replies[result]} และได้เงินจำนวน ${amount}`);
        message.channel.send(embed1)
        
        db.add(`infoUser_${user.id}.money`, amount)
        db.set(`infoUser_${user.id}.cooldown.work`, Date.now())
    };
		
}