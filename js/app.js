const NAVBUTON = document.getElementById('show-nav');
const DisCInn = document.getElementById('discover'); 
const LatEInn = document.getElementById('latest'); 
const CatGInn = document.getElementById('categories'); 
const ShopInn = document.getElementById('shop');
const AdrsInn = document.getElementById('contact');
const topButtn = document.getElementById("bot-btn");
const myHeadr = document.querySelector('header');

const myNav = document.querySelector('nav');
const navMenu = document.createElement("ul");
const sctin = document.getElementsByClassName('section');

navMenu.setAttribute('class' ,'nav-list');

//create a dynamic navigation list with 'li' s items
let n ='nav';
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
        sectInScrn.classList.add('active');
        readlink.classList.add('newColor');
      }else{      
        sectInScrn.classList.remove('active');
        readlink.classList.remove('newColor');
      };
    }); 
  };
};
highLlinks();
//smooth scrolling to the section when clicking the navigation link
const aElments = navMenu.getElementsByTagName('a');
function scrolToSc(){
  for(let el of aElments){
    el.addEventListener('click',function(z){
      z.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
  };    
};
scrolToSc();

//toogle the nav menu and adjust the header
const tooGleNav =()=>{
    navMenu.classList.toggle('visible');
    myHeadr.classList.toggle('grow');
};
NAVBUTON.addEventListener('click',tooGleNav);

// toggle sections to make them collapsable when we click the button
function togglleSects(){
    const restButts = document.getElementsByTagName('button');
    for(const but of restButts){
      but.addEventListener('click',function(b){
        b.preventDefault();
        document.querySelector(this.getAttribute('href')).classList.toggle('visible'); 
        //update button text
        if(but.textContent ==='show more'){
          but.textContent = 'show less';
        }else{
          but.textContent = 'show more';}
      });    
    };   
}; 
togglleSects();

//controle the nav height and appearence when scrolling the page
let prevScr = window.pageYOffset;
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

// show the button if user scroll down to 20px
window.onscroll = ()=>{goUp()};
function goUp(){
  if (document.documentElement.scrollTop > 20) {
    topButtn.classList.add('active');
  } else {
    topButtn.classList.remove('active');
  }
};

// When the button cliked scroll to the top 
function toptoZro() {
  document.documentElement.scrollTop = 0; 
};
topButtn.addEventListener('click',toptoZro); 





