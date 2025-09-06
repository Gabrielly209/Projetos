SELECT id_cliente, nome, cidade FROM cliente;

SELECT titulo, ano_lancamento 
FROM jogo
WHERE ano_lancamento > 2020;

SELECT SUM(quantidade) AS total_jogos_vendidos
FROM compra_jogo;
