const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const popupBlock = document.querySelector('.popup')
    statusBlock.style.color = 'white'
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с Вами свяжется'

    const validate = (list) => {
        let success = true
        return success
    }

    const sendData = (data) => {
        const payload = {}
        if (data.user_email !== '') {
            payload['user_email'] = data.user_email
        }
        if (data.user_phone !== '') {
            payload['user_phone'] = data.user_phone
        }
        if (data.user_name !== '') {
            payload['user_name'] = data.user_name
        }
        if (data.total !== '0') {
            payload['total'] = data.total
        }
        if (data.user_message !== '') {
            payload['user_message'] = data.user_message
        }

        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })
        console.log('submit')

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    formElements.forEach(input => {
                        input.value = ''
                    })
                    setTimeout(() => {
                        statusBlock.style.display = 'none'
                        popupBlock.style.display = 'none'
                    }, 3000)
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!')
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!!')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm