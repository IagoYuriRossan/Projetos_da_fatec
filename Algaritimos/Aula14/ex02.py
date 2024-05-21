#Meu RA = 3011392413038, últimos dois numeros = 38
Y = 38
valor_max = Y * 2 + 5
primos = []
soma_primos = 0

for numero in range(valor_max + 1):
    if numero < 2:
        continue
    eh_primo = True
    for i in range(2, int(numero ** 0.5) + 1):
        if numero % i == 0:
            eh_primo = False
            break
    if eh_primo:
        primos.append(numero)
        soma_primos += numero

print(f"Lista de números primos até {valor_max}: {primos}")
print(f"Soma dos números primos: {soma_primos}")