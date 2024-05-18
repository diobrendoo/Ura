let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `ماكيما تتفق`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/8baa67b72d6f1e28cdaff.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^ملل|مللل|ملللل|مللللل|ملللللل|مللللللل$/i;
handler.command = new RegExp;

export default handler;
