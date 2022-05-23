let numero = 1 
{
    let numero = 2       //influencia somente no escupo de bloco 
    console.log('dentro = ' + numero)
}
console.log('fora = ' + numero)

