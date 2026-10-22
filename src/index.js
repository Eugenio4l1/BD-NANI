const imagenes = [
  "img/imagen1.jpg",
  "img/imagen2.jpg",
  "img/retrato-mural.png",
  "img/retrato-popart.png",
  "img/jardin.png"
];

const galeria = document.getElementById("galeria");

imagenes.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = src;
  galeria.appendChild(img);
});