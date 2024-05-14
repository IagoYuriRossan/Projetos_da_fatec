import os


def exibir_menu():
    # os.system('cls')
    menu = ['Cadastrar', 'Exibir frase', 'Sair']
    for i, opcao in enumerate(menu):
        print(i+1, '-', opcao)
