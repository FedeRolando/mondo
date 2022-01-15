const d = document;
const $slide = d.querySelector(".servicios__slider__slide"),
$btnScrollLeft = d.querySelector(".btnScrollLeft"),
$btnScrollRight = d.querySelector(".btnScrollRight");

$btnScrollRight.addEventListener("click",e=>{
    $slide.scrollLeft+=50;
})

$btnScrollLeft.addEventListener("click",e=>{
    $slide.scrollLeft-=50;
})