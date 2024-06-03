let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
const { WhatsApp, WhatsAppBusiness } = require("whatsapp-web.js");
const firebase = require("firebase");
const admin = require("firebase-admin");

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  });
}

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "YOUR_DATABASE_URL",
  });
}

// Initialize WhatsApp
const client = new WhatsApp({
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

// Initialize WhatsApp Business
const businessClient = new WhatsAppBusiness({
  puppeteer: {
    args: ["--no-sandbox"],
  },
});

// Log in to WhatsApp
client.on("qr", (qr) => {
  console.log("QR RECEIVED", qr);
});

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
});

client.on("ready", () => {
  console.log("READY");
});
  
// Send message to all contacts
function sendMessageToAllContacts(message) {
  client.getContacts().then((contacts) => {
    contacts.forEach((contact) => {
      client.sendMessage(contact.id._serialized, message);
    });
  });
}
handler.command
// Fetch matches from Firebase
function getMatches() {
  return admin
    .firestore()
    .collection("matches")
    .where("date", ">=", new Date().toISOString())
    .orderBy("date")
    .limit(5)
    .get();
}

// Main function to send matches
async function sendMatches() {
  const matches = await getMatches();
  let message = "**Matches Today:** \n\n";

  matches.forEach((match) => {
    message += `- ${match.data().team1} vs ${match.data().team2}\nDate: ${match.data().date}\nTime: ${match.data().time}\n\n`;
  });

  sendMessageToAllContacts(message);
}
handler.help = ["مباريات"]
handler.tags = ['fun']
handler.command = /^(مباراة)/i
// Schedule function to run daily
const CronJob = require("cron").CronJob;
const job = new CronJob("0 0 18 * * *", sendMatches);
job.start();
