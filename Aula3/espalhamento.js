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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`)
}

// ligaParaCliente(cliente.telefone[0],cliente.telefone[1])
// ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    // rua: cliente.enderecos[0].rua,
    // numero: cliente.enderecos[0].numero,
    // //endereco: cliente.enderecos[0]
    ...cliente.enderecos[0]
}

console.log(encomenda)