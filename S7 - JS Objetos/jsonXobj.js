const pessoa = {nome: "Ed", idade: 23, altura: 1.8};

console.log(JSON.stringify(pessoa));   //transforma em texto um objeto - ATENÇÃO, json ignora métodos dentro de objetos.

console.log(JSON.parse(`{"a": 12, "b": 30, "c": "Cê", "d": true}`))  //pega o texto e devolve um objeto