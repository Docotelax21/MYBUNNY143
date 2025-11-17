// == CONFIG ==
const MESSAGES = [
  "1. I love the way your smile starts my day.",
  "2. Your laugh is my favourite song.",
  "3. I love your hands — they fit perfectly in mine.",
  "4. How you make tea on rainy days.",
  "5. Your stubbornness when you’re right (and when you’re not).",
  "6. The little notes you hide for me.",
  "7. How you make food taste like home.",
  "8. You dancing in the kitchen at midnight.",
  "9. The way you look when you’re concentrating.",
  "10. Your texts that turn my bad days around.",
  "11. The way you call me when you’re excited.",
  "12. How you fall asleep reading.",
  "13. Your voice saying my name.",
  "14. The seriousness you put into silly things.",
  "15. When you teach me new things.",
  "16. How your eyes light up at sunsets.",
  "17. The smell of you when you hug me.",
  "18. The way you remember small details.",
  "19. Your courage to try new things.",
  "20. The way you say sorry — sincere and soft.",
  "21. You making playlists for us.",
  "22. Your love for the little misadventures.",
  "23. How you call dibs on the best seat.",
  "24. The way you make my family feel welcome.",
  "25. Your ridiculous movie reactions.",
  "26. How you hide snacks and then share them.",
  "27. Your sketches and doodles.",
  "28. The hoodie I stole and never gave back.",
  "29. The confidence you wear like a crown.",
  "30. Your terrible (but amazing) puns.",
  "31. How you make rain feel romantic.",
  "32. You turning boring chores into fun.",
  "33. How you hold your coffee.",
  "34. Your messy hair in the morning.",
  "35. The way you call me when you want company.",
  "36. Your determination when you set your mind.",
  "37. The secret nickname only I know.",
  "38. Your curiosity about everything.",
  "39. How you support my weird ideas.",
  "40. Your soft voice when you read aloud.",
  "41. The little dances you make up.",
  "42. Your taste in terrible 90s songs.",
  "43. How you plan things and still surprise me.",
  "44. Your honesty, even when it’s hard.",
  "45. The way you say goodnight.",
  "46. How you cheer for me louder than anyone.",
  "47. The way you squeeze my hand.",
  "48. You leaving notes in pockets.",
  "49. The smell of your jacket.",
  "50. Your appetite for adventure.",
  "51. How you let me be weird.",
  "52. Your quiet strength.",
  "53. The way you tease me lovingly.",
  "54. Your curiosity about my childhood stories.",
  "55. How you make a house feel like a home.",
  "56. The way you organize playlists by mood.",
  "57. That look you give when you’re proud.",
  "58. Your stubborn loyalty.",
  "59. How you forgive easily.",
  "60. Your silly morning routines.",
  "61. The passion you put into your art.",
  "62. How you make rainy days cozy.",
  "63. Your bravery in front of new things.",
  "64. The softness of your texts at night.",
  "65. Your fashion sense (yes, even the bold socks).",
  "66. You humming while you cook.",
  "67. How you challenge me to be better.",
  "68. Your weird but perfect sleep positions.",
  "69. When you cheer for small wins.",
  "70. Your smell on the pillow next to me.",
  "71. The way you plan silly dates.",
  "72. Your tears when something moves you.",
  "73. How you make me feel safe.",
  "74. Your quiet laughter in the dark.",
  "75. You bringing snacks just in case.",
  "76. The way you remember anniversaries.",
  "77. Your stubborn streak — I love it.",
  "78. How you read menus like a pro.",
  "79. Your silly impressions.",
  "80. How you always find the best spot to watch the sunset.",
  "81. Your curious questions at midnight.",
  "82. How you make simple meals special.",
  "83. The way you paint with big, brave strokes.",
  "84. Your courage to be vulnerable.",
  "85. The warmth of your hands on mine.",
  "86. How you stay up just to finish a show with me.",
  "87. Your handmade little surprises.",
  "88. How you dance in the rain unapologetically.",
  "89. Your silly faces when you concentrate.",
  "90. The way you check in on friends.",
  "91. How you invent nicknames for everything.",
  "92. The way you make a bad day manageable.",
  "93. Your obsession with tiny details.",
  "94. How you apologize with meaning.",
  "95. The way you take photos of the small things.",
  "96. Your late‑night snack runs.",
  "97. How you pick the perfect movie.",
  "98. Your tolerance for my jokes.",
  "99. How you keep secrets safe.",
  "100. Your silly competitiveness in games.",
  "101. The way you trace constellations with me.",
  "102. Your love for tiny plants.",
  "103. How you hum the same song for days.",
  "104. The way you hold my jacket on cold nights.",
  "105. Your slow, thoughtful smiles.",
  "106. How you make me tea just right.",
  "107. Your interest in stories I tell.",
  "108. The way you say 'we' when you plan.",
  "109. How you create cozy corners at home.",
  "110. Your thumbprints on my phone case.",
  "111. How you make a simple "hello" feel special.",
  "112. The way you look at me when I'm not looking.",
  "113. Your stubborn optimism.",
  "114. How you make a rainy afternoon magical.",
  "115. The way you encourage my weirdest ideas.",
  "116. Your playlist choices that always fit the moment.",
  "117. How you stay calm under pressure.",
  "118. The way you cook something new bravely.",
  "119. Your small acts of kindness to strangers.",
  "120. How you fix small things with big care.",
  "121. The secret language of your glances.",
  "122. How you hum while doing chores.",
  "123. Your choice of terrible puns that make me smile.",
  "124. The way you tuck your hair behind your ear.",
  "125. How you fold notes and save them.",
  "126. Your love for city walks at night.",
  "127. The soft groan you make when you laugh too hard.",
  "128. How you read recipes like they are poems.",
  "129. Your willingness to admit when you're wrong.",
  "130. The way you sketch ideas on napkins.",
  "131. How you plan surprises for others.",
  "132. Your gentle scold when I'm late.",
  "133. The way you keep our memories organized.",
  "134. How you show up when it matters most.",
  "135. Your silly secret dances.",
  "136. The way you fall asleep on my shoulder.",
  "137. How you support my bad haircut choices.",
  "138. Your early morning texts to say good morning.",
  "139. The way you cheer me up with one sentence.",
  "140. Your stubborn love that never quits.",
  "141. The way you believe in me even when I don't.",
  "142. Your hands in mine — forever feels right.",
  "143. I love you — in all small ways, every day."
];

// --- setup hearts
const heartsGrid = document.getElementById('heartsGrid');
function buildHearts(){
  heartsGrid.innerHTML = '';
  for(let i=0;i<143;i++){
    const div = document.createElement('button');
    div.className = 'heart';
    div.setAttribute('data-index', i);
    div.innerHTML = `<div class="inner"><div class="shape">❤</div><div class="msg">${MESSAGES[i]}</div></div>`;
    div.addEventListener('click', ()=>{div.classList.add('revealed');});
    heartsGrid.appendChild(div);
  }
}

// random reveal
document.addEventListener('DOMContentLoaded', ()=>{
  buildHearts();

  document.getElementById('revealRandom').addEventListener('click', ()=>{
    const unrevealed = Array.from(document.querySelectorAll('.heart')).filter(h=>!h.classList.contains('revealed'));
    if(unrevealed.length===0)return alert('All hearts opened!');
    const pick = unrevealed[Math.floor(Math.random()*unrevealed.length)];
    pick.classList.add('revealed');
    pick.scrollIntoView({behavior:'smooth',block:'center'});
  });

  // reset
  document.getElementById('resetHearts').addEventListener('click', ()=>{
    document.querySelectorAll('.heart').forEach(h=>h.classList.remove('revealed'));
  });

  // nav handling
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const sec = btn.getAttribute('data-section');
      document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
      document.getElementById(sec).classList.add('active');
      window.scrollTo({top:0,behavior:'smooth'});
    });
  });

  // timeline reveal on scroll
  const events = document.querySelectorAll('.event');
  function checkTimeline(){
    events.forEach(e=>{
      const r = e.getBoundingClientRect();
      if(r.top < window.innerHeight - 80) e.classList.add('visible');
    });
  }
  window.addEventListener('scroll', checkTimeline);
  checkTimeline();

  // polaroid flip
  document.querySelectorAll('.polaroid').forEach(p=>{
    p.addEventListener('click', ()=>{
      p.classList.toggle('flipped');
      if(p.classList.contains('flipped')){
        const note = p.getAttribute('data-note');
        const reveal = document.createElement('div');
        reveal.className = 'transient';
        reveal.textContent = note;
        document.body.appendChild(reveal);
        setTimeout(()=>reveal.remove(),1800);
      }
    });
  });

  // moods
  const moodMap = {
    cute: [
      "10 reasons I adore you: your laugh, your hands, your courage, your playlist, your messy mornings, your snacks, your notes, your hugs, your stubbornness, your soft 'I love you'.",
      "You make small things into memories — a parked car, a hoodie, a shared fry."
    ],
    spicy: [
      "1) I want to kiss you slow at sunrise. 2) I want to steal your jacket and your breath. 3) I want whispers under covers. 4) You and me on a tiny private beach. 5) Candlelight and no clocks. 6) Dance until we're breathless. 7) Feed you strawberries. 8) Birthday getaway all to ourselves."
    ],
    wholesome: [
      "Why you're the best: you are soft, honest, endlessly kind, and brave for the small things.",
      "Why I feel safe: your presence calms my panic and makes home wherever you are.",
      "Why I fell in love: you were real, messy, funny and somehow my perfect match."
    ]
  };
  document.querySelectorAll('.mood').forEach(b=>{
    b.addEventListener('click', ()=>{
      const mood = b.getAttribute('data-mood');
      const arr = moodMap[mood];
      const pick = arr[Math.floor(Math.random()*arr.length)];
      document.getElementById('moodDisplay').textContent = pick;
    });
  });

  // open-when letters
  const openWhen = {
    sad: `If you're sad, please breathe. I wish I could sit with you and press pause on the world. Remember the time we laughed in the dark at the Shell garage when the light went off — we laughed until we couldn't breathe. Let that laugh come back. Make tea, put on the playlist I made you, and know I'm only a call away. You are not your sadness. I love you beyond it.`,
    lonely: `When you're lonely, hold your phone close and read this: I'm here — even if I'm not there right now. Our future is full of mornings together, and every lonely night we get one step closer to each other. You are loved, always.`,
    miss: `If you miss me, imagine my arms. Imagine the smallest things: my hand finding yours in the dark, my stupid jokes, the way I steal the blanket. I'm coming back to you — until then, breathe and know I'm with you in every quiet moment.`,
    doubt: `If you doubt yourself, remember that you have already done brave things. You kissed me, you stayed, you showed up. Your scars are proof of your strength. I believe in you. We will build our dreams together — step by step.`,
    sleep: `Can't sleep? Picture the two of us on that birthday getaway: no alarms, just waves (or city lights), and you resting on my chest. Turn on low music, breathe with me for ten counts, and try to let the quiet carry you to sleep.`,
    stressed: `When you're stressed, make a small list: one thing I can help with, one thing you can let go, one thing to laugh about. Remember that stress is temporary; you are not. I'm here to carry weight with you.`,
    needsmile: `Need a smile? Remember when you tried to give me gum and it turned into the sweetest little peck — the cutest test I ever had. You have the power to turn a day around with one silly face. Smiling yet?`
  };
  document.querySelectorAll('.open-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      const key = b.getAttribute('data-key');
      document.getElementById('openDisplay').textContent = openWhen[key];
    });
  });

  // quiz
  const quizForm = document.getElementById('quizForm');
  quizForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const f = new FormData(quizForm);
    const answers = [f.get('q1').trim().toLowerCase(), f.get('q2').trim().toLowerCase(), f.get('q3').trim().toLowerCase(), f.get('q4').trim().toLowerCase(), f.get('q5').trim().toLowerCase()];
    let score = 0;
    if(answers[0].includes('where')===false) score++;
    if(answers[1].includes('mcdonald')||answers[1].includes('parking')||answers[1].includes('drive')) score++;
    if(answers[2].includes('hoodie')||answers[2].includes('jacket')) score++;
    if(answers[3].includes('westgate')||answers[3].includes('ice')||answers[3].includes('gum')) score++;
    if(answers[4].includes('poop')||answers[4].includes('shell')||answers[4].includes('bathroom')) score++;
    const res = score>=3 ? "Nice — you remember how our story began. I love that you keep the small things with you." : "Cute attempt — every day is a new memory. Either way, I love you and that's the most important answer.";
    document.getElementById('quizResult').textContent = res;
  });

  // shake to reveal (mobile)
  let lastShake = 0;
  if(window.DeviceMotionEvent){
    window.addEventListener('devicemotion', (e)=>{
      const acc = e.accelerationIncludingGravity;
      if(!acc) return;
      const total = Math.abs(acc.x)+Math.abs(acc.y)+Math.abs(acc.z);
      if(total>25 && Date.now()-lastShake>1200){
        lastShake = Date.now();
        const pick = "your real gift will come on 19 march at 01:00 exactly 143 hours before your birthday";
        const box = document.getElementById('shakeBox');
        box.textContent = pick;
        box.classList.add('shook');
      }
    });
  }

  // fallback click for desktop
  const shakeBox = document.getElementById('shakeBox');
  shakeBox.addEventListener('click', ()=>{
    shakeBox.textContent = "your real gift will come on 19 march at 01:00 exactly 143 hours before your birthday";
  });

  // miss me button
  const missMsgs = [
    "If I could, I'd send a thousand hugs right now.",
    "Remember: you are my favourite place to be.",
    "Counting the minutes until I see you again.",
    "I'm in your corner, always."
  ];
  document.getElementById('missMe').addEventListener('click', ()=>{
    const pick = missMsgs[Math.floor(Math.random()*missMsgs.length)];
    const d = document.getElementById('missDisplay');
    d.textContent = pick;
  });

  // gift box interaction
  const gift = document.getElementById('gift');
  const giftReveal = document.getElementById('giftReveal');
  let giftOpen = false;
  gift.addEventListener('click', ()=>{
    giftOpen = !giftOpen;
    if(giftOpen){
      gift.classList.add('open');
      gift.setAttribute('aria-pressed','true');
      const snippet = MESSAGES[142].slice(0,28) + '...';
      giftReveal.textContent = snippet + ' — Real gift: a surprise birthday getaway. See full gift on 19 March at 01:00.';
    } else {
      gift.classList.remove('open');
      gift.setAttribute('aria-pressed','false');
      giftReveal.textContent = '(closed)';
    }
  });

  // small transient message effect for polaroids
  (function(){
    const style = document.createElement('style');
    style.innerHTML = `.transient{position:fixed;left:50%;top:20%;transform:translateX(-50%);background:var(--card);padding:10px 14px;border-radius:8px;z-index:9999}`;
    document.head.appendChild(style);
  })();

  // accessible keyboard support
  document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape'){
      document.querySelectorAll('.heart').forEach(h=>h.classList.remove('revealed'));
    }
  });

});