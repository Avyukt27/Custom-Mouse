const colours = ['#00d492', '#51a2ff', '#e12afb'];

const selectRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 100);

  const star = document.createElement('div');
  star.className = 'star fa-solid fa-star';
  star.style.left = `${mouseX}px`;
  star.style.top = `${mouseY}px`;
  star.style.color = selectRandom(colours);
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1500);
})
