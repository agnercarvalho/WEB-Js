array = ['Agner','Juan','Calos','Gustavo','João','Gilberto']

function forEach2(exemplo){
    for(let indice = 0 ; indice < exemplo.length ; indice++){
        console.log(`${indice+1}) ${exemplo[indice]}`)
    } 
}

forEach2(array)