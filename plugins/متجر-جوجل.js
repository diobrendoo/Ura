import gplay from "google-play-scraper";
import _translate from "./_translate.js"
const tradutor = _translate.plugins.buscador_playstore
 // Para configurar o idioma, na raiz do projeto altere o arquivo config.json
  // Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
  // To set the language, in the root of the project, modify the config.json file.

  

let handler = async (m, { conn, text }) => {
  if (!text) throw `*[🗿] اكتب اسم التطبييق الذي تريد البحث عنه*`;
  let res = await gplay.search({ term: text });
  if (!res.length) throw `*22${tradutor.texto2}*`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
      `*💡النتيجة:* ${v.title}
      *🧑‍💻المطور:* ${v.developer}
     *💵 السعر:* ${v.priceText}   
      *🚀لينك التحميل:*\n${v.url}`
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(متجر-جوجل|بلاي-ستور|تطبيق)$/i;
export default handler;
