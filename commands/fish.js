const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {
	
	let user = message.author;
	let bpspace = await db.fetch(`inv_space_${user.id}`)
	if (bpspace > 100) {
		let bpmax = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("กระเป๋าเต็มแล้วกรุณาขายของก่อน");
		return message.channel.send(bpmax)
		}
	
    let author = await db.fetch(`fish_${user.id}`)
	
	let timeout = 60000;
	
	if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
		
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .setDescription(`คุณเพิ่งตกปลาไป\n\nลองใหม่อีกครั้งใน ${time.minutes} นาที ${time.seconds} วิ`);
        message.channel.send(timeEmbed)
      } else {
		 
		function getNumber(){
        return (getNumber.number = Math.floor(Math.random() * 3) + 1) === getNumber.lastNumber ? getNumber() : getNumber.lastNumber = getNumber.number;
        }
		
		let moreitems = getNumber();
		
		let replies = ['<:1_:742413101265059911>','<:2_:742414967919345726>','<:3_:742414968015683726>','<:4_:742414968867258411>','<:5_:742414967957094412>','<:6_:742414968590172320>']
		
		if (moreitems == 1) {
		
        let result = Math.floor((Math.random() * replies.length));
        let amount = getNumber();
		
		await db.add(`inv_space_${user.id}`, amount)
        await db.add(`inv_${replies[result]}_${user.id}`, amount)
        await db.set(`fish_${user.id}`, Date.now())
		
        let embed1 = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .addField("คุณตกปลาได้", `${replies[result]} จำนวน ${amount} ตัว`);
		return message.channel.send(embed1)
		
		} else if (moreitems == 2) {
			
		let result = Math.floor((Math.random() * replies.length));
		let result2 = Math.floor((Math.random() * replies.length));
        let amount = getNumber();
		let amount2 = getNumber();
		
		await db.add(`inv_space_${user.id}`, amount)
		await db.add(`inv_space_${user.id}`, amount2)
        await db.add(`inv_${replies[result]}_${user.id}`, amount)
		await db.add(`inv_${replies[result2]}_${user.id}`, amount2)
        await db.set(`fish_${user.id}`, Date.now())
		
        let embed2 = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .addField("คุณตกปลาได้", `${replies[result]} จำนวน ${amount} ตัว\n${replies[result2]} จำนวน ${amount2} ตัว`);
		return message.channel.send(embed2)
		
		} else if (moreitems == 3) {
			
		let result = Math.floor((Math.random() * replies.length));
		let result2 = Math.floor((Math.random() * replies.length));
		let result3 = Math.floor((Math.random() * replies.length));
        let amount = getNumber();
		let amount2 = getNumber();
		let amount3 = Math.floor(Math.random() * 3) + 1;
		
		await db.add(`inv_space_${user.id}`, amount)
		await db.add(`inv_space_${user.id}`, amount2)
		await db.add(`inv_space_${user.id}`, amount3)
        await db.add(`inv_${replies[result]}_${user.id}`, amount)
		await db.add(`inv_${replies[result2]}_${user.id}`, amount2)
		await db.add(`inv_${replies[result3]}_${user.id}`, amount3)
        await db.set(`fish_${user.id}`, Date.now())
		
        let embed2 = new Discord.MessageEmbed()
        .setColor("#ffb73b")
        .addField("คุณตกปลาได้", `${replies[result]} จำนวน ${amount} ตัว\n${replies[result2]} จำนวน ${amount2} ตัว\n${replies[result3]} จำนวน ${amount3} ตัว`);
		return message.channel.send(embed2)
		
		}
		
    };
		
}