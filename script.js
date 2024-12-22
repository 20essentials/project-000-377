const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let $width = (canvas.width = window.innerWidth);
let $heigt = (canvas.height = window.innerHeight);
let columns = ~~($width / 24);
let rows = ~~($width / 24);
let saverTimeOut = null;

const resizeCanvas = () => {
  $width = canvas.width = window.innerWidth;
  $heigt = canvas.height = window.innerHeight;
  columns = ~~($width / 24);
  rows = ~~($heigt / 24);
};

const COLOR = [
  'blue',
  'red',
  'springgreen',
  'yellow',
  'dodgerblue',
  'orange',
  'yellow',
  'springgreen',
  'red',
  'blue'
];

let contador = 9;
let modulo = 10;

const drawCanvas = () => {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(12.5 + col * 25, 12.5 + row * 25, 10, 0, Math.PI * 2);
      ctx.stroke();
      const gradient = ctx.createLinearGradient(0, 0, $width, $heigt);
      gradient.addColorStop('0.05', COLOR[(0 + contador) % modulo]);
      gradient.addColorStop('0.15', COLOR[(1 + contador) % modulo]);
      gradient.addColorStop('0.25', COLOR[(2 + contador) % modulo]);
      gradient.addColorStop('0.35', COLOR[(3 + contador) % modulo]);
      gradient.addColorStop('0.45', COLOR[(4 + contador) % modulo]);
      gradient.addColorStop('0.55', COLOR[(5 + contador) % modulo]);
      gradient.addColorStop('0.65', COLOR[(6 + contador) % modulo]);
      gradient.addColorStop('0.75', COLOR[(7 + contador) % modulo]);
      gradient.addColorStop('0.85', COLOR[(8 + contador) % modulo]);
      gradient.addColorStop('0.95', COLOR[(9 + contador) % modulo]);
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }

  contador++;
  saverTimeOut = setTimeout(() => drawCanvas(), 100);
};

document.addEventListener('DOMContentLoaded', _ => {
  drawCanvas();

  window.addEventListener('resize', () => {
    resizeCanvas();
    if (saverTimeOut) {
      clearTimeout(saverTimeOut);
      drawCanvas();
    }
  });
});
