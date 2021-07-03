const NAVBUTON = document.getElementById('show-nav');
const navLIst = document.getElementById('show-ln');
const DisCInn = document.getElementById('discover'); 

document.



const tooGleNav =()=>{
    navLIst.classList.toggle('visible');
    DisCInn.classList.toggle('down');
};


NAVBUTON.addEventListener('click',tooGleNav);

