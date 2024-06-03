let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
const WABot = require('@adiwajshing/baileys');
const cheerio = require('cheerio');
const { get } = require('axios');

// Create WhatsApp bot
const bot = WABot.create({
  auth: false, // Will use the saved Auth Session
});

// Load saved Auth Session
bot.loadAuthInfo('./auth-info.json');

// Start bot
bot.connect().then(_ => {
  console.log('Bot connected');
});

// Event listener for incoming messages
bot.ev.on('messages.upsert', async m => {
  // Get current message
  const message = m.messages[0];
  
  // Check if the message contains the keyword 'مباراة'
  if (message.body && message.body.toLowerCase() === 'مباراة') {
    try {
      // Fetch football matches data from website
      const { data } = await get('https://www.livescore.com/football/');
      const $ = cheerio.load(data);
      
      // Extract match details
      const matches = [];
      $('#live-fixtures-list li').each((i, el) => {
        const match = {
          teams: $(el).find('.participantRow .participantName').text().trim(),
          score: $(el).find('.team-score').text().trim(),
          time: $(el).find('.matchStatus').text().replace('FT', '').trim()
        };
        
        matches.push(match);
      });
      
      // Send matches list to sender
      const reply = `**أهم مباريات اليوم:**\n\n${matches.map(match => `${match.teams} - ${match.score} (${match.time})`).join('\n')}`;
      await bot.sendMessage(message.key.remoteJid, { text: reply });
    } catch (error) {
      console.error(error);
      await bot.sendMessage(message.key.remoteJid, { text: 'حدث خطأ، حاول مرة أخرى لاحقًا.' });
    }
  }
});

handler.help = ["مباريات"]
handler.tags = ['fun']
handler.command = /^(مباراة)/i

