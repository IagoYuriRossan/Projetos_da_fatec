numero = input("Digite um número positivo: ")
soma = 0
multiplicacao = 1
for numeros in numero:
    valor = int(numeros)
    soma += valor
    multiplicacao *= valor

print("Soma =", soma)
print("Multiplicação =", multiplicacao)
