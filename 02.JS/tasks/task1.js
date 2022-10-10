//O(n^2)
function getMaxSubSumSlow(arr) {

    if (!Array.isArray(arr)) throw new TypeError('Must be an array')
    if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

    let max = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (j = i; j < arr.length; j++) {
            sum += arr[j]
            max = Math.max(max, sum)
        }
    }

    return max
}

//O(n)
function getMaxSubSumFast(arr) {

    if (!Array.isArray(arr)) throw new TypeError('Must be an array')
    if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

    let max = Number.MIN_SAFE_INTEGER, partial = 0;

    for (let num of arr) {
        partial += num
        max = Math.max(max, partial)
        if (partial < 0) {
            partial = 0
        }
    }

    return max;
}

module.exports = {
    getMaxSubSumSlow: getMaxSubSumSlow,
    getMaxSubSumFast: getMaxSubSumFast
}