exports.run = async (client, message, args) => {
	
    if (!message.member.hasPermission(['BAN_MEMBERS'])) {
	    return message.channel.send("คุณไม่มีอำนาจในการแบนสมาชิกในดิสนี้")
	}
	
    if (!message.guild.me.hasPermission(['BAN_MEMBERS'])) {
		return message.channel.send("หลายบาทไม่มีอำนาจในการแบนสมาชิกในดิสนี้");
	}
	
	let member = message.mentions.members.first();
	if (!member) return message.channel.send("ระบุคนที่ต้องการแบน")
    member.ban()
        .then(member => message.channel.send(`${member.displayName} ได้ถูกแบนออกดิสแล้ว`))
		.catch(error => message.channel.send("ไม่สามารถแบนคนที่ระบุได้"));
	
}