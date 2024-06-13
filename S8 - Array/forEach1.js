const aprovados = ['Agner', 'Juan', 'Erick', 'Luzia', 'Erivelto']

aprovados.forEach(function(nome,indice, array){
    console.log(`${indice+1}) ${nome}`)
})
//forEach chama uma função que callback passando o próprio elemento e o ínidice do elemento que esta sendo executado no momento. O terceiro parametro que é passado é o próprio array!

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)  //cria uma gunção e atribui a uma variável

aprovados.forEach(exibirAprovados)