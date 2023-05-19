const closeMessageBtn = document.querySelector('#close-message');
const message = document.querySelector('.message')

const closeMessage = () => {
    message.style.display = 'none'
}

setTimeout(closeMessage, 3000)

closeMessageBtn.addEventListener('click', closeMessage)