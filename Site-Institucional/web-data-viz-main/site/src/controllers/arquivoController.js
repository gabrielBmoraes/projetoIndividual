const usuarioModel = require('../models/arquivoModel');


function salvar(req, res) {
  const imagem = req.file.filename;
  console.log(req.params.id);
  usuarioModel.salvar(req.params.id)

  usuarioModel.salvar(usuario)
  .then(resultado => {
    res.status(201).send("Arquivo salvo com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

// function buscarUsuarioPeloId(req, res) {
//   console.log(req.params.id);
//   usuarioModel.buscarUsuarioPeloId(req.params.id)
//   .then(resultado => {
//     res.json(resultado);
//   }).catch(err => {
//     res.status(500).send(err);
//   });
// }

module.exports = {salvar}