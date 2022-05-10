const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = document.querySelector('.popup-close')
    const popup = document.querySelector('.popup')
    const content = popup.querySelector('.popup-content')

    const animate = ({ timing, draw, duration }) => {
        let start = performance.now();

        requestAnimationFrame(function animate(time) {
            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            // вычисление текущего состояния анимации
            let progress = timing(timeFraction);

            draw(progress); // отрисовать её

            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        });
    };

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
            modal.style.display = 'block'
            showModal()
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'

    })

}

export default modal