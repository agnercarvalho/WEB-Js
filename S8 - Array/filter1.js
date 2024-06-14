const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: "iPad Pro", preco: 4199, fragil: true},
    { nome: "Copo de Vidro", preco: 1.99, fragil: true},
    { nome: "Copo Plástico", preco: 5.99, fragil: false},
]

/*
console.log( produtos.filter(function(e){
    return e.preco > 2500
    //Na iteração, cada elemento cuja resposta seja retornado true ele aparecerá no novo array
    A FUNÇÃO FILTER TAMBÉM RECEBE OS MESMOS 3 PARÂMETROS DO MAP
}))
*/

const frageis = item => {return (item.fragil == true)}
const caros = item => {return item.preco > 1000}

console.log( produtos.filter(frageis), produtos.filter(caros) )