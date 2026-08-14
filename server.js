require('dotenv').config();

const express = require('express');
const path = require('path');
const https = require('https');
const { URL } = require('url');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

function postToDiscord(webhookUrl, payload) {
  return new Promise((resolve, reject) => {
    const url = new URL(webhookUrl);

    const requestOptions = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: `${url.pathname}${url.search}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(payload))
      }
    };

    const req = https.request(requestOptions, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ ok: true, status: res.statusCode, body: data });
          return;
        }

        reject(new Error(`Discord returned ${res.statusCode}: ${data}`));
      });
    });

    req.on('error', reject);
    req.write(JSON.stringify(payload));
    req.end();
  });
}

app.post('/api/notify', async (req, res) => {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  const payload = req.body || {};

  if (!webhookUrl) {
    return res.status(500).json({
      error: 'Discord notifications are not configured yet.'
    });
  }

  const pageUrl = payload.pageUrl || 'Unknown';
  const buttonLabel = payload.button || 'Notify Me';
  const browserInfo = payload.browserInfo || 'Unavailable';
  const timestamp = payload.timestamp || new Date().toISOString();

  const discordPayload = {
    content: '🔔 Someone clicked the button on my website!',
    embeds: [
      {
        title: 'Website Contact Request',
        description: `The ${buttonLabel} button was clicked.`,
        color: 0xff69b4,
        timestamp,
        fields: [
          {
            name: 'Page URL',
            value: pageUrl,
            inline: false
          },
          {
            name: 'Button',
            value: buttonLabel,
            inline: true
          },
          {
            name: 'Browser / Device',
            value: browserInfo,
            inline: false
          }
        ]
      }
    ]
  };

  try {
    await postToDiscord(webhookUrl, discordPayload);
    return res.json({ ok: true, message: 'Request sent!' });
  } catch (error) {
    console.error('Error sending Discord notification:', error.message);
    return res.status(500).json({
      error: 'The notification could not be sent right now.'
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
