


fetch(`/grafico/dadosGraficos`, {
    method: "POST"
})
    .then(res => {
        res.json().then(json => {
            for (var i = 0; i <= json.length - 1; i++) {
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

                if (i == json.length - 1) {
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
    window.location.href = "https://upa.org.br/"
}



//Função de mudar a diretoria com base no ano 
function diretoriaAno() {

    if (listaAno.value == 1) {

        diretoria2023.style.display = 'flex';
        diretoria2022.style.display = 'none';
    }

    if (listaAno.value == 2) {

        diretoria2023.style.display = "none";
        diretoria2022.style.display = 'flex';
    }
}



// Função de mandar a mensagem
var erro = false
function enviar() {
    var nome = ipt_nome.value;
    var email = ipt_email.value;
    var telefone = ipt_telefone.value;
    var mensagem = ipt_mensagem.value;
    erro = false;

    ipt_nome.style = 'border-color: black'
    ipt_email.style = 'border-color: black'
    ipt_telefone.style = 'border-color: black'
    ipt_mensagem.style = 'border-color: black'

    vNome.style.display = 'none';
    vEmail.style.display = 'none';
    vTelefone.style.display = 'none';
    vBox.style.display = 'none';


    validar(nome, email, telefone, mensagem)

    if (erro == false) {

        salvarMensagem(nome, email, telefone, mensagem)
    }


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



function salvarMensagem(nome, email, telefone, mensagem) {
    var nomeVar = nome;
    var emailVar = email;
    var telefoneVar = telefone;
    var mensagemVar = mensagem;

    fetch("./usuarios/cadastrarMensagem", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            telefoneServer: telefoneVar,
            mensagemServer: mensagemVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {


            alert("Mensagem enviada com sucesso!");

            ipt_nome.value = '';
            ipt_email.value = '';
            ipt_telefone.value = '';
            ipt_mensagem.value = '';

         

        } else {
            alert("Houve um erro ao tentar mandar a mensagem!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    
}