from exibir_menu import exibir_menu
from valida_cpf import validar_cpf
from valida_data import valida_data


def exibir_frase():
    import random
    frases = ['A persistência realiza o impossível',
              'Seus sonhos não precisam de plateia, eles só precisam de você',
              'A persistência é o caminho do êxito',
              'No meio da dificuldade encontra-se a oportunidade']
    print(random.choice(frases))


def cadastrar():
    input('Digite seu nome: ')
    input('Digite seu sobrenome: ')
    cpf = input('Digite seu CPF: ')
    while not validar_cpf(cpf):
        print('CPF inválido!')
        cpf = input('Digite seu CPF: ')
    data_nascimento = input('Digite sua data de nascimento: ')
    while not valida_data(data_nascimento):
        print('Data inválida!')
        data_nascimento = input('Digite sua data de nascimento: ')
    input('Digite sua renda bruta: R$')

while True:
    exibir_menu()
    escolha = (input('\nDigite a opção que você deseja: '))

    match int(escolha):
        case 1:
            cadastrar()
        case 2:
            exibir_frase()
        case 3:
            print('\nBye bye!')
            quit()
        case _:
            print('Digite uma opção válida!')
