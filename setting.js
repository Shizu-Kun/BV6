const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const Fichan = new require('./lib/functions')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

// SETTINGS IS BAILEYS \\
global.baileys = require('@whiskeysockets/baileys') // Biarin Ae Jir
global.api = 'yn3mOtHb' 
global.logic = 'Kamu adalah Ai';
global.linkapikey = 'https://api.betabotz.eu.org' // kalian ambil aja apikeynya di situ daftar gratis tar tinggal copy aja apikeynya
// abistu masukin ke yang global.api
// ====================== \\

/* SETTING IS PAIRING CODE 
True To Pairing Code
False To Scaned
*/
global.usePairingCode = true 
// ====================== \\

// SETTING IN SALURAN WHATSAPP \\
global.saluran = 'https://whatsapp.com/channel/0029VadndB9It5rqJG6t4k2B'
global.idsal = "120363294187887035@newsletter"
// ====================== \\

// SETTING IN OWNER NAME AND NUMBER OWNER \\
global.ownername = 'FERNAZER' // Owner Name
global.owner = ['6281328139682'] // Nomor Owner
global.botname = 'FLIX BOT AI' // Nama Bot
// ====================== \\

// SETTING IN WM \\
global.packname = '' // Name Sticker
global.author = `Lollipop` // Name Sticker 
global.hiasan = `	◦  ` // Biarin ,, Klo Ubah Eror Ga Nanggung 
global.prefa = ['','!','.',',','🐤','🗿'] // Biarin Juga
global.sessionName = 'inisession' // Gausah
global.sp = '⭔' // Jangan
global.wlcm = []
global.wlcmm = []
global.versi = '5.0.0'
global.gris = '`'
global.wm = `FLIX BOT AI` // Ubah Ae
global.namaStore = 'RAFFX' // Ubah Ae
global.ownerStore = 'RAFFX' // Ubah Ae
global.autobio = false // True Jika Langsung On False Jika Off
global.autoread = false // True Jika Langsung On False Jika On
global.thumbnail = 'https://telegra.ph/file/ac7b0762c24dff7940978.jpg'
// ====================== \\

// SETTING IN APIKEY CPANEL \\
global.footer2 = Styles('CREATED FERNAZER')
global.domain = 'https://panelnotfound.shopwebsite.my.id' // Isi Domain Lu
global.apikey2 = 'ptla_D44ADCm8F32DdoUMRhBlRbICWZYYFrzkDg1vW0IYfrF' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_P7nMUOweqHG78SS4YCFE68KXB9VOjftlT3KEcBg9OHQ' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yankai
global.location = '1' // id location
// ====================== \\

// SETTING IN CREAT LINODE \\
global.apilinode = ''
global.apitokendo = ''
// ====================== \\

// MESSAGE OTOMATISED \\
global.Func = Fichan
global.systemN = `*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ*`
global.mess = {
    ban: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ʟᴜ ᴅɪ ʙᴀɴᴅ ᴏᴡɴᴇʀ'),
    badm: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴊᴀᴅɪɪɪɴ ʙᴏᴛ ᴀᴅᴍɪɴ ᴅᴜʟᴜ ʟᴀʜ ʙᴀʀᴜ ʙɪsᴀ ɢᴜɴᴀɪɴ ɴɪʜ ғɪᴛᴜʀᴇ'),
    regis: Styles(`*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ᴅᴀғᴛᴀʀ`),
    premium: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍ ʙᴜʏ ᴘʀᴇᴍ ᴋᴇ ᴏᴡɴᴇʀ'),
    search: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴏᴛᴡ sᴇᴀʀᴄʜ....'),
    done: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴅᴏɴᴇ ʏᴀ ᴡɪʀ...'),
    success: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* sᴜᴄᴄᴇs....!!'),
    admin: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ғɪᴛᴜʀᴇ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ'),
    owner: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋʜᴜsᴜs ᴏᴡɴᴇʀ sᴀᴊᴀ ʏᴀ'),
    group: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ᴋʜᴜsᴜs ɢʀᴏᴜᴘ sᴀᴊᴀ ʏᴀ'),
    private: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴄᴍᴅ ɪɴɪ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ'),
    bot: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴏɴʟʏ ʙᴏᴛ ᴜsᴇʀ'),
    wait: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴡᴀɪᴛɪɴɢ ᴏᴛᴡ ᴘʀᴏsᴇs...'),
    getdata: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* Scraping metadata . . .'),
    fail: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* Can\'t get metadata!'),
    error: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ʟᴀɢɪ ᴀᴅᴀ ᴋᴇɴᴅᴀʟᴀ ᴋᴀᴋ sᴏʀʏ ʏᴀ'),
    errorF: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* this feature is in error.'),
}
//=================================================//
// SETTING IN LIMITED \\
global.limitawal = {
    premium: "Infinity",
    free: 15
    }
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})