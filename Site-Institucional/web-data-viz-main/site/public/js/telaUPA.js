fetch(`/usuarios/avisos`, {
  method: "GET"
})
  .then(res => {
    res.json().then(json => {
      const avisos = json[0];
      console.log(json[0])

      if (avisos.aviso == null) {
        avisos.aviso = "nenhum aviso foi encontrado :)"
      }
      div_avisoMensagem.innerHTML = ` <b>${avisos.aviso}</b>`
    })
  })
  .catch(err => {
    console.log(err);
  })






function enviar() {
  const formData = new FormData();
  formData.append('foto', foto.files[0])
  formData.append('ano', ano.value)

  fetch("/usuarios/cadastro", {
    method: "POST",
    body: formData
  })
    .then(res => {
      div_status.innerHTML = 'Concluido'
      div_status.style = 'background-color: green'
      // setTimeout(() => {
      //   window.location = "./perfil.html"
      // }, 000);
    })
    .catch(err => {
      console.log(err);
    })
}