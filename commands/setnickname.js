const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	   
	  let user = message.author;
	  
	  if (args[0].length > 10) {
		  return message.reply('ชื่อเล่นต้องไม่เกิน 10 ตัวอักษร');
	  }
	  
	  if (args[0] == 'reset') {
		  db.set(`infoUser.${user.id}.profile.nickname`, 'ไม่ได้ระบุ')
		  let nickreset = new Discord.MessageEmbed()
	      .setColor(0xffb73b)
	      .setDescription(`ลบชื่อเล่นเรียบร้อย`);
	      message.channel.send(nickreset)
		  
	  } else {
	  if (!(args[0]))
		  return message.channel.send("กรุณาระบุชื่อเล่นที่ต้องการตั้ง\n\nเช่น `.setnickname ต้น`");
	  await db.set(`infoUser.${user.id}.profile.nickname`, args[0])
	  let nickname = await db.fetch(`infoUser.${user.id}.profile.nickname`)
	  
	  let nickembed = new Discord.MessageEmbed()
	  .setColor(0xffb73b)
	  .setDescription(`ตั้งชื่อเล่นเป็น : ${nickname}`);
	  message.channel.send(nickembed)
	  }
	  
}