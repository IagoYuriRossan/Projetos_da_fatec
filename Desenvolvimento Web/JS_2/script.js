 //execicio=01
 function somar(){
 n1= Number(document.querySelector("input[name='texto1']").value);
 n2= Number(document.querySelector("input[name='texto2']").value);
 media=(n1+n2)/2
 document.getElementById("media1").innerText=media
 }

//exercicio=02
function expo(){
x = prompt("digite o valor do x")
y = prompt("digite o valor do y")
z=Math.pow(x, y)
console.log(z)
}

//exercicio=03
function min(){
    numero1 = prompt("digite o valor para o primeiro numero")
    numero2 = prompt("digite o valor para o segundo numero")
    numero3 = prompt("digite o valor para o terceiro numero")
    
    const array = [numero1,numero2,numero3];
    
    const menorValor = Math.min(...array);
    
document.getElementById("menorValorzin").innerText = `O menor valor do array é: ${menorValor}`;
}

//exercicio=04
function ex4(){

    // a) Criando os arrays
    var X = [15, 25];
    var Y = [12, 15, 23, 43];

    // b) Estrutura de repetição com FOR para percorrer os elementos de X
    for (var i = 0; i < X.length; i++) {

        // Multiplicando o valor do elemento por 5
        Z= X[i] * 5;

        // Exibindo o resultado no console
        console.log('$',X[i], 'Multiplicado por 5 e'[Z]);
    }
    }

//exercicio=05
function media2(){
    //utilizado parseFloat, por ser ser numerico com casas decimais após a virugla
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

        
     var mediaPonderada = (nota1 * 0.3) + (nota2 * 0.7);

       //utilizado toFixed(2), para limitar o numero de casas apos a virugula
    document.getElementById('resultado2').innerText = "Média ponderada: " + mediaPonderada.toFixed(2);
}

//exercicio=06
function salario(){
   // Definindo as constantes
const horasNormais = 40;
const valorHoraNormal = 10; // Supondo um valor hipotético de R$ 10 por hora normal
const valorHoraExtra = valorHoraNormal * 3; // Valor da hora extra (três vezes o valor normal)
const horasTrabalhadas = 62;
const valorRefeicao = 1.50;
const numeroRefeicoes = 1; // Supondo uma refeição realizada

// Calculando o salário bruto
const salarioBruto = (horasTrabalhadas <= horasNormais) ? 
                    (horasTrabalhadas * valorHoraNormal) : 
                    ((horasNormais * valorHoraNormal) + ((horasTrabalhadas - horasNormais) * valorHoraExtra));

// Calculando o desconto da refeição
const descontoRefeicao = valorRefeicao * numeroRefeicoes;

// Calculando o salário líquido
const salarioLiquido = salarioBruto - descontoRefeicao;

// Mostrando os resultados
document.write("<h2>Resultado:</h2>");
document.write("<p>Salário Bruto: R$ " + salarioBruto.toFixed(2) + "</p>");
document.write("<p>Desconto Refeição: R$ " + descontoRefeicao.toFixed(2) + "</p>");
document.write("<p>Salário Líquido: R$ " + salarioLiquido.toFixed(2) + "</p>");

document.getElementById("salarioFinal").innerText = salarioLiquido
}


//exercicio=07
function gerarNumero() {
    var numero = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numero").innerText = numero;
    
    if (numero % 2 === 0) {
        document.getElementById("resultado").innerText = "Par";
            } else {
                document.getElementById("resultado").innerText = "Ímpar";
    }
}

//exercicio=8
function calcularTotal() {
    var valorProduto = parseFloat(document.getElementById('valorProduto').value);
    var quantidade = Number(document.getElementById('quantidade').value);
    var formaPagamento = document.querySelector('input[name="formaPagamento"]:checked').value;
    var total = valorProduto * quantidade;
    var desconto = 0;

    if (total >= 1000) {
        desconto = 0.10 * total;
    }

    if (formaPagamento === 'pix') {
        desconto += 0.10 * total;
    } else if (formaPagamento === 'crédito') {
        // Sem desconto para pagamento em crédito
    } else if (formaPagamento === 'débito') {
        desconto += 0.05 * total;
    }
 
    var totalPagar = total - desconto;

    document.getElementById('resultado').innerHTML = "Total a pagar: R$ " + totalPagar.toFixed(2) + "<br>"
                                                      + "Desconto: R$ " + desconto.toFixed(2) + "<br>"
                                                      + "Forma de pagamento: " + formaPagamento;
}