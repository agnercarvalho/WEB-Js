const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__); //acessa o super objeto (objeto pai)
console.log(ferrari.__proto__ === Object.prototype);  //represente o object.prototype
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);  //não tem objeto além desse

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);

// .PROTOTYPE ESTÁ DISPONÍVEL APENAS EM FUNÇÕES!!!