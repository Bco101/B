const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	
	let question = args[0];
	let options = args[1];
    let optionslist = options.split(",");
	var reactlist = ['1⃣','2⃣','3⃣','4⃣','5⃣','6⃣','7⃣','8⃣','9⃣','🔟'];
	var optionsmessage = "";
	for (var i = 0; i < optionslist.length; i++) { 
            optionsmessage += reactlist[i] + " " + optionslist[i] + "\n";
        }
	  
	let voteembed = new Discord.MessageEmbed()
	.setTitle(question)
    .setDescription(optionsmessage)
    .setColor(0xffb73b);
    message.channel.send(voteembed).then(sentEmbed => {
	for (var i = 0; i < optionslist.length; i++) { 
            sentEmbed.react(reactlist[i])
        }
	)}
}