exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este será o <span style="color:red">título</span>',
        numeros: [0, 1, 2, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
};