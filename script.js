const paletteDiv = document.getElementById('palette');
const generateBtn = document.getElementById('generate');
const message = document.getElementById('message');

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0').toUpperCase();
}

function createPalette(num = 5) {
  paletteDiv.innerHTML = '';
  for (let i = 0; i < num; i++) {
    const color = randomColor();
    const box = document.createElement('div');
    box.className = 'color-box';
    box.style.background = color;
    box.textContent = color;
    box.title = 'Clique para copiar';
    box.onclick = () => {
      navigator.clipboard.writeText(color);
      message.textContent = `Cor ${color} copiada!`;
      setTimeout(() => message.textContent = '', 1500);
    };
    paletteDiv.appendChild(box);
  }
}

generateBtn.onclick = () => createPalette();

window.onload = () => createPalette();
