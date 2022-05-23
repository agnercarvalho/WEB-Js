console.log("Caneta");
console.log(10);    //valor literal
console.log(6.4);
console.log(1.5);
console.log(7.9);

var nome = "Caneta";    
var quantidade = 10;
var preco = 6.4;
let imposto = 1.5;   //da pra criar com let
let precoFinal = preco + imposto;
let desconto = 0.05;

console.log(nome);
console.log(quantidade);
console.log(preco);    
console.log(imposto);
console.log(precoFinal);

console.log(precoFinal*(1-desconto));

// Strings

let categoria = "Papelaria";

console.log("Produto: " + nome + " - Categoria: " + categoria); /*concatenação */
console.log("Preco: " + preco + " - Imposto: " + imposto + 
            " - Desconto: " + desconto + "% - Valor final: " + 
            (precoFinal*(1-desconto)));


//Tipos

let idade = 30;  //number
console.log(typeof idade);

let salario = 4652.32;  //number
console.log(typeof salario);

let estaChovendo = false; //ou true
console.log(typeof estaChovendo);

let estaSol = "Sim";
console.log(typeof estaSol);

console.log("Transformando dados: ")

const PI = 3.1415;         //constante = não varia de acordo com o tempo, se
                           //tentar atribuir um novo valor o prog da erro
const number = Number('2.0');
const number2 = Number('2.335');

console.log(Number.isInteger(number));   //testa se é inteiro
console.log(Number.isInteger(number2));

console.log(number2.toFixed(2));    // 2 casas decimais sem alterar o valor da variavel
console.log(number.toString());     // transforma valor em string
console.log(number2.toString(2));    //converte em binario

console.log(PI);

console.log(PI, categoria);

//Alguns cuidados

console.log(7/0); //dá infinito
console.log("10"/2);    //verifica se string pode ser convertido
console.log("10,2"/2);  //não reconhece a virgula
console.log(0.1+0.7);   // imprecisões em ponto flutuante
// console.log(10.toString());     //dá erro
console.log((10.357).toFixed(2));  //funciona
console.log('3' + 2); //concatena, não soma
console.log('3' - 2); // ele faz a operação

//Math - operações matemáticas

const raio = 5.6;
const area = Math.PI * Math.pow(raio,2);  //potencia

console.log(area);
console.log(typeof Math);


//Strings - 43

const escola = "Colegio";

console.log(escola.charAt(4));        //caractere na quinta posição
console.log(escola.charAt(9));        // não retorna erro
console.log(escola.charCodeAt(4));    //codigo na tabela asci
console.log(escola.indexOf('o'));     //procura posicao do char na string
console.log(escola.substring(2));     //lê string a partir da posição 2
console.log(escola.substring(1,4));   //vai do 0 ao 4 sem incluir o 4 - vai do 1 ao 4 sem incluir o 4
console.log("Escola ".concat(escola).concat("!"));  //concatenação sem placeholder
console.log(escola.replace(3, 'u'));    //substitui valores na string

console.log('Ana,Maria,Pedro'.split(','));  //cria array com 3 elementos

//Template Strings - 44

const name = 'Julia';
const concatenacao = 'Ana ' + name + '!';
const template = `Olá ${concatenacao};`  //template

console.log(template);

console.log(`1+1 = ${1+1}`);

const up = texto => texto.toUpperCase();     //funções
console.log(`Ei... ${up('cuidado!')}`);

//Boolean - 45

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);  //testa se é verdadeiro, nega 2 vezes
console.log(!isAtivo);   //nega

console.log('os verdadeiros');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo=true));

console.log('os falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log(!!('' || null || 0 || ' ')); // || significa OU

let sobrenome = '';
console.log(sobrenome || 'Desconhecido');   //se não tiver nada na string ele imprime desconhecido
