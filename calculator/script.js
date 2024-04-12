let displayHistory = document.querySelector(".display--history")
let displayCurrent = document.querySelector(".display--current")
const numButtons = document.querySelectorAll(".ripple--numbers")
const operButtons = document.querySelectorAll(".ripple--operations")
const specButtons = document.querySelectorAll(".ripple--specials")

let timeMain = 0.1
//массив заполняется по мере выполнения функций numAnimateEvent() и operAnimateEvent()
let symbols = []


//применяем анимации и события для кнопок цифр
function numAnimateEvent(){
    numButtons.forEach((button) => {
        button.setAttribute('style', `animation-delay: ${timeMain}s`)
        button.addEventListener('click', setNumsEvent)
        symbols.push(button.textContent)
        timeMain += 0.1
    })
}


//применяем анимации и события для кнопок операций
function operAnimateEvent() {
    let timeOper = 1.2
    operButtons.forEach((button) => {
        button.setAttribute('style', `animation-delay: ${timeOper}s`)
        button.addEventListener('click', setOpersEvent)
        symbols.push(button.textContent)
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
            break
        case ('copy'):
            displayHistory.value = displayCurrent.value
            break
    }
}

//ввод элементов с клавиатуры
function keydownEvent() {
    document.addEventListener('keydown', (button) => {
        if (button.key === 'Backspace') {
            displayHistory.value = displayHistory.value.slice(0, -1)
        } else if (button.key === '=') {
            displayCurrent.value = eval(displayHistory.value)
        } else if (symbols.includes(button.key) || button.key === '/' || button.key === '*') {
            displayHistory.value += button.key
        }
    })
}


numAnimateEvent()
operAnimateEvent()
specAnimateEvent()
keydownEvent()
