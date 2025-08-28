const bulb = document.getElementById('bulb');
const btn = document.getElementById('toggleBtn');
let isOn = false;

btn.addEventListener('click', () => {
  isOn = !isOn;
  if(isOn) {
    bulb.classList.remove('off');
    bulb.classList.add('on');
    btn.textContent = 'Turn OFF';
  } else {
    bulb.classList.remove('on');
    bulb.classList.add('off');
    btn.textContent = 'Turn ON';
  }
});