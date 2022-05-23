for (var i = 0; i < 10; i++) {   //i visivel fora do bloco
    console.log(i)
}

console.log('i =', i)   //i sai do laço quando desobedece a função

for (let a = 0; a < 10; a++) {   //a visivel somente dentro do bloco
    console.log(a)
}

// console.log('a =', a)   //a não sai do escopo da função acima, da erro

