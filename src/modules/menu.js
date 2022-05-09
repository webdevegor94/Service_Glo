const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')


    const hendlMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', hendlMenu)
    closeBtn.addEventListener('click', hendlMenu)

    menuItems.forEach(menuItem => menuItem.addEventListener('click', hendlMenu))

}

export default menu