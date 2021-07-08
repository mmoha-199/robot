const NAVBUTON = document.getElementById('show-nav');
const DisCInn = document.getElementById('discover'); 
const LatEInn = document.getElementById('latest'); 
const CatGInn = document.getElementById('categories'); 
const ShopInn = document.getElementById('shop');
const AdrsInn = document.getElementById('contact');
const myNav = document.querySelector('nav');







const sctin = document.getElementsByClassName('section');
const navMenu = document.createElement("ul");
navMenu.setAttribute('class' ,'nav-list');
const MYNAV = document.querySelector('nav'); 

document.body.onload = addNavEl;

function addNavEl () {
  for( y = 0 ; y < sctin.length ;y++){
    const linkName = sctin[y].id;
    const linkNCapt = linkName.toUpperCase();
    navMenu.innerHTML += `<li><a href='#${linkName}'>${linkNCapt}</a></li>`;
  }
  MYNAV.appendChild(navMenu); 
}

const aelements = navMenu.getElementsByTagName('a');


function sectInView(){
  const getscaugth=(el)=>{
    
      rect = el.getBoundingClientRect() ;
      return rect.top <= 100 && rect.bottom >= 50
  };
   
  for(const link of aelements){

    window.addEventListener(
      'scroll',
      function(){
        if(getscaugth(sect)){
          link.classList.add('newColor');
        }else{
          link.classList.remove('newColor');
        }
      }
    );
  }
};
sectInView();


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

