//━━━━━━━━━━━━━━━[ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ]━━━━━━━━━━━━━━━\\

const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')
join = '\`\`\`New Member\`\`\` \n \`\`\`Nama :\`\`\` \n \`\`\`Waifu : \`\`\` \n \`\`\`Husbu? :\`\`\` \n \`\`\`Status :\`\`\` \n\n - [ Tetaplah Jadi Wibu ] -'
leave = '\`\`\`Good Bye👋\`\`\`'

teks = `${join}`
let setting = JSON.parse(fs.readFileSync('./setting.json'))

module.exports = welcome = async (zaki, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await zaki.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://telegra.ph/file/232e8f13ff9f14211699c.jpg'
            }
                try {
                pp_grup = await zaki.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://telegra.ph/file/232e8f13ff9f14211699c.jpg'
            }
            if (anu.action == 'add' && mem.includes(zaki.user.jid)) {
            zaki.sendMessage(anu.jid, 'Eh Halo Kak! Nyulik Ya?', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(zaki.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await zaki.groupMetadata(anu.jid)
           
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = zaki.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
            buff = await getBuffer(`https://hardianto.xyz/api/tools/welcomer?nama=${encodeURI(anu_user)}&namaGb={encodeURI(mdata.subject)}&pepeGb=https://i.ibb.co/9nmHFDW/IMG-20210919-143042.jpg&totalMem=2022&pepeUser=https://telegra.ph/file/66505663d6edae03fad11.jpg&bege=https://i.ibb.co/9nmHFDW/IMG-20210919-143042.jpg&apikey=${setting.anto}`)
        zaki.sendMessage(anu.jid, { contentText: '\`\`\`New Member\`\`\` \n \`\`\`Nama :\`\`\` \n \`\`\`Waifu : \`\`\` \n \`\`\`Husbu :\`\`\` \n \`\`\`Status :\`\`\` \n\n - [ Tetaplah Jadi Wibu ] -', footerText: '© 𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳', buttons: [{ buttonId: `!selamatdatang`, buttonText: { displayText: 'HALO KAK👋' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: buff }}, 'buttonsMessage')
       } 

      if (anu.action == "remove" && !mem.includes(zaki.user.jid)) {

        mdata = await zaki.groupMetadata(anu.jid);

        num = anu.participants[0];

        let w = zaki.contacts[num] || { notify: num.replace(/@.+/, "") };

        anu_user = w.vname || w.notify || num.split("@")[0];

        memeg = mdata.participants.length;

        out = `${leave}`;

        buff2 = await getBuffer(`https://hardianto.xyz/api/tools/leave?nama=${encodeURI(anu_user)}&namaGb={encodeURI(mdata.subject)}&pepeGb=https://i.ibb.co/9nmHFDW/IMG-20210919-143042.jpg&totalMem=2022&pepeUser=https://telegra.ph/file/66505663d6edae03fad11.jpg&bege=https://i.ibb.co/9nmHFDW/IMG-20210919-143042.jpg&apikey=${setting.anto}`)
        zaki.sendMessage(anu.jid, { contentText: '\`\`\`Good Bye👋\`\`\`', footerText: '© 𝙺𝙸𝚉𝙰𝙺𝙸𝚇𝙳', buttons: [{ buttonId: `!bay`, buttonText: { displayText: 'Good Bye👋' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: buff2 }}, 'buttonsMessage')    
        }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
