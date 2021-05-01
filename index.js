import express from 'express';
import axios from 'axios';

const api = axios.create();
const app = express();
const PORTA = process.env.PORT || 8080;

async function geraCarro() {
    let resposta = await axios.get('http://fipeapi.appspot.com/api/1/carros/veiculos/10.json');
    let data = resposta.data;
    return data;
}

app.use('/', function (req, res) {
    let id = req.query.id;
    let carro = geraCarro();
    carro.then(resposta => {
        resposta.forEach(element => {
            if(element.id == id){
                console.log(element.fipe_name);
                res.send(element.fipe_name); 
            }
        });
        
    })
});

app.listen(PORTA, () => {
    console.log(`Rodando na porta ${PORTA}`);
});