var express = require("express");
var router = express.Router();
var graficoController = require("../controllers/graficoController");

router.post("/dadosGraficos", function (req, res) {
  graficoController.dadosGraficos(req, res);
});

router.post("/cadastrar", function (req, res) {
  graficoController.cadastrar(req, res);
})

module.exports = router;