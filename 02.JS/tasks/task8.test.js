const task8 = require('./task8')

const binaryTodecimalCases = [
    [[0, 1, 0, 1], '5'],
    [[1, 1, 0, 1], '-5']
]

describe('convert binary to decimal', () => {
    test.each(binaryTodecimalCases)(
        'given %p returns %p',
        (arg, expectedResult) => {
            const result = task8.convertBinaryToDecimal(arg)
            expect(result).toBe(expectedResult)
        }
    )
})

const decimalToBinaryCases = [
    [[0, 5], '101'],
    [[1, 5], '-101']
]

describe('convert decimal to binary', () => {
    test.each(decimalToBinaryCases)(
        'given %p returns %p',
        (arg, expectedResult) => {
            const result = task8.convertDecimaltoBinary(arg)
            expect(result).toBe(expectedResult)
        }
    )
})