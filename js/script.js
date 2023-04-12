import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll('[required]') // criei uma variável e dentro dela inseri todo os elementos que são obrigatórios

camposDoFormulario.forEach((campo) => {//para cada campo da lista vai se chamamar campo
    campo.addEventListener("blur", () => verificaCampo(campo)); //o evento esperado é o blur (tira o foco do input, ou seja, quando escrevemos fora do campo), vai ser o gatilho para acontecer a função verficaCampo.

})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }

    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
}