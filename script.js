document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;
  document.body.appendChild(dot);
  
  setTimeout(() => document.body.removeChild(dot), 50);
})
