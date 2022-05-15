const renderDots = (countSliders, currentSlide) => {
    // 1. положить в html li.dot в кол-ве countSliders
    // 2. тек слайду (currentSlide) - указать доп класс li.dot-active
    const ul = document.querySelector('.portfolio-dots')

    for (let i = 0; i < countSliders; i++) {
        const li = document.createElement('li');
        li.classList.add('dot')

        if (currentSlide === i) {
            li.classList.add('dot-active')
        }
        ul.append(li)
    }
}


const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content')
    const slides = document.querySelectorAll('.portfolio-item')
    const timeInterval = 2000

    let currentSlide = 0
    let interval

    renderDots(slides.length, currentSlide)
    const dots = document.querySelectorAll('.dot')
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {

        e.preventDefault()
        if (!e.target.matches('.dot') &&
            !e.target.matches('.portfolio-btn')
        ) {
            return
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        console.log(e.target.classList)
        if (e.target.classList.contains('next')) {

            currentSlide++

        } else if (e.target.classList.contains('prev')) {
            currentSlide--
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval)
        }
    }, true)



    startSlide(timeInterval)
}

export default slider