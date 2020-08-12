const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	   
	  let user = message.author;
	  
	  if (args[0].length > 10) {
		  return message.reply('ระบุเพศไม่เกิน 10 ตัวอักษร');
	  }
	  
	  if (args[0] == 'reset') {
		  await db.set(`infoUser_${user.id}.profile.gender`, 'ไม่ได้ระบุ')
		  let genderreset = new Discord.MessageEmbed()
	      .setColor(0xffb73b)
	      .setDescription(`ลบเพศเรียบร้อย`);
	      message.channel.send(genderreset)
		  
	  } else {
	  if (!(args[0]))
		  return message.channel.send("กรุณาระบุเพศที่ต้องการตั้ง\n\nเช่น `.setgender ชาย`");
	  await db.set(`infoUser_${user.id}.profile.gender`, args[0])
	  let gender = await db.fetch(`infoUser_${user.id}.profile.gender`)
	  
	  let genderembed = new Discord.MessageEmbed()
	  .setColor(0xffb73b)
	  .setDescription(`ตั้งเพศเป็น : ${gender}`);
	  message.channel.send(genderembed)
	  }
	  
}