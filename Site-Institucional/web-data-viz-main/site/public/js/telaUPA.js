function enviar() {
  const formData = new FormData();
  formData.append('foto', foto.files[0])
  formData.append('nome', nome.value)
  formData.append('email', email.value)

  fetch("/usuarios/cadastro", {
    method: "POST",
    body: formData
  })
    .then(res => {
      console.log ("entrei no then")
      // setTimeout(() => {
      //   window.location = "./perfil.html"
      // }, 000);
    })
    .catch(err => {
      console.log(err);
    })
}