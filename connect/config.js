const fs = require('fs')
const chalk = require('chalk')

// ganti aja gpp
global.ownerName = "Botprivate"
global.ownerNumber = "6285717281107"
global.botName = "BOTGABUT"
global.developerNumber = ["6285717281107","6285717281107"]

// waktu delay
global.waktuDelayBug = 2000 // berarti delay bug nya 2 detik

// jumlah batas maksimal bug
global.max_bug_emoji = 40 // berarti batas maksimal 30× spam
global.max_bug_attack = 25 // berarti batas maksimal 20× spam

// sesuai selera kalo mau kirim bug banyak ganti aja
// siap terima resiko rawan banned wa botnya okeyy
// recommended dari saya dibawah 30 selebihnya ytta

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})