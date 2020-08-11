const Discord = require("discord.js");
const FiveM = require("fivem");
const FiveShit = require("../apis/fivem-dynamic.js");

exports.run = async (client, message, args) => {
	
	let whatip = (args[0])
	
	if (!whatip) {
        return message.channel.send('กรุณาระบุ IP:PORT');
    }
	
	let fivemip = new FiveM.Server(`${whatip}`)
	let fiveshitip = new FiveShit.Server(`${whatip}`)
	let isonline = await fivemip.getServerStatus().then(function(data) {return data;})
	
	if (isonline == false) {
	let notonline = new Discord.MessageEmbed()
	    .setColor(0xffb73b)
		.setDescription("เซิร์ฟเวอร์ไม่ออนไลน์");
	return message.channel.send(notonline)
	}
	
	let whathn = await fiveshitip.getHostname().then(function(data) {return data;})
	whathn = whathn.replace(/\^0/g, "").replace(/\^1/g, "").replace(/\^2/g, "").replace(/\^3/g, "").replace(/\^4/g, "").replace(/\^5/g, "").replace(/\^6/g, "").replace(/\^7/g, "").replace(/\^8/g, "").replace(/\^9/g, "")
	let pyamout = await fivemip.getPlayers().then(function(data) {return data;})
	let maxinfo = await fivemip.getMaxPlayers().then(function(data) {return data;})
	let whattags = await fivemip.getTags().then(function(data) {return data;})
	let whatlocale = await fivemip.getLocale().then(function(data) {return data;})
		
	let fiveminfo = new Discord.MessageEmbed()
	    .setColor(0xffb73b)
		.addField("เซิร์ฟเวอร์", `${whathn}`)
		.addField("สถานะเซิร์ฟเวอร์", "ออนไลน์")
		.addField("จำนวนผู้เล่น", `${pyamout}/${maxinfo}`)
		.addField("แท็ก", `${whattags}`)
		.addField("ภาษา", `${whatlocale}`);
	return message.channel.send(fiveminfo)
	
}