const respostasCorretas = {
    q1: "b",
    q2: "a",
    q3: "b",
    q4: "c",
    q5: "c"
};

function verificarRespostas() {
    const form = document.getElementById("quizForm");
    let pontuacao = 0;

    document.querySelectorAll('.icon').forEach(icon => icon.remove());
    document.querySelectorAll('.correct, .incorrect').forEach(el => {
        el.classList.remove('correct', 'incorrect');
    });

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.disabled = true;
    })

    for (let q in respostasCorretas) {
        const respostaCorreta = respostasCorretas[q];
        const inputs = document.getElementsByName(q);
        let respostaSelecionadaParaQuestao = null;

        inputs.forEach(input => {
            if (input.checked) {
                respostaSelecionada = input.value;
            }
        });

        inputs.forEach(input => {
            const label = input.parentElement;
            const choiceText = label.querySelector('.choice-text');
            const iconSpan = document.createElement('span');
            iconSpan.classList.add('icon');


            if (input.value === respostaCorreta) {
                label.classList.add("correct");
                iconSpan.innerHTML = '✔️';
            }

            if (input.checked) {
                respostaSelecionadaParaQuestao = input.value;
                if (input.value !== respostaCorreta) {
                    label.classList.add("incorrect");
                    iconSpan.innerHTML = '❌';
                }
            } if (!label.querySelector('.icon')) {
                label.appendChild(iconSpan);
            }
        });

        if (respostaSelecionadaParaQuestao === respostasCorretas[q]) {
            pontuacao++;
        }
    }

    document.getElementById("resultado").innerText =
        `Você acertou ${pontuacao} de 5 questões!`;
};
