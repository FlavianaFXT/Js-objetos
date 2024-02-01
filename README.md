# Js-objetos
curso da Alura de Javascript - resumo dos conteúdos

 AQUI
 estrutura de dados chamada de objetos no Javascript, muito importante em linguagens de programação modernas. Estudamos como criar um objeto, adicionar propriedades e alterar seus valores.

 Que objeto é um tipo de dado que reflete uma abstração dos objetos da vida real;
Que a estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };
Que para acessar dados em um objeto podemos usar as notações de ponto e de colchete;
Que para adicionar e manipular dados em um objeto precisamos saber como acessar suas propriedades.
Que para manipular objetos literais podemos utilizar os métodos do JavaScript para cada tipo de dado;
Que os valores em um objeto podem ser tipos primitivos (strings, números, booleanos e null), arrays ou outros objetos;
Que além das propriedades, também podemos atribuir funções que dão comportamento a um objeto.
Como percorrer objetos a partir das chaves com for...in, iterando sobre as propriedades de um objeto como em um array;
Que para extrair chaves e valores de objetos é possível utilizar métodos de Object;
Que funções como .entries, .key e .value podem ser úteis na hora de trabalhar com objetos;
Que o spread operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extraí-los de um array e formar um novo array.


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
console.log(delPropInexistente) //true



## 2 Manipulação de Objetos

### Tipos de Dados e Valores

### Objetos em Objetos

### Listas de Objetos

### Funções

### Para saber mais: objeto literal e referência


Vimos anteriormente como é a estrutura de um objeto, com seus pares de chave e valor:

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}COPIAR CÓDIGO
O exemplo acima, assim como o que estamos criando durante esta aula, é o de um objeto literal.

Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves{ }, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.

Objetos literais funcionam bem quando queremos ter um objeto único com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. Vejamos o código a seguir:

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = objPersonagemCOPIAR CÓDIGO
Se alterarmos apenas o objPersonagem2, o resultado é:

const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o CinzentoCOPIAR CÓDIGO
A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):

let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100COPIAR CÓDIGO
Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o CinzentoCOPIAR CÓDIGO
O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.

Você pode ver mais exemplos desse método na [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

Nas próximas aulas veremos também outra forma de criar objetos ao utilizar funções construtoras.


### Um objeto pode conter um array de objetos, o que nos permite invocar desde funções comuns até arrays como filter().

## 3 Percorrendo Objetos

### FOR...IN
o método for … In que permite a iteração sobre as propriedades de um objeto como em um array. 

### METODOS DE OBJETO

### Para saber mais: outros métodos de objetos

Para aprofundar seus conhecimentos, que tal conhecer o funcionamento dos objetos em JavaScript?

Acesse a [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects), que é uma ótima referência aos nossos estudos e amplie os conhecimentos dos métodos e práticas que realizamos até agora.

Sabemos que o ecossistema JavaScript é bem vasto e sofre diversas mudanças em função do tempo, então vale a pena dedicarmos um tempo para olhar a documentação e dar uma lida com calma.

### SINTAXE DE ESPALHAMENTO

### Para saber mais: spread operator


No vídeo anterior vimos um exemplo de uso do spread operator, também conhecido como sintaxe de espalhamento ou operador de espalhamento. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. Para entender melhor, vamos ver mais alguns exemplos:

const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}COPIAR CÓDIGO
Ainda usando o exemplo acima, agora vamos tentar juntar esses dois objetos em apenas um, que vamos chamar de personagens. Em um primeiro teste, vamos criar um novo objeto literal com { } e passar para este objeto as variáveis de cada personagem:

const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)COPIAR CÓDIGO
O resultado no console não é exatamente o que queremos, pois os objetos ainda estão separados. Porém, agora o nome de cada variável é uma chave e o valor da chave é cada um dos objetos:

{
  fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
  equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
}COPIAR CÓDIGO
Aqui é onde vamos utilizar o spread operator, adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, separando-os com uma vírgula:

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)COPIAR CÓDIGO
Após usar o spread operator, o console vai mostrar o resultado esperado, que é:

{
 nome: 'Aragorn',
 classe: 'guerreiro',
 espada: 'Andúril',
 capa: 'capa élfica +2'
}COPIAR CÓDIGO
Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:

const mago = {
 nome: "Gandalf",
 classe: "mago"
}
 const guerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const ranger = {
 nome: "Legolas",
 classe: "ranger"
}COPIAR CÓDIGO
Os três objetos acima têm as mesmas propriedades. Mas o que acontece se tentarmos “espalhar” os dados em um único objeto com o spread operator? Vamos ver:

const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)COPIAR CÓDIGO
Fazendo isso o resultado não será bem o que esperamos:

{ nome: 'Legolas', classe: 'ranger' }COPIAR CÓDIGO
Perceba que o JavaScript sobrescreve as chaves com o mesmo nome a cada ocorrência, fazendo com que o resultado final seja somente o último objeto declarado dentro do objeto personagens.

Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.

Caso queira, temos outra explicação deste processo aqui no [artigo ES6 - Desestruturando objetos](https://www.alura.com.br/artigos/es6-desestruturando-objetos?_gl=1*1uvdg9y*_ga*OTg3OTYxNjIuMTcwMDYwOTY1Nw..*_ga_1EPWSW3PCS*MTcwNjgxMjY1My42LjEuMTcwNjgxNDM3NS4wLjAuMA..*_fplc*VDhhemV2YjdHQ0RMTjV5SmdCRDdhdkl2bWJ6QkptREN2VFolMkZNTEdmT1BrSGxpZUpLMzV6MW9EdFdsVmsya0NrTEFCS29xZWtrSG81bTd2bkxSTWJrZG9BRHYwZk9yQ3pwUEY0N0FIQ3JnYTNWak52dEF5Nk1BeGNuSmRJc2clM0QlM0Q.) presente na nossa plataforma.

Você sabia que também é possível utilizar esta sintaxe com arrays? Confira mais exemplos disso neste [Alura+](https://youtu.be/f8a-qwKC5yk).


## 4. CONHECENDO O JSON












