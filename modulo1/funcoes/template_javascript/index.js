console.log ("hello world")

////EXERCICIOS
/// exercicio de interpretação
////exercicio 1

//a.) será impresso o valor 10 e o valor 50
//b.) nao apareceria nada no console, pois a função console foi retirada, apesar que o calculo continuaria a ser feito


/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
 */


////exercicio 2

//a.) essa função tem a utilidade de deixar todo o texto em letras minisuculas e verificar se a palavra "cenoura" 
//aparece no texto inserido pelo usuario

//b.)    i. "true" / ii.true/   iii. true

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */




/// exercicio de escrita
////exercicio 1

//a.) 

/*  function  imprimirNomes(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
    }
    
    imprimirNomes("Rodrigo", 40, "São Paulo", "estudante") */
   

//b.)

/* function frase (nome, idade, cidade, profissao){
    const fraseString = String(`"Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}""`)
return fraseString 
}
    console.log (frase ("Rodrigo", 40, "São Paulo", "profissao"))
 */




////exercicio 2
//a.) 
/* 
function somaDoisNumeros(numero1, numero2) {
    const soma = Number (numero1 + numero2)

    return soma 
}

const numerosSomados = (10, 5)

console.log ("resultado", numerosSomados)
 */


//b.) 

/* function somaDoisNumeros( numero1, numero2) {
    const soma = numero1 + numero2
    const verificar = numero1 > numero2        
    return verificar 

}

const resultado = somaDoisNumeros (5,15)
console.log ("resultado", resultado) */

//c.)
/* 
function Numeros( numero1) {
        const verificar = numero1 % 2  
    const verificar1 = (verificar > 0 )
    return verificar1  

}

const resultado = Numeros (5)
console.log ("resultado", resultado) 

 */

//d.)
/* 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toUpperCase()
}

const resposta = outraFuncao (String(textoDoUsuario))
console.log (textoDoUsuario.length)
console.log(resposta)

 */

////exercicio 3
/* 
function soma( numero1, numero2) {
    const soma = numero1 + numero2
    return soma 
}

function subtracao( numero1, numero2) {
    const subtracao = numero1 - numero2
    return subtracao 
}

function multiplicacao( numero1, numero2) {
    const multiplicacao = numero1 * numero2
    return multiplicacao 
}

function divisao( numero1, numero2) {
    const divisao = numero1 / numero2
    return divisao 
}

const numeroUsuario1 = Number(prompt("Insira um numero"))
const numeroUsuario2 = Number(prompt("Insira outro numero"))

const resultado1 = soma (numeroUsuario1,numeroUsuario2)
const resultado2 = subtracao (numeroUsuario1,numeroUsuario2)
const resultado3 = multiplicacao (numeroUsuario1,numeroUsuario2)
const resultado4 = divisao (numeroUsuario1,numeroUsuario2) 

console.log ("resultados", resultado1, resultado2, resultado3, resultado4 )
 */
//ou
/* 
function Operacoes( numero1, numero2) {
    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let multiplicacao = numero1 * numero2
    let divisao = numero1 / numero2
   
}

const numeroUsuario1 = Number(prompt("Insira um numero"))
const numeroUsuario2 = Number(prompt("Insira outro numero"))

const resultado1 = soma (numeroUsuario1,numeroUsuario2)
const resultado2 = subtracao (numeroUsuario1,numeroUsuario2)
const resultado3 = multiplicacao (numeroUsuario1,numeroUsuario2)
const resultado4 = divisao (numeroUsuario1,numeroUsuario2) 



console.log ("resultados", resultado1, resultado2, resultado3, resultado4 )
 */
 


/// exercicio desafio
////exercicio 1

//a.)
/* 
const imprimeNome = nome => {
	return nome
}

console.log (imprimeNome)

 */

//b.)
/* 
 let soma = (num1, num2) => {
     const num1 = 1
     const num2 = 2
    return num1 + num2
}
console.log (soma)
 */

////exercicio 2

//explicacao
//1 fazer a funcao
//2 - executar transformação do teorema de pitagoras
//3 - 2 passar 2 parametros que serao os catetos
//4 - dentro da funcao calcular tal hipotenusa
//5 retorne o valor, ou seja, o valor da tal hipotenusa
//6) na chamada da funcao, imprimimos o resultado saindo da função

/* function nomeDaFuncao (parametro1, parametro2){
    const hipotenusa = ??? 
    
    
    // hip^2 = cateto1^2 + cateto2^2 (essa estrutura precisa aparecer no codigo)
    // hip = raizquadrada (cateto 1^2 + cateto2^2)
    // expoentes: multiplicar o mesmo numero tantas vezes quaisquer ou seja, se tenho o unmero 2 -> 2^3 = 2*2*2
    // raizquadrada (4) = 2 -> 2^2 = 2*2 = 4
    //notação alternativa de raizes = 4^(1/2) = raiz quadrada(4)

    return hipotenusa
}

console.log(nomeDaFunção(4, 6) // imprimir o resultado da função */

