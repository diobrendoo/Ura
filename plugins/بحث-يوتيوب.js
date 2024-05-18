import yts from 'yt-search';
import fs from 'fs';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.buscador_yts
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, {conn, text}) => {
  if (!text) throw `*[🧨]هذا الامر مخصص للبحث في يوتيوب*`;
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_اللينك_*: ${v.url}
↳ 🕒 *_الوقت_*: ${v.timestamp}
↳ 📥 *_منذ_*: ${v.ago}
↳ 👁 *_عدد المشاهدات_*: ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['بحث-يوتيوب','بحث-يوت','yts'];
export default handler;
