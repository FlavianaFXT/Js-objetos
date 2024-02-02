const dados = require("./cliente.json")
//require: função que puxa dados de um outro lugar

console.log(dados)
console.log(typeof dados) 
//typeof mostra o tipo do dado. Nesse caso, objeto

const clienteemString = JSON.stringify(dados)
//transforma o objeto em string

console.log(clienteemString)
console.log(typeof clienteemString)

//console.log(clienteemString.nome) Nesse caso recebemos undifened. Para solucionar isso, usamos:

const objetoCliente = JSON.parse(clienteemString)
console.log(objetoCliente)