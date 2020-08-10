const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
if (!args[0]) {
	return message.channel.send("กรุณาใส่ไอดีดิสที่ต้องการยืนยัน\n\nตัวอย่าง .getverify ไอดีห้องดิส");
}

let that_discord = (args[0])
	
let verify_status_db = await db.fetch(`verify_status_${that_discord}`)
let verify_role_db = await db.fetch(`verify_role_${that_discord}`)

if (verify_status_db == null) {
	let verifyEmbednull = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription(`กรุณาเปิดใช้ยืนยันตัวตนก่อน\n\n.verify-admin on`);
    return message.channel.send(verifyEmbednull)
}

if (verify_status_db == 'ปิด') {
	let verifyEmbedoff = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription(`กรุณาเปิดใช้ยืนยันตัวตนก่อน\n\n.verify-admin on`);
    return message.channel.send(verifyEmbedoff)
}

if (verify_role_db == null) {
	let verifyEmbednr = new Discord.MessageEmbed()
    .setColor(0xffb73b)
    .setDescription(`กรุณาระบุโรลที่ต้องการให้หลังยืนยัน\n\n.verify-role ไอดีโรล`);
    return message.channel.send(verifyEmbednr)
}

if (verify_status_db == 'เปิด') {

let user = message.author;
	
const shortcode = (n) => {
    const possible = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz0123456789'
    let text = ''
    for (var i = 0; i < n + 1; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text;
}

const verifytoken = shortcode(8)

await db.set(`verify_codes_${that_discord}_${user.id}`, verifytoken)

let verify_code = await db.fetch(`verify_codes_${that_discord}_${user.id}`)

let verifyembed = new Discord.MessageEmbed()
.setColor(0xffb73b)
.setDescription(`กรุณาพิมพ์คำสั่ง\n\n.verify ${verify_code} ${that_discord}`);
message.channel.send(verifyembed)
}

}