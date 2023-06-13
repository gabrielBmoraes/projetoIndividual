var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var Atividade = req.body.nAtividadeServer;
  var Socio = req.body.nSocioServer;
  var Homem = req.body.nHomemServer;
  var Mulher = req.body.nMulherServer;
  var Juvenil = req.body.nJuvenilServer;
  var Jovem = req.body.nJovemServer;
  var Adulto = req.body.nAdultoServer;



    aquarioModel.cadastrar(Atividade, Socio, Homem, Mulher, Juvenil, Jovem, Adulto)
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
  buscarAquariosPorUsuario,
  cadastrar
}