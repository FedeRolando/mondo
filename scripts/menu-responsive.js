$menuDesktop = d.querySelector('.menu-desktop'),
$btnMenu = d.querySelector('.btn_toggle-menu'),
$menuMobile = d.querySelector('.menu-mobile');

$btnMenu.addEventListener('click',()=>{
    $menuMobile.classList.toggle('d-none');
})

window.addEventListener('DOMContentLoaded',()=>{
    if (window.matchMedia("(max-width: 900px)").matches) {
        $menuDesktop.classList.add('d-none');
        $btnMenu.classList.remove('d-none');
    } else {
        $menuDesktop.classList.remove('d-none');
        $btnMenu.classList.add('d-none');
        $menuMobile.classList.add('d-none');
    }
})
window.addEventListener('resize',()=>{
    if (window.matchMedia("(max-width: 900px)").matches) {
        $menuDesktop.classList.add('d-none');
        $btnMenu.classList.remove('d-none');
    } else {
        $menuDesktop.classList.remove('d-none');
        $btnMenu.classList.add('d-none');
        $menuMobile.classList.add('d-none');
    }
})
