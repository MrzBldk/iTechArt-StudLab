class arraySorter {

    static bubbleSort(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Must be an array')
        if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }

        return arr;
    }

    static insertionSort(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Must be an array')
        if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

        let key, j;
        for (let i = 1; i < arr.length; i++) {
            key = arr[i]
            j = i - 1
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j]
                j = j - 1;
            }
            arr[j + 1] = key
        }

        return arr;
    }

    static shellSort(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Must be an array')
        if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

        for (let gap = ~~(arr.length / 2); gap > 0; gap = ~~(gap / 2)) {
            for (let i = gap; i < arr.length; i++) {
                let temp = arr[i]
                let j
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap]
                }
                arr[j] = temp;
            }
        }

        return arr;
    }

    static selectionSort(arr) {
        if (!Array.isArray(arr)) throw new TypeError('Must be an array')
        if (arr.some(isNaN)) throw new TypeError('Array must contain only numbers')

        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            let temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp
        }

        return arr
    }
}

module.exports = arraySorter 