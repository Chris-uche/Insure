const toggleBtn = document.querySelector('.hamburger');
const links = document.querySelector('nav');


toggleBtn.addEventListener('click', ()=>{
  links.classList.toggle('active');
  if(image){
    image = '<img src="/insure-landing-page-master/images/icon-close.svg">';
  } else{
    image = '<img src="/insure-landing-page-master/images/icon-hamburger.svg">'
  }

})


toggleBtn.innerHTML = '<img src="/insure-landing-page-master/images/icon-hamburger.svg">';
let image = toggleBtn.innerHTML;


