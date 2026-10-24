'use strict';
/* ============ CONFIGURACIÓN: edita aquí textos y canciones ============ */
const CONTENT = {
  inicioTitulo: 'Para Nani',
  inicioFrase: 'Hay historias que merecen ser recordadas con cariño.',
  inicioBoton: 'Comenzar',
  amistadTitulo: 'Amistad',   amistadTexto: 'La RAE define la amistad como un afecto personal y desinteresado hacia otra persona. Pero una definición no alcanza para explicar lo que significa una amistad de verdad.\n\nAmistad también es apoyarse, como cuando me diste una mano para dirigir el grupo, aunque no te dieran el crédito que merecías. Son las risas, las bromas y todos esos buenos recuerdos que compartimos durante años. Es que bastara con verte y saludarte para que mi día mejorara un poquito.\n\nPero, si soy sincero, para mí nunca fue solamente amistad.\n\nSiempre hubo algo en ti que llamaba mi atención: esos ojos hermosos que todavía recuerdo con anhelo, tu pelo ondulado y esa sonrisa tan sincera. Supe que empezabas a significar algo más cuando me ponía nervioso cerca de ti, cuando evitaba mencionarte para disimular lo que realmente sentía.\n\nY ese sentimiento se intensificó.\n\nSe intensificó cuando Erick nos dejó solos en un cuarto. Cuando teníamos conversaciones en las que parecíamos olvidarnos del resto y la conexión entre nosotros se sentía genuina. Cuando hacíamos equipo en los deportes. Y cuando Palacios nos puso a bailar y sentí el corazón acelerarse sin saber muy bien qué hacer con todo aquello que llevaba dentro.\n\nAun así, nunca me atreví a decirte nada. Me guardé lo que sentía y dejé que nuestra historia siguiera siendo una amistad. Una amistad con una mujer a la que admiraba, que me hacía bien y que, sin saberlo, ya empezaba a ocupar un lugar diferente en mi vida.',
  dudaTitulo: 'Duda',         dudaTexto: 'Un año después, nuestros caminos volvieron a cruzarse. Esta vez, en los pasillos de una universidad. Y aunque había pasado el tiempo, seguíamos siendo capaces de encontrarnos entre conversaciones, risas y esos planes de salir algún día que siempre terminaban quedándose en palabras.\n\nLa verdad es que nada había cambiado demasiado entre nosotros. Creo que el que había cambiado era yo, o al menos estaba aprendiendo a serlo. Porque esta vez decidí dejar de tener miedo e intentarlo.\n\nAsí que un día hice realidad aquella idea de salir juntos y te invité a comer algo. Y, mientras llegaba el día, empezamos a hablarnos más. Nos compartíamos memes, nos contábamos cómo había estado nuestro día y, poco a poco, nuestras conversaciones fueron tomando más confianza, hasta llegar a tener una complicidad que no recordaba haber tenido contigo antes.\n\nLo curioso es que yo llegué a esa primera cita lleno de dudas. Al principio, ni siquiera tenía intenciones de que pasara algo entre nosotros. Creía que aquellos sentimientos que había tenido en el colegio ya habían desaparecido. Pero bastó una semana hablando contigo para darme cuenta de que quizás nunca se habían ido del todo.\n\nY entonces llegó aquella salida.\n\nFuimos a comer a un restaurante italiano. Tú pediste una carbonara y yo una Alfredo. Hablamos durante horas, tomamos un poco y, cuando llegó el momento de llevarte a tu casa, me despedí de ti con una sensación que no me abandonó en todo el camino de vuelta: me había quedado con las ganas de besarte.\n\nNuestra segunda salida fue diferente. Recuerdo que te habías pintado las uñas el día anterior y que, en algún momento, terminé tomándote de la mano. Cuando llegamos a tu casa, volví a despedirme de ti como si aquella fuera una salida cualquiera. Pero, antes de que te bajaras del carro, algo en mí pudo más que todas las dudas que llevaba encima. Te tomé suavemente de la mandíbula y te besé.\n\nY creo que, por primera vez, dejé de preguntarme qué habría pasado si lo hubiera intentado antes.\n\nPara nuestra tercera salida fuimos a un parque. No hubo restaurante, ni una cena especial, ni siquiera un plan que necesitara dinero. Éramos tú, yo y una conversación que se extendió durante horas. Y fue ahí donde empecé a entender que no necesitaba grandes planes para disfrutar de tu compañía. Bastaba con tenerte enfrente y poder seguir hablando contigo.\n\nPero las dudas no desaparecieron con aquel beso ni con aquella conversación.\n\nPorque, para entonces, ya había empezado a darme cuenta de lo que sentía por ti, y eso me asustaba. Me di cuenta de que te amaba sin haber amado antes, de que estaba entrando en una etapa de mi vida que no conocía y para la que no sabía si estaba preparado.\n\nTenía miedo de no ser suficiente, de ser rechazado, de lo que pudieran pensar los demás. Miedo de elegir mal, de empezar algo para lo que todavía no me sentía listo, de ir demasiado rápido y, al mismo tiempo, de sentir demasiado. Tenía tantas dudas que, a veces, no sabía qué hacer con todo lo que estaba sintiendo.\n\nPero había algo que empezaba a tener claro: no quería que el miedo volviera a decidir por mí.\n\nDurante aquel año en que nuestros caminos estuvieron separados, aprendí que la vida a veces nos da segundas oportunidades. Y yo no quería desperdiciar la mía.\n\nNo sabía cómo se suponía que debía amar, ni tenía experiencia para asegurar que todo saldría bien. No tenía respuestas para todas mis dudas ni garantías de que estaba tomando la decisión correcta.\n\nPero tenía ganas de intentarlo contigo.\n\nY, para alguien que durante tanto tiempo prefirió guardar lo que sentía antes que arriesgarse a perderlo, eso ya significaba mucho.',
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
document.querySelectorAll('[data-t]').forEach(el => {
  const partes = (CONTENT[el.dataset.t] ?? '').split('\n\n');   // un párrafo real por cada \n\n
  el.textContent = partes[0];
  if (el.closest('.texto')) el.after(...partes.slice(1).map(x => Object.assign(document.createElement('p'), { textContent: x })));
});$('.acrostico').innerHTML = ACROSTICO.map(([l, p]) => `<li><b aria-hidden="true">${l}</b><span>${p}</span></li>`).join('');

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
    console.log('[musica] usando reproductor simple (sin control por código)');
    plain = true; embed.innerHTML = '';
    const f = document.createElement('iframe'); f.title = 'Reproductor de Spotify'; f.allow = 'autoplay; encrypted-media';
    f.src = `https://open.spotify.com/embed/track/${c.id}`; embed.append(f);
  };
  const tocar = () => { if (quiere && ctrl) { quiere = false; ctrl.play(); } };
  // Repite la canción (o el fragmento de 30 s) cuando termina sola. Una pausa manual no la reinicia.
  const activaBucle = C => {
    let sonaba = false, ult = 0, ultEvento = 0;
    const repite = () => { sonaba = false; console.log('[musica] repitiendo'); C.seek(0); C.play(); };
    C.addListener('playback_update', e => {
      const d = e.data || {};
      console.log('[musica]', 'pausa:', d.isPaused, 'pos:', d.position, 'dur:', d.duration);   // diagnóstico
      ultEvento = Date.now();
      if (!d.isPaused) { sonaba = true; ult = d.position; return; }
      const termino = sonaba && (d.position <= 1000 || (d.duration && ult >= d.duration - 1500));
      sonaba = false;
      if (termino) repite();
    });
    // Si la reproducción se corta sin avisar (dejan de llegar eventos mientras sonaba), también repite
    setInterval(() => { if (sonaba && Date.now() - ultEvento > 3000) repite(); }, 1000);
  };
  const suena = () => {
    const c = cur(), uri = `spotify:track:${c.id}`; quiere = true;
    if (plain) return plano(c);
    if (ctrl) { const p = ctrl.loadUri(uri); p && p.then && p.then(tocar); return; }
    cargaApi().then(API => {
      if (plain || ctrl) return;
      const host = document.createElement('div'); embed.innerHTML = ''; embed.append(host);
      API.createController(host, { uri, width: '100%', height: 80 }, C => {
        ctrl = C; C.addListener('ready', tocar);
        activaBucle(C);
      });
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