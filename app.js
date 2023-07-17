const toggleMenu = document.querySelector('.toggle-menu');
const footerInput = document.querySelector('.footer-input');


toggleMenu.addEventListener('click', myFooter);

function myFooter(){
   if(footerInput.style.display === 'block'){
    console.log('if')
    footerInput.style.display = 'none'
   }else{
    footerInput.style.display = 'block'
   }
}
