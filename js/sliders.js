const btn = document.querySelector(".btn_tg")  //осуществляет поиск элемента с конкретным селектором на странице || null
const vectorBtn = document.querySelector('.link_arrow')
const slider = document.querySelector('.slideCont')
let count = 1

function scrollItem(selector, mt){
    const container = document.querySelector(selector) 
    const top = container.offsetTop
    window.scroll({
        left: 0,
        top: top - mt,
        behavior: 'smooth',
    })   
}

function scrollSlide (){
    const elem = document.querySelector('.garant_slide') 
    const height = elem.clientHeight
    slider.scroll({
        left:0,
        top: height * count,
        behavior: 'smooth',
    })
    count >= 3 ? count = 0 : count++ 
}

btn.addEventListener('click',() => scrollItem('.garant_middle_conteiner', 300)) // слушатель события , который запускает функцию в ответ на указанное действие пользователя
vectorBtn.addEventListener('click',() => scrollItem('.cards', 100))
setInterval(scrollSlide, 3000)