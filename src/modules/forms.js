const forms = ({
    textSelector,
    phoneSelector,
    emailSelector,
    placeholderSelector
}) => {
    const textInput = document.querySelector(textSelector)
    const phoneInput = document.querySelector(phoneSelector)
    const emailInput = document.querySelector(emailSelector)

    const validText = function (e) {
        this.value = e.target.value.replace(/[^А-Яа-яёЁ]/ig, '')
    }

    textInput.addEventListener('input', validText)
    phoneInput.addEventListener('input', (e) => {
        phoneInput.value = e.target.value.replace(/[^0-9-()+]/ig, '')
    })
    emailInput.addEventListener('input', (e) => {
        emailInput.value = e.target.value.replace(/[^a-zA-Z.@~*!'-]/ig, '')
    })

    if (typeof placeholderSelector === 'string') {
        const placeholderInput = document.querySelector(placeholderSelector)
        placeholderInput.addEventListener('input', validText)
    }

}

export default forms