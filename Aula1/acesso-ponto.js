const cliente = {
    nome: 'Andre',
    idade: 32,
    cpf: '11111222233',
    email: 'andre@dominio.com'
}

// console.log(cliente); traz todas as infos

// console.log(cliente.nome);

//mensagem automatizada:
console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos.`);

console.log(`Os três primeiros dígitos do CPF são ${cliente.cpf.substring(0,3)}`);