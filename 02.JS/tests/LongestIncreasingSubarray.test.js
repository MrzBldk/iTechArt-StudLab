const LongestIncreasingSubarray = require('../app/tasks/LongestIncreasingSubarray')

test('find longest increasing subarray in [1, 3, 7, 4, 6, 7, 8, 1, 2 ,3 1, 2, 5, 7, 8, 90, 1] to equal [1, 2, 5, 7, 8, 90]', () => {
    const result = LongestIncreasingSubarray([1, 3, 7, 4, 6, 7, 8, 1, 2 ,3, 1, 2, 5, 7, 8, 90, 1, 2 ,3])
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
            const result = LongestIncreasingSubarray
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})