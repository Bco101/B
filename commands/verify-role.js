const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
if (!message.member.hasPermission(['ADMINISTRATOR'])) {
	return message.channel.send("คุณไม่มีอำนาจในการจัดการยืนยันตัวตนในดิสนี้");
}

if (!args[0]) {
	return message.channel.send("กรุณาระบุไอดีโรลที่ต้องการให้หลังยืนยันตัวตนเสร็จ");
}

let verify_role = (args[0])

await db.set(`guildinfo.${message.guild.id}.verify.role`, verify_role)
let verify_role_db = await db.fetch(`guildinfo.${message.guild.id}.verify.role`)
let vroleembed = new Discord.MessageEmbed()
.setColor(0xffb73b)
.setDescription("ตั้งค่าโรลที่ให้หลังยืนยันแล้ว\n\nโรล : <@&" + verify_role_db + ">");
return message.channel.send(vroleembed)

}