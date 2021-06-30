const NAVBUTON = document.getElementById('show-nav');
const navLIst = document.getElementById('show-ln');

const tooGleNav =()=>{navLIst.classList.toggle('visible')};

NAVBUTON.addEventListener('click',tooGleNav);

