INSERT INTO loja (nome, cidade) VALUES 
('GameWorld SP', 'São Paulo'),
('Arena Gamer RJ', 'Rio de Janeiro'),
('XP Gaming BH', 'Belo Horizonte');

INSERT INTO cliente (nome, email, cidade) VALUES
('Ana Souza', 'ana.souza@email.com', 'São Paulo'),
('Carlos Lima', 'carlos.lima@email.com', 'Rio de Janeiro'),
('Beatriz Melo', 'beatriz.melo@email.com', 'Curitiba');

INSERT INTO jogo (titulo, ano_lancamento, genero) VALUES
('Cyber Quest', 2021, 'RPG'),
('BattleZone X', 2019, 'Ação'),
('Soccer Pro 2023', 2023, 'Esporte');

INSERT INTO compra (data_compra, id_cliente, id_loja) VALUES
('2025-09-01', 1, 1), 
('2025-09-02', 2, 2);  

INSERT INTO compra_jogo (id_compra, id_jogo, quantidade) VALUES
(1, 1, 1),  
(1, 3, 2);  

INSERT INTO compra_jogo (id_compra, id_jogo, quantidade) VALUES
(2, 2, 1), 
(2, 3, 1);
