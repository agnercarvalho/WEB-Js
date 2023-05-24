// console.log(global)
global.MinhaApp = {
    saudacao() {
        return 'Estou em todo o sistema'
    },
    nome: 'Sistema Global'
}

// Uma vez que esse módulo for lido ou chamado, qualquer outro arquivo do meu sistema terá acesso!

// global.MinhaApp = Object.freeze{
//     saudacao() {
//         return 'Estou em todo o sistema'
//     },
//     nome: 'Sistema Global'
// } 
// Fazendo isso eu não conseguirei mudar os valores quando importar em outra area do sistema
