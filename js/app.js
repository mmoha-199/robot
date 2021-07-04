const NAVBUTON = document.getElementById('show-nav');
const DisCInn = document.getElementById('discover'); 
const LatEInn = document.getElementById('latest'); 
const CatGInn = document.getElementById('categories'); 
const ShopInn = document.getElementById('shop'); 


const MYNAV = document.querySelector('nav'); 
const navMenu = document.createElement("ul");
//const discCollps = DisCInn.firstElementChild;
//const lateCollps = LatEInn.firstElementChild;
//const CardInnr = document.getElementById('cards-box');
//const CirclInnr = document.getElementById('circl-box');

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

NAVBUTON.addEventListener('click',tooGleNav);

function tooGlSections(a){
  const x = a.firstElementChild;
  const b = a.firstElementChild.nextElementSibling;
  const ttgg=()=>{b.classList.toggle('visible')};
  x.addEventListener('click',ttgg);
}

tooGlSections(DisCInn);
tooGlSections(LatEInn);
tooGlSections(CatGInn);
tooGlSections(ShopInn);


function scroOllto(sect){
  sect.scrollIntoView();
}




