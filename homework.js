'use strict'

function BinarioADecimal(num) {

  return Number.parseInt(num, 2);

}

function DecimalABinario(num) {
  
  return num.toString(2);

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}