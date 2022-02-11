// Hamburger

const hamburgerMenu = document.querySelector('.hamburger')
const hamburgerOpen = document.querySelector('.nav-bar__img--hamburger')
const hamburgerClose = document.querySelector('.hamburger__close-btn')

hamburgerOpen.addEventListener('click',()=>{
   hamburgerMenu.style.visibility = "visible";
   hamburgerMenu.style.width="250px"

   function myFunction(x) {
      if (x.matches) {
         hamburgerMenu.style.visibility = "hidden";
      } else {
         hamburgerMenu.style.visibility = "visible";
      }
    }
    var x = window.matchMedia("(min-width:500px)")
    myFunction(x)
    x.addListener(myFunction)

})
hamburgerClose.addEventListener('click',()=>{
    hamburgerMenu.style.visibility = "hidden"
    hamburgerMenu.style.width="0vh"

})

window.addEventListener("load",()=>{
   setTimeout(() => {
      preLoader.style.display = 'none';
   },2000);
})