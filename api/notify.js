module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return res.status(500).json({
      error: 'Discord notifications are not configured yet.'
    });
  }

  const body = req.body || {};
  const pageUrl = body.pageUrl || 'Unknown';
  const buttonLabel = body.button || 'Notify Me';
  const browserInfo = body.browserInfo || 'Unavailable';
  const timestamp = body.timestamp || new Date().toISOString();

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
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(discordPayload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Discord webhook failed:', response.status, errorText);
      return res.status(502).json({
        error: 'The notification could not be sent right now.'
      });
    }

    return res.status(200).json({ ok: true, message: 'Request sent!' });
  } catch (error) {
    console.error('Error sending Discord notification:', error);
    return res.status(500).json({
      error: 'The notification could not be sent right now.'
    });
  }
};
