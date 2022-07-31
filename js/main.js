let enlaces = document.querySelector(".menu__hamburguesa");
let barIconX = document.querySelector('.menu__hamburguesa i');

enlaces.addEventListener('click', (event) => {  
    barIconX.classList.toggle('fa-times');
});

// Efecto ocultar y mostrar la barra de menu
let menu = document.querySelector(".menu");

let prevScrollPos = window.pageYOffset;

window.onscroll = () =>{
    let currentScrollPos = window.pageYOffset;

    if(prevScrollPos > currentScrollPos){
        menu.style.top = '0px';
        menu.style.transition = '0.5s';
    }else{
        menu.style.top = '-80px';
        menu.style.transition = '0.5s'
    }

    prevScrollPos = currentScrollPos;
}
