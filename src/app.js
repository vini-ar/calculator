const inputArea = document.querySelector('#calculator-display-current-input')
const additionButton = document.querySelector('#additionButton')

additionButton.addEventListener('click', () => {
    inputArea.value += '+'
})

equalButton.addEventListener('click', sum)

function sum() {
    let stringList = inputArea.value.split("+")
    integerList = stringList.map((item) => parseInt(item))
    
    console.log(integerList)


    let sum = integerList.reduce((accumulator, item) => {
        return accumulator + item
    }) 

    console.log(sum)
}