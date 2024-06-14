const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com os preços

const paraJson = json => JSON.parse(json)
const apenasPreco = item => item.preco 

const precos = carrinho.map(paraJson).map(apenasPreco)
//A ORDEM DE EXECUÇÃO É DA ESQUERDA PARA DIREITA, o resultado do primeiro map é um array dos objetos
console.log(precos)


const objetos = carrinho.map(paraJson)
console.log(objetos)
const precos2 = objetos.map(apenasPreco)
console.log(precos2)