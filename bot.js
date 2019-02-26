const Discord = require('discord.js');
const devs = ['389090790984515594'];
const db = require('quick.db');
const premium = ['470896018603376640']
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyA3osfmhzUBkMKfdMGnTQ_JXW0EDh-qLaM");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '._.';
var table = require('table').table
var ti={}  
,spee={}
,attentions={};

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['Go to Get Your Role'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/barontube`);
    }, ms);
    console.log(` ????????? |> Name: ${client.user.username}`);
 console.log(` ????????? |> Servers: ${client.guilds.size}`);
 console.log(` ???????????????????? |> Members: ${client.users.size}`);
 console.log(` ????????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Id: ${client.user.id}`);
 console.log(` ???????????????????`);
 console.log(` ???????????????????`);
});
client.on('raw', event => {
	console.log(event);
	const eventName = avent.t;
	if(eventName === 'MESSAGE_REACTION_ADD')
	{
		if(event.d.message_id === '536928110055260170')
		{
			var reactionchannel = client.channels.get(event.d.channel_id);
			if(reactionchannel.message.has(event.d.message_id))
				return;
			else {
				reactionchannel.fetchMassage(event.d.message_id)
				.then(msg => {
					var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
					var user = client.users.get(event.d.user_id);
					client.emit('messageReactionAdd', msgReaction, user);
				})
				.catch(err => console.log(err));
			}	
		}
	}
	    else if(eventName === 'MESSAGE_REACTION_REMOVE')
			if(event.d.message_id === '536928110055260170')
			{
				var reactionchannel = client.channels.get(event.d.channel_id);
				if(reactionchannel.message.has(event.d.message_id))
				    return;
				else {
					reactionchannel.fetchMassage(event.d.message_id)
				    .then(msg => {
					    var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
					    var user = client.users.get(event.d.user_id);
					    client.emit('messageReactionRemove', msgReaction, user);
				    })
				    .catch(err => console.log(err));
				}
			}
	{
		
    }
});
client.on('messageReactionAdd',(messageReaction,user) => {
   
   var roleName = messageReaction.emoji.name;
   var role = messageReaction.message.guild.roles.find(role => role.name.toLowerCase() ===
   roleName.toLowerCase());
   
   if(role)
   {
	   var member = messageReaction.message.guild.members.find(member => member.id === user.id);
	   if(member)
	   {
		   member.addrole(role.id);
		   console.log("Success. Added role.");
	   }
   }
});	

client.on('messageReactionReamove', (messageReaction, user) => {
	var roleName = messageReaction.emoji.name;
    var role = messageReaction.message.guild.roles.find(role => role.name.toLowerCase() ===
    roleName.toLowerCase());
	if(role)
   {
	   var member = messageReaction.message.guild.members.find(member => member.id === user.id);
	   if(member)
	   {
		   member.removeRole(role.id);
		   console.log("Success. Removed role.");
	   }
   }
});	
client.login(process.env.BOT_TOKEN)
