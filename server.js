const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://replaysmgbot.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
});
 

//////////////////////////////////////////////////////////////////////////////////
    client.on('message', luxy => {
if(luxy.content === '_ _') {
luxy.channel.send('**اهلاً وسهلاً بجميع محبي الخليفة** <a:1SMG1_GIF_75:736313836436717669>\n**نورتو السيرفر** <a:1SMG1_GIF_40:732148151640653885>\n**يرجى قراءة القوانين لتجنب المخالفات** \n<#710470233818792026>\n**اي استفسار حول تغيير الاسم والصورة يرجى قراءة التعليمات**\n  <#710470408922726494>');
}
});

//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'سلام عليكم') {
    const embed = new RichEmbed()
	.setColor('#F87217')
	.setTitle('<a:1SMG1_GIF_160:738935819305222265> عليكم السـلام ')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'السلام عليكم') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF_160:738935819305222265> عليكم السـلام ')
    message.reply(embed);
  }
});
////////////////////////////////////////////////////////////////////////////////// 
client.on('message', message => {
  if (message.content === 'ادمن') {
    const embed = new RichEmbed()
	.setColor('#C11B17')
	.setTitle('اتوجه لروم المساعدة ✅ او ارسل كلمة اريد ادمن لعمل تاك للأدمنية')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', luxy => {
if(luxy.content === 'اريد ادمن') {
luxy.reply('<@&753915610265681970>');
}
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'باك') {
    const embed = new RichEmbed()
	.setColor('#00FF00')
	.setTitle('<a:1SMG1_GIF_75:736313836436717669> يا اهلاً وسهلاً، نورتـ/ي')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'هلو') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF_75:736313836436717669> كل الهلا')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'هلاو') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF_75:736313836436717669> كل الهلا')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'هيلاو') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF_75:736313836436717669> كل الهلا')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'برب') {
    const embed = new RichEmbed()
	.setColor('#FFFF00')
	.setTitle('<a:1SMG1_GIF_80:736313956565647492>  ماشي مو تتأخر/ين')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'مرحبا') {
    const embed = new RichEmbed()
	.setColor('#6CC417')
	.setTitle('<a:1SMG1_GIF_80:736313956565647492>  مراحب')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'باي') {
    const embed = new RichEmbed()
	.setColor('#52F3FF')
	.setTitle('<a:1SMG1_GIF_82:736314000526147615> بايات يروحي')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', luxy => {
if(luxy.content === 'شعار') {
luxy.channel.send('《SMG》');
}
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', luxy => {
if(luxy.content === 'الشعار') {
luxy.channel.send('《SMG》');
}
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'شلونكم') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF168:738947438500511786> حمدلله وانتـ/ي')
    message.reply(embed);
  }
});
/////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === '<a:1SMG1_GIF7:716570343514570752>') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF10:716570426779631627> اضحك ليش لا')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === '<a:1SMG1_GIF_206:741051840279609365>') {
    const embed = new RichEmbed()
	.setColor('#667C26')
	.setTitle('<a:1SMG1_GIF_633:736254053348278562> ممنوع التدخين هنا ')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////    
client.on('message', message => {
  if (message.content === '<:1SMG1_55:736655439609200721>') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<:1SMG1_55:736655439609200721>')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === '<a:1SMG1_GIF_211:754062678439493754>') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF_211:754062678439493754> اضحك/ي ليش لا')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === '<a:1SMG1_GIF_176:738947442640289952>') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF_211:754062678439493754>  ضحكوني وياكم')
    message.reply(embed);
  }
});

//////////////////////////////////////////////////////////////////////////////////  
client.on('message', message => {
  if (message.content === 'ريسبونس لافيو') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF2:715620834093301842>  لافيو توو')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'ريسبونس') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF_40:732148151640653885>  عيونه وروحه')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === '<a:1SMG1_GIF_87:736393785973669966> <a:1SMG1_GIF_187:739672755112509561>') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF_93:736393958304776216>  وخرو حيدعمكم')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.content === 'انت وين لكيت هاي الكلاوات') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('منك/ج')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'حبيبي والله') {
    const embed = new RichEmbed()
	.setColor('#6698FF')
	.setTitle('حياتي والله')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'مساء الخير') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF168:738947438500511786> مساء العافية')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.content === 'صباح الخير') {
    const embed = new RichEmbed()
	.setColor('#8a2be2')
	.setTitle('<a:1SMG1_GIF168:738947438500511786> صباح العافية')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content === 'صباح النور') {
    const embed = new RichEmbed()
	.setColor('#F6358A')
	.setTitle('<a:1SMG1_GIF168:738947438500511786> صباح العافية')
    message.reply(embed);
  }
});
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////