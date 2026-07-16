module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'ANTHROPIC_API_KEY env var not set' });

  let body = req.body;
  console.log('req.body type:', typeof body, '| value:', JSON.stringify(body)?.slice(0, 200));

  if (!body || typeof body !== 'object') {
    try {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const raw = Buffer.concat(chunks).toString();
      console.log('raw stream length:', raw.length, '| preview:', raw.slice(0, 200));
      body = raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.log('body parse error:', e.message);
      return res.status(400).json({ error: 'Invalid JSON body: ' + e.message });
    }
  }

  const { system, messages } = body || {};
  console.log('system length:', system?.length, '| messages count:', messages?.length);
  if (!system || !messages) return res.status(400).json({ error: 'Missing system or messages' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ model: 'claude-3-5-sonnet-20241022', max_tokens: 1024, system, messages }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.log('Anthropic error:', JSON.stringify(data));
      return res.status(response.status).json({ error: data });
    }
    const text = data.content?.[0]?.text || '';
    return res.status(200).json({ text });
  } catch (err) {
    console.log('fetch error:', err.message);
    return res.status(500).json({ error: err.message });
  }
};
