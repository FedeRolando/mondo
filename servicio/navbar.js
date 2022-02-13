 const toggleButton = document.getElementsByClassName('toggle-button')[0]
 const navbarLinks = document.getElementsByClassName('navbar-links')[0]

 toggleButton.addEventListener('click', () => {
     navbarLinks.classList.toggle('active')
     console.log('click')
 })


 /* addEventListener('DOMContentLoaded', () => {
     const btn_menu = document.querySelector('.toggle-button')

     if (btn_menu) {
         btn_menu.addEventListener('click', () => {
             console.log('click')
             const menu_items = document.querySelector('.navbar-links')
             menu_items.classList.toggle('show');
         })
     }

 }) */