// Convenção que deve ser respeitada

const sequencia = {
    _valor: 1, //convenção para mostrar que ela deve ser acessada somente pelo objeto
    get valor(){  //vantagem de fazer isso é que pode fazer verificações de dados
        return this._valor++;
    },
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor;
        }
        else{console.log("Valor menor do que o atual!");}
    }
}

console.log(sequencia.valor, sequencia.valor)  //Chama o GET 

sequencia.valor = 1000; //Chama o SET