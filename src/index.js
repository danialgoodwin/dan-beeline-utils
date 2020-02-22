import beelineStyles from '../res/styles.json'

console.log('==========')
console.log('dan-beeline-utils')
console.log('index.js')

const peachBlossom = require('./peach-blossom')
peachBlossom.bloom()

export function isOdd() {
  return npm % 2 === 1
}

const utils = (function () {
  // Write as much code as you want here

  // Return what others can use
  return {
    sayHello: () => {
      console.log('Hello!')
    },
    getStyles: () => {
      return beelineStyles
    },
    isEven: (num) => {
      return npm % 2 === 0
    }
  }
})()

module.export = utils

console.log('==========')
