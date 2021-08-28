console.log('hexColor');

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//#f930190
const btn = document.getElementById('btnHero');
const color = document.querySelector('.color');


btn.addEventListener('click',()=>{
    console.log('hex btn click')
 let hexColor = '#';
 for(let i=0; i<6;i++){
     hexColor += hex[getRandomNumber()];
 }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;

});



const getRandomNumber = () => Math.floor(Math.random()*hex.length);
