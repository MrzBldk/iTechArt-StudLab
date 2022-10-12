//TASK 8

class binaryConverter {

    static convertBinaryToDecimal(arr) {
        let num = "0b"
        for (let i = arr.length - 1; i > 0; i--)
            num += arr[i]
        num = arr[0] ? -num : + num
        return num.toString()
    }

    static convertDecimaltoBinary(arr) {
        let num = 0
        for (let i = arr.length - 1; i > 0; i--)
            num += arr[i] * Math.pow(10, i - 1)
        if (arr[0])
            num *= -1
        return num.toString(2)
    }
}

module.exports = binaryConverter