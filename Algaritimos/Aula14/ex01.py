#MEU RA = 3011392413038, Ultimos dois numeros = 38
cabecas = int(input('Total de cabeças: '))
pes = int(input('Total de pés: '))

if pes < 2 * cabecas or pes % 2 != 0:addd
    print("Entrada inválida. O número de patas não é pelo menos o dobro do número de cabeças e/ou número total de patas não é par.")
else:
    coelhos = (pes - 2 * cabecas) // 2
    patos = cabecas - coelhos
    print(f"Total de patos: {patos}, Total de coelhos: {coelhos}")