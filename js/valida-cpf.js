export default function ehUmCPF(campo) { //função sera importada como padrão(default), depois foi criado um function com o parametro campo
    const cpf = campo.value.replace(/\.|-/g, "");//um variavel com o nome cpf que recebe o valor do campo com o metodo replace, que recebe 2 parametros, o primeiro é o que deseja substituir e o seguindo é pelo que desejamos substituir. Aqui ele busca onde temos ponto e hifen e substituindo por nada, ou seja, ele está removendo os caracteres
    validaNumerosRepetidos(cpf);
    validaPrimeiroDigito(cpf)
    console.log(validaNumerosRepetidos(cpf));
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    //laço de repetição
    for(let tamanho = 0; tamanho < 9; tamanho++) {//esse laço vai repetir por 9 vezes
        soma += cpf[tamanho] * multiplicador; //a variável soma vai recolher os dígitos do cpf pela posição que condiz com o laço de repetição, de um a nove e vai multiplicar pelo multiplicado que é o dez
        multiplicador--; //
    }

    soma = (soma * 10) % 11; 

    if (soma == 10 || soma == 1) {
        soma = 0;
    }

    return soma != cpf[9]
}