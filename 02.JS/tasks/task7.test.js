const task7 = require('./task7')

test('sort [4, 3, 2, 5, 1] with bubble sort to equal [1, 2, 3, 4, 5]', () => {
    const result = task7.bubbleSort([4, 3, 2, 5, 1] )
    expect(result).toEqual([1, 2, 3, 4, 5])
})

test('sort [4, 3, 2, 5, 1] with insertion sort to equal [1, 2, 3, 4, 5]', () => {
    const result = task7.insertionSort([4, 3, 2, 5, 1] )
    expect(result).toEqual([1, 2, 3, 4, 5])
})

test('sort [4, 3, 2, 5, 1] with shell sort to equal [1, 2, 3, 4, 5]', () => {
    const result = task7.shellSort([4, 3, 2, 5, 1] )
    expect(result).toEqual([1, 2, 3, 4, 5])
})

test('sort [4, 3, 2, 5, 1] with selection sort to equal [1, 2, 3, 4, 5]', () => {
    const result = task7.selectionSort([4, 3, 2, 5, 1] )
    expect(result).toEqual([1, 2, 3, 4, 5])
})


const errorCases = [
    ['a','Must be an array'],
    [['a'], 'Array must contain only numbers']
]


describe('bubble sort', () => {
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = task7.bubbleSort
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})

describe('insertion sort', () => {
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = task7.insertionSort
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})

describe('shell sort', () => {
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = task7.shellSort
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})

describe('selection sort', () => {
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = task7.selectionSort
            expect(() => result(arg)).toThrow(expectedError)
        }
    )
})