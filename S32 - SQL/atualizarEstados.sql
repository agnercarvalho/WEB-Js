update estados
set nome = 'Maranhão'
where sigla = 'MA'

select nome from estados where sigla = 'MA'

select estados.nome from estados where sigla = 'ES'

update estados set nome = 'Paraná', populacao = 11.32 where sigla = 'PR'

select nome, sigla, populacao from estados where sigla = 'PR'
