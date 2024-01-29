const cliente = {
    nome: 'Andre',
    idade: 32,
    cpf: '11111222233',
    email: 'andre@dominio.com'
}

// console.log(`O nome do cliente é ${cliente['nome']} e ele tem ${cliente['idade']} anos.`)

// outra forma
const chaves = ['nome', 'idade', 'cpf', 'email'];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})