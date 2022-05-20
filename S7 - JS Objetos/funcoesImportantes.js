const pessoa = {
    nome: "Gabriel",
    idade: 32,
    peso: 69
}
console.log(Object.keys(pessoa)); // pega as chaves do objeto
console.log(Object.values(pessoa)); // pega somente os valores
console.log(Object.entries(pessoa)); // retorna um array dentro de um array [[chave1, valor1], [chave2, valor 2] ...]

Object.entries(pessoa).forEach(([chave, valor]) => {  //usando operador destructing
    console.log(`${chave}: ${valor}`);
});

//Função que define propriedades
Object.defineProperty(pessoa,"dataNascimento", {
    enumerable: true,   // aparece na listagem de propriedades?
    writable: false,    // pode ser sobrescrito? 
    value: "16/05/2022"    // valor
})

pessoa.dataNascimento = "01/01/2000";   //não vai alterar
console.log(pessoa.dataNascimento);

//Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };

const obj = Object.assign(dest, o1, o2); //Concatena objetos, e sobrescreve os valores de chaves iguais na ordem colocada (destino, obj1, obj2 ...)

console.log(obj);
