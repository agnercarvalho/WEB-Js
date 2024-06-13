const pilotos = ['Piloto 1', 'Piloto 2', 'Piloto 3']
console.log(pilotos)

pilotos.pop()   //Remove o ultimo elemento
console.log(pilotos)

pilotos.push('Piloto 4')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Piloto 5')
console.log(pilotos)

//SPLICE pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Piloto 6', 'Piloto 7') //adiciona dois elementos a partir do indice 2
console.log(pilotos)

//removendo
pilotos.splice(3, 1)  // remove 1 elemento no indice 3
console.log(pilotos)

//SLICE - retorna um novo array a partir de um índice determinado
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//Retornar um pedaço do Array
const algunsPilotos2 = pilotos.slice(1,3)  //não inclui o índice do final (3), só pega o 1 e o 2
console.log(algunsPilotos2)