/*
    GERENCIADOR DE PACORES - NPM
    npm init            Inicia um projeto
    npm init -y         Inicia um projeto e responde sim para as perguntas
    npm i --save axios  Quando eu quiser usar um modulo como dependencia de um projeto iniciado com npm init (vai adicionar a dependencia no package.json)

    PACKAGE.JSON
    Dependencias: 
        quando a versão apresenta ^ quer dizer que versão minor pode ser atualizada 0.17.1 (mudará a 17) 
        quando a versão apresenta ~ quer dizer que o fix pode ser atualizada 0.17.1 (mudará a 1)
        quando a versão não apresentar nada quer dizer que usará a versão específica

    npm i --save-dev axios@0.17.1 -E
    dependencia necessária em desenvolvimento - axios - versão - (-E adiciona a versão exata)
    criará uma area de devDependences no package.json
*/


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');   // biblioteca que faz requisições http

axios.get(url).then(response => {  //usa metodo get
    const funcionarios = response.data
    // console.log(funcionarios)

    let chineses = funcionarios.filter( funcionario => {
        if((funcionario.pais === "China") && (funcionario.genero === "F") ) {return funcionario}
    })
    
    let salarioAnterior = chineses[0].salario
    let menorSalario 
    chineses.forEach(pessoa => {
        if(pessoa.salario < salarioAnterior) { menorSalario = pessoa }
    })
    console.log(menorSalario)

})