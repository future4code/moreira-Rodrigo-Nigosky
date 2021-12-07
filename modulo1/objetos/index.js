console.log ("hello world")

//Exercícios de interpretação de código
//exercicio 1. será imprenso: "Matheus Nachtergaele" , "Virginia Cavendish" "Globo", horario: "14h"

// exercicio 2. a)
/* 
{nome: 'Juca', idade: 3, raca: 'SRD'}
index.js:20 {nome: 'Juba', idade: 3, raca: 'SRD'}
index.js:21 {nome: 'Jubo', idade: 3, raca: 'SRD'} */

/* b) cria uma copia do objeto/array para manipular a copia sem alterar o objeto original */

//exercicio 3
//a) será impresso false e undefined

// b) foi impresso o valor da chave backender e impresso um valor de uma chave que nao existe (no caso, altura), por isso apareceu undefined

//Exercícios de escrita de código
// 1a)

const pessoa = {
    nome: "Ana",
    apelidos: ["nana", "anan", "anita"]
}
function imprimeMensagem(meusApelidos) {
    console.log (`Eu sou ${meusApelidos.nome}, mas pode me chamar de: ${meusApelidos.apelidos[0]}, ${meusApelidos.apelidos[1]} , ${meusApelidos.apelidos[2]}` )
}


//b
const novaPessoa = {
    ...pessoa,
    apelidos: ["xxxx", "xx11", "xx22"]

}





//2a  

const pessoa1 = {
    nome: "Lais",
    idade: 27,
    profissao: "CX"
}

const pessoa2 = {
    nome: "Pedro",
    idade: 23,
    profissao: "Monitor"
}
//2b

function pessoaInfo(pessoa){
    let array = []
    array.push(pessoa.nome)
    array.push(pessoa.nome.length)
    array.push(pessoa.idade)
    array.push(pessoa.profissao)
    array.push(pessoa.profissao.length)


    return array
}
console.log (pessoaInfo(pessoa1))
console.log (pessoaInfo(pessoa2))


//3



