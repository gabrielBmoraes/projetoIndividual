
var erroCadastro;

function cadastrar() {

    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var conferirSenha = ipt_conferirSenha.value;
    var codigo = ipt_codigo.value;
    erroCadastro = false;
    var emailVar = email;
    var senhaVar = senha;

    validar(email, senha, conferirSenha, codigo, erroCadastro)

    if (erroCadastro == false) {
        console.log(erroCadastro)
        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {


                alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");


                window.location = "acessar.html";

            } else {
                alert("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;


    }


}

function validar(email, senha, conferirSenha, codigo, erroCadastro) {
    if (email == "") {
        erroCadastro = true;
        ipt_email.style = 'border-color: red'
        vEmail.style.display = 'block';
    }

    if (senha == "") {
        erroCadastro = true;
        ipt_senha.style = 'border-color: red'
        vSenha.style.display = 'block';
    }

    if (conferirSenha != senha) {
        erroCadastro = true;
        ipt_conferirSenha.style = 'border-color: red'
        vConferirSenha.style.display = 'block';
    }

    if (codigo == "" || codigo != "jesussave") {
        erroCadastro = true;
        ipt_codigo.style = 'border-color: red'
        vCodigo.style.display = 'block';
    }
    
    console.log(erroCadastro)
}

function mensagemCodigoOn() {

    mensagem.style.display = 'block';
}

function mensagemCodigoOff() {
    mensagem.style.display = 'none';
}