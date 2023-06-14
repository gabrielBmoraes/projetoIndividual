if (sessionStorage.ID_USUARIO != 1) {
    window.location = 'acessar.html'
}



var erroValidar = false;



function enviarAviso() {
    let idAviso = Number(ipt_idAviso.value);
    let textoAviso = ipt_textoAviso.value;

    var idAvisoVar = idAviso;
    var textoAvisoVar = textoAviso;

    if (idAviso == 0 || textoAviso == "") {
        alert("Há informações incorretas, verifique se todos os campos estão preenchidos.")
    } else {
        fetch("./avisos/avisar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                idAvisoServer: idAvisoVar,
                textoAvisoServer: textoAvisoVar
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {

                alert("Formulário cadastrado com sucesso!");
                ipt_idAviso.value = '';
                ipt_textoAviso.value = '';

            } else {
                alert("Houve um erro ao tentar cadastrar os dados!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    }
}


function buscarPeloId() {
    fetch(`/usuarios/${buscaInput.value}`, {
        method: "GET"
    })
        .then(res => {
            res.json().then(json => {
                const usuario = json[0];
                console.log(json[0])
                containerDoc.innerHTML = `<br><div>
    <h1 id='anoDoc'>Ano do documento: ${usuario.ano} </h1>
    <img src='assets/${usuario.arquivo}' alt="Relatório">
  </div>`
            })
        })
        .catch(err => {
            console.log(err);
        })
}

function enviar() {
    var ano = Number(ipt_ano.value)
    var nAtividade = Number(ipt_nAtividades.value);
    var nSocio = Number(ipt_nSocio.value);
    var nHomem = Number(ipt_nHomem.value);
    var nMulher = Number(ipt_nMulher.value);
    var nJuvenil = Number(ipt_nJuvenil.value);
    var nJovem = Number(ipt_nJovem.value);
    var nAdulto = Number(ipt_nAdulto.value);
    erroValidar = false;

    var nAtividadeVar = nAtividade;
    var nSocioVar = nSocio;
    var nHomemVar = nHomem;
    var nMulherVar = nMulher;
    var nJuvenilVar = nJuvenil;
    var nJovemVar = nJovem;
    var nAdultoVar = nAdulto;
    var anoVar = ano;

    returnErroValidar = validar(ano, nAtividade, nSocio, nHomem, nMulher, nJuvenil, nJovem, nAdulto, erroValidar)

    if (returnErroValidar) {
        alert("Insira corretamente os dados!")
    } else {

        ipt_ano.value = '';
        ipt_nAtividades.value = '';
        ipt_nSocio.value = '';
        ipt_nHomem.value = '';
        ipt_nMulher.value = '';
        ipt_nJuvenil.value = '';
        ipt_nJovem.value = '';
        ipt_nAdulto.value = '';

        ipt_ano.style = 'border-color: black'

        ipt_nAtividades.style = 'border-color: black'
        ipt_nSocio.style = 'border-color: black'
        ipt_nHomem.style = 'border-color: black'
        ipt_nMulher.style = 'border-color: black'
        ipt_nJuvenil.style = 'border-color: black'
        ipt_nJovem.style = 'border-color: black'
        ipt_nAdulto.style = 'border-color: black'





        fetch("./grafico/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                anoServer: anoVar,
                nAtividadeServer: nAtividadeVar,
                nSocioServer: nSocioVar,
                nHomemServer: nHomemVar,
                nMulherServer: nMulherVar,
                nJuvenilServer: nJuvenilVar,
                nJovemServer: nJovemVar,
                nAdultoServer: nAdultoVar
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {


                alert("Formulário cadastrado com sucesso!");

            } else {
                alert("Houve um erro ao tentar cadastrar os dados!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    }







}


function validar(ano, nAtividade, nSocio, nHomem, nMulher, nJuvenil, nJovem, nAdulto, erroValidar) {
    if (ano == "") {
        erroValidar = true;
        ipt_ano.style = 'border-color: red'
    }
    if (nAtividade == "") {
        erroValidar = true;
        ipt_nAtividades.style = 'border-color: red'
    }

    if (nSocio == "") {
        erroValidar = true;
        ipt_nSocio.style = 'border-color: red'

    }

    if (nHomem == "") {
        erroValidar = true;
        ipt_nHomem.style = 'border-color: red'

    }

    if (nMulher == "") {
        erroValidar = true;
        ipt_nMulher.style = 'border-color: red'

    }

    if (nJuvenil == "") {
        erroValidar = true;
        ipt_nJuvenil.style = 'border-color: red'

    }

    if (nJovem == "") {
        erroValidar = true;
        ipt_nJovem.style = 'border-color: red'

    }
    if (nAdulto == "") {
        erroValidar = true;
        ipt_nAdulto.style = 'border-color: red'
    }
    return erroValidar
}