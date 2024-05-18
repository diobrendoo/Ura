let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `بوت ماكيما تحت امرك لتلقي الاوامر اكتب(.اوامر)`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/b574a4b50331200691bfa.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^ماكيما$/i;
handler.command = new RegExp;

export default handler;
