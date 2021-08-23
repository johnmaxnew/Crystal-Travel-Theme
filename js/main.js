// SHOW NAV
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('reveal-menu')
  })
}
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('reveal-menu')
  })
}

// REMOVING MOBILE MENU
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When each nav link is clicked, remove the reveal-menu class
    navMenu.classList.remove('reveal-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
