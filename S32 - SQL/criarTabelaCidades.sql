create table if not exists cidades(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);
-- DECIMAL DE 2 DIGITOS ONDE 2 DE 10 SÃO DECIMAIS
-- chave estrangeira é a id (PK) da tabela estados na coluna id

create table if not exists teste(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

drop table if exists teste;