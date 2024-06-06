function calcularTotal(){
    let valor_pacote = Number(document.getElementById('Pacotes').value)
    let adicionais = 0
    let selecionados = document.querySelectorAll("input[name='adicionais']:checked");
    let qtd = selecionados.length;
    for (i = 0; i < qtd; i++) {
        adicionais += Number(selecionados[i].value)
    }
    let cortesias = document.querySelector("radio[name='cortesia']:checked").value
    let valor_total = adicionais+valor_pacote
    console.log(cortesias)
    
    document.getElementById('resumo_da_viagem').innerHTML = `O valor total a ser pago é: O valor do seu pacote R$${valor_pacote},00 + Adicionais R$${adicionais},00 , Total: R$${valor_total},00 e sua cortesia escolhida foi ${cortesias}` 
}