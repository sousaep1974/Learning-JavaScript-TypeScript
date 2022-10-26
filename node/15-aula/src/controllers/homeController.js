exports.paginaInicial = (req, res, next) => {
    req.session.usuario = { nome: 'Edivan', logado: true };
    req.flash('info', 'Olá mundo')
    req.flash('error', 'LALALA')
    req.flash('info', 'BLAAAAAAAAAAA')
    res.render('index');
};

exports.trataPost = (req, res, next) => {
    res.send(req.body);
};