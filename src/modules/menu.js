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

    const move = () => {
        const topMenu = document.querySelector('ul');
        topMenu.addEventListener("click", (event) => {
            const target = event.target;
            if (target.matches("a")) {
                event.preventDefault();
                const thisEl = document.querySelector(target.getAttribute("href"));
                console.log(target.getAttribute("href"));
                console.log(thisEl);
                thisEl.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    };
    move();
}

export default menu