# Js-objetos
curso da Alura de Javascript - resumo dos conteúdos

 AQUI
 estrutura de dados chamada de objetos no Javascript, muito importante em linguagens de programação modernas. Estudamos como criar um objeto, adicionar propriedades e alterar seus valores.

 Que objeto é um tipo de dado que reflete uma abstração dos objetos da vida real;
Que a estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };
Que para acessar dados em um objeto podemos usar as notações de ponto e de colchete;
Que para adicionar e manipular dados em um objeto precisamos saber como acessar suas propriedades.


O que vamos aprender?

Objetos

O que são objetos e como alterar seus campos?
Propriedades de objetos
Formato JSON

## 1.O que são objetos?





### Adicionando e Alterando

TypeError: Assignment to constant variable.

Em português, atribuição à variável constante. Logo, isso é o que não podemos fazer, mas se tivermos um objeto armazenado em uma variável constante, podemos manipulá-lo, porém, não podemos reatribuir algum valor naquela variável.


#### Para saber mais: tipos de variáveis e objetos


No último vídeo, vimos que podemos alterar e manipular as propriedades de um objeto mesmo quando o objeto está armazenado em uma variável do tipo const.

Temos um [artigo](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript?_gl=1*1i9md25*_ga*MTAyMjIzNjI2OC4xNzAxODc3NTU5*_ga_1EPWSW3PCS*MTcwNjIwMjc0NC4yNy4xLjE3MDYyMDQ3NjYuMC4wLjA.*_fplc*SVZPSGslMkJQNlMyc2UxT2NCTmllYyUyQjEyVkslMkJLVzdGZUJWSko1cHY4akxYdFhwSjB2c3AlMkZ1RGdxTWxjY0FaZmVWeXJuWXRhZmNvUE9kcHd5WDY2MHpVTTNOblQlMkJlSElTYkJPYlZkaGp1VE9nZSUyRjR1YjQxU1FBNVRXS3dkazdnJTNEJTNE) na plataforma que explica as diferenças entre as variáveis que podemos declarar, mas vale lembrar que as variáveis do tipo const apenas não podem ser reatribuidas, mas podem ter seu conteúdo interno alterado.

#### Para saber mais: como deletar uma propriedade?


Já vimos como acessar, alterar e adicionar valores em um objeto. Mas ainda faltou falarmos sobre um caso: e quando queremos deletar um conjunto de chave/valor?

Vamos considerar o objeto abaixo:

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}COPIAR CÓDIGO
Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:

delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefinedCOPIAR CÓDIGO
Também é possível utilizar a notação de colchetes:

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefinedCOPIAR CÓDIGO
Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave.

Após remover as duas propriedades acima, o objeto agora está desta forma:

{
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
}COPIAR CÓDIGO
O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true



## 2 Manipulação de Objetos
console.log(delPropInexistente) //true



