const  cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['11 555550055', '11 44440044']
}

cliente.enderecos = {
    rua: 'R. Joseph Climber',
    numero: 1334,
    apartamento: true,
    complemento: 'ap 934'
}

for(let chave in cliente){
    //console.log(chave);
    //console.log(cliente[chave]);
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }
}