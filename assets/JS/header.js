const navCategori = document.querySelector('.nav-categori');
const megaMenu = document.querySelector('.mega-menu')
const siteInner = document.querySelector('.site-inner');

navCategori.addEventListener("click",()=>{
    megaMenu.classList.toggle('active')
    siteInner.classList.toggle('active')
})





