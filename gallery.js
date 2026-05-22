function openlb(el) {
  document.getElementById('lb-img').src = el.querySelector('img').src;
  document.getElementById('lb-cap').textContent = el.querySelector('.cap').textContent;
  document.getElementById('lb').classList.add('on');
}

function closelb() {
  document.getElementById('lb').classList.remove('on');
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closelb();
});
