
const db = require("./db"); // Importa a conexão com o BD PostgreSQL
const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1"
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Concurso não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro interno do servidor" });
    }
});


router.get("/:concurso", async (req, res) => {
    const concurso = parseInt(req.params.concurso);
    try {
        const result = await db.query(
            "SELECT * FROM megasena WHERE concurso = $1",
            [concurso]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Concurso não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro interno do servidor" });
    }
});






// Rota para inserir um novo registro na tabela
router.post("/megasena", async function (req, res) {
    try {
        const result = await db.query(
            `
            INSERT INTO megasena (
                concurso, data_do_sorteio, bola1, bola2, bola3, bola4, bola5, bola6,
                ganhadores_6_acertos, cidade_uf, rateio_6_acertos,
                ganhadores_5_acertos, rateio_5_acertos,
                ganhadores_4_acertos, rateio_4_acertos,
                acumulado_6_acertos, arrecadacao_total, estimativa_premio,
                acumulado_sorteio_especial_mega_da_virada, observacao
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20
            )
            RETURNING *
        `,
            [
                2900,
                "2025-05-31T03:00:00.000Z",
                11,
                22,
                33,
                44,
                55,
                60,
                0,
                null,
                "0",
                29,
                "62629.59",
                2724,
                "952.51",
                "6804650.96",
                "31185375",
                "11000000",
                "47003551.11",
                null,
            ]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Rota não encontrada' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ erro: "Dados incompletos" });

    }
});

// Rota para atualizar um concurso específico
router.put("/1", async function (req, res) {
    try {
        const result = await db.query(
            `
  UPDATE megasena SET
    concurso = $1,
    data_do_sorteio = $2,
    bola1 = $3,
    bola2 = $4,
    bola3 = $5,
    bola4 = $6,
    bola5 = $7,
    bola6 = $8,
    ganhadores_6_acertos = $9,
    cidade_uf = $10,
    rateio_6_acertos = $11,
    ganhadores_5_acertos = $12,
    rateio_5_acertos = $13,
    ganhadores_4_acertos = $14,
    rateio_4_acertos = $15,
    acumulado_6_acertos = $16,
    arrecadacao_total = $17,
    estimativa_premio = $18,
    acumulado_sorteio_especial_mega_da_virada = $19,
    observacao = $20
  WHERE concurso = $1
  RETURNING *
`,
            [
                1,
                "1996-03-11T03:00:00.000Z",
                4,
                5,
                30,
                33,
                41,
                52,
                0,
                null,
                "0",
                17,
                "39158.92",
                2016,
                "952.51",
                "1714650.23",
                "0",
                "0",
                "0",
                null,
            ]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Rota não encontrada' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: "Erro ao atualizar dados" });
    }
});

router.delete("/:concurso", async (req, res) => {
    const concurso = parseInt(req.params.concurso);

    try {
        const result = await db.query(
            "DELETE FROM megasena WHERE concurso = $1",
            [concurso]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Rota não encontrado' });
        }

        res.json({ mensagem: `Concurso ${concurso} excluído com sucesso.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao excluir concurso' });
    }
});


// Exporta o router para ser usado no servidor principal
module.exports = router;
