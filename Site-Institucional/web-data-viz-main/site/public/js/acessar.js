 sessionStorage.ID_USUARIO = 0;

function entrar() {

    var email = ipt_email.value;
    var senha = ipt_senha.value;
    var emailVar = email;
    var senhaVar = senha;

    if (email =="" || senha =="") {
        if (email == "") {
           
            ipt_email.style = 'border-color: red'
            vEmail.style.display = 'block'
        }
        if (senha == "") {
            
            ipt_senha.style = 'border-color: red'
            vSenha.style.display = 'block'
        }
    } else  { 
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
                    sessionStorage.ID_USUARIO = json.idUpa;

                    if (json.idUpa == 1) {
                        
                        window.location = 'perfil.html'
                    } else {
                        console.log(json.idUpa)
                        window.location = 'telaUPA.html'
                    }

                    //window.location = 'telaUPA.html'
                
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