//TASK 3

function getLongestIncreasingSubarray(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Must be an array')
    if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

    let maxsubarr = [], subarr = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            subarr.push(arr[i])
        }
        else {
            if (subarr.length > maxsubarr.length) {
                maxsubarr = subarr
            }
            subarr = [arr[i]]
        }
    }

    return maxsubarr
}

module.exports = getLongestIncreasingSubarray