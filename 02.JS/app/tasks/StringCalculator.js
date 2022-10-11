//TASK 6

class stringCalculator {

    static sum(x, y) {
        if (typeof x !== 'string' || typeof y !== 'string') throw new TypeError('Params must be strings')
        if (isNaN(x) || isNaN(y)) throw new TypeError('Params must be string representaition of numbers')
        return +x + +y
    }

    static subtract(x, y) {
        if (typeof x !== 'string' || typeof y !== 'string') throw new TypeError('Params must be strings')
        if (isNaN(x) || isNaN(y)) throw new TypeError('Params must be string representaition of numbers')
        return +x - y
    }

    static multiply(x, y) {
        if (typeof x !== 'string' || typeof y !== 'string') throw new TypeError('Params must be strings')
        if (isNaN(x) || isNaN(y)) throw new TypeError('Params must be string representaition of numbers')
        return x * y
    }

    static divide(x, y) {
        if (typeof x !== 'string' || typeof y !== 'string') throw new TypeError('Params must be strings')
        if (isNaN(x) || isNaN(y)) throw new TypeError('Params must be string representaition of numbers')
        return x / y
    }

    static pow(x, y) {
        if (typeof x !== 'string' || typeof y !== 'string') throw new TypeError('Params must be strings')
        if (isNaN(x) || isNaN(y)) throw new TypeError('Params must be string representaition of numbers')
        return this.#pow(x, y)
    }

    static #pow(x, y) {
        let temp

        if (y == 0) return 1

        temp = this.#pow(x, ~~(y / 2))

        if (y % 2 == 0) return temp * temp

        if (y > 0) return x * temp * temp

        return (temp * temp) / x
    }
}

module.exports = stringCalculator