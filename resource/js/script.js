//automatic date
const y = new Date();
document.getElementById('date').innerHTML = y.getFullYear();

//disable right click
const body = document.querySelector('body');
body.setAttribute('oncontextmenu', 'return false');