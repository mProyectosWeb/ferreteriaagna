let enlaces = document.querySelectorAll('.lists__ul a');
enlaces.forEach((element) =>{
    element.addEventListener('click', (event) =>{
        enlaces.forEach((link) =>{
            link.classList.remove('lists__a');
        });
        event.target.classList.add('lists__a');   
    });
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