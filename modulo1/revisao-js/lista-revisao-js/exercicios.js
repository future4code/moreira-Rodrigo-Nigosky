// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const tamanho = array.length
    return tamanho
}
const array = (3, 2, 1, 4, 7)



// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayContrario = array.reverse();
    return array
}
const arrayContrario = [8, 23, 16, 10]



// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
        const arrayOrdenado = array.sort(function(a, b) {
            return a - b;
          })
    return array
}
const arrayOrdenado = [3, 2, 1, 4, 7]



// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter(pares)
    function pares (array){
        return array % 2 === 0;
}
    return numerosPares

}
const numeros = [1, 2, 3, 4, 5, 6]




// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter(pares)
    
    function pares (array){
        return array % 2 === 0;


        function elevados (array){
            const numerosElevados = array ** 2
            return numerosElevados
        }
        }
return numerosPares
}



// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let = 0
    let maior = -Infinity

for (let i = 0; i < array.length; i++){
    if (array[i] > maior){
        maior = array[i]
        }
    }
    return maior
}



// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let numeroMaior
    let maiorDivisivel
    let numeroMenor

    if(num1>num2){
        numeroMaior = num1
        numeroMenor = num2
    }else{
        numeroMaior = num2
        numeroMenor = num1
    }

    maiorDivisivel = numeroMaior % numeroMenor === 0
    
    const diferença = numeroMaior - numeroMenor
        
    return {
        maiorNumero: numeroMaior ,    
        maiorDivisivelPorMenor: maiorDivisivel ,
        diferenca: diferença
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    const frase = `"Venha assistir ao filme ${filme.nome} , de ${filme.ano} , dirigido por ${filme.diretor} e estrelado por ${filme.atores}" `
        return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoa = {
    nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}
   const novaPessoa ={ 
    ...pessoa,
    nome: "ANÔNIMO",
           }
return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

        let pessoasAutorizadas =[]

        for(let pessoa of pessoas){
            if ({pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60});
        }
     
   return pessoasAutorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14

function retornaContasComSaldoAtualizado(contas) {
 
    array.forEach(contaCliente => {
        let totalDeCompras = 0

        contaCliente.compras.forEach((gasto) =>{
            totalDeCompras = totalDeCompras + gasto
        
        })

        contaCliente.saldoTotal = contaCliente.saldoTotal - totalDeCompras
        contaCliente.compras = []
    });

    return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}