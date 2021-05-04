import express from 'express';
import axios from 'axios';

const app = express();
const PORTA = process.env.PORT || 8080;

async function geraCarro() {
    let resposta = await axios.get('http://fipeapi.appspot.com/api/1/carros/veiculos/21.json');
    let data = resposta.data;
    return data;
}

app.use('/', function (req, res) {
    let carro = geraCarro();
    carro.then(resposta => {
        let count = 0;
        resposta.forEach(element => {
            count ++;
        });
        let index = Math.floor(Math.random() * (count - 0) + 0);
        res.send("Gerador de carros da FIAT: " + resposta[index].name)
    })
});

app.listen(PORTA, () => {
    console.log(`Rodando na porta ${PORTA}`);
});