var database = require("../database/config");

function dadosGraficos() {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUsuarioPeloId():");
  let instrucao = `select * from grafico`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrar(ano,Atividade, Socio, Homem, Mulher, Juvenil, Jovem, Adulto) {
  
  instrucaoSql = `insert into grafico (ano,nAtividades, nSocio, nHomem, nMulher, nJuvenil, nJovem, nAdulto) values (${ano},${Atividade}, ${Socio}, ${Homem}, ${Mulher}, ${Juvenil}, ${Jovem}, ${Adulto})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  dadosGraficos,
  cadastrar
}
