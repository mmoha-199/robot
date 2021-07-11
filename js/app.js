const NAVBUTON = document.getElementById('show-nav');
const DisCInn = document.getElementById('discover'); 
const LatEInn = document.getElementById('latest'); 
const CatGInn = document.getElementById('categories'); 
const ShopInn = document.getElementById('shop');
const AdrsInn = document.getElementById('contact');
const myNav = document.querySelector('nav');
const navMenu = document.createElement("ul");
const topButtn = document.getElementById("bot-btn");

navMenu.setAttribute('class' ,'nav-list');

let n ='nav';
const sctin = document.getElementsByClassName('section'); 
document.body.onload = addNavEl();
//create a dynamic navigation list with 'li' s items
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
  //create a function to get the width and hight of an element in the view
  const getscaugth=(el)=>{
      const rect = el.getBoundingClientRect();
       return (rect.top <= 120 && rect.bottom >= 50);
  };
  //loop in the sections and the nav list
  for(const sect of sctin){
    const sectInScrn = document.getElementById(sect.id);
    const readlink = document.getElementById(sect.id + n);
    //check if true then add the new class to the links
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

//when click a link in the nav list scroll to section using the reference
function scroOllto(sect){
  sect.scrollIntoView();
};

scroOllto(DisCInn);
scroOllto(LatEInn);
scroOllto(CatGInn);
scroOllto(ShopInn);
scroOllto(AdrsInn);

//controle the nav height and appearence when scrolling the page
let prevScr = window.pageYOffset;

window.setTimeout(function(){
  window.addEventListener(
    'scroll',function(){
      let currScr = window.pageYOffset;
      if(prevScr > currScr){
        myNav.style.top='0px';
      }else{
        myNav.style.top ='-223px';
      };
      prevScr = currScr;
    });
},3000);



// show the button if user scroll down to 20px
window.onscroll = ()=>{goUp()};

function goUp() {
  if (document.documentElement.scrollTop > 20) {
    topButtn.style.display = "block";
  } else {
    topButtn.style.display = "none";
  }
}

// When the button cliked scroll to the top 
function toptoZro() {
  document.documentElement.scrollTop = 0; 
}
topButtn.addEventListener('click',toptoZro)





