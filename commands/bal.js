const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
	
      let user = message.mentions.users.first() || message.author;
	  
	  let bal = await db.fetch(`infoUser_${user.id}.money`)  
	  let bank = await db.fetch(`infoUser_${user.id}.bank`)
	  
	  bal = bal || 0
	  bank = bank || 0
	  
	  let moneyEmbed = new Discord.MessageEmbed()
      .setColor(0xffb73b)
	  .setThumbnail(user.avatarURL() + "?size=512")
      .setDescription(`**จำนวนเงินของ ${user}**\n\nในกระเป๋า : ${bal}\nในธนาคาร : ${bank}`);
      message.channel.send(moneyEmbed)
	  
}