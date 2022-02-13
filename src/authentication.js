const express = require('express')
const app = express()

//routs
app.get('/', (req, res) => {
    res.send('Chamando desde GET');
})

app.get('/login/oauth2/code/github', (req, res) => {
    res.send('Deveria ter funcionado');
})

app.listen(5500, () => {
    console.log('Estamos executando a app na porta 5500');
})