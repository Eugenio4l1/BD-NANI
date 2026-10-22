'use strict';
/* ============ CONFIGURACIÓN: edita aquí textos y canciones ============ */
const CONTENT = {
  inicioTitulo: 'Para Nani',
  inicioFrase: 'Hay historias que merecen ser recordadas con cariño.',
  inicioBoton: 'Comenzar',
  amistadTitulo: 'Amistad',   amistadTexto: 'EDITAR: texto personal de Amistad',
  dudaTitulo: 'Duda',         dudaTexto: 'EDITAR: texto personal de Duda',
  popTitulo: 'Enamoramiento', popTexto: 'EDITAR: texto personal de Enamoramiento',
  nostalgiaTitulo: 'Nostalgia', nostalgiaTexto: 'EDITAR: texto personal de Nostalgia',
  cumpleTitulo: 'Feliz cumpleaños', cumpleTexto: 'EDITAR: mensaje personal de cumpleaños (deseos de felicidad, tranquilidad y oportunidades)',
  osoPista: 'Toca el oso',
  ultimaFrase: 'EDITAR: última frase breve y serena'
};
const ACROSTICO = [['M','Maravillosa'],['U','Única'],['J','Juiciosa'],['E','Encantadora'],['R','Reina']];
// Escena -> canción. Coloca los MP3 en audio/ (null = sin música en esa escena)
const SONGS = {
  inicio: 'audio/inicio.mp3', amistad: 'audio/amistad.mp3', duda: 'audio/duda.mp3',
  enamoramiento: 'audio/enamoramiento.mp3', nostalgia: 'audio/nostalgia.mp3',
  cumple: 'audio/cumple.mp3', cielo: 'audio/cielo.mp3'
};
const VOLUME = 0.7, FADE_MS = 1500;
/* ======================================================================= */

const $ = (s, r = document) => r.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Contenido */
document.querySelectorAll('[data-t]').forEach(el => el.textContent = CONTENT[el.dataset.t] ?? '');
$('.acrostico').innerHTML = ACROSTICO.map(([l, p]) => `<li><b aria-hidden="true">${l}</b><span>${p}</span></li>`).join('');

/* Música: un solo <audio>, fundidos, sin reiniciar la misma canción */
const Music = (() => {
  const a = new Audio(); a.loop = true; a.preload = 'none'; a.volume = 0;
  let wanted = null, enabled = false, muted = false, timer = 0;
  const target = () => (muted ? 0 : VOLUME);
  const fade = (to, done) => {
    clearInterval(timer);
    const step = (to - a.volume) / (FADE_MS / 50);
    timer = setInterval(() => {
      const v = a.volume + step;
      if ((step >= 0 && v >= to) || (step < 0 && v <= to)) { a.volume = Math.max(0, Math.min(1, to)); clearInterval(timer); done?.(); }
      else a.volume = Math.max(0, Math.min(1, v));
    }, 50);
  };
  const apply = () => {
    if (!enabled) return;
    const src = wanted && SONGS[wanted];
    if (!src) return fade(0, () => a.pause());
    if (a.dataset.src === src) { a.paused && a.play().catch(() => {}); return fade(target()); }
    fade(0, () => {
      a.src = a.dataset.src = src;
      a.play().then(() => fade(target())).catch(() => {});
    });
  };
  a.addEventListener('error', () => {});
  return {
    scene(s) { wanted = s; apply(); },
    toggle() { enabled = !enabled; if (!enabled) fade(0, () => a.pause()); else apply(); return enabled; },
    start() { enabled = true; apply(); return true; },
    mute() { muted = !muted; if (enabled) fade(target()); return muted; }
  };
})();

/* Controles de audio */
const bPlay = $('#btnPlay'), bMute = $('#btnMute');
bPlay.onclick = () => bPlay.setAttribute('aria-pressed', Music.toggle());
bMute.onclick = () => bMute.setAttribute('aria-pressed', Music.mute());
$('#btnStart').onclick = () => {
  bPlay.setAttribute('aria-pressed', Music.start());
  $('#amistad').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
};

/* Sección activa: IntersectionObserver */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) Music.scene(e.target.dataset.scene);
}), { threshold: 0.55 });
document.querySelectorAll('[data-scene]').forEach(s => io.observe(s));

/* Acróstico y frase final: aparición progresiva */
const lis = [...document.querySelectorAll('.acrostico li')];
const io2 = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { lis.forEach((li, i) => setTimeout(() => li.classList.add('on'), reduce ? 0 : i * 700)); io2.disconnect(); }
}), { threshold: 0.3 });
io2.observe($('.acrostico'));

/* Oso: gira al tocarlo; la rosa se cambia por el anillo (ratón, táctil y teclado) */
const oso = $('#oso'), osoIn = $('#osoIn');
oso.addEventListener('click', () => {
  const on = oso.getAttribute('aria-pressed') !== 'true';
  oso.setAttribute('aria-pressed', on);
  osoIn.classList.remove('gira'); void osoIn.offsetWidth; osoIn.classList.add('gira');
  $('#pista').hidden = true;
  $('#ultima').classList.toggle('on', on);
  oso.setAttribute('aria-label', on ? 'Oso rojo mostrando el anillo: toca para volver a ver la rosa' : 'Oso rojo con una rosa en la pancita: toca para ver el anillo');
});

/* Al llegar al final, el fondo cambia al cielo estrellado */
new IntersectionObserver(es => es.forEach(e => document.body.classList.toggle('noche', e.isIntersecting)), { threshold: 0.2 }).observe($('#cielo'));