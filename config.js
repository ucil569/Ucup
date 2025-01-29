//BASE BY GHOSTNETIZEN
//DEV GHOSTNETIZEN
//NAMA: DIMAS
//TRASHER CYBERION V1.0
//TELEGRAM: t.me/ghostnetizen
//WHATSAPP: +6289602541152
//=================================================//
const chalk = require('chalk')
const fs = require("fs")
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require("./lib/myfunction")

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString("id")

//===========================//

global.prefa = ["","!",".",",","🐤","🗿"]
global.owner = ["6289602541152"]//bisa pake no kamu
global.ownMain = "6289602541152"//bisa pake no kamu
global.NamaOwner = "Dimas"
global.usePairingCode = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = "TrasherCyberion"
global.author = "Ghostnetizen"
global.packname = "Cyberion | V1.0"
//===========================//

//Global Mess
global.mess = {
 ingroup: "Hanya bisa di dalam grub",
 admin: "Hanya bisa digunakan oleh admin",
 owner: "Hanya bisa digunakan oleh owner",
 premium: "Hanya bisa digunakan oleh user premium",
 proses: "Proses tuan", 
 success: 'Sukses tuan',
}
//==================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})