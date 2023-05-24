require('./global')  // basta fazer isso uma unica vez

console.log(MinhaApp.saudacao(), MinhaApp.nome)

MinhaApp.nome = 'Eita!' //Consigo mudar o atributo de um objeto global (isso é perigoso) a nao ser que eu use o metodo freeze

console.log(MinhaApp.saudacao(), MinhaApp.nome)