export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade.')
    }
}

function validaIdade (data) {
    const dataAtual = new Date(); //pega data do momento atual
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()); //pega todas as informações que foram inseridas pelo usuário e soma por 18, dessa forma sabemos quando o usuario fez 18.

    return dataAtual >= dataMais18;
}