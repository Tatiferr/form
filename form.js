
console.log('Javascript carregado');
function validar() {
    var nome_valido = document.getElementById("nome").checkValidity();
    var cpf_valido = document.getElementById("cpf").checkValidity();
    var rua_valida = document.getElementById("Rua").checkValidity();
    var num_valido = document.getElementById("Num").checkValidity();
    var tel_valido = document.getElementById("tel").checkValidity();

    var valido = nome_valido && cpf_valido && rua_valida && num_valido && tel_valido;

    if (valido) {
        alert("Cadastro efetuado com sucesso!");
    } else {
        alert("Desculpe, não foi possível efetuar o cadastro. Tente novamente!");
    }
}
