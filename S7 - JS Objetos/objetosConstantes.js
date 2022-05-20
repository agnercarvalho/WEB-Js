const pessoa = {nome: "João"}
console.log(pessoa);

// É possivel alterar os valores do objeto mesmo usando const, por a variavel vai guardar o endereço de memória e não o dado em si. Para bloquear modificações no objeto usa-se:

Object.freeze(pessoa);

pessoa.nome = "Katia"; //Não vai funcionar
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: "João"}); //Já cria bloqueado
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);