def validar_cpf(cpf):
    n_cpf = cpf.replace('.', '')
    n_cpf = n_cpf.replace('-', '')

    if len(n_cpf) != 11:
        return False

    # Criar primeiro dígito
    soma = 0
    n = 10
    for number in n_cpf[:9]:
        soma += int(number) * n
        n -= 1

    resto = soma % 11
    dig1 = 0 if resto < 2 else (11 - resto)
    cpf_veridico = n_cpf[:9] + format(dig1)

    # Criar segundo dígito
    soma = 0
    n = 11
    for number in cpf_veridico:
        soma += int(number) * n
        n -= 1

    resto = soma % 11
    dig2 = 0 if resto < 2 else (11 - resto)
    cpf_veridico += format(dig2)

    return True if n_cpf == cpf_veridico else False
