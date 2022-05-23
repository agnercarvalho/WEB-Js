//quando declara var ele iça pra cima

console.log('a = ', a)    //indefinida mas existe

var a = 2

console.log('a = ', a)

function teste(){
    console.log('b = ', b)    //indefinida mas existe - não sai do escopo
    var b = 2
    console.log('b = ', b)
}

teste()
//console.log(b)  - erro - variavel nao sai do escopo

//console.log('b = ', b)     LET não iça a variável
//let b = 2
//console.log('b = ', b)

