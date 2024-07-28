/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu')
      navToggle=document.getElementById('nav-toggle')
     navClose=document.getElementById('nav-close')
      
      /*====MENU SHOW====*/
      /*validate if constant exist*/
  if (navToggle) {
    navToggle.addEventListener('click',()=>{
          navMenu.classList.add('show-menu')
        })
      }
      /*====MENU HIDDEN====*/
      /*validate if constant exist*/
  if (navClose) {
    navClose.addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')
    })
  }
      
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
  const navMenu = document.getElementById('nav-menu')
  //when we click on each nav__link,we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper('.home__swiper',{
  loop:true,
  spaceBetween:32,
  grabCursor:true,
  effect:'creative',
  creativeEffect:{
    prev:{
      translate:[-100,0,-500],
      rotate:[0,0,15],
      opacity:0,
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0,-15],
      opacity: 0,
    }
  },
  
  pagination:{
    el:'.swiper-pagination',
    clickable:true,
  }
}) 
  


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__images',1.5,{opacity:0, y:150, delay:.1})
gsap.from('.home__data',1.8,{opacity:0, x:-100, delay:.8})
gsap.from('.home__info',1.5,{opacity:0, y:150, delay:1})