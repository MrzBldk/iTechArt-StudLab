const task2 = require('./task2')

const arr = [1, 2, 3, -1, 4, 5, -2, 6]

test('find min in [1, 2, 3, -1, 4, 5, -2, 6] to equal -2', () => {
    const result = task2.getMin(arr)
    expect(result).toBe(-2)
})

test('find max in [1, 2, 3, -1, 4, 5, -2, 6] to equal 6', () => {
    const result = task2.getMax(arr)
    expect(result).toBe(6)
})

const cases = [
    [[1, 4, 3, 2], 2.5],
    [[2, 1, 3, 5, 4], 3]
]

describe('find median', () => {
    test.each(cases)(
        'in %p to equal %p',
        (arg, expectedResult) => {
            const result = task2.getMed(arg)
            expect(result).toBe(expectedResult)
        }
    )
})

const errorCases = [
    ['a','Must be an array'],
    [['a'], 'Array must contain only numbers']
]

describe('"getMin" function', () => {
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = task2.getMin
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})

describe('"getMax" function', () => {
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = task2.getMax
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})

describe('"getMed" function', () => {
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = task2.getMed
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})

