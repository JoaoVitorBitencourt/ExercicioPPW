const express = require('express');
const app = express();
const PORTA = process.env.PORT||8080;
const dados = require('./gerador_jogador.json');

function gera_jogador(idade) {
    var texto;
    if (idade > 16) {
        texto = "novato";
    } if (idade > 21) {
        texto = "profissional";
    } if (idade > 28) {
        texto_ = "veterano";
    } if (idade > 34) {
        texto = "master";
    }
    let ger_nome = Math.floor(Math.random() * (0 + 18) + 0);
    let ger_sob = Math.floor(Math.random() * (0 + 28) + 0);
    let ger_pos = Math.floor(Math.random() * (0 + 8) + 0);
    let ger_clube = Math.floor(Math.random() * (0 + 20) + 0);
    let mensagem_jogador = `${dados.nome[ger_nome]} ${dados.sobrenome[ger_sob]} é um futebolista brasileiro de ${texto} anos que atua como ${dados.posicao[ger_pos]}. Atualmente defende o ${dados.clube[ger_clube]}.`;
    return mensagem_jogador;
}

app.use('/gerador', function (req, res) {
    var idade = req.query.filtro;
    /*var objeto = {
        nome: dados.nome[ger_nome],
        sobrenome: dados.sobrenome[ger_sob],
        idade: texto,
        posicao: dados.posicao[ger_pos],
        clube: dados.clube[ger_clube],
        mensagem: mensagem_jogador

    }*/
    res.send(gera_jogador(idade));
});

app.listen(PORTA, () => {
    console.log(`Rodando na porta ${PORTA}`);
});
