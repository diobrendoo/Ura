import _translate from "./_translate.js"
const tradutor = _translate.plugins.fun_reto
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, {conn}) => {
  conn.reply(m.chat, `*┌────「 تحديك 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 𝑀𝐴𝐾𝐼𝑀𝐴 𝐵𝛩𝑇 」─*`, m);
};
handler.help = ['reto'];
handler.tags = ['fun'];
handler.command = /^تحدي/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.bucin = tradutor.texto1;
