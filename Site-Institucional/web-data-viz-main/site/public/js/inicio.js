// Botão para saber mais sobre a federação
 function maisSobre(){
    window.location.href ="upa.html"
 }



//Função de mudar a diretoria com base no ano 
function diretoriaAno(){

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
function enviar(){
var nome = ipt_nome.value;
var email = ipt_email.value;
var telefone = ipt_telefone.value;
var mensagem = ipt_mensagem.value;
var erro = false;
    
    validar(nome,email,telefone, mensagem)
}

function validar (nome,email,telefone,mensagem) {

    
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