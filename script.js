
// Shared JS for multi-page site
document.addEventListener('DOMContentLoaded', ()=>{
  // nav active based on path
  const navLinks = document.querySelectorAll('a.navlink');
  navLinks.forEach(a=>{
    if(location.pathname.endsWith(a.getAttribute('href')) || (a.getAttribute('href')==='index.html' && location.pathname.endsWith('/'))){
      a.style.borderColor='rgba(138,92,255,0.9)'; a.style.color='var(--accent)';
    }
  });

  // HEARTS page
  const heartsGrid = document.getElementById('heartsGrid');
  if(heartsGrid){
    const MESSAGES = JSON.parse(document.getElementById('messagesData').textContent);
    function buildHearts(){
      heartsGrid.innerHTML='';
      for(let i=0;i<MESSAGES.length;i++){
        const btn=document.createElement('button'); btn.className='heart'; btn.setAttribute('data-i',i);
        btn.innerHTML=`<div class="inner"><div class="shape">❤</div><div class="msg">${MESSAGES[i]}</div></div>`;
        btn.addEventListener('click', ()=>{btn.classList.add('revealed');});
        heartsGrid.appendChild(btn);
      }
    }
    buildHearts();
    const revealRandom=document.getElementById('revealRandom');
    if(revealRandom) revealRandom.addEventListener('click', ()=>{
      const unrevealed=Array.from(document.querySelectorAll('.heart')).filter(h=>!h.classList.contains('revealed'));
      if(!unrevealed.length) return alert('All opened!');
      const pick=unrevealed[Math.floor(Math.random()*unrevealed.length)]; pick.classList.add('revealed'); pick.scrollIntoView({behavior:'smooth',block:'center'});
    });
    const resetHearts=document.getElementById('resetHearts');
    if(resetHearts) resetHearts.addEventListener('click', ()=>{document.querySelectorAll('.heart').forEach(h=>h.classList.remove('revealed'));});
  }

  // POLAROID page flip placeholder
  document.querySelectorAll('.polaroid').forEach(p=>p.addEventListener('click', ()=>{
    const note=p.getAttribute('data-note'); alert(note);
  }));

  // open-when letters
  document.querySelectorAll('.open-btn').forEach(b=>b.addEventListener('click', ()=>{
    const key=b.getAttribute('data-key'); const dataEl=document.getElementById('openWhenData');
    if(dataEl) document.getElementById('openDisplay').textContent=JSON.parse(dataEl.textContent)[key];
  }));

  // quiz simple handler
  const quizForm=document.getElementById('quizForm');
  if(quizForm){
    quizForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const f=new FormData(quizForm);
      const answers=[f.get('q1')||'',f.get('q2')||'',f.get('q3')||'',f.get('q4')||'',f.get('q5')||''].map(s=>s.toLowerCase());
      let score=0;
      if(answers[1].includes('mcdonald')||answers[1].includes('parking')||answers[1].includes('drive')) score++;
      if(answers[3].includes('westgate')||answers[3].includes('gum')||answers[3].includes('ice')) score++;
      const res = score>=1 ? 'Nice — you remember our moments.' : 'Cute attempt — I still love you.';
      document.getElementById('quizResult').textContent=res;
    });
  }

  // shake reveal fallback click
  const shakeBox=document.getElementById('shakeBox');
  if(shakeBox) shakeBox.addEventListener('click', ()=>{shakeBox.textContent='your real gift will come on 19 march at 01:00 exactly 143 hours before your birthday';});

  // miss-me button
  const missMe=document.getElementById('missMe');
  if(missMe) missMe.addEventListener('click', ()=>{
    const msgs=['If I could, I'd send a thousand hugs right now.','You are my favourite place to be.','Counting the minutes until I see you again.','I'm in your corner, always.'];
    document.getElementById('missDisplay').textContent = msgs[Math.floor(Math.random()*msgs.length)];
  });

  // gift box open
  const gift=document.getElementById('gift');
  if(gift) gift.addEventListener('click', ()=>{
    gift.classList.toggle('open');
    const reveal=document.getElementById('giftReveal');
    if(gift.classList.contains('open')) reveal.textContent = '143... I love you — snippet: "I love you — in all small ways". Full gift revealed 19 March 01:00.';
    else reveal.textContent='(closed)';
  });
});
