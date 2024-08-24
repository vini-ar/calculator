const inputArea = document.querySelector('#calculator-display-current-input')
const additionButton = document.querySelector('#additionButton')
const subtractionbutton = document.querySelector('#subtractionbutton')
const equalButton = document.querySelector('#equalButton')
const display = document.querySelector(".calculator-display-history")


additionButton.addEventListener('click', () => {
    inputArea.value += '+'
})

equalButton.addEventListener('click', () => {
    
    let expression = inputArea.value
    
    let result;

    let expressionFiltred = expression.split(/[+\-*/]/)
    expressionFiltred = expressionFiltred.map(item => parseInt(item))

    if (expression.includes("+")) {
        result = operate("+", expressionFiltred[0], expressionFiltred[1])
    }
    else if (expression.includes("-")) {
        result = operate("-", expressionFiltred[0], expressionFiltred[1])
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
}

function sum(num1, num2) {
    return num1 + num2
}

function subtraction(num1, num2) {
    return num1 - num2
}