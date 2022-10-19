const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <form action = "/" method = "POST"> 
    NOME: <input type="text" name="nome">
    SOBRENOME: <input type="text" name="sobrenome"><br>
    <button>Enviar</button></form>`
    );
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recebi o formulário: ${req.body.nome} ${req.body.sobrenome}`);
});

app.get('/teste/:idUsers?/:parametros?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.Facebook);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});