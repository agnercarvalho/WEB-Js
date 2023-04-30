const pessoa ={
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)   // aponta para o próprio objeto
    }
}

pessoa.falar()

const falar= pessoa.falar
falar() // conflito entre paradigmas: chama a função mas o this não consegue apontar para o objeto, pois só a função foi colocada na constante falar

const falarDePessoa = pessoa.falar.bind(pessoa) //bind resolve o this para o objeto que é passado por argumento.

falarDePessoa()