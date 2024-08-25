const inputArea = document.querySelector('#calculator-display-current-input')
const additionButton = document.querySelector('#additionButton')
const subtractionbutton = document.querySelector('#subtractionbutton')
const equalButton = document.querySelector('#equalButton')
const display = document.querySelector(".calculator-display-history")
const clearButton = document.querySelector("#clearButton")
const numberList = document.querySelectorAll(".number")

additionButton.addEventListener('click', () => {
    inputArea.value += '+'
})

clearButton.addEventListener('click', () => {
    inputArea.value = ""
})

numberList.forEach(number => {
    number.addEventListener("click", () => {
        inputArea.value += number.textContent
    })
})

equalButton.addEventListener('click', () => {
    
    let expression = inputArea.value
    
    let result;

    let expressionFiltred = expression.split(/[+\-*/]/)
    let integerList = expressionFiltred.map(item => parseInt(item))

    if (expression.includes("+")) {
        result = operate("+", integerList[0], integerList[1])
    }
    else if (expression.includes("-")) {
        result = operate("-", integerList[0], integerList[1])
    }
    else if (expression.includes("*")) {
        result = operate("*", integerList[0], integerList[1])
    }
    else if (expression.includes("/")) {
        result = operate("/", integerList[0], integerList[1])
    }

    let span = document.createElement("span")
    span.textContent = result
    display.appendChild(span)

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