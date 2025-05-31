const imagens = [
  'img/homus1.webp',
  'img/homus2.jpg',
  'img/homus3.webp',
  'img/homus4.avif'
];

let indiceAtual = 0;
const imagemElemento = document.getElementById('carousel-image');

function mostrarImagem(index) {
  imagemElemento.src = imagens[index];
}

function avancarImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem(indiceAtual);
}

function voltarImagem() {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  mostrarImagem(indiceAtual);
}

document.getElementById('proximo').addEventListener('click', avancarImagem);
document.getElementById('anterior').addEventListener('click', voltarImagem);
