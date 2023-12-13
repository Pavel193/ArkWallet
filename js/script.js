import validation from "./validation.js"

const form = document.querySelector('.form')
const elements = form.elements
const {userName, contact, message, formSubmit} = elements
const btnBurger = document.querySelector('.burger_icon')
const linksCont = document.querySelector('.header_links')
const headerLinks = document.querySelector('.header_links')


function getFormData(event){ // получаем обЪект с данными формы для отправки
    event.preventDefault() //сбросс настройки submit
    const body = { // объект со значениями полей(элементы) формы
        userName : userName.value,
        contact : contact.value,
        message : message.value
    }
    console.log(body)
}

function checkForm(element){
    const inp = element 
    validation[inp.name].str = inp.value // записываем в поле конкретного объекта валидации значение инпута
    validation[inp.name].valid = validation[inp.name].validation() // изменяем значение поля valid в конкретном объекте валидации на результат действия метода validation  вконкретном объекте
    const arrValidation = Object.values(validation) // создаем массив с объектами валидации
    const boolean = arrValidation.every(item => item.valid === true) // проверяем объект валидации 
    formSubmit.disabled = !boolean
    boolean ? formSubmit.classList.remove('disabled') : formSubmit.classList.add('disabled')
}

function eventBurger(){
    linksCont.classList.contains('none') ? linksCont.classList.remove('none') : linksCont.classList.add('none')
    // linksCont.classList.toggle('none') -  toggle - добавляет класс если его нет и наоборот
}

function headerIcon(){
    headerLinks.classList.toggle('none') 
}

headerLinks.addEventListener ('click',headerIcon)
btnBurger.addEventListener('click', eventBurger)
form.addEventListener('submit', getFormData) // запускает функцию получения данных формы
Array.from(elements).forEach(element => {
    element.addEventListener('input',() => checkForm(element))
});




