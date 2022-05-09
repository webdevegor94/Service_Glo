const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = document.querySelector('.popup-close')
    const popup = document.querySelector('.popup')
    const content = popup.querySelector('.popup-content')

    function showModal() {
        popup.style.display = 'block'
        if (window.screen.availWidth > 767) {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return Math.pow(timeFraction, 2)
                },
                draw(progress) {
                    content.style.opacity = progress
                }
            })
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            showModal()
            modal.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })

}

export default modal