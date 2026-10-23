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
  ultimaFrase: 'EDITAR: última frase breve y serena',
  playlistTexto: 'Si quieres, aquí está toda la música de esta historia, para escucharla con calma.'
};
const ACROSTICO = [['M','Maravillosa'],['U','Única'],['J','Juiciosa'],['E','Encantadora'],['R','Reina']];
// Canciones por etapa. Opcional: agrega id:'ID_DE_SPOTIFY' (lo que va después de /track/ en el enlace)
// para enlazar la canción exacta y permitir el reproductor integrado. Sin id se usa una búsqueda en Spotify.
const ETAPAS = {
  amistad: { nombre: 'Amistad', canciones: [
    { t: 'Umbrella', a: 'Rihanna', id: '49FYlytm3dAAraYgpoJZux' }, { t: 'Rude', a: 'MAGIC!', id: '022uhFttW9NauVhtsXYCI6' }] },
  duda: { nombre: 'Duda', canciones: [
    { t: 'Cosita Linda', a: 'Elena Rose', id: '6tNGSjIgbSp3B2LOWumkJ0' }, { t: 'Sonrisa de Payaso', a: 'Gona', id: '3bLuJFLax7afN8NKoiohbr' },
    { t: 'El y ella', a: 'Gona', id: '0nE9mOurWKidlO4ZH3vfSU' }] },
  enamoramiento: { nombre: 'Enamoramiento', canciones: [
    { t: 'Canela', a: 'Nanpa Básico', id: '592R1yDJZI1NUKHpjyLCua' }, { t: 'Lova', a: 'Movimiento Original', id: '4aYhFY9ITenqSodAXyOeGg' },
    { t: 'Querer querernos', a: 'Canserbero', id: '6d3q0F9VNtdxQUTVlRcet6' }, { t: 'Le pido a Dios', a: 'Feid', id: '4TFNKnMWjcMWzpkSwQrrcu' },
    { t: 'Sin excusas', a: 'Santa RM', id: '16fDK0NdQzfH2zKhapWVDo' }, { t: 'Pibe Romántico', a: 'Arzaone', id: '3wX7lqsW2ZO61RnnVVHAoa' }] },
  nostalgia: { nombre: 'Nostalgia', canciones: [
    { t: 'Paisajes', a: 'Gera MX', id: '7jootLrnGZWnVzHv6qjHqy' }, { t: 'Como dormiste', a: 'Rels B', id: '3fjN3y5x4hN53rykAN2LHQ' },
    { t: 'Stupid Love Story', a: 'Canserbero', id: '2dAyefEhtK9v7dz3Z74thD' }, { t: 'El reloj del corazón', a: 'Gera MX', id: '5q20ChVvFID1D8wL6TSxjm' },
    { t: 'Luna', a: 'Feid', id: '7bywjHOc0wSjGGbj04XbVi' }] }
};
/* ======================================================================= */

const $ = (s, r = document) => r.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Contenido */
document.querySelectorAll('[data-t]').forEach(el => el.textContent = CONTENT[el.dataset.t] ?? '');
$('.acrostico').innerHTML = ACROSTICO.map(([l, p]) => `<li><b aria-hidden="true">${l}</b><span>${p}</span></li>`).join('');

/* Reproductor: sugiere y reproduce SOLO tras un toque de la persona (Escuchar, Lista o Continuar) */
const Player = (() => {
  const root = $('#musica'), panel = $('#mPanel'), lista = $('#mLista'), embed = $('#mEmbed'), tog = $('#mToggle');
  let etapa = null, sel = 0, ctrl = null, apiP = null, plain = false, quiere = false;
  const cur = () => ETAPAS[etapa].canciones[sel];
  const link = c => `https://open.spotify.com/track/${c.id}`;
  const pinta = () => {
    const c = cur();
    $('#mEtapa').textContent = ETAPAS[etapa].nombre;
    $('#mTitulo').textContent = c.t; $('#mArtista').textContent = c.a;
    const l = $('#mEscuchar'); l.href = link(c); l.setAttribute('aria-label', `Escuchar ${c.t} de ${c.a} (reproductor de Spotify)`);
    [...lista.children].forEach((li, i) => li.firstChild.setAttribute('aria-pressed', i === sel));
  };
  const lee = () => {
    lista.innerHTML = '';
    ETAPAS[etapa].canciones.forEach((c, i) => {
      const li = document.createElement('li'), b = document.createElement('button');
      b.textContent = `${c.t} — ${c.a}`; b.setAttribute('aria-pressed', 'false');
      b.onclick = () => { sel = i; pinta(); suena(); };
      li.append(b); lista.append(li);
    });
  };
  // iFrame API de Spotify (cargar y reproducir por código); si falla, iframe simple y la persona toca play
  const cargaApi = () => apiP ||= new Promise((ok, no) => {
    window.onSpotifyIframeApiReady = ok;
    const s = document.createElement('script'); s.src = 'https://open.spotify.com/embed/iframe-api/v1'; s.async = true; s.onerror = no;
    document.head.append(s); setTimeout(no, 5000);
  });
  const plano = c => {
    plain = true; embed.innerHTML = '';
    const f = document.createElement('iframe'); f.title = 'Reproductor de Spotify'; f.allow = 'autoplay; encrypted-media';
    f.src = `https://open.spotify.com/embed/track/${c.id}`; embed.append(f);
  };
  const tocar = () => { if (quiere && ctrl) { quiere = false; ctrl.play(); } };
  const suena = () => {
    const c = cur(), uri = `spotify:track:${c.id}`; quiere = true;
    if (plain) return plano(c);
    if (ctrl) { const p = ctrl.loadUri(uri); p && p.then && p.then(tocar); return; }
    cargaApi().then(API => {
      if (plain || ctrl) return;
      const host = document.createElement('div'); embed.innerHTML = ''; embed.append(host);
      API.createController(host, { uri, width: '100%', height: 80 }, C => { ctrl = C; C.addListener('ready', tocar); });
      setTimeout(() => { if (!ctrl) plano(cur()); }, 5000);
    }).catch(() => plano(cur()));
  };
  $('#mEscuchar').onclick = e => { e.preventDefault(); suena(); };
  tog.onclick = () => { const o = panel.hidden; panel.hidden = !o; tog.setAttribute('aria-expanded', o); };
  return {
    stage(s) {
      if (!ETAPAS[s]) { if (s === 'inicio') root.hidden = true; return; }
      root.hidden = false;
      if (s === etapa) return;
      etapa = s; sel = 0; lee(); pinta();
    },
    suena
  };
})();

/* Pantallas: una a la vez, con botones Atrás / Continuar */
const PANT = [...document.querySelectorAll('main > section')];
let actual = 0;
function ir(i, conMusica) {
  actual = Math.max(0, Math.min(PANT.length - 1, i));
  PANT.forEach((s, k) => s.classList.toggle('activa', k === actual));
  const sc = PANT[actual].dataset.scene;
  Player.stage(sc);
  if (conMusica && ETAPAS[sc]) Player.suena();   // el toque en el botón es lo que permite iniciar el audio
  window.scrollTo(0, 0);
  PANT[actual].focus({ preventScroll: true });
}
PANT.forEach((s, k) => {
  s.tabIndex = -1;
  if (k === 0) return;
  const n = document.createElement('nav'); n.className = 'pasos'; n.setAttribute('aria-label', 'Navegación');
  n.innerHTML = '<button type="button" class="atras">Atrás</button>' + (k < PANT.length - 1 ? '<button type="button" class="sig">Continuar</button>' : '');
  n.querySelector('.atras').onclick = () => ir(k - 1, true);
  n.querySelector('.sig')?.addEventListener('click', () => ir(k + 1, true));
  s.append(n);
});
$('#btnStart').onclick = () => ir(1, true);
document.body.classList.add('paginas');
ir(0, false);

/* Acróstico y frase final: aparición progresiva */
const lis = [...document.querySelectorAll('.acrostico li')];
const io2 = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { lis.forEach((li, i) => setTimeout(() => li.classList.add('on'), reduce ? 0 : i * 700)); io2.disconnect(); }
}), { threshold: 0.3 });
io2.observe($('.acrostico'));

/* Oso: gira al tocarlo; la rosa se cambia por el anillo (ratón, táctil y teclado) */
const oso = $('#oso'), osoIn = $('.domo');
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