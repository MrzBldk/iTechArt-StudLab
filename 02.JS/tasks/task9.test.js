const task9 = require('./task9')

test('calculator util to call registred function with specified params and result', () => {
    const mockCallback = jest.fn(x => x)
    const calc = new task9()

    calc.registerFunc(mockCallback)

    calc.mockConstructor(1)
    calc.mockConstructor(2)

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(1);
    expect(mockCallback.mock.calls[1][0]).toBe(2);
    expect(mockCallback.mock.results[1].value).toBe(2);
})

test('calculator util to call registred function after enabling caching', () => {
    const mockCallback = jest.fn(x => x)
    const calc = new task9()

    calc.registerFunc(mockCallback)
    calc.enableCaching('mockConstructor')

    calc.mockConstructor(1)
    calc.mockConstructor(2)

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(1);
    expect(mockCallback.mock.calls[1][0]).toBe(2);
    expect(mockCallback.mock.results[1].value).toBe(2);
})

test('calculator util to take result from cache after enabling caching', () => {
    const mockCallback = jest.fn(x => x)
    const calc = new task9()
    const spy = jest.spyOn(console, 'log');

    calc.registerFunc(mockCallback)
    calc.enableCaching('mockConstructor')

    calc.mockConstructor(1)
    calc.mockConstructor(1)

    expect(mockCallback.mock.calls.length).toBe(1);
    expect(spy).toHaveBeenCalledWith('fetching from cache');
})


test('calculator util to stop caching if cache is full', () => {
    const mockCallback = jest.fn(x => x)
    const calc = new task9(0)
    const spy = jest.spyOn(console, 'log');

    calc.registerFunc(mockCallback)
    calc.enableCaching('mockConstructor')

    calc.mockConstructor(1)

    expect(mockCallback.mock.calls.length).toBe(1);
    expect(spy).toHaveBeenCalledWith('cache is full');
})

test('calculator util default functions to work', () => {
    const calc = new task9()
    const sumResult = calc.sum(1, 2)
    const subResult = calc.subtract(1, 2)
    const mulResult = calc.multiply(1, 2)
    const divResult = calc.divide(1, 2)

    expect(sumResult).toBe(3)
    expect(subResult).toBe(-1)
    expect(mulResult).toBe(2)
    expect(divResult).toBeCloseTo(0.5)
})

test('calculator util registring not function to throw "Must be a function"', () => {
    const calc = new task9()
    expect(() => calc.registerFunc(1)).toThrow('Must be a function')
})

test('calculator util enabling caching for non-existent function to throw "There is no such function"', () => {
    const calc = new task9()
    expect(() => calc.enableCaching('cos')).toThrow('There is no such function')
})