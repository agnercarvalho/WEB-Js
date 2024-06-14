
//IMPLEMENTAÇÃO DO MAP
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0 ; i < this.length ; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com os preços

const paraJson = json => JSON.parse(json)
const apenasPreco = item => item.preco 

const precos = carrinho.map2(paraJson).map2(apenasPreco)
//A ORDEM DE EXECUÇÃO É DA ESQUERDA PARA DIREITA, o resultado do primeiro map é um array dos objetos
console.log(precos)
