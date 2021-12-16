//Exercícios de interpretação de código

//1a) Será impresso em cada linha a array e o index de cada linha da array


//2a) será impresso um array somente com os nomes e a quantidade de itens dentro da array

//3a) será impresso uma array retirando o item que contem o apelido "chijo" e mostrando os outros itens restantes



//Exercícios de escrita de código

//1
/* 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 */
//a) 

/* 
const nomeDosPets = pets.map((pet, indice, array) => {
    return pet.nome
})
console.log(nomeDosPets)
 */


//b)

/* 
function retornTipoPets (item){
    return item.raca === "Salsicha"
}

function retornaNomePet(item){
    return item.nome
}

const PetSalsicha = pets.filter(retornTipoPets)
const nomeDosPets = PetSalsicha.map(retornaNomePet)
console.log (nomeDosPets) 
*/


//c)
/* 

function retornTipoPets (item){
    return item.raca === "Poodle"
}

function retornaNomePet(item){
    return item.nome
}

const PetPoodle = pets.filter(retornTipoPets)
const nomeDosPets = PetPoodle.map(retornaNomePet)


 */

const filtroDesconto = descontoTosa.mao((item) =>{
    return `Voce ganhou um cupom de desconto de 15% para tosar o/a ${item.nome}`

})
console.log


//2



const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)

/* 
 const nomeDosProdutos = produtos.map((produto, indice, array) => {
    return produto.nome
})
console.log(nomeDosProdutos)
 */

//b)

/* 
const nomeDosProdutos = produtos.map((item) => {
    const preçoDesconto = item.preco * 0.95
    return item.nome === "Bebidas"

    console.log(nomeDosProdutos)
})
 */

//c))

