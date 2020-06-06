const buttonSearch = document.querySelector('#page-home main a')
const modal = document.querySelector('#modal')

buttonSearch.addEventListener('click', () => {
    modal.classList.remove('hide')
})

const buttonClose = document.querySelector("#modal .header a#close")

buttonClose.addEventListener('click', () => {
    modal.classList.add('hide')
})
