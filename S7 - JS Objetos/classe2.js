class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{   //estabelece a relação de protótipo
    constructor(sobrenome, profissao = "professor"){
        super(sobrenome);   //chama o construtor de Avo
        this.profissao = profissao;   
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva');
    }
}

const filho = new Filho;
console.log(filho);