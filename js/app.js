const NAVBUTON = document.getElementById('show-nav');
const DisCInn = document.getElementById('discover'); 
const LatEInn = document.getElementById('latest'); 
const CatGInn = document.getElementById('categories'); 
const ShopInn = document.getElementById('shop');
const AdrsInn = document.getElementById('contact');
const myNav = document.querySelector('nav');
const navMenu = document.createElement("ul");

navMenu.setAttribute('class' ,'nav-list');

let n ='nav';
const sctin = document.getElementsByClassName('section'); 
document.body.onload = addNavEl();

function addNavEl(){
  for( const baseSect of sctin){
    const linkName = baseSect.id;
    const linkNCapt = linkName.toUpperCase();
    const linkCl = 'links';
    
    
    navMenu.innerHTML +=`<li><a href=#${linkName} id=${linkName}${n} class=${linkCl}>${linkNCapt}</a></li>`;
  };
  myNav.appendChild(navMenu);
};

function highLlinks(){
  const getscaugth=(el)=>{
      const rect = el.getBoundingClientRect();
       return (rect.top <= 100 && rect.bottom >= 50);
  };
  for(const sect of sctin){
    const sectInScrn = document.getElementById(sect.id);
    const readlink = document.getElementById(sect.id + n);
    window.addEventListener('scroll',function(){
      if(getscaugth(sectInScrn)){
        readlink.classList.add('newColor');
      }else{      
        readlink.classList.remove('newColor');
      };
    });  
  }
};
highLlinks();

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
};

tooGlSections(DisCInn);
tooGlSections(LatEInn);
tooGlSections(CatGInn);
tooGlSections(ShopInn);


function scroOllto(sect){
  sect.scrollIntoView();
};

scroOllto(DisCInn);
scroOllto(LatEInn);
scroOllto(CatGInn);
scroOllto(ShopInn);
scroOllto(AdrsInn);

let prevScr = window.pageYOffset;
function navControl(){
  const naVDowns = function(){
    let currScr = window.pageYOffset;
    if(prevScr > currScr){
      myNav.style.top='0';
    }else{
     myNav.style.top ='-70px';
    };
    prevScr = currScr;
  };
  
  function mmyConstw(){
    window.addEventListener('scroll',naVDowns);
  };
  
  
  window.setTimeout(mmyConstw(),3000);
}



