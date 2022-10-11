const StringCalculator = require('../app/tasks/StringCalculator')

test('adds "1" + "2" to equal 3', () => {
    const result = StringCalculator.sum('1', '2')
    expect(result).toBe(3);
});

test('substracts "1" - "2" to equal -1', () => {
    const result = StringCalculator.subtract('1', '2')
    expect(result).toBe(-1);
});

test('multiplies "1" * "2" to equal 2', () => {
    const result = StringCalculator.multiply('1', '2')
    expect(result).toBe(2);
});

test('divides "1" / "2" to equal 0.5', () => {
    const result = StringCalculator.divide('1', '2')
    expect(result).toBe(0.5);
});

const cases = [
    ['2', '2', 4],
    ['2', '-2', 0.25],
    ['2.5', '2', 6.25]
]

describe('raises', () => {
    test.each(cases)(
        '%p^%p to equal %p',
        (firstArg, secondArg, expectedResult) => {
            const result = StringCalculator.pow(firstArg, secondArg)
            expect(result).toBe(expectedResult)
        }
    )
})

const errorCases = [
    [1, 2, "Params must be strings"],
    ['a', 'b', 'Params must be string representaition of numbers']
]

describe('sum', () => {
    test.each(errorCases)(
        '%p + %p to throw %p',
        (firstArg, secondArg, expectedError) => {
            expect(() => StringCalculator.sum(firstArg, secondArg)).toThrow(expectedError)
        }
    )
})

describe('subtract', () => {
    test.each(errorCases)(
        '%p - %p to throw %p',
        (firstArg, secondArg, expectedError) => {
            expect(() => StringCalculator.subtract(firstArg, secondArg)).toThrow(expectedError)
        }
    )
})

describe('multiply', () => {
    test.each(errorCases)(
        '%p * %p to throw %p',
        (firstArg, secondArg, expectedError) => {
            expect(() => StringCalculator.multiply(firstArg, secondArg)).toThrow(expectedError)
        }
    )
})

describe('divide', () => {
    test.each(errorCases)(
        '%p / %p to throw %p',
        (firstArg, secondArg, expectedError) => {
            expect(() => StringCalculator.divide(firstArg, secondArg)).toThrow(expectedError)
        }
    )
})

describe('pow', () => {
    test.each(errorCases)(
        '%p^%p to throw %p',
        (firstArg, secondArg, expectedError) => {
            expect(() => StringCalculator.pow(firstArg, secondArg)).toThrow(expectedError)
        }
    )
})