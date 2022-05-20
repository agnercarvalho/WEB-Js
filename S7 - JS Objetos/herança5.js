console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){   //adiciona um método dentro da função String
    return this.split('').reverse().join('')
}
//split separa um array, reverse reverte um array e join agrupa o array novamente

console.log("Texto inverso".reverse())

Array.prototype.first = function() {
    return this[0];
}

console.log([1,2,3,4,5].first());

//não mexer em protótipos de funções que já existem!!!!