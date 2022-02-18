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

// PassWord Eye

const passWordHide = document.querySelector('.signup-form__input--password-hide-icon');
const inputBoxOne = document.querySelector('.signup-form__input--password-first')
const inputBoxTwo = document.querySelector('.signup-form__input--password-second')


passWordHide.addEventListener('click', () => {
   if(inputBoxOne.type === "password" && inputBoxTwo.type === "password"){
      inputBoxOne.type = "text";
      inputBoxTwo.type = "text"
   }
   else{
      inputBoxOne.type="password"
      inputBoxTwo.type = "password"
   }
})