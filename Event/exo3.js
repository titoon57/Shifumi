const square = document.getElementById('square');
const container = document.getElementById('container');

document.addEventListener('keydown', (event) => {
  let x = parseInt(square.style.left);
  let y = parseInt(square.style.top);
  
  switch (event.key) {
    case 'ArrowUp':
      if (y > 0) {
        square.style.top = y - 10 + 'px';
      }
      break;
    case 'ArrowDown':
      if (y < container.clientHeight - square.clientHeight) {
        square.style.top = y + 10 + 'px';
      }
      break;
    case 'ArrowLeft':
      if (x > 0) {
        square.style.left = x - 10 + 'px';
      }
      break;
    case 'ArrowRight':
      if (x < container.clientWidth - square.clientWidth) {
        square.style.left = x + 10 + 'px';
      }
      break;
    default:
      break;
  }
});