console.log("hello world")


//Exercícios de interpretação de código

//1a) o codigo aplica uma condição num numero do usuario. Ele testa se o numero do usuario tem sobra de divisão

//1b) se a divisao do numero do usuario for 0

//1c) se a divisao do numero do usuario nao for 0


//2a) o codigo serve para mostrar o preço ao usuario em relação a fruta escolhida

//2b) "O preço da fruta ", maça, " é ", "R$ ", 2.25

//2c) "O preço da fruta  Pera  é  R$  5"


//3a) a primeira linha ésta atrelando um numero vindo do usuario a variavel "numero"

//3b) para 10 a mensagem seria: "Esse número passou no teste" // para -10 não teria mensagem

//3c) terá erro no console, pois nao tem codigo de condicional para numero menor que 0 no bloco



//Exercícios de escrita de código

//1a)

/* const respostaDoUsuario = prompt("Qual sua idade")

//1b)

const numero = Number(respostaDoUsuario)


//c)

if (numero >= 18) {
  console.log("Pode dirigir.")
} else {
  console.log("Não pode dirigir.")
}

 */



//2) 

/* const respostaDoUsuario = prompt("Digite o turno com as letras M (matutino) ou V (Vespertino) ou N (Noturno)  ")
const letra = (respostaDoUsuario).toUpperCase()

if (letra === "M") {
  console.log("Bom Dia!")
} else if (letra === "V") {
  console.log("Boa Tarde!")
} else if (letra === "N") {
    console.log("Boa Noite!")
} */

//3)

/* const respostaDoUsuario = prompt("Digite o turno com as letras M (matutino) ou V (Vespertino) ou N (Noturno)  ")
const letra = (respostaDoUsuario).toUpperCase()
    switch (letra){
    case 'M' :
        console.log ("Bom dia!")
        break
    case 'V' :
        console.log ("Boa tarde!")
        break
    case 'N' :
        console.log ("Boa noite")
        break        
    }
 */


//4)

/* 
let genero = prompt ("Qual o genero de filme").toLowerCase()
let preco = Number(prompt ("qual o preço do ingresso?"))

function idaCinema (genero1, preco1){

if (genero1 === "fantasia"){
    console.log ("Bom filme")
    }else {
    console.log ("escolha outro filme")
}if   (preco1 <= 15){
        console.log ("Bom filme")
}else {
            console.log ("escolha outro filme")         
}
}
idaCinema (genero , preco) 
 */