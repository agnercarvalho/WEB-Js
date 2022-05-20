const variavelA = 1;
const variavelB = 2;
const variavelC = 3;

const obj1 = {            //atribuir valores de variáveis já existentes
    a: variavelA,
    b: variavelB,
    c: variavelC
}
console.log(obj1)

const obj2 = {   //o nome das variáveis viram chave e o valor continuam sendo os valores
    variavelA,
    variavelB,
    variavelC
}
console.log(obj2)

const atributo = "nome";
const valor = 45;

const obj3 = {};
obj3[atributo] = valor;     //Atribuir valores de variáveis como atributos de objeto
console.log(obj3);

const obj4 = { [atributo]: valor };
console.log(obj4);

const obj5 = {
    funcao1(){
        //...
    }
}
console.log(obj5)