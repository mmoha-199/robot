const NAVBUTON = document.getElementById('show-nav');
const CardInnr = document.getElementById('cards-box');
const CirclInnr = document.getElementById('circl-box');

const DisCInn = document.getElementById('discover'); 
const LatEInn = document.getElementById('latest'); 

const discCollps = DisCInn.firstElementChild;
const lateCollps = LatEInn.firstElementChild;

const MYNAV = document.querySelector('nav'); 
const navMenu = document.createElement("ul");

document.body.onload = addElement;

function addElement () {
  // create a new ul element
     navMenu.className= 'nav-list';
     navMenu.id = 'show-In';
   // and give it content
   const menuLinks =
   `<a href="">home</a>
   <a href="">discover</a>
   <a href="">latest</a>
   <a href="">categories</a>
   <a href="">account</a>
   <a href="">shop</a>`;

  // add li node to the newly created ul
  navMenu.insertAdjacentHTML('afterbegin',menuLinks);
  // add the ul to the nav
  MYNAV.appendChild(navMenu);
}


//toogle the nav menu and the first main section
const tooGleNav =()=>{
    navMenu.classList.toggle('visible');
    DisCInn.classList.toggle('down');
};
const tooGleDisc=()=>{ CardInnr.classList.toggle('visible')};
const tooGleLate=()=>{ CirclInnr.classList.toggle('visible')};


NAVBUTON.addEventListener('click',tooGleNav);
discCollps.addEventListener('click',tooGleDisc);
lateCollps.addEventListener('click',tooGleLate);
function getFirstChl(a){
  const x = a.firstElementChild;
  return x;
}

function toOglA(a){
   a.classList.toggle('visible');
}