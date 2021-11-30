console.log ("hello world")

//****exercicio 1 interpretacao codigo

// console.log("a. ", resultado) // false
// console.log("b. ", resultado) // false
// console.log("c. ", resultado) // true
// console.log("d. ", typeof resultado) // boolean


//****exercicio 2 interpretacao codigo

//Sim, tem um problema:
// o que será impresso no console serao os numeros fornecidos pelo usario e concatenados como string
//e nao como resultado de uma soma numerica


//****exercicio 3 interpretacao codigo

//solucao : precisa ser colocado o objeto "Number" junto as variaveis primeiroNumero e segundoNumero
//para que o resultado seja convertido na string numero

// const soma = Number(primeiroNumero) + Number(segundoNumero)
// console.log(soma)


// ou colocar "Number" antes de cada prompt

//let primeiroNumero = Number (prompt("Digite um numero!"))
//let segundoNumero = Number (prompt("Digite outro numero!"))
//const soma = primeiroNumero + segundoNumero
//console.log(soma)




//****exercicio 1 ESCRITA codigo

/* const idadeUsuario = prompt ("Qual sua idade?")
const idadeUsuarioNumero = Number(idadeUsuario)
const idadeAmigo = prompt ("Qual a idade do seu melhor amigo ou amiga?")
const idadeAmigoNumero = Number(idadeAmigo)

console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeUsuarioNumero >= idadeAmigoNumero)

const diferencaIdade = Number (idadeUsuarioNumero - idadeAmigoNumero)

console.log ("a diferença de idade é:", diferencaIdade, "anos") */




//****exercicio 2 ESCRITA codigo

/* const numeroPar = prompt ("Insira um número par")
const numeroParNumero = Number(numeroPar)

const restoDivisao = Number (numeroParNumero) % 2

console.log (restoDivisao) */

//o padrão é que o numero par nunca tem sobra. Em caso de numero impar, sempre vai sobrar 1.



//****exercicio 3 ESCRITA codigo

/* const idade = prompt("Qual sua idade?")
const idadeNumero = Number (idade)

const idadeMeses = idadeNumero * 12
console.log  ("A idade do usario em meses eh:", idadeMeses, "meses")

const idadeDias = idadeNumero * 365
console.log  ("A idade do usario em dias eh:" , idadeDias, "dias")

const idadeHoras = (idadeNumero * 365) * 24
console.log  ("A idade do usario em horas eh:", idadeHoras, "horas") */


//****exercicio 4 ESCRITA codigo

/* const escolhaA = prompt("Digite um numero")
const escolhaANumero = Number (escolhaA)
const escolhaB = prompt("Digite um numero diferente")
const escolhaBNumero = Number (escolhaB)
    
console.log ("O primeiro numero é maior que segundo?" , escolhaANumero > escolhaBNumero)
console.log ("O primeiro numero é igual ao segundo?" , escolhaANumero === escolhaBNumero)

const divisao1 = escolhaANumero / escolhaBNumero % 2

console.log  ("O primeiro numero é divisível pelo segundo?" , divisao1 >= 0)

const divisao2 = escolhaBNumero / escolhaANumero % 2

console.log ("O segundo numero é divisível pelo primeiro?" , divisao2 <= 0)

 */


//****DESAFIO

//****exercicio 1 DESAFIO

//letra A)
/* const fahrenheit1  = 77
fahrenheit1numero = Number(fahrenheit1)
console.log ("77°F em  K eh", (fahrenheit1numero - 32) * (5/9) + 273,15 , "k" )

//letra B)
const celsius1 = 80
celsius1numero = Number(celsius1)
console.log ("80°C em °F eh ", celsius1numero * (9/5) + 32, "°F" )

//letra C)
const celsius2 = 30
celsius2numero = Number(celsius2)
const fahrenheit2  = 86
fahrenheit2numero = Number(fahrenheit2)
console.log ("30°C em °F eh ", celsius2numero * (9/5) + 32, "°F", ",e 30°c em  K eh", (fahrenheit2numero - 32) * (5/9) + 273,15 , "k"  ) */

//letra D)
/* const converterCelsius = prompt ("Insira o valor em graus Celsius que voce deseja converter")
converterCelsiusNumero = Number(converterCelsius)

const fahrenheitConverter  = converterCelsiusNumero * (9/5) + 32
FahrenheitConverterNumero = Number(fahrenheitConverter)
console.log ("Sua conversao em Celsius para Fahrenheit", converterCelsiusNumero * (9/5) + 32, "°F", ",e Celsius em Kelvin eh", (FahrenheitConverterNumero - 32) * (5/9) + 273,15 , "k"  )*/
 



//****exercicio 2 DESAFIO

//letra A)
/* const quilowattHora = 0.05
quilowatthoraNumero = Number(quilowattHora)
console.log ("O valor a ser pago em 280 quilowatt-hora eh: R$" ,quilowatthoraNumero * 280 ) */


//letra B)
/* valorConta = quilowatthoraNumero * 280

const quilowattConsumido  = 280
quilowattConsumidoNumero = Number (quilowattConsumido)

valorDesconto = quilowattConsumidoNumero * 0.15
descontoAplicado = quilowatthoraNumero * valorDesconto

console.log ("O valor com desconto de 15% eh: R$" , valorConta - descontoAplicado )*/
 




//****exercicio 3 DESAFIO


//letra A)
/*const libra = 20
libraNumero = Number (libra)
kilo = libraNumero/ 2.2
console.log ("20lb equivalem a ", kilo , "kg")*/

//letra B)
/*const onca = 10.5
oncaNumero = Number (onca)
kilo = oncaNumero/ 35.27
console.log ("10.5oz equivalem a ", kilo , "kg")*/

//letra C)
/* const milha = 100
milhaNumero = Number (milha)
metro = milhaNumero / .0016
console.log ("100mi equivalem a ", metro , "m") */

//letra D)
/* const pes = 50
pesNumero = Number (pes)
metro =  pesNumero * .3048
console.log ("50ft equivalem a ", metro , "m") */

//letra E)
/* const galao = 103.56
galaoNumero = Number (galao)
litro =  galaoNumero / 0.26417
console.log ("103.56gal equivalem a ", litro , "litros") */

//letra F)
/* const xicara = 450
xicaraNumero = Number (xicara)
litro =  xicaraNumero * 0.24
console.log ("450 xic equivalem a ", litro , "litros") */

//letra G)
/* const xicara = prompt ("Insira o valor em xicaras que voce deseja converter para Litros")
xicaraNumero = Number (xicara)
litro =  xicaraNumero * 0.24
console.log ("450 xic equivalem a ", litro , "litros") */


//fim