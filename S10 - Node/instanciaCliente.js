const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()   //returna uma função e invoca a função factory -- retornando um objeto
const contadorD = require('./instanciaNova')()   

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)  //muda porque é uma instancia unica ou seja, os dois contadores A e B compartilham o mesmo objeto criado no momento do require

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)  //os valores são diferentes!
