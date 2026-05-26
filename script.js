let pontosEticos = 0;

alert("Você está em um navio que está afundando. Há apenas 3 vagas restantes no bote salva-vidas.");

let escolha1 = prompt(
`Quem você salva primeiro?

A) Uma médica que pode salvar vidas
B) Uma criança de 8 anos
C) Um idoso de 80 anos`
);

if (escolha1.toUpperCase() === "A") {
    pontosEticos += 2;
    alert("Você escolheu a médica.");
} else if (escolha1.toUpperCase() === "B") {
    pontosEticos += 1;
    alert("Você escolheu a criança.");
} else {
    alert("Você escolheu o idoso.");
}

let escolha2 = prompt(
`Agora resta apenas uma vaga.

A) Uma mãe com um bebê
B) Um cientista próximo de descobrir a cura de uma doença`
);

if (escolha2.toUpperCase() === "A") {
    pontosEticos += 1;
    alert("Você escolheu a mãe com o bebê.");
} else {
    pontosEticos += 2;
    alert("Você escolheu o cientista.");
}

alert("Durante a evacuação, uma tempestade se aproxima.");

let escolha3 = prompt(
`Você percebe que o bote está pesado.

A) Arriscar todos e manter todos a bordo
B) Retornar para buscar mais pessoas depois`
);

if (escolha3.toUpperCase() === "A") {
    pontosEticos += 1;
    alert("Você decidiu não abandonar ninguém.");
} else {
    pontosEticos += 2;
    alert("Você decidiu maximizar as chances de sobrevivência.");
}

alert("Fim da história.");

if (pontosEticos >= 5) {
    alert("Sua tomada de decisão foi mais utilitarista: priorizou quem poderia gerar maior benefício para a sociedade.");
} else if (pontosEticos >= 3) {
    alert("Suas escolhas equilibraram utilidade social e valor individual da vida.");
} else {
    alert("Suas decisões priorizaram a igualdade e a dignidade de cada indivíduo.");
}
