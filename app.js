// Minimal app logic: loads data/scores.json, shows divisions, starts a simple recurve/compound flow.
// Replace or extend data/scores.json for more realistic opponent sampling.

let data = null;
const divisions = [
  {id:'rec-men', label:'Recurve Men', type:'recurve'},
  {id:'rec-women', label:'Recurve Women', type:'recurve'},
  {id:'rec-mixed', label:'Recurve Mixed', type:'recurve'},
  {id:'cmp-men', label:'Compound Men', type:'compound'},
  {id:'cmp-women', label:'Compound Women', type:'compound'},
  {id:'cmp-mixed', label:'Compound Mixed', type:'compound'}
];

async function init(){
  try {
    data = await fetch('data/scores.json').then(r=>r.json());
  } catch(e){
    console.warn('Could not load data/scores.json — using minimal defaults', e);
    data = { events: [] };
  }
  renderHome();
  setupHandlers();
}

function renderHome(){
  document.getElementById('home').classList.remove('hidden');
  document.getElementById('match').classList.add('hidden');
  const grid = document.getElementById('division-grid');
  grid.innerHTML = '';
  divisions.forEach(d=>{
    const tile = document.createElement('div'); tile.className='tile';
    const btn = document.createElement('button'); btn.textContent=d.label;
    btn.onclick = ()=>startMatch(d);
    tile.appendChild(btn);
    grid.appendChild(tile);
  });
}

let currentMatch = null;

function startMatch(div){
  // create a simple match state
  currentMatch = {
    division: div,
    type: div.type,
    you: {setsWon:0, total:0},
    opp: {setsWon:0, total:0},
    history: []
  };
  document.getElementById('home').classList.add('hidden');
  document.getElementById('match').classList.remove('hidden');
  document.getElementById('matchTitle').textContent = `${div.label} — ${div.type === 'recurve' ? 'Set match' : 'Compound total'}`;
  buildNumpad();
  updateScoreboard();
  document.getElementById('promptText').textContent = div.type === 'recurve' ? 'Enter set total or 3 arrows (e.g. 10,9,10)' : 'Enter end (3 arrows) or total (15-arrow total)';
  document.getElementById('historyList').innerHTML = '';
  document.getElementById('result').classList.add('hidden');
}

function buildNumpad(){
  const pad = document.getElementById('numpad'); pad.innerHTML='';
  const keys = ['m','1','2','3','4','5','6','7','8','9','10','x'];
  keys.forEach(k=>{
    const b = document.createElement('button'); b.className='btn'; b.textContent=k;
    b.onclick = ()=>onNumpad(k);
    pad.appendChild(b);
  });
}

let inputBuffer = '';
function onNumpad(k){
  if(k==='m') inputBuffer = 'm';
  else if(k==='x') inputBuffer = inputBuffer ? inputBuffer + ',' + 'x' : 'x';
  else {
    // append numeric; allow comma separated
    if(inputBuffer && !inputBuffer.endsWith(',')) inputBuffer += ',';
    inputBuffer += k;
  }
  document.getElementById('promptText').textContent = 'Input: ' + inputBuffer;
}

function setupHandlers(){
  document.getElementById('confirmBtn').onclick = confirmInput;
  document.getElementById('clearBtn').onclick = ()=>{ inputBuffer=''; document.getElementById('promptText').textContent='Enter arrows or set total'; };
  document.getElementById('backHome').onclick = renderHome;
  document.getElementById('newMatch').onclick = ()=>{ renderHome(); };
}

function confirmInput(){
  if(!currentMatch) return;
  const raw = inputBuffer.trim();
  if(!raw) return alert('Enter a value first');
  // parse input: either comma-separated arrows or a single total
  const parts = raw.split(',').map(s=>s.trim().toLowerCase());
  let playerTotal = 0;
  if(parts.length===1 && !isNaN(Number(parts[0]))){
    playerTotal = Number(parts[0]);
  } else {
    // arrows
    for(const p of parts){
      if(p==='m') playerTotal += 0;
      else if(p==='x') playerTotal += 10;
      else {
        const v = Number(p);
        if(isNaN(v) || v<0 || v>10) return alert('Invalid arrow: ' + p);
        playerTotal += v;
      }
    }
  }

  // opponent sampling: for simplicity use finals totals from data if available
  const ev = data.events.find(e=>e.category.toLowerCase().includes(currentMatch.division.label?.toLowerCase?.() || currentMatch.division.id.replace('-',' ')));
  // fallback: sample from event finals totals or synthetic
  let oppTotal = sampleOpponentTotal(currentMatch, playerTotal);

  // update match state
  if(currentMatch.type === 'recurve'){
    // set comparison: award set points
    const youSet = playerTotal;
    const oppSet = oppTotal;
    let youPts=0, oppPts=0;
    if(youSet > oppSet) youPts=2;
    else if(youSet < oppSet) oppPts=2;
    else { youPts=1; oppPts=1; }
    currentMatch.you.setsWon += youPts;
    currentMatch.opp.setsWon += oppPts;
    currentMatch.history.push({type:'set', you:youSet, opp:oppSet});
  } else {
    // compound: accumulate totals (assume user enters end or total; here treat as end)
    currentMatch.you.total += playerTotal;
    currentMatch.opp.total += oppTotal;
    currentMatch.history.push({type:'end', you:playerTotal, opp:oppTotal});
  }

  inputBuffer = '';
  updateScoreboard();
  renderHistory();
  checkMatchEnd();
}

function sampleOpponentTotal(match, playerTotal){
  // Try to pick a realistic opponent total from data; fallback to near playerTotal
  const finals = (data.events || []).flatMap(e=>e.finals || []);
  if(finals.length){
    // pick a random finals total if present (we only have ranks; create synthetic totals)
    // simple heuristic: map rank to a high score
    const idx = Math.floor(Math.random()*finals.length);
    const base = 150 - (finals[idx].rank || 1); // synthetic
    // for recurve sets, convert to 3-arrow set total (max 30)
    if(match.type === 'recurve'){
      // sample from [26..30] biased by base
      return Math.max(17, Math.min(30, Math.round(26 + (base%5))));
    } else {
      // compound: sample a 15-arrow total between 130..150
      return Math.max(120, Math.min(150, base));
    }
  }
  // fallback: near player's value with small variance
  const variance = match.type === 'recurve' ? 2 : 6;
  const sign = Math.random() < 0.5 ? -1 : 1;
  const val = Math.round(playerTotal + sign * Math.floor(Math.random()*variance));
  if(match.type === 'recurve') return Math.max(0, Math.min(30, val));
  return Math.max(0, Math.min(150, val));
}

function updateScoreboard(){
  if(!currentMatch) return;
  if(currentMatch.type === 'recurve'){
    document.getElementById('youScore').textContent = `${currentMatch.you.setsWon} set points`;
    document.getElementById('oppScore').textContent = `${currentMatch.opp.setsWon} set points`;
  } else {
    document.getElementById('youScore').textContent = `${currentMatch.you.total} total`;
    document.getElementById('oppScore').textContent = `${currentMatch.opp.total} total`;
  }
}

function renderHistory(){
  const list = document.getElementById('historyList'); list.innerHTML='';
  currentMatch.history.forEach((h,i)=>{
    const li = document.createElement('li');
    if(h.type==='set') li.innerHTML = `Set ${i+1}: You ${h.you} — Opp ${h.opp}`;
    else li.innerHTML = `End ${i+1}: You ${h.you} — Opp ${h.opp}`;
    list.appendChild(li);
  });
}

function checkMatchEnd(){
  if(currentMatch.type === 'recurve'){
    // first to 6 set points wins (common rule)
    if(currentMatch.you.setsWon >= 6 || currentMatch.opp.setsWon >= 6){
      const winner = currentMatch.you.setsWon >= 6 ? 'You win' : 'Opponent wins';
      showResult(winner);
    }
  } else {
    // after 5 ends (we don't track ends count precisely here) — simple heuristic: if history length >=5
    const ends = currentMatch.history.filter(h=>h.type==='end').length;
    if(ends >= 5){
      const winner = currentMatch.you.total > currentMatch.opp.total ? 'You win' : (currentMatch.you.total < currentMatch.opp.total ? 'Opponent wins' : 'Tie — shoot-off');
      showResult(winner);
    }
  }
}

function showResult(text){
  document.getElementById('resultText').textContent = text;
  document.getElementById('result').classList.remove('hidden');
}

init();
