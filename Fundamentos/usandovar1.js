{{{{var sera = 'Será???'}}}}

console.log(sera)

var numero = 1

{
    var numero = 2       //var fora da função influencia na variavel de fora
    console.log('dentro = ', numero)
}

console.log('fora = ' + numero)