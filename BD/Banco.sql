create database SaborCaseiro;

use SaborCaseiro;

create table tbl_cardapio(
cod_marmita int unsigned auto_increment primary key,
nome_marmita varchar(100) not null,
valor_marmita float(20) not null,
descricao varchar (250) not null

);

drop database SaborCaseiro;