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
    var x = window.matchMedia("(min-width: 800px)")
    myFunction(x)
    x.addListener(myFunction)

})
hamburgerClose.addEventListener('click',()=>{
    hamburgerMenu.style.visibility = "hidden"
    hamburgerMenu.style.width="0vh"

})


// Sidebar Clear javaScript //

const sidebarClearBtn = document.querySelector('.sidebar__btn--clear-filter')
let sidebarInput = document.querySelectorAll('.sidebar__input')

sidebarClearBtn.addEventListener('click',()=>{
   sidebarInput.forEach(element => {
      element.checked = false
   });
})

