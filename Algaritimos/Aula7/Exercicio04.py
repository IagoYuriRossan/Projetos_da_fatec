termo = 0
while (termo <= 0):
    termo = int(input('Voce quer a serie de fibonacci até qual termo:'))
    if (termo <= 0):
        print('O termo deve ser positivo!')

primeiro = 0
print (primeiro)
segundo = 1
for i in range (1, termo):
    print(f"i: {i} - Pri: {primeiro} - Seg: {segundo}")
    primeiro = segundo
    segundo = terceiro