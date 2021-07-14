# **robot**
*robot is a landing page project for udacity*
this project contain *three* folders and *foor* files:
## project staucture: 
* css-folder
    * image-folder
    * style-file
* js-folder
    * app-file
* html-file
* readme-file
## HTML :
**links** 
* fonts : https://fonts.googleapis.com 
* icons : https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css
**body**:
* container:
    * header: contain *navigation*
    * main: foor sections :
        * discover
        * category
        * lates
        * shop
    * footer:
## CSS :
 * using the **grid** and **flex** to designe and controle the *container* elements
 * making the page responsive with **media query**
## JavaScript:
1. select all elements needed for the functions :
    * using getElementById, getElementByClassName and querySelector functions:
       ```javascript
       const ShopInn = document.getElementById('shop');
       const myNav = document.querySelector('nav');
       const sctin = document.getElementsByClassName('section'); 
    * using setAtribut to set classes:
       ```javascript
       navMenu.setAttribute('class' ,'nav-list');
    * using createElement to create ul list for the navigation bar :
       ```javascript
       const navMenu = document.createElement("ul");
    * then create a function to add a dynamic navigation bar:
       ```javascript 
       function addNavEl(){
         for( const baseSect of sctin){
             const linkName = baseSect.id;
             const linkNCapt = linkName.toUpperCase();
             const linkCl = 'links';
            navMenu.innerHTML +=`<li><a href=#${linkName} id=${linkName}${n} class=${linkCl}>${linkNCapt}</a></li>`;
            };
            myNav.appendChild(navMenu);
        };
    
2. 






