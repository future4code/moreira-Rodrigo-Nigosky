// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {

return num1 + num2
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem1 = prompt('bananinha')
  const mensagem = prompt('olá mundo!')

  console.log(mensagem)
  console.log(mensagem1)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("digite altura")
  const largura = prompt("digite largura")
      
  const area = altura * largura
  console.log (area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("digite altura")
  const anoNascimento = prompt("digite largura")

  const idade = anoAtual - anoNascimento
  console.log (idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const IMC = peso / (altura * altura )

  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("digite nome")
  const idade = prompt("digite idade")
  const email = prompt("digite email")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    const cor1 = prompt("digite sua cor favorita")
    const cor2 = prompt("digite sua outra cor favorita")
    const cor3 = prompt("digite uma ultima cor favorita")
    const frase = `[ " ${cor1} " , " ${cor2} ", " ${cor3} " ] `
    
    console.log (frase)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 

  const frase = string.toUpperCase()

  return frase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const vender = custo / valorIngresso

return vender
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho = string1.length == string2.length

return tamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const elemento = array[0]

return elemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const elemento = array.pop()

return elemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let elemento0 = array.pop()
  let elemento1 = array[0]
  let elemento2 = array.push(elemento0)
  
 
return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const tamanho1 = string1.toLowerCase() 
  const tamanho2 = string2.toLowerCase() 
  const tamanho3 = tamanho1 === tamanho2

return tamanho3




}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}