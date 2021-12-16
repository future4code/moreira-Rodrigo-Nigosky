/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 //1)   
 console.log ("Boas vindas ao jogo de Blackjack!")  

//2)
if (confirm("Quer iniciar uma nova rodada?")){
   
//3)

rodada1()

//4)
} else{                  
               console.log("O jogo acabou")
            }

//5)

function rodada1(){
   const usuario = []
   const computador = []
   usuario.push(comprarCarta())
   computador.push(comprarCarta())
 
//6)

   console.log (usuario.map((item) => `Usuario - cartas ${item.texto} pontuação ${item.valor}`))
   console.log (computador.map((item) => `Computador - cartas ${item.texto} pontuação ${item.valor}`))
}

//7)
