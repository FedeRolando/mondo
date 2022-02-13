const $portada__img = document.querySelector(".portada__img");

window.addEventListener("DOMContentLoaded", ()=>{
    if(maxWidth500px){
        console.log("pipi")
        $portada__img.setAttribute("src","assets/portada-nueva-vertical.png");
    }    
})
const maxWidth500px = window.matchMedia("(max-width: 500px)").matches;



