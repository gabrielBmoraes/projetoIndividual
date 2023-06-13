var graficoModel = require("../models/graficoModel");

function dadosGraficos(req, res) {
  console.log(req.params.id);
  graficoModel.dadosGraficos(req.params.id)
      .then(resultado => {
          res.json(resultado);
      }).catch(err => {
          res.status(500).send(err);
      });
}



function cadastrar(req, res) {
  var ano = req.body.anoServer;
  var Atividade = req.body.nAtividadeServer;
  var Socio = req.body.nSocioServer;
  var Homem = req.body.nHomemServer;
  var Mulher = req.body.nMulherServer;
  var Juvenil = req.body.nJuvenilServer;
  var Jovem = req.body.nJovemServer;
  var Adulto = req.body.nAdultoServer;



    graficoModel.cadastrar(ano,Atividade, Socio, Homem, Mulher, Juvenil, Jovem, Adulto)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }


module.exports = {
  dadosGraficos,
  cadastrar
}