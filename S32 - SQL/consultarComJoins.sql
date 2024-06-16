select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

SELECT * from cidades c LEFT JOIN prefeitos p on c.id = p.cidade_id;
-- mostra todas as cidades ta tabela cidades + o inner dos ids (intecessão - linhas de prefeitos que tem um id de cidades registrados) 

SELECT * from cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;

--SIMULANDO FULL JOIN (NÃO TEM NO MYSQL)

SELECT * from cidades c LEFT JOIN prefeitos p on c.id = p.cidade_id
UNION
SELECT * from cidades c RIGHT JOIN prefeitos p on c.id = p.cidade_id;