const NAVBUTON = document.getElementById('show-nav');
const DisCInn = document.getElementById('discover'); 
const LatEInn = document.getElementById('latest'); 
const CatGInn = document.getElementById('categories'); 
const ShopInn = document.getElementById('shop');
const AdrsInn = document.getElementById('adress');
const myNav = document.querySelector('nav');





const MYNAV = document.querySelector('nav'); 
const navMenu = document.createElement("ul");
const navli = document.createElement("li");
const navAa = document.createElement("a");




document.body.onload = addElement;

function addElement () {
  // create a new ul element
   
   navMenu.className= 'nav-list';
   navMenu.id = 'show-In';
   /*const menuLinks =
   `<li><a href="#">home</a></li>
   <li><a href="#discover">discover</a></li>
   <li><a href="#latest">latest</a></li>
   <li><a href="#categories">categories</a></li>
   <li><a href="#shop">shop</a></li>
   <li><a href="#adress">contact</a></li>`;*/

  //add li node to the newly created ul
  navMenu.insertAdjacentHTML('afterbegin',menuLinks);
  // add the ul to the nav
  
  MYNAV.appendChild(navMenu);
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  isInViewport(CatGInn);
  document.addEventListener('scroll', function () {
    for(const link of navMenu){
      link.style.color='red';
    }
  }, {
    passive: true
  });
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
scroOllto(DisCInn);
scroOllto(LatEInn);
scroOllto(CatGInn);
scroOllto(ShopInn);
scroOllto(AdrsInn);
let prevScr = window.pageYOffset;

const naVDowns = function(){
  let currScr = window.pageYOffset;
 if(prevScr > currScr){
   myNav.style.top='0';
 }else{
   myNav.style.top ='-70px';
 }
 prevScr = currScr;
};
function mmyConstw(){
  window.addEventListener('scroll',naVDowns);
};


window.setTimeout(mmyConstw(),3000);










