// objetos - par nome e valor - video 60
const saudacao = 'Opa'  // contexto léxico 1

function exec(){
    const saudacao = 'Faaaala'    //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares - chaves/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'Rua 123',
        numero: 321
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)