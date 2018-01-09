var Discord = require("discord.js");
var bot = new Discord.Client();
var prefix = "/"
require("opusscript");
const fs = require("fs")

bot.on("ready", function () {
	console.log("Bot connecté");
});

bot.login("MzcxMjc2Njc5NzEwMjQ0ODY0.DMzSBA.auAmUR97u1WBNFsU8KHvUeOK-DM")

bot.on('message', msg => {
  if (msg.content.startsWith('/invite')) {
        msg.channel.send({embed: {
            color: 0Xff0000,
            author: {
                name: "Vous souhaitez m'inviter sur votre serveur ?",
                description: "Vous trouverez le lien ci-dessous",
            },
            fields: [{
                    name: 'Lien :',
                    value: "https://discordapp.com/oauth2/authorize?client_id=371276679710244864&scope=bot&permissions=2146958591",
                },
            ],
        }});
}
})

let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));

bot.on("message", message => {
if(message.content.startsWith("prefix")) return;
if(message.author.bot) return;
if(!points[message.author.id]) points[message.author.id] = {points: 0, level: 0};
let userData = points[message.author.id];
userData.points++;
let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
if(curLevel > userData.level) {
// Level up!
userData.level = curLevel;
message.reply(`Vous êtes désormais au niveau **${curLevel}**!`);
}
if(message.content.startsWith("/level")) {
message.reply(`Voici vos statistiques : Niveau - ${userData.level}, Points - ${userData.points}`);
}
fs.writeFile('./points.json', JSON.stringify(points), (err) => {if(err) console.error(err)});
});






bot.on('message', msg => {
  if (msg.content.startsWith('/help')) {
        msg.channel.send({embed: {
            color: 0Xff0000,
            author: {
                name: "Commandes :",
            },
            fields: [{
                    name: '**_-Fun-_**',
                    value: "/musique liste , /roll , /8ball , /salut , /level , /money",
                },
                {
                    name: '**_-Modération-_**',
                    value: "/pay , /clean , /clear",
                },
                {
                    name: '**indéfini**',
                    value: "indéfini",
                },
            ],
        }});
}
});


bot.on("message", msg => {
  if (msg.content.startsWith('/game')) {
    if (msg.author.id !== "296636852906098698") {
      return msg.channel.sendMessage(":x: Vous n'avez pas l'autorisation de faire cette commande :x:")
    }
    let args = msg.content.split(" ").slice(1);
    var gammme = args.join(" ")
    bot.user.setGame(gammme)
  }
});



bot.on('message', message => {
   if (message.content.startsWith("/8ball")) {
var commande = [":8ball: | 🔴 Je ne pense pas, " + message.author.username,":8ball: | 🔴 Surement pas, " + message.author.username,":8ball: | 🔴 Non, " + message.author.username,":8ball: | 🔵 Je pense que oui, " + message.author.username,":8ball: | 🔵 Surement, " + message.author.username,":8ball: | 🔵 Oui, " + message.author.username,":8ball: | ⚫️ Aucune idée, " + message.author.username,":8ball: | ⚫️ Je n'ai aucun moyen de savoir, " + message.author.username]
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
})


bot.on("message", message => {


if (message.content === "/play nowornever") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./nowornever.mp3')
    message.channel.sendMessage(":musical_note: | La musique : **Now or never** *Splatoon2* est lancée. `[1:02]`")
})}})


bot.on("message", message => {


if (message.content === "/musique liste") {
	message.channel.send({embed: {
			color: 0Xff0000,
			author: {
					name: "Musiques",
			},
			fields: [{
							name: '【Splatoon2】',
							value: "【WetFloor】/play nowornever, /play inkoming, /play ripentry undertow, /play don'tslip, /play endolphinsurge, /play turfmasterrs, /play inkanotherday 【Squids Sisters】/play bombrushblush, /play tidalrush, /play spicycalamari, /play freshstart 【Tenta-Cool】/play colorpulse, /play ebb&flow, /play acidhues, /play muckwarfare, /play tcnowornever, /play festzest, /play party'sover 【Bottom Feeders】/play shipwreckin', /play fin&fiddles, /play seafoamshanty 【Ink Theory】/play brokencoral",
					},
					{
							name: "indéfini",
							value: "indéfini",
					},
					{
							name: 'indéfini',
							value: "indéfini",
					},
					{
							name: 'indéfini',
							value: "indéfini",
					},
			],
	}});
}
});


bot.on('message', message => {
   if (message.content.startsWith("/roll")) {
var commande = [":control_knobs: | Vous etes tombé sur le numero: 1",":control_knobs: | Vous etes tombé sur le numero: 2",":control_knobs: | Vous etes tombé sur le numero: 3",":control_knobs: | Vous etes tombé sur le numero: 4",":control_knobs: | Vous etes tombé sur le numero: 5",":control_knobs: | Vous etes tombé sur le numero: 6",":control_knobs: | Vous etes tombé sur le numero: 7",":control_knobs: | Vous etes tombé sur le numero: 8",":control_knobs: | Vous etes tombé sur le numero: 9",":control_knobs: | Vous etes tombé sur le numero: 10"]
     message.channel.send(`${(commande[Math.floor(Math.random() * commande.length)])}`)
}
});


bot.on('message',message => {
	if (message.content === "/salut")
message.channel.send(":wave: | Bonjour, " + message.author.username, {
 tts: true
})
});

bot.on('message',message => {
if (message.content === "/play inkoming") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./inkomingh.mp3')
    message.channel.sendMessage(":musical_note: | La musique : **Inkoming** *Splatoon2* est lancée. `[2:56]`")
});
};
});


bot.on('message',message => {
if (message.content === "/play colorpulse") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./colorpulseh.mp3')
    message.channel.sendMessage(":musical_note: | La musique : **Color pulse** *Splatoon2* est lancée. `[4:04]`")
});
};
});



bot.on('message',message => {
if (message.content === "/play spicycalamari") {


let voiceChannel = message.guild.channels
.filter(function (channel) { return channel.type === 'voice' })
.first()
voiceChannel
.join()
.then(function (connection) {
  connection.playFile('./spicycalamarih.mp3')
    message.channel.sendMessage(":musical_note: | La musique : **Spicy calamri inkentation** *Splatoon2* est lancée. `[3:56]`")
});
};
});


bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur le serveur : ' + guild.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
})
