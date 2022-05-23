//Array - 46  - estrutura dinamica e indexavel

const valores = [7.7,8.9,6.3,9.2] // forma literal

console.log(valores[0], valores [3])
console.log(valores[4])   //gera valor indefinido

valores[4] = 10
console.log(valores[4])
console.log(valores.length)  //quantos elementos

valores.push({id: 3}, false, null, 'teste')  //adiciona dados (heterogenios)
console.log(valores)

console.log(valores.pop())  //retira do array o ultimo elemento
console.log(valores)

delete valores[0] // deleta o primeiro elemento do array
console.log(valores)

console.log(typeof valores)


//Objetos - 47

const prod1 = {}   //cria objeto vazio
prod1.nome = 'Celular Ultra Mega'    //atribui um valor a chave dentro do objeto
prod1.preco = 499.90
prod1['Desconto'] = 0.4             //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 65.20
}

console.log(prod2)


// Null e undefined - 48

//em tipos primitivos os valores são passados por cópia
//em objetos a atribuição é feita atravéz de ponteiros

let valor
console.log(valor)    

valor = null            //ausencia de valor - ou não aponta para nada
console.log(valor)      //não atribuir undefined

// console.log(valor.toString())   não consegue acessar, dá erro

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 2.59
console.log(produto)

produto.preco = undefined  //evitar usar
console.log(!!produto.preco)
console.log(produto.preco)

//delete produto.preco   deleta a chave e o valor

produto.preco = null
console.log(produto)
console.log(!!produto.preco)


// Funcoes - 49

console.log(typeof Object)

class Produto {}
console.log(typeof Produto)

// Exemplos - 50

//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)          //soma o numero mas soma com undenifed
imprimirSoma(2,3,4,6,5)  //pega só os 2 primeiros
imprimirSoma()

//funcao com retortno
function soma(a, b = 1){    //valor padrão de B caso nao seja passado
    return a + b
}

console.log(soma(2,8))
console.log(soma(2))

//Armazenar função dentro de variável
const impSoma = function(j,k) {
    return (j + k)
}

console.log(impSoma(1,1))

//Armazenar função Arrow em uma variável
const Sum = (j,k) => {
    return j + k
}

console.log (Sum(3,4))

//retorno implícito
const subtracao = (j, k) => j - k
console.log(subtracao(6,5))

