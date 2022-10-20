exports.paginaInicial = (req, res) => {
    res.send(`
    <form action = "/" method = "POST"> 
    NOME: <input type="text" name="nome">
    SOBRENOME: <input type="text" name="sobrenome"><br>
    <button>Enviar</button></form>`
    );
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou a sua nova rota de POST.');
};