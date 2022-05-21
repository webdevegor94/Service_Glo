
const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    // const menuItems = menu.querySelectorAll('ul>li>a')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)

    menu.addEventListener('click', (e) => {
        if (e.target.hash === '#close') {
            e.preventDefault()
        }
        const menuHash = [
            '#close',
            '#service-block',
            '#portfolio',
            '#calc',
            '#command',
            '#connect',
        ]
        if (menuHash.includes(e.target.hash)) {
            menu.classList.toggle('active-menu')
        }
    })

}

export default menu