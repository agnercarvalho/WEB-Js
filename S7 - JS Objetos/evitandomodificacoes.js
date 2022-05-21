//Object.preventExtensions    - não pode adicionar atributos ao objeto mas permite remover
const objeto = {nome:"Cadeira", preco: 89.90, tag:"promocao"}
Object.preventExtensions(objeto);

console.log(Object.isExtensible(objeto));
objeto.nome = "Impressora";
objeto.preco = 899;
delete objeto.tag;

console.log(objeto);

//Object.seal  - sela objetos, consigo alterar os valores mas nao permite adicionar nem remover chaves
const pessoa = {nome:"Alguem", idade:20};
Object.seal(pessoa);

pessoa.nome = "Ciclano";
pessoa.idade = 30;
pessoa.signo = "Leão"
console.log(pessoa);

//Object.freeze - congela o objeto, não permitindo modificar o objeto (valores, chaves, ...)
const produto = {nome:"Caneta", preco: 2.50};
Object.freeze(produto);

produto.nome = "Caderno";
produto.preco = 34;

console.log(produto);
