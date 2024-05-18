import fetch from 'node-fetch';
import _translate from "./_translate.js"
const tradutor = _translate.plugins.buscador_githubsearch
 // Para configurar o idioma, na raiz do projeto altere o arquivo config.json
  // Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
  // To set the language, in the root of the project, modify the config.json file.
  

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] هذا الامر مخصص للبحث عن المشروعات في موقع جيتهاب, مثال: ${usedPrefix + command} TheMystic-Bot-MD*`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  //const imagen = await conn.getFile(json.items[0].owner.avatar_url).data
  const str = json.items.map((repo, index) => {
  return `
*${1 + index}. ${repo.full_name}${repo.fork ? ' (fork)' : ''}*
${tradutor.texto1[0]} ${repo.html_url}
${tradutor.texto1[3]} ${repo.clone_url}
👁 ${repo.watchers} ◉ 🍴 ${repo.forks} ◉ ⭐ ${repo.stargazers_count} ◉ ❓ 
${repo.description ? `📝 الوصف\n${repo.description}` : ''}
`.trim()}).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendMessage(m.chat, {text: str.trim()}, {quoted: m})
//conn.sendMessage(m.chat, {text: str.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://www.atom.bio/theshadowbrokers-team`}}}, {quoted: m});  
};
handler.help = ['githubs'];
handler.tags = ['buscadores'];
handler.command = /^(جيتهاب-بحث|جيتهاب سيرش|بحث-جيتهاب)$/i;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', يوم: 'الرقم', شهر: 'long', سنة: 'الرقم', ساعة: 'الرقم', دقيقة: 'الرقم', ثانية: 'الرقن'});
}
