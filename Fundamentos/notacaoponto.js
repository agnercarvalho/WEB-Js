//aula 62

console.log(Math.ceil(6.1))  //arredonda pra cima

// o ponto acessa uma função dentro de um objeto

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'blabla'   mesma coisa do de cima

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome               //cria um atributo publico
}

const obj2 = new Obj('Cadeira')    //cria uma instancia da funcao

const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)