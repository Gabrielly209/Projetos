CREATE TABLE focos_calor (
 id_focos_calor SERIAL PRIMARY KEY,
 estado VARCHAR(20) NOT NULL,
 bioma VARCHAR(15) NOT NULL,
 data_ocorrencia DATETIME,
);

INSERT INTO focos_calor (id_focos_calor, estado, bioma, data_ocorrencia) VALUES
(1, 'Amazonas', 'Amazônia', '2025-02-01’),
(2, 'Mato Grosso', 'Cerrado', '2025-02-03’),
(3, 'Pará', 'Amazônia', '2025-02-05');

SELECT * FROM focos_calor WHERE estado = 'Amazonas';

SELECT estado, bioma, COUNT(*) AS total_focos
FROM focos_calor
GROUP BY estado, bioma
ORDER BY estado, total_focos DESC;

SELECT * FROM focos_calor WHERE data_ocorrencia = '2025-02-03';
