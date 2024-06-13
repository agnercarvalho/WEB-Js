console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Calos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Agner')
console.log(aprovados)
console.log(aprovados.length)