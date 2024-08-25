const inputArea = document.querySelector('#calculator-display-current-input')
const equalButton = document.querySelector('#equalButton')
const display = document.querySelector(".calculator-display-history")
const clearButton = document.querySelector("#clearButton")
const digitButtonList = document.querySelectorAll(".number")
const operatorButtonList = document.querySelectorAll(".operatorButton")

let operatorList = ["+", '-', '/', '*'];
let operator;

operatorButtonList.forEach(button => {
    button.addEventListener("click", () => {
        operator = operatorList.find((operator) => operator === button.value)
        display.textContent += button.value
    })
})

digitButtonList.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.value
    })
})

clearButton.addEventListener('click', () => {
    display.textContent = ""
})

equalButton.addEventListener('click', () => {

    let expression = display.textContent

    let expressionFiltred = expression.split(operator)
    let numberList = expressionFiltred.map(item => parseInt(item))

    let result;

    if (expression.includes("+")) {
        result = operate(operator, numberList[0], numberList[1])
    }
    else if (expression.includes("-")) {
        result = operate(operator, numberList[0], numberList[1])
    }
    else if (expression.includes("*")) {
        result = operate(operator, numberList[0], numberList[1])
    }
    else if (expression.includes("/")) {
        result = operate(operator, numberList[0], numberList[1])
    }

    display.textContent = result
})


function operate(operator, num1, num2) {
    if (operator === "+") {
        return sum(num1, num2)
    }
    else if (operator === "-") {
        return subtraction(num1, num2)
    }
    else if (operator === "*") {
        return multiply(num1, num2)
    }
    else if (operator === "/") {
        return divide(num1, num2)
    }
}

function sum(num1, num2) {
    return num1 + num2
}

function subtraction(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}