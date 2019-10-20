const header = document.querySelector('.header')
const list = header.querySelector('.menu-list')
const menu = header.querySelector('.-menu')

menu.addEventListener('click', () => {
    list.classList.toggle('-active')
})