const LineBreak = { ByChar: 0, ByWord: 1, BySentence: 2, None: 3 }

function textFormatter({ string, maxLineSize, maxLineAmount, mode = 3 }) {

    if (typeof string != 'string') throw new TypeError('String must be string')
    if (typeof mode != 'number') throw new TypeError('Mode must be number')

    let output = string.replaceAll('\n', ' ')

    switch (mode) {

        case 0:
            if (!maxLineSize) throw new Error('Specify max string size');

            let iMax = maxLineAmount ? maxLineAmount * (maxLineSize + 1) : output.length + output.length / maxLineSize;
            for (let i = maxLineSize; i < iMax - 1; i += maxLineSize + 1)
                output = [output.slice(0, i), '\n', output.slice(i)].join('')
            return output

        case 1:
            if (!maxLineSize) throw new Error('Specify max string size');
            let counter = 1
            for (let j = maxLineSize; j > 0; j--) {
                if (output[j] === ' ') {
                    output = [output.slice(0, j), '\n', output.slice(j + 1)].join('')
                    counter++
                    if (counter >= maxLineAmount) {
                        break
                    }
                    if (j + maxLineSize < string.length) {
                        j += maxLineSize + 1
                    }
                    else {
                        break
                    }
                }
            }

            return output

        case 2:
            maxLineAmount ??= output.split('. ').length
            for (let i = 1; i < maxLineAmount; i++)
                output = output.replace('. ', '.\n')
            return output

        case 3:
            return output

        default: 
            throw new Error("Incorrect mode")
    }
}

module.exports = {
    LineBreak: LineBreak,
    textFormatter: textFormatter
}