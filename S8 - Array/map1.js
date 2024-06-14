const nums = [1,2,3,4,5]

// É um for com propósito e transforma o array em um novo array do mesmo tamanho

let resposta = nums.map( function(e){
    return e*2
})
//Posso ter 3 argumentos na função de callback, o elemento, o indice e o array completo

console.log(resposta)

const soma10 = e => e + 10    //soma10 recebe uma função de callback com argumento E e retorna o E+10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
                                //toFixed(2) = coloca 2 casas decimais somente
                                // replace('.' , ',') transforma o ponto em vírgula

resposta = nums.map(soma10).map(triplo).map(paraDinheiro)    //posso encadear maps para aplicar transformações diferentes
console.log(resposta)