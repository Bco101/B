const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
	let user = message.author;
	
	var fish_a = await db.fetch(`inv_<:1_:742413101265059911>_${user.id}`)
	var fish_b = await db.fetch(`inv_<:2_:742414967919345726>_${user.id}`)
	var fish_c = await db.fetch(`inv_<:3_:742414968015683726>_${user.id}`)
	var fish_d = await db.fetch(`inv_<:4_:742414968867258411>_${user.id}`)
	var fish_e = await db.fetch(`inv_<:5_:742414967957094412>_${user.id}`)
	var fish_f = await db.fetch(`inv_<:6_:742414968590172320>_${user.id}`)
	var ore_a = await db.fetch(`inv_<:ore1:742456866197602435>_${user.id}`)
	var ore_b = await db.fetch(`inv_<:ore2:742456867145515028>_${user.id}`)
	var ore_c = await db.fetch(`inv_<:ore3:742456867221143613>_${user.id}`)
	var ore_d = await db.fetch(`inv_<:ore4:742456867472670821>_${user.id}`)
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
	
	db.add(`money_${user.id}`, total_items_cost)
	db.delete(`inv_space_${user.id}`)
	db.delete(`inv_<:1_:742413101265059911>_${user.id}`)
	db.delete(`inv_<:2_:742414967919345726>_${user.id}`)
	db.delete(`inv_<:3_:742414968015683726>_${user.id}`)
	db.delete(`inv_<:4_:742414968867258411>_${user.id}`)
	db.delete(`inv_<:5_:742414967957094412>_${user.id}`)
	db.delete(`inv_<:6_:742414968590172320>_${user.id}`)
	db.delete(`inv_<:ore1:742456866197602435>_${user.id}`)
	db.delete(`inv_<:ore2:742456867145515028>_${user.id}`)
	db.delete(`inv_<:ore3:742456867221143613>_${user.id}`)
	db.delete(`inv_<:ore4:742456867472670821>_${user.id}`)
		
}