const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/messages', async (req, res) => {
    console.log('Consultando mensagens');
    const dados = await database.container('CTA').items.readAll().fetchAll();
    res.json(dados);
})

app.post('/previsao', (req, res) => {
    console.log('Consultando previsão');
    res.send("Sem Chuva");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const { CosmosClient } = require("@azure/cosmos");

const key = 'MLHgF67CEd6TETteHsRbgPb67QClb7CUsZgTfC50mdcS4XwtUcoeJEOnO6nB4yIxnXdt5WKNf0egACDbeE7HsA==';
const endpoint = 'https://pwm-sjc.documents.azure.com:443';

console.log("Conectando ao Cosmos DB");

const cosmosClient = new CosmosClient({ endpoint, key });
console.log("Conectando ao Cosmos DB - OK");

const databaseName = 'sjc';

console.log("Referenciando Database");
const database = cosmosClient.database(databaseName);
console.log("Referenciando Database - OK");

