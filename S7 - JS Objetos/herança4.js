function MeuObjeto() {}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

// objetos criados a partir de uma função construtora usando NEW, o __proto__ aponta para função.prototype 

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar();
obj2.nome = "Ana";
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Obj3"
obj3.falar()

// Resumindo as cadeias de prototipos
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

/* O que eu preciso saber
Quando crio objeto a partir de uma função, o objeto criado tem o protótipo apontando pra função.prototype

Ver anotação do vídeo 124 > minuto 8:18
*/