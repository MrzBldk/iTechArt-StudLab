//TASK 2

function getMin(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Must be an array')
    if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

    let min = Number.MAX_SAFE_INTEGER

    for (let num of arr)
        min = Math.min(min, num)

    return min
}

function getMax(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Must be an array')
    if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

    let max = Number.MIN_SAFE_INTEGER

    for (let num of arr) {
        max = Math.max(max, num)
    }

    return max
}

function getMed(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Must be an array')
    if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

    arr.sort((a, b) => a - b)

    return arr.length % 2 ? arr[(arr.length - 1) / 2] : (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
}

module.exports = {
    getMin,
    getMax,
    getMed
}