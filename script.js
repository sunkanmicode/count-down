const sideNav =document.querySelector('.sideNav');
const manuBtn = document.querySelector('.manuBtn');

manuBtn.addEventListener('click', ()=>{
  console.log('click');
  sideNav.classList.toggle('showNav')
});



sideNav.addEventListener('click', () =>{
     sideNav.classList.remove('showNav')
})