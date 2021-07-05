const openButton = document.querySelector("#openOverlay");
const closeButton = document.querySelector("#exit__link");
const menu = document.getElementsByClassName('fullscreen-menu') ;


openButton.addEventListener("click", e =>{
  e.preventDefault;
  let openMenu = $('.fullscreen-menu').css('display', 'flex');
 
})

closeButton.addEventListener("click", e=>{
  e.preventDefault;
  let closeMenu= $('.fullscreen-menu').css('display', 'none');
})




