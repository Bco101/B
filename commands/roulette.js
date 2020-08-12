const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
    let user = message.author;
	  
	function isOdd(num) { 
	    if ((num % 2) == 0) return false;
		else if ((num % 2) == 1) return true;
	}
	
    let colour = args[0];
	let money = parseInt(args[1]);
	let moneydb = await db.fetch(`infoUser_${user.id}.money`)
	
	let random = Math.floor(Math.random() * 37);
	
	let noamount = new Discord.MessageEmbed()
	.setColor(0xffb73b)
	.setDescription(`กรุณาระบุจำนวนเงิน\n\nตัวอย่าง : .roulette ดำ 100`);
	
	let youdonthave = new Discord.MessageEmbed()
	.setColor(0xffb73b)
	.setDescription(`คุณไม่มีจำนวนเงินที่ว่า`);
	
	let negativemoney = new Discord.MessageEmbed()
	.setColor(0xffb73b)
	.setDescription(`ไม่สามารถพนันเงินติดลบได้`);
	
	let selectcolor = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription(`กรุณาระบุสี\n\nแดง(r) [1.5x] ดำ(b) [2x] เขียว(g) [15x]`);
	
	if (!colour)  return message.channel.send(selectcolor);
	colour = colour.toLowerCase()
	if (!money) return message.channel.send(noamount);
	if (money > moneydb) return message.channel.send(youdonthave);
	if (message.content.includes('-')) return message.channel.send(negativemoney);
	
	if (colour == "b" || colour.includes("ดำ")) colour = 0;
	else if (colour == "r" || colour.includes("แดง")) colour = 1;
    else if (colour == "g" || colour.includes("เขียว")) colour = 2;
    else return message.channel.send(selectcolor);
	
	if (random == 0 && colour == 2) {
        money *= 15
        db.add(`infoUser_${user.id}.money`, money)
		db.add(`infoUser_${user.id}.stats.roulette_win`, 1)
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`🟢 คุณชนะและได้เงินจำนวน ${money}\n\nจำนวนคูณเงิน : 15x`);
        message.channel.send(moneyEmbed1)
    } else if (isOdd(random) && colour == 1) {
        money = parseInt(money * 1.5)
        db.add(`infoUser_${user.id}.money`, money)
		db.add(`infoUser_${user.id}.stats.roulette_win`, 1)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`🔴 คุณชนะและได้เงินจำนวน ${money}\n\nจำนวนคูณเงิน : 1.5x`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) {
        money = parseInt(money * 2)
		db.add(`infoUser_${user.id}.stats.roulette_win`, 1)
        db.add(`infoUser_${user.id}.money`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`⚫ คุณชนะและได้เงินจำนวน ${money}\n\nจำนวนคูณเงิน : 2x`);
        message.channel.send(moneyEmbed3)
    } else {
        db.subtract(`infoUser_${user.id}.money`, money)
		db.add(`infoUser_${user.id}.stats.roulette_lose`, 1)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`💸 คุณเสียเงินจำนวน ${money}`);
        message.channel.send(moneyEmbed4)
    }
	
}