// 52 var

{{{ var sera = 'Será???' }}} //visivel em todo o código (msm fora do bloco de codigo - escopo)

console.log(sera)

function teste(){
    var local = 123
}

teste()
//console.log(local)    //não consegue acessar a variavel fora do escopo

// var ou é nivel global ou no escopo de função - IMPORTANTE

