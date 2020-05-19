'use strict'

function errorHandler(error) {
    console.log(error);
    throw new Error('Failed at server operation')
}

module.exports = errorHandler