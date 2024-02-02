const clientes = require("./clientes.json")

function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return(cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"))
    })
}

const filtrados = filtrarApartamentoSemComplemento(clientes)
//pega todos os clientes que possuem apartamento como true, mas nao possuem complemento

console.log(filtrados)