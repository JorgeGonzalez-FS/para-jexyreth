const sections = ['inicio','historia','carta','estrellas','final'];
const showSection = id => {
  sections.forEach(s => document.getElementById(s).classList.toggle('hidden', s !== id));
  window.scrollTo({top:0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
};
document.getElementById('beginBtn').addEventListener('click', () => showSection('historia'));
document.getElementById('toLetterBtn').addEventListener('click', () => showSection('carta'));
document.getElementById('toStarsBtn').addEventListener('click', () => showSection('estrellas'));
document.getElementById('toEndingBtn').addEventListener('click', () => showSection('final'));
document.getElementById('restartBtn').addEventListener('click', () => {
  document.getElementById('letterText').classList.add('hidden');
  document.getElementById('toStarsBtn').classList.add('hidden');
  document.getElementById('envelopeBtn').classList.remove('open');
  document.getElementById('envelopeHint').textContent = 'Toca el sobre para abrir tu carta';
  showSection('inicio');
});
document.getElementById('envelopeBtn').addEventListener('click', () => {
  const envelope = document.getElementById('envelopeBtn');
  if (!envelope.classList.contains('open')) {
    envelope.classList.add('open');
    document.getElementById('envelopeHint').textContent = 'Tu carta está lista…';
    window.setTimeout(() => {
      document.getElementById('letterText').classList.remove('hidden');
      document.getElementById('toStarsBtn').classList.remove('hidden');
      document.getElementById('letterText').scrollIntoView({behavior:'smooth', block:'start'});
    }, 650);
  }
});
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', () => {
    const card = document.getElementById('messageCard');
    card.textContent = star.dataset.message;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && typeof card.animate === 'function') {
      card.animate([{opacity:.45, transform:'translateY(5px)'},{opacity:1, transform:'translateY(0)'}], {duration:250});
    }
  });
});
const start = new Date(2026, 5, 26);
const today = new Date();
today.setHours(0,0,0,0);
const days = Math.max(0, Math.floor((today - start) / 86400000));
document.getElementById('dayCounter').textContent = days.toLocaleString('es-ES');
