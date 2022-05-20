//Aula 65

const [a] = [10]
console.log(a)

//Aula 66

function rand({min=0, max=1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))

//Aula 67

function numrand( [minimo = 0, maximo = [1000]]){
    if (minimo > maximo) [minimo,maximo] = [maximo,minimo]
    const numero = Math.random() * (maximo - minimo) + minimo
    return Math.floor(numero)
}

console.log(numrand([30,40]))   //estabelece o maximo e o minimo
console.log(numrand([400]))  //pega o minimo
console.log(numrand([,40]))  //passa só o maximo