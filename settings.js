/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasGanz',
}

//—————「 Setting Owner 」—————//
global.owner = ['6282247499378','6282247499378','6282247499378'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6282247499378'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6282247499378' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'SamuelIswandono' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'Chika-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'SamuelIswandono' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/@hahahalucu9'
global.ig = 'https://instagram.com/samueliswandono'
global.mygc = 'https://chat.whatsapp.com/KMQMo8uKO9ZDL45QWoWDah'
global.myweb = 'https://s.id/chikabot'
global.email = 'samueliswandono10@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '© Chika-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Samuel.Iswandono' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 30,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
/*global.veloriy = fs.readFileSync('./image/chika.mp4')*/

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_sudah ;3._',
admin: '_Fitur Khusus Admin Group TOLOL!!_',
botAdmin: '_Woi TOLOL!!!! GW ini Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_sayang Fitur ini Khusus untuk Owner Bot ya hehehe ;)_',
group: '_Fitur Digunakan Hanya Untuk Group ya!_',
private: '_emmmmm.... sayang Fitur ini Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot ya_',
wait: '_Sedang Memproses..._',
error: '_Fitur ini Sedang Error!_',
endLimit: '_Limit Harian Ente Telah Habis, Limit Akan Direset Setiap Jam 12 ya_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
