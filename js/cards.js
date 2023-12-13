const modalWindow = document.querySelector('.modal_window')
const cards = document.querySelectorAll('.card')


function closeModal(e){
    if(e.target.classList.contains('modal_window')){
        modalWindow.classList.add('close_text')
    }
}

function mobileModal(item){
    const cardText = item.querySelector('.card_text')
    cardText.classList.toggle('close_text')
    const iconCard = item.querySelector('.icon_card')
    iconCard.classList.toggle('rotate')
}

function openModal(item){
    if(window.innerWidth <= 500) return mobileModal(item)
    const title = item.querySelector('.card_title').textContent
    const text = item.querySelector('.card_text').textContent
    const btn = item.querySelector('.card_btn').textContent
    modalWindow.querySelector('.card_title').textContent = title
    modalWindow.querySelector('.card_btn').textContent = btn
    modalWindow.querySelector('.card_text').textContent = text
    modalWindow.classList.remove('close_text')
}


cards.forEach((item)=> item.classList.contains('card-consult') 
    ? item : item.addEventListener('click', (e) => openModal(item)))
modalWindow.addEventListener('click', closeModal)