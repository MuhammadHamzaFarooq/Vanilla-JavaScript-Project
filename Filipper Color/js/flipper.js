console.log("Color Fliper");

const colors = ['blue','green','red','rgba(133,122,200)','#f15025'];
const btn = document.getElementById('btnHero');
const color = document.querySelector('.color');

// console.log(btn,color);


btn.addEventListener('click',()=>{
    console.log("btn Click");
    let randomNumber = getRandomNumber() ;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

const getRandomNumber = () => Math.floor(Math.random()*colors.length);