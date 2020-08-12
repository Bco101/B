exports.run = async (client, message, args) => {

        if (!message.member.hasPermission(['MANAGE_MESSAGES'])) {
			return message.channel.send("คุณไม่มีอำนาจในการล้างข้อความในดิสนี้");
		}
		
        if (!message.guild.me.hasPermission(['MANAGE_MESSAGES'])) {
		    return message.channel.send("หลายบาทไม่มีอำนาจในการล้างข้อความในดิสนี้");
	    }

        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('กรุณาระบุจำนวนข้อความที่ต้องการลบ');
        }

        else if (amount < 1 || amount > 100) {
            return message.reply('ต้องระบุเลขระหว่าง 1 ถึง 99');
        }

        message.channel.bulkDelete(amount, true)
		    .then(async () => message.channel.send(`ทำการลบทั้งหมด ${amount} ข้อความ`))
			.catch(error => message.channel.send("ส่งข้อความไม่สำเร็จ"));
		
}