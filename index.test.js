'use strict'

jest.mock('./module')
const mod = require('./module')
const doSomething = require('./index')

test('it should return 42', done => {
    mod.fun.mockReturnValueOnce(Promise.resolve({ a: 1 }))

    doSomething({ y: 7 }, (code, result) => {
        console.log(`test1`)
        expect(code).toBe(42)
        console.log(`test2`)
        expect(result).toEqual({ a: 1 })
        console.log(`test3`)
        done()
    })
})
