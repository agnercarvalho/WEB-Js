// Usando a notação literal
const obj1 = {};
console.log(obj1);


//Object em JS
console.log(typeof Object, typeof new Object);


//função construtora
function Produto(nome,preco,ref,desc){
    this.nome = nome;
    this.preco = preco;
    this.ref = ref;
    this.getPrecoDesconto = () =>{
        return preco * (1 - desc);
    }
}
const prod = new Produto("Caneta", 1.95,1,0.25);
console.log("Produto: " + prod.nome + "  Ref: "+ prod.ref + "  Preço: "+ prod.preco + "  Produto com desconto: " + prod.getPrecoDesconto());


//função Factory (padrão de projeto)
function criarFuncionario(nome, salarioBase,faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase/30)*(30-faltas))
        }
    }
}
const f1 = criarFuncionario('Funcionario1',3400,2);
const f2 = criarFuncionario('Funcionario2',3600,5);
console.log(f1.getSalario(), f2.getSalario());


//Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);


//JSON função que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON);