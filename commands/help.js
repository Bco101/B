const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let bothelp = new Discord.MessageEmbed()
    .setColor("#ffb73b")
    .addField("คำสั่งทั่วไป", "`.avatar` `.dm` `.help` `.info` `.nick` `.say` `.getverify` `.verify`")
    .addField("คำโปรไฟล์", "`.profile` `.setnickname` `.setgender` `.setstatus` `.inv`")
    .addField("คำสั่งสนุก ๆ", "`.bet` `.slap` `.smug` `.pat` `.unknow`")
    .addField("คำสั่งเงิน", "`.bal` `.work` `.deposit` `.withdraw` `.pay` `.rob` `.fish` `.mine` `.sell`")
    .addField("คำสั่งพนัน", "`.roulette`")
    .addField("คำสั่งอื่น ๆ", "`.minesend` `.fivem-info`")
    .addField("คำสั่งแอดมิน", "`.ban` `.kick` `.purge` `.verify-admin` `.verify-role`");
    message.channel.send(bothelp)
	
}