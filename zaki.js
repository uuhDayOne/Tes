//━━━━━━━━━━━━━━━[ 𝗘𝗗𝗜𝗧 𝗦𝗘𝗦𝗨𝗔𝗜 𝗞𝗘𝗕𝗨𝗧𝗨𝗛𝗔𝗡 ]━━━━━━━━━━━━━━━\\
const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const crypto = require('crypto')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const shp = require('shp')
const axios = require("axios")
const cheerio = require("cheerio");
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');

//━━━━━━━━━━━━━━━[ 𝗪𝗔𝗧𝗘𝗥𝗠𝗔𝗥𝗞 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 ]━━━━━━━━━━━━━━━\\
const Exif = require('./lib/exif');
const exif = new Exif();

//━━━━━━━━━━━━━━━[ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 ]━━━━━━━━━━━━━━━\\
const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')
const { mess } = require('./message/mess')

//━━━━━━━━━━━━━━━[ 𝗟𝗜𝗕 ]━━━━━━━━━━━━━━━\\
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");
const gore = require("./lib/gore");
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')

//━━━━━━━━━━━━━━━[ 𝗕𝗜𝗔𝗥𝗜𝗡 𝗔𝗝𝗔 ]━━━━━━━━━━━━━━━\\
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//━━━━━━━━━━━━━━━[ 𝗝𝗢𝗜𝗡 & 𝗟𝗘𝗔𝗩𝗘 ]━━━━━━━━━━━━━━━\\
join = '\`\`\`Welcome\`\`\` \n \`\`\`Nama :\`\`\` \n \`\`\`Umur : \`\`\` \n \`\`\`Memek/Kontol :\`\`\` \n \`\`\`Status :\`\`\` \n\n - [ 𝙎𝙀𝙇𝙁 𝘽𝙊𝙏 ] -'
leave = '\`\`\`Good Bye👋 selamat jalan & selamat tinggal semoga tenang di sana🥀🥀\`\`\`'

//━━━━━━━━━━━━━━━[ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚 ]━━━━━━━━━━━━━━━\\
let fakeimage = fs.readFileSync("./media/wpmobile.jpg")
let errorImg = 'https://i.ibb.co/NNv0zZB/crewbot-1.png'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
banChats = true;
owner = setting.owner
gamewaktu = setting.gamewaktu

//━━━━━━━━━━━━━━━[ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗙𝗜𝗧𝗨𝗥 𝗠𝗘𝗗𝗜𝗔 ]━━━━━━━━━━━━━━━\\
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
let ban = JSON.parse(fs.readFileSync('./database/user/banned.json'));

//━━━━━━━━━━━━━━━[ 𝗕𝗨𝗔𝗧 𝗥𝗘𝗚𝗜𝗦𝗧𝗘𝗥 ]━━━━━━━━━━━━━━━\\
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))

//━━━━━━━━━━━━━━━[ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗙𝗜𝗧𝗨𝗥 𝗕𝗢𝗧 ]━━━━━━━━━━━━━━━\\
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
let commandsDB = JSON.parse(fs.readFileSync('./database/bot/commands.json'))

//━━━━━━━━━━━━━━━[ 𝗕𝗨𝗔𝗧 𝗚𝗔𝗠𝗘 ]━━━━━━━━━━━━━━━\\
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

//━━━━━━━━━━━━━━━[ 𝗦𝗧𝗜𝗖𝗞 𝗖𝗠𝗗 ]━━━━━━━━━━━━━━━\\
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}


const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

//━━━━━━━━━━━━━━━[ 𝗔𝗨𝗧𝗢 𝗥𝗘𝗦𝗣𝗢𝗡 ]━━━━━━━━━━━━━━━\\
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      zaki.sendMessage(from, commandsDB[i].balasan, text, {quoted: zak})
      }
      }

//━━━━━━━━━━━━━━━[ 𝗚𝗔𝗨𝗦𝗔𝗛 𝗗𝗜𝗔𝗣𝗔 𝗔𝗣𝗔𝗜𝗡 ]━━━━━━━━━━━━━━━\\
module.exports = zaki = async (zaki, zak) => {
	try {
        if (!zak.hasNewMessage) return
        zak = zak.messages.all()[0]
		if (!zak.message) return
		if (zak.key && zak.key.remoteJid == 'status@broadcast') return
		if (zak.key.id.startsWith('3EB0') && zak.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		zak.message = (Object.keys(zak.message)[0] === 'ephemeralMessage') ? zak.message.ephemeralMessage.message : zak.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(zak.message)
		const from = zak.key.remoteJid
		const type = Object.keys(zak.message)[0]        
        const cmd = (type === 'conversation' && zak.message.conversation) ? zak.message.conversation : (type == 'imageMessage') && zak.message.imageMessage.caption ? zak.message.imageMessage.caption : (type == 'videoMessage') && zak.message.videoMessage.caption ? zak.message.videoMessage.caption : (type == 'extendedTextMessage') && zak.message.extendedTextMessage.text ? zak.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '.'
        body = (type === 'conversation' && zak.message.conversation.startsWith(prefix)) ? zak.message.conversation : (type == 'imageMessage') && zak.message[type].caption.startsWith(prefix) ? zak.message[type].caption : (type == 'videoMessage') && zak.message[type].caption.startsWith(prefix) ? zak.message[type].caption : (type == 'extendedTextMessage') && zak.message[type].text.startsWith(prefix) ? zak.message[type].text : (type == 'listResponseMessage') && zak.message[type].singleSelectReply.selectedRowId ? zak.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zak.message[type].selectedButtonId ? zak.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(zak.message[type].fileSha256.toString('base64')) !== null && getCmd(zak.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(zak.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? zak.message.conversation : (type === 'extendedTextMessage') ? zak.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
budy = (type === 'conversation') ? zak.message.conversation : (type === 'extendedTextMessage') ? zak.message.extendedTextMessage.text : ''
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')
  
        const botNumber = zaki.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? zak.participant : zak.key.remoteJid
		let senderr = zak.key.fromMe ? zaki.user.jid : zak.key.remoteJid.endsWith('@g.us') ? zak.participant : zak.key.remoteJid
		const totalchat = await zaki.chats.all()
		const groupMetadata = isGroup ? await zaki.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = zak.key.fromMe ? zaki.user.jid : zaki.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = zak.key.fromMe ? zaki.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && zak.message.extendedTextMessage.contextInfo != null ? zak.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && zak.message.extendedTextMessage.contextInfo != null ? zak.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        
//━━━━━━━━━━━━━━━[ 𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡 𝗕𝗨𝗧𝗧𝗢𝗡 ]━━━━━━━━━━━━━━━\\        
        selectedButton = (type == 'buttonsResponseMessage') ? zak.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? zak.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = zaki.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return zaki.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      zaki.sendMessage(from, teks, text, {quoted:zak, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           zaki.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? zaki.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : zaki.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.jpg')}, extendedText, { sendEphemeral: true, quoted: zak, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           zaki.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return zaki.sendMessage(from, teks, text, {quoted: zak, thumbnail: fs.readFileSync('./media/wpmobile.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `Hai Kak : ${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:Hi Kak : ${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/test.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       zaki.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await zaki.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = zaki.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await zaki.groupRemove(to, [i])
        } else {
           await zaki.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       zaki.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       zaki.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})
}
      const hideTag = async function(from, text){
	       let anu = await zaki.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       zaki.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           zaki.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:zak})
           fs.unlinkSync(asw)
});
});
});
}
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const isRegistered = checkRegisteredUser(sender)

//━━━━━━━━━━━━━━━[ 𝗕𝗨𝗔𝗧 𝗕𝗔𝗡𝗡𝗘𝗗 ]━━━━━━━━━━━━━━━\\
        const isBanned = ban.includes(sender)
        
//━━━━━━━━━━━━━━━[ 𝗙𝗔𝗞𝗘𝗡𝗬𝗔 ]━━━━━━━━━━━━━━━\\
 const fakeyt = (teks) => {
zaki.sendMessage(from, zaki, zak,{contextInfo :{text: 'hi',
"forwardingScore": 989,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://telegra.ph/file/a528189d79261994c9c0a.jpg",
"mediaUrl": "https://youtu.be/an2G10_YnXc",
"thumbnail": fs.readFileSync('./media/test.jpg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fakeyt})
};

charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`

 const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 281005,
                            status: 5,
                            surface : 5,
                            message: `⌬ Halo Kak : ${pushname}\n⌬ Baterai : ${baterai}% ${charger}`, //Kasih namalu
                            orderTitle: `⌬ Halo Kak : ${pushname}\n⌬ Baterai : ${baterai}% ${charger}`,
                            thumbnail: fs.readFileSync(`./media/test.jpg`), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
                      
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285894887349-1634960552@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fs.readFileSync(`./media/Menu.jpg`)
		}
	}
}

 const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': fs.readFileSync(`./media/Menu.jpg`)
                        }
	                  } 
                     }

 const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6285894887349-1634960552@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": Bfake,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }

 const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: "`Halo Kak : ${pushname}`", jpegThumbnail: fs.readFileSync(`./media/Menu.jpg`) } },
    };

 const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6285894887349-1634960552@g.us",
          inviteCode: "https://chat.whatsapp.com/JJvSGnI5WYh0Xl9qw9YGRA",
          groupName: "𝚉𝙰𝙺𝙱𝙾𝚃𝚉 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 ᴠ𝟸",
          text: "Perkumpulan Wibu Elite",
          jpegThumbnail: fs.readFileSync('./media/Menu.jpg'),
        },
      },
    };

 const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 281005,
                            status: 281005,
                            surface : 281005,
                            message: '𝙸 𝙰𝚖 𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳\n Prefix : Multi', //Kasih namalu
                            orderTitle: ' ${ucapanwaktu} ${pushname} ',
                            thumbnail: fs.readFileSync('./src/logo.jpg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }

//━━━━━━━━━━━━━━━[ 𝗕𝗨𝗧𝗧𝗢𝗡 𝗧𝗘𝗫𝗧 ]━━━━━━━━━━━━━━━\\
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      zaki.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           zaki.sendMessage(to, media, type, {quoted: zak, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       zaki.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       zaki.sendMessage(from, hasil, type, options).catch(e => {
	       zaki.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Maaf Kak Eror_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await zaki.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = zaki.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await zaki.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await zaki.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = zaki.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await zaki.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = zaki.contacts[from] != undefined ? zaki.contacts[from].vname || zaki.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'KiZakiXD'; if (!author) author = 'ZakBotZ';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}

     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '_Selamat Malam🥀_'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = '_Selamat Petang🥀_'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = '_Selamat Sore🥀_'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '_Selamat Siang🥀_'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = '_Selamat Pagi🥀_'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = '_Selamat Malam🥀_'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 
//━━━━━━━━━━━━━━━[ 𝗛𝗔𝗦𝗜𝗟 𝗠𝗜𝗡𝗜𝗡𝗚 𝗔𝗢𝗪𝗢𝗪𝗢𝗪𝗞 ]━━━━━━━━━━━━━━━\\
      const daftar1 = `_Halo Kak👋  ${pushname}_\n\n_𝘿𝙖𝙛𝙩𝙖𝙧 𝘿𝙪𝙡𝙪 𝙆𝙖𝙠_.`
       const daftar2 = '_Klik Untuk Mendaftar Di Database Bot_\n© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎'
       const daftar3 = [
          {
            buttonId: `!verify`,
            buttonText: {
              displayText: `🧾 Daftar`,
            },
            type: 1,
          },]
       // FUNCTION LEVELING
       if (isGroup && !zak.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)
} 
       } catch (err) {
       console.error(err)
}
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//━━━━━━━━━━━━━━━[ 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 ]━━━━━━━━━━━━━━━\\     
      const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
      if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                zaki.sendMessage(from, `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`, MessageType.text)
                zaki.groupRemove(from, [sender])
            }
        }
        
//━━━━━━━━━━━━━━━[ 𝗦𝗘𝗪𝗔𝗕𝗢𝗧 ]━━━━━━━━━━━━━━━\\       
             _sewa.expiredCheck(zaki, sewa)
             
//━━━━━━━━━━━━━━━[ 𝗠𝗨𝗧𝗘 ]━━━━━━━━━━━━━━━\\       
             if (isMuted){
             if (!isGroupAdmins && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }

//━━━━━━━━━━━━━━━[ 𝗕𝗨𝗔𝗧 𝗚𝗔𝗠𝗘 ]━━━━━━━━━━━━━━━\\     
             game.cekWaktuFam(zaki, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                zaki.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Anjing Pintar👌*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }
            const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					zaki.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}

//━━━━━━━━━━━━━━━[ 𝗕𝗔𝗖𝗔 𝗦𝗘𝗡𝗗𝗥𝗜 ]━━━━━━━━━━━━━━━\\
	if (isGroup) {
		if (!zak.key.fromMe && banChats === true) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }

//━━━━━━━━━━━━━━━[ 𝗞𝗢𝗗𝗘 𝗕𝗨𝗔𝗧 𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 ]━━━━━━━━━━━━━━━\\	
	if (budy.toLowerCase() === `281005`){
	if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
             try {
				ppimg = await zaki.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i.ibb.co/7n10j1r/IMG-20210913-WA0423.jpg'
			    }
            veri = sender
            _registered.push(sender)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
            addRegisteredUser(sender, serialUser)
             const anuu = `*Verification Sucses*

*👤Name :* ${pushname}
*⏳Number :* wa.me/${sender.split('@')[0]}
*🔑Code:* ${serialUser}
*🔒Total:* ${_registered.length} Pengguna

*© 2022 | uuhDayOne*`
         ikyads = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `!menu`,buttonText:{displayText: `☰ MENU`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(ikyads, "imageMessage", { thumbnail: ikyads, })).imageMessage
              buttonsMessage = {footerText:'Make Iya Donate Kagak🔗', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
             console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
 
//━━━━━━━━━━━━━━━[ 𝗞𝗢𝗡𝗦𝗢𝗟𝗘 𝗡𝗬𝗔 𝗗𝗘𝗞 ]━━━━━━━━━━━━━━━\\ 
            setTimeout( () => {
	    zaki.updatePresence(from, Presence.composing)
	    reply(`*Terimakasih Telah Terdaftar Di © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎*`)
	}, 2000)
	}
	
//━━━━━━━━━━━━━━━[ 𝗜𝗡𝗜 𝗕𝗨𝗔𝗧 𝗡𝗚𝗘 𝗥𝗘𝗔𝗗 ]━━━━━━━━━━━━━━━\\	
        zaki.chatRead(from, "read")
        
//━━━━━━━━━━━━━━━[ 𝗖𝗠𝗗 ]━━━━━━━━━━━━━━━\\     
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
        if (budy.toLowerCase() === `281005`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    zaki.sendMessage(from, teks, text, {quoted: freply })
}          if (!zak.key.fromMe && banChats === true) return 
	              switch(command){

/*[ ??𝗔𝗟𝗔𝗨 𝗠𝗔𝗨 𝗕𝗜𝗔𝗥 𝗥𝗘𝗚𝗜𝗦𝗧𝗘𝗥 𝗢𝗔𝗦 𝗠𝗔𝗨 𝗚𝗨𝗡𝗔𝗜𝗡 𝗙𝗜𝗧𝗨𝗘 𝗧𝗔𝗠𝗕𝗔𝗛𝗜𝗡 :    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})*/
    
        case 'owner':
        case 'creator':
zaki.sendMessage(from,{"displayName":"ler",
"contacts" : [{
"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:uuhDayOne\nitem1.TEL;waid=6285894887349 :6285894887349\nitem1.X-ABLabe:uujDayOne\nitem2.TEL;waid=687813379:687813379\nitem2.X-ABLabe:uuhDayOne 𝚅2\nitem3.TEL;waid=254738899273:254738899273\nitem3.X-ABLabel:uuhDayOne 𝙱𝚄𝚂𝙸𝙽𝙴𝚂𝚂\nitem4.EMAIL;type=INTERNET:muhammadfutuhala@gmail.com\nitem16.X-ABLabel:Email\nEND:VCARD"}]}, 'contactsArrayMessage',{quoted: ftroli2})

               await sleep(1000)

               txtt =`Halo Kak👋 ${pushname}\nItu Ownerku, Mau Gelud?`



               buttons = [{buttonId: '!command',buttonText:{displayText: '⋮☰ COMMAND'},type:1}]



               buttonsMessage = {

               contentText: `${txtt}`,

               footerText: 'Ngechat = Donate',

               buttons: buttons,

               headerType: 1

}



               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{})

               zaki.relayWAMessage(prep)
               break      
               const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await zaki.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: buttons,
   headerType: 4
}
zaki.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
                   
              
       case '!':

       case '🐤':

       case '#':

       case 'z':

       case '.':

       if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

       break

case 'unban':
		
if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
bnnd = body.slice(5)	
ban.splice(`${bnnd}@s.whatsapp.net`, 1)		
fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))	
reply(`@s.whatsapp.net Berhasil Di Unban`)	

break

case 'ban':  

 if(!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
bnnd = body.slice(5)		
ban.push(`${bnnd}@s.whatsapp.net`)												
fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))	
reply(`@s.whatsapp.net Berhasil Di Banned `)								
 
 break
												    	     	    							
												    	     	    				
//Add Respon 
case 'addrespon':{
          if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon oi cok|cak cok cak cok, gelut?`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon oi cok|cak cok cak cok, gelut?`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':
      case 'delrespon':{
          if (!isOwner && !dev.key.fromMe) return reply(mess.owner)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          }
      break
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break											
	
//<------------------< anonymous chat >---------------->             

   case 'next': 

   case 'keluar':  

   case "stop": {

           if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')

           zaki.anonymous = zaki.anonymous ? zaki.anonymous: {}

           let room = Object.values(zaki.anonymous).find(room => room.check(sender))

           if (!room) {

           sendButMessage(from, '_*Kamu Tidak Sedang Berada di Anonymous Chat🌹*_', `Ⓒ︎ 𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 𝙺𝚒𝚉𝚊𝚔𝚒𝚇𝙳`, 'Cari Partner', prefix+'start')

           return false

           }

           reply('_You stopped matchmajar_')

           let other = room.other(sender)
           if (other) sendButMessage(other, '_*Partner meninggalkan chat🌹*_', `Ⓒ︎ 𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 𝙺𝚒𝚉𝚊𝚔𝚒𝚇𝙳`, 'Cari Partner', prefix+'start')

           delete zaki.anonymous[room.id]

           if (command === 'keluar' || command === "stop") 

           break

}
   case 'mulai': 
   case 'start': 

   case 'anonymous': 

   case 'mutual': {

           if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')   

           zaki.anonymous = zaki.anonymous ? zaki.anonymous: {}
           if (Object.values(zaki.anonymous).find(room => room.check(sender))) {
           sendButMessage(from, 'Kamu Masih Berada Di Dalam Anonymous Chat, Menunggu Partner', `Ⓒ︎ 𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 𝙺𝚒𝚉𝚊𝚔𝚒𝚇𝙳`, 'Keluar', `${prefix}keluar`)
           return false
           }
           let room = Object.values(zaki.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))
           if (room) {
           sendButMessage(room.a, '_*Partner ditemukan🌹*_', `Ⓒ︎ 𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 𝙺𝚒𝚉𝚊𝚔𝚒𝚇𝙳`, 'Next', prefix+'next')
           room.b = sender
           room.state = 'CHATTING'
           sendButMessage(room.b, '_*Partner ditemukan🌹*_', `Ⓒ︎ 𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 𝙺𝚒𝚉𝚊𝚔𝚒𝚇𝙳`, 'Next', prefix+'next')
           } else {
           let id = + new Date
           zaki.anonymous[id] = {
           id,
           a: sender,
           b: '',
           state: 'WAITING',
           check: function (who = '') {
           return [this.a,
           this.b].includes(who)
           },
           other: function (who = '') {
           return who === this.a ? this.b: who === this.b ? this.a: ''}}
           sendButMessage(from, '_*Menunggu Partner🌹*_', `Ⓒ︎ 𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙱𝚢 𝙺𝚒𝚉𝚊𝚔𝚒𝚇𝙳`, [{buttonId: `${prefix}keluar`,buttonText: {displayText: `Keluar`,}, type: 1}])}         
         
          break
}
   case 'menu':
   case 'help':
        if (isMuted) return 
       if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              const Tag = "6285894887349"
              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        menu = `                                   *_𝙷𝚎𝚕𝚕𝚘 ${pushname}_*
                       *_𝚃𝚢𝚙𝚎 .𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚃𝚘 𝚂𝚎𝚎 𝚃𝚑𝚎 𝙼𝚎𝚗𝚞_*`
               buttons =  [
   {buttonId: `${prefix}command`, buttonText: {displayText: 'COMMAND'}, type: 1},
      {buttonId: `${prefix}allmenu`, buttonText: {displayText: 'ALLMENU'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage
               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `                                              " 𝙸 𝙰𝚖 Obotz " 
                                           *『 INFORMATION 』*
                          *❍⃝⃘۪۪۪👤YourName* : *${pushname}*
                          *❍⃝⃘۪۪۪🔑Title* : *${isOwner ? 'Owner📌' : isPremium ? 'Premium💸' : 'Free🕳️'}*
                          *❍⃝⃘۪۪۪👑Creator* : *@${owner}*
                          *❍⃝⃘۪۪۪📨MyEmail* : *helloiamkizakixd@gmail.com*
                          *❍⃝⃘۪۪۪❔Prefix* : *『 ${prefix} 』*
                          *❍⃝⃘۪۪۪📌Online* : *${runtime(process.uptime())}*
                          *❍⃝⃘۪۪۪⏱️Ping* : *${latensie.toFixed(4)} Second*
                          *❍⃝⃘۪۪۪🔋Baterai*  : *${baterai}% ${charger}*
                          *❍⃝⃘۪۪۪📣GroupChat* : *${groups.length}*
                          *❍⃝⃘۪۪۪💬PrivateChat* : *${privat.length}*             
                          *❍⃝⃘۪۪۪⏳ChatTotal* : *${totalChat.length}*          
                          *❍⃝⃘۪۪۪🖥Platform* : *${os.platform()}*                     
                                                                                         © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli2, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[Tag + '@s.whatsapp.net', senderr]}})
                          zaki.relayWAMessage(prep)
               break
              case 'bc3':

      case 'broadcast3':

             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await zaki.chats.all()
             if (isMedia && !zak.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak
             bc2 = await zaki.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             zaki.sendMessage(_.jid, { contentText: `*🐣 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎 🐣*\n\n${body.slice(4)}`, footerText: '© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: '☰ MENU' }, type: 1 }, { buttonId: `${prefix}patner`, buttonText: { displayText: '👥 PATNER' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: bc2 }}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
            
//━━━━━━━━━━━━━━━[ 𝗞𝗢𝗗𝗘 𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 ]━━━━━━━━━━━━━━━\\
              case '281005':

              
if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
	         try {
								ppimg = await zaki.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i.ibb.co/7n10j1r/IMG-20210913-WA0423.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = `「 *REGISTRASI SUKSES* 」
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*

*•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ Nama :* ${pushname}
*•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ Number :* wa.me/${sender.split('@')[0]}
*•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ Code:* ${serialUser}
*•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ Total:* ${_registered.length} Pengguna


*© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎*`
         ikyads = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `!menu`,buttonText:{displayText: `☰ MENU`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(ikyads, "imageMessage", { thumbnail: ikyads, })).imageMessage
              buttonsMessage = {footerText:'Make Iya Donate Kagak🔗', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			zaki.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Telah Terdaftar Di © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎*`)
		}, 2000)
        break
        
        case 'verify':
        case 'daftar':

        reply('*Bot Telah Mengirimkan Kode Verifikasi Lewat Pribadi Silahkan Di Cek Dan Verify*')
zaki.sendMessage(sender, "*Reply Pesan Ini Dan Masukkan Kode Verify : 281005* \n  \n_Anda juga dapat mengetuk tautan ini untuk verifikasi: https://wa.me/62856432643034?text=281005_ \n  \n_Note : Kode ini bersifat sementara dan bisa jadi sama dengan orang lain_.", text, {quoted: freply})
break
case 'tts':

if (isMuted) return 
	    if (args.length < 1) return zaki.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kuzakai`, text, { quoted: zak })
	    const gtts = require('./lib/gtts')(args[0])
	    if (args.length < 2) return zaki.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kuzakai`, text, { quoted: zak })
            var bby = body.slice(8)
	    ranm = getRandom('.mp3')
	    rano = getRandom('.ogg')
	    bby.length > 300
	    ? reply('Teks nya terlalu panjang kak')
	    : gtts.save(ranm, bby, function () {
	    exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
	    fs.unlinkSync(ranm)
	    buff = fs.readFileSync(rano)
	    if (err) return reply(dla.stikga())
	    zaki.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: zak })
	    fs.unlinkSync(rano)
	    })
	    })
	    break
case 'textpro':

if (isMuted) return 
 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Gak Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ blackpink text
_❒_ neon text
_❒_ greenneon text
_❒_ advanceglow text
_❒_ futureneon text
_❒_ sandwriting text
_❒_ sandsummer text
_❒_ sandengraved text
_❒_ metaldark text
_❒_ neonlight text
_❒_ holographic text
_❒_ text1917 text
_❒_ minion text
_❒_ deluxesilver text
_❒_ newyearcard text
_❒_ bloodfrosted text
_❒_ halloween text
_❒_ jokerlogo text 
_❒_ fireworksparkle text
_❒_ natureleaves text
_❒_ bokeh text
_❒_ toxic text
_❒_ strawberry text
_❒_ box3d text
_❒_ roadwarning text
_❒_ breakwall text
_❒_ icecold text
_❒_ luxury text
_❒_ cloud text
_❒_ summersand text
_❒_ horrorblood text
_❒_ thunder text
_❒_ pornhub text1 text2
_❒_ glitch text1 text2
_❒_ avenger text1 text2
_❒_ space text1 text2
_❒_ ninjalogo text1 text2
_❒_ marvelstudio text1 text2
_❒_ lionlogo text1 text2
_❒_ wolflogo text1 text2
_❒_ steel3d text1 text2
_❒_ wallgravity text1 text2



 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break

case 'wibu2':

case 'wibumenu2':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ chiisaihentai
_❒_ trap
_❒_ blowjob
_❒_ yaoi
_❒_ ecchi
_❒_ hentai
_❒_ ahegao
_❒_ hololewd
_❒_ sideoppai
_❒_ animefeets
_❒_ animebooty
_❒_ animethighss
_❒_ hentaiparadise
_❒_ animearmpits
_❒_ hentaifemdom
_❒_ lewdanimegirls
_❒_ biganimetiddies
_❒_ animebellybutton
_❒_ hentai4everyone



 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
        case 'randomimage':

case 'randomimage':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ bj
_❒_ ero
_❒_ cum
_❒_ feet
_❒_ yuri
_❒_ trap
_❒_ lewd
_❒_ feed
_❒_ eron
_❒_ solo
_❒_ gasm
_❒_ poke
_❒_ anal
_❒_ holo
_❒_ tits
_❒_ kuni
_❒_ kiss
_❒_ erok
_❒_ smug
_❒_ baka
_❒_ solog
_❒_ feetg
_❒_ lewdk
_❒_ waifu
_❒_ pussy
_❒_ femdom
_❒_ cuddle
_❒_ hentai
_❒_ eroyuri
_❒_ cum_jpg
_❒_ blowjob
_❒_ erofeet
_❒_ holoero
_❒_ classic
_❒_ erokemo
_❒_ fox_girl
_❒_ futanari
_❒_ lewdkemo
_❒_ wallpaper
_❒_ pussy_jpg
_❒_ kemonomimi
_❒_ nsfw_avatar
_❒_ ngif
_❒_ nsfw_neko_gif
_❒_ random_hentai_gif



 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
        
        case 'photoky':

case 'photooky':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ shadow text
_❒_ cup text
_❒_ cup1 text
_❒_ romance text
_❒_ smoke text
_❒_ burnpaper text
_❒_ lovemessage text
_❒_ undergrass text
_❒_ love text
_❒_ coffe text
_❒_ woodheart text
_❒_ woodenboard text
_❒_ summer3d text
_❒_ wolfmetal text
_❒_ nature3d text
_❒_ underwater text
_❒_ golderrose text
_❒_ summernature text
_❒_ letterleaves text
_❒_ glowingneon text
_❒_ fallleaves text
_❒_ flamming text
_❒_ harrypotter text
_❒_ carvedwood text
_❒_ tiktok text1 text2
_❒_ arcade8bit text1 text2
_❒_ battlefield4 text1 text2
_❒_ pubg text1 text2



 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
        
        case 'ephoto':

case 'ephotomenu':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ wetglass text
_❒_ multicolor3d text
_❒_ watercolor text
_❒_ luxurygold text
_❒_ galaxywallpaper text
_❒_ lighttext text
_❒_ beautifulflower text
_❒_ puppycute text
_❒_ royaltext text
_❒_ heartshaped text
_❒_ birthdaycake text
_❒_ galaxystyle text
_❒_ hologram3d text
_❒_ greenneon text
_❒_ glossychrome text
_❒_ greenbush text
_❒_ metallogo text
_❒_ noeltext text
_❒_ glittergold text
_❒_ textcake text
_❒_ starsnight text
_❒_ wooden3d text
_❒_ textbyname text
_❒_ writegalacy text
_❒_ galaxybat text
_❒_ snow3d text
_❒_ birthdayday text
_❒_ goldplaybutton text
_❒_ silverplaybutton text
_❒_ freefire text



 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break

                   // Random Text //
                  ///// LOLHUMAN API
case 'chiisaihentai':

                case 'trap':

                case 'blowjob':

                case 'yaoi':

                case 'ecchi':

                case 'hentai':

                case 'ahegao':

                case 'hololewd':

                case 'sideoppai':

                case 'animefeets':

                case 'animebooty':

                case 'animethighss':

                case 'hentaiparadise':

                case 'animearmpits':

                case 'hentaifemdom':

                case 'lewdanimegirls':

                case 'biganimetiddies':

                case 'animebellybutton':

                case 'hentai4everyone':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${setting.lolkey}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
break
                case 'bj':

                case 'ero':

                case 'cum':

                case 'feet':

                case 'yuri':

                case 'trap':

                case 'lewd':

                case 'feed':

                case 'eron':

                case 'solo':

                case 'gasm':

                case 'poke':

                case 'anal':

                case 'holo':

                case 'tits':

                case 'kuni':

                case 'kiss':

                case 'erok':

                case 'smug':

                case 'baka':

                case 'solog':

                case 'feetg':

                case 'lewdk':

                case 'waifu':

                case 'pussy':

                case 'femdom':

                case 'cuddle':

                case 'hentai':

                case 'eroyuri':

                case 'cum_jpg':

                case 'blowjob':

                case 'erofeet':

                case 'holoero':

                case 'classic':

                case 'erokemo':

                case 'fox_girl':

                case 'futanari':

                case 'lewdkemo':

                case 'wallpaper':

                case 'pussy_jpg':

                case 'kemonomimi':

                case 'nsfw_avatar':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${setting.lolkey}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
break

                    // Textprome //
                case 'blackpink':

                case 'neon':

                case 'greenneon':

                case 'advanceglow':

                case 'futureneon':

                case 'sandwriting':

                case 'sandsummer':

                case 'sandengraved':

                case 'metaldark':

                case 'neonlight':

                case 'holographic':

                case 'text1917':

                case 'minion':

                case 'deluxesilver':

                case 'newyearcard':

                case 'bloodfrosted':

                case 'halloween':

                case 'jokerlogo':

                case 'fireworksparkle':

                case 'natureleaves':

                case 'bokeh':

                case 'toxic':

                case 'strawberry':

                case 'box3d':

                case 'roadwarning':

                case 'breakwall':

                case 'icecold':

                case 'luxury':

                case 'cloud':

                case 'summersand':

                case 'horrorblood':

                case 'thunder':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${setting.lolkey}&text=${ini_txt}`).then((gambar) => {
                        zaki.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `ZAKI GANTENG`, quoted : freply})
                    })
                    break
                case 'pornhub':

                case 'glitch':

                case 'avenger':

                case 'space':

                case 'ninjalogo':

                case 'marvelstudio':

                case 'lionlogo':

                case 'wolflogo':

                case 'steel3d':

                case 'wallgravity':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${setting.lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        zaki.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `ZAKI GANTENG`, quoted : freply})
                    })
                    break

                    // Photo Oxy //
                case 'shadow':

                case 'cup':

                case 'cup1':

                case 'romance':

                case 'smoke':

                case 'burnpaper':

                case 'lovemessage':

                case 'undergrass':

                case 'love':

                case 'coffe':

                case 'woodheart':

                case 'woodenboard':

                case 'summer3d':

                case 'wolfmetal':

                case 'nature3d':

                case 'underwater':

                case 'golderrose':

                case 'summernature':

                case 'letterleaves':

                case 'glowingneon':

                case 'fallleaves':

                case 'flamming':

                case 'harrypotter':

                case 'carvedwood':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`).then((gambar) => {
                        zaki.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `ZAKI GANTENG`, quoted : freply})
                    })
                    break
                case 'tiktok':

                case 'arcade8bit':

                case 'battlefield4':

                case 'pubg':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${setting.lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        zaki.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `ZAKI GANTENG`, quoted : freply})
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':

                case 'multicolor3d':

                case 'watercolor':

                case 'luxurygold':

                case 'galaxywallpaper':

                case 'lighttext':

                case 'beautifulflower':

                case 'puppycute':

                case 'royaltext':

                case 'heartshaped':

                case 'birthdaycake':

                case 'galaxystyle':

                case 'hologram3d':

                case 'greenneon':

                case 'glossychrome':

                case 'greenbush':

                case 'metallogo':

                case 'noeltext':

                case 'glittergold':

                case 'textcake':

                case 'starsnight':

                case 'wooden3d':

                case 'textbyname':

                case 'writegalacy':

                case 'galaxybat':

                case 'snow3d':

                case 'birthdayday':

                case 'goldplaybutton':

                case 'silverplaybutton':

                case 'freefire':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${setting.lolkey}&text=${ini_txt}`).then((gambar) => {
                        zaki.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `ZAKI GANTENG`, quoted : freply}) 
                    })
                    break
                    case 'linkgc':

              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
		    linkgc = await zaki.groupInviteCode (from)
		    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
		    zaki.sendMessage(from, yeh, text, {quoted: freply})
                    break
                   case 'setwelcome':

					  
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    zaki.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					zaki.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
                         case 'public':

        	      if (!zak.key.fromMe && !isOwner) return 
              if (banChats === false) return 
              banChats = false
              textImg(`Done Mode Public Kak >\\<`)
              break
              case 'kicktime':

              if (!isGroup) return reply(mess.only.group)
		    if (!isGroupAdmins) return reply(mess.only.admin)
		    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		    if (zak.message.extendedTextMessage === undefined || zak.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
		    mentioned = zak.message.extendedTextMessage.contextInfo.mentionedJid
		    setTimeout( () => {
		    zaki.sendMessage(from, 'Yok Sama" Al-fatihah', text)
		    }, 8000)
		    setTimeout( () => {
		    reply('sukses min:D')
		    }, 7000)
		    setTimeout( () => {
		    kick(from, mentionUser)
		    }, 6000)
		    setTimeout( () => {
		    zaki.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
		    }, 5000)
		    setTimeout( () => {
		    zaki.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
		    }, 2500)
		    setTimeout( () => {
		    reply('Perintah Diterima min:D')
		    }, 0)
		    break
              case 'set':

	      case 'mode':

        if (!zak.key.fromMe && !isOwner) return;
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC`,
            },
            type: 1,
          },
        ]);
        break;
        case 'bc2':

      case 'broadcast2':

             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await zaki.chats.all()
             if (isMedia && !zak.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak
             bc = await zaki.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             zaki.sendMessage(_.jid, bc, image, {quoted: ftroli2,caption: `*「 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
zaki.sendMessage(_.jid, 
	    {"contentText": `*「 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎 」*\n\n${body.slice(4)}`,
	    "footerText": '© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎',
	    "buttons": [
	    {"buttonId": `!command`,
	    "buttonText": {"displayText": "⋮☰ COMMAND"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted: ftroli2})
}
             reply('Suksess broadcast')
}
             break
	      case 'self':

              if (!zak.key.fromMe && !isOwner) return 
              if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              textImg(`Mode Self Done Kak >\\<`)
              break
              case 'ppcp':

              case 'ppcouple':

       if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${setting.lolkey}`)
			buff1 = await getBuffer(anu.result.male)
			buttons = [{buttonId: `!ytowner`,buttonText:{displayText: `ZAKI GANTENG`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`COWO`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
              buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `!ytowner`,buttonText:{displayText: `ZAKI GANTENG`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`CEWE`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
             setTimeout( async () => {
 zaki.relayWAMessage(prep)
}, 5000)
break
case 'wasted':

if (isMuted) return    

		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !zak.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak
			owgi = await zaki.downloadAndSaveMediaMessage(ger)
			data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
			buff = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=${setting.lolkey}&img=${data.display_url}`)
			zaki.sendMessage(from, buff, image, {quoted: zak, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
		    }
		    break
case 'triggered':

                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=${setting.lolkey}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        zaki.sendMessage(from, buff, sticker, { quoted: ftroli2 }).then(() => {
                            fs.unlinkSync(rano)
                        })
                    })
                    break	    
case 'culik':

              if (!isOwner && !zak.key.fromMe) return  reply(mess.only.owner)
              if (!zak.key.remoteJid) return reply('Owner bukan?')
              if (args.length < 1) return reply('Masukin id grupnya')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
              }
              zaki.groupAdd(args[0], pantek)
break
		    case 'tahta':

		if (isMuted) return    

		    buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
break
               case 'darkjoke':

     if (isMuted) return    

 
			buff = await getBuffer(`http://lolhuman.xyz/api/meme/darkjoke?apikey=${setting.lolkey}`, {method: 'get'})
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
break
case 'memeindo':

		if (isMuted) return    

		    buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${setting.lolkey}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
break        
case 'cecan':

		if (isMuted) return    

		    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${setting.lolkey}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
break
  case 'yatim':

    if (isMuted) return    

              
    membr = []
              
    const paq = groupMembers
              
    const koi = groupMembers
              
    const asc = paq[Math.floor(Math.random() * paq.length)]
              
    const ysu = pushname[Math.floor(Math.random() * koi.length)]
              
    teks = `*Yahhh Kasian Yatim :* @${asc.jid.split('@')[0]}`
              
    membr.push(asc.jid)
              
    mentions(teks, membr, true)

    break
case 'cogan':

		if (isMuted) return    

		    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${setting.lolkey}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
break
		case 'quotesmaker':

		if (isMuted) return    

		    buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=IkyOgiwara`)
		    zaki.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: freply})
		case 'tinyurl':

		if (isMuted) return    

		    anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=IkyOgiwara`)
		    zaki.sendMessage(from, `${anu.result}`, text, {quoted: zak})
		    break
		case 'cuttly':

		if (isMuted) return    

		    anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=IkyOgiwara`)
		    zaki.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: zak})
		    break
		case 'shorturl':

		if (isMuted) return    

		    anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=IkyOgiwara`)
		    zaki.sendMessage(from, `${anu.result}`, text, {quoted: zak})
		    break
		    case 'meme':

case 'memek':

if (isMuted) return    

 buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')

buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
break
                case 'quotes':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${setting.lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*â€• ${author}*`)
                    break
                case 'quotesanime':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${setting.lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
                    break
                case 'quotesdilan':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=${setting.lolkey}`)
                     reply(get_result.result)

                   break
                    break
                case 'quotesimage':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
                    await zaki.sendMessage(from, get_result, image)
                    break
                case 'faktaunik':

                case 'katabijak':

                case 'pantun':

                case 'bucin':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
        break;
                    break
                case 'quotesislami':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${setting.lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
break
                case 'randomnama':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${setting.lolkey}`)
                    zaki = anu.result
                   sendButMessage(from, zaki, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
        break;
                    break
       // Movie & Story
                case 'lk21':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.Language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await zaki.sendMessage(from, thumbnail, image, { quoted: zak, caption: ini_txt })
                    break
                case 'drakorongoing':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${setting.lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await zaki.sendMessage(from, thumbnail, image, { quoted: zak, caption: ini_txt })
                    break
                case 'wattpadsearch':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    titid = ini_txt
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
        break;
                    break
                case 'ceritahoror':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    buff = await getBuffer(get_result.thumbnail)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
        break

               case 'groupmenu':

        case 'menugroup':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ᴀꜰᴋ *ᴀʟᴀꜱᴀɴ*
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ᴄᴇᴋꜱᴇᴡᴀ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ᴋɪᴄᴋᴀʟʟ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ɪɴꜰᴏɢʀᴜᴘ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ᴘʀᴏᴍᴏᴛᴇ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ᴅᴇᴍᴏᴛᴇ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ʟɪꜱᴛᴏɴʟɪɴᴇ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ʟᴇᴀᴠᴇ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ᴋɪᴄᴋ *ʀᴇᴘʟʏ*
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ᴀᴅᴅ *+62xxxxxx*
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ꜱᴇᴛɢʀᴜᴘɴᴀᴍᴇ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ꜱᴇᴛᴘᴘɢʀᴜᴘ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ꜱᴇᴛᴅᴇꜱᴄ
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ꜱɪᴅᴇʀ *ʀᴇᴘʟʏ ᴄʜᴀᴛ ʙᴏᴛ*
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ  ʜɪᴅᴇᴛᴀɢ *ᴛᴇᴋꜱ/ʀᴇᴘʟʏ ᴛᴇᴋꜱ*


 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
        case 'storymenu':

        case 'moviemenu':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ drakorongoing
_❒_ lk21 query
_❒_ wattpad url_wattpad
_❒_ wattpadsearch query
_❒_ cerpen
_❒_ ceritahoror



 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
        case 'randomtext':

        case 'random':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ quotes
_❒_ quotesdiLan
_❒_ quotesanime
_❒_ quotesimage
_❒_ faktaunik
_❒_ katabijak
_❒_ pantun
_❒_ quotesislami
_❒_ bucin
_❒_ bucin2
_❒_ randomnama



 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
case 'bucin2':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${setting.lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
break

        
        case 'ownermenu':

        case  'menuowner':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ bc *teks*
_❒_ term
_❒_ self
_❒_ public
_❒_ eval
_❒_ reset
_❒_ clearall
_❒_ leaveall
_❒_ addvn
_❒_ getvn
_❒_ addimage
_❒_ getimage
_❒_ addvideo
_❒_ getvideo
_❒_ slow
_❒_ leaveall
_❒_ join *link gc*
_❒_ shutdown
_❒_ getquoted
_❒_ addupdate *fiturnya*
_❒_ exif *nama|author*
_❒_ sewa add/del *waktunya*
_❒_ premium add @tag|nomor
_❒_ premium del @tag|nomor


 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
        
       case 'wibumenu1':

        case  'wibu1':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ loli
_❒_ manga
_❒_ anime 
_❒_ lolivideo
_❒_ husbu
_❒_ waifu
_❒_ milf
_❒_ neko
_❒_ kanna
_❒_ sagiri
_❒_ hentai
_❒_ cosplay
_❒_ wallnime
_❒_ kusonime
_❒_ megumin
_❒_ otakudesu
_❒_ doujindesu
_❒_ storyanime
_❒_ nakanomiku
_❒_ nakanozaki
_❒_ nakanoitsuki
_❒_ otakuongoing
_❒_ nhentai *code*
_❒_ nekopoi *link*


 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
        
       case 'downloadmenu':

        case  'menudownload':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ fb 
_❒_ igdl 
_❒_ igdl2 
_❒_ twitter 
_❒_ tiktok 
_❒_ play 
_❒_ ythd 
_❒_ ytmp3 
_❒_ ytmp4 
_❒_ soundcloud 
_❒_ tiktoknowm 
_❒_ tiktokaudio
_❒_ mediafire 
_❒_ nhentaipdf *code*


 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
   
     case 'othermenu':

        case  'menuother':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ brainly *query*
_❒_ shopee *product*
_❒_ playstore *query*
_❒_ ssweb *query*
_❒_ google *query*
_❒_ image *query*
_❒_ pinterest *query*
_❒_ nulis *teks*
_❒_ iguser *ussername*
_❒_ igstalk *username*
_❒_ githubstalk *username*
_❒_ tiktokstalk *ussername*
_❒_ img2url *reply foto*
_❒_ ytsearch *query*


 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
   
   case 'gamemenu':

        case  'menugame':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
           menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ slot
_❒_ limitgame
_❒_ gelud @tag
_❒_ tictactoe @tag
_❒_ siapaaku
_❒_ family100
_❒_ kuismath
_❒_ asahotak
_❒_ tebaklirik
_❒_ tebaklagu
_❒_ tebakkata
_❒_ susunkata
_❒_ kimiakuis
_❒_ caklontong
_❒_ tebakjenaka
_❒_ tebakanime
_❒_ tebaktebakan
_❒_ tebakgambar
_❒_ tebakbendera
_❒_ suit *batu/kertas/gunting*


 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
               case 'stickermenu':

        case  'stikermenu':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`



               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ dadu
_❒_ doge
_❒_ toimg
_❒_ patrick
_❒_ garwgura
_❒_ ttg *teks*
_❒_ attp *teks*
_❒_ stickeranime
_❒_ semoji *emoji*
_❒_ sticker *reply foto/video*
_❒_ smeme *teks|teks*
_❒_ swm *pack|author*
_❒_ take *pack|author* 
_❒_ tovideo *reply sgif*  
 

 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
                    case 'funmenu':

        case  'menufun':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ mining
_❒_ togel
_❒_ cekwatak
_❒_ cekmati [nama]
_❒_ wangy [nama]
_❒_ citacita
_❒_ toxic
_❒_ truth
_❒_ dare
_❒_ apakah
_❒_ bisakah
_❒_ kapankah
_❒_ memeindo
_❒_ cecan
_❒_ cogan
_❒_ darkjoke
_❒_ rate
_❒_ jadian
_❒_ cantik
_❒_ ganteng
_❒_ beban
_❒_ babi
_❒_ cekganteng
_❒_ cekcantik 



 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
   case 'infomenu':

        case  'menuinfo':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 
 
_❒_ update
_❒_ level
_❒_ rules
_❒_ profile
_❒_ waktu
_❒_ botstat
_❒_ sewabot
_❒_ listsewa
_❒_ owner
_❒_ ping
_❒_ runtime
_❒_ donasi
_❒_ leaderboard
_❒_ cekpremium
_❒_ listpremium
_❒_ sourcecode
_❒_ bugreport *keluhan*


  
 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
               case 'allmenu':
 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
menu =`*Halo Kak* ${pushname} Ini List Fitur Yang Ada Di Bot Ini :
              ╭──❒ ♛ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 ♛
❒ 𝐍𝐚𝐦𝐞 : *${botName}*
❒ 𝐎𝐰𝐧𝐞𝐫 : *${@mhmmdfthalarfn}*
❒ 𝐀𝐮𝐭𝐡𝐨𝐫 : *MhmmdFthlArfn*
❒ 𝐏𝐫𝐞𝐟𝐢𝐱 : *Multi Prefix*
❒ 𝐋𝐢𝐛 : *Baileys*
❒ 𝐓𝐲𝐩𝐞 : *NodeJS*
❒ 𝐌𝐨𝐝𝐞 : *${isPublic? "Public":"Self"}*
❒ 𝐑𝐚𝐦 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
❒ 𝐕𝐞𝐫𝐬𝐢 𝐎𝐒 : *${os_version}*
❒ 𝐕𝐞𝐫𝐬𝐢 𝐇𝐏 : *${device_model}*
❒ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : *${wa_version}*
❒ 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 : *( ${pendaftar.length} )*
❒ 𝐒𝐩𝐞𝐞𝐝 : *${hby.toFixed(4)}* 𝘚𝘦𝘤𝘰𝘯𝘥
❒ 𝘾𝙝𝙖𝙩 𝐆𝐫𝐨𝐮𝐩 : *( ${groups.length} )*
❒ 𝘾𝙝𝙖𝙩 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 : *( ${privat.length} )*
❒ 𝘾𝙝𝙖𝙩 𝐓𝐨𝐭𝐚𝐥 : *( ${totalChat.length} )*
╰───────────────────────
                
  ╭────────❒ [ *INFO MENU* ] ❒─────────
_❒_ owner
_❒_ runtime
_❒_ speed
_❒_ menu
_❒_ botstat
_❒_ sc
_❒_ donate
_❒_ profile
_❒_ info
_❒_ tes
_❒_ bugreport
_❒_ patner
_❒_ rules
_❒_ waktu
_❒_ listsewabot
_❒_ listpremium
_❒_ cekpremium
_❒_ leaderboard
_❒_ payment
_❒_ lolhuman
 
  ╭──❒ *[   OWNER MENU   ]*
_❒_ ban
_❒_ unban
_❒_ bc
_❒_ bc2
_❒_ bc3
_❒_ culik
_❒_ addsewa
_❒_ addpremium
_❒_ faketoko
_❒_ spamsms
_❒_ addupdate
_❒_ reset
_❒_ exif
_❒_ update
_❒_ eval
_❒_ term
_❒_ join
_❒_ clearall
_❒_ shutdown
_❒_ restart
_❒_ leaveall
_❒_ jadibot
_❒_ addrespon
_❒_ delrespon
_❒_ liststicker
_❒_ getquoted
_❒_ mokad
_❒_ mode
_❒_ public
_❒_ self

  ╭──❒ *[   GROUP MENU   ]*
_❒_ kick
_❒_ add
_❒_ infogroup
_❒_ welcome
_❒_ antilink
_❒_ group [ open/close ]
_❒_ levelling
_❒_ mute
_❒_ promote
_❒_ demote
_❒_ setgroupname
_❒_ setdesc
_❒_ sider
_❒_ setppgroup
_❒_ afk
_❒_ hidetag
_❒_ tagall
_❒_ kickall
_❒_ kicktime
_❒_ listonline

  ╭──❒ *[   FUN MENU   ]*
_❒_ wangy
_❒_ mining
_❒_ waktu
_❒_ cekmati
_❒_ togel
_❒_ toxic
_❒_ citacita
_❒_ apakah
_❒_ rate
_❒_ bay
_❒_ selamatdatang
_❒_ cekganteng
_❒_ cekcantik
_❒_ cekwatak
_❒_ hobby
_❒_ bisakah
_❒_ kapankah
_❒_ truth
_❒_ dare
_❒_ jadian
_❒_ babi
_❒_ ganteng
_❒_ cantik
_❒_ beban
_❒_ yatim
_❒_ cecan
_❒_ cogan
_❒_ chord
_❒_ asupan
_❒_ asupan2

  ╭──❒ *[   STALK MENU   ]*
_❒_ githubstalk
_❒_ igstalk
_❒_ tiktokstalk
_❒_ iguser
_❒_ mlstalk

  ╭──❒ *[   TOOLS MENU   ]*
_❒_ dadu
_❒_ doge
_❒_ gawrgura
_❒_ animestick
_❒_ telesticker
_❒_ semoji
_❒_ ttp
_❒_ attp
_❒_ delete
_❒_ sticker
_❒_ delwm
_❒_ take
_❒_ stickerwm
_❒_ toimg
_❒_ smeme2
_❒_ smeme
_❒_ togif
_❒_ tovid
_❒_ tomp3
_❒_ wasted
_❒_ triggered
_❒_ ppcouple
_❒_ tourl
_❒_ img2url
_❒_ ocr
_❒_ translate
_❒_ stickerwa
_❒_ smoji2
_❒_ stickernobg

  ╭──❒ *[   TEXTPRO MENU   ]*
_❒_ blackpink text
_❒_ neon text
_❒_ greenneon text
_❒_ advanceglow text
_❒_ futureneon text
_❒_ sandwriting text
_❒_ sandsummer text
_❒_ sandengraved text
_❒_ metaldark text
_❒_ neonlight text
_❒_ holographic text
_❒_ text1917 text
_❒_ minion text
_❒_ deluxesilver text
_❒_ newyearcard text
_❒_ bloodfrosted text
_❒_ halloween text
_❒_ jokerlogo text
_❒_ fireworksparkle text
_❒_ natureleaves text
_❒_ bokeh text
_❒_ toxic text
_❒_ strawberry text
_❒_ box3d text
_❒_ roadwarning text
_❒_ breakwall text
_❒_ icecold text
_❒_ luxury text
_❒_ cloud text
_❒_ summersand text
_❒_ horrorblood text
_❒_ thunder text
_❒_ pornhub text1 text2
_❒_ glitch text1 text2
_❒_ avenger text1 text2
_❒_ space text1 text2
_❒_ ninjalogo text1 text2
_❒_ marvelstudio text1 text2
_❒_ lionlogo text1 text2
_❒_ wolflogo text1 text2
_❒_ steel3d text1 text2
_❒_ wallgravity text1 text2

  ╭──❒ *[   ISLAM MENU   ]*
_❒_ listsurah
_❒_ alquran
_❒_ alquranaudio
_❒_ asmaulhusna
_❒_ kisahnabi
_❒_ jadwalsholat 

  ╭──❒ *[   ANIME MENU   ]*
_❒_ loli
_❒_ manga
_❒_ anime 
_❒_ lolivideo
_❒_ husbu
_❒_ waifu
_❒_ milf
_❒_ wallml
_❒_ neko
_❒_ kanna
_❒_ sagiri
_❒_ hentai
_❒_ cosplay
_❒_ wallnime
_❒_ kusonime
_❒_ megumin
_❒_ otakudesu
_❒_ doujindesu
_❒_ storyanime
_❒_ nakanomiku
_❒_ nakanozaki
_❒_ nakanoitsuki
_❒_ otakuongoing
_❒_ nhentai *code*
_❒_ nekopoi *link*
_❒_ nekopoisearch

  ╭──❒ *[   WIBU MENU   ]*
_❒_ chiisaihentai
_❒_ trap
_❒_ cosplay
_❒_ blowjob
_❒_ yaoi
_❒_ ecchi
_❒_ hentai
_❒_ ahegao
_❒_ hololewd
_❒_ sideoppai
_❒_ animefeets
_❒_ animebooty
_❒_ animethighss
_❒_ hentaiparadise
_❒_ animearmpits
_❒_ hentaifemdom
_❒_ lewdanimegirls
_❒_ biganimetiddies
_❒_ animebellybutton
_❒_ hentai4everyone
_❒_ elf
_❒_ neko
_❒_ kanna
_❒_ sagiri
_❒_ megumin
_❒_ wallnime

  ╭──❒ *[   ANIMEH MENU   ]*
_❒_ bj
_❒_ ero
_❒_ cum
_❒_ feet
_❒_ yuri
_❒_ trap
_❒_ lewd
_❒_ feed
_❒_ eron
_❒_ solo
_❒_ gasm
_❒_ poke
_❒_ anal
_❒_ holo
_❒_ tits
_❒_ kuni
_❒_ kiss
_❒_ erok
_❒_ smug
_❒_ baka
_❒_ solog
_❒_ feetg
_❒_ lewdk
_❒_ waifu
_❒_ pussy
_❒_ femdom
_❒_ cuddle
_❒_ hentai
_❒_ eroyuri
_❒_ cum_jpg
_❒_ blowjob
_❒_ erofeet
_❒_ holoero
_❒_ classic
_❒_ erokemo
_❒_ fox_girl
_❒_ futanari
_❒_ lewdkemo
_❒_ wallpaper
_❒_ pussy_jpg
_❒_ kemonomimi
_❒_ nsfw_avatar
_❒_ ngif
_❒_ nsfw_neko_gif
_❒_ random_hentai_gif

  ╭──❒ *[   PHOTOOKY MENU   ]*
_❒_ shadow text
_❒_ cup text
_❒_ cup1 text
_❒_ romance text
_❒_ smoke text
_❒_ burnpaper text
_❒_ lovemessage text
_❒_ undergrass text
_❒_ love text
_❒_ coffe text
_❒_ woodheart text
_❒_ woodenboard text
_❒_ summer3d text
_❒_ wolfmetal text
_❒_ nature3d text
_❒_ underwater text
_❒_ golderrose text
_❒_ summernature text
_❒_ letterleaves text
_❒_ glowingneon text
_❒_ fallleaves text
_❒_ flamming text
_❒_ harrypotter text
_❒_ carvedwood text
_❒_ tiktok text1 text2
_❒_ arcade8bit text1 text2
_❒_ battlefield4 text1 text2
_❒_ pubg text1 text2

  ╭──❒ *[   EPHOTO MENU   ]*
_❒_ wetglass text
_❒_ multicolor3d text
_❒_ watercolor text
_❒_ luxurygold text
_❒_ galaxywallpaper text
_❒_ lighttext text
_❒_ beautifulflower text
_❒_ puppycute text
_❒_ royaltext text
_❒_ heartshaped text
_❒_ birthdaycake text
_❒_ galaxystyle text
_❒_ hologram3d text
_❒_ greenneon text
_❒_ glossychrome text
_❒_ greenbush text
_❒_ metallogo text
_❒_ noeltext text
_❒_ glittergold text
_❒_ textcake text
_❒_ starsnight text
_❒_ wooden3d text
_❒_ textbyname text
_❒_ writegalacy text
_❒_ galaxybat text
_❒_ snow3d text
_❒_ birthdayday text
_❒_ goldplaybutton text
_❒_ silverplaybutton text
_❒_ freefire text

  ╭──❒ *[    FOTO MENU   ]*
_❒_ 1977
_❒_ aden
_❒_ brannan
_❒_ brooklyn
_❒_ clarendon
_❒_ gingham
_❒_ hudson
_❒_ inkwell
_❒_ earlybird
_❒_ kelvin
_❒_ lark
_❒_ lofi
_❒_ maven
_❒_ mayfair
_❒_ moon
_❒_ nashville
_❒_ perpetua
_❒_ reyes
_❒_ rise
_❒_ slumber
_❒_ stinson
_❒_ toaster
_❒_ valencia
_❒_ walden
_❒_ willow
_❒_ xpro2
_❒_ pencil

  ╭──❒ *[  STORY MENU   ]*
_❒_ drakorongoing
_❒_ lk21 query
_❒_ wattpad url_wattpad
_❒_ wattpadsearch query
_❒_ cerpen
_❒_ ceritahoror
              
  ╭──❒ *[   RANDOMTEXT MENU   ]*
_❒_ quotes
_❒_ quotesdiLan
_❒_ quotesanime
_❒_ quotesimage
_❒_ faktaunik
_❒_ katabijak
_❒_ pantun
_❒_ quotesislami
_❒_ bucin
_❒_ bucin2
_❒_ randomnama

  ╭──❒ *[   DOWNLOAD MENU   ]*
_❒_ fb 
_❒_ igdl 
_❒_ igdl2 
_❒_ twitter 
_❒_ tiktokdl
_❒_ tt1
_❒_ tt2
_❒_ play 
_❒_ ythd 
_❒_ ytmp3 
_❒_ ytmp4 
_❒_ soundcloud 
_❒_ tiktoknowm 
_❒_ tiktokaudio
_❒_ mediafire 
_❒_ nhentaipdf *code*
_❒_ spotifydl
_❒_ xnxxdl

  ╭──❒ *[   SEARCH MENU   ]*
_❒_ lagu
_❒_ xnxxsearch
_❒_ spotifysearch
_❒_ wattpadsearch

  ╭──❒ *[   OTHER MENU   ]*
_❒_ brainly *query*
_❒_ shopee *product*
_❒_ playstore *query*
_❒_ ssweb *query*
_❒_ ssweb2
_❒_ shortlink
_❒_ google *query*
_❒_ image *query*
_❒_ pinterest *query*
_❒_ nulis *teks*
_❒_ ytsearch *query*
_❒_ heroml

  ╭──❒ *[   ANIME MENU   ]*
_❒_ ${prefix}
_❒_ ${prefix}
_❒_ ${prefix}
_❒_ ${prefix}
_❒_ ${prefix}

  ╭──❒ *[   DOSA MENU   ]*
_❒_ dosa1
_❒_ dosa2
_❒_ dosa3
_❒_ dosa4
_❒_ dosa5
_❒_ dosa6
_❒_ dosa7
_❒_ dosa8
_❒_ dosa9
_❒_ dosa10
_❒_ dosa11
_❒_ dosa12
_❒_ dosa13
_❒_ dosa14
_❒_ dosa15
_❒_ dosa16
_❒_ dosa17
_❒_ dosa18
_❒_ dosa19
_❒_ dosa20
_❒_ dosa21
_❒_ dosa22
_❒_ dosa23
_❒_ dosa24
              
  ╭──❒ *[   GAME MENU   ]*
_❒_ slot
_❒_ limitgame
_❒_ gelud @tag
_❒_ tictactoe @tag
_❒_ t
_❒_ siapaaku
_❒_ family100
_❒_ kuismath
_❒_ asahotak
_❒_ tebaklirik
_❒_ tebaklagu
_❒_ tebakkata
_❒_ susunkata
_❒_ kimiakuis
_❒_ caklontong
_❒_ tebakjenaka
_❒_ tebakanime
_❒_ tebaktebakan
_❒_ tebakgambar
_❒_ tebakbendera
_❒_ suit *batu/kertas/gunting*

  ╭──❒ *[   SPORTAGE MENU   ]*
_❒_ slow
_❒_ addsticker
_❒_ liststicker
_❒_ getsticker
_❒_ addvn
_❒_ listvn
_❒_ getvn
_❒_ addimage
_❒_ listimage
_❒_ getimage
_❒_ addvideo
_❒_ listvideo
_❒_ getvideo

  ╭──❒ *[   BERITA MENU   ]*
_❒_ wikipedia
_❒_ newsinfo
_❒_ cnnindonesia
_❒_ cnninternasional
_❒_ cnnnasional
_❒_ infogempa
_❒_ covidindo
_❒_ covidglobal
_❒_ kodepos
_❒_ jadwalbola
_❒_ indbeasiswa
_❒_ hoax`
  ╰────────────────────
               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Maaf Ada Beberapa Fitur Yang Masih Belum Tertulis_
  
 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break               
case 'dosa':

        case  'penambahdosa':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`

               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ dosa1
_❒_ dosa2
_❒_ dosa3
_❒_ dosa4
_❒_ dosa5
_❒_ dosa6
_❒_ dosa7
_❒_ dosa8
_❒_ dosa9
_❒_ dosa10
_❒_ dosa11
_❒_ dosa12
_❒_ dosa13
_❒_ dosa14
_❒_ dosa15
_❒_ dosa16
_❒_ dosa17
_❒_ dosa18
_❒_ dosa19
_❒_ dosa20
_❒_ dosa21
_❒_ dosa22
_❒_ dosa23
_❒_ dosa24
              
              

  
 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
                          zaki.relayWAMessage(prep)
               break
   //addfiturdosa
                case 'dosa1':
				 
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'dosa2':

				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'dosa3':
	
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'dosa4':
	
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'dosa5':
	
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'dosa6':

				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'dosa7':

                   if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'dosa8':
	
		        if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
				   case 'dosa10':
	
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'dosa11':
	
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'dosa12':
	
			    if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'dosa13':
	
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'dosa14':
	
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'dosa15':

	          if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'dosa16':

               if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'dosa17':
	
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'dosa18':

				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'dosa19':
				 
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'dosa20':
			
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'dosa21':
				 
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'dosa22':
		
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'dosa23':
	
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'dosa24':
				 
				if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
				qute = fs.readFileSync('src/image/thumbnail.jpeg') 
				   zaki.sendMessage(from, qute, image, { quoted: zak, caption: '*MINING DOSA KAK?*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
				   case 'dosa25':
		
		 

   case 'islammenu':

        case  'islamimenu':

        case 'penambahpahala':

        case 'pahala':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
      
 menu =`_Hallo Kak ${pushname}_ ${ucapanWaktu}`
               buttons =  [
    {buttonId: `${prefix}rules`, buttonText: {displayText: 'INFORMATION'}, type: 1},
]
               imageMsg = (await zaki.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `_Ini List Menunya Kak_ : 

_❒_ listsurah
_❒_ alquran
_❒_ alquranaudio
_❒_ asmaulhusna
_❒_ kisahnabi
_❒_ jadwalsholat 
              


 © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}


               prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
              zaki.relayWAMessage(prep)
               break
   case 'patner':

      if (isMuted) return    

                              list = []
               listmenu = [`kizakixd`,`yakko`,`vean`,`anto`,`rapa`,`kangmilf`,`yogi`,`wa`]
               listmenuu = [`𝙆𝙞𝙕𝙖𝙠𝙞𝙓𝘿`,`𝙔𝙖𝙠𝙠𝙤 𝙆𝙖𝙣𝙜 𝘽𝙤𝙚𝙘𝙞𝙣`,`𝙊𝙢 𝙑𝙚𝙖𝙣𝙜`,`𝙃𝙖𝙧𝙙𝙞𝙖𝙣𝙩𝙤 𝘾𝙖𝙣𝙨`,`𝙍𝙖𝙥𝙖 (𝙎𝙚𝙣𝙠𝙪)`,`𝙕𝙖𝙠𝙞 𝙆𝙖𝙣𝙜 𝙈𝙞𝙡𝙛`,`𝙔𝙤𝙜𝙞 𝙐𝙨𝙚𝙧 𝙉𝙚𝙠𝙤𝙥𝙤𝙞`,`𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `Thanks My Patner` ,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `Ini List Patner Nya Kak >\\<`,`  `, list)
               break
   case 'kizakixd':
 
               sendKontak(from, `6285878313791`, `𝙆𝙞𝙕𝙖𝙠𝙞𝙓𝘿`, 'Sibukk!!')
               break
   case 'yogi':
 
               sendKontak(from, `62895613293360`, `𝙔𝙤𝙜𝙞 𝙎𝙞 𝙒𝙞𝙗𝙪`, 'Sibukk!!')
               break 
   case 'dzz':
 
               sendKontak(from, `6288226487112`, `𝘿𝙯𝙯`, 'Sibukk!!')
               break
   case 'rapa':
 
               sendKontak(from, `62818046803276`, `𝙍𝙖𝙥𝙖`, 'Sibukk!!')
               break
   case 'devil':

               sendKontak(from, `6288215463787`, `𝘿𝙚𝙫𝙞𝙡`, 'Sibukk!!')
               break
   case 'wa':
 
               sendKontak(from, `0`, `𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥`, 'Sibukk!!')
               break                 
   case 'yakko':

              sendKontak(from, `6283803284713`, `𝙔𝙖𝙠𝙠𝙤 𝙆𝙖𝙣𝙜 𝘽𝙤𝙚𝙘𝙞𝙣`, 'Sibukk!!') 
               break
   case 'anto':
         
                 sendKontak(from, `62895325697662`,`𝘼𝙣𝙩𝙤𝙘𝙝𝙖𝙣𝙨`, 'Sibukk!!')
                 break
                
   case 'kangmilf':

                  sendKontak(from, `6289512695391`,`𝙆𝙖𝙣𝙜 𝙈𝙞𝙡𝙛`, 'Sibukk!!')
                  break
   case 'vean':

                sendKontak(from, `628983583288`, `𝙑𝙚𝙖𝙣𝙜 𝙂𝙖𝙮`, 'Sibukk!!')   
               break              
   case 'command':

   
   if (isMuted) return    

               list = []
               listmenu = [`groupmenu`,`photoky`,`ephoto`,`randomimage`,`asupan`,`cecan`,`cogan`,`wibu1`,`wibu2`,`dosa`,`randomtext`,`islammenu`,`storymenu`,`stickermenu`,`ownermenu`,`gamemenu`,`funmenu`,`downloadmenu`,`infomenu`,`othermenu`,`owner`,`zakgroup`,`patner`,`sewabot`]
               listmenuu = [`Menu Group`,`Photo Oky`,`Ephoto Menu`,`Random Image`,`Asupannya Kak >||<`,`Bismillah Cantik`,`Bismillah Ganteng`,`Wibu Menu 1`,`Wibu Menu 2`,`Penambah Dosa`,`RandomText`,`Islam Menu`,`Movie&Story`,`Sticker Menu`,`Owner Command`,`Game Menu`,`For Fun Menu`,`Downloader`,`Info Menu`,`Menu Lainnya`,`OwnerBot`,`Official Group`,`My Patner`,`Rent this Bot`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎 \n \nHalo kak ${pushname} \nIni Beberapa Fitur Yang Biasa Digunakan`,`  `, list)
               break
   
   ///ISLAMI MENU  

// Islami //
                case 'listsurah':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${setting.lolkey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${setting.lolkey}`)
                    await zaki.sendMessage(from, ini_buffer, audio, { quoted: freply, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
      case 'rules':

             zaki.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: freply})
             break

      
      
     
                    ////SPORTAGE MENU
               
               case 'slow':

        if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

					encmedia = JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zaki.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						zaki.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
						fs.unlinkSync(ran)
					})
					break
				case 'stickerlist':

			case 'liststicker':

			if (!isOwner) return reply(`Kamu bukan owner say:v`)
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				zaki.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, contextInfo: { "mentionedJid": setiker } })
				zaki.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
			case 'addsticker':

			if (!isOwner) return reply(`Kamu bukan owner say:v`)
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zaki.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				zaki.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
				zaki.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				
				
			case 'addvn':

			if (!isOwner) return reply(`Kamu bukan owner say:v`)
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zaki.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				zaki.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvn':

			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				zaki.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
				break
			case 'getsticker':

			case 'gets':

			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = body.slice(12)
				result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
				zaki.sendMessage(from, result, sticker)
				break
           case 'liststicker':

           if (!isOwner) return reply(`Kamu bukan owner say:v`)
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				zaki.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": setiker } })
				break
			case 'listvn':

			case 'vnlist':

			if (!isOwner) return reply(`Kamu bukan owner say:v`)
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				zaki.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':

			if (!isOwner) return reply(`Kamu bukan owner say:v`)
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zaki.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				zaki.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				await limitAdd(sender)
				break
			case 'getimage':

            case 'getimg':

			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				zaki.sendMessage(from, buffer, image, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':

			case 'listimage':

			if (!isOwner) return reply(`Kamu bukan owner say:v`)
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				zaki.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": imagenye } })
				break
				
			case 'addvideo':

			if (!isOwner) return reply(`Kamu bukan owner say:v`)
				if (!isQuotedVideo) return reply('Reply videonya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zaki.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				zaki.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvideo':

			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				zaki.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'listvideo':

			case 'videolist':

			if (!isOwner) return reply(`Kamu bukan owner say:v`)
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				zaki.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": videonye } })
				break
				   
//------------------< Game >------------------
        case 'limitgame':
 
        case 'balance':
 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)
               textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break
         case 'gelud':

  if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (zak.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!zak.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam ??🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               zaki.sendMessage(from, starGame, text, {quoted: zak, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':

        case 'resetgame':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':

        case 'ttt':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (zak.message.extendedTextMessage === undefined || zak.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = zak.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
           zaki.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
     
     gameAdd(sender, glimit)
     break
     case 't':

     if (isMuted) return    

       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
                   sendButMessage(from, titid, `© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
            
             
              break
       case 'family100':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
              anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${setting.lolkey}`)
              titid =  `*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\nTotal Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s `
          
                   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}family100`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
              
            
              let anoh = anu.data.result.aswer
              let rgfds = []
              for (let i of anoh){
              let fefs = i.split('/') ? i.split('/')[0] : i
              let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
              let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
              rgfds.push(axsf.toLowerCase())
}
              game.addfam(from, rgfds, gamewaktu, family100)
              gameAdd(sender, glimit)
              break
       case 'tebakanime':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakchara?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_image = get_result.image
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              ini_buffer = await getBuffer(ini_image)
              zaki.sendMessage(from, ini_buffer, image, { quoted: zak, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {
              tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
})
              await sleep(30000)
              if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game`, [
          {
            buttonId: `${prefix}tebakanime`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
              
              delete tebakanime[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
}
              gameAdd(sender, glimit)
              break
       case 'kuismath':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              ini_buffer = await getBuffer(ini_image)
              zaki.sendMessage(from, ini_buffer, image, { quoted: zak, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {
              kuismath[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
})
              await sleep(50000)
              if (kuismath.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}kuismath`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
              
              delete kuismath[sender.split('@')[0]]
              fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
}
              gameAdd(sender, glimit)
              break
       case 'tebakgambar':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
              get_result = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
              ini_image = get_result.soal
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              buff = await getBuffer(ini_image)
              
            zaki.sendMessage(from, buff, image, { quoted: zak, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
              tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
})
              await sleep(30000)
              if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
                           titid = "*Jawaban*: " + jawaban
                   sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
            buttonId: `${prefix}tebakgambar`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },]);
              
              delete tebakgambar[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
}
              gameAdd(sender, glimit)
              break
       case 'siapaaku':

       case 'tebaksiapaaku':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              zaki.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
              await sleep(30000)
              if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaksiapaaku[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
              gameAdd(sender, glimit)
              break
       case 'tebakkata':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/kata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              zaki.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
})
              await sleep(30000)
              if (tebakata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakata[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
}
              gameAdd(sender, glimit)
              break
       case 'tebaklirik':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              zaki.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
})
              await sleep(30000)
              if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebaklirik[sender.split('@')[0]]
              fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
}
              gameAdd(sender, glimit)
              break
      case 'tebakjenaka':

      if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              zaki.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              zaki.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break
       case 'tebakbendera':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.name
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.flag
              zaki.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
})
              await sleep(30000)
              if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakbendera[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
}
              gameAdd(sender, glimit)
              break
       case 'susunkata':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              pertanyaan = get_result.pertanyaan
              zaki.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {
              susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
})
              await sleep(30000)
              if (susunkata.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete susunkata[sender.split('@')[0]]
              fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
}
              gameAdd(sender, glimit)
              break
       case 'asahotak':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              zaki.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
       case 'caklontong':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${setting.lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              zaki.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
       case 'slot':

              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
       case 'suit':
 //nyolong dari zenz
if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//------------------< Sewa >-------------------
       case 'sewa': case 'addsewa':

              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Success`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
              break
       case 'sewalist':
 
       case 'listsewa':

              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
              reply(txtnyee)
              break
       case 'sewacheck':

       case 'ceksewa':
 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
              reply(premiumnya)
              break
//------------------< Premium >-------------------
       case 'premium': case 'addpremium': case 'premiumadd':
 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (zak.message.extendedTextMessage != undefined) {
              mentioned = zak.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (zak.message.extendedTextMessage != undefined) {
              mentioned = zak.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':

       case 'cekpremium':
 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':

       case 'listpremium':
          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
              case 'payment':

   list = await zaki.prepareMessageFromContent(from, {
    "listMessage": {
      "head": " wa.me/6285894887349", 
      "title": "WIBU ELITE",
      "link": " wa.me/6285894887349", 
      "description": "𝘿𝙖𝙣𝙖 - 𝙂𝙤𝙥𝙖𝙮 - 𝙊𝙫𝙤\n    085894887349",
      "buttonText": "wa.me/6285894887349",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "4279409322097634"
              },
              {
                "productId": "4442032655916720"
              },
{
                "productId": "4849920275036112"
              },
              {
                "productId": "4729814033735411"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4279409322097634",
          "jpegThumbnail": fakeimage
        },
        "businessOwnerJid": sender
      },
      "footerText": "ʙᴀɢɪ ʟᴏʟɪ ʙᴀɴɢ"
    }
  }, {quoted: ftroli2})
  zaki.relayWAMessage(list, {waitForAck: true})
  break
       case 'belipremium':

       case 'buypremium':

       case 'sewabot':

              gopeynya = 'https://i.ibb.co/n3VFS5r/982edbab6b4d.jpg'
            buff = await getBuffer(gopeynya)
            teksnya = `
 *✨ PRICE LIST ✨*
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ SEWA 15K/BLN
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ SEWA + PREMIUM 20K
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ PREMIUM 10K
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ PERMANEN? LU TOLOL?

*✨  MINAT? PM ✨*
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ wa.me/6285894887349
•ᚸ⃝⃘⃟۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪ࣤ © uuhDayOne
`
  buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: `👤 OWNER`},type:1}, { buttonId: `${prefix}menu`, buttonText: { displayText: '☰ MENU' }, type: 1 }]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
      break
//------------------< Sticker Cmd >-------------------
       case 'addcmd':
 
       case 'setcmd':

              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = zak.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':

              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = zak.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':

              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Downloader/Search/Anime >-------------------
       
       case 'igdl':
 
       case 'instagram':

       case 'instagramdownload':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, zak) })
             .catch((err) => { reply(String(err)) })
              break
       case 'scplay':
 
       case 'soundcloud':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, zak) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':

       case 'gimage':

       case 'googleimage':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: zak, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
      case 'ytmp3':

      if (isMuted) return    

            if (!isPremium) return reply(mess.only.premium)
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Title : ${res[0].judul}\`\`\`
\`\`\`◧ Ext : MP3\`\`\`
\`\`\`◧ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: zak, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'spotifysearch':

     case 'searchspotify':

       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: ftroli2})
       if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
     case 'spotify':
     case 'spotifydl':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

          if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    
          url = args[0]
                    
          get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${setting.lolkey}&url=${url}`)
                    
          get_result = get_result.result
                    
          ini_txt = `Title : ${get_result.title}\n`
                    
          ini_txt += `Artists : ${get_result.artists}\n`
                   
          ini_txt += `Duration : ${get_result.duration}\n`
                    
          ini_txt += `Popularity : ${get_result.popularity}\n\n`
                       
 
         ini_txt += `_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_\n`
                  
          thumbnail = await getBuffer(get_result.thumbnail)
                 
          await zaki.sendMessage(from, thumbnail, image, { quoted: ftroli2, caption: ini_txt })
                   
          get_audio = await getBuffer(get_result.link)
                    
          await zaki.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: ftroli2 })
          break
     case 'chord':

   if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

         if (args.length == 0) return reply(`Example: ${prefix + command} Kemarin`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Chord : \n${get_result.chord}`
                    reply(ini_txt)
                    break
      case 'heroml':

      if (isMuted) return    

            if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail_role}\n`
                    ini_txt += `Specialty : ${get_result.detail_specialty}\n`
                    ini_txt += `Laning : ${get_result.detail_laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail_release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr_movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr_physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr_magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr_physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr_magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr_basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr_hp}\n`
                    ini_txt += `Mana : ${get_result.attr_mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr_mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    await zaki.sendMessage(from, ini_icon, image, { quoted: ftroli2, caption: ini_txt })
                    break              
     case 'mlstalk':

     if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${setting.lolkey}`)
                    reply(get_result.result)
                    break
   case 'qrreader':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

     if ((isMedia && !zak.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zak
                        const filePath = await zaki.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${setting.lolkey}`, {...options })
                        fs.unlinkSync(filePath)
                        reply("Result: " + get_result.result)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
     case 'wikipedia':

   if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
  case 'translate':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    
 
  if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)

                      kode_negara = args[0]
          
                                args.shift()
                   
                                 ini_txt = args.join(" ")
            
                                         get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${setting.lolkey}&text=${ini_txt}`)
         
                                                    get_result = get_result.result
       
                                                                 init_txt = `From : ${get_result.from}\n`
             
                                                                        init_txt += `To : ${get_result.to}\n`
                  
                                                                          init_txt += `Original : ${get_result.original}\n`
                   
                                                                           init_txt += `Translated : ${get_result.translated}\n`
                    
                                                                           init_txt += `Pronunciation : ${get_result.pronunciation}\n`
     
                                                                                          reply(init_txt)
               
                                                                                               break            
case 'newsinfo':

     
     if (isMuted) return    

 
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${setting.lolkey}`)
      
                             get_result = get_result.result
      
                                           ini_txt = "Result :\n"
        
                                                       for (var x of get_result) {
      
                                                                         ini_txt += `Title : ${x.title}\n`
       
                                                                                          ini_txt += `Author : ${x.author}\n`
        
                                                                                                          ini_txt += `Source : ${x.source.name}\n`
       
                                                                                                                           ini_txt += `Url : ${x.url}\n`
           
                                                                                                                                        ini_txt += `Published : ${x.publishedAt}\n`
     
                                                                                                                                                           ini_txt += `Description : ${x.description}\n\n`
     
                                                                                                                                                                          }
           
                                                                                                                                                                                   reply(ini_txt)
       
                                                                                                                                                                                                break
  case 'cnnindonesia':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                   get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
        
          case 'cnnnasional':

      if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                
          case 'cnninternasional':

     if (isMuted) return    

                     get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
               
           case 'infogempa':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                   get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    await zaki.sendMessage(from, get_buffer, image, { quoted: ftroli2, caption: ini_txt })
                    break
               
            case 'lirik':

      if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${setting.lolkey}&query=${query}`)
                    reply(get_result.result)
                    break
              
              case 'cuaca':

      if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await zaki.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftroli2 })
                    reply(ini_txt)
                    break
             
                 case 'covidindo':

     if (isMuted) return    

                     get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                
                 case 'kodepos':
     if (isMuted) return    

 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${setting.lolkey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
             
                    case 'jadwalbola':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                   get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
               
                     case 'indbeasiswa':

      if (isMuted) return    

                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
               
                      case 'hoax':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                  get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${setting.lolkey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                 case 'ocr':

            if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

       if ((isMedia && !zak.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        var filePath = await zaki.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=${setting.lolkey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        reply(`Result : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
 case 'wattpadsearch':

                if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

   if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
          
                    case 'ytmp4':

     if (isMuted) return    

            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
            teks = args.join(' ')
            reply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Title : ${res[0].judul}\`\`\`
\`\`\`◧ Ext : MP4\`\`\`
\`\`\`◧ Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: zak, mimetype: 'video/mp4', filename: res[0].output})
})
            break
     case 'ytmp4hd':

     case 'ythd':

     if (isMuted) return    

            if (!isPremium) return reply(mess.only.premium)
            if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Title : ${title}\`\`\`
\`\`\`◧ Kualitas* : 720p\`\`\`
\`\`\`◧ Size* : ${filesizeF}\`\`\`
\`\`\`◧ Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Title : ${title}\`\`\`
\`\`\`◧ Kualitas : 720p\`\`\`
\`\`\`◧ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break
                              case 'gimage2':

      if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await zaki.sendMessage(from, ini_buffer, image)
                    }
                    break
              
                                case 'konachan':

    if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${setting.lolkey}&query=${query}`)
                    await zaki.sendMessage(from, ini_buffer, image, { quoted: ftroli2 })
                    break
                
                                case 'wallpapersearch':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                  if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${setting.lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await zaki.sendMessage(from, ini_buffer, image, { quoted: ftroli2 })
                    break
              
                                  case 'wallpapersearch2':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                  if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${setting.lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await zaki.sendMessage(from, ini_buffer, image, { quoted: ftroli2 })
                    break
 case 'stickerwa':

  if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                 if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${setting.lolkey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${setting.lolkey}&img=${x}`)
                        await zaki.sendMessage(from, ini_buffer, sticker)
                    }
                    break
 case 'artinama':

   if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${setting.lolkey}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
 case 'asupan2':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                   get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${setting.lolkey}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await zaki.sendMessage(from, ini_buffer, video, { quoted: ftroli2, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
 case 'stickernobg':

     if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if ((isMedia && !zak.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zak
                        filePath = await zaki.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.png')
                        file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('error', function(err) {
                                    console.log(err)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
                                    zaki.sendMessage(from, fs.readFileSync(file_name2), sticker, { quoted: ftroli2 })
                                    fs.unlinkSync(file_name2)
                                })
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':
min'(320,ih)':
force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
case 'smoji2':

       if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

            if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${setting.lolkey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${setting.lolkey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await zaki.sendMessage(from, ini_buffer, sticker, { quoted: ftroli2 })
                    break
case 'faketoko':

  if (!isOwner) return reply(mess.only.owner)
                   await faketoko(teks = "𝙸 𝙰𝚖 𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳", url_image = "https://telegra.ph/file/43bd085400613281aa450.jpg", title = " 𝙾𝙽𝙸𝙲𝙷𝙰𝙽 𝙺𝙾𝙽𝚃𝙾𝙻", code = "IDR", price = 281005)
                    break                    
                    case 'ktpmaker':

    if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${setting.lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await zaki.sendMessage(from, ini_buffer, image, { quoted: ftroli2 })
                    break
                 case '1977':

                case 'aden':

                case 'brannan':

                case 'brooklyn':

                case 'clarendon':

                case 'gingham':

                case 'hudson':

                case 'inkwell':

                case 'earlybird':

                case 'kelvin':

                case 'lark':

                case 'lofi':

                case 'maven':

                case 'mayfair':

                case 'moon':

                case 'nashville':

                case 'perpetua':

                case 'reyes':

                case 'rise':

                case 'slumber':

                case 'stinson':

                case 'toaster':

                case 'valencia':

                case 'walden':

                case 'willow':

                case 'xpro2':

       if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

            if ((isMedia && !zak.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zak
                        filePath = await zaki.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
                        request({
                            url: `https://api.lolhuman.xyz/api/filter/${command}?apikey=${setting.lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            zaki.sendMessage(from, ini_buff, image, { quoted: ftroli2 }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'pencil':

                    if ((isMedia && !zak.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zak
                        filePath = await zaki.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
                        request({
                            url: `https://api.lolhuman.xyz/api/editor/pencil?apikey=${setting.lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            await zaki.sendMessage(from, ini_buff, image, { quoted: ftroli2 }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                                    
               case 'google':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f307ca1dc9824ae89caa976435c03178&url=http://www.google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query':
 q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
} 
               zaki.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : zak})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if (!isPremium) return reply(mess.only.premium)
               if (args.length < 1) return reply('Link Nya Mana? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Nama : ${res[0].nama}\`\`\`
\`\`\`◧ Ukuran : ${res[0].size}\`\`\`
\`\`\`◧ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: freply})
             break
       
       case 'tt2':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return
reply(mess.error.Iv)
reply(mess.wait)
anu = await TiktokDownloader(`${q}`)
zakyy ='hi.mp4'
kntl = 'hasil.mp4'
fs.writeFileSync(input,await getBuffer(data.result.watermark))
exec(`ffmpeg -i ${zakyy} -b:a 192K -vn  ${kntl}`,(err,res)=> {
if (err) return reply(`${err}`)
zaki.sendMessage(from,{url:'./'+zakyy},audio,{mimetype:'audio/mpeg'})
})
       case 'tiktok':
 
       case 'ttdl':

       case 'tiktokdl':

       case 'tiktoknowm':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await zaki.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
      case 'tt1':
 
if (isMuted) return    

             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

  case 'xnxxsearch':

  if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                case 'xnxxdl':

         if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await zaki.sendMessage(from, thumbnail, image, { quoted: freply , caption: ini_txt })
                    break

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://zaki-chan02.github.io`)
              
      case 'ttaudio':
 
      case 'tiktokmusic':
 
      case 'tiktokaudio':

      if (isMuted) return    

              reply(mess.wait)
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${ini_link}`)
             zaki.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: zak })
             break
      case 'fb':

      case 'facebook':

      if (isMuted) return    

             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
      case 'twitter':

      if (isMuted) return    

             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':

      if (isMuted) return    

             reply(mess.wait)
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb':

      if (isMuted) return    

             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             reply(mess.wait)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://api.iamvinz.com/api/ssweb?apikey=iamvinz&url=${ini_link}`)
             await zaki.sendMessage(from, ini_buffer, image, { quoted: zak })
             break
        case 'ssweb2':

           if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

        if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${setting.lolkey}&url=${ini_link}`)
                    await zaki.sendMessage(from, ini_buffer, image, { quoted: ftroli2 })
                    break
                case 'shortlink':

          if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

         if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${setting.lolkey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case 'spamsms':

           if (!isOwner) return reply(mess.only.owner)   
              if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${setting.lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${setting.lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${setting.lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${setting.lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${setting.lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${setting.lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${setting.lolkey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${setting.lolkey}&nomor=${nomor}`)
                    reply("Success")
                    break     
       case 'nhentaipdf':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

             if (!isPremium) return reply(mess.only.premium)
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `*Doujinshi Downloader*
             
📜 Title Romaji : ${get_result.title_romaji}
📃 Title Native : ${get_result.title_native}
🐤 Character : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             zaki.sendMessage(from, ini_image, image, { caption: teks, quoted: zak, thumbnail: Buffer.alloc(0) })
             reply(mess.wait)
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${setting.lolkey}`)
             pdf = await getBuffer(anu.result)
             zaki.sendMessage(from, pdf, document, { quoted: zak, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
       case 'nhentai':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (!isPremium) return reply(mess.only.premium)
              if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
              reply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
              ini_txt += `Title Native : ${get_result.title_native}\n`
              ini_txt += `Read Online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Parodies : ${get_info.parodies}\n`
              ini_txt += `Character : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artist : ${get_info.artists}\n`
              ini_txt += `Group : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categories : ${get_info.categories}\n`
              ini_txt += `Pages : ${get_info.pages}\n`
              ini_txt += `Uploaded : ${get_info.uploaded}\n`
              reply(ini_txt)
              break
       case 'manga':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Title : ${get_result.title.romaji}\n`
              ini_txt += `English : ${get_result.title.english}\n`
              ini_txt += `Native : ${get_result.title.native}\n`
              ini_txt += `Format : ${get_result.format}\n`
              ini_txt += `Chapters : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Source : ${get_result.source}\n`
              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Score : ${get_result.averageScore}%\n`
              ini_txt += `Characters : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescription : ${get_result.description}`
              buff = await getBuffer(get_result.coverImage.large)
              buttons = [{buttonId: `!menu`,buttonText:{displayText: `Back To Menu`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
         break
       case 'doujindesu':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

             if (!q) return reply(mess.wrongFormat)
             reply(mess.wait)
             try {
             doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             zaki.sendMessage(from, buffer, image, {caption: xixixai, quoted: freply})
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
      case 'anime':

      if (isMuted) return    

             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Title : ${get_result.title.romaji}\n`
             ini_txt += `English : ${get_result.title.english}\n`
             ini_txt += `Native : ${get_result.title.native}\n`
             ini_txt += `Format : ${get_result.format}\n`
             ini_txt += `Episodes : ${get_result.episodes}\n`
             ini_txt += `Duration : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Season : ${get_result.season}\n`
             ini_txt += `Season Year : ${get_result.seasonYear}\n`
             ini_txt += `Source : ${get_result.source}\n`
             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Score : ${get_result.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             await zaki.sendMessage(from, thumbnail, image, { quoted: zak, caption: ini_txt })
             break
      case 'kusonime':

      if (isMuted) return    

             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             await zaki.sendMessage(from, ini_buffer, image, { quoted: zak, caption: ini_txt })
             break
       case 'otakudesu':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
       case 'nekopoi':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${setting.lolkey}&url=${ini_url}`)
              get_result = get_result.result
              ini_txt = `\`\`\`◧ Title : ${get_result.anime}\`\`\`\n`
              ini_txt += `\`\`\`◧ Porducers : ${get_result.producers}\`\`\`\n`
              ini_txt += `\`\`\`◧ Duration : ${get_result.duration}\`\`\`\n`
              ini_txt += `\`\`\`◧ Size : ${get_result.size}\`\`\`\n`
              ini_txt += `\`\`\`◧ Sinopsis : ${get_result.sinopsis}\`\`\`\n`
              link = get_result.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              buff = await getBuffer(get_result.thumb)
              
               buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
         break
       case 'nekopoisearch':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = ""
              for (var x of get_result) {
              ini_txt += `\`\`\`◧ Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`◧ Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`◧ Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              reply(ini_txt)
              break
       case 'art':

       case 'bts':

       case 'exo':

       case 'elf':

      case 'neko':

       case 'kanna':

       case 'sagiri':

       case 'megumin':

       case 'wallnime':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
              break
       
       case 'hentai':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
              break
       case 'nakanoitsuki':

       case 'nakanozaki':

       case 'nakanomiku':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              reply(mess.wait)
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${command}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: zak, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})
              break
       case 'storyanime':

       if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${setting.lolkey}`)
              buffer = await getBuffer(anu.result)
              zaki.sendMessage(from, buffer, video, { quoted: zak })
              break
        case 'otakuongoing':
     
if (isMuted) return    
         
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Make Iya Donate Kagak🔗', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    break
            case 'waifu':

 if (isMuted) return    
           
v = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
buff = sendMediaURL(from, v.url, )
  buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Make Iya Donate Kagak🔗', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
    
break
       
       case 'loli':

       case 'husbu':

       case 'milf':

       case 'cosplay':

       case 'wallml':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://zaki-chan02.github.io`)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await zaki.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break

					case 'ytdl':
					case 'play':

					if (isMuted) return    

			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://zaki-chan02.github.io`)
              if (!q) return reply('Linknya?')
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}mmq2 ${res.all[0].url}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}mmq1 ${res.all[0].url}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await zaki.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{})

zaki.relayWAMessage(prep)
break              
              
   case 'playy':
case 'lagu':

if (isMuted) return    

if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendFileFromUrl(res.all[0].image, image, {quoted: zak, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: zak, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botName}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: zak, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: zak, mimetype: 'audio/mp3', filename: res[0].output})
}
break

case 'mmq1':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${setting.loljey}&url=${res.all[0].url}`)
                    get_result = get_result.result
                    caption = `❖ Title    : *${result.title}*\n`
                    caption += `❖ Size     : *${result.size}*`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await lolhuman.sendMessage(from, ini_buffer, image, { quoted: lol, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await lolhuman.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: lol })
                    break
                case 'mmq2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${setting.lolkey}&url=${res.all[0].url}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await lolhuman.sendMessage(from, ini_buffer, image, { quoted: lol, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await lolhuman.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: lol })
                    break

case 'pntol2':
   
if (isMuted) return    

				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${setting.lolkey}&url=${res.all[0].url}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				zaki.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted: ftroli2, caption: 'Nih Gan'})
					break  
					

					
          case 'lirik':

   if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${setting.lolkey}&query=${query}`)
                    reply(get_result.result)
                    
               break
         case 'pinterest':

  if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

		   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                 reply (mess.wait)
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${setting.lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    buff = await getBuffer(ini_url)
                    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
        break
        case 'shopee':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://zeks.me/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE* 
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`◧ Nama : ${get_data[i].name}\`\`\`
\`\`\`◧ Harga : ${get_data[i].harga}\`\`\`
\`\`\`◧ Terjual : ${get_data[i].terjual}\`\`\`
\`\`\`◧ Lokasi : ${get_data[i].location}\`\`\`
\`\`\`◧ Deskripsi*: ${get_data[i].desc}\`\`\`
\`\`\`◧ Stok : ${get_data[i].stock}\`\`\`
\`\`\`◧ Informasi : ${get_data[i].information}\`\`\`
\`\`\`◧ Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              zaki.sendMessage(from, ini_buffer, image, { quoted: zak, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://zeks.me/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`◧ Title : ${get_result[i].title}\`\`\`
\`\`\`◧ Harga : ${get_result[i].price}\`\`\`
\`\`\`◧ Rate : ${get_result[i].rating}\`\`\`
\`\`\`◧ Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              zaki.sendMessage(from, ini_buffer, image, { quoted: zak, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break
       case 'yts':

       case 'ytsearch':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`◧ Title : ${i.title}\`\`\`
\`\`\`◧ Views : ${i.views}\`\`\`
\`\`\`◧ Upload : ${i.ago}\`\`\`
\`\`\`◧ Durasi : ${i.timestamp}\`\`\`
\`\`\`◧ Channel : ${i.author.name}\`\`\`
\`\`\`◧ Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: zak, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if ((isMedia && !zak.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak
               owgi = await zaki.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':

       case 'img2url':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak
               var media = await  zaki.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               zaki.sendMessage(from, ibb, image, { quoted: zak, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan':
 // shansekai        
if (isMuted) return    
        
               if (!isPremium) return reply(mess.only.premium)
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Wangy Wangy >\\<.')
               console.log('Success sending video!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
        case 'nulis':

        case 'tulis':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               zaki.sendMessage(from, buff, image, {quoted: zak, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//------------------< Level >-------------------
      case 'level':
 
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await zaki.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/rank?apikey=${setting.lolkey}&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)
              teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`
              zaki.sendMessage(from, buffer, image, { caption: teks, quoted: freply})
              break
       case 'leaderboard':
 //Cek Leaderboard
       case 'leaderboards':

              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Warrior III'
              if (resp[i].level <= 5) {
              roles = 'Warrior II'
              } else if (resp[i].level <= 10) {
              roles = 'Warrior I'
              } else if (resp[i].level <= 15) {
              roles = 'Elite III'
              } else if (resp[i].level <= 20) {
              roles = 'Elite II'
              } else if (resp[i].level <= 25) {
              roles = 'Elite I'
              } else if (resp[i].level <= 30) {
              roles = 'Master III'
              } else if (resp[i].level <= 35) {
              roles = 'Master II'
              } else if (resp[i].level <= 40) {
              roles = 'Master I'
              } else if (resp[i].level <= 45) {
              roles = 'GrandMaster III'
              } else if (resp[i].level <= 50) {
              roles = 'GrandMaster II'
              } else if (resp[i].level <= 55) {
              roles = 'GrandMaster I'
              } else if (resp[i].level <= 60) {
              roles = 'Epic III'
              } else if (resp[i].level <= 65) {
              roles = 'Epic II'
              } else if (resp[i].level <= 70) {
              roles = 'Epic I'
              } else if (resp[i].level <= 75) {
              roles = 'Legend III'
              } else if (resp[i].level <= 80) {
              roles = 'Legend II'
              } else if (resp[i].level <= 85) {
              roles = 'Legend I'
              } else if (resp[i].level <= 90) {
              roles = 'Mythic'
              } else if (resp[i].level <= 95) {
              roles = 'Mythical Glory'
              } else if (resp[i].level >= 100) {
              roles = 'Immortal'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Perlu setidaknya 10 user yang memiliki level di database!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':

      case 'githubstalk':

      if (isMuted) return    

              if (args.length == 0) return reply(`Example: ${prefix + command} zaki-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Username : ${ini_result.name}\`\`\`
\`\`\`◧ Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`◧ Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`◧ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`◧ Following : ${ini_result.following}\`\`\`
\`\`\`◧ Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`◧ Link : ${ini_result.url}\`\`\`
`
             zaki.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':

      case 'igstalk':

             if (args.length == 0) return reply(`Example: ${prefix + command} zaki.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Username : ${ini_result.username}\`\`\`
\`\`\`◧ Nama : ${ini_result.fullname}\`\`\`
\`\`\`◧ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`◧ Mengikuti : ${ini_result.following}\`\`\`
\`\`\`◧ Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`◧ Link : https://instagram.com/${ini_result.username}\`\`\`
`
             zaki.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':

      case 'tiktokstalk':

      if (isMuted) return    

             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`◧ Username : ${get_result.username}\`\`\`
\`\`\`◧ Nama : ${get_result.nickname}\`\`\`
\`\`\`◧ Pengikut : ${get_result.followers}\`\`\`
\`\`\`◧ Mengikuti : ${get_result.followings}\`\`\`
\`\`\`◧ Likes : ${get_result.likes}\`\`\`
\`\`\`◧ Video : ${get_result.video}\`\`\`
\`\`\`◧ Deskripsi : ${get_result.bio}\`\`\`
`
              zaki.sendMessage(from, pp_tt, image, { quoted: zak, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://zeks.me/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              zaki.sendMessage(from, ini_buffer, image, { quoted: zak, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu':
 // by CHIKAA CHANTEKKXXZZ
if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':

      if (isMuted) return    

              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':

       case 'gawrgura':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':

       case 'stickeranime':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker':
 
       case 'telestiker':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              zaki.sendMessage(from, ini_buffer, sticker, {})
}
              break
       case 'semoji':

       case 'emoji':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${setting.lolkey}`)
              await zaki.sendMessage(from, ini_buffer, sticker, { quoted: zak })
              break
case 'ttp':

if (isMuted) return    

if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
       case 'attp':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (args.length == 0) return reply(`Example: ${prefix + command} zaki`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              zaki.sendMessage(from, buffer, sticker, { quoted: zak })
              break
       case 'ttg':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              if (!q) return await reply(mess.wrongFormat)
              reply(mess.wait)
              sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`)
             .then(() => console.log('Success creating GIF!'))
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
       case 'loliv':

       case 'lolivid':

       case 'lolivideo':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
       case 'gifstiker':

				case 's':

			case 'stickergif':
  
				case 'sticker':

				  case 'stiker':

				if (isMuted) return    

					     if ((isMedia && !zak.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zak
            const media = await zaki.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                zaki.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':
min'(320,ih)':
force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && zak.message.videoMessage.seconds < 11 || isQuotedVideo && zak.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zak
                const media = await zaki.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            zaki.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':
min'(320,ih)':
force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
       case 'take':
       case 'colong':
        
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await zaki.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `Punya ZakiCans`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ` | 6285894887349`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, zaki, zak, from)
              break
       case 'delwm':
            
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await zaki.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, zaki, zak, from)
              break
       case 'stikerwm':

       case 'stickerwm':

       case 'swm':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !zak.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak
              media = await zaki.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              zaki.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: zak })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              zaki.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: zak })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':
min'(320,ih)':
force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && zak.message.videoMessage.seconds < 11 || isQuotedVideo && zak.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak
              const media = await zaki.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              zaki.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: zak })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              zaki.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: zak })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':
min'(320,ih)':
force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
      case 'toimg':

      if (isMuted) return    

              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await zaki.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              zaki.sendMessage(from, buffer, image, {quoted: zak, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
       case 'smeme2':
       case 'smeme':
      if (isMuted) return    

        if (zak.message.extendedTextMessage != undefined || zak.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo
         reply('Loading.... ')
        owgi = await zaki.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
       break
       case 'smeme':
 
if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !zak.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak  
owgi = await  zaki.downloadAndSaveMediaMessage(ger)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${url}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

       case 'memeimg':

       case 'memegen':
                
if (isMuted) return    
    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !zak.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak 
              owgi = await zaki.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
        case 'togif':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if ((isMedia && !zak.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak
               mediaaa = await zaki.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               zaki.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: zak, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if ((isMedia && !zak.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await zaki.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               zaki.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: zak, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await zaki.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp4')
               exec(`ffmpeg -i ${media} -b:a 192K -vn ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               zaki.sendMessage(from, buffer453, video, { mimetype: 'audio/mp4', quoted: zak })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break
//------------------< Ingfo Bot >-------------------
      case 'runtime':

              textImg(`${runtime(process.uptime())}`)
              break
       case 'donate':
 
       case 'donasi':

              textImg(setting.txtDonasi)
              break
       case 'sourcecode':
 
       case 'sc':
 
       case 'src':

              textImg(`*Bot ini menggunakan sc : https://github.com/KiZakiXD/*`)
              break
      case 'ping':

      case 'speed':

              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec ⚡`)
              break
      case 'botstat':

              groups = zaki.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = zaki.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'Lagi Dicas' : 'Ga Dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await zaki.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`◧  Group Chats : ${groups.length}\`\`\`
\`\`\`◧  Private Chats : ${privat.length}\`\`\`
\`\`\`◧  Total Chats : ${totalChat.length}\`\`\`
\`\`\`◧  Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`◧  Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`◧ Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`◧ Ram Usage : ${ram2}\`\`\`
\`\`\`◧ Platform : ${os.platform()}\`\`\`
\`\`\`◧ Hostname : ${os.hostname()}\`\`\`
\`\`\`◧ Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`◧ Wa Version: ${zaki.user.phone.wa_version}\`\`\`
\`\`\`◧ Os Version: ${zaki.user.phone.os_version}\`\`\`
\`\`\`◧ Device Manufacturer: ${zaki.user.phone.device_manufacturer}\`\`\`
\`\`\`◧ Device Model: ${zaki.user.phone.device_model}\`\`\`
\`\`\`◧ Os Build Number: ${zaki.user.phone.os_build_number}\`\`\``
             reply(teks)
             break  
//------------------< Owner >-------------------
      case 'addupdate':

             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Example: ${command} update fitur`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`Update fitur berhasil ditambahkan ke database!`)
             break
      case 'update':
             if (!isOwner) return reply(mess.only.owner)
             let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':

             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('Hang tight, it\'s time to reset')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('Oke Desu ~')
             break
      case 'exif':

             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sukses')
             break	
      case 'join':
 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = zaki.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
      case 'eval':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      case 'getquoted':
      if (!isOwner) return  reply(mess.only.owner)
             reply(JSON.stringify(zak.message.extendedTextMessage.contextInfo, null, 3))
             break
case 'bc':

      case 'broadcast':

             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await zaki.chats.all()
             if (isMedia && !zak.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zak 
             bc = await zaki.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	zaki.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `✗✗✗ © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎`, buttons: [{buttonId: `${prefix}ytowner`,buttonText:{displayText: '🔗 SUBSCRIBE'},type:1},{buttonId: `${prefix}menu`,buttonText:{displayText:'☰ MENU'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: image, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             zaki.sendMessage(_.jid, { contentText: `${textt}`, footerText: `*_✗✗✗ © 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎_*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '☰ MENU'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText:'🔪 MALAK'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('./media/Zaki.jpg'), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
      case 'clearall':

             if (!isOwner) return  reply(mess.only.owner)
             anu = await zaki.chats.all()
             zaki.setMaxListeners(25)
             for (let _ of anu) {
             zaki.deleteChat(_.jid)
}
             reply('Sukses delete all chat :)')
             break
      case 'term':

             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':

             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':

             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':

             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = zaki.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             zaki.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
      case 'kick':

      if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
           if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':

      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (zak.message.extendedTextMessage === null || zak.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             zaki.groupAdd(from, [entah])
             } else {
             entah = zak.message.extendedTextMessage.contextInfo.participant
             zaki.groupAdd(from, [entah])
}
             break
      case 'promote':

      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (zak.message.extendedTextMessage === null || zak.message.extendedTextMessage === undefined) return;
             if (zak.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = zak.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             zaki.groupMakeAdmin(from, mems_ids)
             } else {
             zaki.groupMakeAdmin(from, entah)
}
             } else {
             entah = zak.message.extendedTextMessage.contextInfo.participant
             zaki.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':

      if (!isGroupAdmins) return reply(mess.only.admin)
      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (zak.message.extendedTextMessage === null || zak.message.extendedTextMessage === undefined) return;
             if (zak.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = zak.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             zaki.groupDemoteAdmin(from, mems_ids)
             } else {
             zaki.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = zak.message.extendedTextMessage.contextInfo.participant
             zaki.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgroupname':

       if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              zaki.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':

       if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              zaki.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgroup':

       if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zak).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zak
              let media = await zaki.downloadMediaMessage(encmedia)
              zaki.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':

       case 'profile':

              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              zaki.updatePresence(from, Presence.composing)
              try {
              profil = await zaki.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await zaki.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = zaki.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              zaki.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
       case 'afk':
 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
       case 'infogrup':

       case 'infogrouup':

       case 'grupinfo':

       case 'groupinfo':

              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await zaki.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              zaki.sendMessage(from, await getBuffer(pic), image, {quoted: zak, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':

       if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall':
 // Anti Banned
       if (!isGroupAdmins) return reply(mess.only.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'mokad':

       if (!isOwner) return 
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              zaki.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':

       case 'listonline':

       case 'here':
                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(zaki.chats.get(ido).presences), zaki.user.jid]
             zaki.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: zak, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':

      if (!isOwner) return reply(`Kamu bukan owner say:v`)
             try {
             quotedText = zak.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':

             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await zaki.messageInfo(from, zak.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
//------------------< Fun >-------------------
       case 'wangy':

              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':

              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':

              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':

              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':

              reply(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':

              Toxic().then(toxic => {
              reply (toxic)
})
              break
        case 'citacita':

              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              zaki.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: freply})
              break
       case 'apakah':

              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              zaki.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: zak })
              break
       case 'rate':

       case 'nilai':

              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              zaki.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: zak })
              break
      case 'bay':

      reply('sayonara kak')
      break
      case 'selamatdatang':

      reply('welcome kak')
       case 'gantengcek':

       case 'cekganteng':

              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              zaki.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: zak })
              break
       case 'cantikcek':

       case 'cekcantik':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              zaki.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: zak })
              break
       case 'cekwatak':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              var namao = pushname
              var prfx = await zaki.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colzak','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨ ]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              zaki.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: zak })
              break
       case 'bisakah':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              zaki.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: zak })
              break
       case 'kapankah':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              zaki.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: zak })
              break
       case 'truth':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              zaki.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: zak })
              break
       case 'dare':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await zaki.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Make Iya Donate Kagak🔗', imageMessage: imageMsg,
              contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
              prep = await zaki.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              zaki.relayWAMessage(prep)
               break		
       case 'jadian':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':

if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
        case 'getpp':

 if (isBanned) return reply('Maaf kamu sudah terbenned!')
       if (isMuted) return    

               if (zak.message.extendedTextMessage === null || zak.message.extendedTextMessage === undefined) {
               linkpp = await zaki.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               zaki.sendMessage(from, buffer, image, {caption: "Nih", quoted: zak })
               } else if (zak.message.extendedTextMessage.contextInfo.mentionedJid === null || zak.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = zak.message.extendedTextMessage.contextInfo.participant
               linkpp = await zaki.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               zaki.sendMessage(from, buffer, image, { quoted: zak, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (zak.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = zak.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await zaki.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               zaki.sendMessage(from, buffer, image, { quoted: zak, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':

        case 'del':

        case 'delete':
 // MR.CYSER
               try {
               if (zak.message.extendedTextMessage === undefined || zak.message.extendedTextMessage === null) return reply('Reply chat bot')
               zaki.deleteMessage(from, {id: zak.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
        case 'tes':

               reply('𝙰𝚌𝚝𝚒𝚟𝚎')
               break
        case 'info':
  // Jangan Di Ubah Plise
               urlinfo = 'https://telegra.ph/file/00a8f41e5a453ebc942b2.jpg'
               thankslort = `*╭─❒ 「 INFORMATION 」*
*│*
*├* *RUNTIME* : ${runtime(process.uptime())}
*├* *NAME*  : 𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳
*├* *VERSION* : 2.0.0
*├* *GITHUB* : https://github.com/kizakixd
*│*
*└───────────────────────────❒*`
             zaki.sendMessage(from, await getBuffer(urlinfo), image, {quoted: zak, caption: thankslort })
             break
case 'media':

if (isBan) return reply(mess.ban)
if (!q) return reply('Urlnya?')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':

      case 'fetch':
 //ambil dari nuru
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg':
 
case 'caripesan':
  //by ANU TEAM
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Maks 30!')
             reply(mess.wait)
             cok = await zaki.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             zaki.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
             break
       case 'lolhuman':

       case 'checkapikey':

              if (args.length < 1) return reply(`Ketik ${prefix}jangan [Apikeynya]`) 
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://api.lolhuman.xyz`
              zaki.sendMessage(from, teks, text, {quoted: freply})
              break
       case 'bugreport':

              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              zaki.sendMessage('6285894887349@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
       case 'readall':

              totalchat.map( async ({ jid }) => {
              await zaki.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//------------------< Enable/Disable >-------------------
       case 'leveling':

              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('Fitur leveling berhasil dimatikan.')
              } else {
              reply('Pilih enable atau disable!')
}
              break
       case 'antilink':

              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins && !isGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (args[0] === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo ${pushname} klik button atau Gunakan ${prefix + command }antilink enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!antilink enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!antilin disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `© 2022 | 𝚞𝚞𝚑𝙳𝚊𝚢𝙾𝚗𝚎` ,
buttons: buttonss,
headerType: 1
}
zaki.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '_𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳_',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: freply,sendEphemeral: true 
			})
			}
          break
       case 'welcome':

               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':

               if (!zak.key.fromMe && !isOwner) return 
               if (args.length < 1) return reply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return reply(`udah di mute`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *MUTE ON* *:...*\n\n_*Bot Sukses Di Mute In ${groupName}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\n_*Bot Sukses Di Mute In ${groupName}*_`)
               } else {
               reply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':


        case 'groupsetting':


               if (!isGroup) return reply(mess.only.group)

               if (!isGroupAdmins) return reply(mess.only.admin)

               list = []

               com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]

               comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]

               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]

               suruh = [`Enable`, `Disable`]

               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]

               startnum = 0; let startnu = 0; let startn = 0;let start = 0

               startnumm = 1

               for (let x of com) {

               var yy = {title: `${listnya[startnum++]}`,

                    rows: [

                       {

                        title: `${suruh[0]}`,

                        description: `\nMengaktifkan ${fiturname[startnu++]}`,

                        rowId: `${prefix}${x}`

                      },{

                        title: `${suruh[1]}`,

                        description: `\nMenonaktifkan ${fiturname[startn++]}`,

                        rowId: `${prefix}${comm[start++]}`

                      }

                    ]

                   }

                        list.push(yy)

           }

             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)

             break
      case 'group':

      case 'grup':

             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('!group enable/disable')
             if (args[0].toLowerCase() === 'enable'){
             zaki.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'disable'){
             zaki.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'close'){
             zaki.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'open'){
             zaki.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Pilih enable atau disable`)
}
             break
//------------------< Menunya Bang:v >-------------------
      case 'ytowner':

             reply(`*_Jangan Lupa Subscribe Ya Kak : https://m.youtube.com/channel/UCHdipvk52k43KsPRenGpD0w_*`)
             break
      case 'zakgroup':

             reply('https://chat.whatsapp.com/CobhViLgS9963FRrjtl9xh')
             break
      
      
      
      case 'jadibot':

             if (!isOwner) return  reply(mess.only.owner)
             const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(zaki,from,sender,reply,zak);
             break
      case 'stopjadibot':

      case 'stopbot':

             const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(zaki,from,sender,zak);
             break
             
//━━━━━━━━━━━━━━━[ 𝗔𝗨𝗧𝗢 𝗥𝗘𝗦𝗣𝗢𝗡 ]━━━━━━━━━━━━━━━\\             
default:
if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  
        if (budy.includes(`Bot`)) {
                  reply(`Apasi Kontol Sok Asik`)
                  }          
                  
                  if (budy.includes(`Ohayo`)) {
                  reply(`ohayo`)
                  }
                  
                  if (budy.includes(`Pagi`)) {
                  reply(`pagi juga`)
                  }
                  
                  if (budy.includes(`Yogi`)) {
                  reply(`jangan manggil yogi cok dia gay`)
                  }
                  
                  if (budy.includes(`Halo`)) {
                  reply(`apa su`)
                  }
                  
                  if (budy.includes(`Zak`)) {
                  reply(`ketik .owner untuk chat ownerku`)
                  }
                  
                  if (budy.includes(`Apasih`)) {
                  reply(`gasuka? blok`)
                  }
                                     
                   if (budy.includes(`Bacot`)) {
                  reply(`lakok ngamok? gelud ?`)
                  }
                  
                   if (budy.includes(`Terserah`)) {
                  reply(`Kek cewek ae tod`)
                  }
                 
                  if (budy.includes(`samlekom`)) {
                  reply(`waalaikumsalam`)
                  }
                  
if (budy.includes("#m")){
if (isMuted) return    

}
if (budy.includes("!m")){
if (isMuted) return    

}
        if (budy.includes("#a")){
if (isMuted) return    

}
if (budy.includes("!a")){
if (isMuted) return    

}
        if (budy.includes("#s")){
if (isMuted) return    

}
if (budy.includes("!s")){
if (isMuted) return    

}
if (budy.includes("bot")){
if (isMuted) return    

}
if (budy.includes("Bot")){
if (isMuted) return    

}

if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   zaki.sendMessage(from, starGame, text, {quoted: zak, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		zaki.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: zak, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  zaki.sendMessage(from, ucapan, text, {quoted: zak, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
zaki.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:zak,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
zaki.sendMessage(from, ucapan1, text, {quoted: zak, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
zaki.sendMessage(from, ucapan, text, {quoted: zak, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
zaki.sendMessage(from, ucapan1, text, {quoted:zak, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 zaki.sendMessage(from, ucapan, text, {quoted: zak, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || zak.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
if (!isGroup && isCmd && !zak.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
zaki.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/wpmobile.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:zak, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'cyan'))
        }
	}
}



