const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
	let user = message.author;
	
	var fish_a = await db.fetch(`infoUser.${user.id}.inv.fish.<:1_:742413101265059911>`)
	var fish_b = await db.fetch(`infoUser.${user.id}.inv.fish.<:2_:742414967919345726>`)
	var fish_c = await db.fetch(`infoUser.${user.id}.inv.fish.<:3_:742414968015683726>`)
	var fish_d = await db.fetch(`infoUser.${user.id}.inv.fish.<:4_:742414968867258411>`)
	var fish_e = await db.fetch(`infoUser.${user.id}.inv.fish.<:5_:742414967957094412>`)
	var fish_f = await db.fetch(`infoUser.${user.id}.inv.fish.<:6_:742414968590172320>`)
	var ore_a = await db.fetch(`infoUser.${user.id}.inv.fish.<:ore1:742456866197602435>`)
	var ore_b = await db.fetch(`infoUser.${user.id}.inv.fish.<:ore2:742456867145515028>`)
	var ore_c = await db.fetch(`infoUser.${user.id}.inv.fish.<:ore3:742456867221143613>`)
	var ore_d = await db.fetch(`infoUser.${user.id}.inv.fish.<:ore4:742456867472670821>`)
	fish_a = fish_a || 0
	fish_b = fish_b || 0
	fish_c = fish_c || 0
	fish_d = fish_d || 0
	fish_e = fish_e || 0
	fish_f = fish_f || 0
	ore_a = ore_a || 0
	ore_b = ore_b || 0
	ore_c = ore_c || 0
	ore_d = ore_d || 0
	var total_items_cost = fish_a*3 + fish_b*5 + fish_c*7 + fish_d*9 + fish_e*12 + fish_f*15 + ore_a*5 + ore_b*7 + ore_c*9 + ore_d*12;
	
	if (total_items_cost == 0) {
		let ntsell = new Discord.MessageEmbed()
		.setColor(0xffb73b)
		.setDescription("ไม่มีอะไรให้ขาย");
		return message.channel.send(ntsell)
		}
	
	let sellcom = new Discord.MessageEmbed()
	.setColor("#ffb73b")
	.setDescription("ขายของได้ทั้งหมด " + total_items_cost + " บาท");
	message.channel.send(sellcom)
	
	db.add(`infoUser.${user.id}.money`, total_items_cost)
	db.delete(`infoUser.${user.id}.inv.space`)
	db.delete(`infoUser.${user.id}.inv.fish.<:1_:742413101265059911>`)
	db.delete(`infoUser.${user.id}.inv.fish.<:2_:742414967919345726>`)
	db.delete(`infoUser.${user.id}.inv.fish.<:3_:742414968015683726>`)
	db.delete(`infoUser.${user.id}.inv.fish.<:4_:742414968867258411>`)
	db.delete(`infoUser.${user.id}.inv.fish.<:5_:742414967957094412>`)
	db.delete(`infoUser.${user.id}.inv.fish.<:6_:742414968590172320>`)
	db.delete(`infoUser.${user.id}.inv.fish.<:ore1:742456866197602435>`)
    db.delete(`infoUser.${user.id}.inv.fish.<:ore2:742456867145515028>`)
	db.delete(`infoUser.${user.id}.inv.fish.<:ore3:742456867221143613>`)
	db.delete(`infoUser.${user.id}.inv.fish.<:ore4:742456867472670821>`)
		
}