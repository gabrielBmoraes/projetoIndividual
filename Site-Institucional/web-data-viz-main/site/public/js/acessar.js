
var erroLogin;

function entrar() {

    var email = ipt_email.value;
    var senha = ipt_senha.value;
    erroLogin = false;
    var emailVar = email;
    var senhaVar = senha;

    validar(email, senha, erroLogin)

    if (erroLogin == false) {

        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")
            console.log(resposta)

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.ID_USUARIO = json.id;

                    window.location = "telaUPA.html";
                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");
                alert("Houve um erro ao tentar realizar o login!");

                
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }

}

function validar(email, senha, erroLogin) {
    if (email == "") {
        erroLogin = true;
        ipt_email.style = 'border-color: red'
        vEmail.style.display = 'block'
    }
    if (senha == "") {
        erroLogin = true;
        ipt_senha.style = 'border-color: red'
        vSenha.style.display = 'block'
    }

}