const task5 = require('./task5')

const text = 'aa aa. aa aa.\naa.'

test('format text in mode "no line breaks" to return text with no line breaks', () => {
    const result = task5.textFormatter({ string: text })
    expect(result).toMatch('aa aa. aa aa. aa.')
})

test('format text in mode "line breaks by char" to return text with line breaks by char', () => {
    const result = task5.textFormatter({
        string: text,
        maxLineSize: 5,
        mode: task5.LineBreak.ByChar
    })
    expect(result).toMatch('aa aa\n. aa \naa. a\na.')
})

test('format text in mode "line breaks by char" and max line amount set to 2 ' +
    'to return text with line breaks by char and two lines', () => {
        const result = task5.textFormatter({
            string: text,
            maxLineSize: 5,
            maxLineAmount: 2,
            mode: task5.LineBreak.ByChar
        })
        expect(result).toMatch('aa aa\n. aa aa. aa.')
    })

test('format text in mode "line breaks by word" to return text with line breaks by word', () => {
    const result = task5.textFormatter({
        string: text,
        maxLineSize: 5,
        mode: task5.LineBreak.ByWord
    })
    expect(result).toMatch('aa\naa.\naa\naa.\naa.')
})

test('format text in mode "line breaks by word" and max line amount set to 2 ' +
    'to return text with line breaks by word and two lines', () => {
        const result = task5.textFormatter({
            string: text,
            maxLineSize: 5,
            maxLineAmount: 2,
            mode: task5.LineBreak.ByWord
        })
        expect(result).toMatch('aa\naa. aa aa. aa.')
    })

test('format text in mode "line breaks by sentence" to return text with line breaks by word', () => {
    const result = task5.textFormatter({
        string: text,
        maxLineSize: 5,
        mode: task5.LineBreak.BySentence
    })
    expect(result).toMatch('aa aa.\naa aa.\naa.')
})

test('format text in mode "line breaks by sentence" to return text with line breaks by sentence', () => {
    const result = task5.textFormatter({
        string: text,
        maxLineSize: 5,
        mode: task5.LineBreak.BySentence
    })
    expect(result).toMatch('aa aa.\naa aa.\naa.')
})

test('format text in mode "line breaks by sentence" and max line amount set to 2 ' +
    'to return text with line breaks by sentence and two lines', () => {
        const result = task5.textFormatter({
            string: text,
            maxLineSize: 5,
            maxLineAmount: 2,
            mode: task5.LineBreak.BySentence
        })
        expect(result).toMatch('aa aa.\naa aa. aa.')
    })

test('format text given incorrect string throws "String must be string"', () => {
    const result = task5.textFormatter
    expect(() => result({ string: 12 })).toThrow('String must be string')
})

test('format text given incorrect mode throws "Incorrect mode"', () => {
    const result = task5.textFormatter
    expect(() => result({ string: "2321", mode: 33 })).toThrow('Incorrect mode')
})

test('format text given non-number mode throws "Mode must be number"', () => {
    const result = task5.textFormatter
    expect(() => result({ string: "2321", mode: 'aa' })).toThrow('Mode must be number')
})

test('format textin mode "line break by char" not given max line size  throws "Specify max string size"', () => {
    const result = task5.textFormatter
    expect(() => result({ string: "2321", mode: task5.LineBreak.ByChar })).toThrow('Specify max string size')
})

test('format textin mode "line break by word" not given max line size  throws "Specify max string size"', () => {
    const result = task5.textFormatter
    expect(() => result({ string: "2321", mode: task5.LineBreak.ByWord })).toThrow('Specify max string size')
})