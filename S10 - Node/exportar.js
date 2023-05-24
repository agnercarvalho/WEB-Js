console.log(module.exports === this)
console.log(module.exports === exports)


// module.exports é criado no inicio do arquivo, sendo um objeto vazio, eu consigo ir atribuindo novas chaves a esse objeto.
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null  // mesmo que eu atribua novamente valores, o module.exports não muda
console.log(module.exports)    //module.exports é o mais importante, é o que é exportado

exports = {    // também não funciona, ele não reatribui o objeto module.exports
    nome: 'Teste'
}

// Quando eu precisar atribuir um novo objeto para exportar, é importante sempre usar o module.exports
// Se eu atribuir um novo objeto, somente ele será exportado, limpando as alterações anteriores

module.exports = {objeto: true}

console.log(module.exports)