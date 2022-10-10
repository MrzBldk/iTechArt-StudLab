class Calculator {

    constructor(cacheSize = Number.MAX_SAFE_INTEGER) {
        this.#cacheSize = cacheSize
    }

    #cacheSize

    sum = (x, y) => x + y
    subtract = (x, y) => x - y
    multiply = (x, y) => x * y
    divide = (x, y) => x / y


    #memoize(func) {
        let cache = {}
        return function (...args) {
            if (args in cache) {
                console.log('fetching from cache')
                return cache[args]
            }
            console.log('calculating')
            let result = func.apply(this, args)
            if (Object.keys(cache).length < this.#cacheSize) {
                cache[args] = result
                console.log('cached calculated result')
            }
            else{
                console.log('cache is full')
            }
            return result
        }
    }

    registerFunc(func) {
        if (typeof func !== 'function') throw new TypeError('Must be a function')
        this[func.name] = func
    }

    enableCaching(funcName) {
        if (this[funcName])
            this[funcName] = this.#memoize(this[funcName])
        else
            throw new Error('There is no such function')
    }
}



module.exports = Calculator