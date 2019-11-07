const { getOptions } = require('loader-utils');
const {
    strToHex
} = require('./libs/index.js')

module.exports = function loader(code) {
    const options = getOptions(this);
    code = strToHex(code)
    return code;
};