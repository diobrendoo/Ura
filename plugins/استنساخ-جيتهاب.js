import fetch from 'node-fetch';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.descargas_gitclone
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.


const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*_هذا الامر مخصص للمطورين فقط_*\n\n_*تستطيع استخدام الامر لنسخ جميع ملفات جيتهاب_*\n\n*_مثال_*${usedPrefix + command} https://github.com/BrunoSobrino/TheMystic-Bot-MD`;
  if (!regex.test(args[0])) throw '_*انتظر قليلا يتم التحميل*_';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply`_*يرجى الانتظار حتى يتم التحميل*_`;
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.command = /استنساخ-جيتهاب/i;
export default handler;
