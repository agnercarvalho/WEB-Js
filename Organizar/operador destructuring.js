// recurso ES2015 - aula 64

const pessoa = {
    nome: "ana",
    idade: 5,
    numero: 100,
    end: {  rua: 'dos bobos',
            numero: 0}
}

const { nome, idade } = pessoa  //tira do obj pessoa o nome e idade
console.log(nome,idade)

const { nome: n, idade: i} = pessoa  //tira do obj e cria variaveis
console.log(n,i)

const { sobrenome, casa = true } = pessoa     //cria um valor padrão para casa
console.log(sobrenome, casa)                    //se ela não estiver na estrutura

const { end: { rua, numero} } = pessoa
console.log(rua, numero)
