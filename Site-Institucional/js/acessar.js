function entrar(){
    
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var erro = false;
    if (email == "") {
        erro - true;
        ipt_email.style = 'border-color: red'
        vEmail.style.display = 'block'
    }
    if (senha == "") {
        erro - true;
        ipt_senha.style = 'border-color: red'
        vSenha.style.display = 'block'
    }
}