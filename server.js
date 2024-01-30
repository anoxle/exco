const express = require('express');
const { Client, Intents } = require('discord.js');

const app = express();
const port = 3000;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('Bot is ready!');
});

app.get('/status', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const bot = client.users.cache.get('1200988881860972544');
  const isOnline = bot && bot.presence?.status === 'online';

  res.json({ isOnline });
});

client.login('YOUR_BOT_TOKEN');

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
