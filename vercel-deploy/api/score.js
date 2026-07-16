function heuristicScore(text) {
  const t = text.toLowerCase();
  const words = t.split(/\s+/).filter(Boolean);
  const wc = words.length;
  const actionVerbs = /\b(write|summarise|summarize|draft|analyse|analyze|create|generate|explain|list|compare|extract|produce|identify|suggest|recommend|outline|describe|translate|rewrite|review|assess|evaluate|format|provide|give me|tell me|show me|make|build|design|develop|find|check)\b/;
  const isPrompt = actionVerbs.test(t) || /^(please\s+)?(can you|could you|would you|help me)/i.test(text);
  if (!isPrompt) {
    return {score:0,elements:{C:{score:0,note:'No command verb found'},L:{score:0,note:'Not a prompt'},E:{score:0,note:'Not a prompt'},A:{score:0,note:'Not a prompt'},R:{score:0,note:'Not a prompt'}},feedback:'This reads as a description, not a prompt. A prompt must tell the AI what to do - start with an action verb like Write, Summarise, or Analyse.',improvement:'Rewrite starting with a clear command: e.g. "Write a..." or "Summarise..."'};
  }
  const strongVerbs = /\b(write|summarise|summarize|draft|analyse|analyze|create|generate|extract|produce|outline|rewrite|translate|evaluate|assess|format)\b/;
  const weakVerbs = /\b(help me|can you|could you|tell me|give me|show me)\b/;
  let cScore = 0, cNote = '';
  if (strongVerbs.test(t)) { cScore = wc > 15 ? 9 : 7; cNote = 'Clear directive verb present'; }
  else if (weakVerbs.test(t)) { cScore = 4; cNote = 'Weak verb - too vague'; }
  else { cScore = 2; cNote = 'Command unclear'; }
  const hasWordCount = /\b(\d+\s*words?|\d+\s*sentences?|\d+\s*bullet|one page|half page|brief|concise|short|under \d+|no more than|at most \d+)\b/.test(t);
  const hasTone = /\b(professional|formal|informal|casual|friendly|authoritative|neutral|simple|plain|technical)\b/.test(t);
  const hasScope = /\b(focus on|only|limit to|avoid|exclude|stick to|just the|key points?)\b/.test(t);
  const lCount = [hasWordCount, hasTone, hasScope].filter(Boolean).length;
  let lScore = 0, lNote = '';
  if (lCount >= 2) { lScore = 9; lNote = 'Explicit constraints defined'; }
  else if (lCount === 1) { lScore = 5; lNote = 'Some limits - add more specifics'; }
  else { lScore = 1; lNote = 'No word count, tone, or scope defined'; }
  const hasRole = /\b(you are (a|an)|act as (a|an)|as (a|an) expert|as specialist|pretend you are|imagine you are)\b/.test(t);
  const hasSectorContext = /\b(company|organisation|organization|department|team|industry|sector|hospital|school|retail|financial|legal|medical|government|startup)\b/.test(t);
  let eScore = 0, eNote = '';
  if (hasRole) { eScore = 9; eNote = 'Role clearly assigned to AI'; }
  else if (hasSectorContext) { eScore = 6; eNote = 'Context given - add a role for the AI'; }
  else { eScore = 1; eNote = 'No environment or role context'; }
  const hasAudience = /\b(for (my|the|our|a|an)|audience|reader|stakeholder|client|customer|manager|executive|ceo|board|team|staff|employee|beginner|expert|non-technical|technical)\b/.test(t);
  const hasAudienceDetail = /\b(who (are|is)|background|experience|level|expertise|familiar with|unfamiliar|understand)\b/.test(t);
  let aScore = 0, aNote = '';
  if (hasAudience && hasAudienceDetail) { aScore = 8; aNote = 'Audience named with detail'; }
  else if (hasAudience) { aScore = 5; aNote = 'Audience named - add expertise or context'; }
  else { aScore = 1; aNote = 'No intended audience specified'; }
  const hasFormat = /\b(bullet points?|numbered list|table|sections?|headers?|paragraphs?|steps?|script|report format|formatted as|structured as|in the format|subheadings?|columns?|rows?|markdown|html)\b/.test(t);
  const hasOutputShape = /\b(summary|overview|outline|list|breakdown|analysis|comparison|draft|email|memo|slides?|template)\b/.test(t);
  let rScore = 0, rNote = '';
  if (hasFormat) { rScore = 9; rNote = 'Output format clearly specified'; }
  else if (hasOutputShape) { rScore = 5; rNote = 'Output type named - specify format/structure'; }
  else { rScore = 1; rNote = 'No format or structure requested'; }
  const total = cScore + lScore + eScore + aScore + rScore;
  const missing = [!strongVerbs.test(t) && 'a stronger command verb', lCount === 0 && 'word count or tone', !hasRole && 'a role for the AI', !hasAudience && 'your intended audience', !hasFormat && 'a format like bullets or a table'].filter(Boolean);
  const topMissing = missing[0] || 'more specificity';
  let feedback = '';
  if (total >= 35) feedback = 'Strong, well-crafted prompt covering all CLEAR elements. Minor refinements possible.';
  else if (total >= 20) feedback = 'Good start - the command is clear but the prompt needs ' + missing.slice(0, 2).join(' and ') + ' to produce your best result.';
  else feedback = 'The AI will produce something, but adding ' + missing.slice(0, 2).join(' and ') + ' would dramatically improve output quality.';
  const improvement = 'Add ' + topMissing + ' to give the AI clearer direction and get more targeted output.';
  return { score: total, elements: { C: {score:cScore,note:cNote}, L: {score:lScore,note:lNote}, E: {score:eScore,note:eNote}, A: {score:aScore,note:aNote}, R: {score:rScore,note:rNote} }, feedback, improvement };
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body;
  if (!body || typeof body !== 'object') {
    try {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      body = JSON.parse(Buffer.concat(chunks).toString());
    } catch (e) {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }

  const { messages } = body || {};
  if (!messages || !messages[0]) return res.status(400).json({ error: 'Missing messages' });

  const userText = messages[0].content || '';
  const promptMatch = userText.match(/Learner's prompt: "(.+)"$/s);
  const promptText = promptMatch ? promptMatch[1] : userText;

  const result = heuristicScore(promptText);
  return res.status(200).json({ text: JSON.stringify(result) });
};
