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
	fish_a = fish_a || 0
	fish_b = fish_b || 0
	fish_c = fish_c || 0
	fish_d = fish_d || 0
	fish_e = fish_e || 0
	fish_f = fish_f || 0
	var total_items = fish_a + fish_b + fish_c + fish_d + fish_e + fish_f;
	var total_items_cost = fish_a*3 + fish_b*5 + fish_c*7 + fish_d*9 + fish_e*12 + fish_f*15;
	
	let invembed = new Discord.MessageEmbed()
	.setColor("#ffb73b")
    .addField("ปลาทั้งหมด", "<:1_:742413101265059911> จำนวน : " + fish_a + " <:2_:742414967919345726> จำนวน : " + fish_b + " <:3_:742414968015683726> จำนวน : " + fish_c + " <:4_:742414968867258411> จำนวน : " + fish_d + " <:5_:742414967957094412> จำนวน : " + fish_e + " <:6_:742414968590172320> จำนวน : " + fish_f)
	.addField("จำนวนมูลค่าของรวม", total_items_cost)
	.addField("จำนวนของทั้งหมด", total_items + "/100");
	message.channel.send(invembed)
		
}