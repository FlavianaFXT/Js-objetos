const  cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['11 555550055', '11 44440044'],
    saldo: 300,
    efetuaPagamento: function(valor){
        if (valor > this.saldo){
            console.log('Saldo insuficiente');
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo Saldo: ${this.saldo}`);
        }
    }
}

cliente.efetuaPagamento(250);