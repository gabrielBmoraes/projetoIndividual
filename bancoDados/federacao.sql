create database bancoFederacao;
use bancoFederacao;


create table tesouraria (
idTesouraria int primary key auto_increment, 
saldo decimal(6,2)
);


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


create table grafico(
idGrafico int primary key auto_increment,
fkFed int,
nAtividades int,
nSocio int,
nUndefined int,
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


insert into federacao(email,senha, fkTesouraria) values ('federacaoSA@gmail.com','12345');

select * from federacao;

select * from upa;
select * from arquivo;
insert into arquivo values (null, 1, 2023, null);
update upa set aviso = null where idUpa = 1;
update upa set aviso = "Você ainda não entregou o relatório" where idUpa = 1;






insert into upa (email,senha) values ('itapuan@gmail.com', '12345');

insert into arquivo(arquivo) values ('loren');





