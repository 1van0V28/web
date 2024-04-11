let displayHistory = document.querySelector(".display--history")
let displayCurrent = document.querySelector(".display--current")
const numButtons = document.querySelectorAll(".ripple--numbers")
const operButtons = document.querySelectorAll(".ripple--operations")
const specButtons = document.querySelectorAll(".ripple--specials")

let timeMain = 0.1

//применяем анимации и события для кнопок цифр
function numAnimateEvent(){
    numButtons.forEach((button) => {
        button.setAttribute('style', `animation-delay: ${timeMain}s`)
        button.addEventListener('click', setNumsEvent)
        timeMain += 0.1
    })
}

//применяем анимации и события для кнопок операций
function operAnimateEvent() {
    let timeOper = 1.2
    operButtons.forEach((button) => {
        button.setAttribute('style', `animation-delay: ${timeOper}s`)
        button.addEventListener('click', setOpersEvent)
        timeOper += 0.1
    })
}

//применяем анимации и события для специальных кнопок
function specAnimateEvent() {
    let timeSpec = timeMain + 0.1
    specButtons.forEach((button) => {
        button.setAttribute('style', `animation-delay: ${timeSpec}s`)
        button.addEventListener('click', setSpecEvent)
        timeMain += 0.1
    })
}

//устанавливаем событие при нажатии цифр
function setNumsEvent(button) {
    let buttonName = button.target.textContent
    displayHistory.value += buttonName
}

//устанавливаем событие при нажатии операций
function setOpersEvent(button) {
    let buttonName = button.target.textContent
    switch (buttonName) {
        case ('÷'):
            displayHistory.value += '/'
            return
        case ('x'):
            displayHistory.value += '*'
            return
        case ('='):
            displayCurrent.value = eval(displayHistory.value)
            return
    }
    displayHistory.value += buttonName
}

//устанавливаем событие при нажатии специальной кнопки
function setSpecEvent(button) {
    let buttonName = button.target.textContent
    switch (buttonName) {
        case ('ac'):
            displayHistory.value = ''
            displayCurrent.value = ''
            break
        case ('back'):
            displayHistory.value = displayHistory.value.slice(0, -1)
    }
}

numAnimateEvent()
operAnimateEvent()
specAnimateEvent()
