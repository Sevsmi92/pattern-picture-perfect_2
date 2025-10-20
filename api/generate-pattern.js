export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { measurements, material } = req.body || {};
  const patternId = 'pat_' + Math.random().toString(36).slice(2, 8);
  return res.status(200).json({ ok: true, patternId, echo: { measurements, material } });
}
