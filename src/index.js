import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calculator from './modules/calculator'
import forms from './modules/forms'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'



timer('27  may 2022')
menu()
modal()
calculator()
forms({
    textSelector: '#form1-name',
    phoneSelector: '#form1-phone',
    emailSelector: '#form1-email',
    placeholderSelector: null
})
forms({
    textSelector: '#form2-name',
    phoneSelector: '#form2-phone',
    emailSelector: '#form2-email',
    placeholderSelector: '#form2-message'
})
forms({
    textSelector: '#form3-name',
    phoneSelector: '#form3-phone',
    emailSelector: '#form3-email',
    placeholderSelector: null
})
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})

