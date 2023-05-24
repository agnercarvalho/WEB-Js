const moduloA = require('../../moduloA')  //pode acessar pelo caminho absoluto
console.log(moduloA.ola)  /*Colocar do mesmo jeito 'Case Sensitive' */

const c = require('./pastaC')  //Como o arquivo dentro da pastaC é o index, eu não preciso colocar o nome do arquivo, pois ele pega automaticamente
console.log(c.ola2)

 const http = require('http')   // modulo disponivel no node
 http.createServer((req,res) =>{
    res.write('Bom dia')
    res.end()
 }).listen(8080)