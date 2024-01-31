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

// cliente.enderecos.push({
//     rua: 'R.Joseph Ladder',
//     numero: 404,
//     apartamento: false
//     }
// );

//const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true)

console.log(cliente);
// console.log(listaApenasApartamentos)
