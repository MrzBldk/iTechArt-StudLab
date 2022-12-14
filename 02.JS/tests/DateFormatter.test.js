const DateFormatter = require('../app/tasks/DateFormatter')

test('format date given 1640984400000 to equal "01-01-2022"', () => {
    const result = new DateFormatter(1640984400000).date
    expect(result).toMatch('01-01-2022')
})

test('format date given "20220101" to equal "01-01-2022"', () => {
    const result = new DateFormatter('20220101').date
    expect(result).toMatch('01-01-2022')
})

test('from now "20220101" to equal "01-01-2022"', () => {
    const result = new DateFormatter('2020101').fromNow()
    expect(result).toMatch('2 years from now')
})

const errorCases = [
    ['aaaaa', 'Wrong date format'],
    [[], 'Date must me number or string'],
]

describe('"DateFormatter"', () => {
    test.each(errorCases)(
        'given %p to throw %p',
        (arg, expectedError) => {
            const result = DateFormatter
            expect(() =>  new result(arg)).toThrow(expectedError)
        }
    )
})

test('format date given 2 as format to throw "Formats must be string"', () => {
    const result = DateFormatter
    expect(() => new result('20220101', 2)).toThrow('Formats must be strings')
})