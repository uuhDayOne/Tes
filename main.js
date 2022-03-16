const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./zaki.js')
require('./message/group.js')

const starts = async (zaki = new WAConnection()) => {
	zaki.logger.level = 'warn'
	zaki.version = [2,2143,3]
	console.log(color(figlet.textSync('KIZAKIXD', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ZAKI]', 'cyan'), color('I Am KIZAKIXD', 'green'))
	console.log(color('[ZAKI]', 'cyan'), color('Tunggu Sebentar Bot Loading', 'green'))
	zaki.browserDescription = ["KiZakiXD", "Firefox", "3.0.0"];

	// Menunggu QR
	zaki.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Subscribe Chanel FLOB'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && zaki.loadAuthInfo(`./${setting.sessionName}.json`)
	zaki.on('connecting', () => {
		console.log(color('[ FLOB ]', 'yellow'), color(' ⏳ Loading Kak...'));
	})

	//connect
	zaki.on('open', () => {
		console.log(color('[ FLOB ]', 'yellow'), color('Bot sudah on kak!'));
	})

	// session
	await zaki.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(zaki.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	zaki.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	zaki.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	zaki.on('group-participants-update', async (anu) => {
		await welcome(zaki, anu)
	})

	zaki.on('chat-update', async (message) => {
		require('./zaki.js')(zaki, message)
	})
}

starts()
