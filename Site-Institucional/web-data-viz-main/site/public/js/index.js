 


fetch(`/grafico/dadosGraficos`, {
    method: "POST"
})
    .then(res => {
        res.json().then(json => {
            for(var i = 0; i <= json.length -1; i++){
                console.log(i)
                console.log(json[i])
                graficoAtividades.data.datasets[0].data.push(json[i].nAtividades)
                graficoAtividades.data.labels.push(json[i].ano)
                graficoAtividades.update()

                graficoSocios.data.datasets[0].data.push(json[i].nSocio)
                graficoSocios.data.labels.push(json[i].ano)
                graficoSocios.update()

                graficoSexos.data.datasets[0].data.push(json[i].nHomem)
                graficoSexos.data.datasets[1].data.push(json[i].nMulher)
                graficoSexos.data.labels.push(json[i].ano)
                graficoSexos.update()

                if (i == json.length -1) {
                    graficoIdades.data.datasets[0].data.push(json[i].nJuvenil)
                    graficoIdades.data.datasets[0].data.push(json[i].nJovem)
                    graficoIdades.data.datasets[0].data.push(json[i].nAdulto)
                    graficoIdades.update()
                }
            }
            
        })

    })
    .catch(err => {
        console.log(err);
    })





// Botão para saber mais sobre a federação
function maisSobre() {
    window.location.href = "upa.html"
}



//Função de mudar a diretoria com base no ano 
function diretoriaAno() {

    if (listaAno.value == 1) {
        alert('2023')
        diretoria2023.style.display = 'flex';
        diretoria2022.style.display = 'none';
    }

    if (listaAno.value == 2) {
        alert("foi")
        diretoria2023.style.display = "none";
        diretoria2022.style.display = 'flex';
    }
}


// Função de mandar a mensagem
function enviar() {
    var nome = ipt_nome.value;
    var email = ipt_email.value;
    var telefone = ipt_telefone.value;
    var mensagem = ipt_mensagem.value;
    var erro = false;

    validar(nome, email, telefone, mensagem)
}

function validar(nome, email, telefone, mensagem) {


    if (nome == "") {
        erro = true;
        ipt_nome.style = 'border-color: red'
        vNome.style.display = 'block';
    }
    if (email == "") {
        erro = true;
        ipt_email.style = 'border-color: red'
        vEmail.style.display = 'block';
    }
    if (telefone == "") {
        erro = true;
        ipt_telefone.style = 'border-color: red'
        vTelefone.style.display = 'block';
    }
    if (mensagem == "") {
        erro = true;
        alert("Por favor, insira uma mensagem.")
        ipt_mensagem.style = 'border-color: red'
    }

    if (acordoTermos.checked == false) {
        erro = true;
        vBox.style.display = 'block';
    }
}



function enviar() {
    var nAtividade = Number(ipt_nAtividades.value);
    var nSocio = Number(ipt_nSocio.value);
    var nHomem = Number(ipt_nHomem.value);
    var nMulher = Number(ipt_nMulher.value);
    var nJuvenil = Number(ipt_nJuvenil.value);
    var nJovem = Number(ipt_nJovem.value);
    var nAdulto = Number(ipt_nAdulto.value);
    var erroValidar = false;

    var nAtividadeVar = nAtividade;
    var nSocioVar = nSocio;
    var nHomemVar = nHomem;
    var nMulherVar = nMulher;
    var nJuvenilVar = nJuvenil;
    var nJovemVar = nJovem;
    var nAdultoVar = nAdulto;

    validar(nAtividade, nSocio, nHomem, nMulher, nJuvenil, nJovem, nAdulto, erroValidar)

    if (erroValidar) {
        alert("Insira corretamente os dados!")
    } else {

        fetch("./grafico/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
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