var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A COFIGURAÇÃO DO UPLOAD
var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarMensagem", function (req, res) {
  usuarioController.cadastrarMensagem(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

// router.post("/autenticarFed", function (req, res) {
//   usuarioController.autenticarFed(req, res);
// });

router.post("/avisos", function (req, res) {
  usuarioController.avisos(req, res);
});


router.get("", (req, res) => {
  res.render("telaUPA")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastro', upload.single('foto'), (req, res) => {
  usuarioController.salvar(req, res);
});

router.get('/:id', upload.single('foto'), (req, res) => {
  usuarioController.buscarUsuarioPeloId(req, res);
});

module.exports = router;