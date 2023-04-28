// Video 122

// Cadeia de protótipos - prototype chain

const avo = { atrib1: 'A'};
const pai = { __proto__: avo, atrib2: 'B', atrib3: '3'};
const filho = { __proto__: pai, atrib3: 'C'};

console.log(filho.atrib1); //vai olhar primeiro para o protótipo apontado e se não encontrar, ele vai buscar no que está acima

// Caso o mesmo atributo exista em 2 objetos encadeados, ele sempre vai pegar o que está no escopo
console.log(filho.atrib3);


// Exemplo

// Modelo carro
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        } else{
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const fusca = {
    modelo: 'fusca',
    velMax: 95
}

const fiat147 = {
    modelo: 'fiat 147',
    velMax: 80,
    status(){    // sobrescreve o método 'status' do pai
        return `${this.modelo}: ${super.status()}`;
    } // Super chama o método que está no protótipo pai
}

Object.setPrototypeOf(fusca, carro); //fusca tem carro como protótipo (objeto + protótipo) é o mesmo que __proto__: carro
Object.setPrototypeOf(fiat147, carro);

console.log(fusca)
console.log(fiat147)

fiat147.acelerarMais(50)
fiat147.acelerarMais(50)
console.log(fiat147.velAtual, fiat147.status())