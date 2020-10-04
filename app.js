const showCode = document.getElementById('show-code');
// console.log(showCode.childNodes[1]);
const keySpan = document.querySelector('.keySpan');
const keyCodeSpan = document.querySelector('.keyCodeSpan');
const keyColor = document.getElementById('keyColor');
const keyCodeColor = document.getElementById('keyCodeColor');

window.addEventListener('keyup', e => {
  if (e.key === ' ' || e.key === 'Enter') {
    keyColor.style.display = 'inline-flex';
    keySpan.textContent = e.code;
  } else {
    keyColor.style.display = 'inline-flex';
    keySpan.textContent = e.key;
  }
  keyCodeColor.style.display = 'inline-flex';
  keyCodeSpan.textContent = e.which;
});

// cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top: ' + (e.pageY - 15) + 'px; left: ' + (e.pageX - 15) + 'px;');
});

document.addEventListener('click', () => {
  cursor.classList.add('expand');

  setTimeout(() => {
    cursor.classList.remove('expand');
  }, 500);
});
