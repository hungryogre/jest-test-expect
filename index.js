'use strict'

const mod = require('./module')

function doSomething(dataIn, callback) {
    mod.fun(dataIn)
        .then(dataOut => callback(42, dataOut))
        .catch(err => callback(-1, err))
}

module.exports = doSomething