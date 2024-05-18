let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^ايه|ايهه$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*خدتك عليه 🥲💔*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^كبكبحبح|يجيجيحيكي|يطثكيكيكي$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`_*امممم 😳*_`, `*_لو بتحب/ي اورا (مطوري) ف انا احبك_*`, `*_ياعم حل عن نفوخي 😳_*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^مين المطور|بتاع مين البوت ده|المطور|مين صاحب البوت ده$/i.test(m.text) ) { //sin prefijo 
    conn.reply(m.chat, `╭┅〘 ⚠️ الـمـطـور ⚠️ 〙*
➽🐍 𝑈𝑅𝐴𝐻𝐴𝑅𝐴
➽⚜️ wa.me/+966 59 331 1570
➽💌 Owner Of bot
_*هذا رقم مطوري اذ كنت تريد ان عليك ان تدخل و تكتب رساله بدون ازعاج*_

*╰═┅ৡৢ͜͡✦═╡𝑈𝑅𝐴𝐻𝐴𝑅𝐴 🅱︎🅾︎🆃︎╞═┅ৡৢ͜͡✦═╯*`, m)

}

/* if (/^hola|halo|hello|hi$/i.test(m.text) ) { //sin prefijo 
     conn.reply(m.chat, `Hola :D`, fkontak, m)

 }*/

if (/^مساعده|كيف استخدم البوت|بوت عطلان|ازاي استخدم البوت|ازاي استخدم الاوامر$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆::✧ urahara 𝑩𝑶𝑻 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷::☆
┆——————«•»——————
┆ - اهلا بك في مركز المساعدة
┆ - عليك أن تستخدم الاوامر مع رمز
┆ - مثل : ( . ) 
┆ - ثم تكتب الأمر مثل *.اوامر*
┆ - يجب أن تتأكد من استخدام الرموز
┆ - و اذا لم يظهر لك رسائل البوت
┆ - استخدم *.تصليح* او *.صلح*
┆ - و لاظهار الأمر استخدم*".المهام*
┆ 
┆ 「 𝕌ℝ𝔸ℍ𝔸ℝ𝔸 𝔹𝕆𝕋 」
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
    }
