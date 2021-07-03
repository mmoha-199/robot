const NAVBUTON = document.getElementById('show-nav');
const CardInnr = document.getElementById('cards-box');
const DisCInn = document.getElementById('discover'); 
const discCollps = DisCInn.firstElementChild;
const MYNAV = document.querySelector('nav'); 
let navMenu = document.createElement("ul");

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

NAVBUTON.addEventListener('click',tooGleNav);
discCollps.addEventListener('click',tooGleDisc);

