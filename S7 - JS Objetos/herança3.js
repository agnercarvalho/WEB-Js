// Video 123

const pai = {nome: 'Pedro', corCabelo:'preto' }

const filha1 = Object.create(pai); //cria com base no pai (prototipo)
filha1.nome = 'berenice';

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} //cria chaves e valores que podem ser especificados no momento da criação
});

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){   //for in, vai buscar a variavel key no objeto
    console.log(key);    // hasOwnProperty retorna true se cada chave existir dentro do objeto, caso seja herdado, ele retorna false
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}