const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome,indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)  // Callback é executada sempre a cada evento, nesse caso, cada item
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
fabricantes.forEach((fabricante) => console.log(fabricante))