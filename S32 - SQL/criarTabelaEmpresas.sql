create table if not exists empresas(
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cnpj int unsigned,
    primary key (id),
    unique key (cnpj)
)

-- na relação muitos pra muitos é necessário criar uma tabela que seja responsável por fazer as relações. dentro da tabelas tabelas empresas e cidades não possui nenhuma informação que relacione as duas


-- tabela cidade_empresas
create table if not exists empresas_unidades (
    empresa_id int unsigned not null,
    cidade_id int unsigned not null,
    sede tinyint(1) not null,
    primary key (empresa_id, cidade_id)
)

-- TINYINT(1) - inteiro com 1 casa