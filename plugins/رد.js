let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

    conn.sendFile(m.chat, 'https://file.io/L43C0MXKe8gs', 'sticker', m);
};

handler.customPrefix = /^ماكيما$/i;
handler.command = new RegExp;

export default handler;
