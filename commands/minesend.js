const Rcon = require('modern-rcon');

exports.run = async (client, message, args) => {
	
	let rconip = (args[0])
	let rconpassword = (args[1])
	let rconcommand = (args[2])
	
	if (!rconip) {
        return message.channel.send('กรุณาระบุ IP');
    }
	
	if (!rconpassword) {
        return message.channel.send('กรุณาระบุรหัส');
    }
	
	if (!rconcommand) {
        return message.channel.send('กรุณาระบุคำสั่ง');
    }
	
	const Rcon = require('modern-rcon');

    const rcon = new Rcon(`${rconip}`, 25575, `${rconpassword}`);

    rcon.connect().then(() => {
    return rcon.send(`${rconcommand}`)
    }).then(res => {
    message.channel.send(res);
    }).then(() => {
    return rcon.disconnect();
    });
	  
}