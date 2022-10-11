const Calculator = require('../tasks/task9')
const $ = require('jquery')

let calc = new Calculator(100)

calc.enableCaching('sum')
calc.enableCaching('subtract')
calc.enableCaching('multiply')
calc.enableCaching('divide')

let pow = (x, y) => Math.pow(x, y)
calc.registerFunc(pow)
calc.enableCaching('pow')


let firstInput = $("#firstNum")
let secInput = $("#secNum")
let resInput = $("#resNum")


function calculate() {
    let x = +firstInput.val()
    let y = +secInput.val()
    resInput.val(calc[$('input[type="radio"]:checked').val()](x, y))
}
window.calculate = calculate;