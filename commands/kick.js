exports.run = async (client, message, args) => {

    if (!message.member.hasPermission(['KICK_MEMBERS'])) {
			return message.channel.send("คุณไม่มีอำนาจในการเตะสมาชิกในดิสนี้");
	}

	let member = message.mentions.members.first();
	if (!member) return message.channel.send("ระบุคนที่ต้องการเตะ")
    member.kick().then((member) => {
        message.channel.send(`${member.displayName} ได้ถูกเตะออกดิสแล้ว`);
    })

}