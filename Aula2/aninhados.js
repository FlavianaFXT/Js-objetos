const  cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['11 555550055', '11 44440044']
}

cliente.endereco = {
    rua: 'R. Joseph Climber',
    numero: 1334,
    apartamento: true,
    complemento: 'ap 934'
}

console.log(cliente);
console.log(cliente.endereco);
console.log(cliente['endereco']);