function  entrar() {

    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var conferirSenha = ipt_conferirSenha.value;
    var codigo = ipt_codigo.value;
    var erro = false;

    validar(email,senha,conferirSenha,codigo)


}

function validar(email,senha,conferirSenha, codigo) {
    if (email == "") {
        erro = true;
        ipt_email.style = 'border-color: red'
        vEmail.style.display = 'block';
    }

    if (senha == "") {
        erro = true;
        ipt_senha.style = 'border-color: red'
        vSenha.style.display = 'block';
    }

    if (conferirSenha == "") {
        erro = true;
        ipt_conferirSenha.style = 'border-color: red'
        vConferirSenha.style.display = 'block';
    }

    if (codigo == "") {
        erro = true;
        ipt_codigo.style = 'border-color: red'
        vCodigo.style.display = 'block';
    }

}

function mensagemCodigoOn(){

    mensagem.style.display = 'block';
    }

    function mensagemCodigoOff(){
        mensagem.style.display = 'none';
    }