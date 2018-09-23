'use strict'
function fun(x) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(x), 1000)
    })
}
module.exports = { fun }