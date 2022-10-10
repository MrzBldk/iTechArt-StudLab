const task3 = require('./task3')

test('find longest increasing subarray in [1, 3, 7, 4, 6, 7, 8, 1, 2 ,3 1, 2, 5, 7, 8, 90, 1] to equal [1, 2, 5, 7, 8, 90]', () => {
    const result = task3([1, 3, 7, 4, 6, 7, 8, 1, 2 ,3, 1, 2, 5, 7, 8, 90, 1, 2 ,3])
    expect(result).toEqual([1, 2, 5, 7, 8, 90])
})


const errorCases = [
    ['a','Must be an array'],
    [['a'], 'Array must contain only numbers']
]

describe('"getLongestIncreasingSubarray" function', () => {
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = task3
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})