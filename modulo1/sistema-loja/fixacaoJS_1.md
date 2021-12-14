~~~

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salarioFinal
 let comissao
 let salarioFixo = 2000
 comissao = qtdeCarrosVendidos * 100
 salarioFinal = valorTotalVendas * 0.05 + comissao + salarioFixo

return salarioFinal
}

~~~
