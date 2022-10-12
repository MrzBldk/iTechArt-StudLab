const MaxSubSum = require('../app/tasks/MaxSubSum')

const cases = [
    [[-1, 2, 3, -9], 5],
    [[-1, 2, 3, -9, 11], 11],
    [[-2, -1, 1, 2], 3],
    [[100, -9, 2, -3, 5], 100],
    [[1, 2, 3], 6],
    [[-1, -2, -3], -1]
]

const errorCases = [
    ['a', 'Must be an array'],
    [['a'], 'Array must contain only numbers']
]

describe('"getMaxSubSumSlow" function', () => {
    test.each(cases)(
        'given %p as argument, returns %p',
        (arg, expectedResult) => {
            const result = MaxSubSum.getMaxSubSumSlow(arg)
            expect(result).toBe(expectedResult)
        }
    )
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = MaxSubSum.getMaxSubSumSlow
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})

describe('"getMaxSubSumFast" function', () => {
    test.each(cases)(
        'given %p as argument, returns %p',
        (arg, expectedResult) => {
            const result = MaxSubSum.getMaxSubSumFast(arg)
            expect(result).toBe(expectedResult)
        }
    )
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = MaxSubSum.getMaxSubSumFast
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})