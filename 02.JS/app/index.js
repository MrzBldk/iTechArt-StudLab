const Calculator = require('./tasks/Calculator')
const $ = require('jquery')

const calc = new Calculator(100)

calc.enableCaching('sum')
calc.enableCaching('subtract')
calc.enableCaching('multiply')
calc.enableCaching('divide')

const pow = (x, y) => Math.pow(x, y)
calc.registerFunc(pow)
calc.enableCaching('pow')


const firstInput = $("#firstNum")
const secInput = $("#secNum")
const resInput = $("#resNum")


function calculate() {
    let x = +firstInput.val()
    let y = +secInput.val()
    resInput.val(calc[$('input[type="radio"]:checked').val()](x, y))
}
window.calculate = calculate;