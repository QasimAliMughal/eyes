const backgrounds = document.getElementById('bg');

function getRandom(){
    return Math.floor(Math.random()*255);
}

backgrounds.addEventListener('click',()=>{
    backgrounds.style.backgroundColor = 'rgba('+getRandom()+','+getRandom()+','+getRandom()+')';
    console.log('clicked');
    
});