select e.nome Empresa,
    c.nome as `Cidade`
from empresas e,
    empresas_unidades eu,
    cidades c
where e.id = eu.empresa_id
    and c.id = eu.cidade_id
    and sede


-- SELECT - as colunas que quero como resultado
-- FROM - tabelas que usarei como referencia para fazer a relação
-- WHERE - condição: id da empresa for igual ao id da tabela empresa_unidades E o id da cidade for igual o id da tabela cidade E tiver uma sede