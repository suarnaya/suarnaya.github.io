//automatic date
const y = new Date();
document.getElementById('date').innerHTML = y.getFullYear();

//disable right click
const body = document.querySelector('body');
body.setAttribute('oncontextmenu', 'return false');

// animate logo name
const logo = document.querySelector('.yellow-box');
const huruf = [...logo.textContent].map((h) => `<span>${h}</span>`).join('');
logo.innerHTML = huruf;
