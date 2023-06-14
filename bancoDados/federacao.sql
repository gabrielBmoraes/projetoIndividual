create database bancoFederacao;
use bancoFederacao;



create table federacao (
idFed int primary key auto_increment,
email varchar(45),
senha varchar(45)
); 

create table upa (
idUpa int primary key auto_increment,
email varchar(45),
senha varchar(45),
aviso varchar(45),
fkFed int,
foreign key(fkFed) references federacao(idFed)
);

create table contato(
idContato int primary key auto_increment,
nome varchar(45),
email varchar(100),
telefone char(11),
mensagem varchar(250)
);



create table grafico(
idGrafico int primary key auto_increment,
ano int,
fkFed int,
nAtividades int,
nSocio int,
nHomem int,
nMulher int,
nJuvenil int,
nJovem int,
nAdulto int,
foreign key (fkFed) references federacao(idFed)
);


create table arquivo (
idArquivo int primary key auto_increment,
fkUpa int,
ano int,
arquivo varchar(255),
foreign key(fkUpa) references upa (idUpa)
);


insert into federacao(email,senha) values ('federacao@gmail.com','12345');

insert into grafico values 
(null,2019, 1, 20, 90, 40, 60, 30, 40, 20), (null, 2020,1, 15, 60, 40, 20, 15, 20, 5),
(null,2021, 1, 12, 70, 30, 50, 20, 40, 30), (null,2022, 1, 26, 95, 50, 45, 25, 50, 20);


-- truncate federacao;
-- truncate grafico;
-- truncate upa;



 select * from federacao;
-- select * from grafico;
select * from upa;
-- select * from arquivo;




