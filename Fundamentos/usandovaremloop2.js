const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()              //nao funciona

const funcsa = []

for (let a = 0; a < 10; a++) {
    funcsa.push(function(){
        console.log(a)
    })
}               //funciona

funcsa[2]()
funcsa[8]()