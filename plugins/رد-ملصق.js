
import { sticker } from './lib/sticker.js'
let handler = async(m, { conn }) => {
    //صوره الاستيكر
    const xvi = [
"https://telegra.ph/file/b95e9edf3a38c1b746355.png",
"https://telegra.ph/file/54edce44afa4a6a858692.jpg",
"https://telegra.ph/file/8a35ba00b08f03f0c9ae3.jpg",
"https://telegra.ph/file/dfe985bcab1ee32a61822.jpg",
"https://telegra.ph/file/2a51d812949994e011dea.jpg"
    ];  
    //اختيار صوره عشوائي لتحويلها استيكر
    let stiker = await sticker(null, xvi[Math.floor(Math.random() * s.length)])
    if (stiker) {
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
}
//الأمر يعمل بدون نقطه عادي
handler.customPrefix = /@ura/i 
handler.command = new RegExp
export default handler
