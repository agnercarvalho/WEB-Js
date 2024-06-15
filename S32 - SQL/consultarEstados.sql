SELECT * from estados  -- retorna a tabela toda

select sigla,nome from estados

select sigla as 'Sigla', nome as 'Nome do Estado' from estados

select 
    sigla as 'Sigla',
    nome as 'Nome do Estado'
from estados
where regiao = 'Sul' -- coloca Label na coluna

select nome, regiao, populacao from estados
where populacao >= 10
order by populacao desc

-- ordena pela população, comportamento padrão é ordem crescente (desc faz decrescente)