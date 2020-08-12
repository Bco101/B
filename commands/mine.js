const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
	
	let user = message.author;
	let bpspace = await db.fetch(`infoUser_${user.id}.inv.space`)
	if (bpspace > 100) {
		let bpmax = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("กระเป๋าเต็มแล้วกรุณาขายของก่อน");
		return message.channel.send(bpmax)
		}
	
    let author = await db.fetch(`infoUser_${user.id}.cooldown.mine`)
	
	let timeout = 60000;
	
	if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
		
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .setDescription(`คุณเพิ่งขุดแร่ไป\n\nลองใหม่อีกครั้งใน ${time.minutes} นาที ${time.seconds} วิ`);
        message.channel.send(timeEmbed)
      } else {

	    function getNumber(){
        return (getNumber.number = Math.floor(Math.random() * 3) + 1) === getNumber.lastNumber ? getNumber() : getNumber.lastNumber = getNumber.number;
        } 
		
		let moreitems = getNumber();
		
		let replies = ['<:ore1:742456866197602435>','<:ore2:742456867145515028>','<:ore3:742456867221143613>','<:ore4:742456867472670821>']
		
		if (moreitems == 1) {

        let result = Math.floor((Math.random() * replies.length));
        let amount = getNumber();
		
		await db.add(`infoUser_${user.id}.inv.space`, amount)
        await db.add(`infoUser_${user.id}.inv.mine.${replies[result]}`, amount)
        await db.set(`infoUser_${user.id}.cooldown.mine`, Date.now())
		
        let embed1 = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .addField("คุณขุดแร่ได้", `${replies[result]} จำนวน ${amount} อัน`);
        message.channel.send(embed1)
		
		} else if (moreitems == 2) {
		
        let result = Math.floor((Math.random() * replies.length));
        let result2 = Math.floor((Math.random() * replies.length));
        let amount = getNumber();
        let amount2 = getNumber();
		
		await db.add(`infoUser_${user.id}.inv.space`, amount)
		await db.add(`infoUser_${user.id}.inv.space`, amount2)
        await db.add(`infoUser_${user.id}.inv.mine.${replies[result]}`, amount)
        await db.add(`infoUser_${user.id}.inv.mine.${replies[result2]}`, amount2)
        await db.set(`infoUser_${user.id}.cooldown.mine`, Date.now())
		
        let embed2 = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .addField("คุณขุดแร่ได้", `${replies[result]} จำนวน ${amount} อัน\n${replies[result2]} จำนวน ${amount2} อัน`);
        message.channel.send(embed2)
		
		} else if (moreitems == 3) {
		
        let result = Math.floor((Math.random() * replies.length));
        let result2 = Math.floor((Math.random() * replies.length));
        let result3 = Math.floor((Math.random() * replies.length));
        let amount = getNumber();
        let amount2 = getNumber();
        let amount3 = getNumber();
		
		await db.add(`infoUser_${user.id}.inv.space`, amount)
		await db.add(`infoUser_${user.id}.inv.space`, amount2)
		await db.add(`infoUser_${user.id}.inv.space`, amount3)
        await db.add(`infoUser_${user.id}.inv.mine.${replies[result]}`, amount)
        await db.add(`infoUser_${user.id}.inv.mine.${replies[result2]}`, amount2)
        await db.add(`infoUser_${user.id}.inv.mine.${replies[result3]}`, amount3)
        await db.set(`infoUser_${user.id}.cooldown.mine`, Date.now())
		
        let embed3 = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .addField("คุณขุดแร่ได้", `${replies[result]} จำนวน ${amount} อัน\n${replies[result2]} จำนวน ${amount2} อัน\n${replies[result3]} จำนวน ${amount3} อัน`);
        message.channel.send(embed3)
		
		}
		
    };
		
}