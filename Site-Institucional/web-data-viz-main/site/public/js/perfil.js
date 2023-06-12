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
    var nAtividade = Number(ipt_nAtividades.value);
    var nSocio = Number(ipt_nSocio.value);
    var nRandom = Number(ipt_nRandom.value);
    var nJuvenil = Number(ipt_nJuvenil.value);
    var nJovem = Number(ipt_nJovem.value);
    var nAdulto = Number(ipt_nAdulto.value);
    var erroValidar = false;
    
    validar(nAtividade,nSocio,nRandom,nJuvenil,nJovem,nAdulto, erroValidar)
  }

function validar(nAtividade,nSocio,nRandom,nJuvenil,nJovem,nAdulto, erroValidar) {
    if (nAtividade == "") {
        erroValidar = true;
        ipt_nAtividades.style = 'border-color: red'
    }

    if (nSocio == "") {
        erroValidar = true;
        ipt_nSocio.style = 'border-color: red'
    
    }

    if (nRandom == "") {
        erroValidar = true;
        ipt_nRandom.style = 'border-color: red'
       
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

    if (erroValidar) {
        alert("Insira corretamente os dados!")
    }

}